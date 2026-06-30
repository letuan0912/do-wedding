import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[60vh] lg:h-[68vh] overflow-hidden">

      <Image
        src="/images/hero.jpg"
        alt="Wedding Collection"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/55" />

      {/* Content */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="max-w-3xl px-6 text-center text-white">

          <p className="uppercase tracking-[8px] text-[#d8b97a] text-sm">
            COLLECTIONS
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-extralight">
            Bộ Sưu Tập
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-200">
            Mỗi album là một hành trình cảm xúc được ghi lại bằng ánh sáng,
            khoảnh khắc và những câu chuyện chân thật nhất.
          </p>

          <Link
            href="#gallery"
            className="
              mt-12
              inline-flex
              rounded-full
              border
              border-white/30
              bg-white/10
              px-9
              py-4
              backdrop-blur-xl
              transition
              hover:bg-white
              hover:text-black
            "
          >
            Khám phá Album
          </Link>

        </div>

      </div>

    </section>
  );
}