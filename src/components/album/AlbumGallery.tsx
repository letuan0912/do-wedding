"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ArrowUpRight } from "lucide-react";

import "react-photo-view/dist/react-photo-view.css";

import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .7,
    },
  },
};

export default function AlbumGallery({
  album,
}: Props) {
  return (
    <section className="bg-[#faf8f5] py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-extralight text-[#222]">
            Những Khoảnh Khắc Đẹp Nhất
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
            Mỗi bức ảnh đều lưu giữ cảm xúc chân thật và
            câu chuyện riêng của cặp đôi.
          </p>

        </div>

        <PhotoProvider>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: .1,
            }}
            className="
              columns-1

              md:columns-2

              xl:columns-3

              gap-7
            "
          >

            {album.images.map((image, index) => (

              <motion.div
                key={image}
                variants={item}
                className="mb-7 break-inside-avoid"
              >

                <PhotoView src={image}>

                  <div
                    className="
                      group
                      relative
                      cursor-pointer
                      overflow-hidden
                      rounded-[34px]
                    "
                  >

                    <Image
                      src={image}
                      alt={album.title}
                      width={900}
                      height={1200}
                      className="
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent

                        opacity-0

                        transition-all
                        duration-500

                        group-hover:opacity-100
                      "
                    />

                    {/* Counter */}

                    <div
                      className="
                        absolute
                        left-6
                        top-6

                        rounded-full

                        bg-white/10

                        px-4
                        py-2

                        text-xs
                        uppercase

                        tracking-[3px]

                        text-white

                        backdrop-blur-xl

                        opacity-0

                        transition

                        group-hover:opacity-100
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}

                    <div
                      className="
                        absolute

                        right-6
                        bottom-6

                        flex

                        h-14
                        w-14

                        items-center
                        justify-center

                        rounded-full

                        bg-white/15

                        backdrop-blur-xl

                        opacity-0

                        transition-all
                        duration-300

                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >

                      <ArrowUpRight
                        size={22}
                        className="text-white"
                      />

                    </div>

                  </div>

                </PhotoView>

              </motion.div>

            ))}

          </motion.div>

        </PhotoProvider>

      </div>

    </section>
  );
}