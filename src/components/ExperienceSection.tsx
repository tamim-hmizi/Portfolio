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
import { SiNextdotjs, SiMongodb, SiJenkins, SiTerraform } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";

const ExperienceSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        Experience
      </h2>
      <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6">
        Leveraging expertise in cloud computing, DevOps, and full-stack
        development.
      </p>
      <motion.div
        className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* InternRFC Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <SiNextdotjs className="text-blue-500" /> InternRFC
          </h3>
          <p className="text-gray-600 mt-2">
            Built a cloud-native app to streamline intern management for RFC.
          </p>
          <div className="flex gap-2 text-blue-500 mt-4">
            <FaAws size={24} />
            <FaDocker size={24} />
            <SiJenkins size={24} />
            <SiTerraform size={24} />
            <FaGitAlt size={24} />
            <SiNextdotjs size={24} />
          </div>
        </div>

        {/* Tutorial App Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaReact className="text-blue-500" /> Tutorial App
          </h3>
          <p className="text-gray-600 mt-2">
            Developed a MERN stack app with scraped course data for ESPRIT
            students.
          </p>
          <div className="flex gap-2 text-blue-500 mt-4">
            <FaGitAlt size={24} />
            <SiMongodb size={24} />
            <FaNodeJs size={24} />
            <FaPython size={24} />
            <FaReact size={24} />
          </div>
        </div>

        {/* Network Support Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <MdSupportAgent className="text-blue-500" /> Network Support
          </h3>
          <p className="text-gray-600 mt-2">
            Resolved B2B network issues at Tunisie-Telecom's C-NOC service.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
