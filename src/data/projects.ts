import type { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaMobileAlt,
  FaShoppingCart,
  FaDocker,
  FaPython,
  FaSolarPanel,
  FaFileInvoiceDollar,
  FaHandshake,
  FaDumbbell,
  FaAngular,
  FaJava,
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
  SiFirebase,
  SiAstro,
  SiThreedotjs,
  SiCloudflare,
  SiCaddy,
  SiTailwindcss,
  SiSpringboot,
} from "react-icons/si";

export interface Tech {
  icon: IconType;
  label: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectCategory = "client" | "product" | "cloud" | "other";

export const categories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "client", label: "Client work" },
  { id: "product", label: "Axynoxia products" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "other", label: "Other" },
];

export interface CaseStudy {
  problem: string;
  role: string;
  approach: string[];
  result: string;
}

export interface Project {
  title: string;
  category: ProjectCategory;
  /** Shown first, with a gold border. */
  featured?: boolean;
  /** Screenshot in public/, e.g. "projects/confortex.webp". */
  image?: string;
  /** Short case study shown on featured cards. */
  caseStudy?: CaseStudy;
  description: string;
  tech: Tech[];
  /** Main live link, shown with its domain. */
  url?: string;
  domain?: string;
  ios?: string;
  android?: string;
  /** Badge text; live projects without one show "Website / app". */
  status?: string;
  sources?: ProjectLink[];
}

const t = (icon: IconType, label: string): Tech => ({ icon, label });

