"use client";

import { useState } from "react";

import { albums } from "@/data/albums";
// Nếu alias @ đang lỗi thì đổi thành:
// import { albums } from "../../../data/albums";

import FeaturedImage from "./FeaturedImage";
import FeaturedContent from "./FeaturedContent";
import FeaturedControls from "./FeaturedControls";

export default function FeaturedCollection() {
  const [current, setCurrent] = useState(0);

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

            {/* Left */}

            <FeaturedImage album={album} />

            {/* Right */}

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