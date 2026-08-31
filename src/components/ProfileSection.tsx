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
          Founder of Axynoxia
        </span>
        <span className="inline-block bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Full-Stack Engineer
        </span>
        <span className="inline-block bg-yellow-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Cloud & DevOps
        </span>
        <span className="inline-block bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
          AI & Automation
        </span>
      </motion.div>

      <motion.p
        className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mt-2 px-4 sm:px-6 z-10 leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I design, build and run software end to end — products and the cloud
        infrastructure underneath them.{" "}
        <span className="italic text-gray-300">I build it, I ship it, and I keep it running.</span>
      </motion.p>

      {/* Trust stats */}
      <motion.div
        className="mt-5 z-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.68 }}
      >
        {[
          { value: "6+", label: "Years Experience" },
          { value: "1M+", label: "Users Served" },
          { value: "70%", label: "Faster Deployments" },
          { value: "3", label: "Languages: AR · FR · EN" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-extrabold text-yellow-500">{stat.value}</span>
            <span className="text-[11px] md:text-xs text-gray-400 uppercase tracking-wide text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* What I do */}
      <motion.div
        className="mt-5 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
      >
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
          What I do
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {[
            "Custom software",
            "Cloud & DevOps",
            "AI & automation",
            "E-commerce",
            "Integrations",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-800/70 border border-yellow-600/20 rounded-lg px-3 py-1.5"
            >
              <span className="text-xs text-gray-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-3 max-w-xl">
          Client work is delivered through{" "}
          <span className="text-yellow-500 font-semibold">Axynoxia</span>, my
          software engineering company —{" "}
          <span className="italic">Elevating Enterprise Standards.</span>
        </p>
      </motion.div>

      {/* Resume Downloads */}
      <div className="mt-6 z-10 w-full max-w-md flex flex-col sm:flex-row gap-3 justify-center items-center">
        <motion.a
          href="/Portfolio/resume-en.pdf"
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
          href="/Portfolio/cv-fr.pdf"
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
