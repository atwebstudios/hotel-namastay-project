"use client";

import React from "react";
import Link from "next/link";
import { room } from "@/data/room";
import { ChevronRight } from "lucide-react";

import { motion } from "framer-motion";

export function RoomHero() {
  return (
    <div className="pt-8 pb-6 bg-mesh-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb" 
          className="flex items-center gap-2 text-xs text-[#6e7a74] mb-4"
        >
          <Link href="/" className="hover:text-accent-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#181d1b] font-medium">{room.name}</span>
        </motion.nav>

        {/* Title & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium text-[#181d1b]">
            {room.name}
          </h1>
          <p className="text-sm sm:text-lg text-[#6e7a74] max-w-2xl">
            {room.subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
