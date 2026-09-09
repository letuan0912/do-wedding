"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type HomePageData = {
  counter1Number: number;
  counter1Suffix: string;
  counter1Label: string;

  counter2Number: number;
  counter2Suffix: string;
  counter2Label: string;

  counter3Number: number;
  counter3Suffix: string;
  counter3Label: string;

  counter4Number: number;
  counter4Suffix: string;
  counter4Label: string;
};

export default function LuxuryStats() {
  const [data, setData] =
    useState<HomePageData | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          "/api/homepage",
          {
            cache: "no-store",
          }
        );

        const result = await res.json();

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

  const stats = [
    {
      number: `${data.counter1Number}${data.counter1Suffix}`,
      label: data.counter1Label,
    },
    {
      number: `${data.counter2Number}${data.counter2Suffix}`,
      label: data.counter2Label,
    },
    {
      number: `${data.counter3Number}${data.counter3Suffix}`,
      label: data.counter3Label,
    },
    {
      number: `${data.counter4Number}${data.counter4Suffix}`,
      label: data.counter4Label,
    },
  ];

  return (
    <section className="bg-[#0b0b0b] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
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
            duration: 0.7,
          }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            DO WEDDING
          </p>

          <h2 className="mt-6 text-5xl font-extralight text-white">
            Những Con Số
            <br />
            Biết Nói
          </h2>
        </motion.div>

        <div className="mt-24 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                rounded-[36px]
                border
                border-white/10
                bg-white/5
                p-10
                text-center
                backdrop-blur-xl
              "
            >
              <h3 className="text-6xl font-extralight text-[#c8a86b]">
                {item.number}
              </h3>

              <p className="mt-6 leading-8 text-white/70">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}