"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Service {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  cover: string;
  published?: boolean;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      try {
        const res = await fetch("/api/service", {
          cache: "no-store",
        });

        const result = await res.json();

        if (result.success) {
          setServices(result.data);
        }
      } catch (error) {
        console.error("Load services:", error);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  return (
    <Section className="bg-[#faf8f5]">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="DỊCH VỤ CƯỚI CAO CẤP"
          description="Đồng hành cùng bạn từ buổi chụp ảnh cưới đến ngày trọng đại với những dịch vụ chuyên nghiệp."
        />

        {loading ? (
          <div className="mt-20 text-center text-gray-500">
            Đang tải dịch vụ...
          </div>
        ) : services.length === 0 ? (
          <div className="mt-20 text-center text-gray-500">
            Hiện chưa có dịch vụ.
          </div>
        ) : (
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services
              .filter((service) => service.published !== false)
              .map((service) => (
                <Card
                  key={service._id}
                  className="overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={service.cover || "/images/placeholder.jpg"}
                      alt={service.title}
                      width={600}
                      height={700}
                      className="h-80 w-full object-cover transition duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-light">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-500 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="mt-8">
                      <Button asChild>
                        <Link href={`/dich-vu/${service.slug}`}>
                          Xem Chi Tiết
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        )}
      </Container>
    </Section>
  );
}