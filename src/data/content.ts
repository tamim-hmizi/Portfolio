export const EXPERIENCE = [
  {
    role: "Full Stack Engineer",
    company: "Bassetti Group, TEEXMA",
    dates: "Apr 2026 to Present",
    location: "Tunis",
    details: [
      "Develop enterprise applications for technical and scientific data management with .NET, Angular and JavaScript.",
      "Maintain Delphi modules, containerize workloads with Docker and contribute to delivery automation.",
    ],
  },
  {
    role: "Founder & Software Engineer",
    company: "Axynoxia",
    dates: "Jan 2026 to Present",
    location: "Tunis",
    details: [
      "Lead client work from requirements and architecture through full stack implementation, CI/CD, deployment and production operations.",
      "Build web platforms, a Flutter app, ticketing systems, a real estate CMS and Shopify storefronts.",
      "Develop internal ERP, ticketing, invoicing, CRM and energy management products, with hosted demos and ongoing development.",
    ],
  },
  {
    role: "Infrastructure Consultant",
    company: "RFC",
    dates: "Oct 2025 to May 2026",
    location: "Ariana",
    details: [
      "Engineer hybrid infrastructure using Azure Stack Hub and Azure, with enterprise networking on Fortinet and Cisco.",
      "Administer Commvault backups and restore validation; automate Linux and Windows Server operations.",
      "Build Python/Flask exporters and Prometheus/Grafana dashboards for infrastructure and VM monitoring.",
    ],
  },
  {
    role: "DevOps Platform Engineer",
    company: "RFC",
    dates: "Feb 2025 to Aug 2025",
    location: "Final year project",
    details: [
      "Built a DevOps as a Service platform with React, Express, FastAPI and MongoDB.",
      "Integrated LLM analysis of repositories, dependencies and runtime needs to recommend VM or Kubernetes deployment.",
      "Automated provisioning with Terraform and Ansible, application delivery with Docker and AKS, and Jenkins pipelines with quality checks and monitoring.",
    ],
  },
  {
    role: "Cloud & Full Stack Engineer Intern",
    company: "RFC",
    dates: "Jul 2024 to Aug 2024",
    location: "Internship",
    details: [
      "Developed an intern management application and deployed it on AWS EKS.",
      "Implemented CI/CD with Jenkins, Docker, Terraform and GitHub Actions, IAM controls and Prometheus/Grafana monitoring.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "ESPRIT",
    dates: "Jul 2023 to Aug 2023",
    location: "Internship",
    details: [
      "Built a course discovery platform using Python scraping of official education websites, structured metadata, search and recommendations.",
    ],
  },
  {
    role: "Network Engineer Intern, C-NOC",
    company: "Tunisie Telecom",
    dates: "Aug 2021 to Sep 2021",
    location: "Internship",
    details: [
      "Monitored enterprise connectivity in the B2B Network Operations Center and assisted with routing and service availability incidents.",
    ],
  },
];

type Area = "All work" | "Software" | "Cloud & DevOps" | "Applied AI";
type Project = {
  title: string;
  kind: string;
  area: Area;
  description: string;
  stack: string;
  links?: { label: string; url: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "QuickOps: DevOps as a Service",
    kind: "RFC final year project",
    area: "Applied AI",
    description:
      "Built an LLM assisted platform that analyzes repository structure, dependencies and runtime needs to recommend VM or Kubernetes deployment. Connected the recommendations to automated provisioning and delivery workflows.",
    stack:
      "React · FastAPI · Express · MongoDB · Terraform · Ansible · Jenkins · AKS",
    links: [
      {
        label: "Read AI service code",
        url: "https://github.com/tamim-hmizi/QuickOps-AI",
      },
      {
        label: "Read infrastructure code",
        url: "https://github.com/tamim-hmizi/QuickOps-IAC",
      },
    ],
  },
  {
    title: "B'moovd Ticketing",
    kind: "Client project",
    area: "Software",
    description:
      "Next.js 14 App Router, strict TypeScript, tRPC and MongoDB/Prisma; Stripe, Mollie and PayPal checkout, signed JWT QR tickets, camera check-in, emailed ticket PDFs and VAT invoices; NextAuth roles and JWT sessions.",
    stack: "Next.js · tRPC · TypeScript · MongoDB · Prisma",
    links: [{ label: "Visit ticket shop", url: "https://bmoovd-shop.com/" }],
  },
  {
    title: "Azure Stack Hub Monitoring",
    kind: "RFC infrastructure project",
    area: "Cloud & DevOps",
    description:
      "Dockerized Python/Flask exporters query Admin APIs through service principal OAuth2; Prometheus and Grafana expose region health, storage fabric, tenant VM compute and disk IOPS, with dashboards and alerts.",
    stack: "Azure Stack Hub · Python · Flask · Docker · Prometheus · Grafana",
  },
  {
    title: "B'moovd Mobile App",
    kind: "Client project",
    area: "Software",
    description:
      "Flutter/Dart application for iOS, Android and web, published on the App Store and Google Play; Firebase Auth, Firestore rules/indexes, Cloud Functions, Storage, Stripe integration and store release pipelines.",
    stack: "Flutter · Firebase Auth · Firestore · Cloud Functions",
    links: [
      {
        label: "View on App Store",
        url: "https://apps.apple.com/de/app/bmoovd/id6736364332",
      },
      {
        label: "View on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.bmoovd.app",
      },
    ],
  },
  {
    title: "Axynoxia ERP",
    kind: "Project",
    area: "Software",
    description:
      "NestJS, Prisma, PostgreSQL and Redis pnpm monorepo with single tenant deployments, module auto-discovery, access requests, MFA, RBAC, first-login rotation and Argon2 hashing; Docker Compose, Traefik and object storage.",
    stack: "NestJS · Prisma · PostgreSQL · Redis · Docker Compose",
    links: [
      { label: "Explore ERP demo", url: "https://erp.products.axynoxia.com/" },
    ],
  },
  {
    title: "Axynoxia Energie",
    kind: "Project",
    area: "Software",
    description:
      "TypeScript services for domain model, API, control, HMI and simulation, modeled on ADAM plant design: 5.5 MWp PV, 2.2 MW/1.5 MWh BESS, two 8.25 MVA turbines and 20/11 kV interconnection. Telemetry, alarms and supervisory control behind a TLS proxy; excludes safety instrumentation.",
    stack: "TypeScript · React · Energy modeling · Docker",
    links: [
      {
        label: "Explore energy demo",
        url: "https://energie.products.axynoxia.com/",
      },
    ],
  },
  {
    title: "Roehrdanz Immobilien",
    kind: "Client project",
    area: "Software",
    description:
      "React 19, Express 5 and MongoDB CMS for listings and enquiries; employee sessions, bcrypt and RBAC, asynchronous Base64 images, dynamic SEO content, Vite and Tailwind property galleries.",
    stack: "React · Express · MongoDB · TypeScript",
    links: [
      { label: "View real estate site", url: "https://rimmobilien-test.de/" },
    ],
  },
  {
    title: "Confortex",
    kind: "Client project",
    area: "Software",
    description:
      "Custom bedding storefront with product collections, SEO blog, newsletter integration, delivery promotions and contact information for three showrooms.",
    stack: "Shopify · Storefront development · E-commerce",
    links: [{ label: "Visit Confortex", url: "https://confortex.shop/" }],
  },
];

export const CATEGORIES = [
  {
    title: "Software development",
    skills:
      "TypeScript, JavaScript, Python, C#, Java, PHP, Bash, SQL, C++ and Assembly. React, Next.js, Angular, Flutter, .NET, Node.js, NestJS, Express, FastAPI, Django, Flask, Spring Boot, Symfony, Vue.js/Vuex, Tailwind CSS, Chakra UI and shadcn/ui.",
  },
  {
    title: "Cloud engineering",
    skills:
      "Azure, Azure Stack Hub, AWS, EKS, AKS, GCP, DigitalOcean and OpenStack. Hybrid infrastructure, virtual networking, IAM, Terraform and Ansible.",
  },
  {
    title: "DevOps & delivery",
    skills:
      "Docker, Docker Compose, Kubernetes, Helm, Jenkins, GitHub Actions, GitLab CI, CI/CD, SonarQube, Trivy, Nexus, Traefik and Portainer.",
  },
  {
    title: "Applied AI & automation",
    skills:
      "LLM integration, repository analysis, deployment recommendations, Python automation, web scraping, Temporal, LangGraph and workflow integration. Demonstrated in my RFC final year platform.",
  },
  {
    title: "Data & integrations",
    skills:
      "PostgreSQL, MongoDB, MySQL, Redis, Prisma, Mongoose, Sequelize, BullMQ, Firebase, MinIO, REST APIs, WebSockets, Shopify, payment integrations and transactional email.",
  },
  {
    title: "Operations & reliability",
    skills:
      "Linux (Ubuntu, CentOS), Windows Server, Active Directory, Microsoft 365, WSL, Prometheus, Grafana, ELK, CloudWatch, Commvault backups, restore validation, Fortinet, IAM, MFA, OAuth2, role based access control and encryption.",
  },
];
