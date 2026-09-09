import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import Counter from "@/components/home/Counter";
import HomeGallery from "@/components/home/HomeGallery";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

import LuxuryTimeline from "@/components/services/Process/LuxuryTimeline";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      <About />

      <WhyChooseUs />

      <Counter />

      <LuxuryTimeline
        subtitle="QUY TRÌNH"
        title="Đồng Hành Cùng Bạn Từ Ý Tưởng Đến Kỷ Niệm"
        steps={[
          {
            number: "01",
            title: "Tư Vấn",
            description:
              "Lắng nghe mong muốn, tư vấn concept, địa điểm và gói dịch vụ phù hợp.",
          },
          {
            number: "02",
            title: "Lên Concept",
            description:
              "Xây dựng ý tưởng, lựa chọn trang phục, makeup và chuẩn bị lịch trình.",
          },
          {
            number: "03",
            title: "Chụp & Quay",
            description:
              "Thực hiện buổi chụp với đội ngũ nhiếp ảnh và quay phim chuyên nghiệp.",
          },
          {
            number: "04",
            title: "Hậu Kỳ",
            description:
              "Chỉnh màu, retouch ảnh và dựng Wedding Film theo phong cách điện ảnh.",
          },
          {
            number: "05",
            title: "Bàn Giao",
            description:
              "Hoàn thiện album, video và bàn giao toàn bộ sản phẩm đúng tiến độ.",
          },
        ]}
      />

      <Services />

      <HomeGallery />

      <Testimonials />

      <CTA />

      <Contact />
    </main>
  );
}