import { ReactNode } from "react";

interface FormCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function FormCard({
  title,
  children,
  className = "",
}: FormCardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}
    >
      {title && (
        <h2 className="mb-5 text-lg font-semibold">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}