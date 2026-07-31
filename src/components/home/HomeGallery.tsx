"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";

interface Album {
  _id: string;
  title: string;
  slug: string;
  cover: string;
}

export default function HomeGallery() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAlbums() {
      try {
        const res = await fetch("/api/album?limit=6", {
          cache: "no-store",
        });

        const result = await res.json();

        if (result.success) {
          setAlbums(result.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadAlbums();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-28">
        <div className="text-center text-gray-500">
          Đang tải album...
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">
        <FadeIn>
          <div className="text-center">
            <p className="uppercase tracking-[6px] text-[#c8a86b]">
              Gallery
            </p>

            <h2 className="mt-4 text-5xl font-light">
              ALBUM NỔI BẬT
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
              Những khoảnh khắc được lưu giữ theo phong cách sang trọng,
              tinh tế và đầy cảm xúc.
            </p>
          </div>
        </FadeIn>

        {albums.length === 0 ? (
          <div className="mt-20 text-center text-gray-500">
            Chưa có album.
          </div>
        ) : (
          <div className="mt-20 columns-1 gap-6 md:columns-2 lg:columns-3">
            {albums.map((album, index) => (
              <FadeIn
                key={album._id}
                delay={index * 0.08}
              >
                <Link href={`/album/${album.slug}`}>
                  <div className="group relative mb-6 cursor-pointer overflow-hidden rounded-[30px] break-inside-avoid">

                    <Image
                      src={album.cover}
                      alt={album.title}
                      width={700}
                      height={900}
                      className="w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all duration-500 group-hover:opacity-100">

                      <div className="text-center">

                        <Eye
                          size={44}
                          className="mx-auto text-white"
                        />

                        <p className="mt-5 text-lg font-light tracking-[6px] uppercase text-white">
                          XEM ALBUM
                        </p>

                        <div className="mx-auto mt-3 h-px w-14 bg-white/70" />

                        <p className="mt-3 text-sm uppercase tracking-[4px] text-white/90">
                          {album.title}
                        </p>

                      </div>

                    </div>

                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}