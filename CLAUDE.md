# CLAUDE.md

This file is a thin pointer for Claude Code working in this repository. The canonical conventions live in [`AGENTS.md`](./AGENTS.md) — read that first.

## Claude-Code-specific notes

- `pnpm install` takes ~10–40 seconds on a cold install. `pnpm validate`, `pnpm typecheck`, and `pnpm test` each take <10 seconds. Don't assume any of them are hung if they take a moment.
- The web app and the MCP server both depend on `@free-api-list/catalog`. After editing schema/loader code, run `pnpm -r typecheck` to catch cross-package breakage.
- Don't try to start the dev server (`pnpm dev`) inside a foreground tool call — it doesn't exit. Run it as a background process or just `pnpm build` to verify the app compiles.
- The MCP server reads from disk on startup. When testing locally, run it from the repo root so it finds `packages/catalog/apis/`.

## Common prompts

Concrete examples a contributor (or you, mid-session) might paste:

> Add the [Open-Meteo weather] API to the catalog. The docs are at https://open-meteo.com/en/docs. Follow `AGENTS.md`.

> Search for any API entries that have `cors: "unknown"` and audit the docs URLs to determine the correct value. Update each file.

> Add a new MCP tool `random_api()` that returns one random ApiEntry. Follow `AGENTS.md` for the tool structure and add tests.

> Build the web app and report any TypeScript errors. Don't try to fix them yet — just summarize the failures.

> Open `OVERHAUL_NOTES.md` (if present) for the discovery notes from the original overhaul. (This file is temporary and is deleted after the overhaul lands.)

## What not to do

- Don't rewrite the Zod schema in a contributor PR. Schema changes are maintainer-only.
- Don't bypass `pnpm validate`. If it fails on your entry, the message names the field — fix it.
- Don't add `console.log` calls to the MCP server stdio path; the protocol uses stdout. Use `console.error` if you need to log.
- Don't introduce a new bundler, test runner, or lint tool. The stack is fixed: Vite, Vitest, Biome.
