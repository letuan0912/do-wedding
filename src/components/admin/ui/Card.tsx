"use client";

import React, { HTMLAttributes, ReactNode } from "react";

type CardPadding = "none" | "sm" | "md" | "lg";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  description?: string;
  headerAction?: ReactNode;
  footer?: ReactNode;
  padding?: CardPadding;
  hover?: boolean;
  bordered?: boolean;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  title,
  description,
  headerAction,
  footer,
  padding = "md",
  hover = false,
  bordered = true,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-sm
        transition-all
        duration-300
        ${
          bordered
            ? "border border-gray-200"
            : ""
        }
        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-lg"
            : ""
        }
        ${className}
      `}
      {...props}
    >
      {(title || description || headerAction) && (
        <div className="flex items-start justify-between border-b border-gray-100 px-6 py-5">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-gray-900">
                {title}
              </h3>
            )}

            {description && (
              <p className="mt-1 text-sm text-gray-500">
                {description}
              </p>
            )}
          </div>

          {headerAction && (
            <div className="ml-4">
              {headerAction}
            </div>
          )}
        </div>
      )}

      <div className={paddingStyles[padding]}>
        {children}
      </div>

      {footer && (
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
          {footer}
        </div>
      )}
    </div>
  );
}