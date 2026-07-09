# Portfolio

Recruiter-friendly React portfolio built with Vite for GitHub Pages.

## Features

- Modern single-page layout with dark/light theme
- Responsive design for desktop and mobile
- Sections: about, skills, projects, experience, education, testimonials, contact
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Environment-driven content via `src/site.ts`
- SEO with Open Graph, Twitter Cards, and JSON-LD structured data
- CI/CD via GitHub Actions (lint, build, deploy)

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production files are generated in the `dist` folder.

## Run tests

```bash
npm test
```

## Lint and format

```bash
npm run lint
npm run format
```

## Deploy

Push to `main` to trigger the GitHub Actions workflow, which lints, builds, and deploys to GitHub Pages.

## Customize

Edit all site content in `src/site.ts` — names, links, bio text, project URLs, and more. Edit project and experience data in `src/data.ts`.
