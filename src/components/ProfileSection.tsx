import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaFileAlt } from "react-icons/fa";

const ProfileSection: React.FC = () => (
  <section id="home" className="relative px-6 md:px-12 pt-28 pb-16 md:pt-40 md:pb-28">
    <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_240px] gap-10 md:gap-16 items-center">
      <div>
        <p className="text-yellow-400 text-lg mb-4">Tamim Hmizi</p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
          Software Engineer
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-yellow-400 mt-4">Cloud, DevOps &amp; AI</p>
        <p className="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed mt-6">
          I build full stack applications, automate deployments and run cloud infrastructure.
          I integrate large language models into practical workflows, from repository analysis
          to deployment recommendations.
        </p>
        <p className="text-gray-300 text-base mt-4 max-w-2xl">
          Full Stack Engineer at Bassetti Group. Founder of{" "}
          <a href="https://www.axynoxia.com" className="text-yellow-400 underline underline-offset-4">Axynoxia</a>.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
          <a href="/Portfolio/resume-en.pdf" download="Tamim-Hmizi-Resume-EN.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-yellow-400 text-gray-950 font-semibold rounded-lg">
            <FaFileAlt aria-hidden="true" /> Resume (EN, 3 pages)
          </a>
          <a href="/Portfolio/cv-fr.pdf" download="Tamim-Hmizi-CV-FR.pdf" lang="fr"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg">
            <FaFileAlt aria-hidden="true" /> CV (FR, 3 pages)
          </a>
          <a href="#projects" className="inline-flex items-center justify-center gap-2 px-5 py-3 text-white underline underline-offset-4">
            Explore my work <FaArrowDown aria-hidden="true" />
          </a>
        </div>
        <p className="text-sm text-gray-300 mt-4">Ariana · Arabic, English and French</p>
      </div>
      <motion.img src="/Portfolio/me.jpg" alt="Tamim Hmizi" width="240" height="300"
        className="w-40 md:w-60 aspect-[4/5] object-cover rounded-lg"
        style={{ objectPosition: "center 70%" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} />
    </div>
  </section>
);

export default ProfileSection;
