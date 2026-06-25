import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      <Image
        src="/images/album/album2.jpg"
        alt="CTA"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center text-white max-w-3xl px-6">

          <p className="uppercase tracking-[6px] text-[#d9bf8a]">
            DO WEDDING
          </p>

          <h2 className="text-5xl md:text-7xl font-extralight mt-6 leading-tight">
            READY TO CREATE
            <br />
            YOUR LOVE STORY?
          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-8">
            Hãy để DO WEDDING đồng hành cùng bạn lưu giữ
            những khoảnh khắc đẹp nhất trong cuộc đời.
          </p>

          <div className="mt-12 flex justify-center gap-5 flex-wrap">

            <Link
              href="/lien-he"
              className="bg-[#c8a86b] px-10 py-4 rounded-full hover:bg-[#b79452] duration-300"
            >
              ĐẶT LỊCH NGAY
            </Link>

            <a
              href="tel:0338669679"
              className="border border-white px-10 py-4 rounded-full hover:bg-white hover:text-black duration-300"
            >
              033 866 9679
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}