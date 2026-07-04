"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] pt-44 pb-28">

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#c8a86b]/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

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
          className="mx-auto max-w-4xl text-center"
        >

          <p className="text-sm uppercase tracking-[8px] text-[#c8a86b]">
            DỊCH VỤ
          </p>

          <h1 className="mt-8 text-5xl md:text-7xl font-extralight leading-tight text-[#222]">
            Đồng Hành Cùng Bạn
            <br />
            Trong Từng Khoảnh Khắc
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-600">
            DO Wedding mang đến những gói dịch vụ cưới cao cấp,
            được thiết kế dành riêng cho từng cặp đôi,
            từ chụp ảnh cưới, váy cưới đến Wedding Day,
            với phong cách sang trọng, tinh tế và giàu cảm xúc.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link
              href="#services"
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
              Khám Phá Dịch Vụ

              <ArrowRight size={18} />
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}