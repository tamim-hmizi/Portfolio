import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center text-center relative select-none p-6 md:p-12 py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
        <span className="text-yellow-500">Let's</span> talk
      </h2>
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          Got something to build, scale, or fix? Tell me what you're working on
          and I'll tell you straight whether I'm the right person for it.
        </p>

        <div className="bg-gray-800 border-2 border-yellow-600/30 p-4 md:p-6 rounded-xl mb-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-200">
              <FaEnvelope className="text-yellow-500 text-xl flex-shrink-0" />
              <span className="text-sm md:text-base font-semibold">Email:</span>
              <a
                href="mailto:tamimhmizi@icloud.com?subject=Project%20Inquiry"
                className="text-yellow-400 hover:text-yellow-500 transition-colors font-semibold break-all sm:break-normal"
              >
                tamimhmizi@icloud.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-200">
              <FaEnvelope className="text-yellow-500 text-xl flex-shrink-0 opacity-0 sm:opacity-100" />
              <span className="text-sm md:text-base font-semibold">Axynoxia (client work):</span>
              <a
                href="mailto:tamim.hmizi@axynoxia.com?subject=Project%20Inquiry"
                className="text-yellow-400 hover:text-yellow-500 transition-colors font-semibold break-all sm:break-normal"
              >
                tamim.hmizi@axynoxia.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-200">
              <FaPhoneAlt className="text-yellow-500 text-xl flex-shrink-0" />
              <span className="text-sm md:text-base font-semibold">Phone:</span>
              <a 
                href="tel:+21654886068"
                className="text-yellow-400 hover:text-yellow-500 transition-colors font-semibold"
              >
                +216 54 886 068
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-200">
              <FaMapMarkerAlt className="text-yellow-500 text-xl flex-shrink-0" />
              <span className="text-sm md:text-base font-semibold">Location:</span>
              <span className="text-yellow-400 font-semibold">Ariana, Tunisia</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-yellow-600/30">
            <div className="flex flex-wrap gap-2 justify-center text-yellow-500">
              <span className="w-10 h-10 rounded bg-gray-700 border border-yellow-600/30 flex items-center justify-center text-xs font-semibold text-yellow-500">
                AR
              </span>
              <span className="w-10 h-10 rounded bg-gray-700 border border-yellow-600/30 flex items-center justify-center text-xs font-semibold text-yellow-500">
                EN
              </span>
              <span className="w-10 h-10 rounded bg-gray-700 border border-yellow-600/30 flex items-center justify-center text-xs font-semibold text-yellow-500">
                FR
              </span>
              <span className="w-10 h-10 rounded bg-gray-700 border border-yellow-600/30 flex items-center justify-center text-xs font-semibold text-yellow-500">
                DE
              </span>
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
          href="mailto:tamimhmizi@icloud.com?subject=Project%20Inquiry"
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
