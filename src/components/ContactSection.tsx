import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        Contact / Recruit
      </h2>
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Recruiting? I'm open to junior roles in Cloud, DevOps, and platform
          engineering. Email me or use LinkedIn.
        </p>
        <a
          href="mailto:hmizitamim@hotmail.com?subject=Hiring%20Inquiry"
          className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-[#2563eb] text-white hover:bg-blue-600 mb-4"
        >
          <FaEnvelope className="inline" /> Email: hmizitamim@hotmail.com
        </a>
        <div className="flex justify-center space-x-6 text-white text-2xl">
          <a
            href="https://www.linkedin.com/in/tamimhmizi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/tamim-hmizi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-700" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
