"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Cặp đôi đã đồng hành",
  },
  {
    number: "8+",
    label: "Năm kinh nghiệm",
  },
  {
    number: "1200+",
    label: "Album đã thực hiện",
  },
  {
    number: "100%",
    label: "Khách hàng hài lòng",
  },
];

export default function LuxuryStats() {
  return (
    <section className="bg-[#0b0b0b] py-28">

      <div className="mx-auto max-w-7xl px-6">

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
            duration: .7,
          }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            DO WEDDING
          </p>

          <h2 className="mt-6 text-5xl font-extralight text-white">
            Những Con Số
            <br />
            Biết Nói
          </h2>
        </motion.div>

        <div className="mt-24 grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (

            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .6,
              }}
              className="
                rounded-[36px]
                border
                border-white/10
                bg-white/5
                p-10
                text-center
                backdrop-blur-xl
              "
            >
              <h3 className="text-6xl font-extralight text-[#c8a86b]">
                {item.number}
              </h3>

              <p className="mt-6 leading-8 text-white/70">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}