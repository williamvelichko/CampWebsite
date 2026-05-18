# File Map

This document explains what each tracked file in the repository is responsible for and how it fits into the website's logic.

## Root files

### `README.md`

Primary project overview. Explains what the site does, how it is structured, where common content updates should be made, and what the automated test suite currently covers.

### `AGENTS.md`

Repository-specific agent workflow. Requires documentation review, baseline verification, test planning, documentation updates, and automated test updates before agents claim a code change is complete.

### `package.json`

Project manifest. Defines the Next.js scripts (`dev`, `build`, `start`, `lint`) plus the test scripts (`test`, `test:watch`) and declares the runtime dependencies used by the site.

### `package-lock.json`

Generated npm lockfile. Pins exact dependency versions so installs are reproducible across machines and deployments.

### `.env.example`

Example environment configuration for local development. Documents the `NEXT_PUBLIC_TEMPORARY_MODE` flag used to switch the site into a temporary holding state and `NEXT_PUBLIC_SUBSPLASH_REGISTRATION_URL` used for the embedded registration/payment form.

### `next.config.mjs`

Next.js configuration entry point. It currently exports an empty config object, so the app uses Next.js defaults.

### `vitest.config.mts`

Vitest configuration.

Logic:

- Uses a `jsdom` browser-like test environment
- Loads `vitest.setup.ts` before tests
- Enables CSS handling for component tests
- Uses the automatic React JSX runtime during test transforms

### `vitest.setup.ts`

Test setup file.

Logic:

- Registers `@testing-library/jest-dom` matchers for DOM assertions
- Mocks `next/head`, `next/image`, `next/link`, and `next/navigation` for component tests
- Cleans up the DOM and resets the mocked pathname between tests

### `src/test/testUtils.tsx`

Shared test utilities for component and route tests.

Logic:

- Stores the mocked pathname consumed by the `next/navigation` mock
- Provides lightweight mock implementations for `next/link` and `next/image`
- Provides helpers for changing `window.innerWidth` and `window.scrollY` in tests

### `tsconfig.json`

TypeScript configuration. Enables strict checking, allows JavaScript files in the project, enables JSON imports, and defines the `@/*` alias for `src/*`.

### `src/app/config/site.ts`

Shared site-level configuration.

Logic:

- Reads `NEXT_PUBLIC_TEMPORARY_MODE` from the environment
- Reads `NEXT_PUBLIC_SUBSPLASH_REGISTRATION_URL` from the environment, with a checked-in fallback URL for the registration/payment form
- Exposes a single boolean used by both server and client components
- Builds the primary navigation links based on whether temporary mode is enabled
- Stores the shared temporary-mode message shown on disabled routes

### `src/app/config/site.test.ts`

Unit tests for the shared site config.

Coverage:

- verifies the env flag parsing
- verifies the temporary and non-temporary navigation sets
- verifies the default full-navigation fallback when the env flag is unset
- verifies the default and configured Subsplash registration/payment form URLs

## App router

### `src/app/layout.tsx`

Global layout for every route. Loads global CSS, shared metadata, the persistent header, the main page wrapper, and the footer.

Logic:

- Renders `Header` above route content and `Footer` below it
- Provides the site-wide metadata title and description

### `src/app/layout.test.tsx`

Route-shell tests for the root layout.

Coverage:

- verifies that route content is wrapped with the shared header and footer
- verifies the exported site metadata

### `src/app/globals.css`

Global CSS applied once for the entire app. Imports Cormorant Garamond and DM Sans, sets the 2026 warm cream/navy/gold CSS variables, resets default body spacing, and makes the page fill the viewport vertically so the footer sits below the main content.

### `src/app/page.tsx`

Homepage route component. Composes the landing page from reusable sections.

Logic:

- Renders `MainSection` as the hero
- Renders `About`, `Video`, and `Activities` in sequence below the hero
- Hides the `Video` section when temporary mode is enabled

### `src/app/page.test.tsx`

