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
        <h2 className="mb-8 text-2xl font-bold tracking-tight">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}