import React from "react";
import { Sparkles, Clock, MapPin } from "lucide-react";

export function WhyStay() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Spotless Hygiene & Comfort",
      description:
        "Every room undergoes thorough sanitization with fresh linens, sanitized private bathrooms, hot water geysers, and powerful AC for absolute rest.",
    },
    {
      icon: Clock,
      title: "24/7 Front Desk & Check-In",
      description:
        "Round-the-clock reception, flexible express check-in, 24-hour security with CCTV surveillance, and prompt WhatsApp room assistance whenever you need it.",
    },
    {
      icon: MapPin,
      title: "Prime Location & Connectivity",
      description:
        "Strategically located on the Alwar-Bhiwadi Road with on-site parking, high-speed Wi-Fi for business calls, and seamless food delivery coordination.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#f0f5f1] border-y border-[#bdc9c2]/40">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="label-caps">OUR COMMITMENT</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b]">
            Why Stay With Us
          </h2>
          <p className="text-[#6e7a74] text-base sm:text-lg">
            Practical hospitality, pristine cleanliness, and complete peace of mind in Bhiwadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-[#bdc9c2] shadow-xs flex flex-col justify-between hover:border-[#006951]/60 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#f0f5f1] flex items-center justify-center text-[#006951] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#181d1b] font-medium mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#3e4944] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
