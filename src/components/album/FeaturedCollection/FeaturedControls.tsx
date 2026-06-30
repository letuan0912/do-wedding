"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function FeaturedControls({
  current,
  total,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="mt-14 flex items-center justify-between">

      {/* Counter */}

      <div className="flex items-center gap-4">

        <span className="text-3xl font-light text-[#222]">
          {String(current + 1).padStart(2, "0")}
        </span>

        <div className="h-px w-14 bg-[#d9c49a]" />

        <span className="text-lg text-gray-400">
          {String(total).padStart(2, "0")}
        </span>

      </div>

      {/* Buttons */}

      <div className="flex items-center gap-4">

        <button
          onClick={onPrev}
          className="
            group
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-[#eadfc5]
            bg-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#c8a86b]
            hover:bg-[#c8a86b]
          "
        >
          <ChevronLeft
            size={22}
            className="text-[#222] transition group-hover:text-white"
          />
        </button>

        <button
          onClick={onNext}
          className="
            group
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#c8a86b]
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#b89457]
          "
        >
          <ChevronRight
            size={22}
            className="text-white"
          />
        </button>

      </div>

    </div>
  );
}