"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { gallery } from "@/data/gallery";

interface Props {
  category: string;
}

export default function Gallery({ category }: Props) {
  const filteredGallery =
    category === "all"
      ? gallery
      : gallery.filter((item) => item.category === category);

  return (
    <section
      id="gallery"
      className="bg-[#faf8f5] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <PhotoProvider
          maskOpacity={0.95}
          bannerVisible={false}
        >
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">

            {filteredGallery.map((item) => (
              <PhotoView
                key={item.id}
                src={item.image}
              >
                <div className="relative mb-6 cursor-pointer break-inside-avoid overflow-hidden rounded-3xl group">

                  <Image
                    src={item.image}
                    alt={`Album ${item.id}`}
                    width={700}
                    height={900}
                    className="w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100">

                    <Eye
                      size={42}
                      className="text-white"
                    />

                    <h3 className="mt-5 text-2xl font-light text-white">
                    {item.title}
                    </h3>

                    <p className="mt-2 uppercase tracking-[4px] text-[#d8bc84]">
                    {item.category}
                    </p>

                  </div>

                </div>
              </PhotoView>
            ))}

          </div>
        </PhotoProvider>

      </div>
    </section>
  );
}