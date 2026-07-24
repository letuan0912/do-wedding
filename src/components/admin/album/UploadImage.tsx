"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Props = {
  title: string;
  value?: string;
  values?: string[];
  multiple?: boolean;
  onChange?: (url: string) => void;
  onMultipleChange?: (urls: string[]) => void;
};

export default function UploadImage({
  title,
  value,
  values = [],
  multiple = false,
  onChange,
  onMultipleChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file: File): Promise<string> => {
    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || "Upload thất bại");
    }

    return data.url;
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    try {
      setUploading(true);

      const fileArray = Array.from(files);

      const invalidFile = fileArray.find(
        (file) => !file.type.startsWith("image/")
      );

      if (invalidFile) {
        toast.error("Chỉ hỗ trợ file hình ảnh.");
        return;
      }

      if (!multiple) {
        const url = await uploadFile(fileArray[0]);

        onChange?.(url);

        toast.success("Upload thành công");
      } else {
        const urls = await Promise.all(
          fileArray.map(uploadFile)
        );

        onMultipleChange?.([...values, ...urls]);

        toast.success(
          `Đã upload ${urls.length} ảnh`
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Upload thất bại");
    } finally {
      setUploading(false);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div>
      <label className="mb-3 block font-medium">
        {title}
      </label>

      <div
        onClick={() => !uploading && inputRef.current?.click()}
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
          border-[#c8a86b]
          bg-[#faf8f4]
          transition
          hover:bg-[#f8f3ea]
        "
      >
        {uploading ? (
          <>
            <Loader2
              size={45}
              className="animate-spin text-[#c8a86b]"
            />

            <p className="mt-4 text-gray-600">
              Đang upload...
            </p>
          </>
        ) : (
          <>
            <Upload
              size={45}
              className="text-[#c8a86b]"
            />

            <p className="mt-4 text-lg font-medium">
              Click để chọn ảnh
            </p>

            <p className="text-sm text-gray-500">
              JPG • PNG • WEBP
            </p>
          </>
        )}
      </div>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
      />

      {!multiple && value && (
        <div className="relative mt-5 h-52 overflow-hidden rounded-2xl">
          <Image
            src={value}
            alt="Preview"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <button
            type="button"
            onClick={() => onChange?.("")}
            className="
              absolute
              right-3
              top-3
              rounded-full
              bg-red-500
              p-2
              text-white
              transition
              hover:bg-red-600
            "
          >
            <X size={18} />
          </button>
        </div>
      )}

      {multiple && values.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {values.map((img, index) => (
            <div
              key={`${img}-${index}`}
              className="relative h-40 overflow-hidden rounded-xl"
            >
              <Image
                src={img}
                alt={`Ảnh ${index + 1}`}
                fill
                sizes="(max-width:768px) 50vw, (max-width:1280px) 33vw, 25vw"
                className="object-cover"
              />

              <button
                type="button"
                onClick={() =>
                  onMultipleChange?.(
                    values.filter((_, i) => i !== index)
                  )
                }
                className="
                  absolute
                  right-2
                  top-2
                  rounded-full
                  bg-red-500
                  p-1
                  text-white
                  transition
                  hover:bg-red-600
                "
              >
                <X size={15} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}