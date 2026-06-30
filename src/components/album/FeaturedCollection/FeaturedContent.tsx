"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

export default function FeaturedContent({
  album,
}: Props) {
  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={album.id}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.45,
        }}
      >
        {/* Category */}

        <p className="text-xs uppercase tracking-[7px] text-[#c8a86b]">
          {album.category}
        </p>

        {/* Title */}

        <h2 className="mt-5 text-5xl font-extralight leading-tight text-[#222]">
          {album.title}
        </h2>

        {/* Description */}

        <p className="mt-8 max-w-lg leading-8 text-gray-500">
          {album.description}
        </p>

        {/* Info */}

        <div className="mt-10 flex items-center gap-12">

          <div>

            <h3 className="text-4xl font-light text-[#222]">
              {album.images.length}
            </h3>

            <p className="mt-1 text-xs uppercase tracking-[4px] text-gray-400">
              Photos
            </p>

          </div>

          <div>

            <h3 className="text-4xl font-light text-[#222]">
              2026
            </h3>

            <p className="mt-1 text-xs uppercase tracking-[4px] text-gray-400">
              Collection
            </p>

          </div>

        </div>

        {/* Button */}

        <Link
          href={`/album/${album.slug}`}
          className="
            group
            mt-12
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#c8a86b]
            px-8
            py-4
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#b89457]
          "
        >
          Xem Album

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />

        </Link>

      </motion.div>

    </AnimatePresence>
  );
}