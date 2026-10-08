# Elementa

An interactive periodic-table web app built with **React + TanStack Start + Vite + TypeScript**. Elementa combines a visual 118-element periodic table with search, category/property coloring, temperature-based phase visualization, an element inspector, favorites, and a short chemistry quiz.

## 🗺️ Code map — start here

```text
.
├── src/
│   ├── routes/
│   │   ├── __root.tsx              # App shell, metadata, fonts, PWA links, providers
│   │   └── index.tsx               # Main / route: table, inspector, keyboard controls
│   ├── components/
│   │   ├── app-header.tsx          # Header, navigation and table/quiz controls
│   │   ├── periodic-table.tsx      # 118-element grid, filters, colors, temperature
│   │   ├── inspector.tsx           # Selected-element detail panel + electron shell
│   │   ├── quiz-view.tsx           # 10-question chemistry quiz
│   │   ├── preview-host-bridge.tsx # Preview/host communication
│   │   ├── ui/                      # Reusable UI primitives
│   │   └── ...
│   ├── lib/
│   │   ├── elements.ts             # Element dataset + chemistry helpers
│   │   ├── quiz.ts                 # Quiz generation and question logic
│   │   ├── store.ts                # Zustand state + local persistence
│   │   ├── db.ts                   # Server-only DB abstraction
│   │   ├── auth/                   # Better Auth, providers, sessions and gates
│   │   ├── app-data/               # Server data/readiness helpers
│   │   ├── multiplayer/             # Peer-to-peer/multiplayer utilities
│   │   ├── utils.ts                # Shared helpers
│   │   └── error-component.tsx     # Router error UI
│   ├── router.tsx                  # TanStack Router creation
│   ├── routeTree.gen.ts            # Generated route tree — do not edit manually
│   └── styles.css                  # Tailwind theme + Elementa component styles
│
├── migrations/
│   └── auth/0001_auth.sql          # Better Auth PostgreSQL schema
│
├── public/
│   ├── favicon.svg                 # Site favicon
│   ├── og.jpg                      # Social/Open Graph image
│   └── __grok/                     # PWA/install assets
│
├── server/
│   └── middleware/                 # Server/PWA middleware
│
├── scripts/
│   ├── with-app-env.mjs            # Loads allowed VITE_* app environment values
│   ├── migrate.mjs                 # Applies DB migrations when DATABASE_URL exists
│   ├── preview.mjs                 # Local preview lifecycle
│   ├── browser-smoke.mjs           # Browser smoke checks
│   ├── check-auth-invariant.mjs    # Auth safety checks
│   └── ...                         # PWA, migration, preview and test helpers
│
├── screenshots/                    # UI reference/smoke-test screenshots
├── .grok/                          # App-builder/preview metadata
├── package.json                    # Dependencies and npm scripts
├── vite.config.ts                  # Vite configuration
├── vercel.json                     # Vercel install configuration
├── tsconfig.json                   # TypeScript configuration
└── AGENTS.md                       # Project-specific development guidance
```

> **Fastest way to understand the app:** start with `src/routes/index.tsx`, then read `src/components/periodic-table.tsx`, `src/components/inspector.tsx`, `src/lib/elements.ts`, and `src/lib/store.ts`.

## ✨ Features

- **118 elements** presented in a responsive periodic-table layout.
- **Element inspector** with atomic mass, electron configuration, electronegativity, oxidation states, melting/boiling points, density, ionization energy, discovery information, phase, and electron-shell visualization.
- **Search/filtering** by element information and category.
- **Color modes** for:
  - category
  - periodic-table block (`s`, `p`, `d`, `f`)
  - physical state at the selected temperature
  - electronegativity
  - atomic mass
  - density
  - discovery year
- **Temperature slider** for exploring phase changes.
- **Favorites** saved locally in the browser.
- **Element of the day / surprise element** behavior.
- **10-question chemistry quiz** with score and best score persistence.
- **Keyboard navigation** between neighboring elements with arrow keys.
- **Responsive inspector**: desktop side panel and mobile bottom sheet.
- **PWA/install assets** and mobile-friendly layout.
- **Accessibility basics** including semantic buttons, labels, focus states, and reduced-motion support.

## 🧱 Architecture

