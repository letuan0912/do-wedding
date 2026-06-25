import Image from "next/image";

export default function DichVuPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-5xl text-center text-[#c8a86b] mb-16">
          DỊCH VỤ CƯỚI
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <Image
            src="/images/service1.png"
            alt="Chụp ảnh cưới"
            width={500}
            height={400}
            className="w-full h-72 object-cover hover:scale-110 duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Chụp Ảnh Cưới
              </h3>
              <p className="text-gray-600 mt-3">
                Studio - Ngoại cảnh - Concept cao cấp
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <Image
              src="/images/service2.jpg"
              alt="Trang phục cưới"
              width={500}
              height={400}
              className="w-full h-72 object-cover hover:scale-110 duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Váy Cưới Cao Cấp
              </h3>
              <p className="text-gray-600 mt-3">
                Nhiều mẫu váy và vest hiện đại
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <Image
  src="/images/service3.jpg"
  alt="Wedding Day"
  width={500}
  height={400}
  className="w-full h-72 object-cover"
/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Wedding Day
              </h3>
              <p className="text-gray-600 mt-3">
                Quay phim & chụp hình ngày cưới
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}