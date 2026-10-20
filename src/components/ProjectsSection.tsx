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
  { title: "DevOps CI/CD Hub", kind: "ESPRIT project", area: "Cloud & DevOps",
    description: "Jenkins delivery pipelines for Angular and Spring Boot microservices, integrating SonarQube quality gates, Trivy security scanning and Nexus artifact versioning.",
    stack: "Jenkins · SonarQube · Trivy · Nexus · Angular · Spring Boot" },
  { title: "Roehrdanz Immobilien", kind: "Client project", area: "Software",
    description: "React 19, Express 5 and MongoDB CMS for listings and enquiries; employee sessions, bcrypt and RBAC, asynchronous Base64 images, dynamic SEO content, Vite and Tailwind property galleries.",
    stack: "React · Express · MongoDB · TypeScript",
    links: [{ label: "View real estate site", url: "https://rimmobilien-test.de/" }] },
  { title: "Confortex", kind: "Client project", area: "Software",
    description: "Custom bedding storefront with product collections, SEO blog, newsletter integration, delivery promotions and contact information for three showrooms.",
    stack: "Shopify · Storefront development · E-commerce",
    links: [{ label: "Visit Confortex", url: "https://confortex.shop/" }] },
  { title: "Vie Sublime", kind: "Client project", area: "Software",
    description: "Custom furniture storefront with indoor, office, school and garden collections, editorial content, newsletter integration and showroom information.",
    stack: "Shopify · Storefront development · E-commerce",
    links: [{ label: "Visit Vie Sublime", url: "https://www.viesublime.tn/" }] },
  { title: "Habiter Mieux", kind: "Client project", area: "Software",
    description: "French solar installation site with service and subsidy information, search optimization and a quote request funnel connected to the client sales workflow.",
    stack: "React · Lead capture · Search optimization",
    links: [{ label: "Visit Habiter Mieux", url: "https://habiter-mieux.info/" }] },
  { title: "OMHY Entertainment", kind: "Client project", area: "Software",
    description: "React/Chakra UI and GSAP media and portfolio experience; MongoDB/MySQL data services and Jenkins delivery pipelines with quality and security checks.",
    stack: "React · Chakra UI · GSAP · MongoDB · MySQL · Jenkins",
    links: [{ label: "Visit OMHY", url: "https://omhyfamily.com/" }] },
  { title: "NexGen Studios", kind: "Client project", area: "Software",
    description: "Next.js App Router website, containerized with Docker and served by Nginx.",
    stack: "Next.js · Docker · Nginx" },
  { title: "Tickety", kind: "Project", area: "Software",
    description: "React/Vite and TypeScript pnpm monorepo with bcrypt authentication, cookie sessions, checkout, pending-order expiry and concurrent refund handling; end to end smoke tests and Docker deployment.",
    stack: "React · Vite · TypeScript · MongoDB",
    links: [{ label: "Explore ticketing demo", url: "https://tickets.products.axynoxia.com/" }] },
  { title: "Axynoxia Energie", kind: "Project", area: "Software",
    description: "TypeScript services for domain model, API, control, HMI and simulation, modeled on ADAM plant design: 5.5 MWp PV, 2.2 MW/1.5 MWh BESS two 8.25 MVA turbines and 20/11 kV interconnection. Telemetry, alarms and supervisory control behind a TLS proxy; excludes safety instrumentation.",
    stack: "TypeScript · React · Energy modeling · Docker",
    links: [{ label: "Explore energy demo", url: "https://energie.products.axynoxia.com/" }] },
  { title: "ProInvoice", kind: "Project", area: "Software",
    description: "React 19/Vite, TanStack Query, React Hook Form and Zod with Express/TypeScript and MongoDB; two factor authentication, PDF/Excel invoice generation, transactional email and Swagger API documentation.",
    stack: "React · Express · TypeScript · MongoDB · Swagger",
    links: [{ label: "Explore invoicing demo", url: "https://invoice.products.axynoxia.com/" }] },
  { title: "Axynoxia LeadGen", kind: "Project in development", area: "Applied AI",
    description: "NestJS/Next.js project in development with Temporal and LangGraph workflows, waterfall enrichment, email verification gates, field provenance, provider attempt logs, outcome based credit billing, suppression, consent records and GDPR data subject requests.",
    stack: "NestJS · Next.js · Temporal · LangGraph" },
  { title: "Axynoxia CRM & Leasing", kind: "Project", area: "Software",
    description: "MERN platform for lease origination through accounting, with IFRS 16/BCT oriented financial calculations, 10-role RBAC, Arabic RTL, background jobs and containerized deployment.",
    stack: "MongoDB · Express · React · Node.js",
    links: [{ label: "Explore CRM demo", url: "https://crm-leasing.products.axynoxia.com/" }] },
  { title: "OpenStack Private Cloud Lab", kind: "ESPRIT lab", area: "Cloud & DevOps",
    description: "Multi-node cloud with virtual networks, subnets, compute, storage and VPN-over-physical connectivity; workload lifecycle, automated scaling and high availability routing.",
    stack: "OpenStack · Linux · Virtual networking" },
  { title: "MERN E-commerce", kind: "Independent project", area: "Software",
    description: "React and Redux Toolkit storefront, Express and MongoDB API, JWT authentication, Argon2 password hashing, order/inventory administration and Multer uploads.",
    stack: "MongoDB · Express · React · Node.js · Redux" },
  { title: "New Journey", kind: "Independent project", area: "Software",
    description: "Symfony 7/PHP 8.2 with modular controllers, Doctrine ORM, UX Turbo, Stimulus, multi-user authentication and RBAC; Docker Compose for reproducible environments.",
    stack: "Symfony 7 · PHP 8.2 · Doctrine · Turbo · Stimulus · Docker" },
  { title: "Jektis Travel", kind: "Independent project", area: "Software",
    description: "PHP platform for flight and hotel booking, price scraping and Stripe payment integration; PHPMailer and cron jobs automate booking updates and notifications.",
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
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Engineering <span className="text-yellow-400">work</span></h2>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed mb-8">
          Projects spanning software delivery, cloud operations and applied AI.
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
