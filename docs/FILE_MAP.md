# File Map

This document explains what each tracked file in the repository is responsible for and how it fits into the website's logic.

## Root files

### `README.md`

Primary project overview. Explains what the site does, how it is structured, and where common content updates should be made.

### `package.json`

Project manifest. Defines the Next.js scripts (`dev`, `build`, `start`, `lint`) plus the test scripts (`test`, `test:watch`) and declares the runtime dependencies used by the site.

### `package-lock.json`

Generated npm lockfile. Pins exact dependency versions so installs are reproducible across machines and deployments.

### `.env.example`

Example environment configuration for local development. Documents the `NEXT_PUBLIC_TEMPORARY_MODE` flag used to switch the site into a temporary holding state.

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

Test setup file. Registers `@testing-library/jest-dom` matchers for DOM assertions.

### `tsconfig.json`

TypeScript configuration. Enables strict checking, allows JavaScript files in the project, enables JSON imports, and defines the `@/*` alias for `src/*`.

### `src/app/config/site.ts`

Shared site-level configuration.

Logic:

- Reads `NEXT_PUBLIC_TEMPORARY_MODE` from the environment
- Exposes a single boolean used by both server and client components
- Builds the primary navigation links based on whether temporary mode is enabled
- Stores the shared temporary-mode message shown on disabled routes

### `src/app/config/site.test.ts`

Unit tests for the shared site config.

Coverage:

- verifies the env flag parsing
- verifies the temporary and non-temporary navigation sets

## App router

### `src/app/layout.tsx`

Global layout for every route. Loads fonts, global CSS, shared metadata, the persistent header, the main page wrapper, and the footer.

Logic:

- Renders `Header` above route content and `Footer` below it
- Provides the site-wide metadata title and description

### `src/app/globals.css`

Global CSS applied once for the entire app. Resets default body spacing, applies the base system font stack, and makes the page fill the viewport vertically so the footer sits below the main content.

### `src/app/page.tsx`

Homepage route component. Composes the landing page from reusable sections.

Logic:

- Renders `MainSection` as the hero
- Renders `About`, `Video`, and `Activities` in sequence below the hero
- Hides the `Video` section when temporary mode is enabled

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

Shared SCSS variables. Centralizes the main palette and primary local font stack used by component styles.

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

### `src/app/components/Header/components/DesktopNavbar.tsx`

Desktop navigation component.

Logic:

- Reads the main route links from shared site config
- Highlights the active route using `usePathname`
- Accepts `isAtTop` so link colors can change with the transparent versus scrolled header state

### `src/app/components/Header/components/MobileNavbar.tsx`

Mobile full-screen navigation drawer.

Logic:

- Reads the same shared route link structure used by the desktop nav
- Opens and closes based on props passed from `Header`
- Closes when the backdrop, close button, or any navigation link is clicked
- Highlights the active route

### `src/app/components/Header/styles/Header.module.scss`

Styles for the fixed header shell, logo behavior, scroll-state styling, and hamburger icon.

### `src/app/components/Header/styles/DesktopNavbar.module.scss`

Styles for the desktop navigation list, active-link underline, and scroll-state color swap.

### `src/app/components/Header/styles/MobileNavbar.module.scss`

Styles for the mobile nav drawer, backdrop overlay, close button, and stacked mobile links.

## Homepage sections

### `src/app/components/MainSection/MainSection.tsx`

Client component for the homepage hero banner.

Logic:

- Tracks which hero image should be shown in component state
- Uses `window.innerWidth` to choose vertical artwork on small screens and horizontal artwork on larger screens
- Uses a canvas capability check to prefer WebP assets and fall back to JPG when necessary
- Renders the hero image, an overlay, and a bouncing down arrow
- Shows the registration CTA only when temporary mode is disabled
- Replaces the CTA with a temporary message when temporary mode is enabled

### `src/app/components/MainSection/styling/MainSection.module.scss`

Styles for the full-height hero layout, image positioning, overlay, register button, temporary badge, and arrow animation.

### `src/app/components/About/About.tsx`

Simple presentational section on the homepage. Displays Psalm 72:19 as the theme verse.

### `src/app/components/About/styling/About.module.scss`

Styles for the centered verse section and its responsive width.

### `src/app/components/Video/Video.tsx`

Client component for the promo video section.

Logic:

- Tracks the selected video files in state
- Chooses vertical video files below `600px`
- Chooses horizontal video files at `600px` and above
- Re-renders the `<video>` element when the source changes by using `key={videoSrc.mp4}`
- Enables controls, autoplay, loop, and inline playback

### `src/app/components/Video/styles/Video.module.scss`

Styles for centering the video and adjusting its width and height across breakpoints.

### `src/app/components/Activities/Activities.tsx`

Homepage section that introduces the camp experience and then renders the activity cards.

Logic:

- Displays the "What to Expect" heading and summary copy
- Renders the `Expectations` grid below the introduction

### `src/app/components/Activities/components/Expectations.tsx`

Presentational component that maps local JSON data into image cards.

Logic:

