import React from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaMicrosoft,
} from "react-icons/fa";
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
} from "react-icons/si";
import { MdSupportAgent, MdBackup } from "react-icons/md";
import { VscAzure } from "react-icons/vsc";
import { FaCalendarCheck } from "react-icons/fa";

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center text-center relative select-none p-6 md:p-12 py-16 md:py-24"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center">
          <span className="text-yellow-500">Professional</span> Experience
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 md:mb-12 text-center">
          Leveraging expertise in cloud computing, DevOps, and full-stack development to deliver innovative solutions.
        </p>

        {/* Experience Cards in Grid */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 md:gap-6 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Axynoxia Card — Founder */}
          <div className="relative bg-gray-800 border-2 border-yellow-400 p-5 md:p-6 rounded-xl shadow-lg shadow-yellow-500/20 flex flex-col text-left xl:col-span-12 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500 flex flex-wrap items-center gap-2">
                Founder &amp; Software Engineer — Axynoxia
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                  CURRENT
                </span>
              </h3>
              <img
                src="/Portfolio/axynoxia-logo.png"
                alt="Axynoxia"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0 ml-4"
              />
            </div>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Jan 2026 – Present</span> | Tunis, Tunisia | <a href="mailto:tamim.hmizi@axynoxia.com" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">tamim.hmizi@axynoxia.com</a>
            </p>
            <p className="text-gray-400 text-sm mb-3 italic">
              Elevating Enterprise Standards.
            </p>
            <ul className="text-gray-300 text-sm md:text-base space-y-1.5 list-disc list-inside">
              <li>
                Founded and run a software engineering company serving clients across Europe and Tunisia — custom
                software, cloud &amp; DevOps, AI and intelligent automation, integrations, and e-commerce.
              </li>
              <li>
                Own the full delivery lifecycle on every engagement: scoping, architecture, full-stack build, cloud
                provisioning, CI/CD, observability, and production operations.
              </li>
              <li>
                Shipped and operate production systems — a high-concurrency ticketing platform, a Flutter app live on
                the App Store and Google Play, a real estate CMS, and Shopify storefronts.
              </li>
              <li>
                Building multi-tenant SaaS in-house: a modular ERP and an enterprise ticketing platform on NestJS,
                Prisma, PostgreSQL, Redis and Traefik.
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 pt-3 border-t border-yellow-600/20">
              <div className="flex flex-wrap gap-3 text-yellow-500 text-xl">
                <FaReact title="React" />
                <SiNestjs title="NestJS" />
                <FaNodeJs title="Node.js" />
                <FaDocker title="Docker" />
                <SiKubernetes title="Kubernetes" />
                <SiTerraform title="Terraform" />
              </div>
              <a
                href="https://calendly.com/axynoxia/axynoxia-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-gray-900 font-bold text-sm shadow-md shadow-yellow-500/20 border-2 border-yellow-400 hover:bg-yellow-400 transition-all sm:ml-auto w-fit"
              >
                <FaCalendarCheck className="w-4 h-4" />
                <span>Book a discovery call</span>
              </a>
            </div>
          </div>

          {/* Bassetti Group Card — Current Role */}
          <a
            href="https://www.bassetti-group.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-500 p-5 md:p-6 rounded-xl shadow-lg shadow-yellow-500/10 flex flex-col text-left xl:col-span-12 cursor-pointer transition-all duration-300 hover:shadow-yellow-500/20"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500 flex flex-wrap items-center gap-2">
                Full Stack Engineer — Bassetti Group (TEEXMA)
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">CURRENT</span>
              </h3>
              <img
                src="/Portfolio/BASSETTI-GROUP.webp"
                alt="Bassetti Group"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0 ml-4"
              />
            </div>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Apr 2026 – Present</span> | Tunis, Tunisia
            </p>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">
              Full stack development on <strong className="text-yellow-400">TEEXMA</strong> — an enterprise no-code collaborative platform for technical and scientific data management, used by <strong className="text-yellow-400">1M+ users</strong> in regulated industries (Aerospace, Energy, Automotive, Chemical, Pharmaceutical) for clients including Airbus, Safran, Framatome, and Saint-Gobain.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-1.5">
              <div>- Full stack development on enterprise applications using <strong className="text-yellow-400">.NET, Angular, JavaScript, HTML, and CSS</strong> on the TEEXMA platform.</div>
              <div>- Maintenance and extension of <strong className="text-yellow-400">legacy Delphi modules</strong> constituting the central processing engine of TEEXMA.</div>
              <div>- Containerizing application workloads with <strong className="text-yellow-400">Docker</strong> and contributing to DevOps automation workflows.</div>
            </div>
            <div className="mt-3 pt-2 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title=".NET"><SiDotnet size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Angular"><SiAngular size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Docker"><FaDocker size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Git"><FaGitAlt size={16} /></span>
              </div>
            </div>
          </a>

          {/* Infrastructure Consultant Card */}
          <a
            href="https://rfc.com.tn"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block text-left xl:col-span-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                Infrastructure Consultant
              </h3>
              <img
                src="/Portfolio/rfclogo.png"
                alt="RFC"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Oct 2025 – May 2026</span> | RFC (Microsoft Gold CSP Partner) – Ariana, Tunisia
            </p>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">
              Consulting and engineering for large-scale hybrid cloud infrastructure, sovereign cloud environments, and enterprise security.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-1.5">
              <div>- Designed and optimized hybrid cloud infrastructures integrating <strong className="text-yellow-400">Azure Stack Hub</strong> with public Azure services.</div>
              <div>- Architected sovereign cloud environments ensuring data residency and Microsoft-certified compliance.</div>
              <div>- Enterprise security and networking with <strong className="text-yellow-400">Fortinet SD-WAN</strong> and <strong className="text-yellow-400">Cisco</strong> for multi-tenant infrastructure.</div>
              <div>- Managed critical backup operations with <strong className="text-yellow-400">Commvault</strong> including automated restore validation.</div>
              <div>- Automated recurring tasks across Linux and Windows Server fleets, reducing manual workload by <strong className="text-yellow-400">40%</strong>.</div>
              <div>- Delivered technical workshops as Infrastructure <strong className="text-yellow-400">SME</strong> on cloud-native security and Microsoft 365 governance.</div>
            </div>
            <div className="mt-3 pt-2 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Azure Stack Hub"><VscAzure size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Fortinet"><SiFortinet size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Commvault"><MdBackup size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="M365"><FaMicrosoft size={16} /></span>
              </div>
            </div>
          </a>

          {/* DevOps Platform Engineer Card */}
          <a
            href="https://rfc.com.tn"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block text-left xl:col-span-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                DevOps Platform Engineer (Final Year Project)
              </h3>
              <img
                src="/Portfolio/rfclogo.png"
                alt="RFC"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Feb 2025 – Aug 2025</span> | RFC – Ariana, Tunisia
            </p>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">
              Designed and implemented a <strong className="text-yellow-400">DevOps-as-a-Service platform</strong> to automate application analysis, deployment, and monitoring.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-1.5">
              <div>- Developed a platform core using <strong className="text-yellow-400">React, Express.js, and FastAPI</strong> with an AI-driven (LLM) repository analysis engine.</div>
              <div>- Automated provisioning for VM-based apps using <strong className="text-yellow-400">Terraform and Ansible</strong>.</div>
              <div>- Implemented microservices orchestration on <strong className="text-yellow-400">Azure Kubernetes Service (AKS)</strong>.</div>
              <div>- Built robust CI/CD pipelines with <strong className="text-yellow-400">Jenkins, SonarQube, and Nexus</strong>.</div>
              <div>- Integrated full-stack observability with <strong className="text-yellow-400">Prometheus and Grafana</strong>.</div>
              <div>- Reduced deployment and provisioning time by approximately <strong className="text-yellow-400">70%</strong>.</div>
            </div>
            <div className="mt-3 pt-2 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Kubernetes"><SiKubernetes size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Terraform"><SiTerraform size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Jenkins"><SiJenkins size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="Ansible"><SiAnsible size={16} /></span>
                <span className="p-1 rounded bg-gray-700 border border-yellow-600/30" title="FastAPI"><SiFastapi size={16} /></span>
              </div>
            </div>
          </a>

          {/* Cloud & Full Stack Engineer Card */}
          <a
            href="https://rfc.com.tn"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block text-left xl:col-span-4"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                Cloud & Full Stack Engineer
              </h3>
              <img
                src="/Portfolio/rfclogo.png"
                alt="RFC"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Jul 2024 – Aug 2024</span> | RFC – Internship
            </p>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">
              Developed a cloud-native web application for intern management (onboarding, tracking, and admin workflows).
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-1.5">
              <div>- Deployed on <strong className="text-yellow-400">AWS EKS (Kubernetes)</strong> using a fully containerized architecture.</div>
              <div>- Designed CI/CD pipelines using <strong className="text-yellow-400">Jenkins</strong>, <strong className="text-yellow-400">Docker</strong>, <strong className="text-yellow-400">Terraform</strong>, and <strong className="text-yellow-400">GitHub Actions</strong>.</div>
              <div>- Implemented <strong className="text-yellow-400">IAM</strong> security controls and monitoring with <strong className="text-yellow-400">Prometheus</strong> and <strong className="text-yellow-400">Grafana</strong>.</div>
            </div>
            <div className="mt-3 pt-2 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="AWS"><FaAws size={16} /></span>
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="Docker"><FaDocker size={16} /></span>
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="Jenkins"><SiJenkins size={16} /></span>
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="Terraform"><SiTerraform size={16} /></span>
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="Git"><FaGitAlt size={16} /></span>
              </div>
            </div>
          </a>

          {/* Web Developer Card */}
          <a
            href="https://esprit.tn"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block text-left xl:col-span-4"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                Web Developer
              </h3>
              <img
                src="/Portfolio/espritlogo.jpg"
                alt="ESPRIT"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Jul 2023 – Aug 2023</span> | ESPRIT – Internship
            </p>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">
              Developed a web platform that scrapes official educational websites to aggregate online courses.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-1.5">
              <div>- Implemented Python-based scraping to extract course metadata (title, provider, duration, difficulty).</div>
              <div>- Normalized and stored data in a structured database for efficient search and filtering.</div>
              <div>- Developed backend services to rank and recommend courses based on user criteria.</div>
              <div>- Built a responsive interface to search, compare, and discover relevant courses.</div>
            </div>
            <div className="mt-3 pt-2 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="Git"><FaGitAlt size={16} /></span>
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="MongoDB"><SiMongodb size={16} /></span>
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="Node.js"><FaNodeJs size={16} /></span>
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="Python"><FaPython size={16} /></span>
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="React"><FaReact size={16} /></span>
              </div>
            </div>
          </a>

          {/* Network Engineer Card */}
          <a
            href="https://www.tunisietelecom.tn/particulier/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block text-left xl:col-span-4"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                Network Engineer Intern (C-NOC) – Tunisie Telecom
              </h3>
              <img
                src="/Portfolio/tunisie-telecom-logo.png"
                alt="Tunisie Telecom"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Aug 2021 – Sep 2021</span>
            </p>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">
              Worked in the national B2B Network Operations Center.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-1.5">
              <div>- Monitored enterprise network links and handled connectivity incidents.</div>
              <div>- Assisted in troubleshooting routing and service availability issues.</div>
            </div>
            <div className="mt-3 pt-2 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30" title="Network Engineering">
                  <MdSupportAgent size={16} />
                </span>
              </div>
            </div>
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
