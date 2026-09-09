# Gravity

The Gravity marketing site, built with Next.js (App Router), React, TypeScript,
Tailwind CSS v4, and shadcn/ui.

It is a rebuild of the original static HTML/CSS site. The look, colors, spacing,
fonts, and copy are meant to match the original one to one. The old design
tokens now live in the Tailwind theme in `app/globals.css`.

## Run it

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## How it is put together

| Path | What it holds |
| --- | --- |
| `app/layout.tsx` | Shared shell: skip link, header, `<main>`, footer, fonts, metadata |
| `app/page.tsx` | Home page (`/`) |
| `app/orbit/page.tsx` | Orbit page (`/orbit`) |
| `app/globals.css` | Tailwind setup plus the Gravity brand theme and base element styles |
| `app/fonts.ts` | Self-hosted Atkinson Hyperlegible and DM Serif Text |
| `components/` | Section and UI components (each file is commented) |
| `components/ui/` | shadcn/ui primitives |
| `lib/` | Plain data: navigation links, product cards, research links |
| `public/` | Images, videos, icons, favicons |

## Accessibility notes

- Every page has a skip link, one `<h1>`, and labelled landmark sections.
- Background videos have a pause button and are turned off for visitors who
  ask their device for reduced motion.
- Outside links open in a new tab and say so to screen readers.
- The type scale uses `clamp()` so text stays readable from phone to desktop.
- A few duplicate `id` values in the original markup were made unique here.
# gravity
