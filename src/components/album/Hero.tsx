import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[75vh] overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="Wedding Album"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white px-6">

          <p className="uppercase tracking-[8px] text-[#d4b06a] text-sm">
            DO WEDDING
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-extralight tracking-wide">
            ALBUM
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-200 leading-8">
            Khám phá những bộ ảnh cưới mang phong cách sang trọng,
            tinh tế và giàu cảm xúc được thực hiện bởi DO WEDDING.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/lien-he"
              className="rounded-full bg-[#c8a86b] px-10 py-4 hover:bg-[#b79555] duration-300"
            >
              ĐẶT LỊCH CHỤP
            </Link>

            <a
              href="#gallery"
              className="rounded-full border border-white px-10 py-4 hover:bg-white hover:text-black duration-300"
            >
              KHÁM PHÁ
            </a>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">

        <p className="text-xs tracking-[5px] uppercase">
          Scroll
        </p>

        <div className="text-2xl text-center mt-2">
          ↓
        </div>

      </div>

    </section>
  );
}