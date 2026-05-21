import { loadCatalog, CatalogValidationError } from "../src/load.js";

try {
  const { apis, categories } = loadCatalog();
  console.log(`catalog: validated ${apis.length} APIs across ${categories.length} categories`);
} catch (error) {
  if (error instanceof CatalogValidationError) {
    console.error(`\n✗ catalog validation failed in ${error.fileName}:`);
    for (const issue of error.issues) {
      console.error(`  - ${issue}`);
    }
    console.error("\nFix the entry and run `pnpm validate` again.\n");
    process.exit(1);
  }
  throw error;
}
