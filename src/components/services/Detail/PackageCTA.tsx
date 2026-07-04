"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PackageCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] py-32">

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c8a86b]/20
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
        >

          <p className="text-sm uppercase tracking-[8px] text-[#c8a86b]">
            DO WEDDING
          </p>

          <h2 className="mt-6 text-5xl font-extralight leading-tight text-white md:text-6xl">
            Sẵn Sàng Lưu Giữ
            <br />
            Khoảnh Khắc Đẹp Nhất?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/70">
            Hãy để DO Wedding đồng hành cùng bạn từ những ý tưởng đầu tiên
            cho đến khi hoàn thiện bộ ảnh và thước phim cưới trọn vẹn.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link
              href="/lien-he"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#c8a86b]
                px-8
                py-4
                text-white
                transition
                hover:bg-[#b99655]
              "
            >
              Đặt Lịch Tư Vấn

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/album"
              className="
                rounded-full
                border
                border-white/20
                px-8
                py-4
                text-white
                transition
                hover:bg-white
                hover:text-black
              "
            >
              Xem Album
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}