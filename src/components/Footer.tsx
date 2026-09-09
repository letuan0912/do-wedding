"use client";

import Link from "next/link";

import useSettings from "@/hooks/useSettings";

export default function Footer() {
  const settings = useSettings();

  return (
    <footer className="border-t border-gray-200 bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Logo + Social */}
          <div>
            <h3 className="mb-4 text-5xl font-light text-[#c8a86b]">
              {settings.websiteName || "DO WEDDING"}
            </h3>

            <p className="leading-7 text-gray-500">
              {settings.footer ||
                "Luxury Wedding Studio chuyên chụp ảnh cưới, quay phim cưới và lưu giữ những khoảnh khắc đẹp nhất của tình yêu."}
            </p>

            <div className="mt-8 flex gap-5 text-gray-700">
              <a
                href={settings.facebook || "#"}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c8a86b]"
              >
                Facebook
              </a>

              <span>|</span>

              <a
                href={settings.tiktok || "#"}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c8a86b]"
              >
                TikTok
              </a>

              {settings.youtube && (
                <>
                  <span>|</span>

                  <a
                    href={settings.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#c8a86b]"
                  >
                    YouTube
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Thông tin */}
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[3px] text-[#c8a86b]">
              Thông Tin
            </h4>

            <div className="space-y-4 text-gray-700">
              <p>
                📍 {settings.address || "TP. Hồ Chí Minh"}
              </p>

              <p>
                📞 {settings.hotline || "033 866 9679"}
              </p>

              <p>
                ✉️ {settings.email || "contact@dowedding.vn"}
              </p>

              <p>🕒 08:00 - 21:00</p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[3px] text-[#c8a86b]">
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

        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          {settings.copyright ||
            "© 2026 DO WEDDING. All Rights Reserved."}
        </div>
      </div>
    </footer>
  );
}