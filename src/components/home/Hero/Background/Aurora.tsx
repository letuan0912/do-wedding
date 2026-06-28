"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      {/* Left Glow */}

      <motion.div
        animate={{
          x: [-40, 25, -40],
          y: [0, -35, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-56
          top-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#d9bf8a]/20
          blur-[180px]
        "
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [0, 45, 0],
          scale: [1.08, 1, 1.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-56
          bottom-0
          h-[820px]
          w-[820px]
          rounded-full
          bg-[#c8a86b]/15
          blur-[220px]
        "
      />

      {/* Center */}

      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[380px]
          w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          blur-[150px]
        "
      />
    </>
  );
}