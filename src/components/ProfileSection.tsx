import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/Me.jpg";

const ProfileSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden select-none">
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
        className="text-4xl md:text-6xl font-bold mb-4 text-white z-10 select-none"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Tamim Hmizi
      </motion.h1>

      <motion.p
        className="text-2xl md:text-3xl text-gray-100 z-10 select-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Cloud Computing & DevOps Engineer
      </motion.p>

      <motion.p
        className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mt-4 px-6 z-10 select-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Software engineering student at Esprit, specializing in cloud computing
        and DevOps. Passionate about full-stack development, with a focus on
        creating scalable, efficient, and innovative solutions.
      </motion.p>
    </section>
  );
};

export default ProfileSection;
