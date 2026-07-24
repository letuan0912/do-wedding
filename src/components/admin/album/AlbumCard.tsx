"use client";

import Image from "next/image";
import { Edit, Trash2, Images, Star, Globe, GlobeLock } from "lucide-react";

import Button from "@/components/admin/ui/Button";
import Badge from "@/components/admin/ui/Badge";
import Card from "@/components/admin/ui/Card";

import type { Album } from "@/types/album";

type Props = {
  album: Album;
  onEdit: (album: Album) => void;
  onDelete: (id: string) => void;
};

export default function AlbumCard({
  album,
  onEdit,
  onDelete,
}: Props) {
  return (
    <Card className="overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        {album.cover ? (
          <Image
            src={album.cover}
            alt={album.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Không có ảnh
          </div>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold">
            {album.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {album.category}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge>
            <Images size={14} />
            {album.images.length} ảnh
          </Badge>

          {album.featured && (
            <Badge>
              <Star size={14} />
              Nổi bật
            </Badge>
          )}

          <Badge>
            {album.isPublished ? (
              <>
                <Globe size={14} />
                Public
              </>
            ) : (
              <>
                <GlobeLock size={14} />
                Draft
              </>
            )}
          </Badge>
        </div>

        <div className="flex gap-3">
          <Button
            variant="secondary"
            className="flex-1"
            leftIcon={<Edit size={16} />}
            onClick={() => onEdit(album)}
          >
            Sửa
          </Button>

          <Button
            variant="danger"
            className="flex-1"
            leftIcon={<Trash2 size={16} />}
            onClick={() => onDelete(album._id)}
          >
            Xóa
          </Button>
        </div>
      </div>
    </Card>
  );
}