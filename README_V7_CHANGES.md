# v7 changes

- Fonts: Inter + Playfair Display are now actually loaded (index.html).
- SEO/sharing: favicon, Open Graph/Twitter tags, JSON-LD, robots.txt.
- Images: 12 screenshots converted to WebP (2.7 MB -> 0.5 MB), explicit sizes, async decoding.
- Hero: graceful fallback if `public/profile-pic-9.png` / `public/hero-bg-3.jpg` are missing (they were NOT in the v6 zip - copy them into `public/`).
- Projects: 3-column layout, phone screenshot shown whole instead of cropped.
- Motion: sections reveal as they scroll into view (previously animated on page load, off-screen).
- Navigation: active-section highlight, Escape closes mobile menu, anchors no longer hide under the fixed navbar, skip-to-content link.
- Contact: honeypot spam trap, friendly fallback message pointing to email when sending fails.
- Consistency: Testimonials/Contact headings match the other sections; orange hero shadow now uses brand teal.
- Cleanup: removed unused `dotenv`, `App.css`, `react.svg`, lint error fixed.

## Before deploying
1. Add `profile-pic-9.png` and `hero-bg-3.jpg` to `public/`.
2. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` in your host's environment settings, then rebuild (Vite bakes them in at build time).
3. Optional: add an `og:image` (absolute URL) once you know your domain.
