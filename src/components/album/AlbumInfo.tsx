"use client";

import { Camera, Clock3, MapPin } from "lucide-react";
import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

export default function AlbumInfo({ album }: Props) {
  return (
    <section className="bg-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[6px] text-[#c8a86b]">
              Concept
            </p>

            <h2 className="text-5xl font-light mt-5">
              {album.title}
            </h2>

            <p className="mt-8 leading-9 text-gray-600">
              {album.description}
            </p>

          </div>

          <div className="space-y-8">

            <div className="flex items-center gap-5">

              <Camera className="text-[#c8a86b]" />

              <div>

                <h4 className="font-semibold">
                  Số lượng ảnh
                </h4>

                <p className="text-gray-500">
                  {album.images.length} Photos
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <Clock3 className="text-[#c8a86b]" />

              <div>

                <h4 className="font-semibold">
                  Thời gian
                </h4>

                <p className="text-gray-500">
                  1 ngày thực hiện
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <MapPin className="text-[#c8a86b]" />

              <div>

                <h4 className="font-semibold">
                  Địa điểm
                </h4>

                <p className="text-gray-500">
                  TP. Hồ Chí Minh
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}