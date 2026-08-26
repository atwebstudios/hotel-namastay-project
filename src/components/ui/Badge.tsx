import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "outline" | "accent";
}

export function Badge({
  className,
  variant = "primary",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#c5ebdb] text-[#00513e] border border-[#a9cfc0]",
    secondary: "bg-[#ebefeb] text-[#3e4944] border border-[#bdc9c2]",
    outline: "bg-transparent text-[#181d1b] border border-[#bdc9c2]",
    accent: "bg-[#ffdad5] text-[#93443b] border border-[#ffb4aa]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
