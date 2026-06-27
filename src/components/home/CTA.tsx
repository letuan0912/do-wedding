"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* Background */}

      <Image
        src="/images/footer-bg.jpg"
        alt="Wedding"
        fill
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />

      <Container className="relative z-10">

        <div className="max-w-4xl mx-auto text-center text-white">

          <p className="uppercase tracking-[8px] text-[#d9bf8a]">
            Ready To Begin
          </p>

          <h2 className="mt-8 text-5xl md:text-7xl font-extralight leading-tight">
            Hãy Để Chúng Tôi
            <br />
            Kể Câu Chuyện Tình Yêu Của Bạn
          </h2>

          <p className="mt-10 text-lg leading-8 text-gray-300">
            Mỗi bộ ảnh cưới là một hành trình cảm xúc.
            DO WEDDING luôn đồng hành để lưu giữ những
            khoảnh khắc đẹp nhất theo cách tinh tế và
            sang trọng nhất.
          </p>

          <div className="flex justify-center gap-6 mt-14 flex-wrap">

            <Link
              href="/lien-he"
              className="bg-[#c8a86b] px-10 py-5 rounded-full hover:bg-[#b79452] duration-300"
            >
              ĐẶT LỊCH NGAY
            </Link>

            <Link
              href="/album"
              className="border border-white px-10 py-5 rounded-full hover:bg-white hover:text-black duration-300"
            >
              XEM ALBUM
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}