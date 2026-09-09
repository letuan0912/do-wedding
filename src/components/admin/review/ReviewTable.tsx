"use client";

import Image from "next/image";
import {
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Star,
} from "lucide-react";

import Button from "@/components/admin/ui/Button";

import type { Review } from "./types";

interface Props {
  reviews: Review[];

  onEdit: (review: Review) => void;

  onDelete: (id: string) => void;

  onRefresh: () => void;
}

export default function ReviewTable({
  reviews,
  onEdit,
  onDelete,
}: Props) {
  if (reviews.length === 0) {
    return (
      <div className="rounded-2xl border bg-white py-20 text-center text-gray-500">
        Chưa có đánh giá nào.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white">

      <table className="w-full">

        <thead className="bg-[#faf8f5]">

          <tr>

            <th className="p-5 text-left">
              Avatar
            </th>

            <th className="p-5 text-left">
              Khách hàng
            </th>

            <th className="p-5 text-left">
              Địa điểm
            </th>

            <th className="p-5 text-center">
              Đánh giá
            </th>

            <th className="p-5 text-center">
              Trạng thái
            </th>

            <th className="p-5 text-center">
              Thao tác
            </th>

          </tr>

        </thead>

        <tbody>

          {reviews.map((item) => (

            <tr
              key={item._id}
              className="border-t hover:bg-gray-50"
            >

              <td className="p-5">

                <Image
                  src={
                    item.avatar ||
                    "/images/avatar-placeholder.png"
                  }
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

              </td>

              <td className="p-5">

                <div className="font-medium">
                  {item.name}
                </div>

                <div className="mt-1 line-clamp-2 text-sm text-gray-500">
                  {item.content}
                </div>

              </td>

              <td className="p-5">
                {item.location}
              </td>

              <td className="p-5">

                <div className="flex justify-center gap-1">

                  {Array.from({
                    length: item.rating,
                  }).map((_, i) => (

                    <Star
                      key={i}
                      size={16}
                      fill="#c8a86b"
                      color="#c8a86b"
                    />

                  ))}

                </div>

              </td>

              <td className="p-5 text-center">

                {item.published ? (

                  <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">

                    <Eye size={14} />

                    Hiển thị

                  </span>

                ) : (

                  <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">

                    <EyeOff size={14} />

                    Đã ẩn

                  </span>

                )}

              </td>

              <td className="p-5">

                <div className="flex justify-center gap-2">

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      onEdit(item)
                    }
                  >
                    <Pencil size={16} />
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() =>
                      onDelete(item._id)
                    }
                  >
                    <Trash2 size={16} />
                  </Button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}