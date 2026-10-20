import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaMobileAlt,
  FaShoppingCart,
  FaDocker,
  FaPython,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaApple,
  FaSolarPanel,
  FaFileInvoiceDollar,
  FaRobot,
  FaHandshake,
} from "react-icons/fa";
import {
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiFlutter,
  SiJenkins,
  SiSonarqubeserver,
  SiOpenstack,
  SiTerraform,
  SiTypescript,
  SiShopify,
  SiStripe,
  SiSymfony,
  SiPhp,
  SiRedux,
  SiChakraui,
  SiGreensock,
  SiRedis,
  SiTraefikproxy,
  SiExpress,
  SiNextdotjs,
  SiPrometheus,
  SiGrafana,
  SiLangchain,
  SiTemporal,
  SiFirebase,
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  tech: React.ReactElement[];
  url?: string;
  domain?: string;
  ios?: string;
  android?: string;
  status?: string;
  sources?: {label:string; url:string}[];
}

const INITIAL_COUNT = 6;

const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const projects: Project[] = [
    {
      title: "QuickOps",
      description: "RFC final year platform combining React, Express, FastAPI and MongoDB. LLM repository analysis recommends VM or Kubernetes deployment, connected to Terraform, Ansible, Jenkins, AKS and monitoring.",
      tech: [<FaReact title="React" />, <FaPython title="FastAPI / LLM integration" />, <SiTerraform title="Terraform" />, <SiJenkins title="Jenkins" />],
      url: "https://github.com/tamim-hmizi/QuickOps-Frontend", domain: "Public platform source", status: "RFC final year project",
      sources: [
        {label:"AI service",url:"https://github.com/tamim-hmizi/QuickOps-AI"},
        {label:"Platform API",url:"https://github.com/tamim-hmizi/QuickOps-Backend"},
        {label:"Infrastructure",url:"https://github.com/tamim-hmizi/QuickOps-IAC"},
        {label:"Configuration",url:"https://github.com/tamim-hmizi/QuickOps-CAC"}
      ],
    },
    // Linked projects
    {
      title: "B-moovd Ticketing",
      description: "Next.js/tRPC ticket shop with MongoDB/Prisma, Stripe, Mollie and PayPal checkout, signed QR tickets, camera check-in, emailed PDFs and role based authentication.",
      tech: [<SiNextdotjs title="Next.js 14" />, <SiTypescript title="tRPC / TypeScript" />, <SiMongodb title="MongoDB + Prisma" />, <SiStripe title="Stripe / Mollie / PayPal" />],
      url: "https://bmoovd-shop.com",
      domain: "bmoovd-shop.com",
    },
    {
      title: "B-moovd",
      description: "Published Flutter/Dart app for iOS and Android with Firebase Auth, Firestore, Cloud Functions, Storage, Stripe integration and store release pipelines.",
      tech: [<SiFlutter title="Flutter" />, <SiFirebase title="Firebase" />, <SiStripe title="Stripe" />, <FaMobileAlt title="iOS + Android" />],
      ios: "https://apps.apple.com/de/app/bmoovd/id6736364332",
      android: "https://play.google.com/store/apps/details?id=com.bmoovd.app",
    },
    {
      title: "Roehrdanz Immobilien",
      description: "React, Express and MongoDB property CMS with listings, enquiries, employee sessions, RBAC, asynchronous image processing and dynamic SEO content.",
      tech: [<SiMongodb title="MongoDB" />, <FaNodeJs title="Node.js" />, <FaReact title="React" />, <SiTypescript title="TypeScript" />],
      url: "https://rimmobilien-test.de/",
      domain: "rimmobilien-test.de",
    },
    {
      title: "Confortex",
      description: "Custom Shopify bedding storefront with product collections, SEO editorial content, newsletter integration, delivery promotions and showroom information.",
      tech: [<SiShopify title="Shopify" />, <FaShoppingCart title="E-commerce" />],
      url: "https://confortex.shop",
      domain: "confortex.shop",
    },
    {
      title: "Vie Sublime",
      description: "Custom Shopify furniture storefront with collections for home, office, school and garden, editorial content, newsletter integration and showroom information.",
      tech: [<SiShopify title="Shopify" />, <FaShoppingCart title="Luxury Retail" />],
      url: "https://viesublime.tn",
      domain: "viesublime.tn",
    },
    {
      title: "OMHY Entertainment",
      description: "React media and administration application for artists, groups, albums, songs, casting submissions, news and newsletter management; Express/MongoDB backend and delivery configuration.",
      tech: [<FaReact title="React" />, <SiChakraui title="Chakra UI" />, <SiGreensock title="GSAP" />, <SiJenkins title="Jenkins" />, <SiMongodb title="MongoDB" />],
      url: "https://omhyfamily.com",
      domain: "omhyfamily.com",
    },
    {
      title: "Habiter Mieux",
      description: "Solar installation website with service and subsidy information, search optimization and a quote-request funnel connected to the client sales workflow.",
      tech: [<FaReact title="React" />, <FaSolarPanel title="Solar / Energy" />],
      url: "https://habiter-mieux.info/",
      domain: "habiter-mieux.info",
    },
    {
      title: "NexGen Studios",
      description: "Next.js App Router marketing website, containerized with Docker and served by Nginx.",
      tech: [<SiNextdotjs title="Next.js" />, <FaDocker title="Docker" />],
    },
    // Other projects
    {
      title: "Axynoxia Energie",
      status: "Product demo",
      description: "TypeScript domain, API, control, HMI and simulation services modeled on the ADAM plant design. Solar/battery telemetry, alarms and supervisory control in a hosted demo; not safety instrumentation.",
      tech: [<FaSolarPanel title="PV + BESS / SCADA" />, <FaReact title="React" />, <SiTypescript title="TypeScript monorepo" />],
      url: "https://energie.products.axynoxia.com",
      domain: "energie.products.axynoxia.com",
    },
    {
      title: "ProInvoice",
      status: "Product demo",
      description: "React/Vite and Express/TypeScript invoicing application with MongoDB, two factor authentication, PDF/Excel export, transactional email and Swagger API documentation. Hosted product demo.",
      tech: [<FaFileInvoiceDollar title="Invoicing" />, <FaReact title="React 19" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />],
      url: "https://invoice.products.axynoxia.com",
      domain: "invoice.products.axynoxia.com",
    },
    {
      title: "Axynoxia LeadGen",
      description: "B2B prospecting project in development using NestJS/Next.js, Temporal and LangGraph, with enrichment, email verification, provenance, provider logs, credit billing, suppression and consent workflows.",
      tech: [<FaRobot title="AI Automation" />, <SiLangchain title="LangGraph" />, <SiTemporal title="Temporal" />, <SiNextdotjs title="Next.js" />],
      status: "In development",
    },
    {
      title: "Axynoxia CRM & Leasing",
      status: "Product demo",
      description: "MERN lease-management application with IFRS 16/BCT oriented calculations, 10-role RBAC, Arabic RTL, background jobs and containerized deployment. Hosted product demo.",
      tech: [<FaHandshake title="CRM" />, <SiMongodb title="MongoDB" />, <FaReact title="React" />, <FaNodeJs title="Node.js" />],
      url: "https://crm-leasing.products.axynoxia.com",
      domain: "crm-leasing.products.axynoxia.com",
    },
    {
      title: "Enterprise Monitoring Platform",
      description: "RFC Azure Stack Hub monitoring with Dockerized Python/Flask exporters, Admin APIs, OAuth2 service principal authentication, Prometheus/Grafana metrics, dashboards and alerts for infrastructure and tenant VMs.",
      tech: [<SiPrometheus title="Prometheus" />, <SiGrafana title="Grafana" />, <FaPython title="Python" />, <FaDocker title="Docker" />],
    },
    {
      title: "Axynoxia ERP",
      status: "Product demo",
      description: "NestJS, Prisma, PostgreSQL and Redis modular business application with dedicated client deployments, module discovery, MFA, RBAC, access requests, Docker Compose and Traefik. Ongoing development and hosted demo.",
      tech: [<SiNestjs title="NestJS" />, <SiPrisma title="Prisma" />, <SiPostgresql title="PostgreSQL" />, <SiRedis title="Redis" />, <SiTraefikproxy title="Traefik" />],
      url: "https://erp.products.axynoxia.com",
      domain: "erp.products.axynoxia.com",
    },
    {
      title: "Tickety",
      status: "Product demo",
      description: "React/Vite and TypeScript ticketing application with authentication, cookie sessions, checkout, pending-order expiry, concurrent refund handling, end to end smoke tests and Docker deployment. Hosted demo.",
      tech: [<FaReact title="React + Vite" />, <SiTypescript title="TypeScript" />, <SiExpress title="Express-style API" />, <SiMongodb title="MongoDB" />],
      url: "https://tickets.products.axynoxia.com",
      domain: "tickets.products.axynoxia.com",
    },
    {
      title: "MERN E-commerce",
      description: "React/Redux storefront and Express/MongoDB API with authentication, cart, favorites, categories, orders, inventory administration, uploads and metrics. Monolithic and microservice variants support deployment examples.",
      tech: [<SiMongodb title="MongoDB" />, <SiExpress title="Express" />, <FaReact title="React" />, <FaNodeJs title="Node.js" />, <SiRedux title="Redux" />],
    },
    {
      title: "New Journey",
      description: "Symfony/PHP consulting application with consultation booking and date lookup, administration, Doctrine persistence, authentication and Docker Compose configuration.",
      tech: [<SiSymfony title="Symfony" />, <SiPhp title="PHP" />, <FaServer title="Turbo/Stimulus" />],
    },
    {
      title: "Jektis Travel",
      description: "PHP travel application with city and offer management, reservations, feedback, registration, authentication and administration views. Historical project.",
      tech: [<SiPhp title="PHP" />, <FaDatabase title="MySQL" />],
    },
    {
      title: "DevOps CI/CD Hub",
      description: "ESPRIT Jenkins pipelines for Angular and Spring Boot applications, integrating SonarQube quality gates, Trivy scanning and Nexus artifact versioning.",
      tech: [<SiJenkins title="Jenkins" />, <SiSonarqubeserver title="SonarQube" />, <FaServer title="Nexus" />],
    },
    {
      title: "OpenStack Private Cloud Lab",
      description: "ESPRIT multi-node OpenStack lab with virtual networks, subnets, compute, storage, VPN connectivity and workload lifecycle, scaling and high availability exercises.",
      tech: [<SiOpenstack title="OpenStack" />, <SiTerraform title="Terraform" />, <FaServer title="Infrastructure" />],
    },
  ];

  // Live/linked projects surface first so the initially-visible set is the most compelling.
  const sortedProjects = [...projects].sort((a, b) => {
    const aLive = a.url || a.ios || a.android ? 0 : 1;
    const bLive = b.url || b.ios || b.android ? 0 : 1;
    return aLive - bLive;
  });
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
          Applications, infrastructure and engineering projects across
          full-stack engineering, cloud architecture and automation. Client work
          is delivered through{" "}
          <span className="text-yellow-500 font-semibold">Axynoxia</span>.
        </p>
        <p className="text-sm text-gray-500 italic max-w-2xl mx-auto mb-8 md:mb-12 text-center">
          Client deliveries, RFC and ESPRIT projects, independent applications and products in development.
        </p>

        <div id="project-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.title}
              className={`bg-gray-800 border-2 p-6 rounded-xl shadow-lg transition-all text-left flex flex-col justify-between ${
                project.url || project.ios || project.android
                  ? "border-green-500/40 hover:border-green-400"
                  : "border-yellow-600/30 hover:border-yellow-500"
              }`}
              whileHover={{ y: -5 }}
            >
              <div>
                {/* Project title and status */}
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-yellow-500 leading-snug">{project.title}</h3>
                  {(project.status || project.url || project.ios || project.android) && (
                    <span className="flex items-center gap-1 bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      {project.status || "Website / app"}
                    </span>
                  )}
                </div>

                <p className="text-gray-200 text-base mb-4 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                {/* Project link */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-xs font-semibold hover:bg-green-500/20 hover:border-green-400 transition-all w-fit"
                  >
                    <FaExternalLinkAlt size={10} />
                    {project.domain}
                  </a>
                )}

                {project.sources && <div className="flex flex-wrap gap-3">{project.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-yellow-400 underline underline-offset-4 py-1">{source.label}</a>)}</div>}
                {/* App store buttons */}
                {(project.ios || project.android) && (
                  <div className="flex flex-wrap gap-2">
                    {project.ios && (
                      <a
                        href={project.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-xs font-semibold hover:bg-green-500/20 hover:border-green-400 transition-all"
                      >
                        <FaApple size={12} />
                        App Store
                      </a>
                    )}
                    {project.android && (
                      <a
                        href={project.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-xs font-semibold hover:bg-green-500/20 hover:border-green-400 transition-all"
                      >
                        <FaGooglePlay size={11} />
                        Google Play
                      </a>
                    )}
                  </div>
                )}

                {/* Tech icons */}
                <div className="flex flex-wrap gap-3 text-yellow-500 pt-3 border-t border-yellow-600/20">
                  {project.tech.map((icon, i) => (
                    <span key={i} className="text-xl hover:scale-110 transition-transform">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedProjects.length > INITIAL_COUNT && (
          <button
            aria-expanded={showAll}
            aria-controls="project-grid"
            onClick={() => setShowAll((v) => !v)}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-yellow-600/40 text-yellow-500 font-semibold text-sm hover:border-yellow-500 hover:bg-yellow-500/10 transition-all"
          >
            {showAll
              ? "Show fewer projects"
              : `Show ${sortedProjects.length - INITIAL_COUNT} more projects`}
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
