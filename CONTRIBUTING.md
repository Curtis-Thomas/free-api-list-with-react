# Contributing

Thank you for considering a contribution! There are two clear tracks depending on what you want to do.

If you're a first-time contributor, **Track A** is the right one. You don't need to know TypeScript or how the build works — you just edit one JSON file.

---

## Track A — Add an API (no coding required)

Goal: catalog a new free API so it appears on the website and is exposed to AI agents through the MCP server.

### Step 1 — Fork the repo

Click "Fork" on GitHub. Clone your fork locally if you want to test, or edit directly in the GitHub web UI for the smallest possible workflow.

### Step 2 — Create one JSON file

Add a single file at `packages/catalog/apis/<your-api-id>.json`. The filename (without `.json`) must match the `id` field inside the file.

Template — copy this, then change every value:

```json
{
  "id": "kebab-case-id",
  "name": "Display Name",
  "description": "A 20–500 character explanation of what this API does and when someone would use it.",
  "category": "animals",
  "difficulty": "beginner",
  "baseUrl": "https://api.example.com/v1",
  "documentationUrl": "https://example.com/docs",
  "auth": { "required": false, "type": "none" },
  "endpoints": [
    { "path": "/things", "method": "GET", "description": "List things" }
  ],
  "tags": ["example", "demo"],
  "cors": "yes",
  "https": true,
  "pricing": "free",
  "addedAt": "2026-05-21"
}
```

Field guide:

| Field | What to put |
| --- | --- |
| `id` | lowercase letters, digits, hyphens — e.g. `cat-facts-ninja` |
| `name` | what humans call this API |
| `description` | one or two sentences; 20 to 500 characters |
| `category` | one of the ids in [`packages/catalog/categories.json`](./packages/catalog/categories.json) |
| `difficulty` | `beginner`, `intermediate`, or `advanced` |
| `baseUrl` | the API's base URL |
| `documentationUrl` | a public docs page |
| `auth.required` | `false` if no auth needed, `true` otherwise. If `true`, set `auth.type` to `api_key`, `oauth`, `bearer`, or `basic` |
| `endpoints` | at least one. `method` is one of `GET POST PUT PATCH DELETE` |
| `tags` | a few short keywords |
| `cors` | `yes` if you've tested the API works from a browser, `no` if it doesn't, `unknown` otherwise |
| `https` | `true` if the API supports HTTPS |
| `pricing` | `free`, `freemium` (paid tier exists), or `trial` |
| `addedAt` | today's date in `YYYY-MM-DD` format |

### Step 3 — Open a Pull Request

When you push the file, GitHub Actions will validate the JSON against the schema and report any problem inline. If it's green, a maintainer will review and merge. If it's red, the error message names the file and the specific field — fix that one thing and push again.

### Need a new category?

Edit [`packages/catalog/categories.json`](./packages/catalog/categories.json) and add a `{ "id": "kebab-case", "label": "Display Name" }` entry. Mention it in your PR description.

---

## Track B — Work on the codebase

Goal: add a feature to the web app, add an MCP tool, fix a bug, etc.

### Prerequisites

- [Node.js](https://nodejs.org) 20 or later (see `.nvmrc`)
- [pnpm](https://pnpm.io) 10 or later (`corepack enable` then `corepack prepare pnpm@latest --activate`)

### Setup

```bash
git clone https://github.com/curtis-thomas/free-api-list-with-react.git
cd free-api-list-with-react
pnpm install
pnpm dev      # opens the web app at http://localhost:5173
```

### Where things live

```
packages/
├── catalog/         # The Zod schema, loader, and JSON entries. Don't import React or MCP from here.
├── web/             # Vite + React 19 + TS + MUI 7. Imports from catalog.
└── mcp-server/      # @modelcontextprotocol/sdk. Imports from catalog.
```

[`AGENTS.md`](./AGENTS.md) is the full conventions document — schema rules, package boundaries, coding style, the works. Read it before making non-trivial changes.

### Commands

| Command | What it does |
| --- | --- |
| `pnpm dev` | Web app dev server |
| `pnpm validate` | Schema-check every API entry |
| `pnpm typecheck` | Strict TS check across all packages |
| `pnpm lint` | Biome lint + format check |
| `pnpm format` | Biome auto-format |
| `pnpm test` | Vitest everywhere |
| `pnpm build` | Build every package |

### Using Claude Code

This repository has an [`AGENTS.md`](./AGENTS.md) and a [`CLAUDE.md`](./CLAUDE.md). Claude Code reads both automatically. Useful prompts and what-not-to-do tips live in `CLAUDE.md`.

### Submitting a change

1. Branch from `main`.
2. Make your change.
3. Run `pnpm typecheck && pnpm lint && pnpm validate && pnpm test && pnpm build` locally. All must pass.
4. Open a PR. CI will re-run everything and Cloudflare Pages will publish a preview.
5. A maintainer reviews.

---

## Code of Conduct

By participating, you agree to abide by the [Code of Conduct](./CODE_OF_CONDUCT.md). Be kind, especially to first-time contributors.

## License

By contributing, you agree your contributions are licensed under the project's [MIT License](./LICENSE).