```text
                         ┌─────────────────────┐
                         │      Browser UI      │
                         │  React 19 + Tailwind │
                         └──────────┬──────────┘
                                    │
                     ┌──────────────┴──────────────┐
                     │                             │
              ┌──────▼──────┐              ┌──────▼──────┐
              │ TanStack    │              │   Zustand   │
              │   Router    │              │    Store    │
              └──────┬──────┘              └──────┬──────┘
                     │                             │
              ┌──────▼─────────────────────────────▼──────┐
              │              Application logic             │
              │ elements.ts · quiz.ts · utils.ts · auth/ │
              └───────────────────┬───────────────────────┘
                                  │
                           server-only calls
                                  │
                    ┌─────────────▼─────────────┐
                    │          db.ts             │
                    │                            │
                    │ DATABASE_URL present       │
                    │       → PostgreSQL/Neon    │
                    │                            │
                    │ DATABASE_URL absent        │
                    │       → PGlite fallback    │
                    └─────────────┬─────────────┘
                                  │
                           migrations / auth
```

### State flow

`src/lib/store.ts` is the central client state store. It keeps UI state such as the selected element, search query, color mode, temperature, category filter, current view, favorites, and quiz best score. Only `favorites` and `quizBest` are persisted under the browser storage key `elementa-v1`.

### Element data flow

`src/lib/elements.ts` is the chemistry data source. The periodic table reads the element list and helper functions from this module; the inspector reads the same records, so the UI does not maintain duplicate chemistry data.

### Quiz flow

`src/lib/quiz.ts` generates questions from the same element dataset. `src/components/quiz-view.tsx` manages the current round, answers, score, and completion state. A round contains **10 questions**.

## 🛠️ Tech stack

- **React 19** — UI
- **TypeScript** — type-safe application code
- **TanStack Start / TanStack Router** — full-stack React framework and routing
- **Vite** — development/build tooling
- **Tailwind CSS 4** — styling and design tokens
- **Zustand** — client state management and persistence
- **Better Auth** — authentication infrastructure
- **PostgreSQL / Neon** — production database path when `DATABASE_URL` is configured
- **PGlite** — embedded PostgreSQL-compatible fallback for environments without `DATABASE_URL`
- **Lucide React** — icons
- **Playwright** — browser/smoke testing support

## 🚀 Local development

### Requirements

- Node.js with npm
- A terminal
- This repository

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The configured development server listens on port **8080** and binds to `0.0.0.0`, so it can also be opened from another device on the same network when firewall/network settings allow it.

### Useful commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite/TanStack development server |
| `npm run build` | Build the production application, then run DB migration logic |
| `npm run preview` | Preview the production build |
| `npm run preview:restart` | Restart the local preview helper |
| `npm run preview:stop` | Stop the local preview helper |
| `npm run typecheck` | Run TypeScript checking without emitting files |
| `npm run lint` | Run ESLint |
| `npm run format` | Format the project with Prettier |
| `npm test` | Run project tests |
| `npm run check:auth` | Run auth invariant checks |
| `npm run db:migrate` | Apply DB migrations when a database URL is configured |

## 🗄️ Database behavior

The database layer lives in `src/lib/db.ts` and is intentionally server-only.

