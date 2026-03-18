import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaMobileAlt,
  FaShoppingCart,
} from "react-icons/fa";
import {
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiFlutter,
  SiJenkins,
  SiSonarqubeserver,
  SiOpenstack,
  SiTerraform,
  SiTypescript,
  SiShopify,
  SiStripe,
  SiSymfony,
  SiPhp,
  SiRedux,
  SiChakraui,
  SiGreensock,
  SiRedis,
  SiTraefikproxy,
  SiExpress,
} from "react-icons/si";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Axynoxia ERP",
      description: "Industrial multi-tenant SaaS ERP featuring robust security with Argon2 and high-performance data handling.",
      tech: [<SiNestjs title="NestJS" />, <SiPrisma title="Prisma" />, <SiPostgresql title="PostgreSQL" />, <SiRedis title="Redis" />, <SiTraefikproxy title="Traefik" />],
    },
    {
      title: "Tickety",
      description: "A high-concurrency SaaS ticketing platform featuring real-time updates and secure transaction handling.",
      tech: [<FaReact title="React" />, <SiNestjs title="NestJS" />, <SiPrisma title="Prisma" />, <SiPostgresql title="PostgreSQL" />],
    },
    {
      title: "Roehrdanz Immobilien",
      description: "A real estate CMS with a custom MERN-based management system and asynchronous image processing for property listings.",
      tech: [<SiMongodb title="MongoDB" />, <FaNodeJs title="Node.js" />, <FaReact title="React" />, <SiTypescript title="TypeScript" />],
    },
    {
      title: "MERN E-commerce",
      description: "Full-stack SaaS infrastructure with Redux state management and JWT/Argon2 security implementation.",
      tech: [<SiMongodb title="MongoDB" />, <SiExpress title="Express" />, <FaReact title="React" />, <FaNodeJs title="Node.js" />, <SiRedux title="Redux" />],
    },
    {
      title: "OMHY Entertainment",
      description: "Managed video hub for smooth entertainment delivery using GSAP animations and a robust backend.",
      tech: [<FaReact title="React" />, <SiChakraui title="Chakra UI" />, <SiGreensock title="GSAP" />, <SiJenkins title="Jenkins" />, <SiMongodb title="MongoDB" />],
    },
    {
      title: "New Journey",
      description: "Global consulting ecosystem built with Symfony 7, featuring a dynamic UI with UX Turbo and Stimulus.",
      tech: [<SiSymfony title="Symfony" />, <SiPhp title="PHP" />, <FaServer title="Turbo/Stimulus" />],
    },
    {
      title: "Jektis Travel",
      description: "Global e-tourism platform for flight and hotel bookings with Stripe payment integration.",
      tech: [<SiPhp title="PHP" />, <SiStripe title="Stripe" />, <FaDatabase title="MySQL" />],
    },
    {
      title: "DevOps CI/CD Hub",
      description: "Full-scale CI/CD platform integrating automated testing, security scanning (SonarQube), and artifact management (Nexus).",
      tech: [<SiJenkins title="Jenkins" />, <SiSonarqubeserver title="SonarQube" />, <FaServer title="Nexus" />],
    },
    {
      title: "OpenStack Private Cloud Lab",
      description: "Orchestrated virtual networks, compute, and storage on a multi-node OpenStack cloud environment with Terraform.",
      tech: [<SiOpenstack title="OpenStack" />, <SiTerraform title="Terraform" />, <FaServer title="Infrastructure" />],
    },
    {
      title: "B-moovd",
      description: "A reactive mobile application for activity tracking, built with Flutter and using Provider for efficient state management.",
      tech: [<SiFlutter title="Flutter" />, <FaMobileAlt title="Mobile" />],
    },
    {
      title: "Confortex",
      description: "High-performance Shopify e-commerce store for specialized home and interior products.",
      tech: [<SiShopify title="Shopify" />, <FaShoppingCart title="E-commerce" />],
    },
    {
      title: "Vie Sublime",
      description: "Luxury Shopify-based e-commerce platform focusing on high-end product presentation.",
      tech: [<SiShopify title="Shopify" />, <FaShoppingCart title="Luxury Retail" />],
    },
  ];

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12 pt-24 md:pt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center">
          <span className="text-yellow-500">Key</span> Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 md:mb-12 text-center">
          A selection of major projects focusing on cloud architecture, automation, and full-stack engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border-2 border-yellow-600/30 p-6 rounded-xl shadow-lg hover:border-yellow-500 transition-all text-left flex flex-col justify-between"
              whileHover={{ y: -5 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-3 text-yellow-500 mt-2 pt-3 border-t border-yellow-600/20">
                {project.tech.map((icon, i) => (
                  <span key={i} className="text-xl hover:scale-110 transition-transform">
                    {icon}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
