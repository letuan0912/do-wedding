"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Minh Anh & Gia Huy",
    content:
      "DO Wedding đã giúp chúng mình lưu giữ những khoảnh khắc đẹp nhất. Đội ngũ rất chuyên nghiệp và tận tâm từ đầu đến cuối.",
  },
  {
    name: "Thảo Vy & Quốc Bảo",
    content:
      "Bộ ảnh và Wedding Film vượt ngoài mong đợi. Mọi chi tiết đều được chăm chút rất chỉn chu và đầy cảm xúc.",
  },
  {
    name: "Thanh Tùng & Ngọc Hân",
    content:
      "Từ khâu tư vấn đến ngày chụp đều rất nhẹ nhàng. Thành phẩm khiến cả gia đình đều vô cùng hài lòng.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            KHÁCH HÀNG
          </p>

          <h2 className="mt-6 text-5xl font-extralight text-[#222]">
            Những Câu Chuyện
            <br />
            Được Viết Bằng Cảm Xúc
          </h2>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
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
                duration: .6,
                delay: index * .15,
              }}
              className="
                rounded-[36px]
                border
                border-[#ece7df]
                bg-[#faf8f5]
                p-10
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <div className="mb-8 flex gap-1">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="#c8a86b"
                    className="text-[#c8a86b]"
                  />

                ))}

              </div>

              <p className="leading-8 text-gray-600">
                "{item.content}"
              </p>

              <div className="mt-10">

                <h4 className="text-xl font-light text-[#222]">
                  {item.name}
                </h4>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}