Route-level tests for `/`.

Coverage:

- verifies the homepage renders all main sections in normal mode
- verifies the promo video section is hidden in temporary mode

### `src/app/page.module.scss`

Homepage-specific wrapper styles. Imports shared SCSS variables and sets basic margins for the homepage container and content area.

### `src/app/schedule/page.tsx`

Route entry for `/schedule`.

Logic:

- Renders `Schedule` when temporary mode is disabled
- Renders `TemporaryNotice` when temporary mode is enabled

### `src/app/schedule/page.test.tsx`

Route-level tests for `/schedule`.

Coverage:

- verifies the temporary notice is shown when temporary mode is enabled
- verifies the schedule view is shown when temporary mode is disabled

### `src/app/faq/page.tsx`

Route entry for `/faq`. Delegates the page body to the `FAQ` component.

### `src/app/faq/page.test.tsx`

Route-level test for `/faq`.

Coverage:

- verifies that the route renders the FAQ component

### `src/app/registration/page.tsx`

Route entry for `/registration`.

Logic:

- Renders `Registration` when temporary mode is disabled
- Renders `TemporaryNotice` when temporary mode is enabled

### `src/app/registration/page.test.tsx`

Route-level tests for `/registration`.

Coverage:

- verifies the temporary notice is shown when temporary mode is enabled
- verifies the registration view is shown when temporary mode is disabled

### `src/app/styles/styles.scss`

Shared SCSS variables. Centralizes the 2026 cream, navy, muted slate, and gold palette plus the Cormorant Garamond and DM Sans font stacks used by component styles.

### `src/app/fonts/OldLondon.ttf`

Self-hosted Old London TrueType font available in the project but not currently referenced by the app.

### `src/app/fonts/OldLondonAlternate.ttf`

Alternate Old London TrueType font available in the project but not currently referenced by the app.

### `src/app/fonts/Olondon_.otf`

Old London OpenType font variant available in the project but not currently referenced by the app.

### `src/app/fonts/Olondona.otf`

Alternate Old London OpenType font variant available in the project but not currently referenced by the app.

## Header

### `src/app/components/Header/Header.tsx`

Client component for the fixed site header.

Logic:

- Reads the current pathname with `usePathname`
- Tracks whether the page is scrolled to the top
- Tracks whether the mobile menu is open
- Tracks whether the viewport is below the `800px` mobile breakpoint
- Uses a transparent style at the top of the homepage and a white style after scrolling or on inner pages
- Switches between `DesktopNavbar` and `MobileNavbar`

### `src/app/components/Header/Header.test.tsx`

Component tests for `Header`.

Coverage:

- verifies that desktop widths use the desktop navigation
- verifies that inner pages are treated as scrolled immediately
- verifies that mobile widths use the mobile navigation and that the menu toggles open

### `src/app/components/Header/components/DesktopNavbar.tsx`

Desktop navigation component.

Logic:

- Reads the main route links from shared site config
- Highlights the active route using `usePathname`
- Accepts `isAtTop` so link colors can change with the transparent versus scrolled header state

### `src/app/components/Header/components/DesktopNavbar.test.tsx`

Component tests for `DesktopNavbar`.

Coverage:

- verifies the full navigation renders when temporary mode is disabled
- verifies the trimmed navigation renders when temporary mode is enabled

### `src/app/components/Header/components/MobileNavbar.tsx`

Mobile full-screen navigation drawer.

Logic:

- Reads the same shared route link structure used by the desktop nav
- Opens and closes based on props passed from `Header`
- Closes when the backdrop, close button, or any navigation link is clicked
- Highlights the active route
- Locks body scrolling while open so the full-screen menu remains stable on mobile devices

### `src/app/components/Header/components/MobileNavbar.test.tsx`

Component tests for `MobileNavbar`.

Coverage:

- verifies the mobile navigation renders the public links
- verifies the backdrop, close button, and navigation links all trigger the menu toggle callback
- verifies body scrolling is locked only while the mobile navigation is open

