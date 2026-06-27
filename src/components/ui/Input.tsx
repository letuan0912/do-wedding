import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: Props) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition focus:border-[#c8a86b] ${className}`}
    />
  );
}