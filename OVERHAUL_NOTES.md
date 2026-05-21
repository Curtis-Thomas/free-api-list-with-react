# Overhaul — Discovery Notes (Phase 0)

Temporary scratch file. Deleted in Phase 7.

## 1. API inventory

The current site lists 34 individual APIs across 13 populated category dashboards. The remaining ~37 category directories are empty placeholders (a `*1Dash.js` page with one disabled `<BtnRouting>` card and no individual API pages).

Each card on a category dashboard advertises an API. Every advertised API has a matching detail/test page component. Counts match (34 cards ↔ 34 detail components).

### Populated categories and APIs

| Category | API name (card label) | Detail component |
|---|---|---|
| Animals | Daily Cat Facts | AnimalsDailyCatFacts |
| Animals | Cat as a service | AnimalsCataas |
| Animals | Dog API | AnimalsDogApi |
| Animals | Dog | AnimalsDog |
| Animals | Meow Facts | AnimalsMeowFacts |
| Animals | Random Dog | AnimalsRandomDog |
| Animals | Animals Cat Facts | AnimalsCatFacts |
| Animals | shibe.online | AnimalsShibeOnline |
| Anime | Nekos | AnimeNekos |
| Anime | StudioGhibli | AnimeStudioGhibli |
| ArtDesign | Artic | ArtDesignArtic |
| ArtDesign | EmojiHub | ArtDesignEmojiHub |
| ArtDesign | MetMuseum | ArtDesignMetMuseum |
| Books | ABiblia Digital | BooksABibliDigital |
| Books | Bible Api | BooksBibleApi |
| Books | Gutendex | BooksGutendex |
| Books | PoetryDB | BooksPoetryDb |
| Books | Quran Cloud | BooksQuranCloud |
| Development | Cloudflare Trace | DevelopmentCloudFlareTrace |
| Dictionary | Free Dictionary | DictionaryFreeDictionary |
| Entertainment | Chuck Norris | EntertainmentchuckNorris |
| Entertainment | Corp Buzz Words | EntertainmentCorpBuzzWords |
| Entertainment | Techy | EntertainmentTechy |
| Environment | UK Carbon Intensity | EnvironmentUKCarbonIntensity |
| GamesComics | Amiibo | GamesComicsAmiibo |
| GamesComics | Cheapshark | GamesComicsCheapShark |
| GeoCoding | Administrative Divisions Db | GeocodingAdministrativeDivisionsDb |
| GeoCoding | GeoJS | GeoCodingGeoJS |
| GeoCoding | Get The Data | GeoCodingGetTheData |
| GeoCoding | Country | GeoCodingCountry |
| Health | Makeup API | HealthMakeupApi |
| Personality | Quote Clear | PersonalityQuoteClear |
| SportsFitness | BallDontLie | SportsFitnessBallDontLie |
| SportsFitness | City Bikes | SportsFitnessCityBikes |

### Empty / placeholder categories (no APIs listed)

`antiMalware`, `authentication`, `blockchain`, `business`, `calendar`, `cloud`, `contInt`, `cryptocurrency`, `currencyExchange`, `dataValidation`, `docsProd`, `email`, `events`, `finance`, `foodDrink`, `government`, `jobs`, `machineLearning`, `music`, `news`, `openData`, `openSource`, `patent`, `phone`, `photography`, `programming`, `scienceMath`, `security`, `shopping`, `social`, `testData`, `textAnalysis`, `tracking`, `transportation`, `urlShortener`, `vehicle`, `video`, `weather`.

(Note: `business/BusinessTrendsApi.js` exists on disk but is NOT routed in `App.js`; it appears to be a half-finished add — see recent commit `b919897 added new api:<businesstrends api>`. Treat as a TODO during migration.)

### Canonical categories proposed for `categories.json`

Migrate using the existing 51 categories (kebab-cased for IDs, Title Case for display labels). The full list:

`animals`, `anime`, `anti-malware`, `art-design`, `authentication`, `blockchain`, `books`, `business`, `calendar`, `cloud`, `continuous-integration`, `cryptocurrency`, `currency-exchange`, `data-validation`, `development`, `dictionary`, `docs-prod`, `email`, `entertainment`, `environment`, `events`, `finance`, `food-drink`, `games-comics`, `geocoding`, `government`, `health`, `jobs`, `machine-learning`, `music`, `news`, `open-data`, `open-source`, `patent`, `personality`, `phone`, `photography`, `programming`, `science-math`, `security`, `shopping`, `social`, `sports-fitness`, `test-data`, `text-analysis`, `tracking`, `transportation`, `url-shortener`, `vehicle`, `video`, `weather`.

Some are redundant or unclear (`docs-prod` is unclear; `personality` vs `entertainment` overlap). Flagged for user sign-off in Section 6.

