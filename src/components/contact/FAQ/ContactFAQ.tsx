"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "DO Wedding phản hồi trong bao lâu?",
    answer: "Thông thường trong vòng 30 phút trong giờ làm việc.",
  },
  {
    question: "Có hỗ trợ chụp ngoại tỉnh không?",
    answer: "Có. Chúng tôi nhận chụp trên toàn quốc theo yêu cầu.",
  },
  {
    question: "Khi nào cần đặt lịch?",
    answer: "Nên đặt trước từ 1-3 tháng để có lịch đẹp.",
  },
  {
    question: "Có được tư vấn miễn phí không?",
    answer: "Hoàn toàn miễn phí. Đội ngũ sẽ hỗ trợ lựa chọn concept phù hợp.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#faf8f5] py-28">

      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#c8a86b]">
            FAQ
          </p>

          <h2 className="mt-5 text-5xl font-light text-[#222]">
            Câu Hỏi Thường Gặp
          </h2>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="overflow-hidden rounded-[30px] border border-[#eee] bg-white"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-8 text-left"
              >

                <span className="text-xl font-light">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-500 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >

                <div className="overflow-hidden">

                  <p className="px-7 pb-7 leading-8 text-[#666]">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}