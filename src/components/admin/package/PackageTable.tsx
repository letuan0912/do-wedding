"use client";

import { useState } from "react";
import { toast } from "sonner";

import Badge from "@/components/admin/ui/Badge";
import Button from "@/components/admin/ui/Button";
import ConfirmDialog from "@/components/admin/ui/ConfirmDialog";
import DataTable from "@/components/admin/ui/DataTable";

import type { Package } from "@/types/package";

type Props = {
  data: Package[];
  onEdit: (item: Package) => void;
  onRefresh: () => void;
};

const money = (value: number) =>
  new Intl.NumberFormat("vi-VN").format(
    value
  );

export default function PackageTable({
  data,
  onEdit,
  onRefresh,
}: Props) {
  const [deleting, setDeleting] =
    useState<Package | null>(null);

  const handleDelete =
    async () => {
      if (!deleting) return;

      try {
        const res = await fetch(
          `/api/admin/package/${deleting._id}`,
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
          "Đã xóa gói dịch vụ."
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
    "Tên gói",
    "Dịch vụ",
    "Giá",
    "Trạng thái",
    "Thao tác",
  ]}
>
        {data.map((item) => (
          <tr key={item._id}>
            <td>
              <div className="space-y-1">
                <div className="font-medium">
                  {item.title}
                </div>

                <div className="flex gap-2 flex-wrap">
                  {item.badge && (
                    <Badge>
                      {item.badge}
                    </Badge>
                  )}

                  {item.featured && (
                    <Badge variant="warning">
                      Nổi bật
                    </Badge>
                  )}
                </div>
              </div>
            </td>

            <td>
              {item.serviceId &&
              typeof item.serviceId ===
                "object" &&
              "title" in item.serviceId
                ? item.serviceId.title
                : "-"}
            </td>

            <td>
              {item.salePrice > 0 ? (
                <div>
                  <div className="font-semibold text-red-600">
                    {money(
                      item.salePrice
                    )}{" "}
                    đ
                  </div>

                  <div className="text-sm text-gray-400 line-through">
                    {money(item.price)} đ
                  </div>
                </div>
              ) : (
                <div>
                  {money(item.price)} đ
                </div>
              )}
            </td>

            <td>
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
        title="Xóa gói dịch vụ?"
        description="Hành động này không thể hoàn tác."
        onCancel={() =>
          setDeleting(null)
        }
        onConfirm={handleDelete}
      />
    </>
  );
}