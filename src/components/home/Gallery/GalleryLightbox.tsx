"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { gallery, GalleryItem } from "@/data/gallery";

import GalleryGrid from "./Gallery/GalleryGrid";
import GalleryLightbox from "./Gallery/GalleryLightbox";

const filters = [
  "Tất cả",
  "Studio",
  "Outdoor",
  "Pre Wedding",
];

export default function HomeGallery() {
  const [filter, setFilter] = useState("Tất cả");

  const [selected, setSelected] =
    useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    if (filter === "Tất cả") return gallery;

    return gallery.filter(
      (item) => item.category === filter
    );
  }, [filter]);

  const currentIndex = filtered.findIndex(
    (item) => item.id === selected?.id
  );

  const prev = () => {
    if (currentIndex <= 0)
      setSelected(filtered[filtered.length - 1]);
    else
      setSelected(filtered[currentIndex - 1]);
  };

  const next = () => {
    if (currentIndex >= filtered.length - 1)
      setSelected(filtered[0]);
    else
      setSelected(filtered[currentIndex + 1]);
  };

  return (
    <Section className="bg-[#faf8f4]">

      <Container>

        <SectionTitle
          eyebrow="Wedding Gallery"
          title="NHỮNG KHOẢNH KHẮC ĐƯỢC LƯU GIỮ"
          description="Mỗi bộ ảnh là một câu chuyện tình yêu được kể bằng cảm xúc và nghệ thuật."
        />

        {/* Filter */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {filters.map((item) => (

            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-6 py-3 text-sm uppercase tracking-[3px] transition-all duration-300

              ${
                filter === item
                  ? "bg-[#c8a86b] text-white shadow-xl"
                  : "border border-[#ddd] bg-white text-[#555] hover:border-[#c8a86b] hover:text-[#c8a86b]"
              }

              `}
            >

              {item}

            </button>

          ))}

        </div>

        {/* Gallery */}

        <div className="mt-20">

          <GalleryGrid
            items={filtered}
            onSelect={setSelected}
          />

        </div>

        {/* Button */}

        <motion.div
          whileHover={{
            y: -4,
          }}
          className="mt-20 flex justify-center"
        >

          <button
            className="group flex items-center gap-3 rounded-full bg-[#c8a86b] px-10 py-5 text-white transition-all duration-300 hover:bg-[#b89559]"
          >

            XEM TOÀN BỘ ALBUM

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </button>

        </motion.div>

      </Container>

      <GalleryLightbox
        images={filtered}
        current={selected}
        onClose={() => setSelected(null)}
        onPrev={prev}
        onNext={next}
      />

    </Section>
  );
}