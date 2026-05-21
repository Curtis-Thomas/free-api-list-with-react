import { z } from "zod";
import type { ApiEntry } from "@free-api-list/catalog";
import { type ApiSummary, summarize } from "./common.js";

export const listApisInputSchema = {
  category: z.string().optional().describe("Filter by category id (e.g. 'animals')"),
  difficulty: z
    .enum(["beginner", "intermediate", "advanced"])
    .optional()
    .describe("Filter by difficulty"),
  auth_required: z.boolean().optional().describe("Only return APIs where auth.required matches"),
  tags: z.array(z.string()).optional().describe("Only return APIs that contain all listed tags"),
};

export interface ListApisInput {
  category?: string | undefined;
  difficulty?: ApiEntry["difficulty"] | undefined;
  auth_required?: boolean | undefined;
  tags?: string[] | undefined;
}

export function listApis(apis: ApiEntry[], input: ListApisInput): ApiSummary[] {
  return apis
    .filter((api) => {
      if (input.category && api.category !== input.category) return false;
      if (input.difficulty && api.difficulty !== input.difficulty) return false;
      if (input.auth_required !== undefined && api.auth.required !== input.auth_required)
        return false;
      if (input.tags && input.tags.length > 0) {
        const have = new Set(api.tags);
        for (const t of input.tags) if (!have.has(t)) return false;
      }
      return true;
    })
    .map(summarize);
}