- If `DATABASE_URL` is configured, the app uses a PostgreSQL connection through `pg` (compatible with the project's Neon deployment path).
- If `DATABASE_URL` is not configured, the app uses **PGlite** as an embedded fallback.
- The migration runner in `scripts/migrate.mjs` skips cleanly when `DATABASE_URL` is absent.
- Do not import `src/lib/db.ts` directly into browser/client code.
- Add application database migrations as new ordered SQL files rather than modifying an existing migration.

## 🔐 Authentication

Authentication infrastructure is implemented under `src/lib/auth/` using Better Auth.

Important pieces include:

- `providers.ts` — supported upstream identity providers.
- `server.ts` — server-side Better Auth configuration.
- `client.ts` — browser auth client.
- `verify.server.ts` — server-side session verification and user identity resolution.
- `middleware.ts` — server authentication middleware.
- `gates.tsx` — signed-in/signed-out UI gates.
- `email-password.ts` — email/password feature switch.
- `preview.ts` — live-preview authentication configuration.

Authentication behavior depends on the environment. In production, deployment-provided auth/database environment variables can enable real persisted authentication. When authentication is explicitly disabled and no real database is configured, the server can use the development user fallback described in `verify.server.ts`.

**Never commit real production secrets, OAuth credentials, database URLs, or tokens to the repository.** Use deployment/local environment configuration instead.

## 🎨 UI structure

The main screen is composed from three major pieces:

```text
AppHeader
   │
   ├── Table controls / navigation
   │
   └── Quiz navigation

PeriodicTable ─────────────── Inspector
   │                              │
   ├── Search                     ├── Selected element
   ├── Category filter            ├── Chemistry stats
   ├── Color mode                 ├── Electron shells
   ├── Temperature                └── Favorite toggle
   └── Element tiles

QuizView
   ├── Question
   ├── Multiple-choice answers
   ├── Score / progress
   └── Round result
```

The shared primitives under `src/components/ui/` keep common controls such as buttons, inputs, sliders, separators, badges, and tooltips consistent.

## 📱 Responsive behavior

- On large screens, the inspector appears as a fixed-width right-side panel.
- On smaller screens, the inspector becomes a bottom sheet.
- The periodic table intentionally has a minimum grid width and can scroll horizontally on narrow screens rather than collapsing the chemistry layout into an unreadable grid.
- `prefers-reduced-motion` is respected for element-tile animations.

## 🧪 Testing and quality

The project includes unit/invariant tests for several infrastructure areas, including:

- app-data readiness
- authentication identity/session gates
- migration planning
- preview behavior
- PWA helpers
- browser smoke verdicts
- environment handling

Before committing a substantial change, a useful local check is:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## 🌐 Deployment

The application is configured for **Vercel** and is detected as a **TanStack Start** application.

Current deployed project:

**https://grock-hazel.vercel.app/**

The repository used for deployment is:

**https://github.com/alfamaniya/grock**

For a normal Git-based deployment flow:

```text
Local project
     │
     ▼
   Git
     │
     ▼
 GitHub (main)
     │
     ▼
   Vercel
     │
     ▼
 Live Elementa site
```

## 📁 Where to edit what

| Goal | Primary file(s) |
|---|---|
| Change the periodic-table layout/UI | `src/components/periodic-table.tsx` + `src/styles.css` |
| Change element data | `src/lib/elements.ts` |
| Change the selected-element panel | `src/components/inspector.tsx` |
| Change header/navigation | `src/components/app-header.tsx` |
| Change quiz questions/logic | `src/lib/quiz.ts` |
| Change quiz screen | `src/components/quiz-view.tsx` |
| Change global client state | `src/lib/store.ts` |
| Add/change routes | `src/routes/` |
| Change global metadata/fonts/providers | `src/routes/__root.tsx` |
| Change visual theme/design tokens | `src/styles.css` |
| Change authentication | `src/lib/auth/` |
| Change database access | `src/lib/db.ts` |
| Add database schema | `migrations/` |
| Change Vercel configuration | `vercel.json` |
| Change npm commands/dependencies | `package.json` |
| Change PWA/server middleware | `server/` and `scripts/grok-pwa-*` |

## 🔄 Recommended development workflow

1. Pick the feature and identify its primary file using the table above.
2. Keep chemistry data in `src/lib/elements.ts` instead of duplicating values inside components.
3. Keep shared UI state in `src/lib/store.ts` rather than introducing component-local copies of global state.
4. Keep database access server-only.
5. Add a migration for persistent schema changes.
6. Run typecheck, lint, tests, and build before pushing.
7. Commit the change with a clear message.
8. Push to `main` and let Vercel deploy the updated commit.

## ⚠️ Important notes

- `src/routeTree.gen.ts` is generated by TanStack Router tooling; avoid hand-editing it.
- `src/lib/db.ts` is server-only and must not be imported into client components.
- Environment variables containing secrets must stay outside source control.
- The local PGlite fallback is useful for development/preview behavior; a production deployment that needs durable shared data should use a real PostgreSQL database through `DATABASE_URL`.
- The chemistry dataset is embedded in source code, so changing an element's displayed facts normally means editing `src/lib/elements.ts` and redeploying.

## 📄 License

No license file is currently included in the repository. If this project will be distributed publicly, add an explicit `LICENSE` file and choose the intended license before treating the repository as open-source.

---

**Elementa** — explore the periodic table, one element at a time.
