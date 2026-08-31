import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { hotel } from "@/data/hotel";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Hotel Namastay",
  description: "Privacy policy and data handling guidelines for Hotel Namastay.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f6faf6] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6e7a74] mb-8">
          <Link href="/" className="hover:text-[#006951]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#181d1b] font-medium">Privacy Policy</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-xl border border-[#bdc9c2] shadow-sm space-y-8">
          <div className="border-b border-[#ebefeb] pb-6 space-y-2">
            <span className="label-caps">LEGAL & PRIVACY</span>
            <h1 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#6e7a74]">
              Last updated: August 2026 · {hotel.name}
            </p>
          </div>

          <div className="prose prose-sm sm:prose-base text-[#3e4944] space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">1. Introduction</h2>
              <p>
                At {hotel.name}, we value your trust and are committed to safeguarding the privacy and confidentiality of our guests and website visitors. This policy outlines what information we collect, how we use it, and how your personal data is protected when you submit booking enquiries or contact us.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">2. Information We Collect</h2>
              <p>
                When you use our website to submit a booking enquiry or send a message, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Contact details such as your Full Name, Phone Number, and Email Address.</li>
                <li>Stay details including desired check-in/out dates, number of guests, and room preferences.</li>
                <li>Special requests, arrival notes, or communication history.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">3. How We Use Your Information</h2>
              <p>
                We use your details strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Process, verify, and respond to your booking enquiries.</li>
                <li>Contact you via phone, WhatsApp, or email regarding room availability and reservations.</li>
                <li>Comply with local statutory hotel guest registration requirements upon check-in.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">4. Data Sharing & Security</h2>
              <p>
                We do not sell, trade, or rent your personal information to any third parties or marketing brokers. All enquiry data is processed securely through encrypted communication channels.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl text-[#181d1b] font-medium">5. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request the deletion of your enquiry data, please contact us at{" "}
                <a href={`mailto:${hotel.email}`} className="text-[#006951] font-medium hover:underline">
                  {hotel.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
