"use client";

import { useEffect, useState } from "react";

interface DashboardData {
  stats: {
    albumCount: number;
    serviceCount: number;
    bookingCount: number;
    contactCount: number;
  };
}

export default function DashboardManager() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const res = await fetch("/api/admin/dashboard");

    const json = await res.json();

    if (json.success) {
      setData(json.data);
    }
  }

  if (!data) {
    return (
      <div className="p-10">
        Đang tải Dashboard...
      </div>
    );
  }

  const cards = [
    {
      title: "Album",
      value: data.stats.albumCount,
    },
    {
      title: "Dịch vụ",
      value: data.stats.serviceCount,
    },
    {
      title: "Booking",
      value: data.stats.bookingCount,
    },
    {
      title: "Liên hệ",
      value: data.stats.contactCount,
    },
  ];

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Tổng quan hệ thống DO Wedding
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((item) => (

          <div
            key={item.title}
            className="
              rounded-3xl
              border
              bg-white
              p-8
              shadow-sm
            "
          >

            <p className="text-gray-500">
              {item.title}
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#c8a86b]">
              {item.value}
            </h2>

          </div>

        ))}

      </div>

    </div>
  );
}