"use client";

import Image from "next/image";

import Card from "@/components/admin/ui/Card";
import Badge from "@/components/admin/ui/Badge";
import Button from "@/components/admin/ui/Button";

import type { Service } from "@/types/service";

type Props = {
  services: Service[];
  onEdit: (service: Service) => void;
  onDelete: (id: string) => void;
  onRefresh: () => void;
};

export default function ServiceTable({
  services,
  onEdit,
  onDelete,
}: Props) {
  return (
    <Card padding="none">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Dịch vụ
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Giá
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Nổi bật
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Hiển thị
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Thứ tự
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Thao tác
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {services.map((service) => (
              <tr
                key={service._id}
                className="transition hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gray-100">
                      {service.cover ? (
                        <Image
                          src={service.cover}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
                          No Image
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">
                        {service.title}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {service.slug}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  {service.price.toLocaleString("vi-VN")} ₫
                </td>

                <td className="px-6 py-4 text-center">
                  <Badge
                    variant={
                      service.featured
                        ? "success"
                        : "default"
                    }
                  >
                    {service.featured
                      ? "Có"
                      : "Không"}
                  </Badge>
                </td>

                <td className="px-6 py-4 text-center">
                  <Badge
                    variant={
                      service.published
                        ? "primary"
                        : "warning"
                    }
                  >
                    {service.published
                      ? "Hiển thị"
                      : "Ẩn"}
                  </Badge>
                </td>

                <td className="px-6 py-4 text-center">
                  {service.sortOrder}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        onEdit(service)
                      }
                    >
                      Sửa
                    </Button>

                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() =>
                        onDelete(service._id)
                      }
                    >
                      Xóa
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {services.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            Chưa có dịch vụ nào.
          </div>
        )}
      </div>
    </Card>
  );
}