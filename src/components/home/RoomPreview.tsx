"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useBookingModal } from "@/context/BookingModalContext";
import { room } from "@/data/room";
import { Users, Bed, Wifi, Wind, Bath, Maximize2 } from "lucide-react";

export function RoomPreview() {
  const { openBooking } = useBookingModal();

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#bdc9c2]/40">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="label-caps">OUR ACCOMMODATION</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b]">
            The {room.name}
          </h2>
          <p className="text-[#6e7a74] text-base sm:text-lg">
            A serene retreat carefully designed for deep rest and comfortable living.
          </p>
        </div>

        {/* Room Showcase Card (Equal 50/50 Split) */}
        <div className="bg-[#f6faf6] border border-[#bdc9c2] rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Featured Photography (50% Width) */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[440px] lg:min-h-[500px]">
            <Image
              src={room.images[0]}
              alt={room.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Secondary Thumbnail Overlay */}
            <div className="absolute bottom-4 right-4 w-28 h-20 sm:w-36 sm:h-24 rounded-md overflow-hidden border-2 border-white shadow-md hidden sm:block">
              <Image
                src={room.images[2]}
                alt="En-suite bathroom view"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>

          {/* Right Column: Room Details & Action (50% Width) */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="label-caps text-[10px] text-[#006951]">
                SIGNATURE ROOM
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#181d1b] font-medium">
                {room.subtitle}
              </h3>
              <p className="text-[#3e4944] text-sm sm:text-base leading-relaxed">
                {room.shortDescription}
              </p>

              {/* Amenity Icons Grid */}
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 pt-4 border-t border-[#bdc9c2]/50 text-xs sm:text-sm text-[#181d1b]">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#006951] shrink-0" />
                  <span>Up to {room.capacity.maxGuests} Guests</span>
                </div>

                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4 text-[#006951] shrink-0" />
                  <span>{room.bedType}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#006951] shrink-0" />
                  <span>{room.roomSize}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4 text-[#006951] shrink-0" />
                  <span>Private Bathroom</span>
                </div>

                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-[#006951] shrink-0" />
                  <span>High-Speed Wi-Fi</span>
                </div>

                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-[#006951] shrink-0" />
                  <span>Air Conditioning</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-[#bdc9c2]/50 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/room"
                className="w-full sm:w-auto text-center border border-[#006951] text-[#006951] hover:bg-[#006951] hover:text-white px-5 py-2.5 rounded font-medium text-sm transition-colors"
              >
                Explore Room Details
              </Link>

              <button
                type="button"
                onClick={() => openBooking("Deluxe Room")}
                className="w-full sm:w-auto bg-[#006951] hover:bg-[#00513e] text-white px-6 py-2.5 rounded font-medium text-sm transition-all shadow-xs cursor-pointer text-center"
              >
                Enquire to Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
