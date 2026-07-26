"use client";

import FormCard from "@/components/admin/ui/FormCard";
import Input from "@/components/admin/ui/Input";
import Switch from "@/components/admin/ui/Switch";

type Props = {
  featured: boolean;
  setFeatured: (value: boolean) => void;

  published: boolean;
  setPublished: (value: boolean) => void;

  sortOrder: number;
  setSortOrder: (value: number) => void;
};

export default function SettingSection({
  featured,
  setFeatured,

  published,
  setPublished,

  sortOrder,
  setSortOrder,
}: Props) {
  return (
    <FormCard title="Thiết lập">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">
              Dịch vụ nổi bật
            </p>

            <p className="text-sm text-gray-500">
              Hiển thị ở khu vực nổi bật trên website.
            </p>
          </div>

          <Switch
            checked={featured}
            onChange={setFeatured}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">
              Xuất bản
            </p>

            <p className="text-sm text-gray-500">
              Cho phép hiển thị dịch vụ trên website.
            </p>
          </div>

          <Switch
            checked={published}
            onChange={setPublished}
          />
        </div>

        <Input
          type="number"
          label="Thứ tự hiển thị"
          value={String(sortOrder)}
          onChange={(e) =>
            setSortOrder(
              Number(e.target.value) || 0
            )
          }
        />
      </div>
    </FormCard>
  );
}