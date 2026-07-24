"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";
import {
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  Trash2,
} from "lucide-react";

import Button from "./Button";

type Props = {
  value: string[];
  onChange: (images: string[]) => void;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function GalleryUpload({
  value,
  onChange,
}: Props) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [uploading, setUploading] =
    useState(false);

  const uploadImage = async (file: File) => {
    const formData = new FormData();

    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    return res.json();
  };

  const handleFiles = async (
    files: File[]
  ) => {
    if (!files.length) return;

    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        toast.error(
          `${file.name} không phải hình ảnh`
        );
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        toast.error(
          `${file.name} vượt quá 5MB`
        );
        return;
      }
    }

    setUploading(true);

    try {
      const uploads = await Promise.all(
        files.map(uploadImage)
      );

      const images = uploads
        .filter((item) => item.success)
        .map((item) => item.url);

      onChange([...value, ...images]);

      toast.success(
        `Đã tải lên ${images.length} ảnh`
      );
    } catch (error) {
      console.error(error);

      toast.error("Upload ảnh thất bại");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    onChange(
      value.filter((_, i) => i !== index)
    );
  };

  const moveLeft = (index: number) => {
    if (index === 0) return;

    const arr = [...value];

    [arr[index], arr[index - 1]] = [
      arr[index - 1],
      arr[index],
    ];

    onChange(arr);
  };

  const moveRight = (index: number) => {
    if (index === value.length - 1)
      return;

    const arr = [...value];

    [arr[index], arr[index + 1]] = [
      arr[index + 1],
      arr[index],
    ];

    onChange(arr);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Gallery
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {value.length} ảnh
          </p>
        </div>

        <Button
          type="button"
          loading={uploading}
          onClick={() =>
            inputRef.current?.click()
          }
        >
          <ImagePlus
            size={18}
            className="mr-2"
          />
          Thêm ảnh
        </Button>
      </div>

      <input
        hidden
        multiple
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const files = Array.from(
            e.target.files || []
          );

          handleFiles(files);

          e.target.value = "";
        }}
      />

      {value.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-300 py-14 text-center">
          <ImagePlus
            className="mx-auto mb-4 text-gray-400"
            size={40}
          />

          <p className="font-medium text-gray-600">
            Chưa có ảnh nào
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Nhấn "Thêm ảnh" để tải ảnh lên.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {value.map((img, index) => (
            <div
              key={`${img}-${index}`}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                {index === 0 && (
                  <div className="absolute left-2 top-2 rounded-md bg-green-600 px-2 py-1 text-xs font-medium text-white">
                    Cover
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between p-2">
                <button
                  type="button"
                  disabled={index === 0}
                  onClick={() =>
                    moveLeft(index)
                  }
                  className="rounded-md p-1 transition hover:bg-gray-100 disabled:opacity-30"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    removeImage(index)
                  }
                  className="rounded-md p-1 text-red-500 transition hover:bg-red-50"
                >
                  <Trash2 size={18} />
                </button>

                <button
                  type="button"
                  disabled={
                    index === value.length - 1
                  }
                  onClick={() =>
                    moveRight(index)
                  }
                  className="rounded-md p-1 transition hover:bg-gray-100 disabled:opacity-30"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}