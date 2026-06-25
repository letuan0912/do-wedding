import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#faf8f5] border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          {/* Logo + Social */}
          <div>
            <h3 className="text-5xl font-light text-[#c8a86b] mb-4">
              DO WEDDING
            </h3>

            <p className="text-gray-500 leading-7">
              Luxury Wedding Studio chuyên chụp ảnh cưới,
              quay phim cưới và lưu giữ những khoảnh khắc
              đẹp nhất của tình yêu.
            </p>

            <div className="mt-8 flex gap-5 text-gray-700">

              <a
                href="https://www.facebook.com/DONNGUYEN.1999"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c8a86b]"
              >
                Facebook
              </a>

              <span>|</span>

              <a
                href="https://www.tiktok.com/@donthichchupanh"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c8a86b]"
              >
                TikTok
              </a>

            </div>
          </div>

          {/* Thông tin */}
          <div>
            <h4 className="uppercase tracking-[3px] text-sm text-[#c8a86b] mb-6">
              Thông Tin
            </h4>

            <div className="space-y-4 text-gray-700">

              <p>
                📍 TP. Hồ Chí Minh
              </p>

              <p>
                📞 033 866 9679
              </p>

              <p>
                🕒 08:00 - 21:00
              </p>

            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="uppercase tracking-[3px] text-sm text-[#c8a86b] mb-6">
              Menu
            </h4>

            <div className="flex flex-col gap-4 text-gray-700">

              <Link
                href="/album"
                className="hover:text-[#c8a86b]"
              >
                Album
              </Link>

              <Link
                href="/dich-vu"
                className="hover:text-[#c8a86b]"
              >
                Dịch Vụ
              </Link>

              <Link
                href="/bang-gia"
                className="hover:text-[#c8a86b]"
              >
                Bảng Giá
              </Link>

              <Link
                href="/lien-he"
                className="hover:text-[#c8a86b]"
              >
                Liên Hệ
              </Link>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 DO WEDDING. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}