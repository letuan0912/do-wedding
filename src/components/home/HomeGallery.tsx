"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import FadeIn from "@/components/ui/FadeIn";

const gallery = [
  {
    src: "/images/album/album1.jpg",
    height: "h-[620px]",
  },
  {
    src: "/images/album/album2.jpg",
    height: "h-[420px]",
  },
  {
    src: "/images/album/album3.jpg",
    height: "h-[540px]",
  },
  {
    src: "/images/album/album4.jpg",
    height: "h-[460px]",
  },
  {
    src: "/images/album/album5.jpg",
    height: "h-[640px]",
  },
  {
    src: "/images/album/album6.jpg",
    height: "h-[420px]",
  },
];

export default function HomeGallery() {
  return (
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-8">

        <FadeIn>

          <div className="text-center">

            <p className="uppercase tracking-[6px] text-[#c8a86b]">
              Gallery
            </p>

            <h2 className="mt-4 text-5xl font-light">
              ALBUM NỔI BẬT
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-gray-500 leading-8">
              Những khoảnh khắc được lưu giữ theo phong cách sang trọng,
              tinh tế và đầy cảm xúc.
            </p>

          </div>

        </FadeIn>

        <PhotoProvider maskOpacity={0.9}>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-20">

            {gallery.map((item, index) => (

              <FadeIn key={item.src} delay={index * 0.08}>

                <PhotoView src={item.src}>

                  <div className="mb-6 overflow-hidden rounded-[30px] cursor-pointer group break-inside-avoid relative">

                    <Image
                      src={item.src}
                      alt=""
                      width={700}
                      height={900}
                      className={`w-full ${item.height} object-cover transition duration-700 group-hover:scale-110`}
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">

                      <Eye
                        size={42}
                        className="text-white"
                      />

                      <p className="mt-4 uppercase tracking-[5px] text-white">
                        XEM ẢNH
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