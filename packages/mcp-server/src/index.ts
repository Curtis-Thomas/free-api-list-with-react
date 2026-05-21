#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadCatalog } from "@free-api-list/catalog/load";
import { buildServer } from "./server.js";

async function main() {
  const { apis } = loadCatalog();
  const server = buildServer({ apis });
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`free-api-list-mcp: serving ${apis.length} APIs over stdio`);
}

main().catch((error: unknown) => {
  console.error("free-api-list-mcp fatal:", error);
  process.exit(1);
});
