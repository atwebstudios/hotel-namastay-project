import React from "react";
import { room } from "@/data/room";
import {
  Snowflake,
  Fan,
  DoorClosed,
  Layers,
  Sparkles,
  Trash2,
  Bath,
  ShowerHead,
  Droplets,
  HeartPulse,
  Wifi,
  Laptop,
  Armchair,
  Tv,
  Phone,
  Droplet,
  Utensils,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

const amenityIconMap: Record<string, LucideIcon> = {
  "Air conditioning": Snowflake,
  "Ceiling fan": Fan,
  "Closet & Clothes rack": DoorClosed,
  "Premium Linens": Layers,
  "Dressing mirror": Sparkles,
  "Trash cans": Trash2,
  "Private bathroom": Bath,
  "Hot & cold shower": ShowerHead,
  "Fresh luxury towels": Layers,
  "Complimentary toiletries": Sparkles,
  "Hand sanitizer provided": Droplets,
  "First aid kit available": HeartPulse,
  "Free Wi-Fi in all rooms": Wifi,
  "Dedicated work desk": Laptop,
  "Comfortable seating area": Armchair,
  "Satellite / cable channels TV": Tv,
  "In-room telephone intercom": Phone,
  "Free bottled water": Droplet,
  "24-Hour room service assistance": Utensils,
  "Daily housekeeping": Sparkles,
};

export function RoomAmenities() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#bdc9c2]/40">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="label-caps">THOUGHTFUL DETAILS</span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
            Available in All Rooms
          </h2>
          <p className="text-[#6e7a74] text-sm sm:text-base">
            Every convenience thoughtfully arranged in your Deluxe Room to ensure effortless relaxation.
          </p>
        </div>

        {/* Categorized Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {room.amenities.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#f6faf6] p-6 rounded-xl border border-[#bdc9c2]/60 flex flex-col shadow-2xs hover:shadow-sm transition-all"
            >
              <h3 className="font-display font-semibold text-base sm:text-lg text-[#181d1b] pb-3 mb-4 border-b border-[#bdc9c2]/40">
                {cat.category}
              </h3>
              <ul className="space-y-3 flex-1">
                {cat.items.map((item, itemIdx) => {
                  const Icon = amenityIconMap[item] || CheckCircle2;
                  return (
                    <li key={itemIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3e4944]">
                      <div className="w-6 h-6 rounded bg-white border border-[#bdc9c2]/50 flex items-center justify-center text-[#006951] shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
