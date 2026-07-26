"use client";

import Input from "@/components/admin/ui/Input";
import Textarea from "@/components/admin/ui/Textarea";
import FormCard from "@/components/admin/ui/FormCard";
import { RichEditor } from "@/components/admin/ui/editor";

type Props = {
  title: string;
  setTitle: (value: string) => void;

  slug: string;
  setSlug: (value: string) => void;

  subtitle: string;
  setSubtitle: (value: string) => void;

  price: string;
  setPrice: (value: string) => void;

  shortDescription: string;
  setShortDescription: (value: string) => void;

  story: string;
  setStory: (value: string) => void;

  content: string;
  setContent: (value: string) => void;
};

export default function BasicInfoSection({
  title,
  setTitle,

  slug,
  setSlug,

  subtitle,
  setSubtitle,

  price,
  setPrice,

  shortDescription,
  setShortDescription,

  story,
  setStory,

  content,
  setContent,
}: Props) {
  return (
    <FormCard title="Thông tin dịch vụ">
      <div className="space-y-6">
        <Input
          label="Tên dịch vụ"
          placeholder="Nhập tên dịch vụ..."
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <Input
          label="Slug"
          placeholder="studio-da-lat"
          value={slug}
          onChange={(e) =>
            setSlug(e.target.value)
          }
        />

        <Input
          label="Tiêu đề phụ"
          placeholder="Luxury Wedding Collection"
          value={subtitle}
          onChange={(e) =>
            setSubtitle(e.target.value)
          }
        />

        <Input
          label="Giá"
          placeholder="Từ 5.900.000đ hoặc Liên hệ"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <Textarea
          label="Mô tả ngắn"
          rows={4}
          placeholder="Mô tả ngắn..."
          value={shortDescription}
          onChange={(e) =>
            setShortDescription(
              e.target.value
            )
          }
        />

        <Textarea
          label="Câu chuyện dịch vụ"
          rows={8}
          placeholder="Giới thiệu chi tiết về dịch vụ..."
          value={story}
          onChange={(e) =>
            setStory(e.target.value)
          }
        />

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Nội dung chi tiết
          </label>

          <RichEditor
            value={content}
            onChange={setContent}
          />
        </div>
      </div>
    </FormCard>
  );
}