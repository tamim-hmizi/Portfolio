import React from "react";

/**
 * Decorative background blob.
 *
 * Deliberately CSS-animated and `fixed` rather than a framer-motion `absolute`
 * element: a JS-driven rAF animation on an absolutely-positioned child forces a
 * repaint on every scroll frame, which is what made scrolling feel janky. Fixed
 * positioning takes these out of the scrolling layer entirely, and a pure
 * transform/opacity CSS animation runs on the compositor.
 */
const FloatingBackground: React.FC<{ position: string; index: number }> = ({
  position,
  index,
}) => (
  <div
    className={`fixed ${position} rounded-full z-0 select-none pointer-events-none opacity-30 blur-2xl float-blob`}
    style={{
      animationDelay: `${index * 1.2}s`,
      animationDirection: index % 2 === 0 ? "normal" : "reverse",
    }}
    aria-hidden="true"
  />
);

export default FloatingBackground;
