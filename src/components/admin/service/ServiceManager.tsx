"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";
import EmptyState from "@/components/admin/ui/EmptyState";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import ServiceModal from "./ServiceModal";
import ServiceTable from "./ServiceTable";

import type { Service } from "@/types/service";

export default function ServiceManager() {
  const [services, setServices] =
    useState<Service[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [open, setOpen] =
    useState(false);

  const [selected, setSelected] =
    useState<Service | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/admin/service",
        {
          cache: "no-store",
        }
      );

      const result =
        await res.json();

      if (!res.ok) {
        toast.error(
          result.message ??
            "Không thể tải dữ liệu."
        );
        return;
      }

      setServices(
        result.data ?? []
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Có lỗi xảy ra."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = () => {
    setSelected(null);
    setOpen(true);
  };

  const handleEdit = (
    item: Service
  ) => {
    setSelected(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <>
      <PageHeader
        title="Dịch vụ"
        description="Quản lý các dịch vụ của studio."
        action={
          <Button onClick={handleCreate}>
            Thêm dịch vụ
          </Button>
        }
      />

      {loading ? (
        <Loading />
      ) : services.length === 0 ? (
        <EmptyState
          title="Chưa có dịch vụ"
          description="Hãy tạo dịch vụ đầu tiên."
          action={
            <Button onClick={handleCreate}>
              Thêm dịch vụ
            </Button>
          }
        />
      ) : (
        <ServiceTable
          data={services}
          onEdit={handleEdit}
          onRefresh={loadData}
        />
      )}

      <ServiceModal
        open={open}
        service={selected}
        onClose={handleClose}
        onSuccess={loadData}
      />
    </>
  );
}