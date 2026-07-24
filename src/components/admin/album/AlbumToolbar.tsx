"use client";

import { Plus, Search } from "lucide-react";

import Button from "@/components/admin/ui/Button";
import Input from "@/components/admin/ui/Input";
import Select from "@/components/admin/ui/Select";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  onCreate?: () => void;
};

export default function AlbumToolbar({
  search,
  setSearch,
  category,
  setCategory,
  onCreate,
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:flex-row lg:items-end">
      <div className="flex-1">
        <Input
          label="Tìm kiếm"
          placeholder="Nhập tên Album..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startIcon={<Search size={18} />}
        />
      </div>

      <div className="w-full lg:w-64">
        <Select
          label="Danh mục"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            {
              label: "Tất cả",
              value: "all",
            },
            {
              label: "Studio",
              value: "Studio",
            },
            {
              label: "Wedding Day",
              value: "Wedding Day",
            },
            {
              label: "Đà Lạt",
              value: "Đà Lạt",
            },
            {
              label: "Phim Trường",
              value: "Phim Trường",
            },
          ]}
        />
      </div>

      <Button
        leftIcon={<Plus size={18} />}
        onClick={onCreate}
        className="lg:mb-[2px]"
      >
        Thêm Album
      </Button>
    </div>
  );
}