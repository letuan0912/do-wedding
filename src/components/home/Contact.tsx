import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-start">

        {/* Left */}

        <div>

          <p className="uppercase tracking-[6px] text-[#c8a86b]">
            Contact
          </p>

          <h2 className="mt-5 text-5xl font-extralight">
            ĐẶT LỊCH TƯ VẤN
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Hãy để DO WEDDING đồng hành cùng bạn trong hành trình lưu giữ
            những khoảnh khắc đẹp nhất. Liên hệ với chúng tôi để được tư vấn
            miễn phí và lựa chọn gói dịch vụ phù hợp.
          </p>

          <div className="mt-12 space-y-6">

            <div>
              <h4 className="font-semibold text-[#222]">
                Hotline
              </h4>

              <p className="text-gray-600">
                0909 999 999
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#222]">
                Email
              </h4>

              <p className="text-gray-600">
                contact@dowedding.vn
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#222]">
                Địa chỉ
              </h4>

              <p className="text-gray-600">
                Hồ Chí Minh, Việt Nam
              </p>
            </div>

            <Link
              href="/lien-he"
              className="inline-block mt-4 bg-[#c8a86b] text-white px-8 py-4 rounded-full hover:bg-[#b79452] transition"
            >
              Xem trang liên hệ
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="bg-[#faf8f5] rounded-[32px] p-10 shadow-lg">

          <div className="grid gap-5">

            <input
              placeholder="Họ và tên"
              className="border border-gray-200 p-4 rounded-xl outline-none focus:border-[#c8a86b]"
            />

            <input
              placeholder="Số điện thoại"
              className="border border-gray-200 p-4 rounded-xl outline-none focus:border-[#c8a86b]"
            />

            <input
              placeholder="Email"
              className="border border-gray-200 p-4 rounded-xl outline-none focus:border-[#c8a86b]"
            />

            <textarea
              placeholder="Nội dung cần tư vấn"
              className="border border-gray-200 p-4 rounded-xl h-40 outline-none focus:border-[#c8a86b]"
            />

            <button className="bg-[#c8a86b] text-white py-4 rounded-xl hover:bg-[#b79452] transition">
              GỬI THÔNG TIN
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}