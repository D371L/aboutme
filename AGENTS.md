# AGENTS.md

## Cursor Cloud specific instructions

This is a **frontend-only** React/TypeScript portfolio site built with Vite. There is no backend, database, or external service required.

### Running the app

- `npm run dev` starts the Vite dev server on port **3000** (bound to `0.0.0.0`).
- The app is served under the base path `/aboutme/`, so the local URL is `http://localhost:3000/aboutme/`.
- `npm run build` produces a production build in `dist/`.

### Key caveats

- **No lockfile**: The repo has no `package-lock.json`. Running `npm install` will resolve latest semver-compatible versions each time.
- **No test suite**: There is no `test` script in `package.json`. Validation is done via `npx tsc --noEmit` (type-check) and `npm run build` (production build).
- **No linter configured**: There is no ESLint or Prettier config. Use `npx tsc --noEmit` for static analysis.
- **Tailwind via CDN**: Tailwind CSS is loaded from `cdn.tailwindcss.com` in `index.html`, not as an npm dependency. Builds require network access for the initial page load in a browser.
- **Gemini AI feature is disabled**: `DemonChat.tsx` returns `null` and `geminiService.ts` returns `"AI_DISABLED"`. No `GEMINI_API_KEY` is needed for normal development.
- **GitHub Pages base path**: The `BrowserRouter` uses `basename="/aboutme"` and `vite.config.ts` sets `base: '/aboutme/'`. All routes are under this prefix.
