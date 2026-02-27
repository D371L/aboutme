# AGENTS.md

## Cursor Cloud specific instructions

This is a **frontend-only** static portfolio site built with pure HTML, CSS, and JavaScript. No build tools, no frameworks, no dependencies.

### Running the app

- Serve with any static HTTP server, e.g. `python3 -m http.server 3000`
- The local URL is `http://localhost:3000/`
- Uses hash-based routing: `#/`, `#/experience`, `#/scriptures`, `#/techstack`

### Key caveats

- **No build step**: The site is pure static files — `index.html`, `style.css`, `main.js`, and `assets/` images.
- **No dependencies**: No `package.json`, no `node_modules`, no npm/yarn/pnpm.
- **No test suite**: Validation is visual — serve the site and check in a browser.
- **Tailwind via CDN**: Tailwind CSS is loaded from `cdn.tailwindcss.com` in `index.html`.
- **GitHub Pages deploy**: The workflow at `.github/workflows/deploy.yml` uploads the repo root directly (no build).
- **Hash routing**: Navigation uses `#/path` format. The `main.js` file handles showing/hiding page sections based on the hash.
