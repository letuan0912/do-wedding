import Image from "next/image";

export default function StudioPackagePage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/packages/studio.jpg"
          alt="Studio Package"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="uppercase tracking-[8px] text-sm mb-4">
              DO WEDDING
            </p>

            <h1 className="text-6xl md:text-7xl font-light">
              STUDIO PACKAGE
            </h1>

            <p className="mt-6 text-xl">
              Từ 5.900.000đ
            </p>
          </div>
        </div>
      </section>

      {/* Nội dung */}
      <section className="max-w-7xl mx-auto py-24 px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[6px] text-[#c8a86b]">
              Package Details
            </p>

            <h2 className="text-5xl font-light mt-4">
              Studio Package
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Gói chụp studio dành cho các cặp đôi yêu thích
              phong cách tinh tế, sang trọng và tiết kiệm chi phí.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li>✓ Chụp tại Studio cao cấp</li>
              <li>✓ 2 trang phục cưới</li>
              <li>✓ Makeup cô dâu</li>
              <li>✓ 20 ảnh chỉnh sửa</li>
              <li>✓ Album cao cấp</li>
            </ul>

            <button className="mt-10 bg-[#c8a86b] text-white px-10 py-4 rounded-full hover:opacity-90">
              ĐẶT LỊCH TƯ VẤN
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <Image
              src="/images/album/album1.jpg"
              alt=""
              width={500}
              height={700}
              className="w-full h-[300px] object-cover rounded-xl"
            />

            <Image
              src="/images/album/album2.jpg"
              alt=""
              width={500}
              height={700}
              className="w-full h-[300px] object-cover rounded-xl"
            />

            <Image
              src="/images/album/album3.jpg"
              alt=""
              width={500}
              height={700}
              className="w-full h-[300px] object-cover rounded-xl"
            />

            <Image
              src="/images/album/album4.jpg"
              alt=""
              width={500}
              height={700}
              className="w-full h-[300px] object-cover rounded-xl"
            />

          </div>

        </div>

      </section>

    </main>
  );
}