"use client";

import Image from "next/image";
import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

export default function AlbumHero({
  album,
}: Props) {
  return (
    <section className="relative h-[70vh]">

      <Image
        src={album.cover}
        alt={album.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white px-6">

          <p className="uppercase tracking-[6px] text-[#d6b16b]">
            {album.category}
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-extralight">
            {album.title}
          </h1>

          <p className="mt-8 max-w-3xl mx-auto leading-8 text-gray-200">
            {album.description}
          </p>

        </div>

      </div>

    </section>
  );
}