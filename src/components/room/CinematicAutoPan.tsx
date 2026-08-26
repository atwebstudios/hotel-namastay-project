"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CinematicAutoPan({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="w-full h-[50vh] sm:h-[65vh] relative overflow-hidden bg-[#181d1b]">
      <motion.div
        className="absolute top-0 left-0 h-full w-[150vw]"
        animate={{ x: ["0vw", "-50vw", "0vw"] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 40,
          ease: "linear",
        }}
      >
        <Image
          src={imageSrc}
          alt="Cinematic Room Panorama"
          fill
          className="object-cover"
          sizes="150vw"
          priority
        />
      </motion.div>
      {/* Vignette / Overlay */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-8 sm:p-12 lg:px-16">
        <span className="text-white/80 uppercase tracking-[0.2em] text-xs font-semibold mb-2">Immersive View</span>
        <h3 className="font-display text-white text-2xl sm:text-4xl font-medium drop-shadow-md">Deluxe Room Panorama</h3>
      </div>
    </div>
  );
}
