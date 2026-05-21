# Deploy

How a maintainer publishes the project. Most contributors won't need this.

## Cloudflare Pages — web app

The web app deploys to Cloudflare Pages. The maintainer creates one Pages project; every PR gets a preview URL automatically.

### One-time setup

1. Go to <https://dash.cloudflare.com/?to=/:account/pages> and click **Create a project → Connect to Git**.
2. Pick this repository. Cloudflare reads the build settings from `wrangler.toml` (web package) and the following:
   - **Framework preset:** `None`
   - **Build command:** `pnpm install --frozen-lockfile && pnpm --filter @free-api-list/web build`
   - **Build output directory:** `packages/web/dist`
   - **Root directory:** repo root
   - **Environment variables:**
     - `NODE_VERSION` = `20`
     - `PNPM_VERSION` = `10`
     - `VITE_CORS_PROXY_URL` = `https://free-api-list-cors-proxy.<account>.workers.dev` (set after the Worker deploy below)
3. In **Settings → Builds & deployments → Preview deployments**, enable previews for all branches and external PRs.

The Worker for the CORS proxy must already be deployed before the web app reads its URL, but the web app builds fine without the env var (the proxy toggle in the CRUD tester just becomes a no-op).

### Custom domain (optional)

`freeapilist.com` is mentioned in the project history but is no longer attached. To reattach it, in the Pages project go to **Custom domains → Set up a custom domain**, follow Cloudflare's CNAME instructions, and update any references in `README.md`.

## Cloudflare Workers — CORS proxy

Lives at `packages/cors-proxy/`. Allowlists hosts from the catalog and forwards browser requests to APIs that don't permit CORS.

### Deploy

```bash
pnpm --filter @free-api-list/cors-proxy install
cd packages/cors-proxy
pnpm wrangler login        # one-time, opens a browser
pnpm wrangler deploy
```

That publishes to `free-api-list-cors-proxy.<account>.workers.dev`. Take that URL and set `VITE_CORS_PROXY_URL` in the Pages project settings (above).

## Cloudflare Workers — MCP HTTP endpoint

Skeleton lives at `packages/mcp-server/src/worker.ts`. It is **not** yet wired up to the MCP SDK's HTTP transport — that's a follow-up. The stdio entry (`packages/mcp-server/src/index.ts`) is what users install today via `npx @free-api-list/mcp-server`.

When the HTTP transport is wired up:

```bash
cd packages/mcp-server
pnpm wrangler deploy
```

…and add the `wrangler.toml` accordingly.

## Publishing the MCP server to npm

Out of scope for this overhaul. When ready:

```bash
cd packages/mcp-server
pnpm version <major|minor|patch>
pnpm publish --access public
```

## CI

GitHub Actions in `.github/workflows/ci.yml` runs `pnpm validate`, `typecheck`, `lint`, `test`, `build` on every push and PR. The schema check is first so beginner PRs fail fast with a clear field-level error.

The CI workflow doesn't deploy — Cloudflare Pages does that on push to `main`.
