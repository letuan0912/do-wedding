"use client";

import Modal from "@/components/admin/ui/Modal";

import PackageForm from "./PackageForm";

import type { Package } from "@/types/package";

type Props = {
  open: boolean;

  onClose: () => void;

  onSuccess: () => void;

  packageItem?: Package | null;
};

export default function PackageModal({
  open,
  onClose,
  onSuccess,
  packageItem,
}: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        packageItem
          ? "Cập nhật gói dịch vụ"
          : "Thêm gói dịch vụ"
      }
      size="4xl"
    >
      <PackageForm
        packageItem={packageItem}
        onSuccess={onSuccess}
      />
    </Modal>
  );
}