"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { GalleryItem } from "@/data/gallery";

type Props = {
  item: GalleryItem;
  index: number;
  onClick: () => void;
};

export default function GalleryCard({
  item,
  index,
  onClick,
}: Props) {
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
      }}
      transition={{
        duration: .6,
        delay: index * .08,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative cursor-pointer overflow-hidden rounded-[32px]"
      onClick={onClick}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={800}
        height={1000}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Content */}

      <div className="absolute bottom-0 left-0 right-0 translate-y-10 p-8 text-white transition duration-500 group-hover:translate-y-0">

        <p className="text-xs uppercase tracking-[5px] text-[#d9bf8a]">

          {item.category}

        </p>

        <h3 className="mt-3 text-3xl font-light">

          {item.title}

        </h3>

        <div className="mt-6 flex items-center gap-3">

          <span className="text-sm uppercase tracking-[3px]">

            Xem Album

          </span>

          <ArrowUpRight
            size={18}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />

        </div>

      </div>

    </motion.div>
  );
}