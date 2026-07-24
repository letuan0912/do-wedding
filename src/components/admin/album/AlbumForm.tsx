"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";
import Input from "@/components/admin/ui/Input";
import Select from "@/components/admin/ui/Select";
import Textarea from "@/components/admin/ui/Textarea";
import Switch from "@/components/admin/ui/Switch";
import FormCard from "@/components/admin/ui/FormCard";

import UploadImage from "./UploadImage";

export type Album = {
  _id: string;
  title: string;
  description: string;
  category: string;
  cover: string;
  images: string[];
  featured: boolean;
  isPublished: boolean;
  sortOrder: number;
};

type Props = {
  album?: Album | null;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function AlbumForm({
  album,
  onSuccess,
  onCancel,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [category, setCategory] =
    useState("Studio");

  const [cover, setCover] = useState("");

  const [images, setImages] = useState<
    string[]
  >([]);

  const [featured, setFeatured] =
    useState(false);

  const [isPublished, setIsPublished] =
    useState(true);

  const [sortOrder, setSortOrder] =
    useState(0);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (album) {
      setTitle(album.title);
      setDescription(album.description);
      setCategory(album.category);

      setCover(album.cover);
      setImages(album.images);

      setFeatured(album.featured);
      setIsPublished(album.isPublished);
      setSortOrder(album.sortOrder);
    } else {
      setTitle("");
      setDescription("");
      setCategory("Studio");

      setCover("");
      setImages([]);

      setFeatured(false);
      setIsPublished(true);
      setSortOrder(0);
    }
  }, [album]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Vui lòng nhập tên Album");
      return;
    }

    if (!cover) {
      toast.error("Vui lòng chọn ảnh bìa");
      return;
    }

    setLoading(true);

    try {
      const url = album
        ? `/api/admin/album/${album._id}`
        : "/api/admin/album";

      const method = album
        ? "PATCH"
        : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          category,
          cover,
          images,
          featured,
          isPublished,
          sortOrder,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(
          album
            ? "Không thể cập nhật Album"
            : "Không thể tạo Album"
        );

        return;
      }

      toast.success(
        album
          ? "Cập nhật Album thành công"
          : "Tạo Album thành công"
      );

      if (!album) {
        setTitle("");
        setDescription("");
        setCategory("Studio");

        setCover("");
        setImages([]);

        setFeatured(false);
        setIsPublished(true);
        setSortOrder(0);
      }

      onSuccess?.();
    } catch {
      toast.error("Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid gap-8 lg:grid-cols-3">

        {/* LEFT */}

        <div className="space-y-6 lg:col-span-2">

          <FormCard
            title="Thông tin Album"
            description="Thông tin cơ bản của album."
          >
            <div className="space-y-5">

              <Input
                label="Tên Album"
                required
                placeholder="Ví dụ: Album cưới Đà Lạt"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />

              <Select
                label="Danh mục"
                required
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                options={[
                  {
                    label: "Studio",
                    value: "Studio",
                  },
                  {
                    label: "Wedding Day",
                    value:
                      "Wedding Day",
                  },
                  {
                    label: "Đà Lạt",
                    value: "Đà Lạt",
                  },
                  {
                    label: "Phim Trường",
                    value:
                      "Phim Trường",
                  },
                ]}
              />

              <Textarea
                label="Mô tả"
                rows={6}
                showCount
                maxLength={500}
                placeholder="Nhập mô tả Album..."
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
              />

            </div>

          </FormCard>

          <FormCard
            title="Thư viện ảnh"
            description="Tải lên nhiều ảnh cho Album."
          >

            <UploadImage
              title="Ảnh Album"
              multiple
              values={images}
              onMultipleChange={
                setImages
              }
            />

          </FormCard>
                  </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <FormCard
            title="Ảnh bìa"
            description="Ảnh đại diện của Album."
          >
            <UploadImage
              title="Ảnh bìa"
              value={cover}
              onChange={setCover}
            />
          </FormCard>

          <FormCard
            title="Cài đặt"
            description="Thiết lập hiển thị Album."
          >
            <div className="space-y-6">

              <Switch
                label="Album nổi bật"
                description="Hiển thị Album ở trang chủ."
                checked={featured}
                onChange={setFeatured}
              />

              <div className="border-t border-gray-100" />

              <Switch
                label="Xuất bản"
                description="Hiển thị Album trên Website."
                checked={isPublished}
                onChange={setIsPublished}
              />

              <div className="border-t border-gray-100" />

              <Input
                label="Thứ tự hiển thị"
                type="number"
                value={sortOrder}
                onChange={(e) =>
                  setSortOrder(
                    Number(e.target.value)
                  )
                }
                helperText="Số càng nhỏ sẽ hiển thị càng trước."
              />

            </div>

          </FormCard>

          <FormCard>

            <div className="flex items-center justify-end gap-3">

              {album && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                >
                  Hủy
                </Button>
              )}

              <Button
                type="submit"
                loading={loading}
                leftIcon={null}
              >
                {album
                  ? "Cập nhật Album"
                  : "Lưu Album"}
              </Button>

            </div>

          </FormCard>

        </div>

      </div>

    </form>
  );
}