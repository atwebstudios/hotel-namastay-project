"use client";

import React, { useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

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
    <section className="py-20 sm:py-28 bg-[#f6faf6] overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="label-caps">GUEST EXPERIENCES</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-[#c5ebdb] text-[#00513e] px-2.5 py-0.5 rounded-full">
                <Star className="w-3 h-3 fill-[#00513e]" />
                5.0 Rating ({testimonials.length} Verified Reviews)
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b]">
              Words From Our Visitors
            </h2>
            <p className="text-[#6e7a74] text-sm sm:text-base">
              Discover why travelers choose Hotel O Namaste for peace, pristine cleanliness, and personalized service.
            </p>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-2.5 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll reviews left"
              className="w-10 h-10 rounded-full border border-[#bdc9c2] bg-white hover:bg-[#ebefeb] hover:border-[#006951] text-[#181d1b] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll reviews right"
              className="w-10 h-10 rounded-full border border-[#bdc9c2] bg-white hover:bg-[#ebefeb] hover:border-[#006951] text-[#181d1b] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel with Left Alignment & Margin */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory touch-pan-x scroll-pl-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="snap-start min-w-[300px] sm:min-w-[360px] max-w-[360px] bg-white p-6 sm:p-7 rounded-xl border border-[#bdc9c2]/70 shadow-2xs hover:shadow-md hover:border-[#006951]/60 transition-all duration-200 flex flex-col justify-between relative shrink-0 select-none"
            >
              {/* Subtle Quote Symbol */}
              <Quote className="w-7 h-7 text-[#006951]/15 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Rating Stars + Stay Type Badge (Left Aligned with Right Clearance) */}
                <div className="flex flex-wrap items-center gap-2 mb-3.5 pr-8">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase bg-[#f0f5f1] text-[#006951] px-2 py-0.5 rounded border border-[#dfe4e0]">
                    {t.stayType}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#3e4944] italic leading-relaxed mb-6 line-clamp-4">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3.5 border-t border-[#ebefeb] flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-[#181d1b]">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006951]" />
                  </div>
                  <span className="text-[11px] text-[#6e7a74]">{t.location}</span>
                </div>
                <span className="text-[10px] text-[#6e7a74]">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Helper / Instruction Hint */}
        <div className="flex items-center justify-between text-xs text-[#6e7a74] pt-2">
          <span>← Drag or click arrows to browse all {testimonials.length} reviews →</span>
          <span className="hidden sm:inline">Verified guest impressions</span>
        </div>
      </div>
    </section>
  );
}
