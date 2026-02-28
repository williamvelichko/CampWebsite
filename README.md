# Bible Camp Website

This repository contains a Next.js 14 website for promoting Bible Camp, publishing the camp schedule and FAQ, and embedding the registration form.

## What the website does

The site is a mostly static marketing website with four public routes:

- `/`: landing page with the hero image, verse, camp promo video, and activity highlights
- `/schedule`: schedule page rendered from a local JSON file
- `/faq`: accordion FAQ page rendered from a local JSON file
- `/registration`: registration page with important dates and an embedded external form

The app uses the App Router in `src/app`, SCSS modules for component-level styling, and assets from `public/`.

## Temporary mode

The site supports a temporary holding state controlled by the `NEXT_PUBLIC_TEMPORARY_MODE` environment variable.

Example:

```bash
NEXT_PUBLIC_TEMPORARY_MODE=true
```

When temporary mode is `true`:

- the homepage hides the promo video
- the hero replaces the registration button with a temporary message
- the header removes the `Schedule` and `Register` links
- `/schedule` shows a temporary notice instead of the schedule
- `/registration` shows a temporary notice instead of the registration form

Use `.env.example` as the starting point for local configuration.

## How the site works

- `src/app/layout.tsx` wraps every page with the shared `Header` and `Footer`.
- `src/app/page.tsx` assembles the homepage sections in this order: hero, about verse, video, activities.
- The header switches between desktop and mobile navigation based on `window.innerWidth`.
- The header also changes visual state when the homepage scroll position leaves the top of the page.
- The hero image swaps between vertical and horizontal artwork depending on screen width, and it falls back from WebP to JPG if the browser does not support WebP.
- The video section swaps between vertical and horizontal video files based on screen width.
- The schedule, FAQ, and activity cards load their content from local JSON files so non-layout content updates can be made without editing component markup.
- The registration page embeds a hosted Subsplash registration form inside an `iframe`.

## Content update guide

Use these files for routine content changes:

- Camp schedule: `src/app/components/Schedule/data/ScheduleData.json`
- FAQ entries: `src/app/components/FAQ/data/faqData.json`
- Activity cards: `src/app/components/Activities/data/expectData.json`
- Registration page copy and embedded form URL: `src/app/components/Registration/Registration.tsx`
- Footer contact and social links: `src/app/components/Footer/Footer.tsx`
- Header navigation links: `src/app/components/Header/components/DesktopNavbar.tsx` and `src/app/components/Header/components/MobileNavbar.tsx`
- Temporary mode flag and shared messaging: `src/app/config/site.ts`

## Tech stack

- Next.js 14.2.3
- React 18
- TypeScript
- SCSS modules
- Vitest
- React Testing Library
- `react-icons` for footer social icons

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Other scripts:

```bash
npm test
npm run test:watch
npm run build
npm run lint
npm run start
```

## Test coverage

The current automated tests cover the temporary-mode behavior:

- shared env-driven site config in `src/app/config/site.ts`
- the reusable temporary notice component
- the `/schedule` route switching between the schedule and temporary notice
- the `/registration` route switching between the registration page and temporary notice

## Project structure

```text
src/app/
  config/
  components/
    About/
    Activities/
    FAQ/
    Footer/
    Header/
    MainSection/
    Registration/
    Schedule/
    TemporaryNotice/
    Video/
  faq/page.tsx
  registration/page.tsx
  schedule/page.tsx
  globals.css
  layout.tsx
  page.module.scss
  page.tsx
public/
  images, videos, logo files, favicon
```

## File-by-file documentation

Detailed documentation for every tracked project file lives in `docs/FILE_MAP.md`.

## Review notes

The current codebase is simple to maintain, but there are a few implementation details worth knowing before changing it:

- Several components use client-side screen-width checks instead of CSS-only responsive behavior.
- Content dates in the schedule, footer, and registration page are currently hard-coded for 2025.
- The FAQ component renders string answers with `dangerouslySetInnerHTML`, so FAQ HTML should remain tightly controlled.
- The layout uses class names like `container mx-auto px-4 py-8`, but Tailwind CSS is not configured in this repository, so those utility class names do not currently map to any generated styles.
- The site now uses a local system font stack so builds do not depend on Google Fonts network requests.
- Automated tests use Vitest and React Testing Library with a jsdom environment.
