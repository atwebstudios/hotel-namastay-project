"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
        className="w-full py-4.5 sm:py-5 flex items-center justify-between text-left font-medium text-[#181d1b] hover:text-accent-gold transition-colors gap-4 cursor-pointer select-none group"
        aria-expanded={isOpen}
      >
        <span className={cn("text-[15px] sm:text-base font-medium pr-4 transition-colors", isOpen ? "text-[#006951]" : "group-hover:text-accent-gold")}>
          {title}
        </span>
        <div className={cn("w-6 h-6 rounded-full flex items-center justify-center transition-colors shrink-0", isOpen ? "bg-accent-champagne/50 text-[#006951]" : "text-[#6e7a74] group-hover:text-accent-gold")}>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300 ease-in-out",
              isOpen && "transform rotate-180"
            )}
          />
        </div>
      </button>

      {/* Smooth expanding/collapsing height & opacity animation with Framer Motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-xs sm:text-sm text-[#3e4944] leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
