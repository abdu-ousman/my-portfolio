# Version 16 — Layout alignment and project stability

Built on the supplied v15 source.

- Removed project view from dynamic scale-to-fit behavior.
- Standardized the project section into a fixed-height four-row grid: title, project card, navigation, note.
- Standardized all project cards to one equal footprint irrespective of image aspect ratio, titles and descriptions.
- Kept pagination and Previous/Next buttons anchored in their own fixed row.
- Ensured all image proportions use contain instead of clipping or stretching; Rose Oils remains a phone-oriented view.
- Refined copy spacing, responsive text sizing, focus indicators and consistent panel alignment.
- Fixed malformed Inter CSS selector in the previous stylesheet.
- Preserved all five sections, project URLs/PDF references, original portrait and media filenames, forms and routing.

Note: The supplied ZIP only contains favicon.svg and robots.txt in public/. Keep your complete local public/ directory when deploying.
