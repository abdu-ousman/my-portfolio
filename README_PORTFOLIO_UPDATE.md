# Abdurahman portfolio — original design restored + targeted enhancements

This is built directly from the supplied `portfolio(3).zip`, NOT from the replacement Version 2.

## Preserved from your original
- Full-screen immersive two-column Hero, including background, portrait position, particles, gradients, typography, and CTA layout
- Navbar/footer appearance and mobile-menu structure
- About card structure, Testimonials carousel, Contact form, original Experience source
- Original dark charcoal/teal design system and CSS animations
- Original file paths `/hero-bg-3.jpg` and `/profile-pic-9.png` without substitution

## Enhanced
- Three genuine projects: Quizana School, Quizana University, Rose Oils
- Real desktop/mobile screenshots and accessible expandable project descriptions
- External demo links and Quizana PDF case studies
- A Services section styled with the original glass cards and typography
- Sharper hero/about copy, corrected LinkedIn links, basic SEO and text contrast
- No fake GitHub or Facebook placeholder buttons

## IMPORTANT: restore your personal media
Your supplied original ZIP had an empty `public/` directory. Consequently, it did not contain your portrait or hero background. The code *still references your exact original filenames and placements*:
- `public/profile-pic-9.png` — your portrait
- `public/hero-bg-3.jpg` — your hero background

Please COPY these two original files into `public/` from your own deployed/local original portfolio before launching. Do not rename them. Until restored, these two visuals will be missing. Project screenshots are stored only in `public/projects/` and are never substituted for your photos.

## Setup
1. Restore both personal images in `public/`.
2. Copy `.env.example` to `.env`, then add your EmailJS settings locally. No secrets were copied from the upload.
3. `npm install`
4. `npm run build` and `npm run dev`
5. Check mobile and desktop appearance; verify all 3 live links, project images and PDF links, contact form, and project content.

## Before publication
- Testimonials remain exactly as supplied in your original site, but confirm all quotations and permissions before publicly publishing.
- Original Contact section includes a phone number and email. Review what you want publicly visible.
- Existing Experience source remains unused because it was commented out in your original App.jsx; no speculative employment dates have been added.
- This package does not include a live browser deployment or production integration verification.

## Version 4
Removed the decorative floating particle/dot overlay from the Hero section. Original background, personal portrait references, layout, palette, and other elements are unchanged.
