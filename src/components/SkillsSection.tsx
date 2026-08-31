import React from "react";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaJava,
  FaPython,
  FaGithub,
  FaServer,
  FaWindows,
} from "react-icons/fa";
import {
  SiTerraform,
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
  SiHelm,
  SiSonarqubeserver,
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
  SiGraphql,
  SiSpring,
  SiGooglecloud,
  SiGitlab,
  SiOpenstack,
  SiSharp,
  SiGnubash,
  SiFlutter,
  SiTraefikproxy,
  SiPrisma,
  SiPostman,
  SiFigma,
  SiNotion,
  SiStripe,
  SiPaypal,
  SiShopify,
  SiCloudflare,
  SiHostinger,
  SiJenkins,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

type Skill = { icon: React.ReactElement; label: string };

const CATEGORIES: { title: string; skills: Skill[] }[] = [
  {
    title: "Cloud Platforms",
    skills: [
      { icon: <FaAws />, label: "AWS" },
      { icon: <VscAzure />, label: "Azure" },
      { icon: <SiGooglecloud />, label: "GCP" },
      { icon: <SiOpenstack />, label: "OpenStack" },
      { icon: <FaServer />, label: "DigitalOcean" },
      { icon: <SiHostinger />, label: "Hostinger" },
      { icon: <SiCloudflare />, label: "Cloudflare" },
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <SiAnsible />, label: "Ansible" },
      { icon: <SiTerraform />, label: "Terraform" },
      { icon: <SiKubernetes />, label: "Kubernetes" },
      { icon: <FaDocker />, label: "Docker" },
      { icon: <SiJenkins />, label: "Jenkins" },
      { icon: <SiSonarqubeserver />, label: "SonarQube" },
      { icon: <SiHelm />, label: "Helm" },
      { icon: <SiPrometheus />, label: "Prometheus" },
      { icon: <SiGrafana />, label: "Grafana" },
      { icon: <FaGithub />, label: "GitHub Actions" },
      { icon: <SiGitlab />, label: "GitLab CI" },
      { icon: <SiTraefikproxy />, label: "Traefik" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { icon: <FaPython />, label: "Python" },
      { icon: <FaJava />, label: "Java" },
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <SiPhp />, label: "PHP" },
      { icon: <SiCplusplus />, label: "C / C++" },
      { icon: <SiSharp />, label: "C#" },
      { icon: <SiGnubash />, label: "Bash" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: <FaReact />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <FaAngular />, label: "Angular" },
      { icon: <SiVuedotjs />, label: "Vue.js" },
      { icon: <SiFlutter />, label: "Flutter" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <SiFastapi />, label: "FastAPI" },
      { icon: <SiDjango />, label: "Django" },
      { icon: <SiFlask />, label: "Flask" },
      { icon: <SiExpress />, label: "Express.js" },
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiNestjs />, label: "NestJS" },
      { icon: <SiSpring />, label: "Spring Boot" },
      { icon: <SiLaravel />, label: "Laravel" },
      { icon: <SiSymfony />, label: "Symfony" },
      { icon: <SiGraphql />, label: "GraphQL" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiMysql />, label: "MySQL" },
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <SiRedis />, label: "Redis" },
      { icon: <SiPrisma />, label: "Prisma" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <SiPostman />, label: "Postman" },
      { icon: <SiFigma />, label: "Figma" },
      { icon: <SiNotion />, label: "Notion" },
      { icon: <SiShopify />, label: "Shopify" },
      { icon: <SiStripe />, label: "Stripe" },
      { icon: <SiPaypal />, label: "PayPal" },
    ],
  },
  {
    title: "Systems",
    skills: [
      { icon: <SiLinux />, label: "Linux" },
      { icon: <SiUbuntu />, label: "Ubuntu" },
      { icon: <FaWindows />, label: "Windows" },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center text-center relative select-none p-6 md:p-12 py-16 md:py-24"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
        <span className="text-yellow-500">Technical</span> Skills
      </h2>
      <p className="text-gray-400 text-sm md:text-base mb-8 md:mb-10 max-w-2xl">
        The stack behind everything above — cloud, DevOps, full-stack, and the tools I run a business on.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="bg-gray-800/50 border border-yellow-600/20 rounded-xl p-4 text-left"
          >
            <h3 className="text-sm font-bold text-yellow-500 uppercase tracking-wide mb-3">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill.label}
                  className="inline-flex items-center gap-1.5 bg-gray-900/60 border border-yellow-600/10 rounded-md px-2 py-1 text-xs text-gray-300"
                >
                  <span className="text-yellow-500 text-sm">{skill.icon}</span>
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
