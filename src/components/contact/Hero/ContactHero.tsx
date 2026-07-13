"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-44 xl:py-52">

      {/* Glow */}
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#c8a86b]/10 blur-[140px]" />
      <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-white blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[8px] text-[#c8a86b]"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .15, duration: .7 }}
          className="mt-6 text-5xl font-light text-[#222] md:text-7xl"
        >
          Liên Hệ
          <br />
          <span className="bg-gradient-to-r from-[#b89559] to-[#d8bf88] bg-clip-text text-transparent">
            Tư Vấn
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .35 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#666]"
        >
          Chúng tôi luôn sẵn sàng lắng nghe câu chuyện của bạn và
          cùng tạo nên những khoảnh khắc đáng nhớ nhất.
        </motion.p>

      </div>

    </section>
  );
}