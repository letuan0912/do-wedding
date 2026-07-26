"use client";

import { useCallback, useEffect, useState } from "react";

import Button from "@/components/admin/ui/Button";
import EmptyState from "@/components/admin/ui/EmptyState";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import PackageModal from "./PackageModal";
import PackageTable from "./PackageTable";

import type { Package } from "@/types/package";

export default function PackageManager() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Package | null>(null);
  const [packages, setPackages] = useState<Package[]>([]);

  const loadPackages = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/package");

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Không thể tải danh sách gói.");
      }

      setPackages(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      console.error(error);
      setPackages([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPackages();
  }, [loadPackages]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader
        title="Gói dịch vụ"
        description="Quản lý các gói dịch vụ."
        action={
          <Button
            onClick={() => {
              setEditing(null);
              setOpen(true);
            }}
          >
            Thêm gói
          </Button>
        }
      />

      {packages.length === 0 ? (
        <EmptyState
          title="Chưa có gói dịch vụ"
          description="Nhấn 'Thêm gói' để bắt đầu."
        />
      ) : (
        <PackageTable
          data={packages}
          onEdit={(item) => {
            setEditing(item);
            setOpen(true);
          }}
          onRefresh={loadPackages}
        />
      )}

      <PackageModal
        open={open}
        onClose={() => setOpen(false)}
        packageItem={editing}
        onSuccess={() => {
          setOpen(false);
          loadPackages();
        }}
      />
    </>
  );
}