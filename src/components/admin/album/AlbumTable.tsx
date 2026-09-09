"use client";

import Image from "next/image";
import {
  Pencil,
  Trash2,
  Images,
  Star,
  Eye,
} from "lucide-react";
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

const categoryConfig: Record<
  string,
  {
    label: string;
    variant:
      | "primary"
      | "success"
      | "warning"
      | "danger"
      | "info"
      | "default";
  }
> = {

  studio: {
    label: "Studio",
    variant: "primary",
  },

  wedding: {
    label: "Wedding Day",
    variant: "danger",
  },

  outdoor: {
    label: "Ngoại cảnh",
    variant: "success",
  },

  dalat: {
    label: "Đà Lạt",
    variant: "info",
  },

  phimtruong: {
    label: "Phim Trường",
    variant: "warning",
  },

};

export default function AlbumTable({
  albums,
  onDelete,
  onEdit,
  onRefresh,
}: Props) {

  const updateField = async (
    id: string,
    field:
      | "featured"
      | "isPublished",
    value: boolean
  ) => {

    try {

      const res = await fetch(
        "/api/admin/album/toggle",
        {
          method: "PATCH",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            id,
            field,
            value,
          }),
        }
      );

      const data =
        await res.json();

      if (!data.success) {

        toast.error(
          "Cập nhật thất bại"
        );

        return;

      }

      toast.success(
        "Đã cập nhật"
      );

      onRefresh();

    } catch {

      toast.error(
        "Có lỗi xảy ra"
      );

    }

  };

  return (

    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-sm
      "
    >

      <table className="w-full">

        <thead className="bg-[#faf8f4]">

          <tr>

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
              Sắp xếp
            </th>

            <th className="p-5 text-center">
              Thao tác
            </th>

          </tr>

        </thead>

        <tbody>
                    {albums.map((album) => {

            const category =
              categoryConfig[
                album.category
              ] ?? {
                label:
                  album.category,
                variant:
                  "default" as const,
              };

            return (

              <tr
                key={album._id}
                className="
                  border-t
                  transition-all
                  hover:bg-[#faf8f4]
                "
              >

                <td className="p-5">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        relative
                        h-24
                        w-36
                        overflow-hidden
                        rounded-2xl
                        border
                        border-gray-200
                      "
                    >

                      <Image
                        src={album.cover}
                        alt={album.title}
                        fill
                        className="object-cover"
                      />

                    </div>

                    <div className="space-y-2">

                      <h3 className="font-semibold text-gray-800">
                        {album.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        /{album.slug}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-500">

                        <span className="flex items-center gap-1">

                          <Images size={14} />

                          {album.images.length} ảnh

                        </span>

                        <span>

                          #{album.sortOrder}

                        </span>

                      </div>

                    </div>

                  </div>

                </td>

                <td className="p-5">

                  <Badge
                    variant={
                      category.variant
                    }
                  >
                    {category.label}
                  </Badge>

                </td>

                <td className="p-5">

                  <div className="flex justify-center">

                    <Switch
                      checked={
                        album.isPublished
                      }
                      onChange={(
                        checked
                      ) =>
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
                      checked={
                        album.featured
                      }
                      onChange={(
                        checked
                      ) =>
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

                  <div className="flex justify-center">

                    <span
                      className="
                        rounded-xl
                        bg-gray-100
                        px-3
                        py-1
                        text-sm
                        font-semibold
                      "
                    >
                      {album.sortOrder}
                    </span>

                  </div>

                </td>

                <td className="p-5">

                  <div className="flex justify-center gap-2">
                                        <Button
                      variant="secondary"
                      size="sm"
                      leftIcon={
                        <Pencil size={16} />
                      }
                      onClick={() =>
                        onEdit(album)
                      }
                    >
                      Sửa
                    </Button>

                    <Button
                      variant="danger"
                      size="sm"
                      leftIcon={
                        <Trash2 size={16} />
                      }
                      onClick={() =>
                        onDelete(album._id)
                      }
                    >
                      Xóa
                    </Button>

                  </div>

                </td>

              </tr>

            );

          })}

          {albums.length === 0 && (

            <tr>

              <td
                colSpan={6}
                className="
                  p-16
                  text-center
                "
              >

                <div className="flex flex-col items-center gap-4">

                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-100
                    "
                  >

                    <Images
                      size={34}
                      className="text-gray-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-gray-700">
                      Chưa có Album nào
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Hãy tạo Album đầu tiên cho website.
                    </p>

                  </div>

                </div>

              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}