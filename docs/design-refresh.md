# Portfolio and GitHub visual refresh

The owner found the previous portfolio and profile too plain. The website now presents the work visually, while the existing English and French PDF CVs retain their ATS-oriented document layout. The eight selected projects and seven career entries remain available.

## Direction and argument

Taste skill direction: **The name as a monument**, seed `825698061`. Barlow Condensed for display type, Barlow for reading, cool grey `#eef0f3`, near-black `#0b0c0e` and cobalt `#1f2de6`. No direction redraws. The subject-specific material is Tamim's name, his existing portrait and QuickOps, which connects his application, infrastructure and AI work. The mountain atmosphere suggestion was not used because real project imagery was available.

Idea: Tamim's name becomes the opening and closing frame; the QuickOps repository-to-runtime workflow becomes the working demonstration of his engineering range.

The page's argument is: identify the engineer and his scope; demonstrate that scope through QuickOps; let visitors inspect the eight projects; retain the career evidence and toolkit in readable disclosures; close with direct contact links. Main copy: "I build the application. And what runs it." Primary action: "Explore my work".

The interactive QuickOps diagram explains the existing architecture. Analyze, Provision and Deploy reveal their actual tools and corresponding public source links. It does not execute infrastructure, call an AI provider or claim that a deployment is currently running. Project filters and selection update the preview and technical detail disclosure. Reduced-motion preferences are respected, content is never initially hidden, and controls use native buttons and links.

## Assets and ownership

- Existing `public/me.jpg`: Tamim's supplied portrait. Retained and cropped with CSS, not regenerated.
- `public/work/ticketing.jpg`: screenshot of [B'moovd Ticketing](https://bmoovd-shop.com/), captured for the portfolio.
- `public/work/real-estate.jpg`: screenshot of [Roehrdanz Immobilien](https://rimmobilien-test.de/), captured for the portfolio.
- `public/work/confortex.jpg`: screenshot of [Confortex](https://confortex.shop/), with its cookie notice dismissed in the isolated screenshot session.
- These are public project interface screenshots, not claims that the underlying client photography was taken by Tamim. No found stock photography, generated product imagery or sample customer evidence was added.
- Barlow and Barlow Condensed are self-hosted. Their SIL Open Font License files are retained beside the WOFF2 assets in `public/fonts/`.
- New monogram favicon and share artwork are original SVG assets. The GitHub profile repository contains matching original banner and QuickOps architecture artwork plus two project previews.

No unrelated stock footage was added: a clip of clouds or servers would not demonstrate these projects. The portrait and sections have restrained entrance motion; controls provide hover/focus feedback. Motion stops under the user's reduced-motion preference.

## Verification and critique

Build, ESLint, app TypeScript checks and source design lint pass. Browser checks cover QuickOps stages and source links, project filtering, preview selection, technical details and career disclosures. The design inspector checks the production build at 1440, 768 and 390 pixels. Initial checks exposed excessive type sizes and hidden-disclosure false positives; shared type roles, ordinary text for hidden toolkit headings and semantic footer navigation resolved those findings.

The visual review checked desktop, tablet and phone screenshots. Internal design assessment: design 8/10, usability 8/10, creativity 7.5/10, content 8/10; weighted score 7.9/10. This is a self-review, not an external award or measured user preference. The principal limit is that several private projects have no approved public product screenshots; those previews use honest typographic summaries rather than invented interfaces. No sample content needs replacement.

GitHub Markdown is rendered through GitHub's API before publication and checked visually. Publication and final live checks are performed separately; a successful local build alone does not establish deployment.

Final production design gate: 0 failures at 1440, 768 and 390 pixels. The single no-footage warning is intentional for the reason above. All displayed headings stay within two lines, fonts load locally and no horizontal overflow or broken image was reported.