## 2. Non-obvious behaviors in the existing app

### Routing
- `react-router-dom` v6 `<BrowserRouter>` driven by a flat `routeConfig` array in `src/App.js`.
- Two root paths: `/` and `/free-api-list-with-react/`. The second is a GitHub Pages base-path leftover. Netlify config (`netlify.toml`) rewrites all routes to `/index.html` for SPA fallback.
- Routes use mixed-case path segments like `/AnimalsDash/AnimalsCataas`. Prompt's web app phase will need to either preserve these (for old inbound links) or define redirects.

### Theming
- **11 themes**: `light`, `dark`, `dracula`, `cobalt`, `gruvbox`, `highcontrast`, `mero`, `onedark`, `radical`, `synthwave`, `tokyonight`.
- Defined under `src/themes/`, each as a MUI `createTheme` config.
- User selection persisted in `localStorage` under key `theme`. Default on first load is `onedark`.
- Theme switcher lives in the right sidebar (`BarRight`).
- **This is well beyond a "dark mode toggle".** Prompt Section 8 says dark mode is in scope only if it already exists — themes definitely exist. Decision needed: port all 11, port a curated subset, or simplify to light/dark + system. Flagged for user sign-off in Section 6.

### Layout
- Three-column layout on `md+` viewports: fixed left sidebar (`BarLeft`, 25%), main content (50%), fixed right sidebar (`BarRight`, 25%). Sidebars hide on `xs`/`sm`.
- Persistent `Header` (top) and `Footer` (bottom) outside the routed area.
- `BarLeft`: navigation tree. `BarRight`: theme switcher + likely a "GitHub star" widget (`react-github-btn`).

### API testing flow
- Two CRUD test components: `BoxTestCrud` (basic) and `AdvancedBoxTestCrud`.
- Uses `axios[method]` dynamically dispatched on `get`/`post`/`put`/`delete`. Renders JSON response in a `<pre>` block.
- `BoxTestImg` for endpoints returning image URLs.
- All calls are direct browser → API. **CORS-blocked APIs will fail silently in the current build** — there is no proxy. This is one of the bigger reasons the prompt mandates a CORS Worker in Phase 6.
- The `/Tools` page exposes the CRUD/image testers standalone (any URL, not pre-filled).

### Documentation page (`/Docs`)
- Lists GitHub contributors using `@octokit/core`, fetching `GET /repos/Curtis-Thomas/free-api-list-with-react/contributors`.
- Then for each contributor fetches `/users/{login}` and `/users/{login}/events` to derive name + last push date.
- Sortable table on `md+`, card list on `xs`/`sm`.
- **This is the only feature in the app that uses the GitHub API and the only feature that needs an env var.** Decision needed: keep, drop, or rebuild against a static-build-time fetch. Flagged in Section 6.

### Persistence
- `localStorage["theme"]` only. No other state is persisted. No cookies. No IndexedDB.

### Analytics
- None. No GA, no Plausible, no Sentry, no anything. Confirmed by grep for `gtag|plausible|sentry|amplitude|mixpanel|posthog` — zero hits.

