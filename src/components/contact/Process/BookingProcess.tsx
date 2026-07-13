"use client";

import { motion } from "framer-motion";
import { FileText, PhoneCall, CalendarCheck, Camera } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Điền thông tin",
    desc: "Để lại thông tin và nhu cầu của bạn.",
  },
  {
    icon: PhoneCall,
    number: "02",
    title: "Tư vấn",
    desc: "DO Wedding sẽ liên hệ trong vòng 30 phút.",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Đặt lịch",
    desc: "Thống nhất concept, thời gian và địa điểm.",
  },
  {
    icon: Camera,
    number: "04",
    title: "Thực hiện",
    desc: "Bắt đầu hành trình lưu giữ những khoảnh khắc đẹp.",
  },
];

export default function BookingProcess() {
  return (
    <section className="py-28 bg-white">

      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#c8a86b]">
            Process
          </p>

          <h2 className="mt-5 text-5xl font-light text-[#222]">
            Quy Trình Làm Việc
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .12,
                }}
                className="
                  rounded-[28px]
                  border
                  border-[#eee]
                  bg-[#faf8f5]
                  p-8
                  text-center
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#c8a86b]
                "
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c8a86b]/10">

                  <Icon className="text-[#c8a86b]" size={30} />

                </div>

                <p className="mt-6 text-xs tracking-[5px] text-[#c8a86b]">
                  {step.number}
                </p>

                <h3 className="mt-3 text-2xl font-light">
                  {step.title}
                </h3>

                <p className="mt-4 text-[#666] leading-7">
                  {step.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}