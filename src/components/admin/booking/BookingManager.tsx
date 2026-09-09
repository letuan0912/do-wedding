"use client";

import { useEffect, useState } from "react";

interface Booking {
  _id: string;
  fullName: string;
  phone: string;
  email: string;
  facebook: string;
  weddingDate: string;
  service: string;
  note: string;
  status: string;
  createdAt: string;
}

const STATUS = [
  {
    value: "pending",
    label: "Chờ",
    className:
      "bg-yellow-100 text-yellow-700 border-yellow-300",
  },
  {
    value: "contacted",
    label: "Liên hệ",
    className:
      "bg-blue-100 text-blue-700 border-blue-300",
  },
  {
    value: "completed",
    label: "Hoàn thành",
    className:
      "bg-green-100 text-green-700 border-green-300",
  },
  {
    value: "cancelled",
    label: "Đã hủy",
    className:
      "bg-red-100 text-red-700 border-red-300",
  },
];

export default function BookingManager() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  async function loadBookings() {
    try {
      const res = await fetch("/api/booking");
      const json = await res.json();

      if (json.success) {
        setBookings(json.data);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(
    id: string,
    status: string
  ) {
    try {
      await fetch(`/api/booking/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });

      loadBookings();
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteBooking(id: string) {
    if (!confirm("Bạn có chắc muốn xóa booking này?"))
      return;

    try {
      await fetch(`/api/booking/${id}`, {
        method: "DELETE",
      });

      loadBookings();
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return (
      <p className="py-20 text-center">
        Đang tải...
      </p>
    );
  }

  return (
    <div className="space-y-6">

      <div>

        <p className="text-xs uppercase tracking-[5px] text-[#c8a86b]">
          ADMIN
        </p>

        <h1 className="mt-2 text-4xl font-light">
          Quản lý Booking
        </h1>

      </div>

      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-[#faf8f5]">

            <tr className="text-left">

              <th className="p-5">
                Khách hàng
              </th>

              <th className="p-5">
                SĐT
              </th>

              <th className="p-5">
                Dịch vụ
              </th>

              <th className="p-5">
                Ngày cưới
              </th>

              <th className="p-5">
                Trạng thái
              </th>

              <th className="p-5">
                Thao tác
              </th>

            </tr>

          </thead>

          <tbody>

            {bookings.map((item) => (

              <tr
                key={item._id}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-5">

                  <div className="font-medium">
                    {item.fullName}
                  </div>

                  <div className="text-sm text-gray-500">
                    {item.email}
                  </div>

                </td>

                <td className="p-5">
                  {item.phone}
                </td>

                <td className="p-5">
                  {item.service || "-"}
                </td>

                <td className="p-5">
                  {item.weddingDate || "-"}
                </td>

                <td className="p-5">

                  <div className="flex flex-wrap gap-2">

                    {STATUS.map((status) => (

                      <button
                        key={status.value}
                        onClick={() =>
                          updateStatus(
                            item._id,
                            status.value
                          )
                        }
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition-all

                          ${
                            item.status === status.value
                              ? status.className
                              : "border-gray-200 bg-white text-gray-500 hover:bg-gray-100"
                          }
                        `}
                      >
                        {status.label}
                      </button>

                    ))}

                  </div>

                </td>

                <td className="p-5">

                  <button
                    onClick={() =>
                      deleteBooking(item._id)
                    }
                    className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                  >
                    Xóa
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}