"use client";

import { motion } from "framer-motion";

export default function LuxuryFilm() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-36">

      {/* Gold Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c8a86b]/20
          blur-[170px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <p className="text-xs uppercase tracking-[10px] text-[#d6b16b]">
            CINEMATIC EXPERIENCE
          </p>

          <h2 className="mt-6 text-5xl font-extralight leading-tight text-white md:text-7xl">
            Mỗi Khoảnh Khắc
            <br />
            Đều Xứng Đáng
            <br />
            Được Kể Bằng Điện Ảnh
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/70">
            Không chỉ chụp ảnh, chúng tôi ghi lại cảm xúc bằng
            những thước phim điện ảnh để câu chuyện tình yêu
            được lưu giữ một cách chân thật nhất.
          </p>

        </motion.div>

        {/* Video */}

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="group relative overflow-hidden rounded-[42px]"
        >

          {/* Video */}

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
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
              src="/video/wedding/elegant.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

          {/* Reflection */}

          <motion.div
            animate={{
              x: ["-200%", "250%"],
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
              w-48
              -rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent
              blur-xl
            "
          />

          {/* Badge */}

          <div
            className="
              absolute
              left-8
              top-8
              rounded-full
              border
              border-white/20
              bg-white/10
              px-6
              py-3
              text-xs
              uppercase
              tracking-[4px]
              text-white
              backdrop-blur-xl
            "
          >
            Wedding Film
          </div>

          {/* Quality */}

          <div
            className="
              absolute
              right-8
              top-8
              rounded-full
              border
              border-white/20
              bg-white/10
              px-6
              py-3
              text-xs
              uppercase
              tracking-[4px]
              text-white
              backdrop-blur-xl
            "
          >
            4K CINEMA
          </div>

          {/* Bottom */}

          <div className="absolute bottom-10 left-10">

            <h3 className="text-4xl font-extralight text-white">
              Every Love Story
              <br />
              Deserves A Beautiful Film
            </h3>

          </div>

        </motion.div>

      </div>

    </section>
  );
}