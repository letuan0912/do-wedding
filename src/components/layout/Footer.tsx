"use client";

import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  ChevronUp,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0f0f0f] text-white">

      {/* Background */}

      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#c8a86b_1px,transparent_1px)] bg-[length:28px_28px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="grid gap-16 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-5xl font-extralight tracking-wide text-[#c8a86b]">
              DO WEDDING
            </h2>

            <p className="mt-8 leading-8 text-gray-400">
              Luxury Wedding Studio chuyên chụp ảnh cưới, wedding day,
              pre-wedding và lưu giữ những khoảnh khắc đẹp nhất của cuộc đời.
            </p>

            <div className="flex gap-4 mt-10">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#c8a86b] duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#c8a86b] duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#c8a86b] duration-300 flex items-center justify-center"
              >
                <FaTiktok />
              </a>

            </div>

          </div>

          {/* Menu */}

          <div>

            <h3 className="uppercase tracking-[5px] text-[#c8a86b]">
              Menu
            </h3>

            <div className="mt-8 flex flex-col gap-5">

              <Link href="/" className="hover:text-[#c8a86b] duration-300">
                Trang Chủ
              </Link>

              <Link href="/album" className="hover:text-[#c8a86b] duration-300">
                Album
              </Link>

              <Link href="/dich-vu" className="hover:text-[#c8a86b] duration-300">
                Dịch Vụ
              </Link>

              <Link href="/bang-gia" className="hover:text-[#c8a86b] duration-300">
                Bảng Giá
              </Link>

              <Link href="/lien-he" className="hover:text-[#c8a86b] duration-300">
                Liên Hệ
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="uppercase tracking-[5px] text-[#c8a86b]">
              Liên Hệ
            </h3>

            <div className="space-y-6 mt-8">

              <div className="flex items-center gap-4">
                <Phone size={18} />
                <span>0909 999 999</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={18} />
                <span>contact@dowedding.vn</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin size={18} />
                <span>TP. Hồ Chí Minh</span>
              </div>

              <div className="flex items-center gap-4">
                <Clock3 size={18} />
                <span>08:00 - 21:00</span>
              </div>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="uppercase tracking-[5px] text-[#c8a86b]">
              Nhận Ưu Đãi
            </h3>

            <p className="mt-8 text-gray-400 leading-7">
              Đăng ký để nhận concept mới và ưu đãi dành riêng cho khách hàng.
            </p>

            <input
              type="email"
              placeholder="Email của bạn"
              className="w-full mt-8 bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-[#c8a86b]"
            />

            <button
              className="mt-5 w-full bg-[#c8a86b] hover:bg-[#b69455] duration-300 rounded-full py-4"
            >
              ĐĂNG KÝ
            </button>

          </div>

        </div>
              {/* Divider */}

      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Bottom */}

      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-sm text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} DO WEDDING. All Rights Reserved.
        </p>

        <button
          onClick={scrollTop}
          className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-[#c8a86b] transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a86b] hover:bg-[#c8a86b] hover:text-white"
        >
          <ChevronUp size={18} />
          Back To Top
        </button>

      </div>

      </div>

    </footer>
  );
}