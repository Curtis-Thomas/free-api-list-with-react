import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ApiEntrySchema } from "./schema.js";
import { loadCatalog, CatalogValidationError } from "./load.js";

const VALID_ENTRY = {
  id: "test-api",
  name: "Test API",
  description: "A test API entry used to validate the catalog schema and loader.",
  category: "animals",
  difficulty: "beginner",
  baseUrl: "https://example.com/api",
  documentationUrl: "https://example.com/docs",
  auth: { required: false, type: "none" },
  endpoints: [{ path: "/things", method: "GET", description: "List things" }],
  tags: ["test"],
  cors: "yes",
  https: true,
  pricing: "free",
  addedAt: "2024-01-15",
};

const CATEGORIES = [
  { id: "animals", label: "Animals" },
  { id: "books", label: "Books" },
];

function setupTempCatalog(entries: Array<{ filename: string; content: unknown }>) {
  const root = mkdtempSync(join(tmpdir(), "catalog-test-"));
  const apisDir = join(root, "apis");
  writeFileSync(join(root, "categories.json"), JSON.stringify(CATEGORIES, null, 2));
  // create apis dir
  // node:fs doesn't have a mkdir wrapper imported here, so use writeFileSync placeholder
  // actually we need a directory:
  // We'll lazy-import to keep the top-level imports tidy.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return { root, apisDir };
}

describe("ApiEntrySchema", () => {
  it("accepts a valid entry", () => {
    const result = ApiEntrySchema.safeParse(VALID_ENTRY);
    expect(result.success).toBe(true);
  });

  it("rejects an entry with a non-kebab-case id", () => {
    const bad = { ...VALID_ENTRY, id: "Test_API" };
    const result = ApiEntrySchema.safeParse(bad);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.path).toEqual(["id"]);
    }
  });

  it("rejects an invalid baseUrl", () => {
    const bad = { ...VALID_ENTRY, baseUrl: "not a url" };
    const result = ApiEntrySchema.safeParse(bad);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.path).toEqual(["baseUrl"]);
    }
  });

  it("rejects a description shorter than 20 characters", () => {
    const bad = { ...VALID_ENTRY, description: "too short" };
    const result = ApiEntrySchema.safeParse(bad);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.path).toEqual(["description"]);
    }
  });

  it("rejects an entry missing endpoints", () => {
    const bad = { ...VALID_ENTRY, endpoints: [] };
    const result = ApiEntrySchema.safeParse(bad);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.path).toEqual(["endpoints"]);
    }
  });

  it("rejects an addedAt that is not a YYYY-MM-DD date", () => {
    const bad = { ...VALID_ENTRY, addedAt: "yesterday" };
    const result = ApiEntrySchema.safeParse(bad);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.path).toEqual(["addedAt"]);
    }
  });
});

describe("loadCatalog (real catalog)", () => {
  it("loads every API JSON in packages/catalog/apis cleanly", () => {
    const { apis, categories } = loadCatalog();
    expect(apis.length).toBeGreaterThan(0);
    expect(categories.length).toBeGreaterThan(0);
    const ids = new Set(apis.map((a) => a.id));
    expect(ids.size).toBe(apis.length);
  });

  it("every entry uses a category defined in categories.json", () => {
    const { apis, categories } = loadCatalog();
    const valid = new Set(categories.map((c) => c.id));
    for (const api of apis) {
      expect(valid.has(api.category), `${api.id} → ${api.category}`).toBe(true);
    }
  });
});

describe("loadCatalog (failure modes)", () => {
  let workdir: string;

  beforeAll(async () => {
    const { mkdirSync } = await import("node:fs");
    workdir = mkdtempSync(join(tmpdir(), "catalog-test-"));
    mkdirSync(join(workdir, "apis"));
    writeFileSync(join(workdir, "categories.json"), JSON.stringify(CATEGORIES, null, 2));
  });

  afterAll(() => {
    rmSync(workdir, { recursive: true, force: true });
  });

  it("throws a clear error when a file is invalid JSON", () => {
    const apisDir = join(workdir, "apis");
    const file = join(apisDir, "broken.json");
    writeFileSync(file, "{ this is not json");
    expect(() => loadCatalog({ apisDir, categoriesFile: join(workdir, "categories.json") })).toThrow(
      CatalogValidationError,
    );
    rmSync(file);
  });

  it("throws when filename does not match the id", () => {
    const apisDir = join(workdir, "apis");
    const file = join(apisDir, "mismatch.json");
    writeFileSync(file, JSON.stringify({ ...VALID_ENTRY, id: "actual-id" }));
    expect(() => loadCatalog({ apisDir, categoriesFile: join(workdir, "categories.json") })).toThrow(
      /filename implies/,
    );
    rmSync(file);
  });

  it("throws when category is not in categories.json", () => {
    const apisDir = join(workdir, "apis");
    const file = join(apisDir, "weird.json");
    writeFileSync(
      file,
      JSON.stringify({ ...VALID_ENTRY, id: "weird", category: "not-a-real-category" }),
    );
    expect(() => loadCatalog({ apisDir, categoriesFile: join(workdir, "categories.json") })).toThrow(
      /not in categories\.json/,
    );
    rmSync(file);
  });
});
