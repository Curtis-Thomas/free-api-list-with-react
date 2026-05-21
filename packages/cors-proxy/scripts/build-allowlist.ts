import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog } from "@free-api-list/catalog/load";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "..", "src", "allowlist.generated.json");

const { apis } = loadCatalog();
const hosts = Array.from(
  new Set(
    apis
      .map((api) => {
        try {
          return new URL(api.baseUrl).host;
        } catch {
          return null;
        }
      })
      .filter((h): h is string => h !== null),
  ),
).sort();

writeFileSync(OUT, `${JSON.stringify(hosts, null, 2)}\n`);
console.log(`cors-proxy: wrote ${hosts.length} hosts to src/allowlist.generated.json`);
