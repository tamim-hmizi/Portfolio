import React from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJenkins,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaJava,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiTerraform,
  SiAzuredevops,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiAnsible,
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiLaravel,
  SiNestjs,
  SiSymfony,
  SiMicrosoftazure,
  SiHelm,
  SiSonarqube,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiExpress,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiCplusplus,
  SiLinux,
  SiUbuntu,
  SiWindows,
  SiElasticsearch,
  SiGraphql,
  SiSpring,
  SiGooglecloud,
  SiGitlab,
  SiBitbucket,
  SiGitea,
  SiOpenstack,
  SiDigitalocean,
  SiC,
  SiCsharp,
  SiGnubash,
  SiAssemblyscript,
  SiTrivy,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const SkillsSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12 pt-24 md:pt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        <span className="text-yellow-500">Technical</span> Skills
      </h2>

      <motion.div
        className="w-full max-w-6xl flex flex-col space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Cloud Platforms Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-2">Cloud Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-yellow-600/30 w-full">
            <div className="flex flex-col items-center group">
              <FaAws className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">AWS</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiMicrosoftazure className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Azure</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiGooglecloud className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">GCP</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiOpenstack className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">OpenStack</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiDigitalocean className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">DigitalOcean</span>
            </div>
          </div>
        </div>

        {/* DevOps & Automation Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-2">DevOps and Automation</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-yellow-600/30 w-full">
            <div className="flex flex-col items-center group">
              <FaGitAlt className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Git</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiAnsible className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Ansible</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiTerraform className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Terraform</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiKubernetes className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaDocker className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Docker</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaJenkins className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Jenkins</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiGitlab className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">GitLab CI</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaGithub className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">GitHub Actions</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiPrometheus className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Prometheus</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiGrafana className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Grafana</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiElasticsearch className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">ELK Stack</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiAzuredevops className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Azure DevOps</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiHelm className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Helm</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiSonarqube className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">SonarQube</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiTrivy className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Trivy</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiBitbucket className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Bitbucket</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiGitea className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Gitea</span>
            </div>
          </div>
        </div>

        {/* Programming Languages Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-2">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-yellow-600/30 w-full">
            <div className="flex flex-col items-center group">
              <FaPython className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Python</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaJava className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Java</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiJavascript className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">JavaScript</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiTypescript className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">TypeScript</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiPhp className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">PHP</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiCplusplus className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">C/C++</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiC className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">C</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiCsharp className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">C#</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiGnubash className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Bash</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiAssemblyscript className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Assembly</span>
            </div>
          </div>
        </div>

        {/* Frontend Frameworks Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-2">Frontend Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-yellow-600/30 w-full">
            <div className="flex flex-col items-center group">
              <FaReact className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">React</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiNextdotjs className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Next.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaAngular className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Angular</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiVuedotjs className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Vue.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiHtml5 className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">HTML</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiCss3 className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">CSS</span>
            </div>
          </div>
        </div>

        {/* Backend Frameworks Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-2">Backend Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-yellow-600/30 w-full">
            <div className="flex flex-col items-center group">
              <SiFastapi className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">FastAPI</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiDjango className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Django</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiFlask className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Flask</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiExpress className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Express.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaNodeJs className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Node.js</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiNestjs className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">NestJS</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiSpring className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Spring Boot</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiLaravel className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Laravel</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiSymfony className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Symfony</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiGraphql className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">GraphQL</span>
            </div>
          </div>
        </div>

        {/* Databases Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-2">Databases</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-yellow-600/30 w-full">
            <div className="flex flex-col items-center group">
              <SiMongodb className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">MongoDB</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaAws className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">DynamoDB</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiMysql className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">MySQL</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiPostgresql className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiRedis className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Redis</span>
            </div>
          </div>
        </div>

        {/* Operating Systems Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-500 mb-2">Operating Systems</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-yellow-600/30 w-full">
            <div className="flex flex-col items-center group">
              <SiLinux className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Linux</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiUbuntu className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Ubuntu</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiWindows className="text-4xl sm:text-5xl md:text-6xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm text-gray-300 mt-1">Windows</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
