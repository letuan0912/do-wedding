"use client";

import React, { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`
        flex
        min-h-[320px]
        w-full
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-gray-300
        bg-white
        px-6
        py-10
        text-center
        ${className}
      `}
    >
      <div
        className="
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-[#c8a86b]/10
          text-[#c8a86b]
        "
      >
        {icon}
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </div>
  );
}