"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useBookingModal } from "@/context/BookingModalContext";

export function Hero() {
  const { openBooking } = useBookingModal();

  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#181d1b]">
      {/* Cinematic Nature & Serenity Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hotel/hero-bg.jpg"
          alt="Hotel O Namaste Boutique Stay Ambiance"
          fill
          priority
          className="object-cover object-center scale-105 animate-in fade-in zoom-in-105 duration-1000"
          sizes="100vw"
        />
        {/* Dark Vignette Overlay for High Legibility & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/55" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white flex flex-col items-center">
        {/* Eyebrow */}
        <span className="inline-block label-caps text-xs sm:text-sm text-[#c5ebdb] tracking-[0.2em] mb-4 drop-shadow-sm font-semibold">
          WELCOME TO HOTEL O NAMASTE
        </span>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl leading-[1.15] mb-6 drop-shadow-md">
          Stay Comfortably. <br className="hidden sm:inline" />
          Feel at Home.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-xl text-white/90 max-w-2xl font-normal leading-relaxed mb-10 drop-shadow-sm">
          A comfortable stay, thoughtful facilities, and personal hospitality — all in one place in Bhiwadi.
        </p>

        {/* Action Buttons */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto">
          <Link
            href="/room"
            className="w-full sm:w-auto bg-[#006951] hover:bg-[#00513e] text-white px-8 py-3.5 rounded font-medium text-base transition-all duration-200 shadow-md hover:shadow-lg text-center"
          >
            Explore Our Room
          </Link>

          <button
            type="button"
            onClick={() => openBooking("Deluxe Room")}
            className="w-full sm:w-auto bg-black/40 hover:bg-black/60 text-white border border-white/40 hover:border-white px-8 py-3.5 rounded font-medium text-base transition-all duration-200 backdrop-blur-xs text-center cursor-pointer shadow-md hover:shadow-lg"
          >
            Enquire to Book
          </button>
        </div>
      </div>
    </section>
  );
}
