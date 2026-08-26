"use client";

import React from "react";
import { room } from "@/data/room";
import { hotel } from "@/data/hotel";
import { useBookingModal } from "@/context/BookingModalContext";
import { Users, Bed, Maximize2, Bath, Clock, ShieldCheck } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function RoomDetails() {
  const { openBooking } = useBookingModal();

  return (
    <section className="py-12 sm:py-16 bg-[#f6faf6]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="label-caps block mb-2">ROOM OVERVIEW</span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
                Comfort & Quiet Luxury
              </h2>
            </div>

            <p className="text-[#3e4944] text-base sm:text-lg leading-relaxed">
              {room.longDescription}
            </p>

            <p className="text-[#3e4944] text-base leading-relaxed">
              Large steel-framed windows invite an abundance of natural light during the day, while warm, ambient lighting creates an intimate, relaxing atmosphere by night. Enjoy expansive comfort, bespoke wooden nightstands, dedicated writing desk, and an en-suite bathroom that feels like your own private sanctuary.
            </p>

            {/* Highlights List */}
            <div className="pt-4 border-t border-[#bdc9c2]/50">
              <h3 className="font-medium text-sm text-[#181d1b] uppercase tracking-wider mb-4">
                Key Room Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-[#3e4944]">
                    <ShieldCheck className="w-4 h-4 text-[#006951] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Room Specifications Card matching stitch mockup */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#bdc9c2] shadow-sm space-y-6 sticky top-28">
              <div>
                <span className="label-caps block text-[10px] text-[#6e7a74] mb-1">
                  AT A GLANCE
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#181d1b]">
                  Room Specifications
                </h3>
              </div>

              {/* Specs Rows */}
              <div className="divide-y divide-[#ebefeb] text-sm text-[#181d1b]">
                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#3e4944]">
                    <Users className="w-4 h-4 text-[#006951]" />
                    <span>Capacity</span>
                  </div>
                  <span className="font-medium">Up to <AnimatedCounter value={room.capacity.maxGuests} /> Guests</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#3e4944]">
                    <Bed className="w-4 h-4 text-[#006951]" />
                    <span>Bedding</span>
                  </div>
                  <span className="font-medium">{room.bedType}</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#3e4944]">
                    <Maximize2 className="w-4 h-4 text-[#006951]" />
                    <span>Room Area</span>
                  </div>
                  <span className="font-medium"><AnimatedCounter value={300} suffix=" sq.ft" /></span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#3e4944]">
                    <Bath className="w-4 h-4 text-[#006951]" />
                    <span>Bathroom</span>
                  </div>
                  <span className="font-medium">{room.bathType}</span>
                </div>

                <div className="py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#3e4944]">
                    <Clock className="w-4 h-4 text-[#006951]" />
                    <span>Check-in / Out</span>
                  </div>
                  <span className="font-medium">{hotel.checkInTime} / {hotel.checkOutTime}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => openBooking("Deluxe Room")}
                className="w-full bg-[#006951] hover:bg-[#00513e] text-white py-3.5 rounded-md font-medium text-sm transition-all shadow-sm active:scale-[0.98] cursor-pointer text-center"
              >
                Enquire to Book This Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
