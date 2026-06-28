"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 12, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center text-[#c8a86b]">
        <p className="mb-3 text-xs tracking-[6px] uppercase">
          Scroll
        </p>

        <ChevronDown size={26} />
      </div>
    </motion.div>
  );
}