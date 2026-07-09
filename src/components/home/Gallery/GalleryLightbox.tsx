"use client";

import { GalleryItem } from "@/data/gallery";

type Props = {
  images: GalleryItem[];
  current: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function GalleryLightbox({
  current,
}: Props) {
  if (!current) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">

      <img
        src={current.image}
        alt={current.title}
        className="max-h-[90vh] max-w-[90vw] rounded-xl"
      />

    </div>
  );
}