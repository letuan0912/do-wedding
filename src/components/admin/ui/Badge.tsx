"use client";

import React, { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  icon?: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-gray-100 text-gray-700 border border-gray-200",

  primary:
    "bg-[#c8a86b]/15 text-[#8c6a2d] border border-[#c8a86b]/30",

  success:
    "bg-green-100 text-green-700 border border-green-200",

  warning:
    "bg-amber-100 text-amber-700 border border-amber-200",

  danger:
    "bg-red-100 text-red-700 border border-red-200",

  info:
    "bg-blue-100 text-blue-700 border border-blue-200",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-[11px]",
  md: "px-2.5 py-1 text-xs",
  lg: "px-3 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  rounded = true,
  icon,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        font-medium
        whitespace-nowrap
        transition-colors
        ${rounded ? "rounded-full" : "rounded-lg"}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {icon && (
        <span className="flex items-center">
          {icon}
        </span>
      )}

      {children}
    </span>
  );
}