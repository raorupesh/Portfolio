# Portfolio

Recruiter-friendly React portfolio built with Vite, deployed on Cloudflare Pages.

## Features

- Modern single-page layout with dark/light theme (no flash-of-wrong-theme on load)
- Smooth color transitions when switching themes (respects `prefers-reduced-motion`)
- Self-hosted variable fonts — no external font requests, fast first paint
- Responsive design for desktop and mobile with a sticky blur topbar
- Sections: about, skills, projects, experience, education, github, testimonials, contact
- Live GitHub section that pulls profile + recent repos from the GitHub API (cached in `localStorage` for 6h, graceful fallback when offline)
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Environment-driven content via `src/site.ts`
- SEO with Open Graph, Twitter Cards, and JSON-LD structured data
- CI/CD via Cloudflare Pages (lint, build, deploy)

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

Connect the repository to Cloudflare Pages. Build command: `npm run build`. Output directory: `dist`. Each push to `main` is built and deployed automatically.

## Customize

Edit all site content in `src/site.ts` — names, links, bio text, project URLs, and more. Edit project and experience data in `src/data.ts`.
