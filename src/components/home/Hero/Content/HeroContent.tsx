"use client";

import { motion } from "framer-motion";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import HeroFeatures from "./HeroFeatures";

export interface HeroData {
  heroBadge: string;

  heroTitle1: string;

  heroHighlight: string;

  heroTitle2: string;

  heroDescription: string;

  heroPrimaryButtonText: string;

  heroPrimaryButtonLink: string;

  heroSecondaryButtonText: string;

  heroSecondaryButtonLink: string;
}

interface HeroContentProps {
  hero: HeroData;
}

export default function HeroContent({
  hero,
}: HeroContentProps) {
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
      <HeroBadge
        badge={hero.heroBadge}
      />

      <HeroHeading
        title1={hero.heroTitle1}
        highlight={hero.heroHighlight}
        title2={hero.heroTitle2}
        description={hero.heroDescription}
      />

      <HeroButtons
        primaryText={hero.heroPrimaryButtonText}
        primaryLink={hero.heroPrimaryButtonLink}
        secondaryText={hero.heroSecondaryButtonText}
        secondaryLink={hero.heroSecondaryButtonLink}
      />

      <HeroFeatures />
    </motion.div>
  );
}