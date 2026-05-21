import { readFileSync, readdirSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { ZodError } from "zod";
import { type ApiEntry, ApiEntrySchema, CategoriesFileSchema, type Category } from "./schema.js";

const HERE = dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = join(HERE, "..");

export const APIS_DIR = join(PACKAGE_ROOT, "apis");
export const CATEGORIES_FILE = join(PACKAGE_ROOT, "categories.json");

export class CatalogValidationError extends Error {
  readonly fileName: string;
  readonly issues: string[];
  constructor(fileName: string, issues: string[]) {
    super(`${fileName}: ${issues.join("; ")}`);
    this.name = "CatalogValidationError";
    this.fileName = fileName;
    this.issues = issues;
  }
}

function formatZodIssues(error: ZodError): string[] {
  return error.issues.map((issue) => {
    const path = issue.path.length === 0 ? "<root>" : issue.path.join(".");
    return `field \`${path}\` ${issue.message.toLowerCase()}`;
  });
}

export interface LoadCatalogOptions {
  apisDir?: string;
  categoriesFile?: string;
}

export interface LoadedCatalog {
  apis: ApiEntry[];
  categories: Category[];
}

export function loadCatalog(options: LoadCatalogOptions = {}): LoadedCatalog {
  const apisDir = options.apisDir ?? APIS_DIR;
  const categoriesFile = options.categoriesFile ?? CATEGORIES_FILE;

  const categories = loadCategories(categoriesFile);
  const categoryIds = new Set(categories.map((c) => c.id));

  const files = readdirSync(apisDir)
    .filter((f) => f.endsWith(".json"))
    .sort();

  const apis: ApiEntry[] = [];
  const seenIds = new Set<string>();

  for (const file of files) {
    const fullPath = join(apisDir, file);
    const raw = readFileSync(fullPath, "utf8");
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new CatalogValidationError(`apis/${file}`, [`is not valid JSON (${message})`]);
    }

    const result = ApiEntrySchema.safeParse(parsed);
    if (!result.success) {
      throw new CatalogValidationError(`apis/${file}`, formatZodIssues(result.error));
    }

    const entry = result.data;

    const expectedId = basename(file, ".json");
    if (entry.id !== expectedId) {
      throw new CatalogValidationError(`apis/${file}`, [
        `field \`id\` is "${entry.id}" but filename implies "${expectedId}"`,
      ]);
    }

    if (seenIds.has(entry.id)) {
      throw new CatalogValidationError(`apis/${file}`, [`duplicate id "${entry.id}"`]);
    }
    seenIds.add(entry.id);

    if (!categoryIds.has(entry.category)) {
      throw new CatalogValidationError(`apis/${file}`, [
        `field \`category\` "${entry.category}" is not in categories.json`,
      ]);
    }

    apis.push(entry);
  }

  return { apis, categories };
}

export function loadCategories(categoriesFile: string = CATEGORIES_FILE): Category[] {
  const raw = readFileSync(categoriesFile, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new CatalogValidationError("categories.json", [`is not valid JSON (${message})`]);
  }

  const result = CategoriesFileSchema.safeParse(parsed);
  if (!result.success) {
    throw new CatalogValidationError("categories.json", formatZodIssues(result.error));
  }

  const seen = new Set<string>();
  for (const cat of result.data) {
    if (seen.has(cat.id)) {
      throw new CatalogValidationError("categories.json", [`duplicate id "${cat.id}"`]);
    }
    seen.add(cat.id);
  }

  return result.data;
}
