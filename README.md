# Portfolio

**Live site: [rupeshwar.com](https://rupeshwar.com)**

The source for my personal portfolio: a single-page React and TypeScript site built with Vite and deployed on Cloudflare Pages. For my background, projects and contact details, see the live site.

## Engineering highlights

- **Fast first load.** Fonts are self-hosted, so the page makes no requests to other origins. Sections below the fold are lazy-loaded, and fingerprinted assets are cached for a year.
- **No theme flash.** A small blocking script sets dark or light mode before the first paint, from the saved choice or the system setting.
- **Locked-down security headers.** [`public/_headers`](public/_headers) sets a strict Content-Security-Policy (`script-src 'self'`, no inline scripts), HSTS, and blocks framing and unneeded browser APIs.
- **Accessible.** Skip link, labelled navigation, visible focus styles, and animations that switch off under `prefers-reduced-motion`.
- **SEO.** Open Graph and Twitter cards, a canonical URL, and JSON-LD structured data.
- **Content separate from code.** All text lives in two typed files, so updating the site doesn't touch components.
- **Maintained.** Tests with Vitest and Testing Library, ESLint and Prettier, and weekly Dependabot updates.

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev          # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the test suite once |
| `npm run lint` | Lint `src/` |
| `npm run format` | Format with Prettier |

## Editing content

- [`src/site.ts`](src/site.ts): name, headline, bio, links and section headings.
- [`src/data.ts`](src/data.ts): projects, experience, education, skills, publications, testimonials and the hero stats.

## Project structure

```
public/            static files served as-is (resume, icons, _headers, theme-init.js)
src/
  sections/        one component per page section
  hooks/           scroll-reveal and active-section tracking
  site.ts, data.ts site content
  styles.css       design tokens and all styles
  __tests__/       Vitest + Testing Library tests
```

## Deployment

Cloudflare Pages builds every push to `main` with `npm run build` and serves `dist/`. The headers in `public/_headers` are applied automatically.

## Security

See [SECURITY.md](SECURITY.md) for how to report a vulnerability.

## License

The code is released under the [MIT License](LICENSE). This covers the code only, not the resume, personal content or images.
