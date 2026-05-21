import { describe, expect, it } from "vitest";
import { FIXTURE_APIS } from "./fixtures.js";
import { listApis } from "./list-apis.js";

describe("listApis", () => {
  it("returns all APIs when no filters are given", () => {
    expect(listApis(FIXTURE_APIS, {})).toHaveLength(FIXTURE_APIS.length);
  });

  it("filters by category", () => {
    const result = listApis(FIXTURE_APIS, { category: "animals" });
    expect(result.map((r) => r.id).sort()).toEqual(["cataas", "dog-api"]);
  });

  it("filters by difficulty", () => {
    const result = listApis(FIXTURE_APIS, { difficulty: "advanced" });
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("secret-api");
  });

  it("filters by auth required", () => {
    const required = listApis(FIXTURE_APIS, { auth_required: true });
    expect(required).toHaveLength(1);
    expect(required[0]?.id).toBe("secret-api");

    const notRequired = listApis(FIXTURE_APIS, { auth_required: false });
    expect(notRequired).toHaveLength(3);
  });

  it("filters by tag intersection", () => {
    const result = listApis(FIXTURE_APIS, { tags: ["images"] });
    expect(result.map((r) => r.id)).toEqual(["cataas"]);
  });

  it("returns summary shape (no endpoints or baseUrl)", () => {
    const [first] = listApis(FIXTURE_APIS, {});
    expect(first).toBeDefined();
    expect(first).not.toHaveProperty("endpoints");
    expect(first).not.toHaveProperty("baseUrl");
    expect(first).toHaveProperty("id");
    expect(first).toHaveProperty("name");
  });
});
