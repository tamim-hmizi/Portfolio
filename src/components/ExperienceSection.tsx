import React from "react";
import { m } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";
import { experiences, type Experience } from "../data/experience";
import { asset } from "../lib/asset";

// Full class names so Tailwind can see them at build time.
const spanClass: Record<Experience["span"], string> = {
  4: "xl:col-span-4",
  6: "xl:col-span-6",
  12: "xl:col-span-12",
};

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience: e }) => {
  const border = e.current
    ? "border-yellow-500 shadow-yellow-500/10 hover:shadow-yellow-500/20"
    : "border-yellow-600/30 hover:shadow-yellow-500/20 hover:border-yellow-500";
  const className = `relative bg-gray-800 border-2 p-5 md:p-6 rounded-xl shadow-lg flex flex-col text-left transition-all duration-300 ${border} ${spanClass[e.span]}`;

  const body = (
    <>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-yellow-500 flex flex-wrap items-center gap-2">
          {e.title}
          {e.current && <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">CURRENT</span>}
        </h3>
        <img
          loading="lazy"
          src={asset(e.logo.file)}
          alt={e.logo.alt}
          className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-xs shrink-0 ml-4"
        />
      </div>
      <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
        <span className="text-yellow-400 font-semibold">{e.period}</span>
        {e.details?.map((d) => ` | ${d}`)}
        {e.email && (
          <>
            {" | "}
            <a href={`mailto:${e.email}`} className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">
              {e.email}
            </a>
          </>
        )}
      </p>
      {e.tagline && <p className="text-gray-400 text-sm mb-3 italic">{e.tagline}</p>}
      {e.summary && <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">{e.summary}</p>}
      <ul className="mt-2 text-base text-gray-200 space-y-1.5 list-disc pl-5 marker:text-yellow-500">
        {e.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 pt-3 border-t border-yellow-600/30">
        <div className="flex flex-wrap gap-2 text-yellow-500">
          {e.tech.map(({ icon: Icon, label }) => (
            <span key={label} className="p-1 rounded-sm bg-gray-700 border border-yellow-600/30" title={label}>
              <Icon size={16} aria-label={label} />
            </span>
          ))}
        </div>
        {e.cta && (
          <a
            href={e.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-gray-900 font-bold text-sm shadow-md shadow-yellow-500/20 border-2 border-yellow-400 hover:bg-yellow-400 transition-all sm:ml-auto w-fit"
          >
            <FaCalendarCheck className="w-4 h-4" />
            <span>{e.cta.label}</span>
          </a>
        )}
      </div>
    </>
  );

  // A card with its own call to action cannot itself be a link (no nested anchors).
  return e.href && !e.cta ? (
    <a href={e.href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
};

const ExperienceSection: React.FC = () => (
  <section
    id="experience"
    className="flex flex-col items-center justify-center text-center relative select-none p-6 md:p-12 py-16 md:py-24"
  >
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center">
        <span className="text-yellow-500">Professional</span> Experience
      </h2>
      <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 md:mb-12 text-center">
        Experience building applications, automating delivery and operating cloud infrastructure.
      </p>
      <m.div
        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 md:gap-6 items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </m.div>
    </div>
  </section>
);

export default ExperienceSection;
