import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Bed, HeartHandshake, Coffee } from "lucide-react";

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

  return (
    <section className="py-20 sm:py-28 bg-[#f6faf6]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-xl overflow-hidden border border-[#bdc9c2]/60 shadow-md">
              <Image
                src="/images/hotel/exterior.jpg"
                alt="Hotel O Namaste Exterior View"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <span className="label-caps block">OUR PHILOSOPHY</span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b] leading-tight">
              Simple Hospitality, <br />
              Thoughtfully Done.
            </h2>

            <p className="text-[#3e4944] text-base sm:text-lg leading-relaxed">
              Hotel O Namaste was created for travelers who appreciate the essentials done right: a tranquil atmosphere, spotless spaces, crisp bedding, and attentive service that feels like home.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-lg border border-[#dfe4e0] shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-full bg-[#f0f5f1] flex items-center justify-center text-[#006951]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-medium text-sm text-[#181d1b]">{h.title}</h4>
                    </div>
                    <p className="text-xs text-[#6e7a74] leading-relaxed">{h.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#006951] hover:text-[#00513e] group transition-colors"
              >
                <span>Learn more about Hotel O Namaste</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
