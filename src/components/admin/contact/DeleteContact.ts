import { toast } from "sonner";

export async function deleteContact(id: string) {
  const ok = confirm(
    "Bạn có chắc chắn muốn xóa liên hệ này?"
  );

  if (!ok) return false;

  try {
    const res = await fetch(
      `/api/admin/contact/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (!data.success) {
      toast.error(
        data.message || "Xóa thất bại"
      );
      return false;
    }

    toast.success("Đã xóa liên hệ");

    return true;
  } catch {
    toast.error("Có lỗi xảy ra");
    return false;
  }
}