"use client";

import React from "react";
import { format, parseISO } from "date-fns";
import { Check, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { hotel, getWhatsAppBookingLink, getTelLink } from "@/data/hotel";

interface EnquirySuccessProps {
  enquiryId: string;
  roomName: string;
  rooms: number;
  checkIn: string;
  checkOut: string;
  adults: number;
  childrenCount: number;
  fullName: string;
  onClose: () => void;
}

export function EnquirySuccess({
  enquiryId,
  roomName,
  rooms,
  checkIn,
  checkOut,
  adults,
  childrenCount,
  fullName,
  onClose,
}: EnquirySuccessProps) {
  const checkInFormatted = checkIn ? format(parseISO(checkIn), "MMM dd, yyyy") : "";
  const checkOutFormatted = checkOut ? format(parseISO(checkOut), "MMM dd, yyyy") : "";

  return (
    <div className="py-1 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300 text-xs sm:text-sm flex-1 flex flex-col justify-between">
      <div className="space-y-3">
        {/* Green Checkmark Badge */}
        <div className="mx-auto w-11 h-11 rounded-xl bg-[#c5ebdb] flex items-center justify-center text-[#006951] shadow-xs">
          <Check className="w-5 h-5 stroke-[2.5]" />
        </div>

        {/* Main Title & Subtitle */}
        <div>
          <h2 className="font-display text-xl sm:text-2xl text-[#181d1b] font-semibold tracking-tight">
            Enquiry Received!
          </h2>
          <p className="text-[11px] text-[#3e4944] mt-0.5 max-w-xs mx-auto leading-relaxed">
            Thank you for choosing {hotel.name}. Our front desk will contact you within <strong>1–2 hours</strong>.
          </p>
        </div>

        {/* Summary Box */}
        <div className="bg-white border border-[#bdc9c2] rounded-md p-3 text-left max-w-sm mx-auto shadow-2xs space-y-2">
          {/* Enquiry ID Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#ebefeb]">
            <span className="text-[9px] font-semibold tracking-wider text-[#6e7a74] uppercase">
              ENQUIRY ID
            </span>
            <span className="font-mono font-bold text-xs text-[#006951]">
              #{enquiryId}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-2 pb-1.5 border-b border-[#ebefeb] text-xs">
            <div>
              <span className="block text-[9px] text-[#6e7a74] uppercase">STAY</span>
              <span className="font-medium text-[#181d1b]">
                {roomName} ({rooms} {rooms === 1 ? "room" : "rooms"})
              </span>
            </div>
            <div>
              <span className="block text-[9px] text-[#6e7a74] uppercase">GUEST</span>
              <span className="font-medium text-[#181d1b] truncate block">
                {fullName}
              </span>
            </div>
          </div>

          {/* Dates & Guests */}
          <div className="space-y-1 text-xs">
            <div>
              <span className="block text-[9px] text-[#6e7a74] uppercase">DATES</span>
              <span className="font-medium text-[#181d1b]">
                {checkInFormatted} — {checkOutFormatted}
              </span>
            </div>
            <div>
              <span className="block text-[9px] text-[#6e7a74] uppercase">GUESTS</span>
              <span className="text-[#181d1b]">
                {adults} {adults === 1 ? "Adult" : "Adults"}
                {childrenCount > 0 && `, ${childrenCount} ${childrenCount === 1 ? "Child" : "Children"}`}
              </span>
            </div>
          </div>
        </div>

        {/* Quick assistance */}
        <div className="max-w-sm mx-auto w-full">
          <p className="text-[9px] font-semibold tracking-wider text-[#6e7a74] uppercase mb-1.5">
            NEED URGENT ASSISTANCE?
          </p>
          <div className="flex items-center justify-center gap-2">
            <a
              href={getTelLink()}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#bdc9c2] bg-white hover:bg-[#f0f5f1] text-[#181d1b] text-xs font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#006951]" />
              <span>Call Us</span>
            </a>
            <a
              href={getWhatsAppBookingLink(enquiryId)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#bdc9c2] bg-white hover:bg-[#f0f5f1] text-[#181d1b] text-xs font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#006951]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Home CTA */}
      <div className="pt-1 max-w-sm mx-auto w-full shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-[#006951] hover:bg-[#00513e] text-white py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
}
