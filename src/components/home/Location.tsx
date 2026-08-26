import React from "react";
import { hotel, getGoogleMapsLink } from "@/data/hotel";
import { MapPin, Navigation, Car, Utensils, ExternalLink, ArrowUpRight } from "lucide-react";

export function Location() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#bdc9c2]/40">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Location Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="label-caps block">LOCATION & ACCESSIBILITY</span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#181d1b]">
              Convenient Stay, <br />
              Connected to Bhiwadi.
            </h2>
            <p className="text-[#3e4944] text-base leading-relaxed">
              Hotel O Namaste is located directly on the Alwar - Bhiwadi Road
              opposite Krish Icon in Bhiwadi, Rajasthan, offering a peaceful
              stay with convenient access to industrial hubs and major highways.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#f0f5f1] flex items-center justify-center text-[#006951] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#181d1b]">Address</h4>
                  <p className="text-xs sm:text-sm text-[#6e7a74]">
                    {hotel.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#f0f5f1] flex items-center justify-center text-[#006951] shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#181d1b]">Landmark</h4>
                  <p className="text-xs sm:text-sm text-[#6e7a74]">
                    Opposite Krish Icon, Alwar - Bhiwadi Road, Tatarpur, Bhiwadi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#f0f5f1] flex items-center justify-center text-[#006951] shrink-0 mt-0.5">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#181d1b]">Parking & Highway Access</h4>
                  <p className="text-xs sm:text-sm text-[#6e7a74]">
                    On-site parking available with smooth road access
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#f0f5f1] flex items-center justify-center text-[#006951] shrink-0 mt-0.5">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#181d1b]">Food & Delivery</h4>
                  <p className="text-xs sm:text-sm text-[#6e7a74]">
                    Direct online food delivery (Swiggy / Zomato) available to
                    property
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getGoogleMapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f0f5f1] hover:bg-[#c5ebdb] text-[#006951] font-medium text-xs sm:text-sm px-4 py-2.5 rounded-md border border-[#c5ebdb] transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Redesigned Map Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#bdc9c2] shadow-md overflow-hidden">
              {/* Map Iframe with Hotel Name Overlay */}
              <div className="relative w-full h-[340px] sm:h-[400px] bg-[#ebefeb]">
                <iframe
                  title="Hotel O Namaste Location Map"
                  src={hotel.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
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
      </div>
    </section>
  );
}
