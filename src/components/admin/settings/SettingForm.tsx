"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";
import FormCard from "@/components/admin/ui/FormCard";
import Input from "@/components/admin/ui/Input";
import Textarea from "@/components/admin/ui/Textarea";

import UploadImage from "@/components/admin/album/UploadImage";

import type { Setting } from "./SettingManager";

type Props = {
  setting: Setting;
  onSuccess: () => void;
};

export default function SettingForm({
  setting,
  onSuccess,
}: Props) {

  const [form, setForm] =
    useState<Setting>(setting);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    setForm(setting);
  }, [setting]);

  const handleChange = (
    key: keyof Setting,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
    const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/admin/settings",
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!data.success) {
        toast.error(
          "Không thể lưu cài đặt."
        );

        return;
      }

      toast.success(
        "Đã lưu cài đặt."
      );

      onSuccess();

    } catch (error) {
      console.error(error);

      toast.error(
        "Có lỗi xảy ra."
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
      <div className="grid gap-8 lg:grid-cols-3">

        {/* LEFT */}

        <div className="space-y-6 lg:col-span-2">

          <FormCard
            title="Thông tin Website"
            description="Thông tin chung của DO WEDDING."
          >

            <div className="space-y-5">

              <Input
                label="Tên Website"
                value={form.websiteName}
                onChange={(e) =>
                  handleChange(
                    "websiteName",
                    e.target.value
                  )
                }
              />

              <Input
                label="Hotline"
                value={form.hotline}
                onChange={(e) =>
                  handleChange(
                    "hotline",
                    e.target.value
                  )
                }
              />

              <Input
                label="Email"
                value={form.email}
                onChange={(e) =>
                  handleChange(
                    "email",
                    e.target.value
                  )
                }
              />

              <Textarea
                label="Địa chỉ"
                rows={4}
                value={form.address}
                onChange={(e) =>
                  handleChange(
                    "address",
                    e.target.value
                  )
                }
              />

            </div>

          </FormCard>

          <FormCard
            title="Mạng xã hội"
            description="Thông tin liên kết."
          >

            <div className="space-y-5">

              <Input
                label="Facebook"
                value={form.facebook}
                onChange={(e) =>
                  handleChange(
                    "facebook",
                    e.target.value
                  )
                }
              />

              <Input
                label="Instagram"
                value={form.instagram}
                onChange={(e) =>
                  handleChange(
                    "instagram",
                    e.target.value
                  )
                }
              />

              <Input
                label="TikTok"
                value={form.tiktok}
                onChange={(e) =>
                  handleChange(
                    "tiktok",
                    e.target.value
                  )
                }
              />

              <Input
                label="Youtube"
                value={form.youtube}
                onChange={(e) =>
                  handleChange(
                    "youtube",
                    e.target.value
                  )
                }
              />

            </div>

          </FormCard>
                    <FormCard
            title="Logo & Favicon"
            description="Hình ảnh thương hiệu."
          >

            <div className="space-y-8">

              <UploadImage
                title="Logo"
                value={form.logo}
                onChange={(url) =>
                  handleChange(
                    "logo",
                    url
                  )
                }
              />

              <UploadImage
                title="Favicon"
                value={form.favicon}
                onChange={(url) =>
                  handleChange(
                    "favicon",
                    url
                  )
                }
              />

            </div>

          </FormCard>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <FormCard
            title="SEO"
            description="Thông tin SEO Website."
          >

            <div className="space-y-5">

              <Input
                label="SEO Title"
                value={form.seoTitle}
                onChange={(e) =>
                  handleChange(
                    "seoTitle",
                    e.target.value
                  )
                }
              />

              <Textarea
                label="SEO Description"
                rows={5}
                value={form.seoDescription}
                onChange={(e) =>
                  handleChange(
                    "seoDescription",
                    e.target.value
                  )
                }
              />

            </div>

          </FormCard>

          <FormCard
            title="Footer"
            description="Thông tin cuối trang."
          >

            <div className="space-y-5">

              <Textarea
                label="Footer"
                rows={4}
                value={form.footer}
                onChange={(e) =>
                  handleChange(
                    "footer",
                    e.target.value
                  )
                }
              />

              <Input
                label="Copyright"
                value={form.copyright}
                onChange={(e) =>
                  handleChange(
                    "copyright",
                    e.target.value
                  )
                }
              />

              <Textarea
                label="Google Maps Embed"
                rows={5}
                value={form.googleMap}
                onChange={(e) =>
                  handleChange(
                    "googleMap",
                    e.target.value
                  )
                }
              />

            </div>

          </FormCard>

          <FormCard>

            <div className="flex justify-end">

              <Button
                type="submit"
                loading={loading}
              >
                Lưu cài đặt
              </Button>

            </div>

          </FormCard>

        </div>

      </div>

    </form>
  );
}