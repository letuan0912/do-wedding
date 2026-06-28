"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-10 flex flex-wrap items-center gap-4"
    >
      {/* Primary */}

      <motion.div
        whileHover={{
          y: -3,
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.98,
        }}
      >
        <Link
          href="/lien-he"
          className="
            group
            relative
            flex
            h-14
            items-center
            gap-3
            overflow-hidden
            rounded-full
            bg-[#c8a86b]
            px-8
            font-medium
            tracking-[0.2px]
            text-white
            shadow-[0_15px_35px_rgba(200,168,107,.28)]
            transition-all
            duration-300
            hover:bg-[#bb995a]
          "
        >
          {/* Luxury shimmer */}

          <motion.div
            animate={{
              x: ["-180%", "260%"],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2,
            }}
            className="
              absolute
              inset-y-0
              w-16
              -rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent
              blur-lg
            "
          />

          <span className="relative z-10">
            Đặt lịch tư vấn
          </span>

          <ArrowRight
            size={18}
            className="
              relative
              z-10
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </motion.div>

      {/* Secondary */}

      <motion.button
        whileHover={{
          y: -3,
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          group
          flex
          h-14
          items-center
          gap-3
          rounded-full
          border
          border-[#eadfc7]
          bg-white/80
          px-7
          backdrop-blur-xl
          shadow-[0_12px_30px_rgba(0,0,0,.05)]
          transition-all
          duration-300
          hover:border-[#c8a86b]
          hover:bg-white
        "
      >
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#c8a86b]/10
            transition
            duration-300
            group-hover:bg-[#c8a86b]
          "
        >
          <Play
            size={14}
            className="
              ml-0.5
              fill-[#c8a86b]
              text-[#c8a86b]
              transition
              duration-300
              group-hover:fill-white
              group-hover:text-white
            "
          />
        </div>

        <span className="font-medium text-[#222]">
          Xem Showreel
        </span>
      </motion.button>
    </motion.div>
  );
}