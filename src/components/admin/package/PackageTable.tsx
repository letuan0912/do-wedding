"use client";

import { useState } from "react";
import { toast } from "sonner";

import DataTable from "@/components/admin/ui/DataTable";
import Badge from "@/components/admin/ui/Badge";
import Button from "@/components/admin/ui/Button";
import ConfirmDialog from "@/components/admin/ui/ConfirmDialog";

import type { Package } from "@/types/package";

type Props = {
  data: Package[];
  onEdit: (item: Package) => void;
  onRefresh: () => void;
};

export default function PackageTable({
  data,
  onEdit,
  onRefresh,
}: Props) {
  const [deleting, setDeleting] =
    useState<Package | null>(null);

  const handleDelete = async () => {
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

      if (!result.success) {
        toast.error(
          result.message ??
            "Xóa thất bại"
        );
        return;
      }

      toast.success(
        "Đã xóa gói"
      );

      setDeleting(null);

      onRefresh();
    } catch (err) {
      console.error(err);

      toast.error(
        "Có lỗi xảy ra"
      );
    }
  };

  return (
    <>
      <DataTable
        columns={[
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

                {item.badge && (
                  <Badge>
                    {item.badge}
                  </Badge>
                )}
              </div>
            </td>

            <td>
              {typeof item.serviceId ===
              "object"
                ? item.serviceId.title
                : "-"}
            </td>

            <td>
              <div className="space-y-1">
                {item.salePrice ? (
                  <>
                    <div className="text-red-600 font-semibold">
                      {item.salePrice.toLocaleString()}
                      đ
                    </div>

                    <div className="text-sm line-through text-gray-400">
                      {item.price.toLocaleString()}
                      đ
                    </div>
                  </>
                ) : (
                  <div>
                    {item.price.toLocaleString()}
                    đ
                  </div>
                )}
              </div>
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