"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  ImagePlus,
  Upload,
  Trash2,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

import Button from "@/components/admin/ui/Button";

interface Props {
  title?: string;

  value?: string;

  values?: string[];

  multiple?: boolean;

  onChange?: (
    value: string
  ) => void;

  onMultipleChange?: (
    values: string[]
  ) => void;
}

export default function UploadImage({

  title = "Upload",

  value,

  values = [],

  multiple = false,

  onChange,

  onMultipleChange,

}: Props) {

  const inputRef =
    useRef<HTMLInputElement>(null);

  const [loading,
    setLoading] =
    useState(false);

  const uploadFile =
    async (file: File) => {

      const form =
        new FormData();

      form.append(
        "file",
        file
      );

      const res =
        await fetch(
          "/api/admin/upload",
          {

            method: "POST",

            body: form,

          }
        );

      const data =
        await res.json();

      if (!data.success) {

        throw new Error(
          data.message
        );

      }

      return data.url;

    };

  const handleUpload =
    async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {

      const files =
        e.target.files;

      if (!files?.length)
        return;

      setLoading(true);

      try {

        if (!multiple) {

          const url =
            await uploadFile(
              files[0]
            );

          onChange?.(
            url
          );

        } else {

          const uploaded =
            [...values];

          for (
            const file of Array.from(
              files
            )
          ) {

            const url =
              await uploadFile(
                file
              );

            uploaded.push(
              url
            );

          }

          onMultipleChange?.(
            uploaded
          );

        }

        toast.success(
          "Upload thành công."
        );

      } catch {

        toast.error(
          "Upload thất bại."
        );

      } finally {

        setLoading(false);

      }

    };
      return (

    <div className="space-y-4">

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        hidden
        onChange={handleUpload}
      />

      <div
        onClick={() =>
          inputRef.current?.click()
        }
        className="
          flex
          min-h-[220px]
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          border-[#d8c29a]
          bg-[#faf8f5]
          transition-all
          hover:border-[#c8a86b]
          hover:bg-[#f7f3eb]
        "
      >

        {loading ? (

          <div className="flex flex-col items-center gap-4">

            <Loader2
              size={36}
              className="animate-spin text-[#c8a86b]"
            />

            <p className="text-sm text-gray-500">
              Đang tải ảnh...
            </p>

          </div>

        ) : (

          <>

            <div
              className="
                mb-5
                rounded-full
                bg-[#c8a86b]/10
                p-5
                text-[#c8a86b]
              "
            >

              <Upload size={34} />

            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Nhấn để chọn hoặc kéo thả ảnh
            </p>

            <Button
              className="mt-6"
              leftIcon={
                <ImagePlus size={18} />
              }
            >
              Chọn ảnh
            </Button>

          </>

        )}

      </div>

      {!multiple && value && (

        <div className="relative overflow-hidden rounded-2xl border">

          <Image
  src={value}
  alt="Preview"
  width={1200}
  height={800}
  sizes="(max-width:768px) 100vw, 500px"
  className="w-full object-cover"
  priority
/>

          <button
            type="button"
            onClick={() =>
              onChange?.("")
            }
            className="
              absolute
              right-3
              top-3
              rounded-full
              bg-red-500
              p-2
              text-white
              shadow-lg
              transition
              hover:bg-red-600
            "
          >
            <Trash2 size={16} />
          </button>

        </div>

      )}
            {multiple && values.length > 0 && (

        <div
          className="
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {values.map(
            (image, index) => (

              <div
                key={`${image}-${index}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white
                "
              >

                <Image
  src={image}
  alt={`Album ${index + 1}`}
  width={600}
  height={600}
  sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 250px"
  className="
    aspect-square
    w-full
    object-cover
    transition
    duration-300
    group-hover:scale-105
  "
/>

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-start
                    justify-end
                    bg-black/0
                    p-3
                    transition
                    group-hover:bg-black/10
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      onMultipleChange?.(
                        values.filter(
                          (_, i) =>
                            i !== index
                        )
                      )
                    }
                    className="
                      rounded-full
                      bg-red-500
                      p-2
                      text-white
                      opacity-0
                      shadow-lg
                      transition
                      group-hover:opacity-100
                    "
                  >
                    <Trash2 size={15} />
                  </button>

                </div>

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    rounded-full
                    bg-white/90
                    px-3
                    py-1
                    text-xs
                    font-medium
                    shadow
                  "
                >
                  #{index + 1}
                </div>

              </div>

            )
          )}

        </div>

      )}

    </div>

  );

}