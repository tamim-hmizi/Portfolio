import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const ProfileSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-10 pt-16 md:pt-20"
    >
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />

      <motion.img
        src="/Portfolio/me.jpg"
        alt="Tamim Hmizi"
        className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border-4 border-yellow-500 mb-4 object-cover shadow-xl z-10 select-none shadow-yellow-500/50"
        style={{ objectPosition: 'center 90%' }}
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
        <span className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Full Stack Engineer
        </span>
        <span className="inline-block bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Cloud & DevOps
        </span>
        <span className="inline-block bg-yellow-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          IaC & Automation
        </span>
        <span className="inline-block bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Multi-Cloud (Azure, AWS, OpenStack)
        </span>
      </motion.div>

      <motion.p
        className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mt-2 px-4 sm:px-6 z-10 leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <span className="text-yellow-500 font-semibold">Cloud & DevOps Engineer</span> by expertise.{" "}
        <span className="text-yellow-500 font-semibold">Full-Stack Engineer</span> by passion.{" "}
        <span className="italic text-gray-300">I build it and I run it.</span>
      </motion.p>

      {/* Where I worked */}
      <motion.div
        className="mt-5 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
      >
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Where I've worked</p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-800/70 border border-yellow-600/20 rounded-lg px-3 py-1.5">
            <img src="/Portfolio/BASSETTI-GROUP.webp" alt="Bassetti Group" className="w-5 h-5 object-contain" />
            <span className="text-xs text-gray-300 font-medium">Bassetti Group</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/70 border border-yellow-600/20 rounded-lg px-3 py-1.5">
            <img src="/Portfolio/rfclogo.png" alt="RFC" className="w-5 h-5 object-contain bg-white rounded-sm" />
            <span className="text-xs text-gray-300 font-medium">RFC</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/70 border border-yellow-600/20 rounded-lg px-3 py-1.5">
            <img src="/Portfolio/espritlogo.jpg" alt="ESPRIT" className="w-5 h-5 object-contain bg-white rounded-sm" />
            <span className="text-xs text-gray-300 font-medium">ESPRIT</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/70 border border-yellow-600/20 rounded-lg px-3 py-1.5">
            <img src="/Portfolio/tunisie-telecom-logo.png" alt="Tunisie Telecom" className="w-5 h-5 object-contain bg-white rounded-sm" />
            <span className="text-xs text-gray-300 font-medium">Tunisie Telecom</span>
          </div>
        </div>
      </motion.div>

      {/* Resume Downloads */}
      <div className="mt-6 z-10 w-full max-w-md flex flex-col sm:flex-row gap-3 justify-center items-center">
        <motion.a
          href="/Portfolio/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label="Download Resume (English)"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold shadow-md hover:bg-yellow-700 active:scale-95 transform transition-all border-2 border-yellow-500"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaFileAlt className="w-5 h-5" />
          <span>Resume (EN)</span>
        </motion.a>
        <motion.a
          href="/Portfolio/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label="Download Resume (French)"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-6 py-3 rounded-lg bg-amber-700 text-white font-semibold shadow-md hover:bg-amber-800 active:scale-95 transform transition-all border-2 border-amber-600"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaFileAlt className="w-5 h-5" />
          <span>CV (FR)</span>
        </motion.a>
      </div>
    </section>
  );
};

export default ProfileSection;
