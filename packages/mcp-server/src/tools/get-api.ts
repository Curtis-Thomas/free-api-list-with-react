import { type ApiEntry, ApiEntrySchema } from "@free-api-list/catalog";
import { z } from "zod";

export const getApiInputSchema = {
  id: z.string().min(1).describe("Catalog id of the API (e.g. 'cat-facts-ninja')"),
};

export type GetApiInput = { id: string };

export class ApiNotFoundError extends Error {
  constructor(id: string) {
    super(`No API in the catalog with id "${id}"`);
    this.name = "ApiNotFoundError";
  }
}

export function getApi(apis: ApiEntry[], input: GetApiInput): ApiEntry {
  const found = apis.find((a) => a.id === input.id);
  if (!found) throw new ApiNotFoundError(input.id);
  return ApiEntrySchema.parse(found);
}
