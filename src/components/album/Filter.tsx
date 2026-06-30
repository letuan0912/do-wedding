"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Tất cả",
    value: "all",
  },
  {
    label: "Studio",
    value: "studio",
  },
  {
    label: "Ngoại cảnh",
    value: "outdoor",
  },
  {
    label: "Wedding Day",
    value: "wedding",
  },
];

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function Filter({
  value,
  onChange,
}: Props) {
  return (
    <section className="bg-[#faf8f5] py-10">

      <div className="mx-auto flex max-w-7xl justify-center px-6">

        <div
          className="
            flex
            flex-wrap
            items-center
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

            const active = value === item.value;

            return (
              <button
                key={item.value}
                onClick={() => onChange(item.value)}
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
                    transition

                    ${
                      active
                        ? "text-white"
                        : "text-gray-600 hover:text-[#222]"
                    }
                  `}
                >
                  {item.label}
                </span>

              </button>
            );

          })}

        </div>

      </div>

    </section>
  );
}