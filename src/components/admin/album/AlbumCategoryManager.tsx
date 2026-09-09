"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  Pencil,
  Trash2,
  Plus,
  RefreshCw,
  Search,
} from "lucide-react";

import Card from "@/components/admin/ui/Card";
import Button from "@/components/admin/ui/Button";
import Input from "@/components/admin/ui/Input";
import Switch from "@/components/admin/ui/Switch";
import Badge from "@/components/admin/ui/Badge";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import type {
  AlbumCategory,
} from "@/types/album";

export default function AlbumCategoryManager() {

  const [categories, setCategories] =
    useState<AlbumCategory[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [editing, setEditing] =
    useState<AlbumCategory | null>(null);

  const [search, setSearch] =
    useState("");

  const [name, setName] =
    useState("");

  const [sortOrder, setSortOrder] =
    useState(0);

  const [published, setPublished] =
    useState(true);

  const loadCategories = async () => {
    try {

      setLoading(true);

      const res = await fetch(
        "/api/admin/album-category"
      );

      const data =
        await res.json();

      if (!data.success) {
        throw new Error(
          data.message
        );
      }

      setCategories(
        data.data ?? []
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Không thể tải danh mục."
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const resetForm = () => {
    setEditing(null);
    setName("");
    setSortOrder(0);
    setPublished(true);
  };

  const filteredCategories =
    useMemo(() => {

      return categories.filter(
        (item) =>
          item.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          item.slug
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [categories, search]);
      const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!name.trim()) {
      toast.error(
        "Vui lòng nhập tên danh mục."
      );
      return;
    }

    try {

      setSaving(true);

      const url = editing
        ? `/api/admin/album-category/${editing._id}`
        : "/api/admin/album-category";

      const method = editing
        ? "PATCH"
        : "POST";

      const res = await fetch(
        url,
        {
          method,
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            sortOrder,
            published,
          }),
        }
      );

      const data =
        await res.json();

      if (!data.success) {
        toast.error(
          data.message ??
            "Lưu thất bại."
        );
        return;
      }

      toast.success(
        editing
          ? "Đã cập nhật."
          : "Đã tạo danh mục."
      );

      resetForm();

      loadCategories();

    } catch {

      toast.error(
        "Có lỗi xảy ra."
      );

    } finally {

      setSaving(false);

    }

  };

  const handleEdit = (
    item: AlbumCategory
  ) => {

    setEditing(item);

    setName(item.name);

    setSortOrder(
      item.sortOrder
    );

    setPublished(
      item.published
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  const togglePublished =
    async (
      item: AlbumCategory,
      value: boolean
    ) => {

      try {

        const res =
          await fetch(
            `/api/admin/album-category/${item._id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                name: item.name,
                sortOrder:
                  item.sortOrder,
                published: value,
              }),
            }
          );

        const data =
          await res.json();

        if (!data.success) {
          toast.error(
            data.message
          );
          return;
        }

        setCategories((prev) =>
          prev.map((c) =>
            c._id === item._id
              ? {
                  ...c,
                  published: value,
                }
              : c
          )
        );

      } catch {

        toast.error(
          "Không thể cập nhật."
        );

      }

    };

  const handleDelete =
    async (
      id: string
    ) => {

      if (
        !confirm(
          "Bạn chắc chắn muốn xóa?"
        )
      ) {
        return;
      }

      try {

        const res =
          await fetch(
            `/api/admin/album-category/${id}`,
            {
              method: "DELETE",
            }
          );

        const data =
          await res.json();

        if (!data.success) {
          toast.error(
            data.message
          );
          return;
        }

        toast.success(
          "Đã xóa."
        );

        loadCategories();

      } catch {

        toast.error(
          "Có lỗi xảy ra."
        );

      }

    };
    return (

  <div className="space-y-8">

    <PageHeader
      title="Danh mục Album"
      description="Quản lý danh mục Album của Website."
    />

    <Card padding="lg">

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div className="grid gap-5 lg:grid-cols-3">

          <Input
            label="Tên danh mục"
            required
            value={name}
            placeholder="Ví dụ: Studio"
            onChange={(e) =>
              setName(e.target.value)
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

          <div className="flex items-end">

            <Switch
              label="Hiển thị"
              checked={published}
              onChange={setPublished}
            />

          </div>

        </div>

        <div className="flex justify-end gap-3">

          {editing && (

            <Button
              type="button"
              variant="outline"
              onClick={resetForm}
            >
              Hủy
            </Button>

          )}

          <Button
            type="submit"
            loading={saving}
            leftIcon={
              <Plus size={18} />
            }
          >
            {editing
              ? "Cập nhật"
              : "Thêm danh mục"}
          </Button>

        </div>

      </form>

    </Card>

    <Card padding="lg">

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h3 className="text-lg font-semibold">
            Danh sách danh mục
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Có
            <span className="mx-1 font-semibold text-[#c8a86b]">
              {filteredCategories.length}
            </span>
            danh mục
          </p>

        </div>

        <div className="flex gap-3">

          <Input
            placeholder="Tìm danh mục..."
            value={search}
            startIcon={
              <Search size={17} />
            }
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <Button
            variant="secondary"
            leftIcon={
              <RefreshCw size={17} />
            }
            onClick={loadCategories}
          >
            Làm mới
          </Button>

        </div>

      </div>

      {loading ? (

        <Loading text="Đang tải..." />

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#faf8f4]">

              <tr>

                <th className="p-5 text-left">
                  Danh mục
                </th>

                <th className="p-5 text-center">
                  Thứ tự
                </th>

                <th className="p-5 text-center">
                  Hiển thị
                </th>

                <th className="p-5 text-center">
                  Thao tác
                </th>

              </tr>

            </thead>

            <tbody>

  {filteredCategories.map((item) => (

    <tr
      key={item._id}
      className="
        border-t
        transition
        hover:bg-[#faf8f4]
      "
    >

      <td className="p-5">

        <div className="space-y-2">

          <Badge variant="primary">
            {item.name}
          </Badge>

          <p className="text-xs text-gray-400">
            /{item.slug}
          </p>

        </div>

      </td>

      <td className="p-5 text-center">

        <Badge variant="info">
          {item.sortOrder}
        </Badge>

      </td>

      <td className="p-5">

        <div className="flex justify-center">

          <Switch
            checked={item.published}
            onChange={(checked) =>
              togglePublished(
                item,
                checked
              )
            }
          />

        </div>

      </td>

      <td className="p-5">

        <div className="flex justify-center gap-2">

          <Button
            size="sm"
            variant="secondary"
            leftIcon={
              <Pencil size={15} />
            }
            onClick={() =>
              handleEdit(item)
            }
          >
            Sửa
          </Button>

          <Button
            size="sm"
            variant="danger"
            leftIcon={
              <Trash2 size={15} />
            }
            onClick={() =>
              handleDelete(item._id)
            }
          >
            Xóa
          </Button>

        </div>

      </td>

    </tr>

  ))}

  {filteredCategories.length === 0 && (

    <tr>

      <td
        colSpan={4}
        className="p-16"
      >

        <div className="flex flex-col items-center gap-5">

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-gray-100
            "
          >

            <Plus
              size={34}
              className="text-gray-400"
            />

          </div>

          <div className="text-center">

            <h3 className="text-lg font-semibold text-gray-700">
              Không có danh mục
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Hãy tạo danh mục đầu tiên.
            </p>

          </div>

        </div>

      </td>

    </tr>

  )}

</tbody>
          </table>

        </div>

      )}

    </Card>

  </div>

);
}
