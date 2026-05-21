import { z } from "zod";
import type { ApiEntry } from "@free-api-list/catalog";
import { scoreMatch, summarize, tokenize, type ApiSummary } from "./common.js";

export const suggestApisInputSchema = {
  task_description: z
    .string()
    .min(5)
    .describe("Plain-English description of what the user is trying to do"),
};

export type SuggestApisInput = { task_description: string };

export interface SuggestApisResult {
  api: ApiSummary;
  rationale: string;
}

const STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "want",
  "need",
  "build",
  "make",
  "create",
  "use",
  "using",
  "find",
  "show",
  "list",
  "get",
  "data",
  "api",
  "apis",
]);

function keywords(task: string): string[] {
  return tokenize(task).filter((t) => !STOP_WORDS.has(t));
}

function rationaleFor(api: ApiEntry, terms: string[]): string {
  const reasons: string[] = [];
  for (const term of terms) {
    if (api.name.toLowerCase().includes(term)) reasons.push(`name mentions "${term}"`);
    else if (api.tags.some((t) => t.toLowerCase() === term)) reasons.push(`tagged "${term}"`);
    else if (api.category.toLowerCase().includes(term)) reasons.push(`category is "${api.category}"`);
    else if (api.description.toLowerCase().includes(term))
      reasons.push(`description mentions "${term}"`);
  }
  if (reasons.length === 0) {
    return `Listed under ${api.category}; may apply to this task.`;
  }
  return reasons.slice(0, 3).join("; ");
}

export function suggestApis(apis: ApiEntry[], input: SuggestApisInput): SuggestApisResult[] {
  const terms = keywords(input.task_description);
  const query = terms.join(" ");
  const ranked = apis
    .map((api) => ({ api, score: scoreMatch(query, api) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const top = ranked.slice(0, 5);
  return top.map(({ api }) => ({ api: summarize(api), rationale: rationaleFor(api, terms) }));
}
