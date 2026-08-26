"use client";

import React, { useState } from "react";
import Image from "next/image";
import { room } from "@/data/room";
import { Lightbox } from "@/components/ui/Lightbox";
import { Images } from "lucide-react";

import { motion, Variants } from "framer-motion";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <section className="pb-12 bg-mesh-premium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,105,81,0.1)] border border-white/60"
          >
            {/* Main Featured Photo (Left 6 cols on desktop) */}
            <motion.div
              variants={itemVariants}
              onClick={() => openPhoto(0)}
              className="md:col-span-6 relative h-[300px] sm:h-[400px] md:h-[500px] cursor-pointer group overflow-hidden bg-[#ebefeb]"
            >
              <Image
                src={featured}
                alt={`${room.name} primary photo`}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* 2x2 Grid Photos (Right 6 cols on desktop) */}
            <div className="md:col-span-6 grid grid-cols-2 gap-3 sm:gap-4 h-[300px] sm:h-[400px] md:h-[500px]">
              {gridImages.map((img, idx) => {
                const actualIndex = idx + 1;
                return (
                  <motion.div
                    variants={itemVariants}
                    key={actualIndex}
                    onClick={() => openPhoto(actualIndex)}
                    className="relative w-full h-full cursor-pointer group overflow-hidden bg-[#ebefeb]"
                  >
                    <Image
                      src={img}
                      alt={`${room.name} photo ${actualIndex + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-accent-gold/10 transition-colors duration-300" />
                  </motion.div>
                );
              })}
            </div>

            {/* "View All Photos" Button in bottom corner */}
            <button
              type="button"
              onClick={() => openPhoto(0)}
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#181d1b] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg hover:shadow-[0_8px_25px_rgba(212,175,55,0.25)] backdrop-blur-md border border-white/80 hover:border-accent-gold transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
            >
              <Images className="w-4 h-4 text-accent-gold" />
              <span>View all {room.images.length} photos</span>
            </button>
          </motion.div>
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
