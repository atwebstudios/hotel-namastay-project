"use client";

import React from "react";
import { useBookingModal } from "@/context/BookingModalContext";
import { getTelLink } from "@/data/hotel";
import { Phone, Calendar } from "lucide-react";

export function StickyMobileCTA() {
  const { openBooking } = useBookingModal();

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-[#bdc9c2] p-3 shadow-lg flex items-center gap-2">
      <a
        href={getTelLink()}
        aria-label="Call Hotel O Namaste"
        className="p-3 rounded-md bg-[#ebefeb] hover:bg-[#dfe4e0] text-[#006951] flex items-center justify-center shrink-0"
      >
        <Phone className="w-5 h-5" />
      </a>

      <button
        type="button"
        onClick={() => openBooking("Deluxe Room")}
        className="flex-1 bg-[#006951] hover:bg-[#00513e] text-white py-3 px-4 rounded-md font-medium text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
      >
        <Calendar className="w-4 h-4" />
        <span>Enquire to Book</span>
      </button>
    </div>
  );
}
