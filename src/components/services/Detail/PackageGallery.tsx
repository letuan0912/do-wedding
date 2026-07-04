"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { Service } from "@/data/services";

interface Props {
  service: Service;
}

export default function PackageGallery({
  service,
}: Props) {
  return (
    <section className="bg-[#faf8f5] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[6px] text-[#c8a86b]">
            THƯ VIỆN
          </p>

          <h2 className="mt-5 text-5xl font-extralight text-[#222]">
            Hình Ảnh Dịch Vụ
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-500">
            Một vài khoảnh khắc nổi bật được thực hiện bởi đội ngũ
            DO Wedding.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {service.gallery.map((image, index) => (

            <motion.div
              key={image}
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
                duration: .5,
                delay: index * .1,
              }}
              className="
                group
                overflow-hidden
                rounded-[32px]
              "
            >

              <Image
                src={image}
                alt={service.title}
                width={1200}
                height={900}
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}