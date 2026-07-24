"use client";

import React, { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
  breadcrumbs?: ReactNode;
  className?: string;
}

export default function PageHeader({
  title,
  description,
  action,
  breadcrumbs,
  className = "",
}: PageHeaderProps) {
  return (
    <div
      className={`
        mb-8
        flex
        flex-col
        gap-6
        lg:flex-row
        lg:items-center
        lg:justify-between
        ${className}
      `}
    >
      <div className="min-w-0">
        {breadcrumbs && (
          <div className="mb-3">
            {breadcrumbs}
          </div>
        )}

        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>

        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="flex shrink-0 items-center gap-3">
          {action}
        </div>
      )}
    </div>
  );
}