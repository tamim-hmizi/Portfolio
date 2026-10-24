import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { experiences } from "../experience";
import { categories, isLive, projects } from "../projects";

const publicDir = resolve(__dirname, "../../../public");
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Oct 2025 to Apr 2026" -> [202510, 202604]; "Present" -> Infinity. */
function parsePeriod(period: string): [number, number] {
  const [range] = period.split(" | ");
  const [from, to] = range.split(" to ");
  const month = (text: string) => {
    if (text === "Present") return Number.POSITIVE_INFINITY;
    const [name, year] = text.split(" ");
    const index = MONTHS.indexOf(name);
    if (index < 0 || !/^\d{4}$/.test(year)) throw new Error(`Bad date "${text}" in "${period}"`);
    return Number(year) * 100 + index + 1;
  };
  return [month(from), month(to)];
}

describe("experience", () => {
  it("uses well-formed periods that end after they start", () => {
    for (const { title, period } of experiences) {
      const [start, end] = parsePeriod(period);
      expect(end, title).toBeGreaterThanOrEqual(start);
    }
  });

  it("is listed newest first", () => {
    const starts = experiences.map((e) => parsePeriod(e.period)[0]);
    expect(starts).toEqual([...starts].sort((a, b) => b - a));
  });

  it("never has two employers at once, apart from my own company", () => {
    const employed = experiences.filter(
      (e) => !e.title.includes("Axynoxia") && !/Intern|Final Year Project/.test(e.title + (e.details ?? []).join(" "))
    );
    const ranges = employed.map((e) => ({ title: e.title, range: parsePeriod(e.period) }));
    for (let i = 0; i < ranges.length; i++) {
      for (let j = i + 1; j < ranges.length; j++) {
        const [a, b] = [ranges[i], ranges[j]];
        // Sharing the boundary month is fine: one role ended and the next started that month.
        const overlap = Math.min(a.range[1], b.range[1]) - Math.max(a.range[0], b.range[0]);
        expect(overlap, `${a.title} / ${b.title}`).toBeLessThanOrEqual(0);
      }
    }
  });

  it("has at most one current employer besides Axynoxia", () => {
    const current = experiences.filter((e) => e.current && !e.title.includes("Axynoxia"));
    expect(current.length).toBeLessThanOrEqual(1);
  });

  it("points every logo at a file that exists", () => {
    for (const { logo } of experiences) {
      expect(existsSync(resolve(publicDir, logo.file)), logo.file).toBe(true);
    }
  });
});

describe("projects", () => {
  it("has unique titles", () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("uses known categories", () => {
    const ids = new Set(categories.map((c) => c.id));
    for (const p of projects) expect(ids.has(p.category), p.title).toBe(true);
  });

  it("links only over HTTPS", () => {
    for (const p of projects) {
      const links = [p.url, p.ios, p.android, ...(p.sources ?? []).map((s) => s.url)].filter(Boolean);
      for (const link of links) expect(link, p.title).toMatch(/^https:\/\//);
    }
  });

  it("points every screenshot at a file that exists", () => {
    for (const p of projects.filter((p) => p.image)) {
      expect(existsSync(resolve(publicDir, p.image!)), p.image).toBe(true);
    }
  });

  it("gives every featured project a full case study and an image", () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThan(0);
    for (const p of featured) {
      expect(p.image, p.title).toBeTruthy();
      expect(p.caseStudy?.approach.length, p.title).toBeGreaterThan(0);
    }
  });

  it("treats a project with a link or store listing as live", () => {
    expect(isLive({ ...projects[0], url: undefined, ios: undefined, android: undefined })).toBe(false);
    expect(isLive({ ...projects[0], url: "https://example.com" })).toBe(true);
  });
});

describe("downloads", () => {
  it.each(["resume-en.pdf", "cv-fr.pdf"])("ships %s", (file: string) => {
    expect(existsSync(resolve(publicDir, file))).toBe(true);
  });
});
