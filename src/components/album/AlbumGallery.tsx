"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

export default function AlbumGallery({
  album,
}: Props) {
  return (
    <section className="py-24 bg-[#faf8f5]">

      <div className="max-w-7xl mx-auto px-6">

        <PhotoProvider>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">

            {album.images.map((image) => (

              <PhotoView
                key={image}
                src={image}
              >

                <div className="mb-6 overflow-hidden rounded-3xl cursor-pointer">

                  <Image
                    src={image}
                    alt={album.title}
                    width={800}
                    height={1000}
                    className="w-full object-cover hover:scale-110 duration-700"
                  />

                </div>

              </PhotoView>

            ))}

          </div>

        </PhotoProvider>

      </div>

    </section>
  );
}