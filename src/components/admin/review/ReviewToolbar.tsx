"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;
}

export default function ReviewToolbar({
  search,
  setSearch,
  status,
  setStatus,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-5 md:flex-row md:items-center md:justify-between">

      <input
        type="text"
        placeholder="Tìm theo tên khách hàng..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          h-11
          rounded-xl
          border
          px-4
          outline-none
          transition
          focus:border-[#c8a86b]
        "
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="
          h-11
          rounded-xl
          border
          px-4
          outline-none
          transition
          focus:border-[#c8a86b]
        "
      >
        <option value="all">
          Tất cả
        </option>

        <option value="true">
          Đang hiển thị
        </option>

        <option value="false">
          Đã ẩn
        </option>

      </select>

    </div>
  );
}