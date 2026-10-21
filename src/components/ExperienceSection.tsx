import React, { useId, useState } from "react";
import { FaCalendarCheck, FaChevronDown } from "react-icons/fa";
import { experiences, type Experience } from "../data/experience";
import { asset } from "../lib/asset";
import Reveal from "./Reveal";

/** Bullets shown before "Show more". */
const PREVIEW_BULLETS = 2;

const TimelineItem: React.FC<{ experience: Experience }> = ({ experience: e }) => {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const hasMore = e.bullets.length > PREVIEW_BULLETS;
  const bullets = open ? e.bullets : e.bullets.slice(0, PREVIEW_BULLETS);

  return (
    <li className="relative pl-10 md:pl-14 pb-10 last:pb-0">
      {/* Timeline dot; the line itself is drawn by the parent list. */}
      <span
        className={`absolute left-[9px] md:left-[17px] top-2 w-4 h-4 rounded-full border-4 border-gray-900 ${
          e.current ? "bg-yellow-500" : "bg-gray-500"
        }`}
        aria-hidden="true"
      />
      <Reveal>
        <article className="rounded-xl border border-gray-700 bg-gray-800/70 p-5 md:p-6 text-left">
          <header className="flex items-start gap-4">
            <img
              loading="lazy"
              src={asset(e.logo.file)}
              alt={e.logo.alt}
              className={`w-11 h-11 object-contain rounded-md p-1 shrink-0 ${
                e.logo.dark ? "bg-gray-900 border border-gray-700" : "bg-white"
              }`}
            />
            <div className="min-w-0 flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-white flex flex-wrap items-center gap-2">
                {e.title}
                {e.current && (
                  <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">Current</span>
                )}
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                <span className="text-yellow-400 font-semibold">{e.period}</span>
                {e.details?.map((d) => ` · ${d}`)}
              </p>
              {e.tagline && <p className="text-sm text-gray-400 italic mt-1">{e.tagline}</p>}
            </div>
          </header>

          {e.summary && <p className="text-gray-300 mt-4">{e.summary}</p>}

          <ul id={detailsId} className="mt-3 text-gray-200 space-y-1.5 list-disc pl-5 marker:text-yellow-500">
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {e.tech.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-md bg-gray-900/70 border border-gray-700 px-2 py-1 text-xs text-gray-200"
              >
                <Icon className="text-yellow-500" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
            {hasMore && (
              <button
                type="button"
                aria-expanded={open}
                aria-controls={detailsId}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-400 hover:text-yellow-300"
              >
                {open ? "Show less" : `Show ${e.bullets.length - PREVIEW_BULLETS} more`}
                <FaChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            )}
            {e.href && (
              <a
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 underline underline-offset-4 hover:text-yellow-400"
              >
                {new URL(e.href).hostname.replace(/^www\./, "")}
              </a>
            )}
            {e.email && (
              <a href={`mailto:${e.email}`} className="text-sm text-gray-300 underline underline-offset-4 hover:text-yellow-400">
                {e.email}
              </a>
            )}
            {e.cta && (
              <a
                href={e.cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-gray-900 font-bold text-sm hover:bg-yellow-400 transition-colors"
              >
                <FaCalendarCheck aria-hidden="true" /> {e.cta.label}
              </a>
            )}
          </div>
        </article>
      </Reveal>
    </li>
  );
};

const ExperienceSection: React.FC = () => (
  <section id="experience" className="px-4 sm:px-6 md:px-10 py-20 md:py-28">
    <div className="w-full max-w-4xl mx-auto">
      <Reveal className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-yellow-500">Professional</span> Experience
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Building applications, automating delivery and operating cloud infrastructure.
        </p>
      </Reveal>
      <ol className="relative before:absolute before:left-4 md:before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-700">
        {experiences.map((experience) => (
          <TimelineItem key={experience.title} experience={experience} />
        ))}
      </ol>
    </div>
  </section>
);

export default ExperienceSection;
