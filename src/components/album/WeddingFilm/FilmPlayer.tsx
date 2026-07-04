"use client";

import { motion } from "framer-motion";

interface Props {
  video: string;
  cover?: string;
}

export default function FilmPlayer({
  video,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative group"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -inset-8
          rounded-[60px]
          bg-[#c8a86b]/20
          blur-[90px]
          opacity-0
          transition
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Video Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-black
          shadow-[0_40px_120px_rgba(0,0,0,.35)]
        "
      >
        {/* Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            aspect-video
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-black/20
          "
        />

        {/* Reflection */}

        <motion.div
          animate={{
            x: ["-180%", "220%"],
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
            w-40
            -rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            blur-xl
          "
        />

        {/* LIVE CINEMA */}

        <div
          className="
            absolute
            left-8
            top-8
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-3
            text-xs
            uppercase
            tracking-[3px]
            text-white
            backdrop-blur-xl
          "
        >
          LIVE CINEMA
        </div>

        {/* 4K Badge */}

        <div
          className="
            absolute
            right-8
            top-8
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-3
            text-xs
            uppercase
            tracking-[3px]
            text-white
            backdrop-blur-xl
          "
        >
          4K CINEMA
        </div>

        {/* Bottom Info */}

        <div
          className="
            absolute
            bottom-8
            left-8
          "
        >
          <p className="text-xs uppercase tracking-[6px] text-[#d6b16b]">
            Wedding Film
          </p>

          <h3 className="mt-3 text-3xl font-extralight text-white">
            Every Love Story
            <br />
            Deserves A Beautiful Film
          </h3>
        </div>

        {/* Duration */}

        <div
          className="
            absolute
            bottom-8
            right-8
            rounded-full
            border
            border-white/20
            bg-black/40
            px-4
            py-2
            text-sm
            text-white
            backdrop-blur-xl
          "
        >
          06:23
        </div>
      </div>
    </motion.div>
  );
}