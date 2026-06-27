"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "Minh & Linh",
    location: "TP. Hồ Chí Minh",
    avatar: "/images/avatar1.jpg",
    review:
      "Đội ngũ rất chuyên nghiệp. Bộ ảnh vượt ngoài mong đợi và lưu giữ được rất nhiều cảm xúc.",
  },
  {
    name: "Khánh & Vy",
    location: "Đồng Nai",
    avatar: "/images/avatar2.jpg",
    review:
      "Concept cực đẹp, ekip vui vẻ, chỉnh ảnh rất nhanh và cực kỳ có tâm.",
  },
  {
    name: "Tuấn & Hân",
    location: "Bình Dương",
    avatar: "/images/avatar3.jpg",
    review:
      "Nếu chụp cưới lần nữa chắc chắn vẫn chọn DO WEDDING.",
  },
];
export default function Testimonials() {
  return (
    <section className="py-32 bg-[#faf8f5]">

      <Container>

        <SectionTitle
          subtitle="Testimonials"
          title="KHÁCH HÀNG NÓI GÌ"
          description="Niềm hạnh phúc của khách hàng là động lực lớn nhất của DO WEDDING."
        />

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mt-20"
        >

          {testimonials.map((item) => (

            <SwiperSlide key={item.name}>

              <div className="bg-white rounded-[30px] p-10 shadow-md hover:shadow-xl duration-500 h-full">

                <div className="flex gap-1 text-[#c8a86b] text-xl">

                  ★★★★★

                </div>

                <p className="mt-8 leading-8 text-gray-600">
                  "{item.review}"
                </p>

                <div className="flex items-center gap-4 mt-10">

                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                  />

                  <div>

                    <h4 className="text-xl font-light">
                      {item.name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {item.location}
                    </p>

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </Container>

    </section>
  );
}