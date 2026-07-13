"use client";

import { useEffect, useState } from "react";

type Contact = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function AdminContactPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Đang tải dữ liệu...
      </div>
    );
  }

  return (
    <>

      <h1 className="mb-8 text-4xl font-light">
        Khách hàng liên hệ
      </h1>

      <div className="overflow-hidden rounded-3xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-[#faf8f5]">

            <tr>

              <th className="p-5 text-left">
                Họ tên
              </th>

              <th className="p-5 text-left">
                Điện thoại
              </th>

              <th className="p-5 text-left">
                Email
              </th>

              <th className="p-5 text-left">
                Nội dung
              </th>

              <th className="p-5 text-left">
                Ngày gửi
              </th>

            </tr>

          </thead>

          <tbody>

            {contacts.map((item) => (

              <tr
                key={item._id}
                className="border-t"
              >

                <td className="p-5">
                  {item.name}
                </td>

                <td className="p-5">
                  {item.phone}
                </td>

                <td className="p-5">
                  {item.email}
                </td>

                <td className="p-5">
                  {item.message}
                </td>

                <td className="p-5">
                  {new Date(item.createdAt).toLocaleString("vi-VN")}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>
  );
}