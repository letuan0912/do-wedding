"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-32">

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c8a86b]/20
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[8px] text-[#c8a86b]"
        >
          DO WEDDING
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 text-5xl font-extralight leading-tight text-white md:text-6xl"
        >
          Sẵn Sàng Lưu Giữ
          <br />
          Khoảnh Khắc Đẹp Nhất?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/70"
        >
          Hãy để DO Wedding đồng hành cùng bạn tạo nên một bộ ảnh cưới
          và thước phim cưới đầy cảm xúc.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-12"
        >
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-3 rounded-full bg-[#c8a86b] px-8 py-4 text-white transition hover:bg-[#b99655]"
          >
            Đặt Lịch Tư Vấn
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}