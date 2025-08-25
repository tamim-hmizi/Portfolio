import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/Me.jpg";
import { FaFileAlt } from "react-icons/fa";
// ...existing code...

const ProfileSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12"
    >
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />

      <motion.img
        src={profileImage}
        alt="Tamim Hmizi"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full border-4 border-gray-200 mb-6 object-cover shadow-xl z-10 select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white z-10 select-none leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Tamim Hmizi
      </motion.h1>

      <motion.div
        className="flex flex-wrap items-center gap-2 mb-4 z-10 justify-center max-w-xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45 }}
      >
        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          Junior Software Engineer
        </span>
        <span className="inline-block bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">
          Cloud & DevOps
        </span>
        <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm">
          Open to opportunities
        </span>
      </motion.div>

      <motion.p
        className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mt-2 px-4 sm:px-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I design and deliver production-grade platforms, CI/CD pipelines,
        infrastructure as code, and observability for cloud-native and hybrid
        workloads. I focus on improving developer productivity, hardening
        delivery pipelines, and making deployments safe and repeatable.
      </motion.p>

      <div className="mt-3 z-10 text-sm text-gray-200">
        <p className="max-w-md mx-auto">
          Hiring note: recent graduate (Junior). Open to junior Cloud/DevOps or
          platform engineering roles. Remote or hybrid.
        </p>
      </div>

      {/* Only show resume download on home; other links are available in their sections */}

      <div className="mt-6 z-10 w-full max-w-xs sm:max-w-sm">
        <motion.a
          href="/Portfolio/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          className="w-full inline-flex justify-center items-center gap-3 px-6 py-3 rounded-lg bg-[#2563eb] text-white font-semibold shadow-md hover:bg-blue-600 active:scale-95 transform transition-all"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaFileAlt className="w-5 h-5" />
          <span>Download Resume</span>
        </motion.a>
      </div>
    </section>
  );
};

export default ProfileSection;
