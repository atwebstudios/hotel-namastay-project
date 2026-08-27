"use client";

import React from "react";
import Link from "next/link";
import { room } from "@/data/room";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function RoomHero() {
  return (
    <div className="pt-12 pb-6 bg-mesh-premium relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#eaf3ed] to-transparent pointer-events-none opacity-50" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        
        <div className="space-y-4 max-w-3xl">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            aria-label="Breadcrumb" 
            className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#6e7a74]"
          >
            <Link href="/" className="hover:text-[#006951] hover:underline transition-all">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#181d1b] font-medium">{room.name}</span>
          </motion.nav>

          {/* Title & Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-2"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium text-[#181d1b] tracking-tight">
              {room.name}
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-[#3e4944] font-light max-w-2xl mx-auto md:mx-0">
              {room.subtitle}
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
