"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/album/album1.jpg",
  "/images/album/album2.jpg",
  "/images/album/album3.jpg",
  "/images/album/album4.jpg",
  "/images/album/album5.jpg",
  "/images/album/album6.jpg",
];

export default function InstagramGallery() {
  return (
    <section className="bg-[#faf8f5] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            INSTAGRAM
          </p>

          <h2 className="mt-6 text-5xl font-extralight text-[#222]">
            Theo Dõi Hành Trình
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

          {images.map((image, index) => (

            <motion.div
              key={image}
              initial={{
                opacity: 0,
                scale: .95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              className="
                group
                overflow-hidden
                rounded-[28px]
              "
            >

              <Image
                src={image}
                alt=""
                width={800}
                height={800}
                className="
                  aspect-square
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}