"use client";

import React from "react";
import Link from "next/link";
import { useBookingModal } from "@/context/BookingModalContext";
import { getWhatsAppBookingLink } from "@/data/hotel";
import { Calendar, MessageCircle, ShieldCheck, Clock, Wifi, ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

export function BookingCTA() {
  const { openBooking } = useBookingModal();

  return (
    <section className="py-20 sm:py-28 bg-mesh-premium relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#00513e] via-[#006951] to-[#043e31] p-8 sm:p-12 lg:p-16 text-white shadow-[0_20px_50px_rgba(0,105,81,0.2)]"
        >
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-champagne/10 rounded-full blur-2xl pointer-events-none -ml-16 -mb-16" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            {/* Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-wider uppercase text-accent-champagne"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Best Rates & Instant Assistance</span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight"
            >
              Experience Quiet Comfort & Genuine Hospitality in Bhiwadi
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            >
              Whether visiting for business meetings, highway stopovers, or a relaxing weekend stay, our comfortable rooms and attentive staff are ready to welcome you.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <button
                type="button"
                onClick={() => openBooking("Deluxe Room")}
                className="w-full sm:w-auto bg-white hover:bg-accent-champagne text-[#00513e] font-semibold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Enquire to Book Now</span>
              </button>

              <a
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 hover:border-accent-gold/50 text-white font-medium px-6 py-3.5 rounded-lg text-sm sm:text-base transition-all flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:text-accent-gold transition-colors" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/room"
                className="w-full sm:w-auto text-white/90 hover:text-accent-gold font-medium px-4 py-3.5 text-sm transition-colors flex items-center justify-center gap-1 group"
              >
                <span>View Room</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/80"
            >
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-accent-champagne shrink-0" />
                <span>24/7 Front Desk & Check-in</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Wifi className="w-4 h-4 text-accent-champagne shrink-0" />
                <span>Free High-Speed Wi-Fi & AC</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-champagne shrink-0" />
                <span>Fast Enquiry Confirmation</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
