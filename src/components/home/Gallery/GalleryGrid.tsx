"use client";

import { GalleryItem } from "@/data/gallery";
import GalleryCard from "./GalleryCard";

type Props = {
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
};

export default function GalleryGrid({
  items,
  onSelect,
}: Props) {
  return (
    <div className="columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">

      {items.map((item, index) => (

        <div
          key={item.id}
          className="break-inside-avoid"
        >

          <GalleryCard
            item={item}
            index={index}
            onClick={() => onSelect(item)}
          />

        </div>

      ))}

    </div>
  );
}