import React from "react";
import Link from "next/link";
import { room } from "@/data/room";
import { ChevronRight } from "lucide-react";

export function RoomHero() {
  return (
    <div className="pt-8 pb-6 bg-[#f6faf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6e7a74] mb-4">
          <Link href="/" className="hover:text-[#006951] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#181d1b] font-medium">{room.name}</span>
        </nav>

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium text-[#181d1b]">
            {room.name}
          </h1>
          <p className="text-sm sm:text-lg text-[#6e7a74] max-w-2xl">
            {room.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
