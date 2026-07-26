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
  const inputRef =
    useRef<HTMLInputElement>(null);

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
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="group space-y-4">
      <div
        className="
          relative
          h-56
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-gray-50
          transition-all
          duration-300
          hover:shadow-lg
        "
      >
        {value ? (
          <>
            <Image
              src={value}
              alt=""
              fill
              className="
                object-cover
                transition-transform
                duration-300
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                flex
                items-end
                justify-center
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
                opacity-0
                transition
                duration-300
                group-hover:opacity-100
                pb-4
              "
            >
              <Button
                type="button"
                variant="secondary"
                onClick={() =>
                  inputRef.current?.click()
                }
              >
                Đổi ảnh
              </Button>
            </div>
          </>
        ) : (
          <div
            className="
              flex
              h-full
              flex-col
              items-center
              justify-center
              gap-3
              text-gray-400
            "
          >
            <div className="text-5xl">
              🖼️
            </div>

            <div className="text-sm font-medium">
              Chưa có ảnh
            </div>

            <div className="text-xs">
              JPG • PNG • WEBP
            </div>
          </div>
        )}

        {uploading && (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-white/70
              backdrop-blur-sm
            "
          >
            <div className="rounded-xl bg-white px-5 py-3 shadow">
              Đang tải ảnh...
            </div>
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
        className="w-full"
        onClick={() =>
          inputRef.current?.click()
        }
      >
        {value
          ? "Thay ảnh"
          : "Tải ảnh"}
      </Button>
    </div>
  );
}