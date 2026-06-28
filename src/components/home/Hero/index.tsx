"use client";

import Container from "@/components/ui/Container";

import Background from "./Background/Background";
import HeroContent from "./Content/HeroContent";
import HeroVideo from "./HeroVideo";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#fbf8f3]
      "
    >
      <Background />

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
          <HeroContent />

          <HeroVideo />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}