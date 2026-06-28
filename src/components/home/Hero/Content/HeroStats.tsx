"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "500+",
    label: "Couples",
  },
  {
    value: "4.9★",
    label: "Google",
  },
  {
    value: "12+",
    label: "Years",
  },
  {
    value: "100%",
    label: "Happy",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8, delay: .4 }}
      className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4"
    >
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            y: -6,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
          }}
          className="
            rounded-3xl
            border
            border-[#ece3cf]
            bg-white/70
            p-6
            backdrop-blur-xl
            shadow-[0_20px_50px_rgba(0,0,0,.05)]
          "
        >
          <h3 className="text-3xl font-light text-[#b89559]">
            {item.value}
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[3px] text-gray-500">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}