"use client";

import React, { useState } from "react";
import Image from "next/image";
import { room } from "@/data/room";
import { Lightbox } from "@/components/ui/Lightbox";
import { Images } from "lucide-react";

export function RoomGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPhoto = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % room.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  // We display the first 5 images in the signature layout matching Stitch mockup
  const featured = room.images[0];
  const gridImages = room.images.slice(1, 5);

  return (
    <>
      <section className="pb-12 bg-[#f6faf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Container matching room open.png */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 relative rounded-xl overflow-hidden shadow-xs">
            {/* Main Featured Photo (Left 6 cols on desktop) */}
            <div
              onClick={() => openPhoto(0)}
              className="md:col-span-6 relative h-[300px] sm:h-[400px] md:h-[500px] cursor-pointer group overflow-hidden bg-[#ebefeb]"
            >
              <Image
                src={featured}
                alt={`${room.name} primary photo`}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>

            {/* 2x2 Grid Photos (Right 6 cols on desktop) */}
            <div className="md:col-span-6 grid grid-cols-2 gap-3 sm:gap-4 h-[300px] sm:h-[400px] md:h-[500px]">
              {gridImages.map((img, idx) => {
                const actualIndex = idx + 1;
                return (
                  <div
                    key={actualIndex}
                    onClick={() => openPhoto(actualIndex)}
                    className="relative w-full h-full cursor-pointer group overflow-hidden bg-[#ebefeb]"
                  >
                    <Image
                      src={img}
                      alt={`${room.name} photo ${actualIndex + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                );
              })}
            </div>

            {/* "View All Photos" Button in bottom corner */}
            <button
              type="button"
              onClick={() => openPhoto(0)}
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#181d1b] px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 shadow-md backdrop-blur-xs border border-[#bdc9c2] transition-colors cursor-pointer"
            >
              <Images className="w-4 h-4 text-[#006951]" />
              <span>View all {room.images.length} photos</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        images={room.images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
