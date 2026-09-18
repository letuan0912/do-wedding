"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Counter from "@/components/home/Counter";
import HomeGallery from "@/components/home/HomeGallery";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

import LuxuryTimeline from "@/components/services/Process/LuxuryTimeline";

interface HomePageData {
  timelineSubtitle: string;
  timelineTitle: string;
  timelineSteps: {
    number: string;
    title: string;
    description: string;
  }[];
}

const initialData: HomePageData = {
  timelineSubtitle: "QUY TRÌNH",
  timelineTitle:
    "Đồng Hành Cùng Bạn Từ Ý Tưởng Đến Kỷ Niệm",
  timelineSteps: [],
};

export default function Home() {
  const [data, setData] =
    useState<HomePageData>(initialData);

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
    <main className="bg-white">
      <Hero />

      <About />

      <WhyChooseUs />

      <Counter />

      <LuxuryTimeline
        subtitle={data.timelineSubtitle}
        title={data.timelineTitle}
        steps={data.timelineSteps}
      />

      <Services />

      <HomeGallery />

      <Testimonials />

      <CTA />

      <Contact />
    </main>
  );
}