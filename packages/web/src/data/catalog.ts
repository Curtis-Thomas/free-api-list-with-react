import { ApiEntrySchema, CategorySchema, type ApiEntry, type Category } from "@free-api-list/catalog";

const apiModules = import.meta.glob<{ default: unknown }>("../../../catalog/apis/*.json", {
  eager: true,
});

const categoriesModule = import.meta.glob<{ default: unknown }>(
  "../../../catalog/categories.json",
  { eager: true },
);

function loadApis(): ApiEntry[] {
  const out: ApiEntry[] = [];
  for (const mod of Object.values(apiModules)) {
    out.push(ApiEntrySchema.parse(mod.default));
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

function loadCategories(): Category[] {
  const mod = Object.values(categoriesModule)[0];
  if (!mod) {
    throw new Error("categories.json not found");
  }
  return CategorySchema.array().parse(mod.default);
}

export const APIS: ApiEntry[] = loadApis();
export const CATEGORIES: Category[] = loadCategories();

export function apisInCategory(categoryId: string): ApiEntry[] {
  return APIS.filter((a) => a.category === categoryId);
}

export function findApi(id: string): ApiEntry | undefined {
  return APIS.find((a) => a.id === id);
}

export function findCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function categoriesWithApis(): Array<{ category: Category; count: number }> {
  const counts = new Map<string, number>();
  for (const api of APIS) {
    counts.set(api.category, (counts.get(api.category) ?? 0) + 1);
  }
  return CATEGORIES.filter((c) => counts.has(c.id)).map((category) => ({
    category,
    count: counts.get(category.id) ?? 0,
  }));
}
