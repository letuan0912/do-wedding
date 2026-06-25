"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import FadeIn from "@/components/ui/FadeIn";

const gallery = [
  { src: "/images/album/album1.jpg", height: "h-[620px]" },
  { src: "/images/album/album2.jpg", height: "h-[420px]" },
  { src: "/images/album/album3.jpg", height: "h-[540px]" },
  { src: "/images/album/album4.jpg", height: "h-[460px]" },
  { src: "/images/album/album5.jpg", height: "h-[640px]" },
  { src: "/images/album/album6.jpg", height: "h-[420px]" },
];

export default function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[6px] text-[#c8a86b]">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-light">
            HÌNH ẢNH THỰC TẾ
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-500 leading-8">
            Những khoảnh khắc được thực hiện từ Studio Package của DO WEDDING.
          </p>
        </div>

        {/* Gallery */}
        <PhotoProvider
          maskOpacity={0.9}
          speed={() => 400}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

            ]{gallery.map((item, index) => (
  <FadeIn
    key={item.src}
    delay={index * 0.08}
  >
    <PhotoView src={item.src}>
      <div className="group relative overflow-hidden rounded-[28px] cursor-pointer shadow-xl">

        <Image
          src={item.src}
          alt="Studio Package"
          width={700}
          height={900}
          className={`w-full ${item.height} object-cover transition-all duration-700 group-hover:scale-110`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">

          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white flex items-center justify-center">
            <Eye
              size={28}
              className="text-white"
            />
          </div>

          <p className="mt-5 text-white tracking-[5px] uppercase text-sm">
            XEM ALBUM
          </p>

        </div>

      </div>
    </PhotoView>
  </FadeIn>
))}

          </div>
        </PhotoProvider>

      </div>
    </section>
  );
}