"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";

type HomePageData = {
  heroBadge: string;
  heroTitle1: string;
  heroHighlight: string;
  heroTitle2: string;
  heroDescription: string;
  heroPrimaryButtonText: string;
  heroPrimaryButtonLink: string;
  heroSecondaryButtonText: string;
  heroSecondaryButtonLink: string;
  heroBackground: string;
  heroVideo: string;
  heroPoster: string;
};

export default function Hero() {
  const [data, setData] =
    useState<HomePageData | null>(
      null
    );

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          "/api/homepage",
          {
            cache: "no-store",
          }
        );

        const result =
          await res.json();

        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, []);

  if (!data) return null;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {(data.heroVideo ||
        data.heroBackground) && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={data.heroPoster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src={
              data.heroVideo
            }
            type="video/mp4"
          />
        </video>
      )}

      <div className="absolute inset-0 bg-black/60" />

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
          blur-[170px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-xs uppercase tracking-[10px] text-[#d6b16b]"
        >
          {data.heroBadge}
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-8
            text-6xl
            font-extralight
            leading-tight
            text-white
            md:text-8xl
          "
        >
          {data.heroTitle1}

          <br />

          <span className="text-[#d6b16b]">
            {data.heroHighlight}
          </span>

          <br />

          {data.heroTitle2}
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-lg
            leading-9
            text-white/75
          "
        >
          {data.heroDescription}
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >
          <Link
            href={
              data.heroPrimaryButtonLink ||
              "#"
            }
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
            {
              data.heroPrimaryButtonText
            }

            <ArrowRight
              size={18}
            />
          </Link>

          <Link
            href={
              data.heroSecondaryButtonLink ||
              "#"
            }
            className="
              rounded-full
              border
              border-white/20
              px-8
              py-4
              text-white
              transition
              hover:bg-white
              hover:text-black
            "
          >
            {
              data.heroSecondaryButtonText
            }
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
        "
      >
        <ArrowDown
          size={22}
          className="text-white/70"
        />
      </motion.div>
    </section>
  );
}