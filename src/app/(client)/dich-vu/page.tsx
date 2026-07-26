import Hero from "@/components/services/Hero/Hero";
import LuxuryShowcase from "@/components/services/Showcase/LuxuryShowcase";
import LuxuryTimeline from "@/components/services/Process/LuxuryTimeline";
import LuxuryStats from "@/components/services/Hero/LuxuryStats";
import CTA from "@/components/services/CTA/CTA";
import LuxuryFilm from "@/components/services/Hero/LuxuryFilm";
import Testimonials from "@/components/services/Social/Testimonials";
import InstagramGallery from "@/components/services/Social/InstagramGallery";

import type { Service } from "@/types/service";

async function getServices(): Promise<Service[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/service`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data.data;
}

export default async function DichVuPage() {
  const services = await getServices();

  return (
    <main className="overflow-hidden bg-white">
      <Hero />

      <LuxuryStats />

      <LuxuryFilm />

      <LuxuryShowcase services={services} />

      <LuxuryTimeline />

      <Testimonials />

      <InstagramGallery />

      <CTA />
    </main>
  );
}