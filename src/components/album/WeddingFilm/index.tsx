"use client";

import { motion } from "framer-motion";

import FilmPlayer from "./FilmPlayer";
import FilmStats from "./FilmStats";

interface Props {
  video: string;
  cover: string;
}

export default function WeddingFilm({
  video,
  cover,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-32">

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#c8a86b]/20
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

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
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[8px] text-[#d6b16b]">
            Wedding Film
          </p>

          <h2 className="mt-6 text-5xl font-extralight leading-tight text-white md:text-6xl">
            Every Love Story
            <br />
            Deserves A Beautiful Film
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/70">
            Không chỉ là những bức ảnh,
            chúng tôi lưu giữ cả chuyển động,
            âm thanh và cảm xúc chân thật nhất
            của ngày trọng đại.
          </p>
        </motion.div>

        {/* Player */}

        <FilmPlayer
          video={video}
          cover={cover}
        />

        {/* Stats */}

        <div className="mt-20">
          <FilmStats />
        </div>

      </div>

    </section>
  );
}