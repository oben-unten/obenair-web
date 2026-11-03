# AGENTS.md

Oben Air festival website — [Astro](https://astro.build) + Tailwind CSS + React islands, deployed to Netlify.

## Branches

**The active branch is `astro`, not `main`.** Base all work on `astro`.

This repo does not use pull requests — commit straight to `astro`.

## Install

Node 22 (see `.nvmrc`):

```bash
nvm use && npm install
```

## Run

| Command | Action |
| :--- | :--- |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run clean` | Clear Astro's cache |

There is no test suite or linter; verify changes by running the dev server and checking that `npm run build` succeeds.

## Layout

- `src/pages/` — routes (file name = URL)
- `src/layouts/`, `src/components/` — Astro and React components
- `src/content/` — content collections (`artists/`, `info/`, `pages/`), schemas in `src/content/config.ts`
- `src/cms/`, `src/templates/`, `src/previews/` — CMS integration
- `src/images/`, `src/styles/`, `public/` — assets
