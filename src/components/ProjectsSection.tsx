import React, { useState } from "react";
import { m } from "framer-motion";
import { FaExternalLinkAlt, FaGooglePlay, FaApple } from "react-icons/fa";
import { projects, isLive, type Project } from "../data/projects";

const INITIAL_COUNT = 6;

const linkButton =
  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-xs font-semibold hover:bg-green-500/20 hover:border-green-400 transition-all w-fit";

// Live/linked projects surface first so the initially-visible set is the most compelling.
const sortedProjects = [...projects].sort((a, b) => Number(isLive(b)) - Number(isLive(a)));

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const live = isLive(project);
  return (
    <m.div
      className={`bg-gray-800 border-2 p-6 rounded-xl shadow-lg transition-all text-left flex flex-col justify-between ${
        live ? "border-green-500/40 hover:border-green-400" : "border-yellow-600/30 hover:border-yellow-500"
      }`}
      whileHover={{ y: -5 }}
    >
      <div>
        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
          <h3 className="text-xl font-semibold text-yellow-500 leading-snug">{project.title}</h3>
          {(project.status || live) && (
            <span className="flex items-center gap-1 bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 mt-0.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              {project.status ?? "Website / app"}
            </span>
          )}
        </div>
        <p className="text-gray-200 text-base mb-4 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkButton}>
            <FaExternalLinkAlt size={10} />
            {project.domain}
          </a>
        )}

        {project.sources && (
          <div className="flex flex-wrap gap-3">
            {project.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-yellow-400 underline underline-offset-4 py-1"
              >
                {source.label}
              </a>
            ))}
          </div>
        )}

        {(project.ios || project.android) && (
          <div className="flex flex-wrap gap-2">
            {project.ios && (
              <a href={project.ios} target="_blank" rel="noopener noreferrer" className={linkButton}>
                <FaApple size={12} />
                App Store
              </a>
            )}
            {project.android && (
              <a href={project.android} target="_blank" rel="noopener noreferrer" className={linkButton}>
                <FaGooglePlay size={11} />
                Google Play
              </a>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-3 text-yellow-500 pt-3 border-t border-yellow-600/20">
          {project.tech.map(({ icon: Icon, label }) => (
            <span key={label} title={label} className="text-xl hover:scale-110 transition-transform">
              <Icon aria-label={label} />
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, INITIAL_COUNT);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center text-center relative select-none p-6 md:p-12 py-16 md:py-24"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center">
          <span className="text-yellow-500">Key</span> Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-2 text-center">
          Applications, infrastructure and engineering projects across full-stack engineering, cloud architecture and
          automation. Client work is delivered through{" "}
          <span className="text-yellow-500 font-semibold">Axynoxia</span>.
        </p>
        <p className="text-sm text-gray-500 italic max-w-2xl mx-auto mb-8 md:mb-12 text-center">
          Client deliveries, Axynoxia products, RFC and ESPRIT projects.
        </p>

        <div id="project-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {sortedProjects.length > INITIAL_COUNT && (
          <button
            type="button"
            aria-expanded={showAll}
            aria-controls="project-grid"
            onClick={() => setShowAll((v) => !v)}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-yellow-600/40 text-yellow-500 font-semibold text-sm hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
          >
            {showAll ? "Show fewer projects" : `Show ${sortedProjects.length - INITIAL_COUNT} more projects`}
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
