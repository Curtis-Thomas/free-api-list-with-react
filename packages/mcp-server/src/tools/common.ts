import type { ApiEntry } from "@free-api-list/catalog";

export interface ApiSummary {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: ApiEntry["difficulty"];
  authRequired: boolean;
  tags: string[];
  documentationUrl: string;
}

export function summarize(api: ApiEntry): ApiSummary {
  return {
    id: api.id,
    name: api.name,
    description: api.description,
    category: api.category,
    difficulty: api.difficulty,
    authRequired: api.auth.required,
    tags: api.tags,
    documentationUrl: api.documentationUrl,
  };
}

export function jsonContent<T>(value: T) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(value, null, 2),
      },
    ],
  };
}

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 2);
}

export function scoreMatch(query: string, api: ApiEntry): number {
  const tokens = tokenize(query);
  if (tokens.length === 0) return 0;
  const haystack = [api.name, api.description, api.category, ...api.tags].join(" ").toLowerCase();
  let score = 0;
  for (const token of tokens) {
    if (haystack.includes(token)) score += 1;
    if (api.name.toLowerCase().includes(token)) score += 2;
    if (api.tags.some((t) => t.toLowerCase() === token)) score += 2;
  }
  return score;
}
