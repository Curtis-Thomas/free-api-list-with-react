import type { ApiEntry } from "@free-api-list/catalog";
import { z } from "zod";
import { type ApiSummary, scoreMatch, summarize } from "./common.js";

export const searchApisInputSchema = {
  query: z
    .string()
    .min(1)
    .describe("Free-text query matched against name, description, tags, category"),
  limit: z
    .number()
    .int()
    .min(1)
    .max(50)
    .optional()
    .describe("Maximum matches to return (default 10)"),
};

export interface SearchApisInput {
  query: string;
  limit?: number | undefined;
}

export function searchApis(apis: ApiEntry[], input: SearchApisInput): ApiSummary[] {
  const limit = input.limit ?? 10;
  const scored = apis
    .map((api) => ({ api, score: scoreMatch(input.query, api) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((entry) => summarize(entry.api));
}
