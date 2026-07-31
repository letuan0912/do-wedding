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

export default function HeroSection({
  data,
  onChange,
}: Props) {
  return (
    <FormCard title="Hero Banner">
      <div className="space-y-8">
        {/* Badge + Highlight */}
        <div className="grid grid-cols-2 gap-6">
          <Input
            label="Badge"
            value={data.heroBadge}
            onChange={(e) =>
              onChange(
                "heroBadge",
                e.target.value
              )
            }
          />

          <Input
            label="Highlight"
            value={data.heroHighlight}
            onChange={(e) =>
              onChange(
                "heroHighlight",
                e.target.value
              )
            }
          />
        </div>

        {/* Title */}
        <div className="grid grid-cols-2 gap-6">
          <Input
            label="Tiêu đề dòng 1"
            value={data.heroTitle1}
            onChange={(e) =>
              onChange(
                "heroTitle1",
                e.target.value
              )
            }
          />

          <Input
            label="Tiêu đề dòng 2"
            value={data.heroTitle2}
            onChange={(e) =>
              onChange(
                "heroTitle2",
                e.target.value
              )
            }
          />
        </div>

        {/* Description */}
        <Textarea
          label="Mô tả"
          rows={5}
          value={data.heroDescription}
          onChange={(e) =>
            onChange(
              "heroDescription",
              e.target.value
            )
          }
        />

        {/* Hero Assets */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-700">
              Ảnh nền Hero
            </h4>

            <ImageUpload
              value={data.heroBackground}
              onChange={(url) =>
                onChange(
                  "heroBackground",
                  url
                )
              }
            />
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-700">
              Poster Video
            </h4>

            <ImageUpload
              value={data.heroPoster}
              onChange={(url) =>
                onChange(
                  "heroPoster",
                  url
                )
              }
            />
          </div>
        </div>

        <Input
          label="Video URL"
          placeholder="https://..."
          value={data.heroVideo}
          onChange={(e) =>
            onChange(
              "heroVideo",
              e.target.value
            )
          }
        />

        {/* Primary Button */}
        <div className="grid grid-cols-2 gap-6">
          <Input
            label="Tên nút chính"
            value={data.heroPrimaryButtonText}
            onChange={(e) =>
              onChange(
                "heroPrimaryButtonText",
                e.target.value
              )
            }
          />

          <Input
            label="Link nút chính"
            value={data.heroPrimaryButtonLink}
            onChange={(e) =>
              onChange(
                "heroPrimaryButtonLink",
                e.target.value
              )
            }
          />
        </div>

        {/* Secondary Button */}
        <div className="grid grid-cols-2 gap-6">
          <Input
            label="Tên nút phụ"
            value={data.heroSecondaryButtonText}
            onChange={(e) =>
              onChange(
                "heroSecondaryButtonText",
                e.target.value
              )
            }
          />

          <Input
            label="Link nút phụ"
            value={data.heroSecondaryButtonLink}
            onChange={(e) =>
              onChange(
                "heroSecondaryButtonLink",
                e.target.value
              )
            }
          />
        </div>
      </div>
    </FormCard>
  );
}