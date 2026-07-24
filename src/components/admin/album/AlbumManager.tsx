"use client";

import { useEffect, useMemo, useState } from "react";

import AlbumForm from "./AlbumForm";
import AlbumTable from "./AlbumTable";
import AlbumToolbar from "./AlbumToolbar";
import { deleteAlbum } from "./DeleteAlbum";

import Card from "@/components/admin/ui/Card";
import Loading from "@/components/admin/ui/Loading";
import PageHeader from "@/components/admin/ui/PageHeader";

import type { Album } from "@/types/album";

export default function AlbumManager() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [editing, setEditing] = useState<Album | null>(null);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const loadAlbums = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/album");
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setAlbums(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  const filteredAlbums = useMemo(() => {
    return albums.filter((album) => {
      const matchSearch = album.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "all" ||
        album.category === category;

      return matchSearch && matchCategory;
    });
  }, [albums, search, category]);

  const handleEdit = (album: Album) => {
    setEditing(album);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id: string) => {
    const ok = await deleteAlbum(id);

    if (!ok) return;

    setAlbums((prev) =>
      prev.filter((item) => item._id !== id)
    );

    if (editing?._id === id) {
      setEditing(null);
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Quản lý Album"
        description="Quản lý, chỉnh sửa và xuất bản Album."
      />

      <Card padding="lg">
        <AlbumForm
          album={editing}
          onSuccess={() => {
            setEditing(null);
            loadAlbums();
          }}
          onCancel={() => setEditing(null)}
        />
      </Card>

      <AlbumToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />      {loading ? (
        <Loading text="Đang tải Album..." />
      ) : (
        <AlbumTable
          albums={filteredAlbums}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onRefresh={loadAlbums}
        />
      )}
    </div>
  );
}