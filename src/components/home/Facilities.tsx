"use client";

import React, { useState } from "react";
import {
  facilities,
  hotelPropertyCategories,
  inRoomAmenityCategories,
} from "@/data/facilities";
import {
  Wifi,
  Wind,
  Clock,
  Sparkles,
  ShieldCheck,
  Utensils,
  Luggage,
  Tv,
  HeartPulse,
  Users,
  Languages,
  Globe,
  Droplet,
  Droplets,
  BedDouble,
  Bell,
  Video,
  Flame,
  Snowflake,
  DoorClosed,
  Shirt,
  Laptop,
  Fan,
  Layers,
  Bath,
  Armchair,
  ShowerHead,
  Phone,
  Trash2,
  UserCheck,
  CheckCircle2,
  LucideIcon,
  ChevronDown,
  Building2,
  Bed,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wifi,
  Wind,
  Clock,
  Sparkles,
  ShieldCheck,
  Utensils,
  Luggage,
  Tv,
  HeartPulse,
  Users,
  Languages,
  Globe,
  Droplet,
  Droplets,
  BedDouble,
  Bell,
  Video,
  Flame,
  Snowflake,
  DoorClosed,
  Shirt,
  Laptop,
  Fan,
  Layers,
  Bath,
  Armchair,
  ShowerHead,
  Phone,
  Trash2,
  UserCheck,
  Building2,
  Bed,
};

export function Facilities() {
  const [showAllCategories, setShowAllCategories] = useState(false);

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-[#f6faf6]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="label-caps">AMENITIES & FACILITIES</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b]">
            Thoughtfully Equipped for Every Stay
          </h2>
          <p className="text-[#6e7a74] text-sm sm:text-base">
            From 24-hour reception and sanitized rooms to high-speed Wi-Fi and in-room comforts.
          </p>
        </div>

        {/* Featured Facilities 6-Card Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facilities.map((f) => {
            const IconComponent = iconMap[f.iconName] || Sparkles;

            return (
              <div
                key={f.id}
                className="bg-white p-5 rounded-lg border border-[#bdc9c2]/60 hover:border-[#006951]/60 transition-all duration-200 group shadow-2xs hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f0f5f1] group-hover:bg-[#c5ebdb] flex items-center justify-center text-[#006951] mb-3.5 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[13px] sm:text-sm text-[#181d1b] mb-1 group-hover:text-[#006951] transition-colors">
                  {f.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#6e7a74] leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Toggleable Full Amenities Breakdown */}
        <div className="bg-white rounded-xl border border-[#bdc9c2]/70 shadow-xs overflow-hidden">
          <button
            type="button"
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="w-full px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3 bg-[#f0f5f1]/60 hover:bg-[#f0f5f1] transition-colors text-left cursor-pointer border-b border-[#dfe4e0]"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#006951] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <h3 className="font-display text-sm sm:text-base font-semibold text-[#181d1b] truncate">
                Complete Amenities & Facilities Directory
              </h3>
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold text-[#006951] shrink-0">
              <span>{showAllCategories ? "Hide" : "View All"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${showAllCategories ? "rotate-180" : ""}`} />
            </div>
          </button>

          {/* Categorized Directory Content (Animated) */}
          <div
            className={`grid transition-all duration-400 ease-in-out overflow-hidden ${
              showAllCategories
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="p-6 sm:p-8 space-y-10">
            {/* Section 1: Property & Hotel Facilities */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-[#dfe4e0]">
                <Building2 className="w-4 h-4 text-[#006951]" />
                <h4 className="font-semibold text-xs uppercase tracking-wider text-[#006951]">
                  Property & Hotel Services
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {hotelPropertyCategories.map((category) => (
                  <div key={category.title} className="p-4 bg-[#f6faf6] rounded-lg border border-[#dfe4e0] space-y-3">
                    <h5 className="font-semibold text-xs text-[#181d1b] pb-1.5 border-b border-[#dfe4e0]/60">
                      {category.title}
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3e4944]">
                      {category.items.map((item) => {
                        const ItemIcon = iconMap[item.iconName] || CheckCircle2;
                        return (
                          <li
                            key={item.name}
                            className="flex items-center gap-2 py-0.5 group"
                          >
                            <div className="w-5 h-5 rounded bg-white border border-[#dfe4e0] flex items-center justify-center text-[#006951] shrink-0">
                              {item.flag ? (
                                <span className="text-xs leading-none">{item.flag}</span>
                              ) : (
                                <ItemIcon className="w-3 h-3" />
                              )}
                            </div>
                            <span
                              className={`${
                                item.isHighlight ? "font-medium text-[#181d1b]" : "text-[#3e4944]"
                              }`}
                            >
                              {item.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: In-Room Amenities Included in Every Room */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-[#dfe4e0]">
                <Bed className="w-4 h-4 text-[#006951]" />
                <h4 className="font-semibold text-xs uppercase tracking-wider text-[#006951]">
                  Included in Every Deluxe Room
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {inRoomAmenityCategories.map((category) => (
                  <div key={category.title} className="p-4 bg-[#f6faf6] rounded-lg border border-[#dfe4e0] space-y-3">
                    <h5 className="font-semibold text-xs text-[#181d1b] pb-1.5 border-b border-[#dfe4e0]/60">
                      {category.title}
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3e4944]">
                      {category.items.map((item) => {
                        const ItemIcon = iconMap[item.iconName] || CheckCircle2;
                        return (
                          <li
                            key={item.name}
                            className="flex items-center gap-2 py-0.5 group"
                          >
                            <div className="w-5 h-5 rounded bg-white border border-[#dfe4e0] flex items-center justify-center text-[#006951] shrink-0">
                              <ItemIcon className="w-3 h-3" />
                            </div>
                            <span
                              className={`${
                                item.isHighlight ? "font-medium text-[#181d1b]" : "text-[#3e4944]"
                              }`}
                            >
                              {item.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
