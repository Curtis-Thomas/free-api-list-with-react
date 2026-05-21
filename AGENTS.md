# AGENTS.md

Canonical conventions for AI coding agents (Claude Code, Cursor, Aider, Codex, etc.) working in this repository. Humans should read this too — it's the source of truth for "how things are done here."

## What this repo is

A pnpm-workspace monorepo with three packages:

```
free-api-list/
├── packages/
│   ├── catalog/          # Data + Zod schema. Zero deps on React or MCP.
│   ├── web/              # Vite + React 19 + TS + MUI 7. Consumes catalog.
│   └── mcp-server/       # @modelcontextprotocol/sdk. Consumes catalog.
```

The catalog is upstream of everything. `web` and `mcp-server` import from `@free-api-list/catalog`. The catalog never imports from either consumer. **Do not break that one-way rule.**

## Commands

Run from the repo root.

| Command | What it does |
| --- | --- |
| `pnpm install` | Install all workspace dependencies. |
| `pnpm dev` | Start the web app dev server (Vite, port 5173). |
| `pnpm validate` | Validate every `apis/*.json` against the Zod schema. CI runs this. |
| `pnpm typecheck` | TypeScript strict typecheck across all packages. |
| `pnpm lint` | Biome lint + format check. |
| `pnpm format` | Biome auto-format. |
| `pnpm test` | Vitest in all packages. |
| `pnpm build` | Build every package. |
| `pnpm --filter @free-api-list/mcp-server start` | Run the MCP server over stdio. |

Expected timings on a warm install: `pnpm validate` ~2s; `pnpm test` ~7s total; `pnpm build` ~5s.

## Adding an API (the JSON-file workflow)

This is the most common contribution. Beginners can do it; no TypeScript or build-system knowledge required.

1. Create one file at `packages/catalog/apis/<id>.json`. The filename (without `.json`) must equal the `id` field inside.
2. Fill in every field. The schema is strict — CI will reject anything malformed.
3. Open a PR. CI runs `pnpm validate` and reports any field-level error inline.

Template:

```json
{
  "id": "kebab-case-id",
  "name": "Display Name",
  "description": "20–500 character description of what this API does and when to use it.",
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

Field rules:

- `id`: lowercase letters, digits, hyphens only. Must match the filename.
- `description`: 20–500 chars. Lead with what it does; one or two sentences.
- `category`: must be a known id in `packages/catalog/categories.json`. To add a new category, see below.
- `difficulty`: `beginner`, `intermediate`, or `advanced`.
- `baseUrl` and `documentationUrl`: valid URLs.
- `auth`: `{ "required": false, "type": "none" }` for unauthenticated APIs. For paid/keyed APIs use `{ "required": true, "type": "api_key", "notes": "…" }`.
- `endpoints`: at least one. `method` is `GET | POST | PUT | PATCH | DELETE`.
- `cors`: `yes` if the API allows browser calls, `no` if known-blocked, `unknown` if you haven't checked. If `no`, the web app will route through the CORS Worker proxy.
- `pricing`: `free`, `freemium`, or `trial`.
- `addedAt`: `YYYY-MM-DD`.

When CI fails, the error message names the file and the specific field, e.g. `apis/my-api.json: field 'documentationUrl' must be a valid URL`.

## Adding a category

Edit `packages/catalog/categories.json`. Append an entry; keep the kebab-case `id` and a Title Case `label`. Run `pnpm validate` locally to confirm no entries reference a removed category.

## Adding or modifying an MCP tool

Tools live in `packages/mcp-server/src/tools/`. One file per tool. Each tool exports:

- A Zod input schema object (`<name>InputSchema`).
- A pure function that takes `(apis: ApiEntry[], input)` and returns a serializable result.
- Optionally, a custom error class for known failure modes.

After writing the tool, register it in `packages/mcp-server/src/server.ts`. Add a vitest spec colocated with the tool (`<name>.test.ts`) that exercises filters and edge cases against `FIXTURE_APIS`.

The server never talks to the cataloged APIs — it only reads from the local catalog. HTTP calls are the consuming agent's responsibility.

## Coding conventions

- **TypeScript strict.** `strict: true`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` are all on. Don't suppress with `as` casts; reshape the types instead.
- **No `any`.** Enforced by Biome. Use `unknown` plus narrowing.
- **Prefer named exports.** Default exports only for entry points (`App`, page components for lazy routing, MCP `index.ts`).
- **File naming.** Kebab-case for source files (`get-api.ts`, `api-card.tsx` — except React components, which are PascalCase by convention here: `ApiCard.tsx`). Tests colocated with sources as `*.test.ts(x)`.
- **Imports** in TS source files use `.js` extensions even when pointing at `.ts` (`moduleResolution: bundler` requires this for clean Node interop).
- **No comments unless the *why* is non-obvious.** Reading the code should explain the *what*.
- **Use the `sx` prop** for one-off MUI styles. No styled-components. The theme is in `packages/web/src/theme/themes.ts`.

## What not to touch in a contributor PR

These changes are maintainer-only — open an issue first:

- `packages/catalog/src/schema.ts` (the Zod schema).
- `packages/catalog/categories.json` removals (additions are fine).
- The TS strict settings in `tsconfig.base.json`.
- The lockfile (`pnpm-lock.yaml`).
- `package.json` of any package (except adding a single dep with rationale in the PR).
- `.github/workflows/*` (CI).
- Generated build outputs (`dist/`, `build/`).

## How CI evaluates a PR

GitHub Actions runs (in order):

1. `pnpm install` (cached pnpm store)
2. `pnpm typecheck`
3. `pnpm lint`
4. `pnpm validate` ← the schema check; fails fast on bad API entries
5. `pnpm test`
6. `pnpm build`

A green CI run is required before a maintainer reviews. Cloudflare Pages publishes a preview for each PR.

## Working with Claude Code

A short, repeatable prompt that works well for the most common task:

> Add the [X API] to the catalog. Use the docs at [URL]. Open `AGENTS.md` for the JSON template and field rules.

For more ambitious work (adding a tool, refactoring the web app), Claude Code should read this document plus the relevant package's source before making changes. See `CLAUDE.md` for Claude-Code-specific notes.

## Architecture cheat-sheet

```
                          ┌─────────────────────┐
                          │  packages/catalog   │
                          │  schema.ts          │
                          │  load.ts            │
                          │  apis/*.json (35)   │
                          │  categories.json    │
                          └──────────┬──────────┘
                                     │ ApiEntry, Category, schema
              ┌──────────────────────┴──────────────────────┐
              ▼                                             ▼
   ┌─────────────────────┐                       ┌─────────────────────┐
   │   packages/web      │                       │  packages/mcp-server│
   │   Vite + React 19   │                       │  MCP SDK (TS)       │
   │   MUI 7 + TS strict │                       │  stdio + Worker     │
   │   Reads JSON via    │                       │  list_apis          │
   │   import.meta.glob  │                       │  search_apis        │
   │   Pages: Home,      │                       │  get_api            │
   │   Category, Detail, │                       │  suggest_apis       │
   │   Tools, Docs       │                       │                     │
   └─────────────────────┘                       └─────────────────────┘
              │                                             │
              ▼                                             ▼
       Cloudflare Pages                              npx / Worker
```

If you're about to add something that pulls catalog data from outside the `catalog` package, stop and put it in the catalog instead. The whole design depends on one source of truth.
