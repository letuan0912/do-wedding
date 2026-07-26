"use client";

import FormCard from "@/components/admin/ui/FormCard";
import ImageUpload from "@/components/admin/ui/ImageUpload";
import Input from "@/components/admin/ui/Input";

type Props = {
  thumbnail: string;
  setThumbnail: (value: string) => void;

  cover: string;
  setCover: (value: string) => void;

  banner: string;
  setBanner: (value: string) => void;

  mobileBanner: string;
  setMobileBanner: (value: string) => void;

  icon: string;
  setIcon: (value: string) => void;

  seoTitle: string;
  setSeoTitle: (value: string) => void;

  seoDescription: string;
  setSeoDescription: (value: string) => void;

  seoKeywords: string[];
  setSeoKeywords: (value: string[]) => void;
};

export default function ImageSeoSection({
  thumbnail,
  setThumbnail,

  cover,
  setCover,

  banner,
  setBanner,

  mobileBanner,
  setMobileBanner,

  icon,
  setIcon,

  seoTitle,
  setSeoTitle,

  seoDescription,
  setSeoDescription,

  seoKeywords,
  setSeoKeywords,
}: Props) {
  return (
    <>
      <FormCard title="Hình ảnh">
        <div className="space-y-6">
          {/* Thumbnail */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Thumbnail
            </label>

            <ImageUpload
              value={thumbnail}
              onChange={setThumbnail}
            />
          </div>

          {/* Cover */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Cover
            </label>

            <ImageUpload
              value={cover}
              onChange={setCover}
            />

            <p className="text-xs text-gray-500">
              Ảnh hiển thị lớn ở đầu trang chi tiết dịch vụ.
            </p>
          </div>

          {/* Banner Desktop */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Banner Desktop
            </label>

            <ImageUpload
              value={banner}
              onChange={setBanner}
            />
          </div>

          {/* Banner Mobile */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Banner Mobile
            </label>

            <ImageUpload
              value={mobileBanner}
              onChange={setMobileBanner}
            />
          </div>

          {/* Icon */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Icon
            </label>

            <ImageUpload
              value={icon}
              onChange={setIcon}
            />
          </div>
        </div>
      </FormCard>

      <FormCard title="SEO">
        <div className="space-y-6">
          <Input
            label="SEO Title"
            value={seoTitle}
            onChange={(e) =>
              setSeoTitle(e.target.value)
            }
          />

          <Input
            label="SEO Description"
            value={seoDescription}
            onChange={(e) =>
              setSeoDescription(e.target.value)
            }
          />

          <Input
            label="SEO Keywords"
            placeholder="wedding, studio, da lat"
            value={seoKeywords.join(", ")}
            onChange={(e) =>
              setSeoKeywords(
                e.target.value
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean)
              )
            }
          />
        </div>
      </FormCard>
    </>
  );
}