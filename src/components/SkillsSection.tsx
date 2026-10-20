import React from "react";

const CATEGORIES = [
  { title: "Software development", skills: "TypeScript, JavaScript, Python, C#, Java, PHP, Bash, SQL, C++ and Assembly. React, Next.js, Angular, Flutter, .NET, Node.js, NestJS, Express, FastAPI, Django, Flask, Spring Boot, Symfony, Vue.js/Vuex, Tailwind CSS, Chakra UI and shadcn/ui." },
  { title: "Cloud engineering", skills: "Azure, Azure Stack Hub, AWS, EKS, AKS, GCP, DigitalOcean and OpenStack. Hybrid infrastructure, virtual networking, IAM, Terraform and Ansible." },
  { title: "DevOps & delivery", skills: "Docker, Docker Compose, Kubernetes, Helm, Jenkins, GitHub Actions, GitLab CI, CI/CD, SonarQube, Trivy, Nexus, Traefik and Portainer." },
  { title: "Applied AI & automation", skills: "LLM integration, repository analysis, deployment recommendations, Python automation, web scraping, Temporal, LangGraph and workflow integration. Demonstrated in my RFC final year platform." },
  { title: "Data & integrations", skills: "PostgreSQL, MongoDB, MySQL, Redis, Prisma, Mongoose, Sequelize, BullMQ, Firebase, MinIO, REST APIs, WebSockets, Shopify, payment integrations and transactional email." },
  { title: "Operations & reliability", skills: "Linux (Ubuntu, CentOS), Windows Server, Active Directory, Microsoft 365, WSL, Prometheus, Grafana, ELK, CloudWatch, Commvault backups, restore validation, Fortinet, IAM, MFA, OAuth2, role based access control and encryption." },
];

const SkillsSection: React.FC = () => (
  <section id="skills" className="relative px-6 md:px-12 py-16 md:py-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Technical <span className="text-yellow-400">skills</span></h2>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
        {CATEGORIES.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl text-yellow-400 font-semibold mb-3">{category.title}</h3>
            <p className="text-base text-gray-200 leading-relaxed">{category.skills}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
