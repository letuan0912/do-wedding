"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Album } from "@/types/album";

interface Props {
  album: Album;
}

export default function RelatedAlbums({
  album,
}: Props) {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch(
          `/api/album/related/${album.slug}`
        );

        const data = await res.json();

        if (data.success) {
          setAlbums(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, [album.slug]);

  if (!albums.length) return null;

  return (
    <section className="bg-[#faf8f5] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            More Collection
          </p>

          <h2 className="mt-4 text-5xl font-extralight text-[#222]">
            Album Liên Quan
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
            Khám phá thêm những bộ ảnh cùng phong cách.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {albums.map((item) => (

            <motion.div
              key={item._id}
              whileHover={{
                y: -8,
              }}
            >

              <Link
                href={`/album/${item.slug}`}
                className="group block"
              >

                <div className="overflow-hidden rounded-[34px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.06)]">

                  <div className="relative h-[520px] overflow-hidden">

                    <Image
                      src={item.cover}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute left-6 top-6 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[3px] text-white backdrop-blur-xl">
                      {item.category}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <h3 className="text-3xl font-light text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 line-clamp-2 text-white/70">
                        {item.description}
                      </p>

                      <div className="mt-8 flex items-center justify-between">

                        <div>

                          <p className="text-3xl font-light text-white">
                            {item.images.length}
                          </p>

                          <p className="mt-1 text-xs uppercase tracking-[3px] text-white/60">
                            Photos
                          </p>

                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition group-hover:rotate-45 group-hover:bg-[#c8a86b]">

                          <ArrowUpRight
                            size={22}
                            className="text-white"
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}