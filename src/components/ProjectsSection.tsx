import React, { useState } from "react";

type Area = "All work" | "Software" | "Cloud & DevOps" | "Applied AI";
type Project = { title: string; kind: string; area: Area; description: string; stack: string; links?: { label: string; url: string }[] };

const PROJECTS: Project[] = [
  { title: "QuickOps: DevOps as a Service", kind: "RFC final year project", area: "Applied AI",
    description: "Built an LLM assisted platform that analyzes repository structure, dependencies and runtime needs to recommend VM or Kubernetes deployment. Connected the recommendations to automated provisioning and delivery workflows.",
    stack: "React · FastAPI · Express · MongoDB · Terraform · Ansible · Jenkins · AKS",
    links: [{ label: "Read AI service code", url: "https://github.com/tamim-hmizi/QuickOps-AI" }, { label: "Read infrastructure code", url: "https://github.com/tamim-hmizi/QuickOps-IAC" }] },
  { title: "B'moovd Ticketing", kind: "Client project", area: "Software",
    description: "Built an event ticket shop with payment integrations, signed QR tickets, camera check-in and emailed ticket and invoice PDFs.",
    stack: "Next.js · tRPC · TypeScript · MongoDB · Prisma",
    links: [{ label: "Visit ticket shop", url: "https://bmoovd-shop.com/" }] },
  { title: "Azure Stack Hub Monitoring", kind: "RFC infrastructure project", area: "Cloud & DevOps",
    description: "Developed Python/Flask exporters that collect infrastructure and VM telemetry from Azure Stack Hub Admin APIs using OAuth2. Built dashboards and alerts with Prometheus and Grafana.",
    stack: "Azure Stack Hub · Python · Flask · Docker · Prometheus · Grafana" },
  { title: "B'moovd Mobile App", kind: "Client project", area: "Software",
    description: "Built a Flutter app for venue discovery and reservations, with authentication, data services, storage and payment integration.",
    stack: "Flutter · Firebase Auth · Firestore · Cloud Functions",
    links: [{ label: "View on App Store", url: "https://apps.apple.com/de/app/bmoovd/id6736364332" }, { label: "View on Google Play", url: "https://play.google.com/store/apps/details?id=com.bmoovd.app" }] },
  { title: "Axynoxia ERP", kind: "Product demo", area: "Software",
    description: "Developing a modular ERP with automatic module discovery, access management and dedicated client deployments. Product development is ongoing.",
    stack: "NestJS · Prisma · PostgreSQL · Redis · Docker Compose",
    links: [{ label: "Explore ERP demo", url: "https://erp.products.axynoxia.com/" }] },
  { title: "DevOps CI/CD Hub", kind: "ESPRIT project", area: "Cloud & DevOps",
    description: "Built Jenkins delivery pipelines for Angular and Spring Boot applications, with quality checks, security scanning and artifact management.",
    stack: "Jenkins · SonarQube · Trivy · Nexus · Angular · Spring Boot" },
  { title: "Roehrdanz Immobilien", kind: "Client project", area: "Software",
    description: "Built a real estate CMS with listing administration, image uploads, role based access and searchable property content.",
    stack: "React · Express · MongoDB · TypeScript",
    links: [{ label: "View real estate site", url: "https://rimmobilien-test.de/" }] },
  { title: "Confortex", kind: "Client project", area: "Software",
    description: "Built a Shopify storefront with custom theming, product collections, editorial content, newsletter integration and showroom information.",
    stack: "Shopify · Storefront development · E-commerce",
    links: [{ label: "Visit Confortex", url: "https://confortex.shop/" }] },
  { title: "Vie Sublime", kind: "Client project", area: "Software",
    description: "Built a furniture storefront with custom Shopify theming, collection navigation, editorial content and showroom information.",
    stack: "Shopify · Storefront development · E-commerce",
    links: [{ label: "Visit Vie Sublime", url: "https://www.viesublime.tn/" }] },
  { title: "Habiter Mieux", kind: "Client project", area: "Software",
    description: "Delivered a solar installation website with service information and a quote request funnel connected to the client's enquiry workflow.",
    stack: "React · Lead capture · Search optimization",
    links: [{ label: "Visit Habiter Mieux", url: "https://habiter-mieux.info/" }] },
  { title: "OMHY Entertainment", kind: "Client project", area: "Software",
    description: "Developed a media and portfolio website with React, animated interfaces, MongoDB/MySQL data services and Jenkins delivery pipelines.",
    stack: "React · Chakra UI · GSAP · MongoDB · MySQL · Jenkins",
    links: [{ label: "Visit OMHY", url: "https://omhyfamily.com/" }] },
  { title: "NexGen Studios", kind: "Client project", area: "Software",
    description: "Built a Next.js App Router marketing website, containerized with Docker and served through Nginx.",
    stack: "Next.js · Docker · Nginx" },
  { title: "Tickety", kind: "Product demo", area: "Software",
    description: "Built a ticketing platform with order expiry, refund handling and end to end smoke tests in a TypeScript pnpm monorepo.",
    stack: "React · Vite · TypeScript · MongoDB",
    links: [{ label: "Explore ticketing demo", url: "https://tickets.products.axynoxia.com/" }] },
  { title: "Axynoxia Energie", kind: "Product demo", area: "Software",
    description: "Built an energy management demo for solar and battery storage, with a plant simulator, live telemetry, alarms and supervisory dashboards.",
    stack: "TypeScript · React · Energy modeling · Docker",
    links: [{ label: "Explore energy demo", url: "https://energie.products.axynoxia.com/" }] },
  { title: "ProInvoice", kind: "Product demo", area: "Software",
    description: "Built an invoicing application with two factor authentication, PDF/Excel export, email delivery and documented APIs.",
    stack: "React · Express · TypeScript · MongoDB · Swagger",
    links: [{ label: "Explore invoicing demo", url: "https://invoice.products.axynoxia.com/" }] },
  { title: "Axynoxia CRM & Leasing", kind: "Product demo", area: "Software",
    description: "Built a lease management demo with financial calculations, role based access, an Arabic RTL interface and background job processing.",
    stack: "MongoDB · Express · React · Node.js",
    links: [{ label: "Explore CRM demo", url: "https://crm-leasing.products.axynoxia.com/" }] },
  { title: "OpenStack Private Cloud Lab", kind: "ESPRIT lab", area: "Cloud & DevOps",
    description: "Deployed a multi-node private cloud with virtual networks, subnets, compute, storage and VPN connectivity for application workloads.",
    stack: "OpenStack · Linux · Virtual networking" },
  { title: "MERN E-commerce", kind: "Independent project", area: "Software",
    description: "Built a storefront and order administration application with authentication, Argon2 password hashing and asset uploads.",
    stack: "MongoDB · Express · React · Node.js · Redux" },
  { title: "New Journey", kind: "Independent project", area: "Software",
    description: "Developed a consulting platform with modular controllers, role based access and dynamic interfaces using Symfony UX.",
    stack: "Symfony 7 · PHP 8.2 · Doctrine · Turbo · Stimulus · Docker" },
  { title: "Jektis Travel", kind: "Independent project", area: "Software",
    description: "Developed a travel platform with booking workflows, price scraping, payment integration and email notifications.",
    stack: "PHP · MySQL · PHPMailer" },
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
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Selected <span className="text-yellow-400">work</span></h2>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed mb-8">
          Software delivery, cloud operations and applied AI. Client projects are delivered through Axynoxia.
          Product demos show engineering work in progress.
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
