"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Input from "@/components/admin/ui/Input";
import Textarea from "@/components/admin/ui/Textarea";
import Switch from "@/components/admin/ui/Switch";
import Button from "@/components/admin/ui/Button";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import GalleryUpload from "@/components/admin/ui/GalleryUpload";
import { RichEditor } from "@/components/admin/ui/editor";

import type { Service } from "@/types/service";

type Props = {
  service?: Service | null;
  onSuccess: () => void;
};

export default function ServiceForm({
  service,
  onSuccess,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [sortOrder, setSortOrder] =
    useState(0);

  const [description, setDescription] =
    useState("");

  const [content, setContent] =
    useState("");

  const [cover, setCover] =
    useState("");

  const [gallery, setGallery] =
    useState<string[]>([]);

  const [featured, setFeatured] =
    useState(false);

  const [published, setPublished] =
    useState(true);

  useEffect(() => {
    if (service) {
      setTitle(service.title);

      setSlug(service.slug);

      setPrice(
        service.price.toString()
      );

      setSortOrder(
        service.sortOrder ?? 0
      );

      setDescription(
        service.description ?? ""
      );

      setContent(
        service.content ?? ""
      );

      setCover(
        service.cover ?? ""
      );

      setGallery(
        service.gallery ?? []
      );

      setFeatured(
        service.featured
      );

      setPublished(
        service.published
      );
    } else {
      setTitle("");

      setSlug("");

      setPrice("");

      setSortOrder(0);

      setDescription("");

      setContent("");

      setCover("");

      setGallery([]);

      setFeatured(false);

      setPublished(true);
    }
  }, [service]);

  useEffect(() => {
    if (service) return;

    setSlug(
      title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
    );
  }, [title, service]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error(
        "Vui lòng nhập tên dịch vụ"
      );
      return;
    }

    if (title.trim().length < 3) {
      toast.error(
        "Tên dịch vụ phải từ 3 ký tự"
      );
      return;
    }

    if (!slug.trim()) {
      toast.error(
        "Vui lòng nhập slug"
      );
      return;
    }

    if (
      !/^[a-z0-9-]+$/.test(slug)
    ) {
      toast.error(
        "Slug chỉ gồm chữ thường, số và dấu -"
      );
      return;
    }

    if (
      Number(price) < 0
    ) {
      toast.error(
        "Giá không hợp lệ"
      );
      return;
    }

    try {
      setLoading(true);

      const payload = {
        title,
        slug,
        description,
        content,
        cover,
        gallery,
        sortOrder,
        price:
          Number(price) || 0,
        featured,
        published,
      };

      const url = service
        ? `/api/admin/service/${service._id}`
        : "/api/admin/service";

      const method = service
        ? "PATCH"
        : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          payload
        ),
      });

      const data =
        await res.json();

      if (!data.success) {
        toast.error(
          data.message ??
            "Lưu thất bại"
        );
        return;
      }

      toast.success(
        service
          ? "Đã cập nhật dịch vụ"
          : "Đã thêm dịch vụ"
      );

      onSuccess();
    } catch (error) {
      console.error(error);

      toast.error(
        "Có lỗi xảy ra"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
  <form
    onSubmit={handleSubmit}
    className="space-y-8"
  >
    {/* Cover */}

    <ImageUpload
      label="Ảnh đại diện"
      value={cover}
      onChange={setCover}
    />

    {/* Basic Info */}

    <div className="grid gap-6 md:grid-cols-2">
      <Input
        label="Tên dịch vụ"
        placeholder="Ví dụ: Studio Package"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        required
      />

      <Input
        label="Slug"
        placeholder="studio-package"
        value={slug}
        onChange={(e) =>
          setSlug(e.target.value)
        }
        required
      />

      <Input
        label="Giá"
        type="number"
        placeholder="5900000"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <Input
        label="Thứ tự hiển thị"
        type="number"
        placeholder="0"
        value={sortOrder.toString()}
        onChange={(e) =>
          setSortOrder(
            Number(e.target.value)
          )
        }
      />
    </div>

    {/* Description */}

    <Textarea
      label="Mô tả ngắn"
      placeholder="Mô tả ngắn hiển thị ở danh sách dịch vụ..."
      rows={4}
      value={description}
      onChange={(e) =>
        setDescription(e.target.value)
      }
    />

    {/* Gallery */}

    <GalleryUpload
      value={gallery}
      onChange={setGallery}
    />

    {/* Rich Editor */}

    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        Nội dung chi tiết
      </label>

      <RichEditor
        value={content}
        onChange={setContent}
        placeholder="Nhập nội dung chi tiết dịch vụ..."
      />
    </div>

    {/* Settings */}

    <div className="grid gap-4 md:grid-cols-2">
      <Switch
        checked={featured}
        onChange={setFeatured}
        label="Dịch vụ nổi bật"
        description="Hiển thị tại khu vực nổi bật."
      />

      <Switch
        checked={published}
        onChange={setPublished}
        label="Xuất bản"
        description="Hiển thị trên website."
      />
    </div>

    {/* Footer */}

    <div className="sticky bottom-0 -mx-8 border-t border-gray-200 bg-white px-8 py-5">
      <div className="flex justify-end">
        <Button
          type="submit"
          loading={loading}
        >
          {service
            ? "Cập nhật dịch vụ"
            : "Thêm dịch vụ"}
        </Button>
      </div>
    </div>
  </form>
);
}