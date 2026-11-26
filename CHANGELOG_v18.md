# Version 18 — Shared alignment and width correction

Base: Version 17 (`Abdurahman_Portfolio_v17_Typography_Alignment.zip`).

## Exact changes
- Introduced a single shared content frame: maximum width **1180px**, width **92%** of the available desktop stage, **90%** on small screens.
- Applied this frame consistently to Home (hero content and bottom technology/LinkedIn row), About, Projects, Services, and Contact.
- Removed page-specific frame side padding that changed section widths and left-edge alignment.
- Removed the narrower 1040px internal width cap on the Services heading and service tiles.
- Ensured cards/forms respect the shared grid bounds and do not enlarge the section.
- Preserved the fixed-viewport navigation, five views, Inter typography, three project cards, live links, PDF links and all original image references.

## Verification and limitations
- CSS parsed with no syntax errors.
- Compared source against v17: only `src/viewport.css` is changed; this changelog is new.
- ZIP integrity verified.
- `npm run build` could not run because Vite was not installed and `npm ci --offline` could not retrieve `zod-validation-error@4.0.2` from the local cache. Browser dimensions and runtime behavior remain to be tested after dependency installation.
- Source ZIP does not include the locally kept personal and project images. Preserve your existing `public` directory assets before replacing files.
