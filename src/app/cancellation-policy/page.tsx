import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { hotel } from "@/data/hotel";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation Policy | Hotel O Namaste",
  description: "Cancellation, modification, and refund terms for reservations at Hotel O Namaste.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-[#f6faf6] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6e7a74] mb-8">
          <Link href="/" className="hover:text-[#006951]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#181d1b] font-medium">Cancellation Policy</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-xl border border-[#bdc9c2] shadow-sm space-y-8">
          <div className="border-b border-[#ebefeb] pb-6 space-y-2">
            <span className="label-caps">STAY POLICIES</span>
            <h1 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
              Cancellation & Refund Policy
            </h1>
            <p className="text-xs text-[#6e7a74]">
              Last updated: August 2026 · {hotel.name}
            </p>
          </div>

          <div className="prose prose-sm sm:prose-base text-[#3e4944] space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">1. Free Cancellation Window</h2>
              <p>
                Cancellations received at least 24 hours prior to the standard check-in time (12:00 PM on the date of arrival) are eligible for full cancellation without penalty.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">2. Late Cancellations & No-Shows</h2>
              <p>
                In the event of a cancellation made less than 24 hours prior to arrival, or in case of a guest no-show, the hotel reserves the right to charge equivalent to the first night&apos;s stay retention fee.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">3. Date Modifications</h2>
              <p>
                Stay date modifications are permitted subject to room availability for the requested new dates. Please contact our reservations desk via phone or WhatsApp as early as possible to adjust your dates.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">4. Group Bookings</h2>
              <p>
                When booking more than 5 rooms simultaneously, custom cancellation terms and advance deposit requirements will be specified by our reservations manager.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">5. How to Cancel or Modify</h2>
              <p>
                To cancel or modify your reservation, please reach out directly to our team with your enquiry reference ID at:
              </p>
              <p className="text-sm font-medium text-[#181d1b]">
                Phone / WhatsApp:{" "}
                <a href={`tel:${hotel.phone}`} className="text-[#006951] hover:underline">
                  {hotel.phoneDisplay}
                </a>{" "}
                · Email:{" "}
                <a href={`mailto:${hotel.email}`} className="text-[#006951] hover:underline">
                  {hotel.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
