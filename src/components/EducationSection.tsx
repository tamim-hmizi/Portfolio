import React from "react";

const EducationSection: React.FC = () => (
  <section id="education" className="relative px-6 md:px-12 py-16 md:py-24">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-8">Education</h2>
      <h3 className="text-xl md:text-2xl font-semibold text-white">Software Engineering Degree</h3>
      <p className="text-yellow-400 mt-2">ESPRIT · 2020 to 2025 · Ariana</p>
      <p className="text-base text-gray-200 leading-relaxed mt-4 max-w-3xl">
        General software engineering with a specialization in Cloud Architecture and DevOps (ArcTIC).
        Final year project at RFC: QuickOps, a DevOps platform combining LLM assisted repository
        analysis, infrastructure provisioning, application deployment and monitoring.
      </p>
    </div>
  </section>
);

export default EducationSection;