export const projects: Project[] = [
  {
    title: "QuickOps",
    image: "projects/quickops.svg",
    caseStudy: {
      problem:
        "Teams without DevOps specialists struggle to choose where an application should run and to set up the pipelines, infrastructure and monitoring around it.",
      role: "Sole engineer on my RFC final year project: architecture, all five repositories and the demo environments.",
      approach: [
        "An LLM service reads a repository's structure, dependencies and runtime needs and recommends VM or Kubernetes.",
        "Terraform and Ansible provision VMs; Kubernetes manifests deploy microservices to AKS.",
        "Jenkins pipelines build, test, scan with SonarQube and publish to Nexus; Prometheus and Grafana watch the result.",
      ],
      result:
        "A single platform that takes a Git repository to a running, monitored deployment, validated on a monolithic and a microservice MERN application.",
    },
    category: "cloud",
    featured: true,
    status: "RFC final year project",
    description:
      "DevOps as a Service platform combining React, Express, FastAPI and MongoDB. LLM repository analysis recommends VM or Kubernetes deployment, connected to Terraform, Ansible, Jenkins, AKS and monitoring.",
    tech: [t(FaReact, "React"), t(FaPython, "FastAPI / LLM integration"), t(SiTerraform, "Terraform"), t(SiJenkins, "Jenkins")],
    url: "https://github.com/tamim-hmizi/QuickOps-Frontend",
    domain: "Public platform source",
    sources: [
      { label: "AI service", url: "https://github.com/tamim-hmizi/QuickOps-AI" },
      { label: "Platform API", url: "https://github.com/tamim-hmizi/QuickOps-Backend" },
      { label: "Infrastructure", url: "https://github.com/tamim-hmizi/QuickOps-IAC" },
      { label: "Configuration", url: "https://github.com/tamim-hmizi/QuickOps-CAC" },
    ],
  },

  // Client work delivered through Axynoxia
  {
    title: "bmoovd Ticketing",
    caseStudy: {
      problem:
        "A sports bar in Wolfsburg needed to sell premium seats for FIFA World Cup 2026 public viewings, with high traffic at release time and fast entry on match day.",
      role: "Lead engineer through Axynoxia: architecture, full stack build, payments and deployment.",
      approach: [
        "Next.js 14 App Router with tRPC and strict TypeScript, MongoDB through Prisma.",
        "Stripe, Mollie and PayPal checkout, with VAT invoices and PDF tickets sent by email.",
        "Signed JWT QR codes checked by a camera scanner at the door, and role-based staff access.",
      ],
      result: "Fans buy seats online and staff check tickets in seconds at the entrance; the shop is live at bmoovd-shop.com.",
    },
    image: "projects/bmoovd-ticketing.webp",
    category: "client",
    featured: true,
    description:
      "Ticket shop for FIFA World Cup 2026 public viewing events in Wolfsburg. Next.js and tRPC with MongoDB/Prisma, Stripe, Mollie and PayPal checkout, signed QR tickets, camera check-in and emailed PDFs.",
    tech: [t(SiNextdotjs, "Next.js 14"), t(SiTypescript, "tRPC / TypeScript"), t(SiMongodb, "MongoDB + Prisma"), t(SiStripe, "Stripe / Mollie / PayPal")],
    url: "https://bmoovd-shop.com",
    domain: "bmoovd-shop.com",
  },
  {
    title: "bmoovd",
    image: "projects/bmoovd.webp",
    category: "client",
    description:
      "Sports bar app on iOS and Android: programme, table reservations and live scores. Flutter with Firebase Auth, Firestore, Cloud Functions, Storage, Stripe and store release pipelines.",
    tech: [t(SiFlutter, "Flutter"), t(SiFirebase, "Firebase"), t(SiStripe, "Stripe"), t(FaMobileAlt, "iOS + Android")],
    ios: "https://apps.apple.com/de/app/bmoovd/id6736364332",
    android: "https://play.google.com/store/apps/details?id=com.bmoovd.app",
  },
  {
    title: "Roehrdanz Immobilien",
    image: "projects/roehrdanz.webp",
    category: "client",
    status: "Preview",
    description:
      "Bilingual real estate platform with React, Express and MongoDB: listings, search filters, enquiries sent to the agent, employee portal, RBAC and dynamic SEO.",
    tech: [t(SiMongodb, "MongoDB"), t(FaNodeJs, "Node.js"), t(FaReact, "React"), t(SiTypescript, "TypeScript")],
    url: "https://rimmobilien-test.de/",
    domain: "rimmobilien-test.de",
  },
  {
    title: "Confortex",
    image: "projects/confortex.webp",
    category: "client",
    description:
      "Custom Shopify theme for a bedding brand: product collections, cart and payments, SEO editorial content, newsletter, delivery promotions and showroom information.",
    tech: [t(SiShopify, "Shopify"), t(FaShoppingCart, "E-commerce")],
    url: "https://confortex.shop",
    domain: "confortex.shop",
  },
  {
    title: "Vie Sublime",
    image: "projects/vie-sublime.webp",
    category: "client",
    description:
      "Custom Shopify theme for a furniture and home decor brand, built for a large catalog with collections for home, office, school and garden.",
    tech: [t(SiShopify, "Shopify"), t(FaShoppingCart, "E-commerce")],
    url: "https://viesublime.tn",
    domain: "viesublime.tn",
  },
  {
    title: "Digiqora Media",
    image: "projects/digiqora.webp",
    category: "client",
    description:
      "Static Astro site for a content agency producing reels, brand video and photography. Fast on mobile, with click-to-load video, GSAP motion and Cloudflare Pages hosting.",
    tech: [t(SiAstro, "Astro"), t(SiTailwindcss, "Tailwind CSS"), t(SiGreensock, "GSAP"), t(SiCloudflare, "Cloudflare Pages")],
    url: "https://digiqora-media.pages.dev",
    domain: "digiqora-media.pages.dev",
  },
  {
    title: "Habiter Mieux",
    category: "client",
    description:
      "Solar lead generation site for the French market: trust-focused landing page, qualification funnel and automated confirmation emails, from visit to qualified lead in under a minute.",
    tech: [t(FaReact, "React"), t(FaSolarPanel, "Solar / Energy")],
    url: "https://habiter-mieux.info/",
    domain: "habiter-mieux.info",
  },
  {
    title: "OMHY Entertainment",
    category: "client",
    description:
      "Media and administration platform for artists, groups, albums, songs, casting submissions, news and newsletters. React front end, Express/MongoDB API and Jenkins delivery.",
    tech: [t(FaReact, "React"), t(SiChakraui, "Chakra UI"), t(SiGreensock, "GSAP"), t(SiJenkins, "Jenkins"), t(SiMongodb, "MongoDB")],
    status: "Client project",
  },

  // Axynoxia products, as listed on axynoxia.com
  {
    title: "Axynoxia ERP",
    caseStudy: {
      problem:
        "Small and mid-sized companies juggle separate tools for operations, finance and inventory, with no single view of the business.",
      role: "Founder and lead engineer: product design, architecture, backend, deployment and operations.",
      approach: [
        "NestJS, Prisma and PostgreSQL in a pnpm monorepo, with modules discovered and enabled per client.",
        "Dedicated deployments per client, Redis for jobs and caching, Docker Compose behind Traefik.",
        "MFA, role-based access, access requests, forced first-login password rotation and Argon2 hashing.",
      ],
      result: "One ERP that each client gets in its own isolated deployment, with a public demo at erp.products.axynoxia.com.",
    },
    image: "projects/axynoxia-erp.webp",
    category: "product",
    featured: true,
    status: "Axynoxia product",
    description:
      "Modular ERP for operations, finance, inventory and reporting. NestJS, Prisma, PostgreSQL and Redis with dedicated client deployments, module discovery, MFA and RBAC. Each deployment runs on Docker Compose with Traefik, behind the shared Caddy edge.",
    tech: [t(SiNestjs, "NestJS"), t(SiPrisma, "Prisma"), t(SiPostgresql, "PostgreSQL"), t(SiRedis, "Redis"), t(SiTraefikproxy, "Traefik")],
    url: "https://erp.products.axynoxia.com",
    domain: "erp.products.axynoxia.com",
  },
  {
    title: "Axynoxia Energie",
    image: "projects/axynoxia-energie.webp",
    category: "product",
    status: "Axynoxia product",
    description:
      "EMS and SCADA/HMI for hybrid solar and battery plants, modeled on the ADAM PV project: real-time supervision, control and reporting across TypeScript domain, API, control and simulation services.",
    tech: [t(FaSolarPanel, "PV + BESS / SCADA"), t(FaReact, "React"), t(SiTypescript, "TypeScript monorepo")],
    url: "https://energie.products.axynoxia.com",
    domain: "energie.products.axynoxia.com",
  },
  {
    title: "Axynoxia GymOS",
    image: "projects/axynoxia-gymos.webp",
    category: "product",
    status: "Axynoxia product",
    description:
      "Multi-tenant gym management SaaS: memberships and billing, class scheduling and bookings, member portal, front-desk kiosk and a public site per club, all from one Next.js app.",
    tech: [t(SiNextdotjs, "Next.js"), t(SiTypescript, "TypeScript"), t(FaDumbbell, "Gym management")],
    url: "https://gymos.products.axynoxia.com",
    domain: "gymos.products.axynoxia.com",
  },
  {
    title: "Axynoxia Tickets",
    image: "projects/axynoxia-tickets.webp",
    category: "product",
    status: "Axynoxia product",
    description:
      "Event ticketing with QR entry control, ticket management and hosted Konnect payment. TypeScript pnpm monorepo with order expiry, concurrent refund handling and end to end tests.",
    tech: [t(FaReact, "React + Vite"), t(SiTypescript, "TypeScript"), t(SiExpress, "API"), t(FaDocker, "Docker")],
    url: "https://tickets.products.axynoxia.com",
    domain: "tickets.products.axynoxia.com",
  },
  {
    title: "Axynoxia CRM Leasing",
    image: "projects/axynoxia-crm.webp",
    category: "product",
    status: "Axynoxia product",
    description:
      "CRM and lease contract management with a multi-tenant pipeline, IFRS 16/BCT oriented calculations, 10-role RBAC, Arabic RTL and financial report exports.",
    tech: [t(FaHandshake, "CRM"), t(SiMongodb, "MongoDB"), t(FaReact, "React"), t(FaNodeJs, "Node.js")],
    url: "https://crm-leasing.products.axynoxia.com",
    domain: "crm-leasing.products.axynoxia.com",
  },
  {
    title: "Axynoxia Invoice",
    category: "product",
    status: "Axynoxia product",
    description:
      "Multi-currency invoicing with the tax mentions accountants need: two factor authentication, PDF/Excel export, transactional email and Swagger API documentation.",
    tech: [t(FaFileInvoiceDollar, "Invoicing"), t(FaReact, "React 19"), t(SiExpress, "Express"), t(SiMongodb, "MongoDB")],
    url: "https://invoice.products.axynoxia.com",
    domain: "invoice.products.axynoxia.com",
  },
  {
    title: "Axynoxia Website",
    image: "projects/axynoxia-website.webp",
    category: "product",
    description:
      "Company site built with Astro, React and Three.js, with GSAP motion and a blog, deployed to Cloudflare Workers.",
    tech: [t(SiAstro, "Astro"), t(FaReact, "React"), t(SiThreedotjs, "Three.js"), t(SiCloudflare, "Cloudflare Workers")],
    url: "https://www.axynoxia.com",
    domain: "axynoxia.com",
  },
  {
    title: "Axynoxia Edge Proxy",
    category: "cloud",
    status: "Infrastructure",
    description:
      "Shared Caddy reverse proxy for every project on the Axynoxia VPS: one TLS terminator, automatic certificates and per-site routing over an internal Docker network.",
    tech: [t(SiCaddy, "Caddy"), t(FaDocker, "Docker Compose"), t(FaServer, "VPS")],
  },

  // RFC and ESPRIT engineering
  {
    title: "Enterprise Monitoring Platform",
    category: "cloud",
    description:
      "RFC Azure Stack Hub monitoring for 2 datacenters: Dockerized Python/Flask exporters on the Admin APIs with OAuth2 service principals, Prometheus and Grafana dashboards and alerts for infrastructure and tenant VMs.",
    tech: [t(SiPrometheus, "Prometheus"), t(SiGrafana, "Grafana"), t(FaPython, "Python"), t(FaDocker, "Docker")],
  },
  {
    title: "DevOps CI/CD Hub",
    category: "cloud",
    description:
      "ESPRIT Jenkins pipelines for Angular and Spring Boot applications, integrating SonarQube quality gates, Trivy scanning and Nexus artifact versioning.",
    tech: [t(SiJenkins, "Jenkins"), t(SiSonarqubeserver, "SonarQube"), t(FaServer, "Nexus")],
  },
  {
    title: "OpenStack Private Cloud Lab",
    category: "cloud",
    description:
      "ESPRIT multi-node OpenStack lab with virtual networks, subnets, compute, storage, VPN connectivity and workload lifecycle, scaling and high availability exercises.",
    tech: [t(SiOpenstack, "OpenStack"), t(SiTerraform, "Terraform"), t(FaServer, "Infrastructure")],
  },
  {
    title: "MERN E-commerce",
    category: "other",
    description:
      "React/Redux storefront and Express/MongoDB API with authentication, cart, favorites, categories, orders, inventory administration, uploads and metrics, in monolithic and microservice variants.",
    tech: [t(SiMongodb, "MongoDB"), t(SiExpress, "Express"), t(FaReact, "React"), t(FaNodeJs, "Node.js"), t(SiRedux, "Redux")],
  },
  {
    title: "New Journey",
    category: "other",
    description:
      "Symfony/PHP immigration consulting application with consultation booking, administration, Doctrine persistence, authentication and Docker Compose configuration.",
    tech: [t(SiSymfony, "Symfony"), t(SiPhp, "PHP"), t(FaServer, "Turbo/Stimulus")],
  },
  {
    title: "Espro",
    category: "other",
    description:
      "ESPRIT teacher management system with an Angular front end and a Spring Boot back end.",
    tech: [t(FaAngular, "Angular"), t(SiSpringboot, "Spring Boot"), t(FaJava, "Java")],
  },
  {
    title: "Bon Livraison",
    category: "other",
    description: "Delivery note management application with a React/Vite front end and an Express.js API.",
    tech: [t(FaReact, "React"), t(SiExpress, "Express"), t(FaNodeJs, "Node.js")],
  },
];

export const isLive = (project: Project): boolean => Boolean(project.url || project.ios || project.android);
