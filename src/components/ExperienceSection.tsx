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
      className="min-h-[85vh] flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-4 md:p-8 lg:p-12 py-8 md:py-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white text-center">
          Experience
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 md:mb-12 text-center">
          Leveraging expertise in cloud computing, DevOps, and full-stack
          development.
        </p>

        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* QuickOps Card */}
          <div className="relative bg-white p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaReact className="text-blue-500" /> QuickOps
              </h3>
              <img
                src="/Portfolio/rfclogo.png"
                alt="QuickOps"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-600 mt-1 flex-grow text-sm md:text-base">
              End-of-study DevOps-as-a-Service SaaS that analyzes GitHub repos,
              suggests infrastructure and CI/CD pipelines, and provisions to VMs
              or Kubernetes with monitoring and security configured.
            </p>
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <div>
                <strong>Role:</strong> Creator & lead
              </div>
              <div>
                <strong>What I did:</strong> Designed platform architecture,
                pipeline generator and IaC templates.
              </div>
              <div>
                <strong>Result:</strong> Faster provisioning and more repeatable
                deployments.
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 justify-start text-blue-500">
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Docker"
                >
                  <FaDocker size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Jenkins"
                >
                  <SiJenkins size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Terraform"
                >
                  <SiTerraform size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Kubernetes"
                >
                  <SiKubernetes size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Helm"
                >
                  <SiHelm size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="SonarQube"
                >
                  <SiSonarqube size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Prometheus"
                >
                  <SiPrometheus size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Grafana"
                >
                  <SiGrafana size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="FastAPI"
                >
                  <SiFastapi size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Git"
                >
                  <FaGitAlt size={16} />
                </span>
              </div>
            </div>
          </div>

          {/* InternRFC Card */}
          <div className="relative bg-white p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                <SiNextdotjs className="text-blue-500" /> InternRFC
              </h3>
              <img
                src="/Portfolio/rfclogo.png"
                alt="RFC"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-600 mt-1 flex-grow text-sm md:text-base">
              Built a cloud-native app to streamline intern management for RFC.
            </p>
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <div>
                <strong>Role:</strong> Full-stack developer
              </div>
              <div>
                <strong>What I did:</strong> Implemented backend APIs and
                frontend workflows for intern tracking.
              </div>
              <div>
                <strong>Result:</strong> Improved onboarding workflows and
                reduced manual tracking.
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 justify-start text-blue-500">
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="AWS"
                >
                  <FaAws size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Docker"
                >
                  <FaDocker size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Jenkins"
                >
                  <SiJenkins size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Terraform"
                >
                  <SiTerraform size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Git"
                >
                  <FaGitAlt size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Next.js"
                >
                  <SiNextdotjs size={16} />
                </span>
              </div>
            </div>
          </div>

          {/* Tutorial App Card */}
          <div className="relative bg-white p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaReact className="text-blue-500" /> Tutorial App
              </h3>
              <img
                src="/Portfolio/espritlogo.jpg"
                alt="Esprit"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-600 mt-1 flex-grow text-sm md:text-base">
              Developed a MERN stack app with scraped course data for ESPRIT
              students.
            </p>
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <div>
                <strong>Role:</strong> Full-stack developer
              </div>
              <div>
                <strong>What I did:</strong> Built REST APIs and responsive UI
                for students.
              </div>
              <div>
                <strong>Result:</strong> Simplified access to course information
                for students.
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 justify-start text-blue-500">
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Git"
                >
                  <FaGitAlt size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="MongoDB"
                >
                  <SiMongodb size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Node.js"
                >
                  <FaNodeJs size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Python"
                >
                  <FaPython size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="React"
                >
                  <FaReact size={16} />
                </span>
              </div>
            </div>
          </div>

          {/* Network Support Card */}
          <div className="relative bg-white p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                <MdSupportAgent className="text-blue-500" /> Network Support
              </h3>
              <img
                src="/Portfolio/tunisie-telecom-logo.png"
                alt="Tunisie Telecom"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-600 mt-1 flex-grow text-sm md:text-base">
              Resolved B2B network issues at Tunisie-Telecom's C-NOC service.
            </p>
            <div className="mt-4 text-sm text-gray-600 space-y-2">
              <div>
                <strong>Role:</strong> Network support engineer
              </div>
              <div>
                <strong>What I did:</strong> Troubleshot and resolved complex
                B2B networking incidents.
              </div>
              <div>
                <strong>Result:</strong> Decreased incident resolution time and
                improved customer SLAs.
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 justify-start text-blue-500">
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="AWS"
                >
                  <FaAws size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Docker"
                >
                  <FaDocker size={16} />
                </span>
                <span
                  className="p-1 rounded bg-gray-100 hover:bg-blue-50"
                  title="Git"
                >
                  <FaGitAlt size={16} />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
