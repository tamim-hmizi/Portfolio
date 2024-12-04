import React from "react";
import { motion } from "framer-motion";

const EducationSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        Education
      </h2>
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Esprit</h3>
          <p className="text-gray-600">
            Master’s Degree in Software Engineering with a specialization in
            Cloud Computing and DevOps.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;
