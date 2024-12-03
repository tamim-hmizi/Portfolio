import { motion } from "framer-motion";
import React from "react";

const FloatingBackground: React.FC<{ position: string; index: number }> = ({ position, index }) => (
    <motion.div
        className={`absolute ${position} bg-opacity-30 rounded-full z-0 select-none`}
        animate={{
            x: ["0%", `${index % 2 === 0 ? "20%" : "-20%"}`, "0%"],
            y: ["0%", `${index % 2 === 0 ? "20%" : "-20%"}`, "0%"],
            scale: [1, 1.2, 1],
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
        }}
    />
);

export default FloatingBackground;
