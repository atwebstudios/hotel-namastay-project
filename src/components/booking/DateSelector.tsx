"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isWithinInterval,
  isBefore,
  startOfDay,
  addDays,
} from "date-fns";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Info } from "lucide-react";
import { room } from "@/data/room";

interface DateSelectorProps {
  checkIn: string;
  checkOut: string;
  onChange: (checkIn: string, checkOut: string) => void;
  onNext: () => void;
}

export function DateSelector({
  checkIn,
  checkOut,
  onChange,
  onNext,
}: DateSelectorProps) {
  const today = startOfDay(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(
    checkIn ? new Date(checkIn) : today
  );
  const [selectingState, setSelectingState] = useState<"checkin" | "checkout">("checkin");

  const checkInDate = checkIn ? new Date(checkIn) : null;
  const checkOutDate = checkOut ? new Date(checkOut) : null;

  const handleDateClick = (day: Date) => {
    if (isBefore(day, today)) return;

    if (selectingState === "checkin" || !checkInDate) {
      onChange(format(day, "yyyy-MM-dd"), "");
      setSelectingState("checkout");
    } else {
      if (isBefore(day, checkInDate) || isSameDay(day, checkInDate)) {
        onChange(format(day, "yyyy-MM-dd"), "");
        setSelectingState("checkout");
      } else {
        onChange(format(checkInDate, "yyyy-MM-dd"), format(day, "yyyy-MM-dd"));
        setSelectingState("checkin");
      }
    }
  };

  const handlePreset = (nights: number) => {
    const start = checkInDate || today;
    const end = addDays(start, nights);
    onChange(format(start, "yyyy-MM-dd"), format(end, "yyyy-MM-dd"));
    setSelectingState("checkin");
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDayIndex = monthStart.getDay();
  const paddingDays = Array.from({ length: startDayIndex });

  const isValid = Boolean(checkIn && checkOut && new Date(checkOut) > new Date(checkIn));

  return (
    <div className="space-y-2.5 text-xs sm:text-sm flex-1 flex flex-col justify-between">
      {/* Subheader & Selected Room */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-base sm:text-lg font-semibold text-[#181d1b]">
              Select Stay Dates
            </h3>
            <p className="text-[11px] text-[#6e7a74]">
              {!checkInDate
                ? "Click arrival date on the calendar"
                : !checkOutDate
                ? "Now click your departure date"
                : `Duration: ${Math.round(
                    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
                  )} night(s)`}
            </p>
          </div>

          <div className="flex items-center gap-2 p-1.5 bg-[#f0f5f1] rounded border border-[#bdc9c2]/50">
            <div className="relative w-8 h-7 rounded overflow-hidden shrink-0">
              <Image
                src={room.images[0]}
                alt={room.name}
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="font-medium text-xs text-[#181d1b] pr-1">
              {room.name}
            </span>
          </div>
        </div>

        {/* Date Boxes */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setSelectingState("checkin")}
            className={`p-1.5 sm:p-2 text-left rounded border transition-all cursor-pointer ${
              selectingState === "checkin"
                ? "border-[#006951] bg-[#c5ebdb]/20 ring-1 ring-[#006951]"
                : "border-[#bdc9c2] bg-white hover:border-[#006951]/60"
            }`}
          >
            <span className="block text-[9px] font-semibold text-[#6e7a74] uppercase tracking-wider">
              Check-in
            </span>
            <div className="flex items-center justify-between text-xs font-semibold text-[#181d1b]">
              <span className="truncate">{checkInDate ? format(checkInDate, "MMM dd, yyyy") : "Select date"}</span>
              <CalendarIcon className="w-3.5 h-3.5 text-[#006951] shrink-0" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectingState("checkout")}
            className={`p-1.5 sm:p-2 text-left rounded border transition-all cursor-pointer ${
              selectingState === "checkout"
                ? "border-[#006951] bg-[#c5ebdb]/20 ring-1 ring-[#006951]"
                : "border-[#bdc9c2] bg-white hover:border-[#006951]/60"
            }`}
          >
            <span className="block text-[9px] font-semibold text-[#6e7a74] uppercase tracking-wider">
              Check-out
            </span>
            <div className="flex items-center justify-between text-xs font-semibold text-[#181d1b]">
              <span className="truncate">{checkOutDate ? format(checkOutDate, "MMM dd, yyyy") : "Select date"}</span>
              <CalendarIcon className="w-3.5 h-3.5 text-[#006951] shrink-0" />
            </div>
          </button>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-[10px] text-[#6e7a74]">Quick:</span>
          {[1, 2, 3, 5, 7].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => handlePreset(n)}
              className="text-[10px] px-2 py-0.5 bg-[#ebefeb] hover:bg-[#c5ebdb] hover:text-[#00513e] text-[#3e4944] rounded transition-colors cursor-pointer"
            >
              {n} {n === 1 ? "Night" : "Nights"}
            </button>
          ))}
        </div>
      </div>

      {/* Compact Calendar Widget */}
      <div className="border border-[#bdc9c2] rounded-lg p-2.5 bg-white shadow-2xs">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-1.5">
          <button
            type="button"
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            disabled={isBefore(startOfMonth(currentMonth), startOfMonth(today))}
            className="p-1 rounded hover:bg-[#f0f5f1] text-[#181d1b] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="font-semibold text-xs text-[#181d1b]">
            {format(currentMonth, "MMMM yyyy")}
          </span>
          <button
            type="button"
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="p-1 rounded hover:bg-[#f0f5f1] text-[#181d1b] cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 text-center text-[10px] font-semibold text-[#6e7a74] mb-1">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>

        {/* Day Cells */}
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {paddingDays.map((_, i) => (
            <div key={`pad-${i}`} className="h-6 sm:h-6.5" />
          ))}

          {daysInMonth.map((day) => {
            const isPast = isBefore(day, today);
            const isCheckIn = checkInDate && isSameDay(day, checkInDate);
            const isCheckOut = checkOutDate && isSameDay(day, checkOutDate);
            const inRange =
              checkInDate &&
              checkOutDate &&
              isWithinInterval(day, { start: checkInDate, end: checkOutDate });

            let cellClass = "hover:bg-[#ebefeb] text-[#181d1b]";
            if (isPast) {
              cellClass = "text-[#bdc9c2] cursor-not-allowed line-through opacity-40";
            } else if (isCheckIn || isCheckOut) {
              cellClass = "bg-[#006951] text-white font-semibold rounded";
            } else if (inRange) {
              cellClass = "bg-[#c5ebdb]/70 text-[#00513e] rounded-none";
            }

            return (
              <button
                key={day.toISOString()}
                type="button"
                disabled={isPast}
                onClick={() => handleDateClick(day)}
                className={`h-6 sm:h-6.5 w-full flex items-center justify-center text-[11px] transition-colors rounded-xs cursor-pointer ${cellClass}`}
              >
                {format(day, "d")}
              </button>
            );
          })}
        </div>
      </div>

      {/* Prompt banner when checkin is chosen */}
      {checkInDate && !checkOutDate && (
        <div className="flex items-center gap-1.5 text-[10px] text-[#006951] bg-[#c5ebdb]/30 p-1.5 rounded border border-[#c5ebdb]">
          <Info className="w-3 h-3 shrink-0" />
          <span>Check-in selected. Click your check-out date on calendar.</span>
        </div>
      )}

      {/* Next Action */}
      <button
        type="button"
        disabled={!isValid}
        onClick={onNext}
        className="w-full bg-[#006951] hover:bg-[#00513e] disabled:opacity-40 disabled:cursor-not-allowed text-white py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-xs cursor-pointer shrink-0"
      >
        Continue to Guests & Rooms
      </button>
    </div>
  );
}
