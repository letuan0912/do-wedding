"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingProps {
  text?: string;
  fullscreen?: boolean;
  overlay?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: {
    icon: "h-5 w-5",
    text: "text-sm",
  },
  md: {
    icon: "h-7 w-7",
    text: "text-base",
  },
  lg: {
    icon: "h-10 w-10",
    text: "text-lg",
  },
};

export default function Loading({
  text = "Đang tải...",
  fullscreen = false,
  overlay = false,
  size = "md",
  className = "",
}: LoadingProps) {
  const styles = sizeStyles[size];

  const content = (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-4
        ${fullscreen ? "min-h-screen" : "py-12"}
        ${className}
      `}
    >
      <div className="rounded-full bg-[#c8a86b]/10 p-4">
        <Loader2
          className={`${styles.icon} animate-spin text-[#c8a86b]`}
        />
      </div>

      <p className={`font-medium text-gray-600 ${styles.text}`}>
        {text}
      </p>
    </div>
  );

  if (overlay) {
    return (
      <div
        className="
          absolute
          inset-0
          z-50
          flex
          items-center
          justify-center
          rounded-2xl
          bg-white/80
          backdrop-blur-sm
        "
      >
        {content}
      </div>
    );
  }

  return content;
}