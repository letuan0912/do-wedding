"use client";

import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useId,
} from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      startIcon,
      endIcon,
      className = "",
      containerClassName = "",
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className={`w-full ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
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
            flex
            h-11
            items-center
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
          {startIcon && (
            <div className="pl-3 text-gray-400">
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`
              h-full
              flex-1
              bg-transparent
              px-3
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

          {endIcon && (
            <div className="pr-3 text-gray-400">
              {endIcon}
            </div>
          )}
        </div>

        {error ? (
          <p className="mt-1 text-xs text-red-500">
            {error}
          </p>
        ) : helperText ? (
          <p className="mt-1 text-xs text-gray-500">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;