import { describe, expect, it } from "vitest";
import { FIXTURE_APIS } from "./fixtures.js";
import { ApiNotFoundError, getApi } from "./get-api.js";

describe("getApi", () => {
  it("returns the full entry for a known id", () => {
    const result = getApi(FIXTURE_APIS, { id: "dog-api" });
    expect(result.id).toBe("dog-api");
    expect(result.endpoints).toHaveLength(1);
    expect(result.baseUrl).toBe("https://dogapi.dog/api/v2");
  });

  it("throws ApiNotFoundError for an unknown id", () => {
    expect(() => getApi(FIXTURE_APIS, { id: "no-such-thing" })).toThrow(ApiNotFoundError);
  });
});
