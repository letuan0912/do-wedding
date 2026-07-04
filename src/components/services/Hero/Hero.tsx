"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/video/wedding/elegant.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

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

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-xs uppercase tracking-[10px] text-[#d6b16b]"
        >
          DO WEDDING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .8,
            delay: .2,
          }}
          className="
            mt-8
            text-6xl
            font-extralight
            leading-tight
            text-white
            md:text-8xl
          "
        >
          Biến Khoảnh Khắc
          <br />
          Thành Ký Ức
          <br />
          Trọn Đời
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .5,
            duration: .8,
          }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-lg
            leading-9
            text-white/75
          "
        >
          Từ bộ ảnh cưới sang trọng đến những thước phim điện ảnh,
          DO Wedding đồng hành cùng bạn lưu giữ những khoảnh khắc
          đẹp nhất bằng sự tinh tế và cảm xúc chân thật.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .8,
          }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >

          <Link
            href="/bang-gia"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#c8a86b]
              px-8
              py-4
              text-white
              transition
              hover:bg-[#b99655]
            "
          >
            Xem Bảng Giá

            <ArrowRight size={18} />

          </Link>

          <Link
            href="/album"
            className="
              rounded-full
              border
              border-white/20
              px-8
              py-4
              text-white
              transition
              hover:bg-white
              hover:text-black
            "
          >
            Khám Phá Album
          </Link>

        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
        "
      >
        <ArrowDown
          size={22}
          className="text-white/70"
        />
      </motion.div>

    </section>
  );
}