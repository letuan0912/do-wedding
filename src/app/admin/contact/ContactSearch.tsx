"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ContactSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative w-96">
      <Search
        size={18}
        className="absolute left-4 top-3.5 text-gray-400"
      />

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Tìm theo tên, SĐT hoặc email..."
        className="h-12 w-full rounded-xl border border-gray-200 pl-11 pr-4 outline-none transition focus:border-[#c8a86b]"
      />
    </div>
  );
}