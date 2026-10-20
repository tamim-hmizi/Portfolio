# Original presentation, improved in place

The original portfolio and GitHub presentation are the current design baseline. The superseded cobalt redesign is recoverable in Git history. Preserve the dark and gold palette, portrait, original employer logos, icon badges, card layout, gradients, project links and contact/download buttons. The résumé retains its gold and serif appearance with summarized content.

Targeted improvements: QuickOps and five source links, all 21 project entries, accurate development/demo descriptions, a skip link, keyboard focus, reduced motion and menu toggle state/Escape behavior. No project filters or architecture diagram replace the original experience.

Existing portrait: `public/me.jpg`. Original employer logos: `public/axynoxia-logo.png`, `BASSETTI-GROUP.webp`, `rfclogo.png`, `espritlogo.jpg`, `tunisie-telecom-logo.png`. The profile uses copies in `assets/employers/`. Never generate replacements for these logos.

Project cards use text, technology icons and direct links. Project screenshots and their assets have been removed at the owner’s request. The dark and gold share card is code-native SVG with the original Axynoxia logo and factual text; its PNG is rendered by `scripts/build-share-image.mjs` using sharp.

Verification covers build, lint, TypeScript, every PDF page, original hero, expanded projects, image loading, responsive layout and downloads. The owner’s requested visual style takes precedence over generic aesthetic rules.
