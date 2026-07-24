"use client";

import Input from "@/components/admin/ui/Input";
import Select from "@/components/admin/ui/Select";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  filter: string;
  setFilter: (value: string) => void;
};

export default function ServiceToolbar({
  search,
  setSearch,
  filter,
  setFilter,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="w-full md:max-w-sm">
        <Input
          placeholder="Tìm kiếm dịch vụ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="w-full md:w-56">
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          options={[
            {
              label: "Tất cả",
              value: "all",
            },
            {
              label: "Đã xuất bản",
              value: "published",
            },
            {
              label: "Bản nháp",
              value: "draft",
            },
          ]}
        />
      </div>
    </div>
  );
}