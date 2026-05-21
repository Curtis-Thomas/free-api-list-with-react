import { describe, expect, it } from "vitest";
import { FIXTURE_APIS } from "./fixtures.js";
import { searchApis } from "./search-apis.js";

describe("searchApis", () => {
  it("finds matches by name", () => {
    const result = searchApis(FIXTURE_APIS, { query: "dog" });
    expect(result.map((r) => r.id)).toContain("dog-api");
  });

  it("finds matches by tag", () => {
    const result = searchApis(FIXTURE_APIS, { query: "museum" });
    expect(result[0]?.id).toBe("art-institute");
  });

  it("scores higher when the name matches the query", () => {
    const result = searchApis(FIXTURE_APIS, { query: "cat" });
    expect(result[0]?.id).toBe("cataas");
  });

  it("respects the limit parameter", () => {
    const result = searchApis(FIXTURE_APIS, { query: "api", limit: 2 });
    expect(result.length).toBeLessThanOrEqual(2);
  });

  it("returns an empty array when nothing matches", () => {
    expect(searchApis(FIXTURE_APIS, { query: "zzqq xqxqxq" })).toEqual([]);
  });
});
