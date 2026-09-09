"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Home,
  Images,
  FolderTree,
  Mail,
  Briefcase,
  Package,
  CalendarDays,
  Image,
  Star,
  Settings,
} from "lucide-react";

const menuGroups = [
  {
    title: "TỔNG QUAN",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "NỘI DUNG WEBSITE",
    items: [
      {
        title: "Trang chủ",
        href: "/admin/homepage",
        icon: Home,
      },
      {
        title: "Album",
        href: "/admin/album",
        icon: Images,
      },
      {
        title: "Danh mục Album",
        href: "/admin/album-category",
        icon: FolderTree,
        badge: "Mới",
      },
      {
        title: "Dịch vụ",
        href: "/admin/service",
        icon: Briefcase,
      },
      {
        title: "Liên hệ",
        href: "/admin/contact",
        icon: Mail,
      },
    ],
  },

  {
    title: "QUẢN LÝ",
    items: [
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
        title: "Đánh giá",
        href: "/admin/review",
        icon: Star,
      },
    ],
  },

  {
    title: "HỆ THỐNG",
    items: [
      {
        title: "Banner",
        href: "/admin/banner",
        icon: Image,
      },
      {
        title: "Cài đặt",
        href: "/admin/settings",
        icon: Settings,
      },
    ],
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

      <nav className="space-y-7 p-5">

        {menuGroups.map((group) => (

          <div key={group.title}>

            <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-[3px] text-gray-400">
              {group.title}
            </p>

            <div className="space-y-2">

              {group.items.map((item) => {

                const Icon = item.icon;

                const active =
  item.href === "/admin"
    ? pathname === "/admin"
    : pathname === item.href;

                return (

                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      group
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      px-5
                      py-4
                      transition-all
                      duration-200
                      ${
                        active
                          ? "bg-[#c8a86b] text-white shadow-lg"
                          : "text-gray-600 hover:bg-[#faf8f4] hover:text-[#c8a86b]"
                      }
                    `}
                  >

                    <div className="flex items-center gap-3">

                      <Icon size={20} />

                      <span className="font-medium">
                        {item.title}
                      </span>

                    </div>

                    {"badge" in item && item.badge && (

                      <span
                        className={`
                          rounded-full
                          px-2
                          py-1
                          text-[10px]
                          font-semibold
                          ${
                            active
                              ? "bg-white/20 text-white"
                              : "bg-[#c8a86b]/10 text-[#c8a86b]"
                          }
                        `}
                      >
                        {item.badge}
                      </span>

                    )}

                  </Link>

                );

              })}

            </div>

          </div>

        ))}

      </nav>

    </aside>
  );
}