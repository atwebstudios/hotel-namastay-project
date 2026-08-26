import React from "react";
import type { Metadata } from "next";
import { RoomHero } from "@/components/room/RoomHero";
import { RoomGallery } from "@/components/room/RoomGallery";
import { RoomDetails } from "@/components/room/RoomDetails";
import { RoomFloorplan } from "@/components/room/RoomFloorplan";
import { CinematicAutoPan } from "@/components/room/CinematicAutoPan";
import { RoomAmenities } from "@/components/room/RoomAmenities";
import { AmenitiesDock } from "@/components/room/AmenitiesDock";
import { BookingCTA } from "@/components/home/BookingCTA";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { room } from "@/data/room";

export const metadata: Metadata = {
  title: `${room.name} | Hotel O Namaste`,
  description: room.shortDescription,
  openGraph: {
    title: `${room.name} — Hotel O Namaste`,
    description: room.shortDescription,
    images: [{ url: room.images[0] }],
  },
};

export default function RoomPage() {
  return (
    <div className="bg-[#f6faf6] min-h-screen pb-16 md:pb-0">
      <RoomHero />
      <CinematicAutoPan imageSrc="/images/room/room-01.webp" />
      <RoomGallery />
      <RoomDetails />
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1400px] mx-auto py-12">
        <RoomFloorplan />
      </div>
      <RoomAmenities />
      <AmenitiesDock />
      <BookingCTA />
      <StickyMobileCTA />
    </div>
  );
}
