"use client";

import React from "react";
import { room } from "@/data/room";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function RoomAmenities() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#bdc9c2]/40 relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1400px] mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
            Amenities and facilities
          </h2>
        </motion.div>

        {/* Categorized Amenities Grid with CSS Columns for Masonry-like flow */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-x-12 gap-y-8 space-y-8">
          {room.amenities.map((cat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              key={idx}
              className="break-inside-avoid pb-8"
            >
              <h3 className="font-semibold text-[15px] sm:text-base text-[#181d1b] mb-4">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, itemIdx) => {
                  return (
                    <li 
                      key={itemIdx} 
                      className="flex items-start gap-3 text-sm text-[#3e4944]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#6e7a74] shrink-0 mt-0.5 font-light" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
