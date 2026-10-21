import React from "react";
import { m } from "framer-motion";

/**
 * Fades and lifts its content in the first time it scrolls into view.
 * MotionConfig reducedMotion="user" turns the movement off for users who ask for less motion.
 */
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className,
  delay = 0,
}) => (
  <m.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
  >
    {children}
  </m.div>
);

export default Reveal;
