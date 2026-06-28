"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Clapperboard,
  Sparkles,
  Gem,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Fine Art",
  },
  {
    icon: Clapperboard,
    title: "Wedding Film",
  },
  {
    icon: Sparkles,
    title: "Concept Riêng",
  },
  {
    icon: Gem,
    title: "Luxury Makeup",
  },
];

export default function HeroFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8, delay: .7 }}
      className="mt-10 flex flex-wrap gap-3"
    >
      {features.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            className="
              flex
              items-center
              gap-2

              rounded-full

              border
              border-[#eadfc5]

              bg-white/80

              px-5
              py-3

              backdrop-blur-xl

              shadow-[0_10px_30px_rgba(0,0,0,.05)]
            "
          >
            <Icon
              size={15}
              className="text-[#c8a86b]"
            />

            <span className="text-sm font-medium text-[#333]">
              {item.title}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}