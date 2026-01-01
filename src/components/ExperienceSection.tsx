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

        {/* Founder & CEO Card - Full Width */}
        <motion.div
          className="w-full mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a 
            href="https://axynoxia.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block"
          >
            <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-500">
                Founder & CEO
              </h3>
              <img 
                src="https://axynoxia.com/logo.png" 
                alt="Axynoxia Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 object-contain"
              />
            </div>
            <p className="text-gray-300 mt-1 flex-grow text-sm sm:text-base md:text-lg mb-2">
              <span className="text-yellow-400 font-semibold">Jan 2025 -- Present</span> | Axynoxia — Enterprise Technology Consulting
            </p>
            <p className="text-gray-300 mt-1 flex-grow text-sm sm:text-base md:text-lg">
              Founded and lead Axynoxia, an enterprise technology consulting firm specializing in scalable software solutions, AI implementations, and cloud architecture for Fortune 500 companies.
            </p>
            <div className="mt-4 text-sm sm:text-base text-gray-300 space-y-2">
              <div>
                <strong className="text-yellow-500">Key Activities:</strong> Oversee development of custom software solutions. Manage client relationships and drive business growth. Deliver innovative technology solutions across diverse industries.
              </div>
            </div>
          </a>
        </motion.div>

        {/* Other Experience Cards in Grid */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Infrastructure Consultant Card */}
          <a 
            href="https://rfc.com.tn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block"
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
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Oct 2025 -- Present</span> | RFC — Ariana, Tunisia
            </p>
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base">
              Provide strategic guidance on infrastructure solutions, focusing on cloud services, data center modernization, and network security.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-2">
              <div>
                <strong className="text-yellow-500">Key Responsibilities:</strong> Design and implement scalable, secure IT infrastructures tailored to client business needs. Lead infrastructure projects involving automation, cloud migration, and DevOps practices.
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-yellow-600/30">
              <div className="flex flex-wrap gap-2 justify-start text-yellow-500">
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="AWS"
                >
                  <FaAws size={16} />
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
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                PFE Intern — DevOps Platform Engineer
              </h3>
              <img
                src="/Portfolio/rfclogo.png"
                alt="RFC"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Feb 2025 -- Aug 2025</span> | RFC — Ariana, Tunisia
            </p>
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base">
              Architected and developed a <strong className="text-yellow-400">DevOps-as-a-Service (DaaS) platform</strong> that analyzes GitHub repositories, suggests optimal infrastructure configurations, and provisions to VMs or Kubernetes clusters with automated monitoring and security.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-2">
              <div>
                <strong className="text-yellow-500">Key Achievements:</strong> Built full-stack auto-provisioning platform (React, Express.js, MongoDB, FastAPI). Implemented AI-driven recommendation engine. <strong className="text-yellow-400">Reduced infrastructure provisioning time by 70%</strong>.
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-yellow-600/30">
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

          {/* Full Stack Engineer Card */}
          <a 
            href="https://rfc.com.tn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                Full Stack Engineer
              </h3>
              <img
                src="/Portfolio/rfclogo.png"
                alt="RFC"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Jul 2024 -- Aug 2024</span> | RFC — Ariana, Tunisia
            </p>
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base">
              Developed and deployed cloud-native applications using Next.js with server-side rendering on AWS infrastructure (IAM, EKS, ECR, DynamoDB, CloudWatch). Built intern management system with authentication and real-time sync.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-2">
              <div>
                <strong className="text-yellow-500">Key Achievement:</strong> Automated CI/CD pipelines with Jenkins, Terraform, Docker, GitHub Actions. <strong className="text-yellow-400">Reduced deployment time by 40%</strong>.
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-yellow-600/30">
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
                <span
                  className="p-1 rounded bg-gray-700 hover:bg-yellow-600/20 border border-yellow-600/30"
                  title="Next.js"
                >
                  <SiNextdotjs size={16} />
                </span>
              </div>
            </div>
          </a>

          {/* Web Developer Card */}
          <a 
            href="https://esprit.tn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block"
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
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Jul 2023 -- Aug 2023</span> | ESPRIT — Ariana, Tunisia
            </p>
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base">
              Developed a comprehensive search-engine style web application using the MERN stack (MongoDB, Express.js, React, Node.js) to help ESPRIT students find and access course information efficiently.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-2">
              <div>
                <strong className="text-yellow-500">Key Features:</strong> Advanced search with React hooks and MongoDB aggregation. Python web scraping with BeautifulSoup and Scrapy. Responsive UI with modern UX principles.
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-yellow-600/30">
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
            className="relative bg-gray-800 border-2 border-yellow-600/30 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500 flex flex-col cursor-pointer block"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500">
                Network Engineer C-NOC
              </h3>
              <img
                src="/Portfolio/tunisie-telecom-logo.png"
                alt="Tunisie Telecom"
                className="w-10 h-10 object-contain rounded-md bg-white p-1 shadow-sm flex-shrink-0"
              />
            </div>
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base mb-2">
              <span className="text-yellow-400 font-semibold">Aug 2021 -- Sep 2021</span> | Tunisie Telecom — Tunis, Tunisia
            </p>
            <p className="text-gray-300 mt-1 flex-grow text-sm md:text-base">
              Provided B2B network support and maintenance; monitored links and resolved connectivity incidents.
            </p>
            <div className="mt-4 text-sm text-gray-300 space-y-2">
              <div>
                <strong className="text-yellow-500">Focus:</strong> Network troubleshooting, incident resolution, and maintaining service quality.
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-yellow-600/30">
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
