"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import type { Service } from "@/types/service";
interface Props {
  service: Service;
}

export default function DetailHero({
  service,
}: Props) {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-black">

      {/* Cover */}

      {service.cover && (
  <Image
    src={service.cover}
    alt={service.title}
    fill
    priority
    className="object-cover"
  />
)}

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Gold Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c8a86b]/20
          blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24">

        {/* Breadcrumb */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .5,
          }}
          className="
            mb-10
            flex
            items-center
            gap-2
            text-sm
            text-white/70
          "
        >

          <Link
            href="/"
            className="transition hover:text-white"
          >
            Trang Chủ
          </Link>

          <ChevronRight size={16} />

          <Link
            href="/dich-vu"
            className="transition hover:text-white"
          >
            Dịch Vụ
          </Link>

          <ChevronRight size={16} />

          <span className="text-white">
            {service.title}
          </span>

        </motion.div>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .15,
          }}
          className="
            text-xs
            uppercase
            tracking-[10px]
            text-[#d6b16b]
          "
        >
          {service.subtitle}
        </motion.p>

        {/* Title */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .3,
          }}
          className="
            mt-6
            max-w-4xl
            text-6xl
            font-extralight
            leading-tight
            text-white
            md:text-7xl
          "
        >
          {service.title}
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: .45,
          }}
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-9
            text-white/75
          "
        >
          {service.shortDescription}
        </motion.p>

        {/* Bottom */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .6,
          }}
          className="
            mt-14
            flex
            flex-wrap
            items-center
            gap-6
          "
        >

          {/* Price */}

          <div>

            <p className="text-xs uppercase tracking-[6px] text-[#d6b16b]">
              Chi Phí
            </p>

            <h3 className="mt-2 text-4xl font-light text-white">
              {service.price}
            </h3>

          </div>

          {/* Divider */}

          <div className="hidden h-14 w-px bg-white/20 lg:block" />

          {/* Button */}

          <Link
            href="/lien-he"
            className="
              inline-flex
              items-center
              gap-3
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

            <ArrowRight size={18} />

          </Link>

        </motion.div>

      </div>

    </section>
  );
}