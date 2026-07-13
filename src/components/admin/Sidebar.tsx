"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Images,
  Briefcase,
  Mail,
  Settings,
  DollarSign,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
},
  {
    name: "Liên hệ",
    href: "/admin/contact",
    icon: Mail,
  },
  {
    name: "Album",
    href: "/admin/album",
    icon: Images,
  },
  {
    name: "Dịch vụ",
    href: "/admin/service",
    icon: Briefcase,
  },
  {
    name: "Bảng giá",
    href: "/admin/price",
    icon: DollarSign,
  },
  {
    name: "Cài đặt",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-[#181818] text-white p-8">

      <h1 className="text-3xl font-light mb-12">
        DO WEDDING
      </h1>

      <div className="space-y-2">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl p-4 transition ${
                pathname === item.href
                  ? "bg-[#c8a86b]"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon size={20} />

              {item.name}
            </Link>
          );
        })}

      </div>

    </aside>
  );
}