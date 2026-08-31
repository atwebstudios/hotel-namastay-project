import React from "react";
import type { Metadata } from "next";
import { RoomHero } from "@/components/room/RoomHero";
import { RoomGallery } from "@/components/room/RoomGallery";
import { RoomDetails } from "@/components/room/RoomDetails";
import { RoomExperience } from "@/components/room/RoomExperience";
import { RoomAmenities } from "@/components/room/RoomAmenities";
import { AmenitiesDock } from "@/components/room/AmenitiesDock";
import { BookingCTA } from "@/components/home/BookingCTA";
import { room } from "@/data/room";

export const metadata: Metadata = {
  title: `${room.name} | Hotel Namastay`,
  description: room.shortDescription,
  openGraph: {
    title: `${room.name} — Hotel Namastay`,
    description: room.shortDescription,
    images: [{ url: room.images[0] }],
  },
};

export default function RoomPage() {
  return (
    <div className="bg-[#f6faf6] min-h-screen pb-16 md:pb-0">
      <RoomHero />
      <RoomGallery />
      <RoomDetails />
      <RoomExperience />
      <RoomAmenities />
      <AmenitiesDock />
      <BookingCTA />
    </div>
  );
}
