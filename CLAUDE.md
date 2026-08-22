# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page recruiter-facing portfolio site (Rupeshwar Rao), built with React + TypeScript + Vite, deployed on Cloudflare Pages (auto-deploy on push to `main`).

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # tsc -b (project references, type-check only) then vite build -> dist/
npm run preview   # preview the production build
npm test          # vitest run (single run)
npm run test:watch
npm run lint      # eslint src/
npm run format    # prettier --write "src/**/*.{ts,tsx,css}"
```

Run a single test file: `npx vitest run src/__tests__/App.test.tsx`.

There is no separate typecheck script — type errors surface via `npm run build` (`tsc -b`) since `build` type-checks before bundling.

## Architecture

- **Content/config split from presentation**: All copy, labels, and site metadata (nav links, section headings, hero text, contact info, theme labels, etc.) live in `src/site.ts` as one `site` object. Structured list data (projects, experience, publications, testimonials) lives in typed arrays in `src/data.ts`, which imports `site` for project URLs. Components should read from these two files rather than hardcoding strings — this is the primary place to edit when changing content.
- **App shell** (`src/App.tsx`): owns theme state (`dark`/`light`, persisted to `localStorage['portfolio-theme']`, initial value resolved synchronously in `index.html`'s inline script to avoid flash-of-wrong-theme) and mobile-nav-open state, and composes the page from section components in a fixed order.
- **Sections** (`src/sections/*.tsx`): one component per page section (Hero, About, Skills, Projects, Experience, Education, Publications, Testimonials, Contact, Footer, plus `Topbar` and `ThemeToggle`). Hero/About/Skills load eagerly; Projects/Experience/Education/Publications/Testimonials/Contact are `React.lazy`-loaded and wrapped in a single `Suspense` in `App.tsx` to keep initial bundle small.
- **Active-section tracking** (`src/hooks/useActiveSection.ts`): uses `IntersectionObserver` over all `section[id]` elements to drive the topbar's active-link highlighting; `src/hooks/useReveal.ts` drives scroll-reveal animations (both respect `prefers-reduced-motion`).
- **Theming**: theme is expressed as `data-theme` on `<html>` plus `colorScheme`, styled entirely through `src/styles.css` (no CSS-in-JS/Tailwind). Theme switches apply a temporary `theme-transition` class for the animated color transition.
- **Fonts**: self-hosted via `@fontsource-variable/*` packages (Inter, Space Grotesk) and `@fontsource/jetbrains-mono` — no external font requests.
- **Icons**: inline SVG components in `src/icons.tsx`, not an icon library.
- **SEO**: Open Graph/Twitter/canonical meta tags and JSON-LD `Person` structured data are hardcoded directly in `index.html`'s `<head>` — keep these in sync with `src/site.ts` when changing name/role/description.
- **Tests**: Vitest + Testing Library + jsdom (`src/__tests__/`), setup file at `src/__tests__/setup.ts`, config inline in `vite.config.ts` (`test` block) rather than a separate vitest config.
