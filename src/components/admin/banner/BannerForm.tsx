"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";
import Input from "@/components/admin/ui/Input";
import Switch from "@/components/admin/ui/Switch";
import Textarea from "@/components/admin/ui/Textarea";
import FormCard from "@/components/admin/ui/FormCard";

import UploadImage from "@/components/admin/album/UploadImage";

import type { Banner } from "@/types/banner";

type Props = {
  banner?: Banner | null;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function BannerForm({
  banner,
  onSuccess,
  onCancel,
}: Props) {
  const [title, setTitle] = useState("");

  const [subtitle, setSubtitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [image, setImage] =
    useState("");

  const [buttonText, setButtonText] =
    useState("");

  const [buttonLink, setButtonLink] =
    useState("");

  const [isPublished, setIsPublished] =
    useState(true);

  const [sortOrder, setSortOrder] =
    useState(0);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (banner) {
      setTitle(banner.title);

      setSubtitle(banner.subtitle);

      setDescription(
        banner.description
      );

      setImage(banner.image);

      setButtonText(
        banner.buttonText
      );

      setButtonLink(
        banner.buttonLink
      );

      setIsPublished(
        banner.isPublished
      );

      setSortOrder(
        banner.sortOrder
      );
    } else {
      setTitle("");

      setSubtitle("");

      setDescription("");

      setImage("");

      setButtonText("");

      setButtonLink("");

      setIsPublished(true);

      setSortOrder(0);
    }
  }, [banner]);
    const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Vui lòng nhập tiêu đề Banner");
      return;
    }

    if (!image) {
      toast.error("Vui lòng chọn ảnh Banner");
      return;
    }

    setLoading(true);

    try {
      const url = banner
        ? `/api/admin/banner/${banner._id}`
        : "/api/admin/banner";

      const method = banner
        ? "PATCH"
        : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          subtitle,
          description,
          image,
          buttonText,
          buttonLink,
          isPublished,
          sortOrder,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(
          banner
            ? "Không thể cập nhật Banner"
            : "Không thể tạo Banner"
        );

        return;
      }

      toast.success(
        banner
          ? "Cập nhật Banner thành công"
          : "Tạo Banner thành công"
      );

      if (!banner) {
        setTitle("");
        setSubtitle("");
        setDescription("");
        setImage("");
        setButtonText("");
        setButtonLink("");
        setIsPublished(true);
        setSortOrder(0);
      }

      onSuccess?.();

    } catch (error) {
      console.error(error);

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
            title="Thông tin Banner"
            description="Thông tin hiển thị trên Hero."
          >
            <div className="space-y-5">

              <Input
                label="Tiêu đề"
                required
                placeholder="DO WEDDING"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />

              <Input
                label="Tiêu đề phụ"
                placeholder="Lưu giữ khoảnh khắc hạnh phúc"
                value={subtitle}
                onChange={(e) =>
                  setSubtitle(e.target.value)
                }
              />

              <Textarea
                label="Mô tả"
                rows={5}
                showCount
                maxLength={500}
                placeholder="Nhập mô tả..."
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
              />

              <div className="grid gap-5 md:grid-cols-2">

                <Input
                  label="Text Button"
                  placeholder="Đặt lịch ngay"
                  value={buttonText}
                  onChange={(e) =>
                    setButtonText(
                      e.target.value
                    )
                  }
                />

                <Input
                  label="Link Button"
                  placeholder="/contact"
                  value={buttonLink}
                  onChange={(e) =>
                    setButtonLink(
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

          </FormCard>
                    <FormCard
            title="Ảnh Banner"
            description="Ảnh hiển thị trên Hero."
          >
            <UploadImage
              title="Banner"
              value={image}
              onChange={setImage}
            />
          </FormCard>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <FormCard
            title="Cài đặt"
            description="Thiết lập hiển thị Banner."
          >
            <div className="space-y-6">

              <Switch
                label="Xuất bản"
                description="Hiển thị Banner trên Website."
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

              {banner && (
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
              >
                {banner
                  ? "Cập nhật Banner"
                  : "Lưu Banner"}
              </Button>

            </div>

          </FormCard>

        </div>

      </div>

    </form>
  );
}