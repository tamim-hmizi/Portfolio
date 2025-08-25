import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiKubernetes,
  SiHelm,
  SiPrometheus,
  SiGrafana,
  SiMicrosoftazure,
  SiSonarqube,
  SiFastapi,
  SiOpenai,
} from "react-icons/si";

const ProjectsSection: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Projects</h2>

      <div className="w-full max-w-4xl space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl font-semibold text-gray-800">QuickOps — End-of-study SaaS</h3>
          <p className="text-gray-600 mt-2">
            QuickOps is a DevOps-as-a-Service SaaS I designed and built as an
            end-of-study project. It analyzes a project's GitHub repositories
            (single frontend + array of backends), determines architecture
            topology (monolith or microservices), and generates tailored
            infrastructure and CI/CD pipelines. With one click, users select
            VM or Kubernetes targets and QuickOps provisions infrastructure,
            deploys applications, and configures security and monitoring.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc pl-5 space-y-2">
              <li>Core stack: MERN (React, Node.js, MongoDB) + FastAPI for AI service</li>
              <li>Provisioning & Automation: Terraform, Ansible, Jenkins pipelines</li>
              <li>Containers & Orchestration: Docker, Kubernetes, AKS / AKS Engine</li>
              <li>Delivery: Helm charts, Nexus artifact repo, SonarQube for quality</li>
              <li>Observability: Prometheus, Grafana, alerting & dashboards</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>AI: LLM-driven analysis (OpenAI-compatible) to suggest infra and pipeline templates</li>
              <li>Topology detection: maps frontend/backends and resource needs</li>
              <li>Generates IaC and pipeline code ready to apply</li>
              <li>One-click: select VM or K8s — deploy and auto-configure monitoring &amp; security</li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-3xl mt-4 text-[#2563eb]" aria-hidden>
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
            <SiMongodb title="MongoDB" />
            <SiFastapi title="FastAPI" />
            <SiOpenai title="LLM" />
            <SiTerraform title="Terraform" />
            <SiAnsible title="Ansible" />
            <SiJenkins title="Jenkins" />
            <FaDocker title="Docker" />
            <SiKubernetes title="Kubernetes" />
            <SiHelm title="Helm" />
            <SiMicrosoftazure title="Azure" />
            <SiSonarqube title="SonarQube" />
            <FaDatabase title="Nexus" />
            <SiPrometheus title="Prometheus" />
            <SiGrafana title="Grafana" />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              aria-label="QuickOps GitHub"
            >
              <FaGithub /> View GitHub
            </a>
            <a
              href="mailto:hmizitamim@hotmail.com?subject=QuickOps%20Demo%20Request"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900"
              aria-label="Request a demo"
            >
              Request a Demo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-100"
            >
              See Contact
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;

