"use client";

import useSWR from "swr";
import {
  MessageSquare,
  Clock3,
  CircleAlert,
  CheckCircle2,
} from "lucide-react";

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

export default function DashboardPage() {
  const { data, isLoading } = useSWR(
    "/api/admin/dashboard",
    fetcher
  );

  const cards = [
    {
      title: "Tổng liên hệ",
      value: data?.totalContacts ?? 0,
      icon: MessageSquare,
    },
    {
      title: "Hôm nay",
      value: data?.todayContacts ?? 0,
      icon: Clock3,
    },
    {
      title: "Chưa xử lý",
      value: data?.pendingContacts ?? 0,
      icon: CircleAlert,
    },
    {
      title: "Đã xử lý",
      value: data?.completedContacts ?? 0,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f7] p-10">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[4px] text-[#c8a86b]">
          ADMIN PANEL
        </p>

        <h1 className="mt-3 text-4xl font-light text-[#222]">
          Dashboard
        </h1>
      </div>

      {isLoading && (
        <div className="mb-6 rounded-xl bg-white p-4 shadow">
          Đang tải dữ liệu...
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-[28px]
                border
                border-[#ececec]
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-4 text-5xl font-light text-[#222]">
                    {item.value}
                  </h2>
                </div>

                <div className="rounded-2xl bg-[#c8a86b]/10 p-4">
                  <Icon
                    size={30}
                    className="text-[#c8a86b]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Liên hệ mới nhất */}

      <div className="mt-10 rounded-[28px] border border-[#ececec] bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-light">
          Liên hệ mới nhất
        </h2>

        {data?.latestContacts?.length ? (
          <div className="space-y-4">
            {data.latestContacts.map((item: any) => (
              <div
                key={item._id}
                className="flex items-center justify-between rounded-2xl border border-gray-100 p-5 hover:bg-[#faf8f4]"
              >
                <div>
                  <h3 className="font-medium text-[#222]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.phone}
                  </p>
                </div>

                <div className="text-sm text-gray-500">
                  {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            Chưa có khách hàng nào.
          </p>
        )}
      </div>
    </div>
  );
}