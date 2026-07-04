import Hero from "@/components/services/Hero/Hero";
import LuxuryShowcase from "@/components/services/Showcase/LuxuryShowcase";
import LuxuryTimeline from "@/components/services/Process/LuxuryTimeline";
import LuxuryStats from "@/components/services/Hero/LuxuryStats";
import CTA from "@/components/services/CTA/CTA";
import LuxuryFilm from "@/components/services/Hero/LuxuryFilm";
import Testimonials from "@/components/services/Social/Testimonials";
import InstagramGallery from "@/components/services/Social/InstagramGallery";

export default function DichVuPage() {
  return (
    <main className="overflow-hidden bg-white">

    <Hero />

    <LuxuryStats />

    <LuxuryFilm />

    <LuxuryShowcase />

    <LuxuryTimeline />

    <Testimonials />

    <InstagramGallery />

    <CTA />

    </main>
  );
}