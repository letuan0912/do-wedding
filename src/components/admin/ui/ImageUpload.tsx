"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Button from "./Button";

type Props = {
  value?: string;
  onChange: (url: string) => void;
};

export default function ImageUpload({
  value,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] =
    useState(false);

  const uploadImage = async (
    file: File
  ) => {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(
        "/api/admin/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        onChange(data.url);
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative h-56 overflow-hidden rounded-xl border bg-gray-100">
        {value ? (
          <Image
            src={value}
            alt=""
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Chưa có ảnh
          </div>
        )}
      </div>

      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file =
            e.target.files?.[0];

          if (file) {
            uploadImage(file);
          }
        }}
      />

      <Button
        type="button"
        loading={uploading}
        onClick={() =>
          inputRef.current?.click()
        }
      >
        Chọn ảnh
      </Button>
    </div>
  );
}