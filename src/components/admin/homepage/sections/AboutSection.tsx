"use client";

import FormCard from "@/components/admin/ui/FormCard";
import Input from "@/components/admin/ui/Input";
import Textarea from "@/components/admin/ui/Textarea";
import ImageUpload from "@/components/admin/ui/ImageUpload";

import type { HomePageData } from "../types";

interface Props {
  data: HomePageData;
  onChange: (
    field: keyof HomePageData,
    value: string
  ) => void;
}

export default function AboutSection({
  data,
  onChange,
}: Props) {
  return (
    <FormCard title="Giới thiệu">
      <div className="space-y-8">
        <Input
          label="Subtitle"
          value={data.aboutSubtitle}
          onChange={(e) =>
            onChange(
              "aboutSubtitle",
              e.target.value
            )
          }
        />

        <Input
          label="Tiêu đề"
          value={data.aboutTitle}
          onChange={(e) =>
            onChange(
              "aboutTitle",
              e.target.value
            )
          }
        />

        <Textarea
          label="Mô tả"
          rows={6}
          value={data.aboutDescription}
          onChange={(e) =>
            onChange(
              "aboutDescription",
              e.target.value
            )
          }
        />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="mb-2 text-sm font-medium text-gray-700">
              Ảnh trái
            </div>

            <ImageUpload
              value={data.aboutImage1}
              onChange={(url) =>
                onChange(
                  "aboutImage1",
                  url
                )
              }
            />
          </div>

          <div>
            <div className="mb-2 text-sm font-medium text-gray-700">
              Ảnh phải
            </div>

            <ImageUpload
              value={data.aboutImage2}
              onChange={(url) =>
                onChange(
                  "aboutImage2",
                  url
                )
              }
            />
          </div>
        </div>
      </div>
    </FormCard>
  );
}