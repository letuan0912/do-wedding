"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

import Badge from "@/components/admin/ui/Badge";
import Button from "@/components/admin/ui/Button";
import ConfirmDialog from "@/components/admin/ui/ConfirmDialog";
import DataTable from "@/components/admin/ui/DataTable";

import type { Service } from "@/types/service";

type Props = {
  data: Service[];
  onEdit: (item: Service) => void;
  onRefresh: () => void;
};

export default function ServiceTable({
  data,
  onEdit,
  onRefresh,
}: Props) {
  const [deleting, setDeleting] =
    useState<Service | null>(null);

  const handleDelete =
    async () => {
      if (!deleting) return;

      try {
        const res = await fetch(
          `/api/admin/service/${deleting._id}`,
          {
            method: "DELETE",
          }
        );

        const result =
          await res.json();

        if (!res.ok) {
          toast.error(
            result.message ??
              "Xóa thất bại"
          );
          return;
        }

        toast.success(
          "Đã xóa dịch vụ."
        );

        setDeleting(null);

        onRefresh();
      } catch (error) {
        console.error(error);

        toast.error(
          "Có lỗi xảy ra."
        );
      }
    };

  return (
    <>
      <DataTable
        headers={[
          "Ảnh",
          "Dịch vụ",
          "Package",
          "Trạng thái",
          "Thao tác",
        ]}
      >
        {data.map((item) => (
          <tr key={item._id}>
            <td>
              <div className="relative h-14 w-14 overflow-hidden rounded-lg border">
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-gray-400">
                    No Image
                  </div>
                )}
              </div>
            </td>

            <td>
              <div className="space-y-1">
                <div className="font-medium">
                  {item.title}
                </div>

                <div className="text-sm text-gray-500">
                  /{item.slug}
                </div>

                <div className="flex gap-2 flex-wrap">
                  {item.featured && (
                    <Badge variant="warning">
                      Nổi bật
                    </Badge>
                  )}
                </div>
              </div>
            </td>

            <td>
              {item.packageCount ?? 0}
            </td>

            <td>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={
                    item.published
                      ? "success"
                      : "secondary"
                  }
                >
                  {item.published
                    ? "Hiển thị"
                    : "Ẩn"}
                </Badge>

                {item.featured && (
                  <Badge variant="warning">
                    Nổi bật
                  </Badge>
                )}
              </div>
            </td>

            <td>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    onEdit(item)
                  }
                >
                  Sửa
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() =>
                    setDeleting(item)
                  }
                >
                  Xóa
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </DataTable>

      <ConfirmDialog
  open={!!deleting}
  title="Xóa dịch vụ?"
  description="Hành động này không thể hoàn tác."
  onClose={() => setDeleting(null)}
  onConfirm={handleDelete}
/>
    </>
  );
}