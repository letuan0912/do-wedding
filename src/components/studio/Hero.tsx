"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}

      <Image
        src="/images/packages/studio.jpg"
        alt="Studio Package"
        fill
        priority
        className="object-cover scale-105 animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/65" />

      {/* Content */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white max-w-5xl px-6">

          <p className="uppercase tracking-[10px] text-sm text-[#d9bf8a]">
            DO WEDDING
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-extralight tracking-[8px] leading-none">
            STUDIO
            <br />
            PACKAGE
          </h1>

          <p className="mt-8 text-xl text-gray-200 tracking-wide">
            Elegant • Luxury • Timeless
          </p>

          <div className="mt-10">

            <p className="uppercase tracking-[4px] text-sm text-gray-300">
              Starting From
            </p>

            <h2 className="mt-2 text-6xl font-extralight text-[#d9bf8a]">
              5.900.000đ
            </h2>

          </div>

          <div className="w-40 h-px bg-white/30 mx-auto my-10"></div>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              href="/lien-he"
              className="px-10 py-4 rounded-full bg-[#c8a86b] text-white hover:bg-[#b79452] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              ĐẶT LỊCH NGAY
            </Link>

            <Link
              href="#detail"
              className="px-10 py-4 rounded-full border border-white/70 backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition-all duration-300"
            >
              XEM CHI TIẾT
            </Link>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">

        <span className="uppercase tracking-[8px] text-xs mb-4">
          Scroll
        </span>

        <div className="w-[1px] h-14 bg-white/30 relative overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-5 bg-white animate-bounce"></div>

        </div>

      </div>

    </section>
  );
}