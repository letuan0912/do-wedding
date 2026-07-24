"use client";

import { useEffect, useState } from "react";

import type { Album } from "@/types/album";

type Pagination = {
  page: number;
  totalPages: number;
  total: number;
};

export default function useAlbums(
  page: number,
  category: string,
  search: string,
  sort: string
) {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] =
    useState<Pagination>({
      page: 1,
      totalPages: 1,
      total: 0,
    });

  useEffect(() => {
    const controller = new AbortController();

    const fetchAlbums = async () => {
      try {
        setLoading(true);

        const params = new URLSearchParams({
          page: String(page),
          limit: "9",
          category,
          search,
          sort,
        });

        const res = await fetch(
          `/api/album?${params.toString()}`,
          {
            signal: controller.signal,
          }
        );

        if (!res.ok) {
          throw new Error("Không thể tải Album");
        }

        const data = await res.json();

        if (data.success) {
          setAlbums(data.data ?? []);

          setPagination({
            page: data.pagination?.page ?? 1,
            totalPages:
              data.pagination?.totalPages ?? 1,
            total: data.pagination?.total ?? 0,
          });
        }
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();

    return () => controller.abort();
  }, [page, category, search, sort]);

  return {
    albums,
    loading,
    pagination,
  };
}