"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface MenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon: ReactNode;
}

export default function MenuButton({
  active = false,
  icon,
  className,
  disabled,
  ...props
}: MenuButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        "flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",

        active
          ? "bg-blue-600 text-white shadow-sm"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",

        disabled &&
          "cursor-not-allowed opacity-50 hover:bg-transparent hover:text-gray-600",

        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
}