 "use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";
import Badge from "@/components/admin/ui/Badge";
import Switch from "@/components/admin/ui/Switch";

import type { Album } from "@/types/album";

type Props = {
  albums: Album[];
  onDelete: (id: string) => void;
  onEdit: (album: Album) => void;
  onRefresh: () => void;
};

export default function AlbumTable({
  albums,
  onDelete,
  onEdit,
  onRefresh,
}: Props) {
  const updateField = async (
    id: string,
    field: "featured" | "isPublished",
    value: boolean
  ) => {
    try {
      const res = await fetch("/api/admin/album/toggle", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          field,
          value,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error("Cập nhật thất bại");
        return;
      }

      toast.success("Đã cập nhật");

      onRefresh();
    } catch {
      toast.error("Có lỗi xảy ra");
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-[#faf8f4]">
          <tr>
            <th className="p-5 text-left">Ảnh</th>

            <th className="p-5 text-left">
              Album
            </th>

            <th className="p-5 text-left">
              Danh mục
            </th>

            <th className="p-5 text-center">
              Hiển thị
            </th>

            <th className="p-5 text-center">
              Nổi bật
            </th>

            <th className="p-5 text-center">
              Thao tác
            </th>
          </tr>
        </thead>

        <tbody>          {albums.map((album) => (
            <tr
              key={album._id}
              className="border-t transition hover:bg-[#faf8f4]"
            >
              <td className="p-5">
                <div className="relative h-20 w-32 overflow-hidden rounded-xl">
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </td>

              <td className="p-5">
                <div className="space-y-1">
                  <p className="font-medium text-gray-800">
                    {album.title}
                  </p>

                  <p className="text-sm text-gray-500">
                    {album.images.length} ảnh
                  </p>
                </div>
              </td>

              <td className="p-5">
                <Badge variant="info">
                  {album.category}
                </Badge>
              </td>

              <td className="p-5">
                <div className="flex justify-center">
                  <Switch
                    checked={album.isPublished}
                    onChange={(checked) =>
                      updateField(
                        album._id,
                        "isPublished",
                        checked
                      )
                    }
                  />
                </div>
              </td>

              <td className="p-5">
                <div className="flex justify-center">
                  <Switch
                    checked={album.featured}
                    onChange={(checked) =>
                      updateField(
                        album._id,
                        "featured",
                        checked
                      )
                    }
                  />
                </div>
              </td>

              <td className="p-5">
                <div className="flex justify-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onEdit(album)}
                    leftIcon={<Pencil size={16} />}
                  >
                    Sửa
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() =>
                      onDelete(album._id)
                    }
                    leftIcon={<Trash2 size={16} />}
                  >
                    Xóa
                  </Button>
                </div>
              </td>
            </tr>
          ))}

          {albums.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="p-10 text-center text-gray-500"
              >
                Chưa có Album nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}