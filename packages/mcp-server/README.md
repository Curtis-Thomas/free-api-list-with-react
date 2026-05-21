# @free-api-list/mcp-server

An MCP server that exposes the [free-api-list](https://github.com/curtis-thomas/free-api-list-with-react) catalog as four tools any MCP client (Claude Desktop, Claude Code, Cursor, etc.) can call.

## Tools

| Tool | Input | Output |
| --- | --- | --- |
| `list_apis` | `category?`, `difficulty?`, `auth_required?`, `tags?` | Array of API summaries |
| `search_apis` | `query`, `limit?` | Top matches scored by name/description/tag overlap |
| `get_api` | `id` | The full validated `ApiEntry` |
| `suggest_apis_for_task` | `task_description` | 3–5 APIs with a one-line rationale each |

The server does **not** make HTTP calls to the cataloged APIs — that is the consuming agent's job.

## Local install (stdio)

### Claude Code

Add to `~/.claude/mcp_settings.json` (or the per-project equivalent):

```jsonc
{
  "mcpServers": {
    "free-api-list": {
      "command": "npx",
      "args": ["-y", "@free-api-list/mcp-server"]
    }
  }
}
```

### Claude Desktop

Open the Claude Desktop config (Settings → Developer → Edit Config) and add the same `mcpServers` block.

### Cursor / Cline / other MCP clients

Use the same `command: "npx"`, `args: ["-y", "@free-api-list/mcp-server"]` pattern.

## Running from source

```bash
pnpm --filter @free-api-list/mcp-server start
```

This runs `src/index.ts` directly via `tsx`, reads the catalog from `packages/catalog/apis/`, and serves the tools over stdio.

## Remote HTTP endpoint

A skeleton Cloudflare Worker entry lives at `src/worker.ts` for the eventual `freeapilist.com/mcp` hosted endpoint. Full HTTP transport wiring is a follow-up.
