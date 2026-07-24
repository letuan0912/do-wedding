"use client";

import { toast } from "sonner";

export async function deleteAlbum(id: string) {
  const ok = confirm(
    "Bạn có chắc muốn xóa Album?"
  );

  if (!ok) return false;

  const res = await fetch(
    `/api/admin/album/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await res.json();

  if (!data.success) {
    toast.error("Xóa thất bại");
    return false;
  }

  toast.success("Đã xóa Album");

  return true;
}