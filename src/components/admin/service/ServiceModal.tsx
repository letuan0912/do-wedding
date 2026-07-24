"use client";

import type { Service } from "@/types/service";

import ServiceForm from "./ServiceForm";

type Props = {
  open: boolean;
  service: Service | null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function ServiceModal({
  open,
  service,
  onClose,
  onSuccess,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          flex
          h-[90vh]
          w-full
          max-w-5xl
          flex-col
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
        "
      >
        {/* Header */}

        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-8 py-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {service
                ? "Cập nhật dịch vụ"
                : "Thêm dịch vụ"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {service
                ? "Chỉnh sửa thông tin dịch vụ."
                : "Tạo mới một dịch vụ."
              }
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-2xl
              text-gray-400
              transition
              hover:bg-gray-100
              hover:text-gray-700
            "
          >
            ×
          </button>
        </div>

        {/* Body */}

        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            <ServiceForm
              service={service}
              onSuccess={() => {
                onSuccess();
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}