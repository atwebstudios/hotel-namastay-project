"use client";

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

import { motion, Variants } from "framer-motion";

export function RoomAmenities() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#bdc9c2]/40 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-champagne/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="label-caps text-accent-gold">THOUGHTFUL DETAILS</span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
            Available in All Rooms
          </h2>
          <p className="text-[#6e7a74] text-sm sm:text-base">
            Every convenience thoughtfully arranged in your Deluxe Room to ensure effortless relaxation.
          </p>
        </motion.div>

        {/* Categorized Amenities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {room.amenities.map((cat, idx) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#bdc9c2]/40 shadow-soft hover:shadow-[0_15px_35px_rgba(212,175,55,0.1)] hover:border-accent-gold/40 flex flex-col transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-base sm:text-lg text-[#181d1b] pb-3 mb-4 border-b border-accent-gold/20">
                {cat.category}
              </h3>
              <motion.ul 
                variants={listContainerVariants} 
                className="space-y-3 flex-1"
              >
                {cat.items.map((item, itemIdx) => {
                  const Icon = amenityIconMap[item] || CheckCircle2;
                  return (
                    <motion.li 
                      variants={listItemVariants}
                      key={itemIdx} 
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3e4944] group"
                    >
                      <div className="w-6 h-6 rounded bg-[#f6faf6] border border-[#bdc9c2]/30 group-hover:bg-accent-champagne/40 group-hover:border-accent-gold/30 flex items-center justify-center text-[#006951] shrink-0 transition-colors duration-300">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="group-hover:text-[#181d1b] transition-colors">{item}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
