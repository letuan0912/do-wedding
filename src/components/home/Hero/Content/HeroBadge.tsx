"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="inline-block"
    >
      <motion.div
        whileHover={{
          y: -2,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-full
          border
          border-[#e8d9b8]
          bg-white/75
          px-6
          py-3
          backdrop-blur-xl
          shadow-[0_15px_40px_rgba(0,0,0,.06)]
        "
      >
        {/* Light Sweep */}

        <motion.div
          animate={{
            x: ["-150%", "250%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          className="
            absolute
            inset-y-0
            w-20
            -rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/60
            to-transparent
            blur-lg
          "
        />

        <div className="relative z-10 flex items-center gap-3">

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c8a86b]/10">

            <Sparkles
              size={16}
              className="text-[#c8a86b]"
            />

          </div>

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[4px]
              text-[#8f6b34]
            "
          >
            Luxury Wedding Studio
          </span>

        </div>
      </motion.div>
    </motion.div>
  );
}