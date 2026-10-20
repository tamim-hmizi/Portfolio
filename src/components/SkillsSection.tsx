import React from "react";

const CATEGORIES = [
  { title: "Software development", skills: "TypeScript, JavaScript, Python, C#, Java, PHP, Bash, SQL. React, Next.js, Angular, Flutter, .NET, Node.js, NestJS, Express, FastAPI, Flask, Spring Boot and Symfony." },
  { title: "Cloud engineering", skills: "Azure, Azure Stack Hub, AWS, EKS, AKS and OpenStack. Hybrid infrastructure, virtual networking, IAM, Terraform and Ansible." },
  { title: "DevOps & delivery", skills: "Docker, Docker Compose, Kubernetes, Helm, Jenkins, GitHub Actions, GitLab CI, CI/CD, SonarQube, Trivy and Nexus." },
  { title: "Applied AI & automation", skills: "LLM integration, repository analysis, deployment recommendations, Python automation, web scraping and workflow integration. Demonstrated in my RFC final year platform." },
  { title: "Data & integrations", skills: "PostgreSQL, MongoDB, MySQL, Redis, Prisma, Firebase, REST APIs, WebSockets, Shopify, payment integrations and transactional email." },
  { title: "Operations & reliability", skills: "Linux, Windows Server, Prometheus, Grafana, Commvault backups, restore validation, Fortinet, OAuth2 and role based access control." },
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
