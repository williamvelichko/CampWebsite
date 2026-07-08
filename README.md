# Bible Camp Website

This repository contains a Next.js 14 website for promoting Bible Camp, publishing the camp schedule and FAQ, and embedding the registration form.

## What the website does

The site is a mostly static marketing website with four public routes:

- `/`: 2026 landing page with the full-bleed hero image, centered "The Gospel of God" title, Romans 1:16 theme verse, camp promo video, and activity highlights
- `/schedule`: 2026 editorial timeline schedule page rendered from a local JSON file
- `/faq`: accordion FAQ page rendered from a local JSON file
- `/registration`: registration page with important dates and an embedded external form when registration is open

The app uses the App Router in `src/app`, SCSS modules for component-level styling, and assets from `public/`.

## Temporary mode

The site supports a temporary holding state controlled by the `NEXT_PUBLIC_TEMPORARY_MODE` environment variable.

Example:

```bash
NEXT_PUBLIC_TEMPORARY_MODE=true
NEXT_PUBLIC_SHOW_REGISTRATION_PAYMENT_LINK=false
NEXT_PUBLIC_SUBSPLASH_REGISTRATION_URL=https://subsplash.com/bbc-ca/lb/ev/+rqpz76d/register
```

When temporary mode is `true`:

- the homepage hides the promo video
- the hero replaces the registration button with a temporary message
- the header removes the `Schedule` and `Register` links
- `/schedule` shows a temporary notice instead of the schedule
- `/registration` shows a temporary notice instead of the registration form

Use `.env.example` as the starting point for local configuration.

## Registration payment link visibility

The embedded registration/payment form can be hidden independently from temporary mode with `NEXT_PUBLIC_SHOW_REGISTRATION_PAYMENT_LINK`.

- unset or `true`: show the embedded form and the direct registration link
- `false`: hide the embedded form and direct link, and show a "Registration is currently closed" disclaimer on `/registration`

This is useful when the rest of the registration page should remain visible but the payment link is not ready to publish.

## How the site works

- `src/app/layout.tsx` wraps every page with the shared `Header` and `Footer`.
- `src/app/page.tsx` assembles the homepage sections in this order: hero, Romans 1:16 theme verse, video, activities.
- The header switches between desktop and mobile navigation based on `window.innerWidth`.
- The header also changes visual state when the homepage scroll position leaves the top of the page.
- The hero uses the full-bleed banner artwork in `public/Auburn-Camp-Banner.jpg` with the vertically and horizontally centered, responsive title "The Gospel of God".
- The 2026 design system uses Cormorant Garamond for display typography, DM Sans for interface/body text, warm cream backgrounds, dark navy panels, and gold accents.
- The video section uses the horizontal `public/BibleCamp2026PromoV3.mp4` promo video at every breakpoint.
- The schedule, FAQ, and activity cards load their content from local JSON files so non-layout content updates can be made without editing component markup.
- The schedule page uses the 2026 editorial timeline design, with day badges, Coffee Cart rows, a gold vertical timeline, and highlighted workshop/service/devotional/church events.
- The FAQ and registration pages use the same mobile-first page-hero treatment as the schedule page.
- The activity cards use the existing self-hosted WebP images from `public/` for the Preaching, Fellowship, Worship, and Prayer cards.
- The registration page lists the 2026 camp and registration dates, then either embeds the Subsplash registration/payment form from `NEXT_PUBLIC_SUBSPLASH_REGISTRATION_URL` or shows the closed-registration disclaimer when `NEXT_PUBLIC_SHOW_REGISTRATION_PAYMENT_LINK=false`.

## Content update guide

Use these files for routine content changes:

- Camp schedule: `src/app/components/Schedule/data/ScheduleData.json`
- FAQ entries: `src/app/components/FAQ/data/faqData.json`
- Activity cards: `src/app/components/Activities/data/expectData.json`
- Landing hero image: `public/Auburn-Camp-Banner.jpg`
- Landing hero title and display styling: `src/app/components/MainSection/MainSection.tsx` and `src/app/components/MainSection/styling/MainSection.module.scss`
- Registration page copy: `src/app/components/Registration/Registration.tsx`
- Registration/payment form visibility: `NEXT_PUBLIC_SHOW_REGISTRATION_PAYMENT_LINK` in `.env` or `.env.example`
- Registration/payment form URL: `NEXT_PUBLIC_SUBSPLASH_REGISTRATION_URL` in `.env` or `.env.example`, with the fallback value in `src/app/config/site.ts`
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

The current automated tests cover the public site routes, shared layout/config, and each reusable content section:

- route composition for `/`, `/faq`, `/schedule`, and `/registration`
- shared layout wiring in `src/app/layout.tsx`
- env-driven site config in `src/app/config/site.ts`, including temporary mode, registration/payment form visibility, and the registration/payment form URL
- header behavior plus desktop and mobile navigation variants
- homepage hero, verse, promo video, and activities sections
- FAQ accordion rendering for both HTML-string and list answers
- schedule rendering from local JSON content
- registration copy, embedded external form, and closed-registration disclaimer
- footer branding, navigation, contact details, social links, and copyright
- reusable temporary notice defaults and custom copy

Test support files:

- `vitest.setup.ts` registers shared DOM matchers and mocks Next.js primitives used by component tests
- `src/test/testUtils.tsx` provides reusable pathname and viewport helpers for route/component tests

Current suite size:

- 19 test files
- 40 tests

## Project structure

```text
src/app/
  config/
  fonts/
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
src/test/
  testUtils.tsx
public/
  images, videos, logo files, favicon
```

## File-by-file documentation

Detailed documentation for every tracked project file lives in `docs/FILE_MAP.md`.

## Review notes

The current codebase is simple to maintain, but there are a few implementation details worth knowing before changing it:

- Several components use client-side screen-width checks instead of CSS-only responsive behavior.
- Content dates in the hero, registration page, and schedule page are hard-coded for August 12-16, 2026 and should be updated together for future camps.
- The FAQ component renders string answers with `dangerouslySetInnerHTML`, so FAQ HTML should remain tightly controlled.
- The layout uses class names like `container mx-auto px-4 py-8`, but Tailwind CSS is not configured in this repository, so those utility class names do not currently map to any generated styles.
- The site imports Cormorant Garamond and DM Sans from Google Fonts at runtime to match the 2026 design handoff. The Old London font files remain in `src/app/fonts/` as available assets but are not part of the current design system.
- Automated tests use Vitest and React Testing Library with a jsdom environment.
