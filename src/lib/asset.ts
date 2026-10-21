/** Resolves a file in `public/` against the Vite base path (`/Portfolio/` on GitHub Pages). */
export const asset = (file: string): string => `${import.meta.env.BASE_URL}${file}`;
