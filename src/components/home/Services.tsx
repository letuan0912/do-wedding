import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section className="bg-[#faf8f5]">

      <Container>

        <SectionTitle
          eyebrow="Services"
          title="DỊCH VỤ CƯỚI CAO CẤP"
          description="Đồng hành cùng bạn từ buổi chụp ảnh cưới đến ngày trọng đại với những dịch vụ chuyên nghiệp."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <Card
              key={service.title}
              className="overflow-hidden"
            >

              <div className="overflow-hidden">

                <Image
                  src={service.image}
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

                <p className="mt-4 leading-7 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-8">

                  <Button href="/dich-vu">
                    Xem Chi Tiết
                  </Button>

                </div>

              </div>

            </Card>

          ))}

        </div>

      </Container>

    </Section>
  );
}