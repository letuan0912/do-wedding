"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[active];

  return (
  <Section className="bg-[#121212] text-white">

    <Container>

      <SectionTitle
        eyebrow="Testimonials"
        title="KHÁCH HÀNG NÓI GÌ"
        description="Những cảm nhận chân thật từ các cặp đôi đã đồng hành cùng DO WEDDING."
      />
      <div className="mt-20">

  <div className="relative mx-auto max-w-6xl">

    <div className="grid grid-cols-12 items-center gap-6">
      <div className="col-span-2 hidden lg:block">

  <Image
    src={
      testimonials[
        (active - 1 + testimonials.length) %
          testimonials.length
      ].image
    }
    alt=""
    width={300}
    height={500}
    className="h-[340px] rounded-3xl object-cover opacity-30 blur-[1px]"
  />

</div>
<div className="col-span-12 lg:col-span-8">

  <Image
    src={current.image}
    alt={current.name}
    width={1000}
    height={700}
    className="h-[480px] w-full rounded-[40px] object-cover"
  />
  <div className="-mt-12 flex justify-center">

  <Image
    src={current.avatar}
    alt={current.name}
    width={90}
    height={90}
    className="rounded-full border-4 border-white"
  />

</div>
<div className="mt-8 flex justify-center gap-1">

  {Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      size={20}
      fill="#c8a86b"
      color="#c8a86b"
    />
  ))}

</div>
<p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-10 text-gray-300">
  "{current.content}"
</p>

<h3 className="mt-8 text-center text-3xl">
  {current.name}
</h3>

<p className="mt-2 text-center text-gray-400">
  {current.location}
</p>
</div>
<div className="col-span-2 hidden lg:block">

  <Image
    src={
      testimonials[
        (active + 1) %
          testimonials.length
      ].image
    }
    alt=""
    width={300}
    height={500}
    className="h-[340px] rounded-3xl object-cover opacity-30 blur-[1px]"
  />

</div>
<div className="mt-12 flex justify-center gap-5">

  <button
    onClick={prev}
    className="rounded-full border border-white/20 p-4 transition hover:bg-[#c8a86b]"
  >
    <ChevronLeft />
  </button>

  <button
    onClick={next}
    className="rounded-full border border-white/20 p-4 transition hover:bg-[#c8a86b]"
  >
    <ChevronRight />
  </button>

</div>
    </div>

  </div>

</div>

    </Container>

  </Section>
);
}
