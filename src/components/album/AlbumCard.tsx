"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

export default function AlbumCard({ album }: Props) {
  return (
    <Link
      href={`/album/${album.slug}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        {/* Cover */}

        <div className="relative overflow-hidden">

          <Image
            src={album.cover}
            alt={album.title}
            width={900}
            height={1200}
            className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />

          <span className="absolute left-6 top-6 rounded-full bg-[#c8a86b] px-4 py-2 text-xs uppercase tracking-[3px] text-white">
            {album.category}
          </span>

        </div>

        {/* Content */}

        <div className="p-8">

          <h3 className="text-3xl font-light text-[#222]">
            {album.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-500">
            {album.description}
          </p>

          <div className="mt-8 flex items-center justify-between">

            <span className="text-sm uppercase tracking-[3px] text-[#c8a86b]">
              {album.images.length} Photos
            </span>

            <ArrowRight
              size={22}
              className="transition duration-300 group-hover:translate-x-2"
            />

          </div>

        </div>

      </div>
    </Link>
  );
}