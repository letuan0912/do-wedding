"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/Container";

import Background from "./Background/Background";
import HeroContent, {
  HeroData,
} from "./Content/HeroContent";
import HeroVideo from "./HeroVideo";
import ScrollIndicator from "./ScrollIndicator";

const initialHero: HeroData = {
  heroBadge: "",

  heroTitle1: "",

  heroHighlight: "",

  heroTitle2: "",

  heroDescription: "",

  heroPrimaryButtonText: "",

  heroPrimaryButtonLink: "",

  heroSecondaryButtonText: "",

  heroSecondaryButtonLink: "",
};

interface HomepageResponse extends HeroData {
  heroBackground: string;
  heroVideo: string;
  heroPoster: string;
}

const initialData: HomepageResponse = {
  ...initialHero,

  heroBackground: "",

  heroVideo: "",

  heroPoster: "",
};

export default function Hero() {
  const [data, setData] =
    useState<HomepageResponse>(initialData);

  useEffect(() => {
    async function loadHomepage() {
      try {
        const res = await fetch("/api/homepage", {
          cache: "no-store",
        });

        const result = await res.json();

        if (result.success) {
          setData({
            ...initialData,
            ...result.data,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadHomepage();
  }, []);

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#fbf8f3]
      "
    >
      <Background
        background={data.heroBackground}
      />

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-screen
            items-center
            pt-24
            pb-12
            gap-10
            lg:grid-cols-[0.88fr_1.12fr]
            lg:gap-14
            xl:gap-20
          "
        >
          <HeroContent
            hero={data}
          />

          <HeroVideo
            video={data.heroVideo}
            poster={data.heroPoster}
          />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}