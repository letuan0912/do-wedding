"use client";

import ServiceForm from "./ServiceForm";

import type { Service } from "@/types/service";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  service?: Service | null;
};

export default function ServiceModal({
  open,
  onClose,
  onSuccess,
  service,
}: Props) {
  const isEditing = !!service?._id;

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) onClose();
      }}
    >
      <DialogContent
  className="
    flex
    h-[92vh]
    max-w-[1400px]
    flex-col
    overflow-hidden
    p-0
  "
>
        {/* Header */}
        <DialogHeader
          className="
            shrink-0
            border-b
            bg-white
            px-8
            py-5
          "
        >
          <DialogTitle className="text-2xl font-bold">
            {isEditing
              ? "Cập nhật dịch vụ"
              : "Thêm dịch vụ"}
          </DialogTitle>
        </DialogHeader>

        {/* Scroll */}
        <div
          className="
            flex-1
            overflow-y-auto
            px-8
            py-6
          "
        >
          <ServiceForm
            service={service}
            onClose={onClose}
            onSuccess={onSuccess}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}