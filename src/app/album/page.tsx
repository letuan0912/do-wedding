"use client";

import { useState } from "react";

import Hero from "@/components/album/Hero";
import Filter from "@/components/album/Filter";
import FeaturedCollection from "../../components/album/FeaturedCollection";
import AlbumGrid from "@/components/album/AlbumGrid";
import CTA from "@/components/home/CTA";

export default function AlbumPage() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Hero />

      <FeaturedCollection />

      <Filter
        value={category}
        onChange={setCategory}
      />

      <AlbumGrid category={category} />

      <CTA />
    </>
  );
}