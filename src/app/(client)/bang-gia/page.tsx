import Image from "next/image";
import Link from "next/link";

const packages = [
{
title: "Studio Package",
image: "/images/packages/studio.jpg",
price: "Từ 5.900.000đ",
features: [
"02 Concept chụp",
"01 Váy cưới cao cấp",
"Makeup cô dâu",
"20 ảnh chỉnh sửa",
],
link: "/bang-gia/studio",
},
{
title: "Đà Lạt Package",
image: "/images/packages/dalat.jpg",
price: "Từ 12.900.000đ",
features: [
"Chụp ngoại cảnh Đà Lạt",
"Makeup chuyên nghiệp",
"Flycam",
"Album cao cấp",
],
link: "/bang-gia/dalat",
},
{
title: "Phim Trường Package",
image: "/images/packages/phimtruong.jpg",
price: "Từ 8.900.000đ",
features: [
"Chụp phim trường",
"02 Concept",
"Makeup cô dâu",
"15 ảnh chỉnh sửa",
],
link: "/bang-gia/phim-truong",
},
{
title: "Wedding Day",
image: "/images/packages/weddingday.jpg",
price: "Liên hệ",
features: [
"Quay phim cưới",
"Chụp hình ngày cưới",
"Highlight Video",
"Ekip chuyên nghiệp",
],
link: "/bang-gia/wedding-day",
},
{
title: "Váy Cưới Cao Cấp",
image: "/images/packages/vaycuoi.jpg",
price: "Liên hệ",
features: [
"Nhiều mẫu váy mới",
"Thiết kế hiện đại",
"Form cao cấp",
"Tư vấn riêng",
],
link: "/bang-gia/vay-cuoi",
},
{
title: "Trang Điểm Cô Dâu",
image: "/images/packages/trangdiem.jpg",
price: "Liên hệ",
features: [
"Makeup chuyên nghiệp",
"Phong cách Hàn Quốc",
"Trang điểm tận nơi",
"Làm tóc cô dâu",
],
link: "/bang-gia/trang-diem",
},
];

export default function BangGiaPage() {
return ( <main className="bg-[#faf8f5] min-h-screen">

```
  <section className="relative h-[50vh]">
    <Image
      src="/images/hero.jpg"
      alt="Bảng giá"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/50" />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white">
        <p className="uppercase tracking-[8px] text-sm mb-4">
          DO WEDDING
        </p>

        <h1 className="text-5xl md:text-7xl font-light">
          BẢNG GIÁ DỊCH VỤ
        </h1>

        <p className="mt-6 text-lg">
          Chọn gói dịch vụ phù hợp với câu chuyện tình yêu của bạn
        </p>
      </div>
    </div>
  </section>

  <section className="max-w-7xl mx-auto py-24 px-8">

    <div className="text-center mb-16">
      <p className="uppercase tracking-[6px] text-[#c8a86b]">
        Pricing Packages
      </p>

      <h2 className="text-5xl font-light mt-4">
        CÁC GÓI DỊCH VỤ
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {packages.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500"
        >

          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={800}
            className="w-full h-[320px] object-cover"
          />

          <div className="p-8">

            <h3 className="text-2xl font-light text-[#222]">
              {item.title}
            </h3>

            <p className="text-[#c8a86b] text-2xl mt-3 font-medium">
              {item.price}
            </p>

            <ul className="mt-6 space-y-2 text-gray-600">
              {item.features.map((feature, idx) => (
                <li key={idx}>
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 w-full bg-[#c8a86b] text-white py-3 rounded-full text-center hover:bg-[#b79452] duration-300">
              XEM CHI TIẾT
            </div>

          </div>

        </Link>
      ))}

    </div>

  </section>

</main>

);
}
