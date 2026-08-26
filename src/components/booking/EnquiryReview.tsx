"use client";

import React from "react";
import { format, parseISO } from "date-fns";
import { calculateNights } from "@/lib/booking/enquiry-service";
import { hotel } from "@/data/hotel";
import { GuestDetailsFormData } from "./GuestDetailsForm";
import { Calendar, Users, User, ShieldCheck, DoorOpen } from "lucide-react";

interface EnquiryReviewProps {
  roomName: string;
  rooms: number;
  checkIn: string;
  checkOut: string;
  adults: number;
  childrenCount: number;
  guestDetails: GuestDetailsFormData;
  isSubmitting: boolean;
  onEdit: () => void;
  onSubmit: () => void;
}

export function EnquiryReview({
  roomName,
  rooms,
  checkIn,
  checkOut,
  adults,
  childrenCount,
  guestDetails,
  isSubmitting,
  onEdit,
  onSubmit,
}: EnquiryReviewProps) {
  const checkInFormatted = checkIn ? format(parseISO(checkIn), "EEE, MMM dd, yyyy") : "";
  const checkOutFormatted = checkOut ? format(parseISO(checkOut), "EEE, MMM dd, yyyy") : "";
  const nights = calculateNights(checkIn, checkOut);

  return (
    <div className="space-y-2.5 text-xs sm:text-sm flex-1 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="text-center">
          <h3 className="font-display text-base sm:text-lg font-semibold text-[#181d1b]">
            Review Enquiry
          </h3>
          <p className="text-[11px] text-[#6e7a74]">
            Please verify your stay details before submitting.
          </p>
        </div>

        {/* Stay Details Summary Card */}
        <div className="bg-white border border-[#bdc9c2] rounded-md p-2.5 space-y-2 shadow-2xs">
          {/* Hotel & Room */}
          <div className="pb-1.5 border-b border-[#ebefeb] flex items-center justify-between">
            <div>
              <span className="label-caps block text-[9px] text-[#6e7a74]">{hotel.name}</span>
              <span className="font-medium text-xs sm:text-sm text-[#181d1b]">{roomName}</span>
            </div>
            <span className="text-[10px] bg-[#c5ebdb] text-[#00513e] font-semibold px-2 py-0.5 rounded">
              {nights} {nights === 1 ? "Night" : "Nights"}
            </span>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-start gap-1.5 text-[#3e4944]">
              <Calendar className="w-3.5 h-3.5 text-[#006951] shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] text-[#6e7a74] block">Check-in:</span>
                <strong className="text-[#181d1b] text-xs block">{checkInFormatted}</strong>
              </div>
            </div>

            <div className="flex items-start gap-1.5 text-[#3e4944]">
              <Calendar className="w-3.5 h-3.5 text-[#006951] shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] text-[#6e7a74] block">Check-out:</span>
                <strong className="text-[#181d1b] text-xs block">{checkOutFormatted}</strong>
              </div>
            </div>
          </div>

          {/* Rooms & Guests */}
          <div className="flex items-center gap-3 pt-1.5 border-t border-[#ebefeb] text-xs text-[#3e4944]">
            <div className="flex items-center gap-1.5">
              <DoorOpen className="w-3.5 h-3.5 text-[#006951] shrink-0" />
              <span>
                Rooms: <strong className="text-[#181d1b]">{rooms}</strong>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#006951] shrink-0" />
              <span>
                Guests: <strong className="text-[#181d1b]">{adults} Adult{adults > 1 ? "s" : ""}</strong>
                {childrenCount > 0 && `, ${childrenCount} Child${childrenCount > 1 ? "ren" : ""}`}
              </span>
            </div>
          </div>

          {/* Contact info */}
          <div className="pt-1.5 border-t border-[#ebefeb] space-y-0.5 text-xs text-[#3e4944]">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#006951] shrink-0" />
              <span className="font-semibold text-[#181d1b]">{guestDetails.fullName}</span>
            </div>
            <div className="pl-5 text-[10px] text-[#6e7a74]">
              Phone: <span className="text-[#181d1b] font-medium">{guestDetails.phone}</span>
              <span className="mx-1">•</span>
              Email: <span className="text-[#181d1b] font-medium">{guestDetails.email}</span>
            </div>
            {guestDetails.specialRequest && (
              <div className="pl-5 text-[10px] text-[#3e4944] italic">
                Note: &ldquo;{guestDetails.specialRequest}&rdquo;
              </div>
            )}
          </div>
        </div>

        {/* Important Notice */}
        <div className="flex items-start gap-1.5 p-2 bg-[#f0f5f1] border border-[#c5ebdb] rounded text-[11px] text-[#3e4944] leading-relaxed">
          <ShieldCheck className="w-3.5 h-3.5 text-[#006951] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#006951] block text-[10px]">Enquiry Notice</strong>
            Our reservations desk will contact you within 1–2 hours to confirm room availability.
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-1 shrink-0">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={onEdit}
          className="w-1/3 border border-[#bdc9c2] hover:bg-[#ebefeb] disabled:opacity-50 text-[#181d1b] py-2.5 rounded-lg font-medium text-xs transition-colors cursor-pointer"
        >
          Edit Details
        </button>
        <button
          type="button"
          disabled={isSubmitting}
          onClick={onSubmit}
          className="w-2/3 bg-[#006951] hover:bg-[#00513e] disabled:opacity-50 text-white py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            <span>Send Booking Enquiry</span>
          )}
        </button>
      </div>
    </div>
  );
}
