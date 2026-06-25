"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Minh & Linh",
    text: "Đội ngũ rất chuyên nghiệp, ảnh đẹp ngoài mong đợi. Từng khoảnh khắc đều được ghi lại rất cảm xúc.",
  },
  {
    name: "Hoàng & Vy",
    text: "Concept cực kỳ tinh tế, ekip nhiệt tình và hỗ trợ từ đầu đến cuối.",
  },
  {
    name: "Phúc & Hân",
    text: "Album hoàn thiện rất đẹp, màu ảnh sang trọng và tự nhiên. Rất đáng để lựa chọn.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#c8a86b]">
            Testimonials
          </p>

          <h2 className="text-5xl font-light mt-4">
            KHÁCH HÀNG NÓI GÌ
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#faf8f5] rounded-3xl p-8 shadow-sm"
            >
              <div className="text-[#c8a86b] text-2xl">
                ★★★★★
              </div>

              <p className="mt-6 text-gray-600 leading-8 italic">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  Studio Package
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}