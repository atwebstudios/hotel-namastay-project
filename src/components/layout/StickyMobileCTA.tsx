"use client";

import React from "react";
import { useBookingModal } from "@/context/BookingModalContext";
import { getTelLink } from "@/data/hotel";
import { Phone, Calendar } from "lucide-react";

export function StickyMobileCTA() {
  const { openBooking } = useBookingModal();

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/80 backdrop-blur-xl border-t border-white/60 p-3 shadow-[0_-10px_40px_rgba(0,105,81,0.08)] flex items-center gap-3">
      <a
        href={getTelLink()}
        aria-label="Call Hotel O Namaste"
        className="p-3.5 rounded-lg bg-accent-champagne/40 hover:bg-accent-champagne border border-accent-gold/20 text-[#006951] flex items-center justify-center shrink-0 transition-all shadow-sm"
      >
        <Phone className="w-5 h-5" />
      </a>

      <button
        type="button"
        onClick={() => openBooking("Deluxe Room")}
        className="flex-1 bg-gradient-to-r from-[#006951] to-[#00513e] hover:from-[#00513e] hover:to-[#003b2c] text-white py-3.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer border border-white/10 relative overflow-hidden group"
      >
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
        
        <Calendar className="w-4 h-4 relative z-10" />
        <span className="relative z-10">Enquire to Book</span>
      </button>
    </div>
  );
}
