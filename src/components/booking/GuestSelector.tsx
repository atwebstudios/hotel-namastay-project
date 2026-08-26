"use client";

import React from "react";
import { Plus, Minus, Users, Baby, DoorOpen, Info } from "lucide-react";
import { room } from "@/data/room";

interface GuestSelectorProps {
  rooms: number;
  adults: number;
  childrenCount: number;
  onChange: (rooms: number, adults: number, children: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export function GuestSelector({
  rooms,
  adults,
  childrenCount,
  onChange,
  onNext,
  onBack,
}: GuestSelectorProps) {
  const maxPerRoom = room.capacity.maxGuests; // 3
  const totalGuests = adults + childrenCount;
  const recommendedRooms = Math.max(1, Math.ceil(totalGuests / maxPerRoom));

  const handleRoomsChange = (delta: number) => {
    const newRooms = rooms + delta;
    if (newRooms >= 1 && newRooms <= 28) {
      onChange(newRooms, adults, childrenCount);
    }
  };

  const handleAdultsChange = (delta: number) => {
    const newAdults = adults + delta;
    if (newAdults >= 1 && newAdults <= 50) {
      const nextTotal = newAdults + childrenCount;
      const nextSuggestedRooms = Math.max(rooms, Math.ceil(nextTotal / maxPerRoom));
      onChange(nextSuggestedRooms, newAdults, childrenCount);
    }
  };

  const handleChildrenChange = (delta: number) => {
    const newChildren = childrenCount + delta;
    if (newChildren >= 0 && newChildren <= 30) {
      const nextTotal = adults + newChildren;
      const nextSuggestedRooms = Math.max(rooms, Math.ceil(nextTotal / maxPerRoom));
      onChange(nextSuggestedRooms, adults, newChildren);
    }
  };

  return (
    <div className="space-y-3 text-xs sm:text-sm flex-1 flex flex-col justify-between">
      <div className="text-center">
        <h3 className="font-display text-base sm:text-lg font-semibold text-[#181d1b]">
          Rooms & Guests
        </h3>
        <p className="text-[11px] text-[#6e7a74]">
          Select the number of rooms and guests for your stay.
        </p>
      </div>

      <div className="space-y-2">
        {/* Rooms Counter */}
        <div className="flex items-center justify-between p-2.5 bg-white border border-[#bdc9c2] rounded-md shadow-2xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#f0f5f1] flex items-center justify-center text-[#006951]">
              <DoorOpen className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-semibold text-xs text-[#181d1b]">Rooms</div>
              <div className="text-[10px] text-[#6e7a74]">Deluxe Room (up to 3 guests/room)</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleRoomsChange(-1)}
              disabled={rooms <= 1}
              aria-label="Decrease rooms"
              className="w-7 h-7 rounded-full border border-[#bdc9c2] flex items-center justify-center text-[#181d1b] hover:bg-[#ebefeb] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-5 text-center font-bold text-sm text-[#181d1b]">
              {rooms}
            </span>
            <button
              type="button"
              onClick={() => handleRoomsChange(1)}
              disabled={rooms >= 28}
              aria-label="Increase rooms"
              className="w-7 h-7 rounded-full border border-[#bdc9c2] flex items-center justify-center text-[#181d1b] hover:bg-[#ebefeb] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Adults Counter */}
        <div className="flex items-center justify-between p-2.5 bg-white border border-[#bdc9c2] rounded-md shadow-2xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#f0f5f1] flex items-center justify-center text-[#006951]">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-semibold text-xs text-[#181d1b]">Adults</div>
              <div className="text-[10px] text-[#6e7a74]">Ages 13 and above</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleAdultsChange(-1)}
              disabled={adults <= 1}
              aria-label="Decrease adults"
              className="w-7 h-7 rounded-full border border-[#bdc9c2] flex items-center justify-center text-[#181d1b] hover:bg-[#ebefeb] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-5 text-center font-bold text-sm text-[#181d1b]">
              {adults}
            </span>
            <button
              type="button"
              onClick={() => handleAdultsChange(1)}
              disabled={adults >= 50}
              aria-label="Increase adults"
              className="w-7 h-7 rounded-full border border-[#bdc9c2] flex items-center justify-center text-[#181d1b] hover:bg-[#ebefeb] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Children Counter */}
        <div className="flex items-center justify-between p-2.5 bg-white border border-[#bdc9c2] rounded-md shadow-2xs">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#f0f5f1] flex items-center justify-center text-[#006951]">
              <Baby className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-semibold text-xs text-[#181d1b]">Children</div>
              <div className="text-[10px] text-[#6e7a74]">Ages 0 to 12</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleChildrenChange(-1)}
              disabled={childrenCount <= 0}
              aria-label="Decrease children"
              className="w-7 h-7 rounded-full border border-[#bdc9c2] flex items-center justify-center text-[#181d1b] hover:bg-[#ebefeb] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-5 text-center font-bold text-sm text-[#181d1b]">
              {childrenCount}
            </span>
            <button
              type="button"
              onClick={() => handleChildrenChange(1)}
              disabled={childrenCount >= 30}
              aria-label="Increase children"
              className="w-7 h-7 rounded-full border border-[#bdc9c2] flex items-center justify-center text-[#181d1b] hover:bg-[#ebefeb] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Suggestion / Room Capacity helper banner */}
      <div className="flex items-start gap-1.5 p-2 bg-[#f0f5f1] rounded border border-[#dfe4e0] text-[11px] text-[#3e4944]">
        <Info className="w-3.5 h-3.5 text-[#006951] shrink-0 mt-0.5" />
        <div>
          <span>
            Total: <strong>{totalGuests}</strong> guest{totalGuests > 1 ? "s" : ""} across <strong>{rooms}</strong> room{rooms > 1 ? "s" : ""}.
          </span>
          {rooms < recommendedRooms && (
            <span className="block text-amber-800 font-medium mt-0.5">
              Tip: We suggest booking at least {recommendedRooms} rooms for {totalGuests} guests.
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-1 shrink-0">
        <button
          type="button"
          onClick={onBack}
          className="w-1/3 border border-[#bdc9c2] hover:bg-[#ebefeb] text-[#181d1b] py-2.5 rounded-lg font-medium text-xs transition-colors cursor-pointer"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="w-2/3 bg-[#006951] hover:bg-[#00513e] text-white py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
        >
          Continue to Details
        </button>
      </div>
    </div>
  );
}
