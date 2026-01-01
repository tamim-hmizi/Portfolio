import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none p-6 md:p-12 pt-24 md:pt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        <span className="text-yellow-500">Contact</span> / Recruit
      </h2>
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 px-2">
          Recruiting? I'm open to roles in Cloud, DevOps, and platform engineering. 
          <strong className="text-yellow-500"> Infrastructure Consultant</strong> at <strong>RFC</strong> | 
          <strong className="text-yellow-500"> Founder & CEO</strong> of <strong>Axynoxia</strong>. 
          Email me or use LinkedIn.
        </p>
        
        <div className="bg-gray-800 border-2 border-yellow-600/30 p-4 md:p-6 rounded-xl mb-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-200">
              <FaEnvelope className="text-yellow-500 text-xl flex-shrink-0" />
              <span className="text-sm md:text-base font-semibold">Email:</span>
              <a 
                href="mailto:tamimhmizi@icloud.com?subject=Hiring%20Inquiry"
                className="text-yellow-400 hover:text-yellow-500 transition-colors font-semibold break-all sm:break-normal"
              >
                tamimhmizi@icloud.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-200">
              <span className="text-yellow-500 text-xl">📞</span>
              <span className="text-sm md:text-base font-semibold">Phone:</span>
              <a 
                href="tel:+21621611816"
                className="text-yellow-400 hover:text-yellow-500 transition-colors font-semibold"
              >
                +216 21 611 816
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-200">
              <span className="text-yellow-500 text-xl">📍</span>
              <span className="text-sm md:text-base font-semibold">Location:</span>
              <span className="text-yellow-400 font-semibold">Ariana, Tunisia</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 text-white text-3xl mb-6">
          <a
            href="https://www.linkedin.com/in/tamimhmizi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tamim-hmizi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <motion.a
          href="mailto:tamimhmizi@icloud.com?subject=Hiring%20Inquiry"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 font-semibold shadow-md border-2 border-yellow-500 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className="text-xl" /> Send Email
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
