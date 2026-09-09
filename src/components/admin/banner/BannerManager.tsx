"use client";

import { useEffect, useState } from "react";

import BannerForm from "./BannerForm";
import BannerTable from "./BannerTable";

import Card from "@/components/admin/ui/Card";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import type { Banner } from "@/types/banner";

export default function BannerManager() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [editing, setEditing] = useState<Banner | null>(null);

  const [loading, setLoading] = useState(true);

  const loadBanners = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/banner", {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setBanners(data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBanners();
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Banner"
        description="Quản lý Banner trang chủ."
      />

      <Card padding="lg">
        <BannerForm
          banner={editing}
          onSuccess={() => {
            setEditing(null);
            loadBanners();
          }}
          onCancel={() => setEditing(null)}
        />
      </Card>

      {loading ? (
        <Loading text="Đang tải Banner..." />
      ) : (
        <BannerTable
          banners={banners}
          onEdit={setEditing}
          onRefresh={loadBanners}
        />
      )}
    </div>
  );
}