"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Images,
  Mail,
  Briefcase,
  ReceiptText,
  CalendarDays,
  Settings,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Liên hệ",
    href: "/admin/contact",
    icon: Mail,
  },
  {
    title: "Album",
    href: "/admin/album",
    icon: Images,
  },
  {
    title: "Dịch vụ",
    href: "/admin/service",
    icon: Briefcase,
  },
  {
    title: "Bảng giá",
    href: "/admin/pricing",
    icon: ReceiptText,
  },
  {
    title: "Booking",
    href: "/admin/booking",
    icon: CalendarDays,
  },
  {
    title: "Cài đặt",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-[#ececec] bg-white">
      <div className="border-b border-[#ececec] px-8 py-8">
        <h2 className="text-2xl font-light text-[#222]">
          DO WEDDING
        </h2>

        <p className="mt-1 text-xs uppercase tracking-[4px] text-[#c8a86b]">
          CMS ADMIN
        </p>
      </div>

      <nav className="space-y-2 p-5">
        {menus.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/admin" &&
              pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-5 py-4 transition ${
                active
                  ? "bg-[#c8a86b] text-white shadow-lg"
                  : "text-gray-600 hover:bg-[#faf8f4]"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}