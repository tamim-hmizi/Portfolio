import React, { useMemo, useState } from "react";
import { FaExternalLinkAlt, FaGooglePlay, FaApple } from "react-icons/fa";
import { projects, categories, isLive, type Project, type ProjectCategory } from "../data/projects";
import Reveal from "./Reveal";

const INITIAL_COUNT = 6;

const linkButton =
  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/40 text-yellow-300 text-xs font-semibold hover:bg-yellow-500/20 hover:border-yellow-400 transition-colors w-fit";

// Live/linked projects first, so the initially visible set is the most convincing.
const byLiveFirst = (a: Project, b: Project) => Number(isLive(b)) - Number(isLive(a));

const ProjectCard: React.FC<{ project: Project; large?: boolean }> = ({ project, large }) => {
  const live = isLive(project);
  return (
    <article
      className={`group h-full rounded-xl border bg-gray-800/70 p-6 text-left flex flex-col transition-colors hover:border-yellow-500/70 ${
        large ? "border-yellow-500/40" : "border-gray-700"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className={`${large ? "text-2xl" : "text-xl"} font-semibold text-white leading-snug`}>{project.title}</h3>
        {(project.status || live) && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-200 whitespace-nowrap mt-1">
            {live && <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />}
            {project.status ?? "Live"}
          </span>
        )}
      </div>
      <p className="text-gray-300 leading-relaxed mb-5">{project.description}</p>

      <ul className="flex flex-wrap gap-2 mb-5" aria-label="Technologies">
        {project.tech.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="inline-flex items-center gap-1.5 rounded-md bg-gray-900/70 border border-gray-700 px-2 py-1 text-xs text-gray-200"
          >
            <Icon className="text-yellow-500" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-2">
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkButton}>
            <FaExternalLinkAlt size={10} aria-hidden="true" />
            {project.domain}
          </a>
        )}
        {project.ios && (
          <a href={project.ios} target="_blank" rel="noopener noreferrer" className={linkButton}>
            <FaApple size={12} aria-hidden="true" /> App Store
          </a>
        )}
        {project.android && (
          <a href={project.android} target="_blank" rel="noopener noreferrer" className={linkButton}>
            <FaGooglePlay size={11} aria-hidden="true" /> Google Play
          </a>
        )}
        {project.sources?.map((source) => (
          <a
            key={source.url}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-yellow-400 underline underline-offset-4 px-1 py-1"
          >
            {source.label}
          </a>
        ))}
      </div>
    </article>
  );
};

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const list = useMemo(
    () => projects.filter((p) => (filter === "all" ? !p.featured : p.category === filter)).sort(byLiveFirst),
    [filter],
  );
  // Only the long "All" list is collapsed; a single category is short enough to show whole.
  const collapsible = filter === "all" && list.length > INITIAL_COUNT;
  const visible = collapsible && !showAll ? list.slice(0, INITIAL_COUNT) : list;

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-10 py-20 md:py-28">
      <div className="w-full max-w-6xl mx-auto">
        <Reveal className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-yellow-500">Key</span> Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {projects.length} projects: client deliveries through{" "}
            <span className="text-yellow-400 font-semibold">Axynoxia</span>, our own products, and cloud and DevOps work
            from RFC and ESPRIT.
          </p>
        </Reveal>

        {filter === "all" && (
          <div className="grid gap-6 lg:grid-cols-3 mb-12">
            {featured.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.08}>
                <ProjectCard project={project} large />
              </Reveal>
            ))}
          </div>
        )}

        <div role="group" aria-label="Filter projects" className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(({ id, label }) => {
            const count = id === "all" ? projects.length : projects.filter((p) => p.category === id).length;
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFilter(id);
                  setShowAll(false);
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  active
                    ? "bg-yellow-500 text-gray-900 border-yellow-500"
                    : "border-gray-600 text-gray-200 hover:border-yellow-500/70 hover:text-yellow-300"
                }`}
              >
                {label} <span className={active ? "text-gray-800" : "text-gray-400"}>{count}</span>
              </button>
            );
          })}
        </div>

        <div id="project-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {collapsible && (
          <div className="text-center">
            <button
              type="button"
              aria-expanded={showAll}
              aria-controls="project-grid"
              onClick={() => setShowAll((v) => !v)}
              className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-yellow-500/50 text-yellow-400 font-semibold text-sm hover:border-yellow-400 hover:bg-yellow-500/10 transition-colors"
            >
              {showAll ? "Show fewer projects" : `Show ${list.length - INITIAL_COUNT} more projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
