"use client";

import { useEffect, useState } from "react";

import {
  Images,
  Star,
  Eye,
  Mail,
} from "lucide-react";

import DashboardCard from "@/components/admin/dashboard/DashboardCard";

type Dashboard = {
  totalAlbums: number;
  featuredAlbums: number;
  publishedAlbums: number;
  totalContacts: number;
};

export default function DashboardPage() {
  const [data, setData] =
    useState<Dashboard>({
      totalAlbums: 0,
      featuredAlbums: 0,
      publishedAlbums: 0,
      totalContacts: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          "/api/admin/dashboard"
        );

        const json = await res.json();

        if (json.success) {
          setData(json.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <div className="space-y-10">

      <div>
        <p className="text-xs uppercase tracking-[5px] text-[#c8a86b]">
          ADMIN
        </p>

        <h1 className="mt-3 text-4xl font-light">
          Dashboard
        </h1>
      </div>

      {loading ? (
        <div className="rounded-3xl border bg-white p-12 text-center">
          Đang tải...
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <DashboardCard
            title="Tổng Album"
            value={data.totalAlbums}
            icon={<Images size={28} />}
          />

          <DashboardCard
            title="Album nổi bật"
            value={data.featuredAlbums}
            icon={<Star size={28} />}
          />

          <DashboardCard
            title="Đang hiển thị"
            value={data.publishedAlbums}
            icon={<Eye size={28} />}
          />

          <DashboardCard
            title="Liên hệ"
            value={data.totalContacts}
            icon={<Mail size={28} />}
          />

        </div>
      )}

    </div>
  );
}