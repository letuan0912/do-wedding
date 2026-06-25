import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <Link
          href="/"
          className="text-4xl font-light tracking-wide text-[#c8a86b]"
        >
          DO WEDDING
        </Link>

        <nav className="flex items-center gap-10 text-sm uppercase tracking-[3px] text-[#333]">

          <Link
            href="/album"
            className="hover:text-[#c8a86b] duration-300"
          >
            Album
          </Link>

          <Link
            href="/dich-vu"
            className="hover:text-[#c8a86b] duration-300"
          >
            Dịch Vụ
          </Link>

          <Link
            href="/bang-gia"
            className="hover:text-[#c8a86b] duration-300"
          >
            Bảng Giá
          </Link>

          <Link
            href="/lien-he"
            className="hover:text-[#c8a86b] duration-300"
          >
            Liên Hệ
          </Link>

          <Link
            href="/lien-he"
            className="bg-[#c8a86b] text-white px-5 py-2.5 rounded-lg hover:bg-[#b79452] duration-300"
          >
            Tư Vấn
          </Link>

        </nav>

      </div>

    </header>
  );
}