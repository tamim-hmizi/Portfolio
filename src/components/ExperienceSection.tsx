import React from "react";

const EXPERIENCE = [
  { role: "Full Stack Engineer", company: "Bassetti Group, TEEXMA", dates: "Apr 2026 to Present", location: "Tunis",
    details: ["Develop enterprise applications for technical and scientific data management with .NET, Angular and JavaScript.", "Maintain Delphi modules, containerize workloads with Docker and contribute to delivery automation."] },
  { role: "Founder & Software Engineer", company: "Axynoxia", dates: "Jan 2026 to Present", location: "Tunis",
    details: ["Lead client work from requirements and architecture through full stack implementation, CI/CD, deployment and production operations.", "Build web platforms, a Flutter app, ticketing systems, a real estate CMS and Shopify storefronts.", "Develop internal ERP, ticketing, invoicing, CRM and energy management products, with hosted demos and ongoing development."] },
  { role: "Infrastructure Consultant", company: "RFC", dates: "Oct 2025 to May 2026", location: "Ariana",
    details: ["Engineer hybrid infrastructure using Azure Stack Hub and Azure, with enterprise networking on Fortinet and Cisco.", "Administer Commvault backups and restore validation; automate Linux and Windows Server operations.", "Build Python/Flask exporters and Prometheus/Grafana dashboards for infrastructure and VM monitoring."] },
  { role: "DevOps Platform Engineer", company: "RFC", dates: "Feb 2025 to Aug 2025", location: "Final year project",
    details: ["Built a DevOps as a Service platform with React, Express, FastAPI and MongoDB.", "Integrated LLM analysis of repositories, dependencies and runtime needs to recommend VM or Kubernetes deployment.", "Automated provisioning with Terraform and Ansible, application delivery with Docker and AKS, and Jenkins pipelines with quality checks and monitoring."] },
  { role: "Cloud & Full Stack Engineer Intern", company: "RFC", dates: "Jul 2024 to Aug 2024", location: "Internship",
    details: ["Developed an intern management application and deployed it on AWS EKS.", "Implemented CI/CD with Jenkins, Docker, Terraform and GitHub Actions, IAM controls and Prometheus/Grafana monitoring."] },
  { role: "Web Developer Intern", company: "ESPRIT", dates: "Jul 2023 to Aug 2023", location: "Internship",
    details: ["Built a course discovery platform using Python scraping of official education websites, structured metadata, search and recommendations."] },
  { role: "Network Engineer Intern, C-NOC", company: "Tunisie Telecom", dates: "Aug 2021 to Sep 2021", location: "Internship",
    details: ["Monitored enterprise connectivity in the B2B Network Operations Center and assisted with routing and service availability incidents."] },
];

const ExperienceSection: React.FC = () => (
  <section id="experience" className="relative px-6 md:px-12 py-16 md:py-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Professional <span className="text-yellow-400">experience</span></h2>
      <div className="space-y-10 md:space-y-12">
        {EXPERIENCE.map((job) => (
          <article key={`${job.company}-${job.role}`} className="grid md:grid-cols-[230px_1fr] gap-3 md:gap-10">
            <div>
              <p className="text-yellow-400 font-semibold">{job.dates}</p>
              <p className="text-gray-300 text-sm mt-1">{job.location}</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">{job.role}</h3>
              <p className="text-yellow-400 mt-1 mb-3">{job.company}</p>
              <ul className="list-disc pl-5 space-y-2 text-base text-gray-200 leading-relaxed">
                {job.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
