"use client";

import React from "react";
import { room } from "@/data/room";
import { hotel } from "@/data/hotel";
import { Users, Bed, Maximize2, Bath, Clock, ShieldCheck } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

export function RoomDetails() {
  return (
    <section className="py-12 sm:py-20 bg-[#f6faf6] relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1400px] mx-auto">
        
        {/* Horizontal Specifications Bar (At a Glance) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-[#bdc9c2]/60 shadow-sm p-6 sm:p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 divide-x-0 md:divide-x divide-[#ebefeb] text-center md:text-left">
            
            <div className="flex flex-col items-center md:items-start space-y-1">
              <div className="flex items-center gap-2 text-[#3e4944] mb-1">
                <Users className="w-4 h-4 text-[#006951]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Capacity</span>
              </div>
              <span className="font-medium text-[#181d1b] text-sm sm:text-base">
                Up to <AnimatedCounter value={room.capacity.maxGuests} /> Guests
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-1 md:pl-8">
              <div className="flex items-center gap-2 text-[#3e4944] mb-1">
                <Bed className="w-4 h-4 text-[#006951]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Bedding</span>
              </div>
              <span className="font-medium text-[#181d1b] text-sm sm:text-base">{room.bedType}</span>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-1 md:pl-8">
              <div className="flex items-center gap-2 text-[#3e4944] mb-1">
                <Maximize2 className="w-4 h-4 text-[#006951]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Size</span>
              </div>
              <span className="font-medium text-[#181d1b] text-sm sm:text-base">
                <AnimatedCounter value={300} suffix=" sq.ft" />
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-1 md:pl-8">
              <div className="flex items-center gap-2 text-[#3e4944] mb-1">
                <Bath className="w-4 h-4 text-[#006951]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Bathroom</span>
              </div>
              <span className="font-medium text-[#181d1b] text-sm sm:text-base">{room.bathType}</span>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start space-y-1 md:pl-8 pt-4 md:pt-0 border-t border-[#ebefeb] md:border-t-0">
              <div className="flex items-center gap-2 text-[#3e4944] mb-1">
                <Clock className="w-4 h-4 text-[#006951]" />
                <span className="text-xs uppercase tracking-wider font-semibold">Check-in/out</span>
              </div>
              <span className="font-medium text-[#181d1b] text-sm sm:text-base">{hotel.checkInTime} / {hotel.checkOutTime}</span>
            </div>

          </div>
        </motion.div>

        {/* Narrative & Highlights (Expanded Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="label-caps block mb-2 text-accent-gold">THE EXPERIENCE</span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b] leading-tight">
                Quiet Luxury <br className="hidden sm:block"/>& Unmatched Comfort
              </h2>
            </div>
            
            <p className="text-[#3e4944] text-base sm:text-lg leading-relaxed font-light">
              {room.longDescription}
            </p>

            <p className="text-[#3e4944] text-base sm:text-lg leading-relaxed font-light">
              Large steel-framed windows invite an abundance of natural light during the day, while warm, ambient lighting creates an intimate, relaxing atmosphere by night. Enjoy expansive comfort with bespoke wooden nightstands, a dedicated writing desk, and an en-suite bathroom that feels like your own private sanctuary.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-[0_15px_40px_rgba(0,105,81,0.05)] border border-[#bdc9c2]/30"
          >
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#181d1b] mb-6 pb-4 border-b border-accent-gold/20">
              Key Highlights
            </h3>
            <ul className="space-y-4">
              {room.keyHighlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-[#3e4944]">
                  <div className="mt-0.5 p-1 bg-accent-champagne/40 rounded-full text-[#006951]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="leading-snug">{hl}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
