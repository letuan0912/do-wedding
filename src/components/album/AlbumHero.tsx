"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Images, ChevronDown } from "lucide-react";

import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

export default function AlbumHero({
  album,
}: Props) {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}

      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src={album.cover}
          alt={album.title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/20" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center justify-center px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .9,
          }}
          className="max-w-5xl text-center text-white"
        >

          {/* Badge */}

          <div
            className="
              mx-auto
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/10
              px-6
              py-3
              backdrop-blur-xl
            "
          >

            <Camera
              size={18}
              className="text-[#d6b16b]"
            />

            <span className="text-xs uppercase tracking-[5px]">
              Wedding Collection
            </span>

          </div>

          {/* Category */}

          <p className="mt-10 uppercase tracking-[8px] text-[#d6b16b]">

            {album.category}

          </p>

          {/* Title */}

          <h1 className="mt-6 text-6xl font-extralight leading-tight md:text-8xl">

            {album.title}

          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/80">

            {album.description}

          </p>

          {/* Stats */}

          <div className="mt-14 flex flex-wrap justify-center gap-10">

            <div>

              <p className="text-5xl font-extralight">

                {album.images.length}

              </p>

              <p className="mt-2 text-xs uppercase tracking-[4px] text-white/60">

                Photos

              </p>

            </div>

            <div className="h-16 w-px bg-white/20" />

            <div>

              <p className="text-5xl font-extralight">

                4K

              </p>

              <p className="mt-2 text-xs uppercase tracking-[4px] text-white/60">

                Quality

              </p>

            </div>

          </div>

          {/* Button */}

          <motion.a
            href="#gallery"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .97,
            }}
            className="
              mt-14
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#c8a86b]
              px-8
              py-4
              text-white
              transition
              hover:bg-[#b89555]
            "
          >

            <Images size={20} />

            Xem Bộ Ảnh

          </motion.a>

        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          text-center
          text-white
        "
      >

        <p className="text-xs uppercase tracking-[5px] text-white/70">

          Scroll

        </p>

        <ChevronDown
          size={28}
          className="mx-auto mt-3 text-[#d6b16b]"
        />

      </motion.div>

    </section>
  );
}