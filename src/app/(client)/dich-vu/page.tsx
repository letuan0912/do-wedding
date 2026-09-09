import Hero from "@/components/services/Hero/Hero";
import LuxuryShowcase from "@/components/services/Showcase/LuxuryShowcase";
import LuxuryTimeline from "@/components/services/Process/LuxuryTimeline";
import LuxuryStats from "@/components/services/Hero/LuxuryStats";
import CTA from "@/components/services/CTA/CTA";
import LuxuryFilm from "@/components/services/Hero/LuxuryFilm";
import Testimonials from "@/components/services/Social/Testimonials";
import InstagramGallery from "@/components/services/Social/InstagramGallery";

import type { Service } from "@/types/service";

type Review = {
  _id: string;
  name: string;
  location?: string;
  content: string;
  rating?: number;
};

type HomePage = {
  timelineSubtitle: string;
  timelineTitle: string;
  timelineSteps: {
    number: string;
    title: string;
    description: string;
  }[];
};

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

  return data.data ?? [];
}

async function getReviews(): Promise<Review[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/review`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data.data ?? [];
}

async function getHomepage(): Promise<HomePage | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/homepage`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  return data.data ?? null;
}

export default async function DichVuPage() {
  const [services, reviews, homepage] =
    await Promise.all([
      getServices(),
      getReviews(),
      getHomepage(),
    ]);

  const galleryImages = services
    .flatMap((service) => service.gallery || [])
    .slice(0, 12);

  return (
    <main className="overflow-hidden bg-white">
      <Hero />

      <LuxuryStats />

      <LuxuryFilm />

      <LuxuryShowcase
        services={services}
      />

      <LuxuryTimeline
        subtitle={
          homepage?.timelineSubtitle ||
          "QUY TRÌNH"
        }
        title={
          homepage?.timelineTitle ||
          "Đồng Hành Cùng Bạn Từ Ý Tưởng Đến Kỷ Niệm"
        }
        steps={
          homepage?.timelineSteps || []
        }
      />

      <Testimonials
        reviews={reviews}
      />

      <InstagramGallery
        images={galleryImages}
      />

      <CTA />
    </main>
  );
}