export default function LienHePage() {
  return (
    <main className="bg-[#faf8f5] min-h-screen pt-24 pb-24">

      <div className="max-w-6xl mx-auto px-8">

        {/* Title */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-[#c8a86b]">
            Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-light mt-4 text-[#222]">
            LIÊN HỆ TƯ VẤN
          </h1>

          <p className="mt-6 text-gray-500 text-lg">
            Hãy để DO Wedding đồng hành cùng ngày trọng đại của bạn
          </p>
        </div>

        {/* Contact + Form */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-light mb-10 text-[#222]">
              Thông Tin Liên Hệ
            </h2>

            <div className="space-y-8 text-gray-700 text-lg">

              <div>
                <p className="font-semibold mb-1">
                  ☎ Hotline
                </p>
                <p>0909 999 999</p>
              </div>

              <div>
                <p className="font-semibold mb-1">
                  ✉ Email
                </p>
                <p>contact@dowedding.vn</p>
              </div>

              <div>
                <p className="font-semibold mb-1">
                  📍 Địa chỉ
                </p>
                <p>TP. Hồ Chí Minh</p>
              </div>

              <div>
                <p className="font-semibold mb-1">
                  🕒 Giờ làm việc
                </p>
                <p>08:00 - 21:00</p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full border border-gray-200 p-4 rounded-xl"
              />

              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full border border-gray-200 p-4 rounded-xl"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 p-4 rounded-xl"
              />

              <textarea
                placeholder="Nội dung tư vấn"
                className="w-full border border-gray-200 p-4 rounded-xl h-40"
              />

              <button className="w-full bg-[#c8a86b] text-white py-4 rounded-xl hover:bg-[#b79452] duration-300">
                GỬI THÔNG TIN
              </button>

            </div>

          </div>

        </div>

        {/* Google Map */}
        <div className="mt-24">

          <h2 className="text-center text-4xl font-light mb-10 text-[#222]">
            Vị Trí Studio
          </h2>

          <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              src="https://maps.google.com/maps?q=10.8129831,106.6049247&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </main>
  );
}