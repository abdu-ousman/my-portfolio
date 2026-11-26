# Version 11 — restrained, interactive portfolio

Based directly on Abdurahman Portfolio v10.

## Changes
- Removed testimonials from page navigation, routing and source content. The old hard-coded testimonial component was deleted.
- Standardized the UI on Inter (including Google Fonts loading; Arial is the fallback).
- Rebuilt About, Services and Contact as visually composed single-viewport experiences instead of lists. The original longer About/Services/Contact material remains accessible in detail overlays.
- Added selective project-specific color systems: Quizana School (indigo), Quizana University (teal), Rose Oils (rose/burgundy). The site itself remains charcoal/teal.
- Preserved the original v10 hero, its portrait/background references and the 3 projects' information, screenshots, case-study overlays, live links and PDFs.
- Five pages: Home, About, Projects, Services and Contact. Navigation and page counter updated accordingly.

## Important original asset files
The provided v10 source does not contain all public images or PDFs. Copy your OWN existing `public` media directory into this project, keeping exact filenames such as:
- `profile-pic-9.png`, `hero-bg-3.jpg`
- `projects/school-desktop.webp`, `projects/school-mobile.webp`, `projects/school-roadmap.webp`, `projects/school-practice.webp`
- `projects/university-desktop.webp`, `projects/university-mobile.webp`, `projects/university-roadmap.webp`, `projects/university-practice.webp`
- `projects/rose-home.webp`, `projects/rose-sales.webp`, `projects/rose-stock.webp`, `projects/rose-report.webp`
- `projects/quizana-school.pdf`, `projects/quizana-university.pdf`, `projects/rose-oils.pdf`

Do not replace your complete local `public` directory with the small one supplied in the ZIP.

## Verification
- All 16 JS and JSX source files passed a TypeScript parser syntax check.
- CSS block balance checked.
- Complete production build and live responsive-browser testing could not run because npm's offline cache is missing `zod-validation-error`. Run `npm install && npm run build && npm run dev` on your machine.
- Check 1366×768 desktop, a narrow laptop, Android mobile, and each modal.

The changes do not establish that the app has passed end-to-end testing.
