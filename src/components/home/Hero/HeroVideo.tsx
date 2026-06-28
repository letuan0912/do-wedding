"use client";

import { motion } from "framer-motion";
import { Play, Star, Users } from "lucide-react";
import FloatingCard from "./FloatingCard";

export default function HeroVideo() {
  return (
    <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="
relative
mx-auto
mt-8

w-[320px]
md:w-[340px]
xl:w-[360px]
"
    style={{
        perspective: "1800px",
    }}
    >
      {/* Floating Cards */}

      <div className="absolute -left-12 top-8 z-30">
        <FloatingCard
          icon={Users}
          title="500+"
          subtitle="Cặp đôi"
        />
      </div>

      <div className="absolute -right-12 bottom-10 z-30">
        <FloatingCard
          icon={Star}
          title="4.9"
          subtitle="Google Review"
          delay={1}
        />
      </div>

      {/* Glow */}

      <div className="absolute inset-0 scale-110 rounded-[60px] bg-[#d9bf8a]/20 blur-[90px]" />

      {/* Video */}

      <motion.div
        whileHover={{
          rotateX: 4,
          rotateY: -4,
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/40
          bg-white/30
          shadow-[0_40px_120px_rgba(0,0,0,.18)]
          backdrop-blur-xl
        "
      >
        {/* Video */}

        <motion.video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            aspect-[9/16]
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-[1.03]
            "
        >
          <source
            src="/video/hero.mp4"
            type="video/mp4"
          />
        </motion.video>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

        {/* Reflection */}

        <motion.div
          animate={{
            x: ["-160%", "240%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          className="
            absolute
            inset-y-0
            w-44
            -rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            blur-2xl
          "
        />

        {/* Play */}

        <motion.button
          whileHover={{
            scale: 1.12,
          }}
          whileTap={{
            scale: 0.95,
          }}
          animate={{
            boxShadow: [
              "0 0 0 rgba(255,255,255,.15)",
              "0 0 40px rgba(255,255,255,.35)",
              "0 0 0 rgba(255,255,255,.15)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-24
            w-24
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/50
            bg-white/20
            backdrop-blur-xl
          "
        >
          <Play
            fill="white"
            size={36}
            className="ml-1 text-white"
          />
        </motion.button>
      </motion.div>

      {/* Live */}

      <motion.div
        animate={{
          opacity: [0.55, 1, 0.55],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-6
          left-6
          flex
          items-center
          gap-3
          rounded-full
          bg-black/50
          px-5
          py-3
          text-white
          backdrop-blur-xl
        "
      >
        <span className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_12px_red]" />

        Đang ghi hình
      </motion.div>
    </motion.div>
  );
}