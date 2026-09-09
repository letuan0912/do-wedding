"use client";

import { Check, Trash2 } from "lucide-react";

type Props = {
  id: string;
  status: string;
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function ContactActions({
  id,
  status,
  onDone,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      {status === "pending" ? (
        <button
          onClick={() => onDone(id)}
          className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
        >
          <Check size={16} />
          Đã xử lý
        </button>
      ) : (
        <span className="flex items-center gap-2 rounded-xl bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
          <Check size={16} />
          Hoàn tất
        </span>
      )}

      <button
        onClick={() => onDelete(id)}
        className="rounded-xl bg-red-500 p-2 text-white transition hover:bg-red-600"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}