"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Clock3,
  MapPin,
} from "lucide-react";

import type { Album } from "@/data/albums";

interface Props {
  album: Album;
}

const stats = (album: Album) => [
  {
    icon: Camera,
    value: `${album.images.length}`,
    label: "Photos",
  },
  {
    icon: Clock3,
    value: "01",
    label: "Day Shooting",
  },
  {
    icon: MapPin,
    value: "HCM",
    label: "Location",
  },
];

export default function AlbumInfo({
  album,
}: Props) {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto grid max-w-7xl gap-24 px-6 lg:grid-cols-[1.1fr_.9fr]">

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
            duration: .8,
          }}
        >

          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">

            The Story

          </p>

          <h2 className="mt-6 text-5xl font-extralight leading-tight text-[#222]">

            {album.title}

          </h2>

          <p className="mt-10 text-lg leading-9 text-gray-500">

            {album.description}

          </p>

          <p className="mt-8 leading-9 text-gray-500">

            Mỗi bộ ảnh cưới đều là một hành trình riêng,
            nơi cảm xúc chân thật được lưu giữ bằng ánh sáng,
            bố cục và những khoảnh khắc tự nhiên nhất.

            Chúng tôi không chỉ chụp ảnh,
            mà còn kể lại câu chuyện tình yêu của hai bạn
            theo cách tinh tế và vượt thời gian.

          </p>

          <motion.a
            href="/lien-he"
            whileHover={{
              x: 6,
            }}
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#c8a86b]
              px-8
              py-4
              text-white
              transition
              hover:bg-[#b89555]
            "
          >

            Đặt lịch tư vấn

            <ArrowRight size={18} />

          </motion.a>

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
            duration: .8,
          }}
          className="
            rounded-[36px]
            border
            border-[#efe8dc]
            bg-[#faf8f5]
            p-10
          "
        >

          <div className="space-y-10">

            {stats(album).map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.label}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#ece5d8]
                    pb-8
                    last:border-none
                    last:pb-0
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#c8a86b]/10
                      "
                    >

                      <Icon
                        size={22}
                        className="text-[#c8a86b]"
                      />

                    </div>

                    <span className="uppercase tracking-[3px] text-gray-500">

                      {item.label}

                    </span>

                  </div>

                  <span className="text-4xl font-extralight text-[#222]">

                    {item.value}

                  </span>

                </div>

              );

            })}

          </div>

        </motion.div>

      </div>

    </section>
  );
}