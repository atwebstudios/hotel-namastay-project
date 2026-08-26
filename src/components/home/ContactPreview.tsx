import React from "react";
import Link from "next/link";
import { hotel, getWhatsAppBookingLink, getTelLink } from "@/data/hotel";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";

export function ContactPreview() {
  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      value: hotel.phoneDisplay,
      href: getTelLink(),
      external: false,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      href: getWhatsAppBookingLink(),
      external: true,
    },
    {
      icon: Mail,
      title: "Email",
      value: hotel.email,
      href: `mailto:${hotel.email}`,
      external: false,
    },
    {
      icon: MapPin,
      title: "Address",
      value: `${hotel.address}, ${hotel.city}`,
      href: "/contact",
      external: false,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="label-caps">DIRECT COMMUNICATION</span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
            We&apos;re Here to Help
          </h2>
          <p className="text-[#6e7a74] text-base">
            Reach out to our reservations team directly for custom inquiries or instant assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <a
                key={idx}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="bg-[#f6faf6] p-6 rounded-lg border border-[#bdc9c2]/60 hover:border-[#006951] hover:bg-white transition-all group shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#f0f5f1] group-hover:bg-[#c5ebdb] flex items-center justify-center text-[#006951] mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="label-caps block text-[10px] text-[#6e7a74] mb-1">
                    {card.title}
                  </span>
                  <p className="font-medium text-sm text-[#181d1b] group-hover:text-[#006951] transition-colors truncate">
                    {card.value}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#ebefeb] flex items-center gap-1 text-xs text-[#006951] font-medium">
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#006951] hover:text-[#00513e] group"
          >
            <span>Visit our dedicated Contact page for message form</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
