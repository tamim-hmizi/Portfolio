import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { EXPERIENCE, PROJECTS, CATEGORIES } from "./data/content";

const base = "/Portfolio/";
const rise = {
  initial: { opacity: 1, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-25px" },
  transition: { duration: 0.55 },
};
const snapshots: Record<string, string> = {
  "B'moovd Ticketing": "ticketing",
  "Roehrdanz Immobilien": "real-estate",
  Confortex: "confortex",
};
const shortCopy: Record<string, string> = {
  "B'moovd Ticketing":
    "From checkout to the door. Payments, signed QR tickets, PDF delivery and camera check-in in one application.",
  "Azure Stack Hub Monitoring":
    "A clearer view of hybrid infrastructure. Custom Python exporters turn cloud and VM telemetry into Prometheus metrics and Grafana dashboards.",
  "B'moovd Mobile App":
    "The experience in your pocket. A Flutter app for iOS and Android, with Firebase services and store release pipelines.",
  "Axynoxia ERP":
    "Business software built to grow by module. A NestJS and PostgreSQL platform with isolated client deployments and role based access.",
  "Axynoxia Energie":
    "Making a simulated energy plant readable. Live telemetry, alarms and supervisory controls for a solar and battery model.",
  "Roehrdanz Immobilien":
    "Property publishing with the tools behind it. Listings, image processing, enquiries and an employee CMS.",
  Confortex:
    "A storefront with a sense of place. Custom Shopify collections, editorial content and showroom discovery.",
};
const areas = ["All work", "Software", "Cloud & DevOps", "Applied AI"] as const;
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function QuickOpsMap({ compact = false }: { compact?: boolean }) {
  const [stage, setStage] = useState(0);
  const stages = [
    {
      name: "Analyze",
      title: "Read the repository.",
      detail:
        "FastAPI and LLM integration inspect application structure, dependencies and runtime needs.",
      repo: "AI",
      stack: "Python / FastAPI",
    },
    {
      name: "Provision",
      title: "Prepare the environment.",
      detail:
        "Terraform provisions infrastructure. Ansible configures the tools that deliver the application.",
      repo: "IAC",
      stack: "Terraform / Ansible",
    },
    {
      name: "Deploy",
      title: "Ship and observe.",
      detail:
        "Jenkins coordinates delivery to VMs or AKS. Prometheus and Grafana expose operational telemetry.",
      repo: "Backend",
      stack: "Jenkins / AKS / Grafana",
    },
  ];
  const active = stages[stage];
  return (
    <div className={`quickops-map ${compact ? "compact-map" : ""}`} data-ui>
      <div className="map-top">
        <span>QuickOps</span>
        <span>Repository to runtime</span>
      </div>
      <div className="map-flow" aria-label="Explore the QuickOps workflow">
        {stages.map((s, i) => (
          <button
            type="button"
            key={s.name}
            aria-pressed={stage === i}
            onClick={() => setStage(i)}
          >
            {s.name}
            <span aria-hidden="true">{i < 2 ? "→" : "↗"}</span>
          </button>
        ))}
      </div>
      <div className="map-detail" aria-live="polite">
        <p>{active.stack}</p>
        <h3>{active.title}</h3>
        <p>{active.detail}</p>
        <a
          href={`https://github.com/tamim-hmizi/QuickOps-${active.repo}`}
          target="_blank"
          rel="noreferrer"
        >
          Explore the code <Arrow />
        </a>
      </div>
      <div className="map-bottom">
        <span>React + Express</span>
        <span>VM or Kubernetes</span>
      </div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const [area, setArea] = useState<(typeof areas)[number]>("All work");
  const [selected, setSelected] = useState("B'moovd Ticketing");
  const filtered = PROJECTS.filter(
    (p) => area === "All work" || p.area === area,
  );
  const active = filtered.find((p) => p.title === selected) || filtered[0];
  return (
    <MotionConfig reducedMotion="user">
      <div className="site">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <header className="site-header">
          <a className="signature" href="#home" aria-label="Tamim Hmizi home">
            <img src={`${base}favicon.svg`} width="40" height="40" alt="" />
          </a>
          <span className="nav-note">
            Software engineer
            <br />
            Cloud, DevOps &amp; AI
          </span>
          <button
            className="menu-button"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{menu ? "×" : "+"}</span>
          </button>
          <nav
            id="navigation"
            aria-label="Primary"
            className={menu ? "navigation open" : "navigation"}
          >
            {[
              ["projects", "Work"],
              ["experience", "About"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-github"
              href="https://github.com/tamim-hmizi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
          </nav>
        </header>
        <main id="content" tabIndex={-1}>
          <section className="hero" id="home">
            <motion.h1 {...rise} className="name-monument">
              Tamim Hmizi
            </motion.h1>
            <div className="hero-body">
              <div className="hero-intro">
                <motion.p {...rise} className="hero-statement">
                  I build the application.
                  <br />
                  And what runs it.
                </motion.p>
                <motion.p {...rise} className="hero-description">
                  Software engineering, cloud infrastructure and applied AI.
                  From the first interface to the deployment pipeline.
                </motion.p>
                <motion.div {...rise} className="hero-actions">
                  <a className="button" href="#projects">
                    Explore my work <span aria-hidden="true">↓</span>
                  </a>
                  <a
                    className="text-link"
                    href={`${base}resume-en.pdf`}
                    download="Tamim-Hmizi-Resume-EN.pdf"
                  >
                    Resume (EN) <span aria-hidden="true">↓</span>
                  </a>
                  <a
                    className="text-link"
                    href={`${base}cv-fr.pdf`}
                    download="Tamim-Hmizi-CV-FR.pdf"
                    lang="fr"
                  >
                    CV (FR) <span aria-hidden="true">↓</span>
                  </a>
                </motion.div>
                <p className="current-role">
                  Full Stack Engineer at Bassetti Group.
                  <br />
                  Founder of{" "}
                  <a
                    href="https://www.axynoxia.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Axynoxia <Arrow />
                  </a>
                </p>
              </div>
              <motion.figure {...rise} className="portrait">
                <img
                  src={`${base}me.jpg`}
                  width="960"
                  height="1280"
                  alt="Tamim Hmizi"
                  fetchPriority="high"
                />
                <figcaption>Behind the code. Ariana.</figcaption>
              </motion.figure>
            </div>
          </section>
          <section className="featured" aria-labelledby="quickops-title">
            <motion.div {...rise} className="feature-copy">
                <h2 id="quickops-title">Meet QuickOps.</h2>
              <p className="feature-lead">One project. The whole stack.</p>
              <p>
                An application that reads a repository, recommends a deployment
                approach and connects it to infrastructure provisioning and
                delivery.
              </p>
              <p>Built as my RFC final year project, QuickOps brings my software, cloud and AI work together.</p>
              <a
                className="text-link"
                href="https://github.com/tamim-hmizi/QuickOps-Frontend"
                target="_blank"
                rel="noreferrer"
              >
                View the platform source <Arrow />
              </a>
            </motion.div>
            <motion.div {...rise}>
              <QuickOpsMap />
            </motion.div>
          </section>
          <section id="projects" className="work-section section-space">
            <motion.div {...rise} className="section-intro">
              <h2>Built with purpose.</h2>
              <p>
                Applications, infrastructure and the connections between them.
                Choose a project to look closer.
              </p>
            </motion.div>
            <div
              className="work-filters"
              role="group"
              aria-label="Filter projects by engineering area"
            >
              {areas.map((a) => (
                <button
                  type="button"
                  key={a}
                  aria-pressed={a === area}
                  onClick={() => setArea(a)}
                >
                  {a}
                </button>
              ))}
            </div>
            <div className="work-browser">
              <div className="work-list" aria-label="Choose a project">
                {filtered.map((p) => (
                  <motion.button
                    {...rise}
                    type="button"
                    className={
                      active.title === p.title
                        ? "project-choice selected"
                        : "project-choice"
                    }
                    key={p.title}
                    aria-pressed={active.title === p.title}
                    onClick={() => setSelected(p.title)}
                  >
                    <span>
                      {p.title
                        .replace(": DevOps as a Service", "")
                        .replace(
                          "Azure Stack Hub Monitoring",
                          "Azure monitoring",
                        )}
                    </span>
                    <Arrow />
                  </motion.button>
                ))}
              </div>
              <div className="project-preview" key={active.title}>
                {snapshots[active.title] ? (
                  <img
                    className="project-shot"
                    src={`${base}work/${snapshots[active.title]}.jpg`}
                    alt={`${active.title} website preview`}
                    width="1440"
                    height="1000"
                    loading="lazy"
                  />
                ) : active.title.startsWith("QuickOps") ? (
                  <QuickOpsMap compact />
                ) : (
                  <div className="project-typography">
                    <span>{active.area}</span>
                    <p>
                      {active.title
                        .replace(
                          "Azure Stack Hub Monitoring",
                          "Azure Stack Hub",
                        )
                        .replace("B'moovd Mobile App", "B'moovd")}
                    </p>
                    <span>
                      {active.title.includes("Mobile")
                        ? "iOS / Android"
                        : active.title.includes("Monitoring")
                          ? "Exporters → Metrics → Dashboards"
                          : active.title.includes("Energie")
                            ? "Telemetry → Alarms → Control"
                            : "Modules → Services → Operations"}
                    </span>
                  </div>
                )}
                <div className="preview-copy">
                  <p>{active.kind}</p>
                  <h3>{active.title.replace(": DevOps as a Service", "")}</h3>
                  <p>
                    {shortCopy[active.title] ||
                      "Repository analysis, deployment recommendations and automated delivery. Built as my RFC final year project."}
                  </p>
                  <p className="project-stack">{active.stack}</p>
                  <details>
                    <summary>Technical details</summary>
                    <p>{active.description}</p>
                  </details>
                  <div className="project-links">
                    {active.links?.map((l) => (
                      <a
                        className="text-link"
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label} <Arrow />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="project-glimpses">
              <figure>
                <img
                  src={`${base}work/real-estate.jpg`}
                  alt="Roehrdanz Immobilien property website"
                  loading="lazy"
                  width="1440"
                  height="1000"
                />
                <figcaption>
                  <span>Roehrdanz Immobilien</span>
                  <span>Listings, enquiries, CMS</span>
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`${base}work/confortex.jpg`}
                  alt="Confortex Shopify storefront"
                  loading="lazy"
                  width="1440"
                  height="1000"
                />
                <figcaption>
                  <span>Confortex</span>
                  <span>Custom storefront</span>
                </figcaption>
              </figure>
            </div>
          </section>
          <section id="experience" className="about-section section-space">
            <motion.div {...rise} className="about-intro">
              <h2>
                Curious by default.
                <br />
                Engineer by practice.
              </h2>
              <p>
                I like working across the boundaries: application code, delivery
                systems and the infrastructure underneath. That is the thread
                from my RFC projects to enterprise software at Bassetti Group
                and my work at Axynoxia.
              </p>
            </motion.div>
            <div className="career">
              <h3>Where I've been building</h3>
              {EXPERIENCE.map((j, i) => (
                <motion.details
                  {...rise}
                  key={j.role + j.company}
                  className="career-item"
                  open={i === 0 ? true : undefined}
                >
                  <summary>
                    <span>
                      {j.company}
                      <span className="career-role">{j.role}</span>
                    </span>
                    <span className="career-dates">
                      {j.dates}
                      <span aria-hidden="true">+</span>
                    </span>
                  </summary>
                  <ul>
                    {j.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </motion.details>
              ))}
            </div>
            <div className="toolkit" id="skills">
              <h3>Tools I work with</h3>
              <ul className="toolkit-lead">
                <li>TypeScript &amp; Python</li>
                <li>React &amp; .NET</li>
                <li>Azure &amp; AWS</li>
                <li>Docker &amp; Kubernetes</li>
                <li>Terraform &amp; Ansible</li>
                <li>LLM integration</li>
              </ul>
              <details>
                <summary>Explore the full toolkit</summary>
                <div className="skill-details">
                  {CATEGORIES.map((c) => (
                    <div key={c.title}>
                      <strong>{c.title}</strong>
                      <p>{c.skills}</p>
                    </div>
                  ))}
                </div>
              </details>
            </div>
            <div className="education" id="education">
              <div>
                <h3>Software Engineering Degree</h3>
                <p>ESPRIT · 2020 to 2025</p>
              </div>
              <p>
                Cloud Architecture and DevOps (ArcTIC).
                <br />
                Arabic, English and French.
              </p>
            </div>
          </section>
          <section id="contact" className="contact-section">
            <motion.h2 {...rise}>
              Have something
              <br />
              worth building?
            </motion.h2>
            <motion.a
              {...rise}
              className="contact-primary"
              href="mailto:tamimhmizi@icloud.com"
            >
              Let's talk <Arrow />
            </motion.a>
            <div className="contact-links">
              <a href="mailto:tamimhmizi@icloud.com">tamimhmizi@icloud.com</a>
              <a href="mailto:tamim.hmizi@axynoxia.com">
                Client projects at Axynoxia <Arrow />
              </a>
              <a href="tel:+21654886068">+216 54 886 068</a>
            </div>
            <footer className="footer-links">
              <div>
                <a
                  href="https://github.com/tamim-hmizi"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Arrow />
                </a>
                <a
                  href="https://www.linkedin.com/in/tamimhmizi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Arrow />
                </a>
                <a href="#home">Back to top ↑</a>
              </div>
            </footer>
            <p className="footer-name" aria-hidden="true">
              Tamim Hmizi
            </p>
          </section>
        </main>
      </div>
    </MotionConfig>
  );
}
export default App;
