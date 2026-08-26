import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#006951] text-white hover:bg-[#00513e] focus:ring-[#006951] active:scale-[0.99] shadow-sm",
      secondary:
        "bg-[#ebefeb] text-[#181d1b] hover:bg-[#dfe4e0] border border-[#bdc9c2] focus:ring-[#436559]",
      outline:
        "bg-transparent text-[#181d1b] border border-[#bdc9c2] hover:bg-[#f0f5f1] hover:border-[#6e7a74] focus:ring-[#006951]",
      ghost:
        "bg-transparent text-[#181d1b] hover:bg-[#ebefeb] focus:ring-[#006951]",
      link:
        "bg-transparent text-[#006951] underline-offset-4 hover:underline p-0 focus:ring-0",
      white:
        "bg-white text-[#181d1b] hover:bg-[#f0f5f1] shadow-sm focus:ring-[#006951]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded",
      md: "text-sm px-5 py-2.5 rounded",
      lg: "text-base px-6 py-3 rounded",
      xl: "text-lg px-8 py-3.5 rounded-md",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
