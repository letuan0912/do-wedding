"use client";

import React, { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  trend?: number;
  trendLabel?: string;
  color?: "gold" | "blue" | "green" | "red";
  loading?: boolean;
  className?: string;
}

const colorStyles = {
  gold: {
    bg: "bg-[#c8a86b]/10",
    text: "text-[#b8944d]",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
  },
};

export default function StatCard({
  title,
  value,
  icon,
  trend,
  trendLabel = "so với tháng trước",
  color = "gold",
  loading = false,
  className = "",
}: StatCardProps) {
  const styles = colorStyles[color];

  return (
    <div
      className={`
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          {loading ? (
            <div className="mt-3 h-9 w-24 animate-pulse rounded bg-gray-200" />
          ) : (
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {value}
            </h2>
          )}
        </div>

        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            ${styles.bg}
            ${styles.text}
          `}
        >
          {icon}
        </div>
      </div>

      {trend !== undefined && !loading && (
        <div className="mt-6 flex items-center gap-2 text-sm">
          {trend >= 0 ? (
            <>
              <ArrowUpRight
                size={16}
                className="text-green-600"
              />

              <span className="font-semibold text-green-600">
                +{trend}%
              </span>
            </>
          ) : (
            <>
              <ArrowDownRight
                size={16}
                className="text-red-600"
              />

              <span className="font-semibold text-red-600">
                {trend}%
              </span>
            </>
          )}

          <span className="text-gray-500">
            {trendLabel}
          </span>
        </div>
      )}
    </div>
  );
}