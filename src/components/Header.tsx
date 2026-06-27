"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link
          href="/"
          className={`text-4xl font-light tracking-wide transition duration-500 ${
            scrolled ? "text-[#c8a86b]" : "text-white"
          }`}
        >
          DO WEDDING
        </Link>

        <nav
          className={`flex items-center gap-10 text-sm uppercase tracking-[3px] transition duration-500 ${
            scrolled ? "text-[#222]" : "text-white"
          }`}
        >
          <Link
            href="/album"
            className="hover:text-[#c8a86b] transition"
          >
            Album
          </Link>

          <Link
            href="/dich-vu"
            className="hover:text-[#c8a86b] transition"
          >
            Dịch Vụ
          </Link>

          <Link
            href="/bang-gia"
            className="hover:text-[#c8a86b] transition"
          >
            Bảng Giá
          </Link>

          <Link
            href="/lien-he"
            className="hover:text-[#c8a86b] transition"
          >
            Liên Hệ
          </Link>

          <Link
            href="/lien-he"
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-[#c8a86b] text-white hover:bg-[#b79452]"
                : "border border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Tư Vấn
          </Link>
        </nav>

      </div>
    </header>
  );
}