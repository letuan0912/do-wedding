"use client";

import { Plus, RefreshCw, Search } from "lucide-react";

import Button from "@/components/admin/ui/Button";
import Input from "@/components/admin/ui/Input";
import Select from "@/components/admin/ui/Select";

import type { AlbumCategory } from "@/types/album";

type Props = {
  search: string;

  setSearch: (value: string) => void;

  category: string;

  setCategory: (value: string) => void;

  categories?: AlbumCategory[];

  total?: number;

  loading?: boolean;

  onCreate?: () => void;

  onRefresh?: () => void;
};

export default function AlbumToolbar({
  search,
  setSearch,
  category,
  setCategory,
  categories = [],
  total = 0,
  loading = false,
  onCreate,
  onRefresh,
}: Props) {

  const options = [

    {
      label: "Tất cả",
      value: "all",
    },

    ...categories.map((item) => ({

      label: item.name,

      value: item.slug,

    })),

  ];

  return (

    <div
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
      "
    >

      <div
        className="
          mb-6
          flex
          items-center
          justify-between
        "
      >

        <div>

          <h2
            className="
              text-lg
              font-semibold
              text-gray-800
            "
          >
            Bộ lọc Album
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
            "
          >
            Tổng cộng{" "}
            <span className="font-semibold text-[#c8a86b]">
              {total}
            </span>{" "}
            Album
          </p>

        </div>

        <div className="flex gap-3">

          <Button
            variant="outline"
            loading={loading}
            leftIcon={
              <RefreshCw size={16} />
            }
            onClick={onRefresh}
          >
            Làm mới
          </Button>

          <Button
            leftIcon={
              <Plus size={18} />
            }
            onClick={onCreate}
          >
            Thêm Album
          </Button>

        </div>

      </div>
            <div
        className="
          grid
          gap-5
          lg:grid-cols-3
        "
      >

        <div className="lg:col-span-2">

          <Input
            label="Tìm kiếm Album"
            placeholder="Nhập tên Album..."
            value={search}
            startIcon={
              <Search size={18} />
            }
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        <div>

          <Select
            label="Danh mục"
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            options={options}
          />

        </div>

      </div>

    </div>

  );

}