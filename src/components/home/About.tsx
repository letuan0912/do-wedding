import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section className="bg-white py-24">

      <Container>

        <SectionTitle
          eyebrow="About Us"
          title="Khoảnh Khắc Đẹp Nhất Của Tình Yêu"
          description="DO Wedding mang đến những bộ ảnh cưới tinh tế, sang trọng và giàu cảm xúc. Chúng tôi đồng hành cùng các cặp đôi lưu giữ những khoảnh khắc đẹp nhất của cuộc đời."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* Image */}

          <div className="relative overflow-hidden rounded-[32px]">

            <Image
              src="/images/service1.png"
              alt="DO Wedding"
              width={800}
              height={900}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Content */}

          <div>

            <h3 className="text-4xl font-light leading-tight text-[#222]">
              Chúng tôi kể câu chuyện tình yêu bằng những bức ảnh giàu cảm xúc.
            </h3>

            <p className="mt-8 leading-9 text-gray-600">
              Với nhiều năm kinh nghiệm trong lĩnh vực Wedding Photography,
              DO Wedding luôn theo đuổi phong cách sang trọng, tối giản,
              tinh tế và lưu giữ những khoảnh khắc chân thật nhất của
              từng cặp đôi.
            </p>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-8">

              <div>

                <h2 className="text-5xl font-light text-[#c8a86b]">
                  500+
                </h2>

                <p className="mt-3 uppercase tracking-[2px] text-gray-500">
                  Couples
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-light text-[#c8a86b]">
                  8+
                </h2>

                <p className="mt-3 uppercase tracking-[2px] text-gray-500">
                  Years
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-light text-[#c8a86b]">
                  1200+
                </h2>

                <p className="mt-3 uppercase tracking-[2px] text-gray-500">
                  Albums
                </p>

              </div>

            </div>

            <div className="mt-14">

              <Button href="/album">
                Xem Album
              </Button>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}