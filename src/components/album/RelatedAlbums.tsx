"use client";

import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

export default function RelatedAlbums({
  album,
}: Props) {
  return (
    <section className="py-20 text-center">

      <h2 className="text-5xl font-light">
        Album Liên Quan
      </h2>

      <p className="mt-5 text-gray-500">
        (Sprint tiếp theo mình sẽ làm carousel đẹp)
      </p>

    </section>
  );
}