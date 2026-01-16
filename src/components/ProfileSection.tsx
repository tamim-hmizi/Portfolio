import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const ProfileSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12 pt-24 md:pt-28"
    >
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />

      <motion.img
        src="/Portfolio/me.jpg"
        alt="Tamim Hmizi"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full border-4 border-yellow-500 mb-6 object-cover shadow-xl z-10 select-none shadow-yellow-500/50"
        style={{ objectPosition: 'center 30%' }}
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
          Infrastructure Consultant
        </span>
        <span className="inline-block bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Cloud & DevOps
        </span>
        <span className="inline-block bg-yellow-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          SaaS & Full-Stack
        </span>
        <span className="inline-block bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Open to opportunities
        </span>
      </motion.div>

      <motion.p
        className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mt-2 px-4 sm:px-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <strong className="text-yellow-500">Infrastructure Consultant / Cloud & DevOps Engineer</strong> with hands-on experience working in a company specialized in <strong>cloud platforms, DevOps practices, and SaaS / full-stack application development</strong>. Experienced in designing, deploying, automating, monitoring, and operating <strong>hybrid and cloud-native infrastructures</strong> supporting modern software products. Strong background in CI/CD, observability, networking, backup systems, and end-to-end application delivery in enterprise and production-like environments.
      </motion.p>

      <div className="mt-4 z-10 text-xs sm:text-sm text-gray-300 px-4">
        <p className="max-w-md mx-auto">
          <strong className="text-yellow-500">Infrastructure Consultant</strong> at <strong>RFC</strong> | Open to Cloud/DevOps or platform engineering roles. Remote or hybrid.
        </p>
      </div>

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
          href="/Portfolio/Resume_frensh.pdf"
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
