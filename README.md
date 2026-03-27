# Jackson Bright Builders Website

This project is a Vite + React site configured to deploy on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages deployment notes

- The production base path is now configurable with `VITE_BASE_PATH`.
- The GitHub Actions workflow sets `VITE_BASE_PATH` to the repository name automatically.
- The workflow also creates a `dist/.nojekyll` file so static assets are served without Jekyll processing.
- SPA routing fallback is handled via `public/404.html` and the redirect handler in `index.html`.