### `src/app/components/Header/styles/Header.module.scss`

Styles for the fixed translucent navy header shell, logo behavior, scroll-state styling, and fixed-size hamburger button.

### `src/app/components/Header/styles/DesktopNavbar.module.scss`

Styles for the desktop navigation list, active-link treatment, gold register button, and scroll-state color swap.

### `src/app/components/Header/styles/MobileNavbar.module.scss`

Styles for the viewport-safe full-screen mobile nav overlay, close button, scrollable short-screen layout, and stacked Cormorant mobile links.

## Homepage sections

### `src/app/components/MainSection/MainSection.tsx`

Client component for the homepage hero banner.

Logic:

- Uses `public/Auburn-Camp-Banner.jpg` as the full-bleed hero image
- Renders the hero image, layered dark/gold overlays, the vertically and horizontally centered "The Gospel of God" title, and a scroll cue
- Shows registration and schedule CTAs only when temporary mode is disabled
- Replaces the CTA with a temporary message when temporary mode is enabled

### `src/app/components/MainSection/MainSection.test.tsx`

Component tests for `MainSection`.

Coverage:

- verifies the registration/schedule CTAs and banner hero image in normal mode
- verifies the centered hero title renders in both normal and temporary modes
- verifies the temporary badge renders with the same banner hero image

### `src/app/components/MainSection/styling/MainSection.module.scss`

Styles for the full-height 2026 hero layout, image positioning, responsive Cormorant title stack, dark/gold overlays, CTA buttons, temporary badge, and scroll cue animation.

### `src/app/components/About/About.tsx`

Simple presentational section on the homepage. Displays Romans 1:16 as the 2026 theme verse.

### `src/app/components/About/About.test.tsx`

Component test for `About`.

Coverage:

- verifies the verse reference and verse copy render

### `src/app/components/About/styling/About.module.scss`

Styles for the centered Romans 1:16 section, ornamental rule, and responsive quote typography.

### `src/app/components/Video/Video.tsx`

Promo video section component.

Logic:

- Uses `public/BibleCamp2026PromoV3.mp4` as the single horizontal promo video at every breakpoint
- Enables controls, autoplay, loop, and inline playback

### `src/app/components/Video/Video.test.tsx`

Component tests for `Video`.

Coverage:

- verifies the same 2026 horizontal promo video source is used on small and large screens

### `src/app/components/Video/styles/Video.module.scss`

Styles for centering the horizontal promo video, preserving a 16:9 aspect ratio at every breakpoint, and aligning the section with the 2026 cream background.

### `src/app/components/Activities/Activities.tsx`

Homepage section that introduces the camp experience and then renders the activity cards.

Logic:

- Displays the "What to Expect" heading and gospel-centered summary copy
- Renders the `Expectations` grid below the introduction

### `src/app/components/Activities/Activities.test.tsx`

Component test for `Activities`.

Coverage:

- verifies the intro copy renders together with expectation card content

### `src/app/components/Activities/components/Expectations.tsx`

Presentational component that maps local JSON data into image cards.

Logic:

- Imports `expectData.json`
- Loops through each activity item
- Renders an image card with Roman numeral, title, divider, and description overlay

### `src/app/components/Activities/components/Expectations.test.tsx`

Component test for `Expectations`.

Coverage:

- verifies each activity JSON entry renders its title, image, and description

### `src/app/components/Activities/data/expectData.json`

Content source for the homepage activity cards.

Data shape:

- `activity`: card title
- `image`: primary image path currently used by the component
- `imageWebp`: alternate WebP path currently stored in data but not used by the component
- `description`: overlay body text

### `src/app/components/Activities/styles/Expectations.module.scss`

Styles for both the dark navy activity intro section and the mobile-first expectation card grid.

## Schedule page

### `src/app/components/Schedule/Schedule.jsx`

Schedule page component.

Logic:

