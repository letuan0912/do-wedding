import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Wedding"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="tracking-[8px] uppercase text-sm mb-4">
              Luxury Wedding Studio
            </p>

            <h2 className="text-6xl md:text-8xl font-extralight tracking-wide">
              DO WEDDING
            </h2>

            <Link
  href="/lien-he"
        className="inline-block mt-8 bg-[#c8a86b] text-white px-10 py-4 rounded-full hover:bg-[#b79452] duration-300"
      >
        ĐẶT LỊCH TƯ VẤN
      </Link>
          </div>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="max-w-5xl mx-auto py-28 px-8 text-center">
        <p className="text-[#c8a86b] uppercase tracking-[6px]">
          About Us
        </p>

        <h3 className="text-5xl mt-6 font-light">
          Khoảnh Khắc Đẹp Nhất Của Tình Yêu
        </h3>

        <p className="mt-8 text-gray-600 leading-8">
          DO Wedding mang đến những bộ ảnh cưới tinh tế,
          sang trọng và giàu cảm xúc. Chúng tôi đồng hành
          cùng các cặp đôi trong hành trình lưu giữ những
          khoảnh khắc đẹp nhất của cuộc đời.
        </p>
      </section>

      {/* Dịch vụ */}
<section className="bg-[#faf8f5] py-28">
  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-16">
      <p className="uppercase tracking-[6px] text-[#c8a86b]">
        Services
      </p>

      <h3 className="text-5xl font-light mt-4">
        DỊCH VỤ CƯỚI CAO CẤP
      </h3>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="overflow-hidden rounded-lg mb-6">
          <Image
            src="/images/service1.png"
            alt="Chụp ảnh cưới"
            width={500}
            height={400}
            className="w-full h-72 object-cover hover:scale-110 duration-500"
          />
        </div>

        <h4 className="text-xl">Chụp Ảnh Cưới</h4>

        <p className="text-gray-600 mt-3">
          Studio - Ngoại cảnh - Concept cao cấp
        </p>

        <Link
          href="/dich-vu"
          className="mt-6 inline-block text-[#c8a86b] uppercase tracking-wider text-sm hover:underline"
        >
          Xem chi tiết →
        </Link>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="overflow-hidden rounded-lg mb-6">
          <Image
            src="/images/service2.jpg"
            alt="Trang phục cưới"
            width={500}
            height={400}
            className="w-full h-72 object-cover hover:scale-110 duration-500"
          />
        </div>

        <h4 className="text-xl">Trang Phục Cưới</h4>

        <p className="text-gray-600 mt-3">
          Váy cưới và vest cao cấp
        </p>

        <Link
        href="/dich-vu"
        className="mt-6 inline-block text-[#c8a86b] uppercase tracking-wider text-sm hover:underline"
      >
        Xem chi tiết →
      </Link>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="overflow-hidden rounded-lg mb-6">
          <Image
            src="/images/service3.jpg"
            alt="Wedding Day"
            width={500}
            height={400}
            className="w-full h-72 object-cover hover:scale-110 duration-500"
          />
        </div>

        <h4 className="text-xl">Wedding Day</h4>

        <p className="text-gray-600 mt-3">
          Quay phim, chụp hình ngày cưới
        </p>

        <Link
          href="/dich-vu"
          className="mt-6 inline-block text-[#c8a86b] uppercase tracking-wider text-sm hover:underline"
        >
          Xem chi tiết →
        </Link>
      </div>

    </div>

  </div>
</section>

      {/* Form tư vấn */}
      <section className="max-w-4xl mx-auto py-28 px-8">
        <h3 className="text-center text-5xl font-light mb-12 text-[#c8a86b]">
          ĐẶT LỊCH TƯ VẤN
        </h3>

        <div className="grid gap-5">
          <input
            placeholder="Họ và tên"
            className="border border-gray-200 p-4 rounded-xl"
          />

          <input
            placeholder="Số điện thoại"
            className="border border-gray-200 p-4 rounded-xl"
          />

          <input
            placeholder="Email"
            className="border border-gray-200 p-4 rounded-xl"
          />

          <textarea
            placeholder="Nội dung cần tư vấn"
            className="border border-gray-200 p-4 h-40 rounded-xl"
          />

          <button className="bg-[#c8a86b] text-white py-4 rounded-xl hover:bg-[#b79452] duration-300">
            GỬI THÔNG TIN
          </button>
        </div>
      </section>
    </main>
  );
}