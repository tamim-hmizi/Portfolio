import React from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiJenkins,
  SiTerraform,
  SiKubernetes,
  SiHelm,
  SiSonarqube,
  SiPrometheus,
  SiGrafana,
  SiFastapi,
} from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";

const ExperienceSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-[85vh] flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12 pt-24 md:pt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
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
              <span className="text-yellow-400 font-semibold">Oct 2025 -- Present</span> | RFC -- Ariana, Tunisia
            </p>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">
              Operate and support production hybrid cloud infrastructure to deliver SaaS and enterprise services.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-1.5">
              <div>- Operate and support Azure Stack Hub integrated with public Azure for hybrid cloud delivery.</div>
              <div>- Administer and troubleshoot enterprise network and security infrastructure using <strong className="text-yellow-400">Fortinet firewalls</strong> and <strong className="text-yellow-400">Cisco</strong> networking equipment.</div>
              <div>- Implement endpoint and server protection using <strong className="text-yellow-400">Trend Micro</strong> across infrastructure environments.</div>
              <div>- Operate <strong className="text-yellow-400">Commvault</strong> backup infrastructure with backup execution, restore validation, failure analysis, and reporting.</div>
              <div>- Provide infrastructure support through incident handling, troubleshooting, and service request resolution.</div>
              <div>- Deliver technical workshops and client training on infrastructure usage, security, and backup strategy.</div>
              <div>- Manage <strong className="text-yellow-400">Active Directory</strong> services and participate in <strong className="text-yellow-400">Microsoft 365</strong> tenant administration.</div>
            </div>
            <div className="mt-3 pt-2 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Grafana"
                >
                  <SiGrafana size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Prometheus"
                >
                  <SiPrometheus size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Git"
                >
                  <FaGitAlt size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Docker"
                >
                  <FaDocker size={16} />
                </span>
              </div>
            </div>
          </a>

          {/* PFE Intern - DevOps Platform Engineer Card */}
          <a 
            href="https://rfc.com.tn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block text-left xl:col-span-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                DevOps Platform Engineer -- Final Year Project (PFE), RFC
              </h3>
              <img
                src="/Portfolio/rfclogo.png"
                alt="RFC"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Feb 2025 -- Aug 2025</span>
            </p>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">
              Designed and implemented a <strong className="text-yellow-400">DevOps-as-a-Service platform</strong> to automate application analysis, deployment, and monitoring.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-1.5">
              <div>- Built a monolithic core with React, Express.js, FastAPI, and MongoDB, with clear separation between frontend, API gateway, and backend services.</div>
              <div>- Integrated an AI-driven analysis engine to inspect Git repositories, dependencies, and runtime requirements.</div>
              <div>- Implemented multi-architecture deployment logic for VM-based monolithic apps and AKS microservices deployments.</div>
              <div>- Developed two MERN e-commerce applications as deployment use cases for VM and AKS paths.</div>
              <div>- Automated VM-based deployments using <strong className="text-yellow-400">Terraform</strong>, <strong className="text-yellow-400">Ansible</strong>, and <strong className="text-yellow-400">Docker</strong> / Docker Compose.</div>
              <div>- Implemented AKS microservices deployments using AKS Engine, kubectl, and Kubernetes YAML templates.</div>
              <div>- Built CI/CD pipelines with <strong className="text-yellow-400">Jenkins</strong> for build, test, quality, security, artifact management, and deployment.</div>
              <div>- Integrated <strong className="text-yellow-400">SonarQube</strong> for code quality and <strong className="text-yellow-400">Nexus</strong> for artifacts.</div>
              <div>- Implemented observability with <strong className="text-yellow-400">Prometheus</strong> and <strong className="text-yellow-400">Grafana</strong>.</div>
              <div>- Reduced infrastructure provisioning and deployment time by approximately <strong className="text-yellow-400">70%</strong>.</div>
            </div>
            <div className="mt-3 pt-2 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Docker"
                >
                  <FaDocker size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Jenkins"
                >
                  <SiJenkins size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Terraform"
                >
                  <SiTerraform size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Kubernetes"
                >
                  <SiKubernetes size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Helm"
                >
                  <SiHelm size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="SonarQube"
                >
                  <SiSonarqube size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Prometheus"
                >
                  <SiPrometheus size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Grafana"
                >
                  <SiGrafana size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="FastAPI"
                >
                  <SiFastapi size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Git"
                >
                  <FaGitAlt size={16} />
                </span>
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
              <span className="text-yellow-400 font-semibold">Jul 2024 -- Aug 2024</span> | RFC -- Internship
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
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="AWS"
                >
                  <FaAws size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Docker"
                >
                  <FaDocker size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Jenkins"
                >
                  <SiJenkins size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Terraform"
                >
                  <SiTerraform size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Git"
                >
                  <FaGitAlt size={16} />
                </span>
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
              <span className="text-yellow-400 font-semibold">Jul 2023 -- Aug 2023</span> | ESPRIT -- Internship
            </p>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-3">
              Developed a web platform that scrapes official educational websites to aggregate online courses.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-1.5">
              <div>- Implemented Python-based scraping to extract course metadata (title, provider, duration, difficulty).</div>
              <div>- Normalized and stored data in a structured database for efficient search and filtering.</div>
              <div>- Developed backend services to rank and recommend courses based on user criteria.</div>
              <div>- Built a responsive interface to search, compare, and discover relevant courses.</div>
              <div>- Ensured data reliability by targeting verified course providers.</div>
            </div>
            <div className="mt-3 pt-2 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Git"
                >
                  <FaGitAlt size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="MongoDB"
                >
                  <SiMongodb size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Node.js"
                >
                  <FaNodeJs size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Python"
                >
                  <FaPython size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="React"
                >
                  <FaReact size={16} />
                </span>
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
                Network Engineer Intern (C-NOC) -- Tunisie Telecom
              </h3>
              <img
                src="/Portfolio/tunisie-telecom-logo.png"
                alt="Tunisie Telecom"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Aug 2021 -- Sep 2021</span>
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
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Network Engineering"
                >
                  <MdSupportAgent size={16} />
                </span>
              </div>
            </div>
          </a>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
