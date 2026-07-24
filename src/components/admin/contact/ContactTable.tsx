"use client";

import { toast } from "sonner";
import { Check, Trash2 } from "lucide-react";

import Button from "@/components/admin/ui/Button";
import Badge from "@/components/admin/ui/Badge";

import type { Contact } from "@/types/contact";

type Props = {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onRefresh: () => void;
};

export default function ContactTable({
  contacts,
  onDelete,
  onRefresh,
}: Props) {
  const updateStatus = async (
    id: string,
    status: "pending" | "done"
  ) => {
    try {
      const res = await fetch(
        `/api/admin/contact/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        toast.error(
          data.message || "Cập nhật thất bại"
        );
        return;
      }

      toast.success("Đã cập nhật");

      onRefresh();
    } catch {
      toast.error("Có lỗi xảy ra");
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <table className="w-full">

        <thead className="bg-[#faf8f4]">

          <tr>

            <th className="p-5 text-left">
              Khách hàng
            </th>

            <th className="p-5 text-left">
              Liên hệ
            </th>

            <th className="p-5 text-left">
              Trạng thái
            </th>

            <th className="p-5 text-center">
              Thao tác
            </th>

          </tr>

        </thead>

        <tbody>          {contacts.map((contact) => (
            <tr
              key={contact._id}
              className="border-t transition hover:bg-[#faf8f4]"
            >
              <td className="p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8a86b]/10 font-semibold text-[#c8a86b]">
                    {contact.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">
                      {contact.name}
                    </p>

                    <p className="text-sm text-gray-500 line-clamp-2">
                      {contact.message}
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-5">
                <div className="space-y-1 text-sm">
                  <p>{contact.phone}</p>
                  <p className="text-gray-500">
                    {contact.email}
                  </p>
                </div>
              </td>

              <td className="p-5">
                <Badge
                  variant={
                    contact.status === "done"
                      ? "success"
                      : "warning"
                  }
                >
                  {contact.status === "done"
                    ? "Đã xử lý"
                    : "Chờ xử lý"}
                </Badge>
              </td>

              <td className="p-5">
                <div className="flex justify-center gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    leftIcon={<Check size={16} />}
                    onClick={() =>
                      updateStatus(
                        contact._id,
                        contact.status === "pending"
                          ? "done"
                          : "pending"
                      )
                    }
                  >
                    {contact.status === "pending"
                      ? "Hoàn thành"
                      : "Hoàn tác"}
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
                    leftIcon={<Trash2 size={16} />}
                    onClick={() =>
                      onDelete(contact._id)
                    }
                  >
                    Xóa
                  </Button>
                </div>
              </td>
            </tr>
          ))}

          {contacts.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="p-10 text-center text-gray-500"
              >
                Chưa có liên hệ nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}