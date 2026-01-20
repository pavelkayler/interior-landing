# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Live site

https://pavelkayler.github.io/interior-landing/

## Deployment

GitHub Pages deploys automatically on every push to `main` via GitHub Actions.

## Image placeholders (Plan B)

The UI currently uses remote Unsplash Source image URLs (see `src/core/assets/placeholders.js`) because binary assets could not be downloaded in this environment. Replace them with local files in `/public/media/...` before production to avoid external dependencies. See `public/media/SOURCES.md` for the current list of sources.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
