"use client";

import ContactStatus from "./ContactStatus";
import ContactActions from "./ContactActions";
import Card from "@/components/admin/ui/Card";

export type Contact = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
};

type Props = {
  contacts: Contact[];
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function ContactTable({
  contacts,
  onDone,
  onDelete,
}: Props) {
  return (
    <Card padding="none">
      <table className="w-full">
        <thead className="bg-[#faf8f4]">
          <tr>
            <th className="p-5 text-left">Họ tên</th>
            <th className="p-5 text-left">Điện thoại</th>
            <th className="p-5 text-left">Email</th>
            <th className="p-5 text-left">Nội dung</th>
            <th className="p-5 text-center">Trạng thái</th>
            <th className="p-5 text-left">Ngày gửi</th>
            <th className="p-5 text-center">Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((item) => (
            <tr
              key={item._id}
              className="border-t transition hover:bg-[#faf8f4]"
            >
              <td className="p-5 font-medium">
                {item.name}
              </td>

              <td className="p-5">
                {item.phone}
              </td>

              <td className="p-5">
                {item.email}
              </td>

              <td className="max-w-sm p-5">
                {item.message}
              </td>

              <td className="p-5 text-center">
                <ContactStatus status={item.status} />
              </td>

              <td className="whitespace-nowrap p-5 text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleString("vi-VN")}
              </td>

              <td className="p-5">
                <ContactActions
                  id={item._id}
                  status={item.status}
                  onDone={onDone}
                  onDelete={onDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {contacts.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          Không tìm thấy dữ liệu.
        </div>
      )}
    </div>
  );
}