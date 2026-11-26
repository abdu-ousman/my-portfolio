# v15
- Contact: "Open to remote collaborations" moved up under the intro text so it is never pushed below the fold, and the page is tightened to fit laptop-height windows (~600px) without scrolling.

# v14
- About: everything is on the page itself — full story, quote and the four strengths (Clean code, Performance, Collaboration, Continuous growth) as equal fixed-size cards. The "AU." placeholder and the "My story" overlay are gone.
- Removed now-unused `About.jsx`, `Reveal.jsx`, `useReveal.js` and the dead overlay/placeholder CSS.

# v13 (feedback round)
- Hero: "Full-stack MERN developer" and "Academic English editor" each on their own line.
- Services: four equal fixed-size cards, each with its own description and "Discuss a project" link. The separate description panel and the "All service details" button/overlay are gone, so nothing resizes or jumps when you click.
- Contact: the form and your details (email, phone, location, LinkedIn) are on the page itself. No extra "Start a conversation" button or overlay.
- Services and Contact scroll naturally on small screens instead of shrinking.
- Removed now-unused `Services.jsx` and `Button.jsx`; contact details live in `sections/contactInfo.js`.

# v12 (fixes on top of v11)

## Bugs
- Contact form no longer overflows on phones.
- All overlays (About, Services, Contact, case study, Info & links) close with Escape, trap Tab focus, and return focus to the button that opened them (new shared `components/Modal.jsx`).
- Arrow keys no longer change the page while an overlay is open.
- "Info & links" closes when you click a link inside it.
- Landscape phones: views scroll instead of clipping/overlapping; text is never shrunk below ~80%.

## Consistency
- Section numbers match the page counter (02 About, 03 Projects, 04 Services, 05 Contact).
- Overlays now use Inter and flat cards like the main views (no serif italics, no glass glow).
- About slogan matches in the view and its overlay ("Builder by choice").
- One role everywhere: Full-Stack MERN Developer (+ Academic English editing on the hero).
- Duplicate "Selected works / Selected work" label replaced by "03 / Projects".

## Legibility / accessibility
- Minimum text size 11px; low-contrast greys brightened to pass 4.5:1.
- Browser tab title changes per view; section `aria-label`s are readable.

## Improvements
- Projects can be linked directly: `/#projects/school`, `/#projects/university`, `/#projects/rose`.

## Cleanup
- Removed unused `useActiveSection` hook and 8 stale README files.
