"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Camera,
  Sparkles,
  Shirt,
  HeartHandshake,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Camera,
    title: "Photographer Chuyên Nghiệp",
    desc: "Đội ngũ nhiều năm kinh nghiệm, bắt trọn mọi cảm xúc tự nhiên.",
  },
  {
    icon: Sparkles,
    title: "Makeup Cao Cấp",
    desc: "Phong cách trang điểm sang trọng, phù hợp từng gương mặt.",
  },
  {
    icon: Shirt,
    title: "Trang Phục Độc Quyền",
    desc: "Kho váy cưới và vest cao cấp luôn được cập nhật xu hướng mới.",
  },
  {
    icon: HeartHandshake,
    title: "Concept Riêng",
    desc: "Thiết kế concept phù hợp câu chuyện và cá tính của từng cặp đôi.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#faf8f5]">
      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="VÌ SAO CHỌN DO WEDDING"
          description="Chúng tôi không chỉ chụp ảnh cưới mà còn lưu giữ những cảm xúc đẹp nhất trong hành trình tình yêu của bạn."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* LEFT */}

          <div className="relative">

            <div className="overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/images/service1.png"
                alt="DO Wedding"
                width={900}
                height={1200}
                className="w-full h-[720px] object-cover hover:scale-105 duration-700"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-xl p-8 w-72">

              <p className="uppercase tracking-[5px] text-[#c8a86b] text-xs">
                Experience
              </p>

              <h2 className="text-5xl font-light mt-3 text-[#222]">
                8+
              </h2>

              <p className="mt-3 text-gray-500 leading-7">
                Năm kinh nghiệm trong lĩnh vực Wedding Photography.
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            {features.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="flex gap-6 p-7 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 mb-6"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#c8a86b]/10 flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-[#c8a86b]"
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-light text-[#222]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-500 leading-8">
                      {item.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-[#c8a86b]">

                      <CheckCircle2 size={18} />

                      <span className="text-sm">
                        Premium Service
                      </span>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>
      </Container>
    </section>
  );
}