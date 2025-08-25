import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/Me.jpg";
import { FaFileAlt } from "react-icons/fa";
// ...existing code...

const ProfileSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-40" />

      <motion.img
        src={profileImage}
        alt="Tamim Hmizi"
        className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-gray-200 mb-6 object-cover shadow-xl z-10 select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-2 text-white z-10 select-none"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Tamim Hmizi
      </motion.h1>

      <motion.div
        className="flex items-center gap-3 mb-4 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45 }}
      >
        <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Software Engineer</span>
        <span className="inline-block bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">Cloud & DevOps</span>
      </motion.div>

      <motion.p
        className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mt-2 px-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I design and deliver production-grade platforms, CI/CD pipelines,
        infrastructure as code, and observability for cloud-native and hybrid
        workloads. Current focus: developer experience, secure provisioning,
        and autonomous deployment pipelines.
      </motion.p>

  {/* Only show resume download on home; other links are available in their sections */}

      <div className="mt-8 z-10">
        <motion.a
          href="/Portfolio/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#2563eb] text-white font-semibold shadow-md hover:bg-blue-600 active:scale-95 transform transition-all"
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