- Imports `expectData.json`
- Loops through each activity item
- Renders an image card with title and description overlay

### `src/app/components/Activities/data/expectData.json`

Content source for the homepage activity cards.

Data shape:

- `activity`: card title
- `image`: primary image path currently used by the component
- `imageWebp`: alternate WebP path currently stored in data but not used by the component
- `description`: overlay body text

### `src/app/components/Activities/styles/Expectations.module.scss`

Styles for both the activity intro section and the responsive expectation card grid.

## Schedule page

### `src/app/components/Schedule/Schedule.jsx`

Schedule page component.

Logic:

- Imports `ScheduleData.json`
- Renders three sections: arrival day, full days, and departure day
- Maps each time/activity entry into a simple two-column row

Note:

- This component is bypassed when temporary mode is enabled

### `src/app/components/Schedule/data/ScheduleData.json`

Content source for the schedule page.

Data shape:

- `arrival`: list of first-day items
- `regular`: list of standard full-day items
- `departure`: list of departure-day items

### `src/app/components/Schedule/styles/schedule.module.scss`

Styles for the schedule title area, card container, per-day sections, and responsive list rows.

## FAQ page

### `src/app/components/FAQ/FAQ.jsx`

Client component for the FAQ accordion.

Logic:

- Stores the currently expanded item index in local state
- Toggles the active item open and closed on click
- Accepts FAQ answers as either an array of strings or an HTML string
- Renders arrays as a list
- Renders string answers with `dangerouslySetInnerHTML`

### `src/app/components/FAQ/data/faqData.json`

Content source for the FAQ page.

Data shape:

- `question`: question heading shown in the accordion
- `answer`: either a plain string, an HTML string, or an array of strings

### `src/app/components/FAQ/styles/FAQ.module.scss`

Styles for the FAQ page layout, accordion sections, answer panels, and responsive typography.

## Registration page

### `src/app/components/Registration/Registration.tsx`

Registration page component.

Logic:

- Stores the external registration form URL in a constant
- Shows hard-coded registration deadline information
- Embeds the external registration form inside an `iframe`

Note:

- This component is bypassed when temporary mode is enabled
- `Head` is imported from `next/head` but is not used

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

### `src/app/components/TemporaryNotice/styles/TemporaryNotice.module.scss`

Styles for the temporary notice layout and card.

### `src/app/components/Registration/styles/Registration.module.scss`

Styles for the registration heading, date block, and large embedded form frame.

## Footer

### `src/app/components/Footer/Footer.tsx`

Shared site footer.

Logic:

- Displays the camp logo, ministry attribution, physical address, and phone number
- Links to Instagram and YouTube with `react-icons`
- Shows a copyright line

### `src/app/components/Footer/styles/Footer.module.scss`

Styles for the footer layout, logo, social icons, and bottom copyright section.

## Public assets

### `public/favicon.ico`

Browser favicon for the site.

### `public/NewBibleCampLogo.png`

Primary camp logo used in the header and footer.

### `public/UpdatedLogo.svg`

Alternate logo asset present in the repo but not referenced by the current app code.

### `public/next.svg`

Default Next.js starter asset. Not referenced by the current app code.

### `public/vercel.svg`

Default Vercel starter asset. Not referenced by the current app code.

### `public/GloryOfGodVert.webp`

Mobile hero image in WebP format.

### `public/GloryOfGodVert.jpg`

Mobile hero image fallback in JPG format.

### `public/GloryOfGodHorizontal.webp`

Desktop hero image in WebP format.

### `public/GloryOfGodHorizontal.jpg`

Desktop hero image fallback in JPG format.

### `public/campvideo2025V.webm`

Vertical promo video in WebM format for small screens.

### `public/campvideo2025V.mp4`

Vertical promo video in MP4 format fallback for small screens.

### `public/campvideo2025H.webm`

Horizontal promo video in WebM format for larger screens.

### `public/campvideo2025H.mp4`

Horizontal promo video in MP4 format fallback for larger screens.

### `public/campPreaching2025.jpg`

JPG activity image for the preaching card.

### `public/campPreaching2025.webp`

WebP version of the preaching activity image.

### `public/Fellowship.JPG`

JPG activity image for the fellowship card.

### `public/Fellowship.webp`

WebP version of the fellowship activity image.

### `public/campWorship2025.jpg`

JPG activity image for the worship card.

### `public/campWorship2025.webp`

WebP version of the worship activity image.

### `public/campPrayer2025.JPG`

JPG activity image for the prayer card.

### `public/campPrayer2025.webp`

WebP version of the prayer activity image.

## Maintenance notes

The current website is straightforward, but a few implementation details matter when changing it:

- Route content is mostly static and local. There is no CMS, API, or database.
- Responsive behavior is split between CSS breakpoints and client-side viewport checks.
- Most user-editable content is stored in JSON files, except for the footer copy, hero button, verse, and registration page details.
- The registration form is external. If the Subsplash URL changes, the registration page will break until `Registration.tsx` is updated.
- Some assets and starter files are still present even though the live app does not use them.
