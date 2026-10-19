# pentaflow.ai website

Static marketing site (vanilla HTML + compiled Tailwind). Design decisions and context: `DESIGN.md`.

## Deploy = push to `main`

GitHub Pages serves `main` (root) at pentaflow.ai. Every push to `main` is live within a minute or two, so **`main` must always be deployable.**

- Work and commit directly on `main`. No feature branches or PRs unless asked.
- Push proactively: once a change is reviewed and tested (below), commit and push right away. Don't let finished work sit locally. No need to ask first.
- Keep each commit to one logical change with a clear message.
- Bigger visual or design changes: build a separate demo file first and port it to `index.html` only after the user approves. Once approved and ported, push right away.

## Before every push

1. **Sync 404:** if `index.html` changed, run `npm run sync-404`. `404.html` must match `index.html` exactly, because personalized links (`pentaflow.ai/<name>`, handled by `personalize.js`) are served through the 404 page.
2. **Rebuild CSS** if you added or changed Tailwind classes: `npx tailwindcss -i input.css -o style.css --minify`. Then check that the diff on `style.css` makes sense.
3. **Review the diff:** `git diff`. Look for unintended edits, broken markup, leftover debug code, and stray files.
4. **Test in a browser:** serve locally (`python3 -m http.server 8000`) and check the changed pages:
   - light and dark mode
   - mobile (375px) and desktop
   - no console errors
   - links, CTAs and booking buttons still work
   - a personalized URL, if `index.html` changed (e.g. `/max` via the 404 page)
5. **Stage explicitly:** stage only the files you meant to change (`git add <files>`, never `git add -A`). The repo root has lots of untracked screenshots and scratch files that must not be committed.

If any check fails, fix it before pushing. Never push something half-done to `main`.

## Notes

- `input.css` and `tailwind.config.js` are gitignored (local only). Only the compiled `style.css` is committed.
- Don't save verification screenshots in the repo root. Use a temp/scratch directory.
