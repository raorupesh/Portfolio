# Portfolio

Recruiter-friendly React portfolio built with Vite, deployed on Cloudflare Pages.

## Features

- Modern single-page layout with dark/light theme
- Responsive design for desktop and mobile
- Sections: about, skills, projects, experience, education, testimonials, contact
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
