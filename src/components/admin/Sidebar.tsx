"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Images,
  Mail,
  Briefcase,
  Package,
  CalendarDays,
  Image,
  Star,
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
    title: "Gói dịch vụ",
    href: "/admin/package",
    icon: Package,
  },
  {
    title: "Booking",
    href: "/admin/booking",
    icon: CalendarDays,
  },
  {
    title: "Banner",
    href: "/admin/banner",
    icon: Image,
  },
  {
    title: "Đánh giá",
    href: "/admin/review",
    icon: Star,
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
              className={`flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 ${
                active
                  ? "bg-[#c8a86b] text-white shadow-lg"
                  : "text-gray-600 hover:bg-[#faf8f4] hover:text-[#c8a86b]"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}