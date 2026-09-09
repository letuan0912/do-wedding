"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Review = {
  _id: string;
  name: string;
  location?: string;
  content: string;
  rating?: number;
};

type Props = {
  reviews: Review[];
};

export default function Testimonials({
  reviews,
}: Props) {
  if (!reviews?.length) return null;

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
          {reviews.map((item, index) => (
            <motion.div
              key={item._id}
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
                duration: 0.6,
                delay: index * 0.15,
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
                {[...Array(item.rating || 5)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#c8a86b"
                      className="text-[#c8a86b]"
                    />
                  )
                )}
              </div>

              <p className="leading-8 text-gray-600">
                "{item.content}"
              </p>

              <div className="mt-10">
                <h4 className="text-xl font-light text-[#222]">
                  {item.name}
                </h4>

                {item.location && (
                  <p className="mt-2 text-sm text-gray-500">
                    {item.location}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}