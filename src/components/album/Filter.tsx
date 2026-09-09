"use client";

import { motion } from "framer-motion";

import type { AlbumCategory } from "@/hooks/useAlbums";

interface Props {
  value: string;
  onChange: (value: string) => void;
  categories: AlbumCategory[];
}

export default function Filter({
  value,
  onChange,
  categories,
}: Props) {
  return (
    <section className="bg-[#faf8f5] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-3
            rounded-full
            border
            border-[#ece4d5]
            bg-white
            p-2
            shadow-[0_15px_50px_rgba(0,0,0,.04)]
          "
        >
          {categories.map((item) => {
            const active =
              value === item.value;

            return (
              <button
                key={item.value}
                onClick={() =>
                  onChange(item.value)
                }
                className="
                  relative
                  overflow-hidden
                  rounded-full
                  px-7
                  py-3
                  text-sm
                  font-medium
                  uppercase
                  tracking-[2px]
                  transition
                "
              >
                {active && (
                  <motion.div
                    layoutId="album-filter"
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 28,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-[#c8a86b]
                    "
                  />
                )}

                <span
                  className={`
                    relative
                    z-10
                    flex
                    items-center
                    gap-2
                    whitespace-nowrap
                    transition-colors

                    ${
                      active
                        ? "text-white"
                        : "text-gray-700 hover:text-[#c8a86b]"
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      px-1.5
                      text-[10px]
                      font-semibold
                      transition

                      ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >
                    {item.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}