import { ReactNode } from "react";

interface FormCardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function FormCard({
  title,
  description,
  children,
  className = "",
}: FormCardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-8
        shadow-sm
        transition-all
        ${className}
      `}
    >
      {title && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            {title}
          </h2>

          {description && (
            <p className="mt-2 text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}