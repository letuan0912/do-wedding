"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";
import Input from "@/components/admin/ui/Input";
import Textarea from "@/components/admin/ui/Textarea";
import Switch from "@/components/admin/ui/Switch";
import FormCard from "@/components/admin/ui/FormCard";

import UploadImage from "../album/UploadImage";

import type { Review } from "./types";

type Props = {
  review?: Review | null;
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function ReviewForm({
  review,
  onSuccess,
  onCancel,
}: Props) {
  const [name, setName] = useState("");

  const [location, setLocation] =
    useState("");

  const [content, setContent] =
    useState("");

  const [avatar, setAvatar] =
    useState("");

  const [image, setImage] =
    useState("");

  const [rating, setRating] =
    useState(5);

  const [published, setPublished] =
    useState(true);

  const [sortOrder, setSortOrder] =
    useState(0);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (review) {
      setName(review.name);

      setLocation(review.location);

      setContent(review.content);

      setAvatar(review.avatar);

      setImage(review.image);

      setRating(review.rating);

      setPublished(review.published);

      setSortOrder(review.sortOrder);
    } else {
      setName("");

      setLocation("");

      setContent("");

      setAvatar("");

      setImage("");

      setRating(5);

      setPublished(true);

      setSortOrder(0);
    }
  }, [review]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error(
        "Vui lòng nhập tên khách hàng."
      );
      return;
    }

    if (!content.trim()) {
      toast.error(
        "Vui lòng nhập nội dung đánh giá."
      );
      return;
    }

    setLoading(true);

    try {
      const url = review
        ? `/api/admin/review/${review._id}`
        : "/api/admin/review";

      const method = review
        ? "PUT"
        : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name,
          location,
          content,
          avatar,
          image,
          rating,
          published,
          sortOrder,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(
          review
            ? "Không thể cập nhật đánh giá."
            : "Không thể tạo đánh giá."
        );

        return;
      }

      toast.success(
        review
          ? "Cập nhật thành công."
          : "Thêm đánh giá thành công."
      );

      if (!review) {
        setName("");
        setLocation("");
        setContent("");
        setAvatar("");
        setImage("");
        setRating(5);
        setPublished(true);
        setSortOrder(0);
      }

      onSuccess?.();
    } catch (error) {
      console.error(error);

      toast.error("Có lỗi xảy ra.");
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
            title="Thông tin khách hàng"
            description="Thông tin sẽ hiển thị trên Website."
          >
            <div className="space-y-5">

              <Input
                label="Tên khách hàng"
                required
                placeholder="Ví dụ: Nguyễn Văn A"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              <Input
                label="Địa điểm"
                placeholder="Ví dụ: TP. Hồ Chí Minh"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
              />

              <Textarea
                label="Nội dung đánh giá"
                rows={7}
                showCount
                maxLength={1000}
                placeholder="Nhập cảm nhận của khách hàng..."
                value={content}
                onChange={(e) =>
                  setContent(e.target.value)
                }
              />

            </div>

          </FormCard>

          <FormCard
            title="Ảnh cưới"
            description="Ảnh lớn hiển thị trong phần Testimonials."
          >

            <UploadImage
              title="Ảnh cưới"
              value={image}
              onChange={setImage}
            />

          </FormCard>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <FormCard
            title="Avatar"
            description="Ảnh đại diện khách hàng."
          >

            <UploadImage
              title="Avatar"
              value={avatar}
              onChange={setAvatar}
            />

          </FormCard>

          <FormCard
            title="Cài đặt"
            description="Thiết lập hiển thị Review."
          >

            <div className="space-y-6">

              <Input
                label="Đánh giá"
                type="number"
                min={1}
                max={5}
                value={rating}
                onChange={(e) =>
                  setRating(
                    Number(e.target.value)
                  )
                }
                helperText="Từ 1 đến 5 sao."
              />

              <Switch
                label="Xuất bản"
                description="Hiển thị Review trên Website."
                checked={published}
                onChange={setPublished}
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

              {review && (
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
                {review
                  ? "Cập nhật đánh giá"
                  : "Lưu đánh giá"}
              </Button>

            </div>

          </FormCard>

        </div>

      </div>

    </form>
  );
}