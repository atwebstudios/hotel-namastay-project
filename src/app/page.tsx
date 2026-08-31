import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { RoomPreview } from "@/components/home/RoomPreview";
import { Facilities } from "@/components/home/Facilities";
import { WhyStay } from "@/components/home/WhyStay";
import { Testimonials } from "@/components/home/Testimonials";
import { Location } from "@/components/home/Location";
import { FAQ } from "@/components/home/FAQ";
import { BookingCTA } from "@/components/home/BookingCTA";

export const metadata: Metadata = {
  title: "Hotel Namastay | Comfortable Stay & Direct Booking in Bhiwadi",
  description:
    "Discover Hotel Namastay — a serene stay with comfortable rooms, thoughtful facilities, pristine comfort, and personal hospitality in Bhiwadi, Rajasthan.",
  openGraph: {
    title: "Hotel Namastay | Stay Comfortably. Feel at Home.",
    description:
      "A comfortable stay, thoughtful facilities, and personal hospitality — all in one place in Bhiwadi, Rajasthan.",
    images: [
      {
        url: "/images/hotel/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Namastay Hotel",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Preview */}
      <AboutPreview />

      {/* 3. Room Preview Showcase */}
      <RoomPreview />

      {/* 4. Hotel Facilities Section */}
      <Facilities />

      {/* 5. Why Stay With Us */}
      <WhyStay />

      {/* 6. Guest Reviews */}
      <Testimonials />

      {/* 7. Location & Map */}
      <Location />

      {/* 8. FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      {/* 9. Booking CTA Banner */}
      <BookingCTA />
    </div>
  );
}
