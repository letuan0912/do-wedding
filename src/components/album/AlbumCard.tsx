"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

export default function AlbumCard({ album }: Props) {
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <Link
        href={`/album/${album.slug}`}
        className="group block"
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[34px]
            bg-white
            shadow-[0_25px_80px_rgba(0,0,0,.06)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_35px_100px_rgba(0,0,0,.12)]
          "
        >
          {/* Image */}

          <div className="relative h-[640px] overflow-hidden">

            <Image
              src={album.cover}
              alt={album.title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition duration-500 group-hover:from-black/90" />

            {/* Category */}

            <div
              className="
                absolute
                left-6
                top-6
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-[11px]
                uppercase
                tracking-[3px]
                text-white
                backdrop-blur-xl
              "
            >
              {album.category}
            </div>

            {/* Bottom */}

            <div className="absolute bottom-0 left-0 right-0 p-8">

              <p className="text-xs uppercase tracking-[4px] text-white/70">
                DO WEDDING
              </p>

              <h3
                className="
                  mt-3
                  text-4xl
                  font-extralight
                  text-white
                  transition
                  duration-300
                  group-hover:-translate-y-1
                "
              >
                {album.title}
              </h3>

              <p
                className="
                  mt-4
                  line-clamp-2
                  max-w-md
                  leading-7
                  text-white/70
                "
              >
                {album.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <div>

                  <p className="text-3xl font-light text-white">
                    {album.images.length}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[3px] text-white/60">
                    Photos
                  </p>

                </div>

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:rotate-45
                    group-hover:bg-[#c8a86b]
                  "
                >
                  <ArrowUpRight
                    size={22}
                    className="text-white"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      </Link>
    </motion.div>
  );
}