"use client";

import Testimonials from "@/components/studio/Testimonials";
import Hero from "@/components/studio/Hero";
import PackageDetail from "@/components/studio/PackageDetail";
import Gallery from "@/components/studio/Gallery";
import Timeline from "@/components/studio/Timeline";
import CTA from "@/components/studio/CTA";

export default function StudioPackagePage() {
  return (
    <main className="bg-[#faf8f5]">
      <Hero />
      <PackageDetail />
      <Gallery />
      <Timeline />
      <Testimonials />
      <CTA />
    </main>
  );
}