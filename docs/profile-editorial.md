# Professional profile and document maintenance

## Positioning

Primary title: **Software Engineer | Cloud, DevOps & AI**.
French: **Ingénieur logiciel | Cloud, DevOps et IA**.

Software Engineer is the primary occupation. Cloud infrastructure, DevOps and applied AI describe the demonstrated engineering scope. Keep employer job titles and dates as recorded in the source CV. Do not add seniority, certifications, model training experience or years of professional employment based on time in education.

The AI evidence is QuickOps, the RFC final year project. Its public AI service uses FastAPI, repository metadata analysis and an LLM recommendation flow. Links: [AI](https://github.com/tamim-hmizi/QuickOps-AI), [frontend](https://github.com/tamim-hmizi/QuickOps-Frontend), [backend](https://github.com/tamim-hmizi/QuickOps-Backend), [provisioning](https://github.com/tamim-hmizi/QuickOps-IAC), [configuration](https://github.com/tamim-hmizi/QuickOps-CAC).

## Content decisions

The English resume and French CV use one column, readable 11pt text, contact information in the document body, Unicode mapped text and embedded fonts. The owner now requests only meaningful projects, superseding the earlier exhaustive inventory. Feature eight distinct examples with strong relevance to software, cloud, DevOps and applied AI. Keep one Projects section, with Axynoxia work alongside other projects. Let the documents be shorter than three pages when the selected content fits. See `cv-content-audit.md` for the selection rationale. Earlier full inventories remain recoverable through Git history.

Do not repeat the old 6+ years, 1M+ users, 70% faster deployment or 40% overhead claims without evidence of the individual's contribution and how the number was measured. Product reach is not personal user impact. The retained experience, education and language levels originate in the existing CV; this edit does not independently certify them.

Keep projects together; describe their actual context when relevant. A hosted demo does not establish production readiness, statutory compliance, capacity or customer acceptance. Leave repetitive demos, introductory coursework and weaker or unfinished examples out of the featured selection. Habiter Mieux's current URL is https://habiter-mieux.info/.

## Evidence based guidance

Reviewed 20 October 2026:

* [Harvard resume guide](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/): specific, active, factual language and consistent, readable formatting.
* [MIT resume guidance](https://capd.mit.edu/resources/resumes/): show contributions and technologies in context; maintain a broader master record and tailor an application to the vacancy.
* [Greenhouse parsing limitations](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse): graphics, image-only documents, tables, columns, headers, footers and unclear sections can cause parsing errors. Its documented parsing size limit is 2.5 MB.
* [GitHub's hiring profile guidance](https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume): concise bio, relevant experience and skills, and a small selection of accessible projects with useful descriptions and public code.
* [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance): semantic headings, visible keyboard focus, accurate toggle states, readable content and reduced motion support.

Three pages is a maximum, not a length to pad to. Hide page counts in public download labels. No format guarantees an ATS score, correct parsing in every system or an interview. Do not keyword stuff. For each application, select relevant examples and use the vacancy's terminology only where accurate. Follow the employer's requested file format.

## Rebuild and verify

Edit `public/resume-en.tex` and `public/cv-fr.tex`, then run `python3 scripts/build-resumes.py`. Requires pdfLaTeX and Poppler (`pdfinfo`, `pdftotext`, `pdffonts`). The script enforces the three-page maximum and eight selected project entries, extracts core contact and career text, and checks font embedding and Unicode maps before replacing either published PDF.

Render every final page with `pdftoppm` and inspect legibility, clipping and section boundaries. Text extraction checks help assess parsing readability, but are not a test in a commercial ATS. Keep both PDF downloads, portfolio copy, metadata, share card and GitHub bio/README consistent. Run lint, TypeScript and build checks, then verify the deployed page, filtering and downloads.

## Visual presentation

The website and GitHub profile use a visual project showcase rather than the document layout. Keep the PDFs ATS oriented. Typography, interactions, imagery sources and verification are documented in `design-refresh.md`.
