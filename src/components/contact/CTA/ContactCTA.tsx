"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-[#181818] py-28">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="uppercase tracking-[6px] text-[#c8a86b]">
          Ready
        </p>

        <h2 className="mt-6 text-5xl font-light leading-tight text-white md:text-7xl">
          Hãy bắt đầu
          <br />
          câu chuyện của bạn.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Chúng tôi mong muốn đồng hành cùng bạn để lưu giữ những khoảnh khắc đẹp nhất bằng sự chỉn chu và cảm xúc.
        </p>

        <Link
          href="/bang-gia"
          className="
            mt-12
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#c8a86b]
            px-10
            py-5
            text-white
            transition-all
            duration-500
            hover:-translate-y-1
            hover:bg-[#b89559]
            hover:shadow-[0_20px_50px_rgba(200,168,107,.35)]
          "
        >
          Xem Bảng Giá

          <ArrowRight size={18} />

        </Link>

      </div>

    </section>
  );
}