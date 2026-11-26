# Viewport portfolio — single-screen navigation

This version is based on the user-supplied `Abdurahman_Portfolio.zip`, not the prior minimalist-stylesheet variant.

## Changed
- `src/App.jsx`: replaces the continuous scrolling page with a fixed viewport containing one section at a time. Existing section content and section navigation IDs are preserved.
- `src/layout/Navbar.jsx`: a compact left navigation rail inspired by the provided reference, plus mobile menu.
- `src/sections/Projects.jsx`: one featured project per view, with previous/next controls; includes all three project records, challenge/approach descriptions, screenshots, live links, and PDFs. Case study opens as an overlay.
- `src/components/FitView.jsx`: responsive resizing of existing section content to fit the viewport without page scrolling.
- `src/viewport.css`: styles the new one-screen layout. Original `src/index.css` remains unchanged.

## Important
The original archive does not contain the portfolio's portrait, hero background, project screenshots or PDF files. Preserve or copy over your own full `public` directory before running/deploying. The application intentionally retains their original paths.

## Preview and validation
Run `npm install`, `npm run dev`, and test at desktop and mobile viewport sizes, including shorter screens. Then run `npm run build`.

The code and ZIP structure were inspected, but a production build and browser test could not be completed in the current environment because package dependencies were unavailable.
