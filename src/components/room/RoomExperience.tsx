"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function RoomExperience() {
  return (
    <section className="py-20 sm:py-28 bg-[#f6faf6] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 space-y-24 sm:space-y-32">
        
        {/* The Sleep Experience (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/room/room-02.webp" // Assuming this is a bed close-up
              alt="Premium Bedding and Linens"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 max-w-lg"
          >
            <span className="label-caps block text-[#6e7a74]">REST & REJUVENATION</span>
            <h3 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b] leading-tight">
              The Perfect Night's Sleep
            </h3>
            <p className="text-[#3e4944] text-base sm:text-lg leading-relaxed font-light">
              Sink into our plush King-size bed, thoughtfully outfitted with premium high-thread-count crisp linens and bespoke supportive pillows. We’ve meticulously designed this sanctuary to block out the bustling world, featuring excellent soundproofing and gentle, ambient bedside lighting.
            </p>
            <p className="text-[#3e4944] text-base sm:text-lg leading-relaxed font-light">
              Wake up entirely refreshed, greeted by the soft natural light filtering through sheer curtains.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-accent-gold/20 mx-auto mb-6 transform -scale-x-100" />
          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[#181d1b] leading-snug mb-6">
            "The most comfortable and spotless room we've ever stayed in while visiting Bhiwadi. A true hidden gem."
          </blockquote>
          <cite className="text-sm uppercase tracking-[0.2em] font-semibold text-[#6e7a74] not-italic block">
            — Verified Guest Review
          </cite>
        </motion.div>

        {/* The Bathroom Oasis (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 max-w-lg lg:order-1 order-2"
          >
            <span className="label-caps block text-[#6e7a74]">PRIVATE SANCTUARY</span>
            <h3 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b] leading-tight">
              A Refreshing Oasis
            </h3>
            <p className="text-[#3e4944] text-base sm:text-lg leading-relaxed font-light">
              Begin or end your day in a sparkling clean en-suite bathroom that prioritizes your hygiene and comfort. Step into the hot and cold shower to wash away the travel fatigue.
            </p>
            <p className="text-[#3e4944] text-base sm:text-lg leading-relaxed font-light">
              We provide fresh, luxury plush towels and a selection of complimentary toiletries so you can travel light. Every detail is maintained with the highest standards of cleanliness.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-xl lg:order-2 order-1"
          >
            <Image
              src="/images/room/room-05.webp" // Assuming this is a bathroom or related detail photo
              alt="En-suite Bathroom Details"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
