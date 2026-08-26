import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { hotel } from "@/data/hotel";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Hotel O Namaste",
  description: "Terms and conditions of stay and website usage for Hotel O Namaste.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#f6faf6] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6e7a74] mb-8">
          <Link href="/" className="hover:text-[#006951]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#181d1b] font-medium">Terms and Conditions</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-xl border border-[#bdc9c2] shadow-sm space-y-8">
          <div className="border-b border-[#ebefeb] pb-6 space-y-2">
            <span className="label-caps">LEGAL & POLICIES</span>
            <h1 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
              Terms and Conditions
            </h1>
            <p className="text-xs text-[#6e7a74]">
              Last updated: August 2026 · {hotel.name}
            </p>
          </div>

          <div className="prose prose-sm sm:prose-base text-[#3e4944] space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">1. Booking Enquiry & Reservation Confirmation</h2>
              <p>
                Submission of a booking enquiry through this website constitutes a request for reservation and does not guarantee an immediate booking. A booking is considered confirmed only after our reservations desk connects with you, verifies room availability, and issues a formal confirmation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">2. Check-In & Guest Age Requirements</h2>
              <p>
                Standard Check-In time is from {hotel.checkInTime} onwards, and standard Check-Out is by {hotel.checkOutTime}. Early check-in or late check-out is subject to room availability upon arrival.
              </p>
              <p>
                The primary guest making the reservation must be at least 18 years of age. All staying guests are required to present valid government photo identification (Aadhaar, Passport, Driving License, or Voter ID) at check-in. Local IDs and unmarried couples are allowed.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">3. House Rules & Safety Policies</h2>
              <p>
                To preserve a peaceful and safe environment for all guests:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Private parties, loud gatherings, and unauthorized exterior events are strictly prohibited.</li>
                <li>Guests are requested not to invite outside unregistered visitors into guest rooms during their stay.</li>
                <li>Pets are not allowed on the property premises.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">4. Taxes & Government Regulations</h2>
              <p>
                Applicable Goods & Services Taxes (GST) or statutory revisions as mandated by government authorities will be billed during checkout in accordance with Indian hotel regulations.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