### Environment variables
- One: `REACT_APP_GITHUB_TOKEN` used by `src/documentation/ContributorsContent.js` line 36.
- Used unauthenticated calls would still work for the contributors list (it's public data); the token only raises rate limits. The current setup ships an unauthenticated call when the env var is missing. **No secret needs to be carried forward.** New equivalent for Vite would be `VITE_GITHUB_TOKEN` if kept.

### `react-github-btn`
- Used in `BarRight` (suspected; not yet read). Renders the "Star on GitHub" button. The prompt says drop this package; reimplement with a plain `<a>` link or a static badge.

## 3. Existing docs — what to carry forward

| File | Status | Action |
|---|---|---|
| `CONTRIBUTING.md` | Generic, mostly empty of project-specific guidance. | Replace entirely with two-track version (prompt Section 10). |
| `CODE_OF_CONDUCT.md` | Standard Contributor Covenant text — not yet read. | Preserve verbatim. |
| `SECURITY.md` | Placeholder; references `security@yourproject.com` (not real) and `5.x.y` versions that don't match this project. | Rewrite or remove. Flag in Section 6. |
| `PULL_REQUEST_TEMPLATE.md` | Generic checklist. | Replace with two-track version (prompt Section 10). |
| `.github/ISSUE_TEMPLATE/add-api.md` | Not yet read. | Likely the "good first issue" template — review and update to point at the new JSON-file workflow. |
| `LICENSE` | MIT, retain. | Preserve. |
| `README.md` | Lists `freeapilist.com` as live demo (per prompt, custom domain no longer linked). | Rewrite per Section 10. |

## 4. Node version, target, hosting

- No `.nvmrc` or `.node-version` pinned. Local dev was working on Node 22.
- `package.json` browserslist targets modern browsers; no IE / no legacy.
- Prompt mandates Vite `target: es2022` — compatible with everything browserslist already covers.
- Suggest pinning Node 20 LTS (still supported through 2026-04, then 22 LTS thereafter). Use `.nvmrc` with `20`.
- Existing deploy: Netlify (`netlify.toml`) — prompt mandates switch to Cloudflare Pages. `freeapilist.com` is no longer linked per prompt; CF Pages will publish to `*.pages.dev` until/unless the domain is reattached.

## 5. CORS preflight (per-API expectations)

I have not actually probed each API; the entries below are educated guesses based on common knowledge for static-hosted public APIs. The real CORS field on each `apis/*.json` should default to `unknown` and be confirmed during migration.

Expected **CORS-allowed** (browser → API works directly):
- catfact.ninja (Daily Cat Facts, Animals Cat Facts), cataas.com (Cataas), dogapi.dog (Dog API), thedogapi.com (Dog), meowfacts.herokuapp.com (Meow Facts), random.dog (Random Dog), shibe.online (shibe), nekosapi.com (Nekos), ghibliapi.vercel.app (StudioGhibli), api.artic.edu (Artic), emojihub.yurace.pro (EmojiHub), collectionapi.metmuseum.org (MetMuseum), gutendex.com (Gutendex), api.api.bible (Bible Api — needs key, free tier), poetrydb.org (PoetryDB), api.alquran.cloud (Quran Cloud), 1.1.1.1/cdn-cgi/trace (Cloudflare Trace — text/plain not JSON), api.dictionaryapi.dev (Free Dictionary), api.chucknorris.io (Chuck Norris), corporatebs-generator.sameerkumar.website (Corp Buzz Words), api.techy.dev (Techy), carbonintensity.org.uk (UK Carbon Intensity), www.amiiboapi.com (Amiibo), www.cheapshark.com (Cheapshark), geo.maps.co (Administrative Divisions Db — varies), get.geojs.io (GeoJS), restcountries.com (Country), makeup-api.herokuapp.com (Makeup), zenquotes.io (Quote Clear), api.balldontlie.io (BallDontLie), api.citybik.es (City Bikes).

Expected **CORS-blocked** or unknown — need Worker proxy:
- abibliadigital.com.br (ABiblia Digital — Portuguese Bible API; CORS unconfirmed).
- `getthedata.com` (Get The Data — UK postcode lookup; sometimes blocks CORS).
- Any new API a contributor adds.

The Phase 6 CORS Worker should allowlist by base URL and pass through. The `cors` field on each entry is the source of truth the web app uses to decide whether to call direct or via the Worker.

## 6. Contradictions / decisions surfaced for user sign-off

These are the Section-14 items the prompt explicitly asks me to surface before deciding:

1. **Themes**: keep all 11, port a curated subset (e.g. light/dark/onedark), or simplify to light + dark + system? The prompt's "no UI redesign" rule + "dark mode in scope only if it exists" rule are in tension here.
2. **`/Docs` page (contributors widget)**: keep, drop, or rebuild as a static fetch at build time?
3. **`/Tools` page** (standalone CRUD/IMG testers): keep, drop, or fold into the per-API test pages?
4. **`REACT_APP_GITHUB_TOKEN`**: only used by the contributors widget; not strictly needed (calls work unauthenticated). Drop unless we keep `/Docs`.
5. **Half-finished `BusinessTrendsApi.js`**: include in migration as a Business-category entry, or open a follow-up issue and leave for the original PR author?
6. **Categories**: confirm the kebab-cased canonical list above. Drop any empty categories outright, or keep them as targets for future contributions?
7. **Dead/paywalled APIs**: I haven't probed each; defer to migration time and mark suspect entries with `pricing: "freemium"` or open a follow-up.
8. **MUI Grid v2 migration**: MUI 7 deprecates the old `<Grid item>` syntax in favor of `<Grid size={...}>`. Port to the new syntax during Phase 3.
9. **Old mixed-case routes** (`/AnimalsDash/AnimalsCataas`): preserve verbatim for inbound links, or move to clean lowercase paths (`/animals/cataas`) with redirects?
10. **Difficulty levels**: the existing data uses `Beginner`/`Easy` mixed with prompt's `beginner`/`intermediate`/`advanced`. Normalize all to the prompt's three-level enum during migration.
11. **Cloudflare account**: this is a maintainer-owned resource I cannot create. Phase 6 will produce the config files and `DEPLOY.md`; the actual account/project creation is a manual step the maintainer does.
12. **Scope of "execute the plan"**: the overhaul is 6 substantive phases (1–6) plus discovery (0) and cleanup (7), totalling many hours of work and many files. The prompt says "one phase per commit minimum" — confirm the desired cadence: all phases in this session vs phase-by-phase with a check-in after each.
