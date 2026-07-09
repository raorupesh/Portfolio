# Portfolio

Recruiter-friendly React portfolio built with Vite for GitHub Pages.

## Features

- Modern single-page layout
- Responsive design for desktop and mobile
- Sections for about, skills, projects, experience, testimonials, and contact
- Easy-to-edit placeholder content

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

## Deploy to GitHub Pages

1. Run `npm run build`.
2. Push the `dist` output to your GitHub Pages branch or use GitHub Actions.
3. If this is a user or organization site, publish from the repository root for `https://your-username.github.io/`.

## Edit the portfolio

- Update your name, bio, and contact details in `src/App.tsx`.
- Replace the sample projects and experience with your own work.
- Tweak colors, fonts, and spacing in `src/styles.css`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in your real values. The site reads its brand, title, links, email, and key copy from those variables.

Example:

```bash
copy .env.example .env.local
```