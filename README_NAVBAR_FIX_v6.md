# Navbar first-scroll flash fix (v6)

The prior version used `glass-strong` on scroll. That class defines a 1px border, and `transition-all` on the header could animate a border during the first frames after scrolling.

Changes: removed `glass-strong` from the header and mobile menu; replaced it with a dedicated scrolled-background class that never has a border; limited transitions to background color; disabled header pseudo-element content. Everything else remains unchanged.

To update: deploy this version, clear the browser cache / hard-refresh, and check the first 8px of scrolling. If you still see a line, verify the deployed bundle is this version and inspect browser extensions or additional global styles.

The original asset references `profile-pic-9.png` and `hero-bg-3.jpg` are preserved. If missing from this ZIP, copy them from your existing local `public/` directory.
