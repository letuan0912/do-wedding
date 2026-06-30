"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

export default function FeaturedImage({
  album,
}: Props) {
  return (
    <div className="relative">

      {/* Glow */}

      <div className="absolute inset-0 scale-105 rounded-[40px] bg-[#d8bf91]/20 blur-[70px]" />

      <AnimatePresence mode="wait">

        <motion.div
          key={album.id}
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[36px]
            bg-white
            shadow-[0_35px_90px_rgba(0,0,0,.12)]
          "
        >

          <Image
            src={album.cover}
            alt={album.title}
            width={1200}
            height={1600}
            className="
              h-[620px]
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          {/* Reflection */}

          <motion.div
            animate={{
              x: ["-180%", "250%"],
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
              w-24
              -rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
              blur-xl
            "
          />

          {/* Category */}

          <div
            className="
              absolute
              left-6
              top-6
              rounded-full
              border
              border-white/20
              bg-white/15
              px-5
              py-2
              text-xs
              uppercase
              tracking-[4px]
              text-white
              backdrop-blur-xl
            "
          >
            {album.category}
          </div>

          {/* Bottom */}

          <div className="absolute bottom-8 left-8 right-8">

            <p className="text-white/80 uppercase tracking-[4px] text-xs">
              Featured Collection
            </p>

            <h3 className="mt-3 text-4xl font-light text-white">
              {album.title}
            </h3>

          </div>

        </motion.div>

      </AnimatePresence>

    </div>
  );
}