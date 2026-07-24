"use client";

import { useEffect, useState } from "react";

import type { Album } from "@/types/album";

import FeaturedImage from "./FeaturedImage";
import FeaturedContent from "./FeaturedContent";
import FeaturedControls from "./FeaturedControls";

export default function FeaturedCollection() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch("/api/album");

        const data = await res.json();

        if (data.success) {
          setAlbums(
            data.data.filter(
              (item: Album) =>
                item.featured &&
                item.isPublished
            )
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, []);

  const album = albums[current];

  const next = () => {
    setCurrent((prev) =>
      prev === albums.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? albums.length - 1 : prev - 1
    );
  };

  if (!album) {
    return null;
  }

  return (
    <section className="bg-[#faf8f5] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            Featured Collection
          </p>

          <h2 className="mt-4 text-5xl font-extralight text-[#222]">
            Bộ ảnh nổi bật
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
            Những bộ ảnh được yêu thích nhất với phong cách điện ảnh,
            ánh sáng tinh tế và cảm xúc chân thật.
          </p>

        </div>

        {/* Main Card */}

        <div
          className="
            overflow-hidden
            rounded-[40px]
            bg-white
            p-8
            shadow-[0_35px_100px_rgba(0,0,0,.06)]
            lg:p-10
          "
        >

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">

            <FeaturedImage album={album} />

            <div className="flex h-full flex-col justify-between">

              <FeaturedContent album={album} />

              <FeaturedControls
                current={current}
                total={albums.length}
                onNext={next}
                onPrev={prev}
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}