import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { hotel, getWhatsAppBookingLink, getTelLink, getGoogleMapsLink } from "@/data/hotel";
import { ContactForm } from "@/components/contact/ContactForm";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Phone, MessageCircle, Mail, MapPin, ChevronRight, ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Hotel O Namaste",
  description:
    "Get in touch with Hotel O Namaste in Bhiwadi, Rajasthan. Reach our front desk via phone, WhatsApp, email, or message form.",
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      title: "CALL US",
      value: hotel.phoneDisplay,
      href: getTelLink(),
      external: false,
    },
    {
      icon: MessageCircle,
      title: "WHATSAPP",
      value: hotel.whatsappDisplay,
      href: getWhatsAppBookingLink(),
      external: true,
    },
    {
      icon: Mail,
      title: "EMAIL US",
      value: hotel.email,
      href: `mailto:${hotel.email}`,
      external: false,
    },
    {
      icon: MapPin,
      title: "LOCATION",
      value: "Alwar - Bhiwadi Rd, Bhiwadi",
      href: getGoogleMapsLink(),
      external: true,
    },
  ];

  return (
    <div className="bg-[#f6faf6] min-h-screen">
      {/* Header / Intro */}
      <section className="pt-10 pb-8">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6e7a74] mb-6">
            <Link href="/" className="hover:text-[#006951] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#181d1b] font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl space-y-2.5">
            <span className="label-caps">DIRECT COMMUNICATION</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b]">
              Get in Touch
            </h1>
            <p className="text-sm sm:text-base text-[#3e4944] leading-relaxed">
              We are here to assist you with room enquiries, reservations, or local directions. Reach out to our front desk team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section: Contact Form + Uncluttered Map */}
      <section className="pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>

            {/* Right: Redesigned Map Card */}
            <div id="map" className="lg:col-span-6 lg:sticky lg:top-28 lg:mt-6">
              <div className="bg-white rounded-2xl border border-[#bdc9c2] shadow-md overflow-hidden">
                {/* Map Iframe with Hotel Name Overlay */}
                <div className="relative w-full h-[340px] sm:h-[400px] bg-[#ebefeb] overflow-hidden">
                  <iframe
                    title="Hotel O Namaste Location Map"
                    src={hotel.mapEmbedUrl}
                    style={{ 
                      border: 0,
                      position: 'absolute',
                      top: '-165px',
                      left: 0,
                      width: '100%',
                      height: 'calc(100% + 330px)'
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Top-Left Clickable Hotel Name Badge */}
                  <a
                    href={getGoogleMapsLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-lg px-4 py-2.5 rounded-xl border border-[#dfe4e0] shadow-lg hover:shadow-xl hover:bg-white transition-all group flex items-center gap-3 z-10 cursor-pointer"
                    title="Open Hotel O Namaste in Google Maps"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#006951] flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-display font-semibold text-sm text-[#181d1b] group-hover:text-[#006951] transition-colors flex items-center gap-1.5">
                        Hotel O Namaste
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#6e7a74] group-hover:text-[#006951] transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                      </div>
                      <div className="text-[11px] text-[#6e7a74] mt-0.5">Tatarpur, Bhiwadi · Rajasthan</div>
                    </div>
                  </a>
                </div>

                {/* Bottom Bar: Address + Get Directions */}
                <div className="px-5 py-3.5 bg-[#f6faf6] border-t border-[#dfe4e0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5 min-w-0">
                    <MapPin className="w-4 h-4 text-[#006951] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#3e4944] leading-relaxed line-clamp-2">
                      {hotel.address}
                    </p>
                  </div>
                  <a
                    href={getGoogleMapsLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#006951] hover:bg-[#00513e] text-white font-medium text-xs px-4 py-2 rounded-lg transition-colors shrink-0 shadow-sm"
                  >
                    Get Directions
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Compact 4 Contact Cards (Positioned Below Form & Map) */}
          <div>
            <div className="text-xs font-semibold text-[#6e7a74] uppercase tracking-wider mb-3.5">
              Direct Contact Channels
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <a
                    key={idx}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="bg-white p-4 rounded-lg border border-[#bdc9c2]/70 hover:border-[#006951] transition-all shadow-2xs hover:shadow-xs group flex items-center gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-md bg-[#f0f5f1] group-hover:bg-[#c5ebdb] flex items-center justify-center text-[#006951] shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="label-caps block text-[9px] text-[#6e7a74] mb-0.5">
                        {card.title}
                      </span>
                      <p className="font-medium text-xs sm:text-sm text-[#181d1b] group-hover:text-[#006951] transition-colors truncate">
                        {card.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Summary section */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#bdc9c2]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="label-caps">QUICK ANSWERS</span>
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#181d1b]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="text-left divide-y divide-[#ebefeb] bg-[#f6faf6] p-6 sm:p-8 rounded-xl border border-[#bdc9c2]">
            <div className="py-3.5 first:pt-0">
              <h4 className="font-medium text-[15px] text-[#181d1b] mb-1">
                What are the check-in and check-out times?
              </h4>
              <p className="text-xs sm:text-sm text-[#3e4944] leading-relaxed">
                Check-in is from 12:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out is subject to availability.
              </p>
            </div>

            <div className="py-3.5">
              <h4 className="font-medium text-[15px] text-[#181d1b] mb-1">
                Is parking available on site?
              </h4>
              <p className="text-xs sm:text-sm text-[#3e4944] leading-relaxed">
                Yes, we offer complimentary on-site parking for all staying guests.
              </p>
            </div>

            <div className="py-3.5 last:pb-0">
              <h4 className="font-medium text-[15px] text-[#181d1b] mb-1">
                Are unmarried couples and local IDs allowed?
              </h4>
              <p className="text-xs sm:text-sm text-[#3e4944] leading-relaxed">
                Yes, couples with valid government-issued photo ID (Aadhaar, Passport, Driving License) are warmly welcomed. Primary guest must be 18+.
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/#faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#006951] hover:text-[#00513e] group"
            >
              <span>View full FAQ section on Home page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <BookingCTA />
    </div>
  );
}
