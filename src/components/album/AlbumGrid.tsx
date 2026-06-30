"use client";

import { motion } from "framer-motion";

import { albums } from "@/data/albums";
import AlbumCard from "./AlbumCard";

interface Props {
  category: string;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AlbumGrid({
  category,
}: Props) {
  const filtered =
    category === "all"
      ? albums
      : albums.filter(
          (item) => item.category === category
        );

  return (
    <section
      id="gallery"
      className="bg-[#faf8f5] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p
            className="
              text-xs
              uppercase
              tracking-[8px]
              text-[#c8a86b]
            "
          >
            Gallery
          </p>

          <h2
            className="
              mt-4
              text-5xl
              font-extralight
              text-[#222]
            "
          >
            Những Bộ Ảnh Mới Nhất
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              leading-8
              text-gray-500
            "
          >
            Mỗi album là một câu chuyện được kể bằng ánh sáng,
            cảm xúc và những khoảnh khắc chân thật.
          </p>

        </div>

        {/* Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            gap-10

            md:grid-cols-2

            xl:grid-cols-3
          "
        >

          {filtered.map((album) => (

            <AlbumCard
              key={album.id}
              album={album}
            />

          ))}

        </motion.div>

      </div>
    </section>
  );
}