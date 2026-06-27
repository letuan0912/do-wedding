"use client";

import { albums } from "@/data/albums";
import AlbumCard from "./AlbumCard";

interface Props {
  category: string;
}

export default function AlbumGrid({ category }: Props) {
  const filtered =
    category === "all"
      ? albums
      : albums.filter(
          (item) => item.category === category
        );

  return (
    <section className="bg-[#faf8f5] py-24">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-3">

        {filtered.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
          />
        ))}

      </div>

    </section>
  );
}