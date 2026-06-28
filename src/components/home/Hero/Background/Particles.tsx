"use client";

import { motion } from "framer-motion";

export default function Particles() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [-20, -260],
            x: [0, (Math.random() - 0.5) * 60],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear",
          }}
          className="absolute rounded-full bg-[#d9bf8a]"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            bottom: -20,
            filter: "blur(.4px)",
          }}
        />
      ))}
    </>
  );
}