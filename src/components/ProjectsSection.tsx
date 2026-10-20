import React, { useState } from "react";

type Area = "All work" | "Software" | "Cloud & DevOps" | "Applied AI";
type Project = { title: string; kind: string; area: Area; description: string; stack: string; links?: { label: string; url: string }[] };

const PROJECTS: Project[] = [
  { title: "QuickOps: DevOps as a Service", kind: "RFC final year project", area: "Applied AI",
    description: "Built an LLM assisted platform that analyzes repository structure, dependencies and runtime needs to recommend VM or Kubernetes deployment. Connected the recommendations to automated provisioning and delivery workflows.",
    stack: "React · FastAPI · Express · MongoDB · Terraform · Ansible · Jenkins · AKS",
    links: [{ label: "Read AI service code", url: "https://github.com/tamim-hmizi/QuickOps-AI" }, { label: "Read infrastructure code", url: "https://github.com/tamim-hmizi/QuickOps-IAC" }] },
  { title: "B'moovd Ticketing", kind: "Client project", area: "Software",
    description: "Next.js 14 App Router, strict TypeScript, tRPC and MongoDB/Prisma; Stripe, Mollie and PayPal checkout, signed JWT QR tickets, camera check-in, emailed ticket PDFs and VAT invoices; NextAuth roles and JWT sessions.",
    stack: "Next.js · tRPC · TypeScript · MongoDB · Prisma",
    links: [{ label: "Visit ticket shop", url: "https://bmoovd-shop.com/" }] },
  { title: "Azure Stack Hub Monitoring", kind: "RFC infrastructure project", area: "Cloud & DevOps",
    description: "Dockerized Python/Flask exporters query Admin APIs through service principal OAuth2; Prometheus and Grafana expose region health, storage fabric, tenant VM compute and disk IOPS, with dashboards and alerts.",
    stack: "Azure Stack Hub · Python · Flask · Docker · Prometheus · Grafana" },
  { title: "B'moovd Mobile App", kind: "Client project", area: "Software",
    description: "Flutter/Dart application for iOS, Android and web, published on the App Store and Google Play; Firebase Auth, Firestore rules/indexes, Cloud Functions, Storage, Stripe integration and store release pipelines.",
    stack: "Flutter · Firebase Auth · Firestore · Cloud Functions",
    links: [{ label: "View on App Store", url: "https://apps.apple.com/de/app/bmoovd/id6736364332" }, { label: "View on Google Play", url: "https://play.google.com/store/apps/details?id=com.bmoovd.app" }] },
  { title: "Axynoxia ERP", kind: "Project", area: "Software",
    description: "NestJS, Prisma, PostgreSQL and Redis pnpm monorepo with single tenant deployments, module auto-discovery, access requests, MFA, RBAC, first-login rotation and Argon2 hashing; Docker Compose, Traefik and object storage.",
    stack: "NestJS · Prisma · PostgreSQL · Redis · Docker Compose",
    links: [{ label: "Explore ERP demo", url: "https://erp.products.axynoxia.com/" }] },
  { title: "Axynoxia Energie", kind: "Project", area: "Software",
    description: "TypeScript services for domain model, API, control, HMI and simulation, modeled on ADAM plant design: 5.5 MWp PV, 2.2 MW/1.5 MWh BESS, two 8.25 MVA turbines and 20/11 kV interconnection. Telemetry, alarms and supervisory control behind a TLS proxy; excludes safety instrumentation.",
    stack: "TypeScript · React · Energy modeling · Docker",
    links: [{ label: "Explore energy demo", url: "https://energie.products.axynoxia.com/" }] },
  { title: "Roehrdanz Immobilien", kind: "Client project", area: "Software",
    description: "React 19, Express 5 and MongoDB CMS for listings and enquiries; employee sessions, bcrypt and RBAC, asynchronous Base64 images, dynamic SEO content, Vite and Tailwind property galleries.",
    stack: "React · Express · MongoDB · TypeScript",
    links: [{ label: "View real estate site", url: "https://rimmobilien-test.de/" }] },
  { title: "Confortex", kind: "Client project", area: "Software",
    description: "Custom bedding storefront with product collections, SEO blog, newsletter integration, delivery promotions and contact information for three showrooms.",
    stack: "Shopify · Storefront development · E-commerce",
    links: [{ label: "Visit Confortex", url: "https://confortex.shop/" }] },
];

const AREAS: Area[] = ["All work", "Software", "Cloud & DevOps", "Applied AI"];

const ProjectsSection: React.FC = () => {
  const [area, setArea] = useState<Area>("All work");
  const [showAll, setShowAll] = useState(false);
  const filtered = PROJECTS.filter((project) => area === "All work" || project.area === area);
  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="relative px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Engineering <span className="text-yellow-400">work</span></h2>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed mb-8">
          Selected projects spanning software delivery, cloud operations and applied AI.
          Explore the implementation, technology and available links for each project.
        </p>
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects by engineering area">
          {AREAS.map((option) => (
            <button key={option} type="button" aria-pressed={area === option}
              onClick={() => { setArea(option); setShowAll(false); }}
              className={`px-4 py-3 rounded-lg text-sm font-semibold ${area === option ? "bg-yellow-400 text-gray-950" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}>
              {option}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-300 mb-6" aria-live="polite">Showing {visible.length} of {filtered.length} projects</p>
        <div id="project-list" className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {visible.map((project) => (
            <article key={project.title}>
              <p className="text-sm text-gray-300 mb-2">{project.kind}</p>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-base text-gray-200 leading-relaxed mb-3">{project.description}</p>
              <p className="text-sm text-yellow-400 leading-relaxed">{project.stack}</p>
              {project.links && <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                {project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="inline-block py-2 text-white underline underline-offset-4 hover:text-yellow-400">{link.label}<span className="sr-only"> (opens in a new tab)</span></a>)}
              </div>}
            </article>
          ))}
        </div>
        {filtered.length > 6 && <button type="button" aria-expanded={showAll} aria-controls="project-list"
          onClick={() => setShowAll((value) => !value)}
          className="mt-10 px-5 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg">
          {showAll ? "Show fewer projects" : `Show all ${filtered.length} projects`}
        </button>}
      </div>
    </section>
  );
};

export default ProjectsSection;
