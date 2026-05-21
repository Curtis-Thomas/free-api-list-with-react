import { describe, expect, it } from "vitest";
import { FIXTURE_APIS } from "./fixtures.js";
import { suggestApis } from "./suggest-apis.js";

describe("suggestApis", () => {
  it("returns up to 5 suggestions", () => {
    const result = suggestApis(FIXTURE_APIS, {
      task_description: "I want to show cute cat images on my website",
    });
    expect(result.length).toBeGreaterThan(0);
    expect(result.length).toBeLessThanOrEqual(5);
  });

  it("attaches a rationale to each suggestion", () => {
    const result = suggestApis(FIXTURE_APIS, { task_description: "show random dog breeds" });
    for (const r of result) {
      expect(r.rationale.length).toBeGreaterThan(0);
      expect(r.api.id).toBeDefined();
    }
  });

  it("ranks an obvious match first", () => {
    const result = suggestApis(FIXTURE_APIS, { task_description: "I need cat images" });
    expect(result[0]?.api.id).toBe("cataas");
  });
});
