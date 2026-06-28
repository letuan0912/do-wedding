"use client";

import { motion } from "framer-motion";

export default function LightSweep() {
  return (
    <motion.div
      animate={{
        x: ["-30%", "180%"],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "linear",
      }}
      className="
        absolute
        -left-1/2
        top-0
        h-full
        w-[520px]
        rotate-[18deg]
        bg-gradient-to-r
        from-transparent
        via-white/35
        to-transparent
        blur-[120px]
      "
    />
  );
}