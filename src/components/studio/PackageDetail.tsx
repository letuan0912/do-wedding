import Link from "next/link";
import { Camera, Shirt, BookOpen, Sparkles } from "lucide-react";

export default function PackageDetail() {
  return (
    <section
      id="detail"
      className="py-24 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div>

          <p className="uppercase tracking-[6px] text-[#c8a86b]">
            Package Details
          </p>

          <h2 className="text-5xl font-light mt-4">
            Studio Package
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Gói chụp Studio được thiết kế dành cho những cặp đôi yêu thích
            sự sang trọng, tinh tế và lưu giữ những khoảnh khắc đáng nhớ
            trong không gian được chuẩn bị hoàn hảo.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-12">

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl duration-300">
              <Camera size={34} className="text-[#c8a86b]" />
              <h4 className="mt-5 font-semibold">
                02 Concept
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Hai phong cách chụp khác nhau.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl duration-300">
              <Shirt size={34} className="text-[#c8a86b]" />
              <h4 className="mt-5 font-semibold">
                02 Váy cưới
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Nhiều mẫu váy cao cấp để lựa chọn.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl duration-300">
              <Sparkles size={34} className="text-[#c8a86b]" />
              <h4 className="mt-5 font-semibold">
                Makeup Premium
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Makeup chuyên nghiệp theo từng concept.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:-translate-y-2 hover:shadow-xl duration-300">
              <BookOpen size={34} className="text-[#c8a86b]" />
              <h4 className="mt-5 font-semibold">
                Album Premium
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Album in cao cấp và file ảnh gốc.
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative bg-white rounded-[40px] shadow-xl p-10">

          <div className="absolute top-6 right-6 bg-[#c8a86b] text-white text-xs px-3 py-1 rounded-full">
            PREMIUM
          </div>

          <h3 className="uppercase tracking-[4px] text-gray-500">
            Báo Giá
          </h3>

          <p className="text-[#c8a86b] text-6xl mt-6">
            5.900.000đ
          </p>

          <div className="mt-10 space-y-5 text-gray-700">

            <p>✓ Chụp Studio cao cấp</p>
            <p>✓ 02 Concept</p>
            <p>✓ Makeup cô dâu</p>
            <p>✓ 20 ảnh chỉnh sửa</p>
            <p>✓ Album Premium</p>
            <p>✓ File ảnh gốc</p>

          </div>

          <Link
            href="/lien-he"
            className="mt-10 inline-block w-full text-center bg-[#c8a86b] text-white py-4 rounded-full hover:bg-[#b79452]"
          >
            ĐẶT LỊCH TƯ VẤN
          </Link>

        </div>

      </div>
    </section>
  );
}