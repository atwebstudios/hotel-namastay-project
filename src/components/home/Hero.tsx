"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useBookingModal } from "@/context/BookingModalContext";

import { motion, Variants } from "framer-motion";

export function Hero() {
  const { openBooking } = useBookingModal();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#181d1b]">
      {/* Cinematic Nature & Serenity Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/hotel/hero-bg.jpg"
          alt="Hotel O Namaste Boutique Stay Ambiance"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark Vignette Overlay for High Legibility & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/55 backdrop-blur-[2px]" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white flex flex-col items-center"
      >
        {/* Eyebrow */}
        <motion.span 
          variants={itemVariants}
          className="inline-block label-caps text-xs sm:text-sm text-accent-champagne tracking-[0.2em] mb-4 drop-shadow-md font-semibold"
        >
          WELCOME TO HOTEL O NAMASTE
        </motion.span>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl leading-[1.15] mb-6 drop-shadow-xl"
        >
          Stay Comfortably. <br className="hidden sm:inline" />
          Feel at Home.
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-xl text-white/90 max-w-2xl font-normal leading-relaxed mb-10 drop-shadow-sm"
        >
          A comfortable stay, thoughtful facilities, and personal hospitality — all in one place in Bhiwadi.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="relative z-20 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto"
        >
          <Link
            href="/room"
            className="w-full sm:w-auto bg-gradient-to-r from-accent-gold to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-[#181d1b] px-8 py-3.5 rounded-md font-semibold text-base transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)] text-center transform hover:-translate-y-0.5"
          >
            Explore Our Room
          </Link>

          <button
            type="button"
            onClick={() => openBooking("Deluxe Room")}
            className="w-full sm:w-auto bg-black/40 hover:bg-black/60 text-white border border-white/40 hover:border-white px-8 py-3.5 rounded-md font-medium text-base transition-all duration-300 backdrop-blur-md text-center cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Enquire to Book
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
