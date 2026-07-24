"use client";

import { useEffect, useMemo, useState } from "react";

import Card from "@/components/admin/ui/Card";
import Button from "@/components/admin/ui/Button";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import ServiceToolbar from "./ServiceToolbar";
import ServiceTable from "./ServiceTable";
import ServiceModal from "./ServiceModal";

import type { Service } from "@/types/service";

export default function ServiceManager() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [openModal, setOpenModal] = useState(false);
  const [editingService, setEditingService] =
    useState<Service | null>(null);

  const loadServices = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/service");

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setServices(data.data);
    } catch (error) {
      console.error("Load Service:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const filteredServices = useMemo(() => {
    const keyword = search.toLowerCase();

    return services.filter((service) => {
      const matchSearch =
        service.title.toLowerCase().includes(keyword) ||
        service.slug.toLowerCase().includes(keyword);

      const matchFilter =
        filter === "all" ||
        (filter === "published" && service.published) ||
        (filter === "draft" && !service.published);

      return matchSearch && matchFilter;
    });
  }, [services, search, filter]);

  const handleCreate = () => {
    setEditingService(null);
    setOpenModal(true);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingService(null);
  };

  const handleSuccess = async () => {
    await loadServices();
    handleCloseModal();
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc muốn xóa dịch vụ?")) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/service/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setServices((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error("Delete Service:", error);
    }
  };

  return (
    <>
      <div className="space-y-8">
        <PageHeader
          title="Quản lý Dịch vụ"
          description="Quản lý các gói dịch vụ của DO WEDDING."
          action={
            <Button onClick={handleCreate}>
              Thêm dịch vụ
            </Button>
          }
        />

        <Card padding="lg">
          <ServiceToolbar
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
          />
        </Card>

        {loading ? (
          <Loading text="Đang tải danh sách dịch vụ..." />
        ) : (
          <ServiceTable
            services={filteredServices}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onRefresh={loadServices}
          />
        )}
      </div>

      <ServiceModal
        open={openModal}
        service={editingService}
        onClose={handleCloseModal}
        onSuccess={handleSuccess}
      />
    </>
  );
}