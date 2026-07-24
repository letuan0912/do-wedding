"use client";

import Input from "@/components/admin/ui/Input";
import Select from "@/components/admin/ui/Select";

type Props = {
  search: string;
  setSearch: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;
};

export default function ContactToolbar({
  search,
  setSearch,
  status,
  setStatus,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="w-full md:max-w-sm">
        <Input
          placeholder="Tìm tên, email hoặc số điện thoại..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="w-full md:w-56">
        <Select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          options={[
            {
              label: "Tất cả",
              value: "all",
            },
            {
              label: "Chờ xử lý",
              value: "pending",
            },
            {
              label: "Đã xử lý",
              value: "done",
            },
          ]}
        />
      </div>
    </div>
  );
}