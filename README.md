# Tamim Hmizi | Portfolio

Personal portfolio for **Software Engineer | Cloud, DevOps & AI**, built with React, TypeScript, Vite and Tailwind CSS.

[Live portfolio](https://tamim-hmizi.github.io/Portfolio/) · [English resume](https://tamim-hmizi.github.io/Portfolio/resume-en.pdf) · [French CV](https://tamim-hmizi.github.io/Portfolio/cv-fr.pdf)

Client deliveries, internship work and independent projects share one Projects section. Visitors can expand the full list of 19 projects, review seven career entries and download either PDF.

## Local development

Use Node.js 22 or newer and npm:

```sh
npm ci
npm run dev
```

Vite serves the site at `http://localhost:5173/Portfolio/`. The `/Portfolio/` base matches GitHub Pages hosting.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
python3 scripts/build-resumes.py --check
```

Run `python3 scripts/build-resumes.py` to regenerate the PDFs after editing their sources in `documents/`. The document build requires pdfLaTeX and Poppler. It validates the three-page maximum, full project inventory, contact and career text, embedded fonts and Unicode maps before replacing either PDF. Render and inspect all pages after editing. See [content reconciliation](docs/cv-content-audit.md) and [profile maintenance and research](docs/profile-editorial.md) for sources, content decisions and application guidance.

The code-native social card is `public/og-image.svg`. To regenerate `public/og-image.png`, run `node scripts/build-share-image.mjs` with the `sharp` package available to Node.

## Publish

```sh
npm run build
npm run deploy
```

The existing `gh-pages` deployment publishes `dist` to the `gh-pages` branch. GitHub Pages then builds and serves that branch. Read the exact deployment result and verify the live page, expanded projects, mobile navigation and both PDF downloads before calling a release complete.

## Structure

* `src/components`: profile, projects, career, skills, education and contact.
* `documents/resume-en.tex`, `documents/cv-fr.tex`: editable document sources.
* `public/resume-en.pdf`, `public/cv-fr.pdf`: published application documents.
* `scripts/build-resumes.py`: reproducible document build and extraction checks.
* `docs/profile-editorial.md`: positioning, verified source references and maintenance guidance.

Contact: [tamimhmizi@icloud.com](mailto:tamimhmizi@icloud.com).
