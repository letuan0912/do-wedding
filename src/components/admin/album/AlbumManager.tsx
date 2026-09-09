"use client";

import { useEffect, useState } from "react";

import AlbumForm from "./AlbumForm";
import AlbumTable from "./AlbumTable";
import AlbumToolbar from "./AlbumToolbar";
import { deleteAlbum } from "./DeleteAlbum";

import Card from "@/components/admin/ui/Card";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import type {
  Album,
  AlbumPagination,
} from "@/types/album";

export default function AlbumManager() {

  const [albums, setAlbums] =
    useState<Album[]>([]);

  const [editing, setEditing] =
    useState<Album | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");

  const [page, setPage] =
    useState(1);

  const [pagination, setPagination] =
    useState<AlbumPagination>({
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 1,
    });

  const loadAlbums = async () => {

    try {

      setLoading(true);

      const params =
        new URLSearchParams({

          page: String(page),

          limit: "10",

          search,

          category:
            category === "all"
              ? ""
              : category,

        });

      const res = await fetch(
        `/api/admin/album?${params.toString()}`
      );

      const data =
        await res.json();

      if (!data.success) {
        throw new Error(
          data.message
        );
      }

      setAlbums(
        data.data ?? []
      );

      if (data.pagination) {

        setPagination({
          page:
            data.pagination.page,

          limit:
            data.pagination.limit,

          total:
            data.pagination.total,

          totalPages:
            data.pagination.totalPages,
        });

      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadAlbums();

  }, [
    page,
    search,
    category,
  ]);

  const handleEdit = (
    album: Album
  ) => {

    setEditing(album);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  const handleDelete =
    async (id: string) => {

      const ok =
        await deleteAlbum(id);

      if (!ok) return;

      if (
        editing?._id === id
      ) {
        setEditing(null);
      }

      loadAlbums();

    };
      const handleCreate = () => {

    setEditing(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <div className="space-y-8">

      <PageHeader
        title="Quản lý Album"
        description="Quản lý Album, danh mục và trạng thái hiển thị."
      />

      <Card padding="lg">

        <AlbumForm
          album={editing}
          onSuccess={() => {

            setEditing(null);

            loadAlbums();

          }}
          onCancel={() =>
            setEditing(null)
          }
        />

      </Card>

      <AlbumToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={(value) => {

          setCategory(value);

          setPage(1);

        }}
        onCreate={handleCreate}
      />

      <div
        className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-gray-200
          bg-white
          px-6
          py-4
          shadow-sm
        "
      >

        <div>

          <h3 className="text-lg font-semibold text-gray-800">
            Danh sách Album
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Tổng cộng{" "}
            <span className="font-semibold text-[#c8a86b]">
              {pagination.total}
            </span>{" "}
            Album
          </p>

        </div>

        <button
          onClick={loadAlbums}
          className="
            rounded-xl
            border
            border-[#c8a86b]
            px-4
            py-2
            text-sm
            font-medium
            text-[#c8a86b]
            transition
            hover:bg-[#c8a86b]
            hover:text-white
          "
        >
          Làm mới
        </button>

      </div>

      {loading ? (

        <Loading
          text="Đang tải Album..."
        />

      ) : (

        <AlbumTable
          albums={albums}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onRefresh={loadAlbums}
        />

      )}
            {pagination.totalPages > 1 && (

        <div className="flex justify-center pt-8">

          <div className="flex items-center gap-2">

            <button
              disabled={page === 1}
              onClick={() =>
                setPage((prev) =>
                  Math.max(prev - 1, 1)
                )
              }
              className="
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-2
                text-sm
                transition
                hover:border-[#c8a86b]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Trước
            </button>

            {Array.from({
              length: pagination.totalPages,
            }).map((_, index) => {

              const pageNumber =
                index + 1;

              return (

                <button
                  key={pageNumber}
                  onClick={() =>
                    setPage(pageNumber)
                  }
                  className={`
                    h-10
                    w-10
                    rounded-xl
                    text-sm
                    font-medium
                    transition

                    ${
                      page === pageNumber
                        ? "bg-[#c8a86b] text-white shadow"
                        : "border border-gray-300 bg-white hover:border-[#c8a86b]"
                    }
                  `}
                >
                  {pageNumber}
                </button>

              );

            })}

            <button
              disabled={
                page ===
                pagination.totalPages
              }
              onClick={() =>
                setPage((prev) =>
                  Math.min(
                    prev + 1,
                    pagination.totalPages
                  )
                )
              }
              className="
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-2
                text-sm
                transition
                hover:border-[#c8a86b]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Sau
            </button>

          </div>

        </div>

      )}

    </div>

  );

}