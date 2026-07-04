"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tư Vấn",
    description:
      "Lắng nghe mong muốn, tư vấn concept, địa điểm và gói dịch vụ phù hợp.",
  },
  {
    number: "02",
    title: "Lên Concept",
    description:
      "Xây dựng ý tưởng, lựa chọn trang phục, makeup và chuẩn bị lịch trình.",
  },
  {
    number: "03",
    title: "Chụp & Quay",
    description:
      "Thực hiện buổi chụp với đội ngũ nhiếp ảnh và quay phim chuyên nghiệp.",
  },
  {
    number: "04",
    title: "Hậu Kỳ",
    description:
      "Chỉnh màu, retouch ảnh và dựng Wedding Film theo phong cách điện ảnh.",
  },
  {
    number: "05",
    title: "Bàn Giao",
    description:
      "Hoàn thiện album, video và bàn giao toàn bộ sản phẩm đúng tiến độ.",
  },
];

export default function LuxuryTimeline() {
  return (
    <section className="bg-[#faf8f5] py-36">

      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-24 text-center">

          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            QUY TRÌNH
          </p>

          <h2 className="mt-6 text-5xl font-extralight text-[#222] md:text-6xl">
            Đồng Hành Cùng Bạn
            <br />
            Từ Ý Tưởng Đến Kỷ Niệm
          </h2>

        </div>

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-[22px]
              top-0
              bottom-0
              w-px
              bg-[#d8c29a]
            "
          />

          <div className="space-y-20">

            {steps.map((step, index) => (

              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                className="relative flex gap-10"
              >

                {/* Circle */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c8a86b]
                    bg-white
                    text-sm
                    font-medium
                    text-[#c8a86b]
                    shadow-lg
                  "
                >
                  {step.number}
                </div>

                {/* Content */}

                <div className="pb-4">

                  <h3 className="text-3xl font-light text-[#222]">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-8 text-gray-500">
                    {step.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}