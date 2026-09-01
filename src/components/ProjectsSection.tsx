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
}

const INITIAL_COUNT = 6;

const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const projects: Project[] = [
    // — Live projects first —
    {
      title: "B-moovd Ticketing",
      description: "Production ticketing platform for B'moovd Sportsbar Wolfsburg, selling FIFA World Cup 2026 public-viewing tickets. Next.js 14 + tRPC, three payment providers (Stripe, Mollie, PayPal), signed-JWT QR tickets with camera check-in, and emailed PDF tickets and VAT invoices.",
      tech: [<SiNextdotjs title="Next.js 14" />, <SiTypescript title="tRPC / TypeScript" />, <SiMongodb title="MongoDB + Prisma" />, <SiStripe title="Stripe / Mollie / PayPal" />],
      url: "https://bmoovd-shop.com",
      domain: "bmoovd-shop.com",
    },
    {
      title: "B-moovd",
      description: "Bar reservation and discovery app, live on the App Store and Google Play. Built with Flutter across iOS, Android and web, on Firebase (Auth, Firestore, Cloud Functions, Storage) with Stripe payments.",
      tech: [<SiFlutter title="Flutter" />, <SiFirebase title="Firebase" />, <SiStripe title="Stripe" />, <FaMobileAlt title="iOS + Android" />],
      ios: "https://apps.apple.com/de/app/bmoovd/id6736364332",
      android: "https://play.google.com/store/apps/details?id=com.bmoovd.app",
    },
    {
      title: "Roehrdanz Immobilien",
      description: "Real estate CMS with a custom MERN-based management system, asynchronous Base64 image processing, SEO-optimized content, and RBAC admin panel.",
      tech: [<SiMongodb title="MongoDB" />, <FaNodeJs title="Node.js" />, <FaReact title="React" />, <SiTypescript title="TypeScript" />],
      url: "https://rimmobilien-test.de/",
      domain: "rimmobilien-test.de",
    },
    {
      title: "Confortex",
      description: "Full Shopify e-commerce store for a premium Tunisian bedding brand with multi-collection catalog, SEO blog, free delivery promotions, and multi-showroom contact system.",
      tech: [<SiShopify title="Shopify" />, <FaShoppingCart title="E-commerce" />],
      url: "https://confortex.shop",
      domain: "confortex.shop",
    },
    {
      title: "Vie Sublime",
      description: "Premium Shopify storefront for a luxury Tunisian furniture brand — multi-collection catalog, custom luxury theme, SEO content blog, and multi-showroom management.",
      tech: [<SiShopify title="Shopify" />, <FaShoppingCart title="Luxury Retail" />],
      url: "https://viesublime.tn",
      domain: "viesublime.tn",
    },
    {
      title: "OMHY Entertainment",
      description: "Premium digital media hub for high-fidelity video streaming using GSAP animations, Jenkins Zero-Downtime deployments, and hybrid MongoDB/MySQL database architecture.",
      tech: [<FaReact title="React" />, <SiChakraui title="Chakra UI" />, <SiGreensock title="GSAP" />, <SiJenkins title="Jenkins" />, <SiMongodb title="MongoDB" />],
      url: "https://omhyfamily.com",
      domain: "omhyfamily.com",
    },
    {
      title: "Habiter Mieux",
      description: "French solar-panel lead-generation landing page for client Habiter Mieux — conversion-focused funnel with quote-request forms feeding directly into the sales pipeline.",
      tech: [<FaReact title="React" />, <FaSolarPanel title="Solar / Energy" />],
      url: "https://habitermieux-renov.com",
      domain: "habitermieux-renov.com",
    },
    {
      title: "NexGen Studios",
      description: "Marketing website for German client NexGen Studios — Next.js App Router, Dockerized with Nginx for production deployment.",
      tech: [<SiNextdotjs title="Next.js" />, <FaDocker title="Docker" />],
    },
    // — Other projects —
    {
      title: "Axynoxia Energie",
      description: "Energy Management and SCADA/HMI system for a hybrid PV + battery plant, modelled on the real ADAM Photovoltaic Project (5.5 MWp PV, 2.2 MW / 1.5 MWh BESS, 2 × 8.25 MVA gas turbines). Live telemetry, alarms and supervisory control dashboards.",
      tech: [<FaSolarPanel title="PV + BESS / SCADA" />, <FaReact title="React" />, <SiTypescript title="TypeScript monorepo" />],
      url: "https://energie.products.axynoxia.com",
      domain: "energie.products.axynoxia.com",
    },
    {
      title: "ProInvoice",
      description: "SaaS invoicing platform for the Tunisian market: React 19 SPA on an Express/TypeScript API, with 2FA, PDF and Excel export, emailed invoices, and a Swagger-documented API.",
      tech: [<FaFileInvoiceDollar title="Invoicing" />, <FaReact title="React 19" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />],
      url: "https://invoice.products.axynoxia.com",
      domain: "invoice.products.axynoxia.com",
    },
    {
      title: "Axynoxia LeadGen",
      description: "Privacy-first B2B prospecting engine: waterfall enrichment where every email is provider-confirmed or verified before it is stored, full per-field provenance, outcome-based credit billing, and GDPR primitives built into the schema.",
      tech: [<FaRobot title="AI Automation" />, <SiLangchain title="LangGraph" />, <SiTemporal title="Temporal" />, <SiNextdotjs title="Next.js" />],
      url: "https://leadgen.products.axynoxia.com",
      domain: "leadgen.products.axynoxia.com",
    },
    {
      title: "Axynoxia CRM & Leasing",
      description: "CRM and lease-management platform for the Tunisian leasing market — BCT-compliant with an IFRS 16 financial engine, 10-role RBAC, Arabic RTL support, and background job processing on a MERN stack.",
      tech: [<FaHandshake title="CRM" />, <SiMongodb title="MongoDB" />, <FaReact title="React" />, <FaNodeJs title="Node.js" />],
      url: "https://crm-leasing.products.axynoxia.com",
      domain: "crm-leasing.products.axynoxia.com",
    },
    {
      title: "Enterprise Monitoring Platform",
      description: "Real-time monitoring of Azure Stack Hub infrastructure health, storage fabric, and tenant VM performance (IOPS/Compute) using custom Python/Flask exporters, Prometheus, and Grafana.",
      tech: [<SiPrometheus title="Prometheus" />, <SiGrafana title="Grafana" />, <FaPython title="Python" />, <FaDocker title="Docker" />],
    },
    {
      title: "Axynoxia ERP",
      description: "ERP platform where business modules (CRM, inventory, accounting) plug into the core cleanly. Each client gets a dedicated single-tenant deployment with its own database and containers. MFA, role-based admin, module enable/disable and access requests.",
      tech: [<SiNestjs title="NestJS" />, <SiPrisma title="Prisma" />, <SiPostgresql title="PostgreSQL" />, <SiRedis title="Redis" />, <SiTraefikproxy title="Traefik" />],
      url: "https://erp.products.axynoxia.com",
      domain: "erp.products.axynoxia.com",
    },
    {
      title: "Tickety",
      description: "Event ticketing platform built as a TypeScript pnpm monorepo — Vite/React web app and a TypeScript API covering the full order lifecycle, including pending-order expiry and refund concurrency handling, with end-to-end smoke tests.",
      tech: [<FaReact title="React + Vite" />, <SiTypescript title="TypeScript" />, <SiExpress title="Express-style API" />, <SiMongodb title="MongoDB" />],
      url: "https://tickets.products.axynoxia.com",
      domain: "tickets.products.axynoxia.com",
    },
    {
      title: "MERN E-commerce",
      description: "Full-stack industrial e-commerce with Redux state management, JWT/Argon2 security, real-time order tracking, and cloud asset management via Multer.",
      tech: [<SiMongodb title="MongoDB" />, <SiExpress title="Express" />, <FaReact title="React" />, <FaNodeJs title="Node.js" />, <SiRedux title="Redux" />],
    },
    {
      title: "New Journey",
      description: "Global consulting ecosystem built with Symfony 7 and PHP 8.2, featuring Doctrine ORM, UX Turbo/Stimulus SPA-like experience, and multi-user RBAC authentication.",
      tech: [<SiSymfony title="Symfony" />, <SiPhp title="PHP" />, <FaServer title="Turbo/Stimulus" />],
    },
    {
      title: "Jektis Travel",
      description: "Global e-tourism platform for flight and hotel bookings with automated real-time price scraping, Stripe payment integration, and PHPMailer booking notifications.",
      tech: [<SiPhp title="PHP" />, <SiStripe title="Stripe" />, <FaDatabase title="MySQL" />],
    },
    {
      title: "DevOps CI/CD Hub",
      description: "Full-scale CI/CD platform integrating automated testing, security scanning (SonarQube + Trivy), artifact management (Nexus), and Angular/Spring Boot microservices deployment.",
      tech: [<SiJenkins title="Jenkins" />, <SiSonarqubeserver title="SonarQube" />, <FaServer title="Nexus" />],
    },
    {
      title: "OpenStack Private Cloud Lab",
      description: "Orchestrated virtual networks, compute, and storage on a multi-node OpenStack cloud with VPN-over-physical networking, automated scaling, and high-availability routing.",
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
          Products and platforms I designed, built and put into production —
          full-stack engineering, cloud architecture and automation. Client work
          is delivered through{" "}
          <span className="text-yellow-500 font-semibold">Axynoxia</span>.
        </p>
        <p className="text-sm text-gray-500 italic max-w-2xl mx-auto mb-8 md:mb-12 text-center">
          Every project below — Axynoxia products, Axynoxia client engagements, and independent work — was designed and built solely by me, end to end.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 border-2 p-6 rounded-xl shadow-lg transition-all text-left flex flex-col justify-between ${
                project.url || project.ios || project.android
                  ? "border-green-500/40 hover:border-green-400"
                  : "border-yellow-600/30 hover:border-yellow-500"
              }`}
              whileHover={{ y: -5 }}
            >
              <div>
                {/* Header row: title + LIVE badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-yellow-500 leading-snug">{project.title}</h3>
                  {(project.url || project.ios || project.android) && (
                    <span className="flex items-center gap-1 bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                {/* Live domain button */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-xs font-semibold hover:bg-green-500/20 hover:border-green-400 transition-all w-fit"
                  >
                    <FaExternalLinkAlt size={10} />
                    {project.domain}
                  </a>
                )}

                {/* App store buttons */}
                {(project.ios || project.android) && (
                  <div className="flex flex-wrap gap-2">
                    {project.ios && (
                      <a
                        href={project.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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
