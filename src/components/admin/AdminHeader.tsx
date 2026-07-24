"use client";

import { useEffect, useState } from "react";
import {
  useRouter,
  usePathname,
} from "next/navigation";
import {
  Bell,
  LogOut,
  UserCircle2,
  CalendarDays,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";

export default function AdminHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleString("vi-VN", {
          weekday: "long",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();

    const interval = setInterval(update, 60000);

    return () => clearInterval(interval);
  }, []);

  const pageTitles: Record<string, string> = {
    "/admin": "Dashboard",
    "/admin/contact": "Khách hàng liên hệ",
    "/admin/album": "Quản lý Album",
    "/admin/service": "Quản lý Dịch vụ",
    "/admin/pricing": "Bảng giá",
    "/admin/booking": "Booking",
    "/admin/settings": "Cài đặt",
  };

  const pageTitle =
    pageTitles[pathname] ?? "DO WEDDING CMS";

  const handleLogout = async () => {
    try {
      setLoading(true);

      await fetch("/api/admin/logout", {
        method: "POST",
      });

      toast.success("Đăng xuất thành công");

      router.replace("/admin/login");
      router.refresh();
    } catch {
      toast.error("Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-[#ececec] bg-white px-8">
      <div>
        <p className="text-xs uppercase tracking-[5px] text-[#c8a86b]">
          DO WEDDING CMS
        </p>

        <h1 className="mt-2 text-2xl font-light text-[#222]">
          {pageTitle}
        </h1>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <span>Admin</span>

          <ChevronRight size={14} />

          <span>{pageTitle}</span>
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={15} />
          {time}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative rounded-full border border-gray-200 p-3 transition hover:bg-gray-100">
          <Bell size={20} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            0
          </span>
        </button>

        <div className="flex items-center gap-3 rounded-full border border-gray-200 px-4 py-2">
          <UserCircle2
            size={40}
            className="text-[#c8a86b]"
          />

          <div>
            <p className="font-medium">
              Administrator
            </p>

            <p className="text-xs text-gray-500">
              admin
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          disabled={loading}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-red-200
            px-4
            py-3
            text-red-500
            transition
            hover:bg-red-50
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <LogOut size={18} />

          {loading
            ? "Đang đăng xuất..."
            : "Đăng xuất"}
        </button>
      </div>
    </header>
  );
}