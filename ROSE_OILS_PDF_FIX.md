# Rose Oils PDF button — exact Version 7 fix

Only `src/sections/Projects.jsx` was modified; `public/projects/rose-oils.pdf` was added. The card now explicitly renders the same “Portfolio PDF” link used by the Quizana projects.

## Important: publish the new build
Replacing or downloading the ZIP alone will not update your live website. Copy the updated source into your deployed repository, commit/push, and trigger a fresh deployment on your hosting service. If the live page still shows only “Explore case study,” it is serving a previous build. Clear the browser cache or hard-refresh after a successful deploy.

## Verify locally
`npm install`
`npm run build`
`npm run dev`

Open the Projects section and verify Rose Oils shows `Explore case study` and `Portfolio PDF`. The PDF should open at `/projects/rose-oils.pdf`.
