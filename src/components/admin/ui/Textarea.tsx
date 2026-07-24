"use client";

import React, {
  forwardRef,
  TextareaHTMLAttributes,
} from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  showCount?: boolean;
  containerClassName?: string;
}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      label,
      error,
      helperText,
      required,
      showCount = false,
      maxLength,
      value,
      className = "",
      containerClassName = "",
      id,
      rows = 5,
      ...props
    },
    ref
  ) => {
    const textareaId =
      id ||
      `textarea-${Math.random()
        .toString(36)
        .substring(2, 9)}`;

    const currentLength =
      typeof value === "string"
        ? value.length
        : 0;

    return (
      <div className={`w-full ${containerClassName}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {label}

            {required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </label>
        )}

        <div
          className={`
            rounded-xl
            border
            bg-white
            transition-all
            duration-200
            ${
              error
                ? "border-red-500 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-100"
                : "border-gray-300 focus-within:border-[#c8a86b] focus-within:ring-4 focus-within:ring-[#c8a86b]/20"
            }
          `}
        >
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            value={value}
            maxLength={maxLength}
            className={`
              w-full
              resize-none
              rounded-xl
              bg-transparent
              px-4
              py-3
              text-sm
              text-gray-800
              outline-none
              placeholder:text-gray-400
              disabled:cursor-not-allowed
              disabled:bg-gray-100
              ${className}
            `}
            {...props}
          />

          {(showCount || maxLength) && (
            <div className="flex justify-end px-4 pb-3">
              <span className="text-xs text-gray-400">
                {currentLength}
                {maxLength ? ` / ${maxLength}` : ""}
              </span>
            </div>
          )}
        </div>

        {error ? (
          <p className="mt-2 text-xs text-red-500">
            {error}
          </p>
        ) : helperText ? (
          <p className="mt-2 text-xs text-gray-500">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;