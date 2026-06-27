import type { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className = "",
  ...props
}: Props) {
  return (
    <textarea
      {...props}
      className={`h-44 w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none transition focus:border-[#c8a86b] ${className}`}
    />
  );
}