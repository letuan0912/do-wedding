"use client";

import AlbumCard from "./AlbumCard";

import EmptyState from "@/components/admin/ui/EmptyState";

import type { Album } from "@/types/album";

type Props = {
  albums: Album[];
  onEdit: (album: Album) => void;
  onDelete: (id: string) => void;
};

export default function AlbumGrid({
  albums,
  onEdit,
  onDelete,
}: Props) {
  if (albums.length === 0) {
    return (
      <EmptyState
        title="Chưa có Album"
        description="Hiện chưa có album nào phù hợp với bộ lọc."
      />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {albums.map((album) => (
        <AlbumCard
          key={album._id}
          album={album}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}