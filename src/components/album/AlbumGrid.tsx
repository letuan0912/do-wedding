"use client";

import { useEffect, useState } from "react";

import AlbumCard from "./AlbumCard";
import useAlbums from "@/hooks/useAlbums";

interface Props {
  category: string;
}

export default function AlbumGrid({
  category,
}: Props) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    setPage(1);
  }, [category]);

  const {
    albums,
    loading,
    pagination,
  } = useAlbums(
    page,
    category,
    search,
    sort
  );

  return (
    <section
      id="gallery"
      className="bg-[#faf8f5] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-12 text-center">

          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-extralight text-[#222]">
            Những Bộ Ảnh Mới Nhất
          </h2>

          <p className="mt-6 text-gray-500">
            {pagination.total} album
          </p>

        </div>

        {/* Toolbar */}

        <div className="mb-10 flex flex-col gap-4 md:flex-row">

          <input
            type="text"
            placeholder="Tìm tên album..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="
              flex-1
              rounded-xl
              border
              border-gray-200
              bg-white
              p-3
              outline-none
              transition
              focus:border-[#c8a86b]
            "
          />

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            className="
              rounded-xl
              border
              border-gray-200
              bg-white
              px-5
              outline-none
              transition
              focus:border-[#c8a86b]
            "
          >
            <option value="newest">
              Mới nhất
            </option>

            <option value="oldest">
              Cũ nhất
            </option>

            <option value="featured">
              Nổi bật
            </option>

          </select>

        </div>

        {/* Loading */}

        {loading && (
          <div className="py-24 text-center text-gray-500">
            Đang tải Album...
          </div>
        )}

        {/* Empty */}

        {!loading &&
          albums.length === 0 && (
            <div className="py-24 text-center text-gray-500">
              Không tìm thấy Album.
            </div>
          )}

        {/* Grid */}

        {!loading &&
          albums.length > 0 && (
            <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

              {albums.map((album) => (
                <AlbumCard
                  key={album._id}
                  album={album}
                />
              ))}

            </div>
          )}

        {/* Pagination */}

        {!loading &&
          pagination.totalPages > 1 && (
            <div className="mt-16 flex justify-center gap-3">

              {Array.from({
                length: pagination.totalPages,
              }).map((_, index) => {
                const pageNumber = index + 1;

                return (
                  <button
                    key={pageNumber}
                    onClick={() =>
                      setPage(pageNumber)
                    }
                    className={`h-11 w-11 rounded-full transition ${
                      pagination.page === pageNumber
                        ? "bg-[#c8a86b] text-white"
                        : "border border-gray-300 bg-white hover:border-[#c8a86b]"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

            </div>
          )}

      </div>
    </section>
  );
}