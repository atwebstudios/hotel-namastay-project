"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faq";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

export function FAQ() {
  const categories = ["All", "Booking", "Check-in & Check-out", "Room & Facilities", "Rules & Policies"] as const;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 bg-[#f6faf6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="label-caps">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b]">
            Everything You Need to Know
          </h2>
          <p className="text-[#6e7a74] text-base sm:text-lg">
            Clear information regarding your stay, check-in policies, and room amenities.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === category
                  ? "bg-[#006951] text-white shadow-xs"
                  : "bg-white text-[#3e4944] border border-[#bdc9c2]/70 hover:bg-[#ebefeb]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-[#bdc9c2] shadow-sm">
          <Accordion>
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                title={faq.question}
                isOpenDefault={index === 0}
              >
                <p className="text-xs sm:text-sm leading-relaxed text-[#3e4944]">
                  {faq.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
