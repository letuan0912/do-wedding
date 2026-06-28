"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroHeading() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-8"
    >
      {/* Eyebrow */}

      <motion.p
        variants={item}
        className="
          mb-6
          text-[11px]
          uppercase
          tracking-[7px]
          text-[#b89559]
        "
      >
        Nghệ Thuật Kể Chuyện Bằng Hình Ảnh
      </motion.p>

      {/* Heading */}

      <motion.h1
        variants={item}
        className="
          max-w-[680px]

          text-[44px]
          md:text-[54px]
          xl:text-[60px]

          font-light
          leading-[0.95]
          tracking-[-2px]
          text-[#222]
        "
      >
        Mỗi Khoảnh Khắc

        <br />

        <span className="bg-gradient-to-r from-[#b99245] via-[#d8bf88] to-[#e8d3a6] bg-clip-text text-transparent">
          Đều Là
        </span>

        {" "}

        <span className="text-[#222]">
          Một Kiệt Tác.
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={item}
        className="
          mt-8
          max-w-[560px]

          text-[17px]
          leading-8
          text-[#616161]
        "
      >
        Lưu giữ những khoảnh khắc chân thật bằng ánh sáng,
        cảm xúc và ngôn ngữ điện ảnh để mỗi bộ ảnh trở thành
        một tác phẩm vượt thời gian.
      </motion.p>
    </motion.div>
  );
}