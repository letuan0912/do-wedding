"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

type Props = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  delay?: number;
};

export default function FloatingCard({
  icon: Icon,
  title,
  subtitle,
  delay = 0,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [-5, 5, -5],
      }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
    >
      <GlassCard
        className="
          relative
          overflow-hidden

          rounded-3xl

          px-5
          py-4

          min-w-[180px]
        "
      >
        {/* Reflection */}

        <motion.div
          animate={{
            x: ["-150%", "220%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "linear",
          }}
          className="
            absolute
            inset-y-0
            w-20

            -rotate-12

            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent

            blur-xl
          "
        />

        <div className="relative z-10 flex items-center gap-3">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-2xl

              bg-[#c8a86b]/10
            "
          >
            <Icon
              size={20}
              className="text-[#c8a86b]"
            />
          </div>

          <div>

            <h3 className="text-xl font-semibold text-[#222]">
              {title}
            </h3>

            <p className="text-sm text-gray-500">
              {subtitle}
            </p>

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
}