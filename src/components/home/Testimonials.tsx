"use client";

import React, { useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

import { motion } from "framer-motion";

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-mesh-premium relative overflow-hidden">
      {/* Decorative Gold Accent */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header with Navigation Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="label-caps text-accent-gold">GUEST EXPERIENCES</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-accent-champagne text-[#00513e] px-2.5 py-0.5 rounded-full shadow-sm">
                <Star className="w-3 h-3 fill-[#00513e]" />
                5.0 Rating ({testimonials.length} Verified Reviews)
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b]">
              Words From Our Visitors
            </h2>
            <p className="text-[#6e7a74] text-sm sm:text-base">
              Discover why travelers choose Hotel Namastay for peace, pristine cleanliness, and personalized service.
            </p>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-2.5 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll reviews left"
              className="w-10 h-10 rounded-full border border-white/60 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-accent-gold text-[#181d1b] flex items-center justify-center transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll reviews right"
              className="w-10 h-10 rounded-full border border-white/60 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-accent-gold text-[#181d1b] flex items-center justify-center transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Scroll Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory touch-pan-x scroll-pl-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -5 }}
              className="snap-start min-w-[300px] sm:min-w-[360px] max-w-[360px] bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-xl border border-white/60 shadow-soft hover:shadow-[0_15px_35px_rgba(212,175,55,0.1)] hover:border-accent-gold/40 transition-all duration-300 flex flex-col justify-between relative shrink-0 select-none group"
            >
              {/* Subtle Quote Symbol */}
              <Quote className="w-7 h-7 text-accent-gold/20 absolute top-5 right-5 pointer-events-none transition-colors duration-300 group-hover:text-accent-gold/40" />

              <div>
                {/* Rating Stars + Stay Type Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-3.5 pr-8">
                  <div className="flex items-center gap-0.5 text-accent-gold">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase bg-accent-champagne/40 text-[#006951] px-2 py-0.5 rounded border border-white">
                    {t.stayType}
                  </span>
                </div>

                {/* Review Text - Removed italic per client request */}
                <p className="text-xs sm:text-sm text-[#3e4944] leading-relaxed mb-6 line-clamp-4 font-normal">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3.5 border-t border-accent-gold/10 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-[#181d1b]">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                  </div>
                  <span className="text-[11px] text-[#6e7a74]">{t.location}</span>
                </div>
                <span className="text-[10px] text-[#6e7a74]">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Helper */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-between text-xs text-[#6e7a74] pt-2"
        >
          <span>← Drag or click arrows to browse all {testimonials.length} reviews →</span>
          <span className="hidden sm:inline">Verified guest impressions</span>
        </motion.div>
      </div>
    </section>
  );
}
