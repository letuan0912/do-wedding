"use client";

import FormCard from "@/components/admin/ui/FormCard";
import Input from "@/components/admin/ui/Input";
import Switch from "@/components/admin/ui/Switch";

type Props = {
  published: boolean;
  setPublished: (
    value: boolean
  ) => void;

  featured: boolean;
  setFeatured: (
    value: boolean
  ) => void;

  sortOrder: number;
  setSortOrder: (
    value: number
  ) => void;
};

export default function SettingSection({
  published,
  setPublished,

  featured,
  setFeatured,

  sortOrder,
  setSortOrder,
}: Props) {
  return (
    <FormCard title="Thiết lập">
      <div className="grid grid-cols-3 gap-4 items-end">
        <Switch
          label="Hiển thị"
          checked={published}
          onCheckedChange={
            setPublished
          }
        />

        <Switch
          label="Nổi bật"
          checked={featured}
          onCheckedChange={
            setFeatured
          }
        />

        <Input
          label="Thứ tự"
          type="number"
          value={String(sortOrder)}
          onChange={(e) =>
            setSortOrder(
              Number(e.target.value)
            )
          }
        />
      </div>
    </FormCard>
  );
}