- Imports `ScheduleData.json`
- Renders the 2026 schedule header with date range, title, subtitle, and divider ornament
- Renders three timeline sections from the local JSON data: arrival day, Thursday-Saturday, and departure day
- Maps each event into a time/activity row on the vertical gold timeline
- Applies a highlighted row treatment to workshop, service, devotional, and church events
- Represents Coffee Cart hours as normal schedule rows in the Thursday-Saturday section

Note:

- This component is bypassed when temporary mode is enabled

### `src/app/components/Schedule/Schedule.test.tsx`

Component test for `Schedule`.

Coverage:

- verifies the 2026 schedule header, all three timeline sections, Coffee Cart rows, and representative events render
- verifies workshop, service, devotional, and church events are marked as highlighted timeline rows

### `src/app/components/Schedule/data/ScheduleData.json`

Content source for the schedule page.

Data shape:

- `dateRange`: eyebrow date text shown above the schedule title
- `subtitle`: italic page subtitle under the schedule title
- `sections`: ordered list of schedule day groups
- section `badge`: compact day label such as `Day 1`
- section `title`: day heading such as `Arrival Day — August 12`
- section `events`: ordered list of schedule rows
- event `time`: displayed time range
- event `activity`: displayed event name
- event `highlight`: boolean used for the gold dot and emphasized event typography

### `src/app/components/Schedule/styles/schedule.module.scss`

Styles for the 2026 editorial schedule design: warm cream page background, centered title block, gold divider ornament, day badges, vertical gold timeline, highlighted rows, and mobile/tablet responsive timeline layout.

## FAQ page

### `src/app/components/FAQ/FAQ.jsx`

Client component for the FAQ accordion.

Logic:

- Stores the currently expanded item index in local state
- Toggles the active item open and closed through accessible accordion buttons
- Accepts FAQ answers as either an array of strings or an HTML string
- Renders arrays as a list
- Renders string answers with `dangerouslySetInnerHTML`

### `src/app/components/FAQ/FAQ.test.tsx`

Component tests for `FAQ`.

Coverage:

- verifies HTML-string answers expand and collapse correctly
- verifies array answers render as lists

### `src/app/components/FAQ/data/faqData.json`

Content source for the FAQ page.

Data shape:

- `question`: question heading shown in the accordion
- `answer`: either a plain string, an HTML string, or an array of strings

### `src/app/components/FAQ/styles/FAQ.module.scss`

Styles for the FAQ page hero, accessible accordion buttons, answer panels, and responsive typography.

## Registration page

### `src/app/components/Registration/Registration.tsx`

Registration page component.

Logic:

- Reads the external registration/payment form URL from shared site config
- Shows hard-coded August 12-16, 2026 camp date information and registration deadline information
- Embeds the external registration form inside an `iframe`
- Includes helper copy below the embedded form frame

Note:

- This component is bypassed when temporary mode is enabled

### `src/app/components/Registration/Registration.test.tsx`

Component test for `Registration`.

Coverage:

- verifies the 2026 registration heading, dates, embedded form URL, and direct registration link render

## Temporary notice

### `src/app/components/TemporaryNotice/TemporaryNotice.tsx`

Reusable holding-state component for routes that are temporarily unavailable.

Logic:

- Accepts a title and description
- Renders a centered temporary-update message card

### `src/app/components/TemporaryNotice/TemporaryNotice.test.tsx`

Component test for `TemporaryNotice`.

Coverage:

- verifies the title, description, and label render correctly
- verifies the default holding-state copy renders when props are omitted

### `src/app/components/TemporaryNotice/styles/TemporaryNotice.module.scss`

Styles for the temporary notice layout and card using the 2026 cream/navy/gold visual system.

### `src/app/components/Registration/styles/Registration.module.scss`

Styles for the registration page hero, sticky date block on desktop, and large embedded form frame.

## Footer

### `src/app/components/Footer/Footer.tsx`

Shared site footer.

Logic:

