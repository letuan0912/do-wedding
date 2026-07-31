"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  HomePageData,
  initialHomePage,
} from "@/components/admin/homepage/types";

export default function useHomepage() {
  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [form, setForm] =
    useState<HomePageData>(initialHomePage);

  const loadData = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/homepage", {
        cache: "no-store",
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message);
        return;
      }

      setForm({
        ...initialHomePage,
        ...result.data,
      });
    } catch (err) {
      console.error(err);

      toast.error("Không thể tải dữ liệu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const save = async () => {
    try {
      setSaving(true);

      const res = await fetch(
        "/api/admin/homepage",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message);
        return false;
      }

      toast.success("Đã lưu thành công.");

      return true;
    } catch (err) {
      console.error(err);

      toast.error("Có lỗi xảy ra.");

      return false;
    } finally {
      setSaving(false);
    }
  };

  const updateField = <K extends keyof HomePageData>(
    field: K,
    value: HomePageData[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    form,
    loading,
    saving,
    save,
    updateField,
    reload: loadData,
  };
}