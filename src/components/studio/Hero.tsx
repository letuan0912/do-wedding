import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh]">

      <Image
        src="/images/packages/studio.jpg"
        alt="Studio Package"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white max-w-4xl px-6">

          <p className="uppercase tracking-[8px] text-sm text-[#d9bf8a]">
            DO WEDDING
          </p>

          <h1 className="mt-6 text-6xl md:text-8xl font-extralight tracking-wide">
            STUDIO PACKAGE
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Elegant • Luxury • Timeless
          </p>

          <p className="text-gray-400 mt-4">
            Từ
          </p>

          <h2 className="text-5xl font-light text-[#c8a86b]">
            5.900.000đ
          </h2>

          <div className="my-8 border-t border-gray-200"></div>

          <div className="mt-12 flex justify-center gap-5">

            <Link
              href="/lien-he"
              className="bg-[#c8a86b] px-10 py-4 rounded-full hover:bg-[#b79452] duration-300"
            >
              ĐẶT LỊCH NGAY
            </Link>

            <Link
              href="#detail"
              className="border border-white px-10 py-4 rounded-full hover:bg-white hover:text-black duration-300"
            >
              XEM CHI TIẾT
            </Link>

          </div>

        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white animate-bounce">

        <p className="text-xs tracking-[6px] uppercase">
          Scroll
        </p>

        <div className="mt-2 text-2xl">
          ↓
        </div>

      </div>

    </section>
  );
}