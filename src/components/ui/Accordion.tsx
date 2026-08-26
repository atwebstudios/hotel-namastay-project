"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpenDefault?: boolean;
}

export function AccordionItem({
  title,
  children,
  isOpenDefault = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-[#bdc9c2]/60 last:border-b-0 transition-colors">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4.5 sm:py-5 flex items-center justify-between text-left font-medium text-[#181d1b] hover:text-[#006951] transition-colors gap-4 cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <span className={cn("text-[15px] sm:text-base font-medium pr-4 transition-colors", isOpen && "text-[#006951]")}>
          {title}
        </span>
        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center transition-colors shrink-0", isOpen ? "bg-[#c5ebdb]/50 text-[#006951]" : "text-[#6e7a74]")}>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300 ease-in-out",
              isOpen && "transform rotate-180"
            )}
          />
        </div>
      </button>

      {/* Smooth expanding/collapsing height & opacity animation */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out overflow-hidden",
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-4 pt-0.5"
            : "grid-rows-[0fr] opacity-0 pb-0 pt-0"
        )}
      >
        <div className="min-h-0 overflow-hidden text-xs sm:text-sm text-[#3e4944] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("divide-y divide-[#bdc9c2]/60", className)}>{children}</div>;
}