- Displays the camp logo, "The Gospel of God" footer wordmark, Romans 1:16 footer copy, ministry attribution, physical address, and phone number
- Links to the main site routes
- Links to Instagram and YouTube with `react-icons`
- Shows a copyright line

### `src/app/components/Footer/Footer.test.tsx`

Component test for `Footer`.

Coverage:

- verifies the shared contact details, social links, and 2026 copyright render correctly

### `src/app/components/Footer/styles/Footer.module.scss`

Styles for the dark navy footer layout, logo, footer navigation, social icons, and bottom copyright section.

## Public assets

### `public/favicon.ico`

Browser favicon for the site.

### `public/NewBibleCampLogo.png`

Primary camp logo used in the header and footer.

### `public/UpdatedLogo.svg`

Alternate logo asset present in the repo but not referenced by the current app code.

### `public/Auburn-Camp-Banner.jpg`

Current full-bleed homepage hero image.

### `public/next.svg`

Default Next.js starter asset. Not referenced by the current app code.

### `public/vercel.svg`

Default Vercel starter asset. Not referenced by the current app code.

### `public/GloryOfGodVert.webp`

Previous mobile hero image in WebP format. Not referenced by the current app code.

### `public/GloryOfGodVert.jpg`

Previous mobile hero image fallback in JPG format. Not referenced by the current app code.

### `public/GloryOfGodHorizontal.webp`

Previous desktop hero image in WebP format. Not referenced by the current app code.

### `public/GloryOfGodHorizontal.jpg`

Previous desktop hero image fallback in JPG format. Not referenced by the current app code.

### `public/BibleCamp2026PromoV3.mp4`

Current horizontal MP4 promo video used by the homepage video section.

### `public/campvideo2025V.webm`

Previous vertical promo video in WebM format. Not referenced by the current app code.

### `public/campvideo2025V.mp4`

Previous vertical promo video in MP4 format. Not referenced by the current app code.

### `public/campvideo2025H.webm`

Previous horizontal promo video in WebM format. Not referenced by the current app code.

### `public/campvideo2025H.mp4`

Previous horizontal promo video in MP4 format. Not referenced by the current app code.

### `public/preaching2026.webp`

Current WebP activity image for the preaching card.

### `public/fellowship2026.webp`

Current WebP activity image for the fellowship card.

### `public/worship2026.webp`

Current WebP activity image for the worship card.

### `public/prayer2026.webp`

Current WebP activity image for the prayer card.

### `public/worship1.webp`

Additional worship-related WebP image available in the project but not currently referenced by the app.

### `public/campPreaching2025.jpg`

Previous JPG activity image for the preaching card. Not referenced by the current app code.

### `public/campPreaching2025.webp`

Previous WebP version of the preaching activity image. Not referenced by the current app code.

### `public/Fellowship.JPG`

Previous JPG activity image for the fellowship card. Not referenced by the current app code.

### `public/Fellowship.webp`

Previous WebP version of the fellowship activity image. Not referenced by the current app code.

### `public/campWorship2025.jpg`

Previous JPG activity image for the worship card. Not referenced by the current app code.

### `public/campWorship2025.webp`

Previous WebP version of the worship activity image. Not referenced by the current app code.

### `public/campPrayer2025.JPG`

Previous JPG activity image for the prayer card. Not referenced by the current app code.

### `public/campPrayer2025.webp`

Previous WebP version of the prayer activity image. Not referenced by the current app code.

## Maintenance notes

The current website is straightforward, but a few implementation details matter when changing it:

- Route content is mostly static and local. There is no CMS, API, or database.
- Responsive behavior is split between CSS breakpoints and client-side viewport checks.
- Most user-editable content is stored in JSON files, except for the footer copy, hero button, verse, and registration page details.
- The registration form is external. If the Subsplash URL changes, update `NEXT_PUBLIC_SUBSPLASH_REGISTRATION_URL`; `src/app/config/site.ts` contains the fallback URL used when the env variable is blank.
- Some assets and starter files are still present even though the live app does not use them.
