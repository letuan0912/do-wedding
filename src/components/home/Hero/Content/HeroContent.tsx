"use client";

import { motion } from "framer-motion";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroFeatures from "./HeroFeatures";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        z-10
        mx-auto
        max-w-2xl

        lg:mx-0
      "
    >
      <HeroBadge />

      <HeroHeading />

      <HeroButtons />

      <HeroFeatures />
    </motion.div>
  );
}