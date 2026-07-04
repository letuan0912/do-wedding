"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import type { Service } from "@/data/services";

interface Props {
  service: Service;
}

export default function PackageInfo({
  service,
}: Props) {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
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
          }}
        >

          <p className="text-sm uppercase tracking-[6px] text-[#c8a86b]">
            GIỚI THIỆU
          </p>

          <h2 className="mt-5 text-5xl font-extralight text-[#222] leading-tight">
            {service.title}
          </h2>

          <p className="mt-8 leading-9 text-gray-600">
            {service.story}
          </p>

          <div className="mt-12">

            <p className="text-sm uppercase tracking-[6px] text-[#c8a86b]">
              MỨC GIÁ
            </p>

            <h3 className="mt-4 text-4xl font-light text-[#222]">
              {service.price}
            </h3>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
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
          }}
          className="
            rounded-[40px]
            border
            border-[#ece7df]
            bg-[#faf8f5]
            p-10
          "
        >

          <p className="text-sm uppercase tracking-[6px] text-[#c8a86b]">
            BAO GỒM
          </p>

          <div className="mt-10 space-y-6">

            {service.includes.map((item) => (

              <div
                key={item}
                className="flex items-start gap-4"
              >

                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-[#c8a86b]"
                />

                <span className="leading-8 text-gray-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

          <button
            className="
              mt-14
              w-full
              rounded-full
              bg-[#c8a86b]
              px-8
              py-4
              text-white
              transition
              hover:bg-[#b99655]
            "
          >
            Đặt Lịch Tư Vấn
          </button>

        </motion.div>

      </div>

    </section>
  );
}