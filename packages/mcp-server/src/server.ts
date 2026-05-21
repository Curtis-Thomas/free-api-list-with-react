import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ApiEntry } from "@free-api-list/catalog";
import { jsonContent } from "./tools/common.js";
import { listApis, listApisInputSchema } from "./tools/list-apis.js";
import { searchApis, searchApisInputSchema } from "./tools/search-apis.js";
import { ApiNotFoundError, getApi, getApiInputSchema } from "./tools/get-api.js";
import { suggestApis, suggestApisInputSchema } from "./tools/suggest-apis.js";

export interface BuildServerOptions {
  apis: ApiEntry[];
  serverName?: string;
  serverVersion?: string;
}

export function buildServer({
  apis,
  serverName = "free-api-list",
  serverVersion = "0.1.0",
}: BuildServerOptions): McpServer {
  const server = new McpServer({ name: serverName, version: serverVersion });

  server.registerTool(
    "list_apis",
    {
      description:
        "List free APIs in the catalog. Filter by category, difficulty, auth requirement, or tags.",
      inputSchema: listApisInputSchema,
    },
    async (input) => jsonContent(listApis(apis, input)),
  );

  server.registerTool(
    "search_apis",
    {
      description:
        "Search the catalog by free-text query. Returns the top matches scored against name, description, and tags.",
      inputSchema: searchApisInputSchema,
    },
    async (input) => jsonContent(searchApis(apis, input)),
  );

  server.registerTool(
    "get_api",
    {
      description: "Return the full ApiEntry for a single API id.",
      inputSchema: getApiInputSchema,
    },
    async (input) => {
      try {
        return jsonContent(getApi(apis, input));
      } catch (error) {
        if (error instanceof ApiNotFoundError) {
          return {
            content: [{ type: "text" as const, text: error.message }],
            isError: true,
          };
        }
        throw error;
      }
    },
  );

  server.registerTool(
    "suggest_apis_for_task",
    {
      description:
        "Given a natural-language task description, suggest 3–5 catalog APIs with a one-line rationale per recommendation.",
      inputSchema: suggestApisInputSchema,
    },
    async (input) => jsonContent(suggestApis(apis, input)),
  );

  return server;
}
