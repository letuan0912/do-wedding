"use client";

import Button from "@/components/admin/ui/Button";
import Card from "@/components/admin/ui/Card";

import type { Banner } from "@/types/banner";

type Props = {
  banners: Banner[];
  onEdit: (banner: Banner) => void;
  onRefresh: () => void;
};

export default function BannerTable({
  banners,
  onEdit,
}: Props) {
  if (banners.length === 0) {
    return (
      <Card padding="lg">
        <div className="py-16 text-center text-gray-500">
          Chưa có Banner nào.
        </div>
      </Card>
    );
  }

  return (
    <Card padding="none">
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Tiêu đề
              </th>

              <th className="px-6 py-4 text-left">
                Button
              </th>

              <th className="px-6 py-4 text-left">
                Hiển thị
              </th>

              <th className="px-6 py-4 text-left">
                Thứ tự
              </th>

              <th className="px-6 py-4 text-right">
                Thao tác
              </th>

            </tr>

          </thead>

          <tbody>

            {banners.map((item) => (

              <tr
                key={item._id}
                className="border-t"
              >

                <td className="px-6 py-5">

                  <div className="font-medium">
                    {item.title}
                  </div>

                  <div className="text-sm text-gray-500">
                    {item.subtitle}
                  </div>

                </td>

                <td className="px-6 py-5">
                  {item.buttonText}
                </td>

                <td className="px-6 py-5">

                  {item.isPublished ? (

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      Đang hiển thị
                    </span>

                  ) : (

                    <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
                      Ẩn
                    </span>

                  )}

                </td>

                <td className="px-6 py-5">
                  {item.sortOrder}
                </td>

                <td className="px-6 py-5 text-right">

                  <Button
                    variant="outline"
                    onClick={() => onEdit(item)}
                  >
                    Chỉnh sửa
                  </Button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </Card>
  );
}