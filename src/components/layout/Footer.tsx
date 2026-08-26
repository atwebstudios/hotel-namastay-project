import React from "react";
import Link from "next/link";
import { hotel, getWhatsAppBookingLink, getTelLink } from "@/data/hotel";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f0f5f1] border-t border-[#bdc9c2]/60 pt-16 pb-28 sm:pb-14 mt-auto">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#bdc9c2]/40">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-semibold text-[#006951]">
                Hotel O Namaste
              </span>
            </Link>
            <p className="text-sm text-[#3e4944] leading-relaxed">
              A sanctuary of quiet luxury, pristine cleanliness, and personal hospitality. Designed for mindful travelers seeking genuine comfort.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="label-caps text-xs font-semibold text-[#181d1b]">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#3e4944] hover:text-[#006951] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/room" className="text-[#3e4944] hover:text-[#006951] transition-colors">
                  The Deluxe Room
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#3e4944] hover:text-[#006951] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#3e4944] hover:text-[#006951] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Policies */}
          <div className="space-y-3">
            <h4 className="label-caps text-xs font-semibold text-[#181d1b]">
              POLICIES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-[#3e4944] hover:text-[#006951] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-[#3e4944] hover:text-[#006951] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="text-[#3e4944] hover:text-[#006951] transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="label-caps text-xs font-semibold text-[#181d1b]">
              GET IN TOUCH
            </h4>
            <ul className="space-y-2.5 text-xs text-[#3e4944]">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#006951] shrink-0" />
                <a href={getTelLink()} className="hover:text-[#006951]">
                  {hotel.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#006951] shrink-0" />
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#006951]"
                >
                  WhatsApp Concierge
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#006951] shrink-0" />
                <a href={`mailto:${hotel.email}`} className="hover:text-[#006951]">
                  {hotel.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[#6e7a74]">
                <MapPin className="w-3.5 h-3.5 text-[#006951] shrink-0 mt-0.5" />
                <span>
                  {hotel.address}, {hotel.city}, {hotel.state}, {hotel.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e7a74]">
          <p>© {currentYear} {hotel.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Made with ❤️ from</span>
            <a
              href="https://www.atwebstudios.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#006951] hover:underline"
            >
              AtWebStudios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
