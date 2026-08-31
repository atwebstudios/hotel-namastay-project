"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Bed, HeartHandshake, Coffee } from "lucide-react";

import { motion, Variants } from "framer-motion";

export function AboutPreview() {
  const highlights = [
    {
      icon: Bed,
      title: "Comfort First",
      desc: "Thoughtfully furnished rooms with plush linens and peaceful ambiance.",
    },
    {
      icon: Sparkles,
      title: "Impeccable Hygiene",
      desc: "Daily housekeeping, sanitized spaces, and sparkling bathrooms.",
    },
    {
      icon: HeartHandshake,
      title: "Personal Hospitality",
      desc: "Attentive front desk team ready to assist with warmth and care.",
    },
    {
      icon: Coffee,
      title: "Convenient Living",
      desc: "24/7 power backup, high-speed Wi-Fi, and food delivery coordination.",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 sm:py-28 bg-mesh-premium relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,105,81,0.1)] border border-white/60">
              <Image
                src="/images/hotel/exterior.png"
                alt="Hotel Namastay Exterior View"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Gold Accent Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Right Column: Copy & Value Proposition */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-6"
          >
            <motion.span variants={itemVariants} className="label-caps block text-[#006951]">OUR PHILOSOPHY</motion.span>
            
            <motion.h2 variants={itemVariants} className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b] leading-tight">
              Simple Hospitality, <br />
              Thoughtfully Done.
            </motion.h2>

            <motion.p variants={itemVariants} className="text-[#3e4944] text-base sm:text-lg leading-relaxed">
              Hotel Namastay was created for travelers who appreciate the essentials done right: a tranquil atmosphere, spotless spaces, crisp bedding, and attentive service that feels like home.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-white shadow-soft transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-accent-champagne/40 flex items-center justify-center text-[#006951]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-medium text-sm text-[#181d1b]">{h.title}</h4>
                    </div>
                    <p className="text-xs text-[#6e7a74] leading-relaxed">{h.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Link */}
            <motion.div variants={itemVariants} className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#006951] hover:text-accent-gold group transition-colors"
              >
                <span>Learn more about Hotel Namastay</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
