"use client";

import { motion, useScroll } from "framer-motion";
import { Wifi, Wind, Tv, Coffee } from "lucide-react";
import { useEffect, useState } from "react";

export function AmenitiesDock() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Show dock only when scrolling past hero and before footer
      if (latest > 400 && latest < document.body.scrollHeight - 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex pointer-events-none"
    >
      <div className="flex items-center gap-6 px-8 py-3.5 bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full pointer-events-auto">
        <div className="flex items-center gap-2 group cursor-default">
          <div className="p-1.5 rounded-full bg-[#f0f5f1] text-[#006951] group-hover:scale-110 transition-transform">
            <Wifi className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium text-[#181d1b]">High-Speed WiFi</span>
        </div>
        <div className="w-px h-6 bg-[#bdc9c2]/50" />
        <div className="flex items-center gap-2 group cursor-default">
          <div className="p-1.5 rounded-full bg-[#f0f5f1] text-[#006951] group-hover:scale-110 transition-transform">
            <Wind className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium text-[#181d1b]">Climate Control</span>
        </div>
        <div className="w-px h-6 bg-[#bdc9c2]/50" />
        <div className="flex items-center gap-2 group cursor-default">
          <div className="p-1.5 rounded-full bg-[#f0f5f1] text-[#006951] group-hover:scale-110 transition-transform">
            <Tv className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium text-[#181d1b]">Smart TV</span>
        </div>
        <div className="w-px h-6 bg-[#bdc9c2]/50" />
        <div className="flex items-center gap-2 group cursor-default">
          <div className="p-1.5 rounded-full bg-[#f0f5f1] text-[#006951] group-hover:scale-110 transition-transform">
            <Coffee className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium text-[#181d1b]">Room Service</span>
        </div>
      </div>
    </motion.div>
  );
}
