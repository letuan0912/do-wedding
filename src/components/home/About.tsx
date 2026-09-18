"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

interface AboutData {
  aboutSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutImage1: string;
}

const initialData: AboutData = {
  aboutSubtitle: "",
  aboutTitle: "",
  aboutDescription: "",
  aboutImage1: "",
};

export default function About() {
  const [data, setData] =
    useState<AboutData>(initialData);

  useEffect(() => {
    async function loadAbout() {
      try {
        const res = await fetch("/api/homepage", {
          cache: "no-store",
        });

        const result = await res.json();

        if (result.success) {
          setData({
            ...initialData,
            ...result.data,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadAbout();
  }, []);

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow={data.aboutSubtitle}
          title={data.aboutTitle}
          description={data.aboutDescription}
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[32px]">
            <Image
              src={
                data.aboutImage1 ||
                "/images/service1.png"
              }
              alt="DO Wedding"
              width={800}
              height={900}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div>
            <h3 className="text-4xl font-light leading-tight text-[#222]">
              {data.aboutTitle}
            </h3>

            <p className="mt-8 leading-9 text-gray-600">
              {data.aboutDescription}
            </p>

            <div className="mt-14">
              <Link href="/album">
                <Button>
                  Xem Album
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}