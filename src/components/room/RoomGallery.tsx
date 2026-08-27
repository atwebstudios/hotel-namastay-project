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

  // We display the first 5 images in a bento-masonry layout
  const images = room.images.slice(0, 5);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <section className="pb-16 pt-8 bg-mesh-premium relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 h-[600px] sm:h-[700px] md:h-[600px] relative rounded-2xl overflow-hidden shadow-xl"
          >
            {/* 1. Large Image (Left, spanning 2 rows and 2 cols) */}
            <motion.div
              variants={itemVariants}
              onClick={() => openPhoto(0)}
              className="md:col-span-2 md:row-span-2 relative h-full cursor-pointer group overflow-hidden bg-[#ebefeb]"
            >
              <Image
                src={images[0]}
                alt={`${room.name} primary photo`}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>

            {/* 2. Top Middle (1 col, 1 row) */}
            <motion.div
              variants={itemVariants}
              onClick={() => openPhoto(1)}
              className="hidden md:block relative h-full cursor-pointer group overflow-hidden bg-[#ebefeb]"
            >
              <Image
                src={images[1]}
                alt={`${room.name} photo 2`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>

            {/* 3. Top Right (1 col, 1 row) */}
            <motion.div
              variants={itemVariants}
              onClick={() => openPhoto(2)}
              className="hidden md:block relative h-full cursor-pointer group overflow-hidden bg-[#ebefeb]"
            >
              <Image
                src={images[2]}
                alt={`${room.name} photo 3`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>

            {/* 4. Bottom Right Wide (Spanning 2 cols, 1 row) */}
            <motion.div
              variants={itemVariants}
              onClick={() => openPhoto(3)}
              className="hidden md:block md:col-span-2 relative h-full cursor-pointer group overflow-hidden bg-[#ebefeb]"
            >
              <Image
                src={images[3]}
                alt={`${room.name} photo 4`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>

            {/* "View All Photos" Button overlay on bottom right */}
            <button
              type="button"
              onClick={() => openPhoto(0)}
              className="absolute bottom-6 right-6 bg-white hover:bg-[#f6faf6] text-[#181d1b] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group z-10"
            >
              <Images className="w-4 h-4 text-[#006951] group-hover:text-accent-gold transition-colors" />
              <span>Show all {room.images.length} photos</span>
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
