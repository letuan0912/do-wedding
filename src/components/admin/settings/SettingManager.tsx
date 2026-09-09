"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Card from "@/components/admin/ui/Card";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import SettingForm from "./SettingForm";

export type Setting = {
  websiteName: string;

  logo: string;

  favicon: string;

  hotline: string;

  email: string;

  address: string;

  facebook: string;

  instagram: string;

  tiktok: string;

  youtube: string;

  googleMap: string;

  footer: string;

  copyright: string;

  seoTitle: string;

  seoDescription: string;
};

const initialSetting: Setting = {
  websiteName: "",

  logo: "",

  favicon: "",

  hotline: "",

  email: "",

  address: "",

  facebook: "",

  instagram: "",

  tiktok: "",

  youtube: "",

  googleMap: "",

  footer: "",

  copyright: "",

  seoTitle: "",

  seoDescription: "",
};

export default function SettingManager() {
  const [setting, setSetting] =
    useState<Setting>(initialSetting);

  const [loading, setLoading] =
    useState(true);

  const loadSetting = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/admin/settings",
        {
          cache: "no-store",
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setSetting({
        ...initialSetting,
        ...data.data,
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Không thể tải cài đặt."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSetting();
  }, []);
    return (
    <div className="space-y-8">

      <PageHeader
        title="Cài đặt Website"
        description="Quản lý thông tin chung của DO WEDDING."
      />

      {loading ? (

        <Loading text="Đang tải cài đặt..." />

      ) : (

        <Card padding="lg">

          <SettingForm
            setting={setting}
            onSuccess={loadSetting}
          />

        </Card>

      )}

    </div>
  );
}