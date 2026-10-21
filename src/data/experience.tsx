import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { FaAws, FaReact, FaNodeJs, FaDocker, FaPython, FaGitAlt, FaMicrosoft } from "react-icons/fa";
import {
  SiMongodb,
  SiJenkins,
  SiTerraform,
  SiKubernetes,
  SiFastapi,
  SiAnsible,
  SiFortinet,
  SiAngular,
  SiDotnet,
  SiNestjs,
  SiPostgresql,
} from "react-icons/si";
import { MdSupportAgent, MdBackup } from "react-icons/md";
import { VscAzure } from "react-icons/vsc";
import type { Tech } from "./projects";
import Hl from "../components/Highlight";

export interface Experience {
  title: string;
  /** Dates first, then place details, joined with " | ". */
  period: string;
  details?: string[];
  summary?: ReactNode;
  tagline?: string;
  bullets: ReactNode[];
  tech: Tech[];
  /** `dark` puts light logos on a dark tile instead of white. */
  logo: { file: string; alt: string; dark?: boolean };
  /** Employer site, linked from the card. */
  href?: string;
  current?: boolean;
  email?: string;
  cta?: { label: string; url: string };
}

const t = (icon: IconType, label: string): Tech => ({ icon, label });

export const experiences: Experience[] = [
  {
    title: "Full Stack Engineer | Bassetti Group (TEEXMA)",
    period: "Apr 2026 to Present",
    details: ["Tunis, Tunisia"],
    href: "https://www.bassetti-group.com/",
    current: true,
    logo: { file: "BASSETTI-GROUP.webp", alt: "Bassetti Group" },
    summary: (
      <>
        Full stack development on <Hl>TEEXMA</Hl>, an enterprise no-code collaborative platform for technical and scientific data management used across aerospace, energy, automotive, chemical and pharmaceutical industries.
      </>
    ),
    bullets: [
      <>Full stack development on enterprise applications using <Hl>.NET, Angular, JavaScript, HTML and CSS</Hl> on the TEEXMA platform.</>,
      <>Maintenance and extension of <Hl>legacy Delphi modules</Hl> that make up the central processing engine of TEEXMA.</>,
      <>Containerizing workloads with <Hl>Docker</Hl> and contributing to delivery automation, including <Hl>Jenkins and Terraform CI</Hl> across the platform&apos;s services.</>,
    ],
    tech: [t(SiDotnet, ".NET"), t(SiAngular, "Angular"), t(FaDocker, "Docker"), t(FaGitAlt, "Git")],
  },
  {
    title: "Founder & Software Engineer | Axynoxia",
    period: "Jan 2026 to Present",
    details: ["Tunis, Tunisia"],
    email: "tamim.hmizi@axynoxia.com",
    tagline: "Elevating Enterprise Standards.",
    current: true,
    logo: { file: "axynoxia-logo.png", alt: "Axynoxia", dark: true },
    cta: { label: "Book a discovery call", url: "https://calendly.com/axynoxia/axynoxia-discovery-call" },
    bullets: [
      <>Lead a software engineering team delivering fixed-scope client projects: custom software, cloud &amp; DevOps, AI and intelligent automation, integrations and e-commerce.</>,
      <>Own the full delivery lifecycle on every engagement: scoping, architecture, full-stack build, cloud provisioning, CI/CD, observability and production operations.</>,
      <>Deliver client work such as a <Hl>Flutter app on the App Store and Google Play</Hl>, an event ticketing platform, Shopify storefronts, a lead generation site, an agency website and a real estate platform.</>,
      <>Build and run Axynoxia products (ERP, Energie, GymOS, Tickets, CRM Leasing and Invoice) on <Hl>NestJS, Next.js, PostgreSQL and Redis</Hl> on one VPS, with a shared <Hl>Caddy</Hl> edge proxy in front.</>,
    ],
    tech: [t(FaReact, "React"), t(SiNestjs, "NestJS"), t(FaNodeJs, "Node.js"), t(FaDocker, "Docker Compose"), t(SiPostgresql, "PostgreSQL")],
  },
  {
    title: "Infrastructure Consultant",
    period: "Oct 2025 to Apr 2026",
    details: ["RFC (Microsoft Gold CSP Partner)", "Ariana, Tunisia"],
    href: "https://rfc.com.tn",
    logo: { file: "rfclogo.png", alt: "RFC" },
    summary: "Consulting and engineering for large-scale hybrid cloud infrastructure, sovereign cloud environments and enterprise security.",
    bullets: [
      <>Designed and optimized hybrid cloud infrastructures integrating <Hl>Azure Stack Hub</Hl> with public Azure services.</>,
      <>Supported sovereign cloud and data residency architectures.</>,
      <>Enterprise security and networking with <Hl>Fortinet SD-WAN</Hl> and <Hl>Cisco</Hl> for multi-tenant infrastructure.</>,
      <>Built <Hl>Prometheus and Grafana</Hl> monitoring for 2 Azure Stack Hub datacenters at 15-second resolution.</>,
      <>Managed critical backup operations with <Hl>Commvault</Hl>, including restore validation.</>,
      <>Automated recurring tasks across Linux and Windows Server fleets; delivered workshops as Infrastructure <Hl>SME</Hl> on cloud security and Microsoft 365 governance.</>,
    ],
    tech: [t(VscAzure, "Azure Stack Hub"), t(SiFortinet, "Fortinet"), t(MdBackup, "Commvault"), t(FaMicrosoft, "Microsoft 365")],
  },
  {
    title: "DevOps Platform Engineer (Final Year Project)",
    period: "Feb 2025 to Aug 2025",
    details: ["RFC", "Ariana, Tunisia"],
    href: "https://rfc.com.tn",
    logo: { file: "rfclogo.png", alt: "RFC" },
    summary: (
      <>
        Designed and implemented a <Hl>DevOps-as-a-Service platform</Hl> to automate application analysis, deployment and monitoring.
      </>
    ),
    bullets: [
      <>Developed the platform core with <Hl>React, Express.js and FastAPI</Hl> and an AI-driven (LLM) repository analysis engine.</>,
      <>Automated provisioning for VM-based apps using <Hl>Terraform and Ansible</Hl>.</>,
      <>Implemented microservices orchestration on <Hl>Azure Kubernetes Service (AKS)</Hl>.</>,
      <>Built CI/CD pipelines with <Hl>Jenkins, SonarQube and Nexus</Hl>.</>,
      <>Integrated observability with <Hl>Prometheus and Grafana</Hl>; validated both VM and Kubernetes paths on 2 MERN applications.</>,
    ],
    tech: [t(SiKubernetes, "Kubernetes"), t(SiTerraform, "Terraform"), t(SiJenkins, "Jenkins"), t(SiAnsible, "Ansible"), t(SiFastapi, "FastAPI")],
  },
  {
    title: "Cloud & Full Stack Engineer",
    period: "Jul 2024 to Aug 2024",
    details: ["RFC", "Internship"],
    href: "https://rfc.com.tn",
    logo: { file: "rfclogo.png", alt: "RFC" },
    summary: "Developed a cloud-native web application for intern management (onboarding, tracking and admin workflows).",
    bullets: [
      <>Deployed on <Hl>AWS EKS (Kubernetes)</Hl> using a fully containerized architecture.</>,
      <>Designed CI/CD pipelines using <Hl>Jenkins</Hl>, <Hl>Docker</Hl>, <Hl>Terraform</Hl> and <Hl>GitHub Actions</Hl>.</>,
      <>Implemented <Hl>IAM</Hl> security controls and monitoring with <Hl>Prometheus</Hl> and <Hl>Grafana</Hl>.</>,
    ],
    tech: [t(FaAws, "AWS"), t(FaDocker, "Docker"), t(SiJenkins, "Jenkins"), t(SiTerraform, "Terraform"), t(FaGitAlt, "Git")],
  },
  {
    title: "Web Developer",
    period: "Jul 2023 to Aug 2023",
    details: ["ESPRIT", "Internship"],
    href: "https://esprit.tn",
    logo: { file: "espritlogo.jpg", alt: "ESPRIT" },
    summary: "Developed a web platform that scrapes official educational websites to aggregate online courses.",
    bullets: [
      <>Implemented Python-based scraping to extract course metadata (title, provider, duration, difficulty).</>,
      <>Normalized and stored data in a structured database for efficient search and filtering.</>,
      <>Developed backend services to rank and recommend courses based on user criteria.</>,
      <>Built a responsive interface to search, compare and discover relevant courses.</>,
    ],
    tech: [t(FaGitAlt, "Git"), t(SiMongodb, "MongoDB"), t(FaNodeJs, "Node.js"), t(FaPython, "Python"), t(FaReact, "React")],
  },
  {
    title: "Network Engineer Intern (C-NOC) | Tunisie Telecom",
    period: "Aug 2021 to Sep 2021",
    href: "https://www.tunisietelecom.tn/particulier/",
    logo: { file: "tunisie-telecom-logo.png", alt: "Tunisie Telecom" },
    summary: "Worked in the national B2B Network Operations Center.",
    bullets: [
      <>Monitored enterprise network links and handled connectivity incidents.</>,
      <>Assisted in troubleshooting routing and service availability issues.</>,
    ],
    tech: [t(MdSupportAgent, "Network Engineering")],
  },
];
