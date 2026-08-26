"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hotel, getWhatsAppBookingLink } from "@/data/hotel";
import { Phone, MessageCircle, Mail, MapPin, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  onOpenBooking: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  onOpenBooking,
}: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Menu Container */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#f6faf6] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#bdc9c2] z-50 animate-in slide-in-from-right duration-250">
        <div className="space-y-6">
          {/* Header with explicit Close Button */}
          <div className="pb-4 border-b border-[#dfe4e0] flex items-center justify-between">
            <span className="font-display text-2xl font-semibold text-[#006951]">
              Hotel O Namaste
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close mobile navigation menu"
              className="p-2 rounded-full text-[#6e7a74] hover:text-[#181d1b] hover:bg-[#ebefeb] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className={`block py-3 px-3.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#c5ebdb]/70 text-[#00513e] font-semibold"
                      : "text-[#181d1b] hover:bg-[#ebefeb]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full bg-[#006951] hover:bg-[#00513e] text-white py-3 rounded-lg font-medium text-sm transition-all shadow-sm cursor-pointer active:scale-[0.98]"
            >
              Enquire to Book
            </button>
          </div>
        </div>

        {/* Contact info at bottom of drawer */}
        <div className="pt-6 border-t border-[#dfe4e0] space-y-3 text-xs text-[#3e4944]">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#006951]" />
            <a href={`tel:${hotel.phone}`} className="hover:text-[#006951]">
              {hotel.phoneDisplay}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#006951]" />
            <a
              href={getWhatsAppBookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#006951]"
            >
              WhatsApp Concierge
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#006951]" />
            <a href={`mailto:${hotel.email}`} className="hover:text-[#006951] truncate">
              {hotel.email}
            </a>
          </div>

          <div className="flex items-start gap-2 pt-1 text-[#6e7a74]">
            <MapPin className="w-4 h-4 text-[#006951] shrink-0 mt-0.5" />
            <span>{hotel.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
