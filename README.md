# Free API List

[![CI](https://github.com/curtis-thomas/free-api-list-with-react/actions/workflows/ci.yml/badge.svg)](https://github.com/curtis-thomas/free-api-list-with-react/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A community-maintained catalog of free public APIs, with an in-browser test harness and an MCP server that exposes the catalog to Claude (or any MCP-aware coding agent).

## What's in the box

```
free-api-list/
├── packages/catalog/      # The Zod-validated API catalog. The source of truth.
├── packages/web/          # The website (Vite + React 19 + MUI 7).
└── packages/mcp-server/   # MCP server (npx @free-api-list/mcp-server).
```

The catalog is upstream of everything. Adding an API means editing one JSON file in `packages/catalog/apis/` — no TypeScript, no build system knowledge required.

## Contribute

Two clear tracks:

- **Want to add an API to the list?** Read [Track A of `CONTRIBUTING.md`](./CONTRIBUTING.md#track-a--add-an-api-no-coding-required). One JSON file, one PR.
- **Want to work on the code or the MCP server?** Read [Track B of `CONTRIBUTING.md`](./CONTRIBUTING.md#track-b--work-on-the-codebase) and [`AGENTS.md`](./AGENTS.md).

## Run the web app locally

```bash
pnpm install
pnpm dev
# open http://localhost:5173
```

## Use the MCP server with Claude

Add to your MCP client config (Claude Code, Claude Desktop, Cursor, …):

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

Then ask things like *"What free weather APIs are in the catalog?"* or *"Suggest 3 APIs I could use for a generative-art project."*

Tools exposed: `list_apis`, `search_apis`, `get_api`, `suggest_apis_for_task`. See [`packages/mcp-server/README.md`](./packages/mcp-server/README.md).

## Tech stack

| Layer | Choice |
| --- | --- |
| Package manager | pnpm + workspaces |
| Language | TypeScript strict |
| Web bundler | Vite 6 |
| UI framework | React 19 + MUI 7 |
| Schema | Zod |
| MCP SDK | `@modelcontextprotocol/sdk` |
| Testing | Vitest |
| Lint/format | Biome |
| Hosting | Cloudflare Pages (web) + Workers (CORS proxy + MCP HTTP) |

## License

MIT — see [`LICENSE`](./LICENSE).
