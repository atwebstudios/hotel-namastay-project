import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookingCTA } from "@/components/home/BookingCTA";
import { ChevronRight, Sparkles, Clock, MapPin, ArrowRight } from "lucide-react";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export const metadata: Metadata = {
  title: "About Us | Hotel O Namaste",
  description:
    "Learn about Hotel O Namaste, our independent boutique hospitality philosophy, comfortable rooms, and dedicated personal service in Bhiwadi, Rajasthan.",
};

export default function AboutPage() {
  const approaches = [
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
    <div className="bg-[#f6faf6] min-h-screen">
      {/* Hero Section */}
      <section className="pt-10 pb-16 sm:pb-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6e7a74] mb-8">
            <Link href="/" className="hover:text-[#006951] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#181d1b] font-medium">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ParallaxImage
              src="/images/hotel/exterior.jpg"
              alt="Hotel O Namaste Exterior View"
              className="lg:col-span-6 h-[380px] sm:h-[500px] rounded-xl shadow-md border border-[#bdc9c2]"
            />

            {/* Right: Headline & Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="label-caps">ABOUT HOTEL O NAMASTE</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#181d1b] leading-[1.15]">
                Hospitality With a Personal Touch.
              </h1>
              <p className="text-base sm:text-lg text-[#3e4944] leading-relaxed">
                Experience a stay where every detail is curated for your ultimate comfort and tranquility. Founded on the idea that genuine hospitality stems from warmth, attentiveness, and quiet luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#bdc9c2]/40">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="label-caps">OUR STORY</span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
                An Independent Spirit
              </h2>
              <p className="text-[#3e4944] text-base leading-relaxed">
                Born from a passion for genuine hospitality, Hotel O Namaste is an independently owned hotel in Bhiwadi, Rajasthan. We moved away from standardized hotel experiences to create something more intimate — a place that feels like a meticulously curated home rather than a temporary lodging.
              </p>
              <p className="text-[#3e4944] text-base leading-relaxed">
                Our personal focus means we understand the nuances of a truly relaxing stay. From the selection of linens to the ambient lighting, every decision is guided by a desire to provide a serene escape from the everyday.
              </p>
            </div>

            <ParallaxImage
              src="/images/hotel/reception.jpg"
              alt="Hotel O Namaste Reception"
              className="lg:col-span-6 h-[360px] sm:h-[440px] rounded-xl shadow-sm border border-[#bdc9c2]"
            />
          </div>
        </div>
      </section>

      {/* The Vision / Quote */}
      <section className="py-20 sm:py-28 bg-[#fdfdfc] border-y border-[#bdc9c2]/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f6faf6] border border-[#bdc9c2]/50 mb-8 shadow-sm">
            <span className="font-display text-4xl text-accent-gold leading-none mt-4">&ldquo;</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#181d1b] leading-relaxed italic mb-10">
            Our vision was never to just build rooms, but to craft a quiet sanctuary where every traveler feels genuinely cared for. True hospitality is an art of subtleties.
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-accent-gold/50" />
            <span className="font-sans font-semibold text-[#006951] uppercase tracking-[0.2em] text-xs">The Founders</span>
            <div className="w-12 h-px bg-accent-gold/50" />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 sm:py-28 bg-[#f6faf6]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="label-caps">OUR APPROACH</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#181d1b]">
              Curated For You
            </h2>
            <p className="text-[#6e7a74] text-base">
              Three pillars that guide our daily commitment to every guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((app, idx) => {
              const Icon = app.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-[#bdc9c2] shadow-xs"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#f0f5f1] flex items-center justify-center text-[#006951] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#181d1b] font-medium mb-3">
                    {app.title}
                  </h3>
                  <p className="text-sm text-[#3e4944] leading-relaxed">
                    {app.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Property & The Room Section */}
      <section className="py-20 sm:py-24 bg-white border-y border-[#bdc9c2]/40">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-16">
          {/* Property Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="label-caps">THE PROPERTY</span>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
                A Secluded Haven
              </h2>
              <p className="text-[#3e4944] text-base leading-relaxed">
                Conveniently situated on the Alwar-Bhiwadi Road in Bhiwadi, our architecture blends comfortable clean lines with ambient warmth. Designed as a sequence of calming spaces, transitioning seamlessly from welcoming reception to restful private quarters.
              </p>
            </div>

            <ParallaxImage
              src="/images/room/room-02.webp"
              alt="Hotel O Namaste Room Ambience"
              className="lg:col-span-7 h-[320px] sm:h-[400px] rounded-xl shadow-sm border border-[#bdc9c2]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

          {/* Room Callout Card */}
          <div className="p-8 sm:p-12 bg-[#f0f5f1] rounded-xl border border-[#bdc9c2] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="label-caps text-[10px]">THE ROOM</span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#181d1b]">
                Your Private Retreat
              </h3>
              <p className="text-sm sm:text-base text-[#3e4944] leading-relaxed">
                We offer an exclusive signature Deluxe Room experience ensuring complete privacy and pristine rest. Designed with a calming palette and bespoke furnishings, it is your sanctuary to unwind.
              </p>
              <div className="pt-2">
                <Link
                  href="/room"
                  className="inline-flex items-center gap-2 border border-[#006951] text-[#006951] hover:bg-[#006951] hover:text-white px-5 py-2.5 rounded text-sm font-medium transition-colors"
                >
                  <span>Explore Our Room</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <ParallaxImage
              src="/images/room/room-01.webp"
              alt="Deluxe Room Interior"
              className="lg:col-span-6 h-[240px] sm:h-[300px] rounded-lg border border-[#bdc9c2]"
            />
          </div>
        </div>
      </section>


      {/* Booking CTA */}
      <BookingCTA />
    </div>
  );
}
