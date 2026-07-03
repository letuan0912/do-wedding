"use client";

import { motion } from "framer-motion";
import { Camera, Clock3, Film, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Camera,
    value: "350+",
    label: "Photos",
  },
  {
    icon: Clock3,
    value: "8",
    label: "Hours",
  },
  {
    icon: Film,
    value: "4K",
    label: "Cinema",
  },
  {
    icon: Sparkles,
    value: "Premium",
    label: "Editing",
  },
];

export default function FilmStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            className="
              group
              rounded-[30px]
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#d6b16b]/40
              hover:bg-white/10
            "
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6b16b]/20 text-[#d6b16b]">
              <Icon size={28} />
            </div>

            <h3 className="mt-8 text-4xl font-light text-white">
              {item.value}
            </h3>

            <p className="mt-3 uppercase tracking-[4px] text-white/60">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}