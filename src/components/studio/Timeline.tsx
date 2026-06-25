const process = [
  {
    step: "01",
    title: "Tư Vấn",
    desc: "Lắng nghe nhu cầu và lựa chọn gói phù hợp.",
  },
  {
    step: "02",
    title: "Chọn Concept",
    desc: "Xây dựng concept và địa điểm chụp.",
  },
  {
    step: "03",
    title: "Makeup & Chụp",
    desc: "Makeup chuyên nghiệp và thực hiện buổi chụp.",
  },
  {
    step: "04",
    title: "Chỉnh Sửa",
    desc: "Retouch và thiết kế album.",
  },
  {
    step: "05",
    title: "Bàn Giao",
    desc: "Nhận album và toàn bộ file ảnh.",
  },
];

export default function Timeline() {
  return (
    <section className="py-28 bg-[#faf8f5]">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#c8a86b]">
            Our Process
          </p>

          <h2 className="text-5xl font-light mt-4">
            QUY TRÌNH THỰC HIỆN
          </h2>

          <p className="mt-6 text-gray-500">
            Đồng hành cùng bạn từ những bước đầu tiên đến khi nhận album cưới.
          </p>

        </div>

        <div className="grid md:grid-cols-5 gap-8 mt-20">

          {process.map((item) => (
            <div
              key={item.step}
              className="text-center group"
            >

              <div className="w-20 h-20 rounded-full bg-[#c8a86b] text-white flex items-center justify-center mx-auto text-3xl font-light transition duration-300 group-hover:scale-110 group-hover:shadow-xl">
                {item.step}
              </div>

              <h3 className="mt-6 text-xl font-medium">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}