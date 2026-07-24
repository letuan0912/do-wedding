"use client";

import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export default function Switch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  required = false,
  className = "",
}: SwitchProps) {
  return (
    <div className={`flex items-start justify-between gap-4 ${className}`}>
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <label className="text-sm font-medium text-gray-700">
              {label}
              {required && (
                <span className="ml-1 text-red-500">*</span>
              )}
            </label>
          )}

          {description && (
            <p className="mt-1 text-xs text-gray-500">
              {description}
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`
          relative
          inline-flex
          h-7
          w-12
          items-center
          rounded-full
          transition-all
          duration-300
          focus:outline-none
          focus:ring-4
          focus:ring-[#c8a86b]/20
          ${
            checked
              ? "bg-[#c8a86b]"
              : "bg-gray-300"
          }
          ${
            disabled
              ? "cursor-not-allowed opacity-60"
              : "cursor-pointer"
          }
        `}
      >
        <span
          className={`
            inline-block
            h-5
            w-5
            rounded-full
            bg-white
            shadow-md
            transition-all
            duration-300
            ${
              checked
                ? "translate-x-6"
                : "translate-x-1"
            }
          `}
        />
      </button>
    </div>
  );
}