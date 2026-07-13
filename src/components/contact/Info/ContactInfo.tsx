"use client";

import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const items = [
  {
    icon: Phone,
    title: "Hotline",
    value: "0909 999 999",
    href: "tel:0909999999",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@dowedding.vn",
    href: "mailto:contact@dowedding.vn",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    value: "TP. Hồ Chí Minh",
    href: "https://maps.google.com/?q=TP+Ho+Chi+Minh",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    value: "08:00 - 21:00",
    href: "#contact-form",
  },
];

export default function ContactInfo() {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-7 md:grid-cols-2">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-[#ece7df]
                  bg-white/80
                  p-10
                  backdrop-blur
                  shadow-[0_12px_35px_rgba(0,0,0,.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#c8a86b]
                  hover:shadow-[0_30px_70px_rgba(200,168,107,.18)]
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-[#c8a86b]/10
                    blur-3xl
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10 flex items-start justify-between">

                  <div>

                    <div
                      className="
                        mb-6
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-[#c8a86b]/10
                        text-[#c8a86b]
                        transition-all
                        duration-300
                        group-hover:bg-[#c8a86b]
                        group-hover:text-white
                        group-hover:rotate-6
                      "
                    >
                      <Icon size={24} />
                    </div>

                    <p className="text-[11px] uppercase tracking-[5px] text-[#b3a28b]">
                      {item.title}
                    </p>

                    <h3 className="mt-3 text-[30px] font-light text-[#222]">
                      {item.value}
                    </h3>

                  </div>

                  <ArrowUpRight
                    size={22}
                    className="
                      text-[#c8a86b]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:opacity-100
                    "
                  />

                </div>

              </a>
            );
          })}

        </div>

      </div>
    </section>
  );
}