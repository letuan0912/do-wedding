"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden py-36">

      {/* Background */}

      <Image
        src="/images/footer-bg.jpg"
        alt="Wedding"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85" />

      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <Container className="relative z-10">

        <div className="mx-auto max-w-4xl text-center text-white">

          <p className="uppercase tracking-[8px] text-[#d9bf8a] text-sm">
            DO WEDDING
          </p>

          <h2 className="mt-8 text-5xl md:text-7xl font-light leading-tight tracking-wide">

            Hãy Để Chúng Tôi

            <br />

            Kể Câu Chuyện Tình Yêu Của Bạn

          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-gray-300">

            Mỗi bộ ảnh cưới là một hành trình cảm xúc.
            Chúng tôi luôn đồng hành để lưu giữ những
            khoảnh khắc đẹp nhất theo phong cách sang trọng,
            tinh tế và đẳng cấp.

          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <Link
              href="/lien-he"
              className="group flex items-center gap-3 rounded-full bg-[#c8a86b] px-10 py-5 font-medium tracking-[2px] transition-all duration-300 hover:scale-105 hover:bg-[#b79452] hover:shadow-[0_20px_45px_rgba(200,168,107,.35)]"
            >
              ĐẶT LỊCH NGAY

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </Link>

            <Link
              href="/album"
              className="rounded-full border border-white/30 px-10 py-5 tracking-[2px] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              XEM ALBUM
            </Link>

          </div>

          <div className="mt-14 flex flex-col items-center gap-4">

            <div className="flex gap-1 text-[#d9bf8a]">

              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />

            </div>

            <p className="text-gray-300">

              Hơn <span className="font-semibold text-white">500+</span> cặp đôi
              đã lựa chọn DO WEDDING để lưu giữ ngày trọng đại.

            </p>

          </div>

        </div>

      </Container>

    </Section>
  );
}