# Tamim Hmizi | Portfolio

Personal portfolio for **Software Engineer | Cloud, DevOps & AI**, built with React 19, TypeScript, Vite 8, Tailwind CSS 4 and Framer Motion.

[Live portfolio](https://tamim-hmizi.github.io/Portfolio/) · [Resume (EN)](https://tamim-hmizi.github.io/Portfolio/resume-en.pdf) · [CV (FR)](https://tamim-hmizi.github.io/Portfolio/cv-fr.pdf)

## Local development

Use Node.js 22 or newer and npm:

```sh
npm ci
npm run dev
```

Vite serves the site at `http://localhost:5173/Portfolio/`. The `/Portfolio/` base matches GitHub Pages hosting; reference files in `public/` through `asset()` from `src/lib/asset.ts` so they follow that base.

## Editing content

* Projects: `src/data/projects.ts`. Live projects (with a URL or store link) are sorted first.
* Career entries: `src/data/experience.tsx`.
* Languages: `src/components/ContactSection.tsx`.
* Resumes: `documents/resume-en.tex` and `documents/cv-fr.tex`, then run `python3 scripts/build-resumes.py`. It builds only the full English and French PDFs. It requires pdfLaTeX and Poppler and checks the page limit, all project entries, contact and career text, embedded fonts and Unicode maps before replacing either PDF in `public/`.

The social card is `public/og-image.svg`. To regenerate `public/og-image.png`, run `node scripts/build-share-image.mjs` with the `sharp` package available to Node.

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
python3 scripts/build-resumes.py --check
```

The tests in `src/data/__tests__` check the content itself: career periods are well formed, newest first and never show two employers at once; project titles are unique, links use HTTPS, and every screenshot, logo and resume PDF exists.

## Publish

Push to `main`. The [Deploy workflow](.github/workflows/deploy.yml) installs dependencies, fails on any `npm audit` finding, runs lint, typecheck, tests and build, then publishes `dist` to GitHub Pages. Pull requests run the same checks without deploying. Check the live page, the project filters, mobile navigation and both PDF downloads after each release.

## Structure

* `src/components`: page sections and shared UI.
* `src/data`: project and career content.
* `src/lib`: small helpers.
* `documents`: LaTeX sources for the resumes.
* `public`: static files, published PDFs and images.
* `scripts`: resume and social card builds.

Contact: [tamimhmizi@icloud.com](mailto:tamimhmizi@icloud.com).
