"use client";

import { useEffect, useState } from "react";

import Button from "@/components/admin/ui/Button";
import PageHeader from "@/components/admin/ui/PageHeader";
import Loading from "@/components/admin/ui/Loading";
import EmptyState from "@/components/admin/ui/EmptyState";

import PackageTable from "./PackageTable";
import PackageModal from "./PackageModal";

import type { Package } from "@/types/package";

export default function PackageManager() {
  const [loading, setLoading] =
    useState(true);

  const [open, setOpen] =
    useState(false);

  const [editing, setEditing] =
    useState<Package | null>(null);

  const [packages, setPackages] =
    useState<Package[]>([]);

  const loadPackages =
    async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "/api/admin/package"
        );

        const data =
          await res.json();

        setPackages(
          data.data ?? []
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    loadPackages();
  }, []);

  if (loading)
    return <Loading />;

  return (
    <>
      <PageHeader
        title="Gói dịch vụ"
        description="Quản lý các gói dịch vụ."
        actions={
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
          onRefresh={
            loadPackages
          }
        />
      )}

      <PackageModal
        open={open}
        onClose={() =>
          setOpen(false)
        }
        packageItem={
          editing
        }
        onSuccess={() => {
          setOpen(false);
          loadPackages();
        }}
      />
    </>
  );
}