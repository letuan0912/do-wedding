import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="DO Wedding"
        fill
        priority
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white px-6">

          <p className="uppercase tracking-[8px] text-sm text-[#d9bf8a]">
            Luxury Wedding Studio
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-extralight tracking-wide">
            DO WEDDING
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
            Lưu giữ khoảnh khắc hạnh phúc bằng những bộ ảnh cưới sang trọng,
            tinh tế và đầy cảm xúc.
          </p>

          <div className="mt-12 flex justify-center gap-5">

            <Link
              href="/lien-he"
              className="bg-[#c8a86b] px-10 py-4 rounded-full hover:bg-[#b79452] transition"
            >
              ĐẶT LỊCH TƯ VẤN
            </Link>

            <Link
              href="/album"
              className="border border-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              XEM ALBUM
            </Link>

          </div>

        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-center text-white">

        <p className="uppercase tracking-[6px] text-xs">
          Scroll
        </p>

        <div className="text-2xl mt-2">
          ↓
        </div>

      </div>

    </section>
  );
}