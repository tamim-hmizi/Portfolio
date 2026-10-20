# Tamim Hmizi | Portfolio

Personal portfolio for **Software Engineer | Cloud, DevOps & AI**, built with React, TypeScript, Vite and Tailwind CSS.

[Live portfolio](https://tamim-hmizi.github.io/Portfolio/) · [English resume](https://tamim-hmizi.github.io/Portfolio/resume-en.pdf) · [French CV](https://tamim-hmizi.github.io/Portfolio/cv-fr.pdf)

The portfolio presents client projects, employer work, labs and product demos with clear labels. Visitors can filter by software, cloud and DevOps, or applied AI, review experience and download either three-page PDF or a plain text copy.

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
npx tsc --noEmit -p tsconfig.app.json
npm run build
python3 scripts/build-resumes.py
```

The document build requires pdfLaTeX and Poppler. It validates the page limit, contact and career text, embedded fonts and Unicode maps before replacing either PDF. Render and inspect all pages after editing. See [profile maintenance and research](docs/profile-editorial.md) for sources, content decisions and application guidance.

The code-native social card is `public/og-image.svg`. To regenerate `public/og-image.png`, run `node scripts/build-share-image.mjs` with the `sharp` package available to Node.

## Publish

```sh
npm run build
npm run deploy
```

The existing `gh-pages` deployment publishes `dist` to the `gh-pages` branch. GitHub Pages then builds and serves that branch. Read the exact deployment result and verify the live page, filters, mobile navigation and both PDF downloads before calling a release complete.

## Structure

* `src/components`: profile, project filters, career, skills, education and contact.
* `public/resume-en.tex`, `public/cv-fr.tex`: editable document sources.
* `public/resume-en.pdf`, `public/cv-fr.pdf`: published three-page documents.
* `public/resume-en.txt`, `public/cv-fr.txt`: UTF-8 text exports for application forms.
* `scripts/build-resumes.py`: reproducible document build and extraction checks.
* `docs/profile-editorial.md`: positioning, verified source references and maintenance guidance.

Contact: [tamimhmizi@icloud.com](mailto:tamimhmizi@icloud.com).
