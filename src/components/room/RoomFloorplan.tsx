import React from "react";

export function RoomFloorplan() {
  return (
    <div className="w-full bg-white rounded-2xl border border-[#bdc9c2] overflow-hidden shadow-sm">
      <div className="px-6 py-5 border-b border-[#bdc9c2] bg-[#fdfdfc] flex items-center justify-between">
        <div>
          <h3 className="font-display font-medium text-lg text-[#181d1b]">Deluxe Room Layout</h3>
          <p className="text-sm text-[#6e7a74]">Interactive floor plan (Approx 300 sq.ft)</p>
        </div>
        <div className="px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-semibold uppercase tracking-wider rounded-full">
          Signature Layout
        </div>
      </div>
      <div className="p-8 sm:p-12 bg-[#ebefeb] flex items-center justify-center">
        {/* Architectural SVG Floorplan */}
        <svg
          viewBox="0 0 800 600"
          className="w-full max-w-3xl h-auto drop-shadow-xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Floor */}
          <rect x="50" y="50" width="700" height="500" fill="#fdfdfc" />
          
          {/* Walls */}
          <path
            d="M 50 50 L 750 50 L 750 550 L 50 550 Z"
            fill="none"
            stroke="#181d1b"
            strokeWidth="8"
          />
          {/* Bathroom Wall */}
          <path
            d="M 50 350 L 300 350 L 300 550"
            fill="none"
            stroke="#181d1b"
            strokeWidth="6"
          />
          
          {/* Entry Door (Bottom Right) */}
          <rect x="650" y="546" width="80" height="12" fill="#fdfdfc" />
          <path d="M 650 550 Q 570 550 570 470" fill="none" stroke="#6e7a74" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="650" y1="550" x2="570" y2="470" stroke="#181d1b" strokeWidth="4" />

          {/* Bathroom Door */}
          <rect x="297" y="380" width="12" height="60" fill="#fdfdfc" />
          <path d="M 300 440 Q 380 440 380 360" fill="none" stroke="#6e7a74" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="300" y1="440" x2="380" y2="360" stroke="#181d1b" strokeWidth="4" />

          {/* Window (Top Left/Center) */}
          <rect x="150" y="46" width="200" height="12" fill="#c5ebdb" stroke="#006951" strokeWidth="2" />
          <rect x="400" y="46" width="200" height="12" fill="#c5ebdb" stroke="#006951" strokeWidth="2" />

          {/* King Bed */}
          <g transform="translate(300, 50)">
            {/* Bed Frame */}
            <rect x="0" y="10" width="180" height="220" fill="#f6faf6" stroke="#181d1b" strokeWidth="3" rx="4" />
            {/* Pillows */}
            <rect x="20" y="25" width="60" height="30" fill="#ffffff" stroke="#bdc9c2" strokeWidth="2" rx="4" />
            <rect x="100" y="25" width="60" height="30" fill="#ffffff" stroke="#bdc9c2" strokeWidth="2" rx="4" />
            {/* Blanket */}
            <rect x="10" y="90" width="160" height="130" fill="#e5ece8" stroke="#bdc9c2" strokeWidth="2" rx="2" />
            <text x="90" y="160" textAnchor="middle" fill="#6e7a74" fontSize="14" fontFamily="sans-serif" fontWeight="bold">KING BED</text>
          </g>

          {/* Nightstands */}
          <rect x="240" y="50" width="50" height="40" fill="#ffffff" stroke="#181d1b" strokeWidth="2" />
          <circle cx="265" cy="70" r="10" fill="#bdc9c2" />
          <rect x="490" y="50" width="50" height="40" fill="#ffffff" stroke="#181d1b" strokeWidth="2" />
          <circle cx="515" cy="70" r="10" fill="#bdc9c2" />

          {/* TV Unit (Right Wall) */}
          <rect x="730" y="200" width="20" height="160" fill="#181d1b" />
          <text x="710" y="285" textAnchor="end" fill="#181d1b" fontSize="14" fontFamily="sans-serif" fontWeight="bold" transform="rotate(-90 710 285)">55" SMART TV</text>

          {/* Seating Area (Top Left) */}
          <circle cx="120" cy="120" r="40" fill="#f6faf6" stroke="#181d1b" strokeWidth="3" />
          <circle cx="120" cy="220" r="40" fill="#f6faf6" stroke="#181d1b" strokeWidth="3" />
          <rect x="90" y="155" width="60" height="30" fill="#ffffff" stroke="#181d1b" strokeWidth="2" />
          <text x="120" y="175" textAnchor="middle" fill="#6e7a74" fontSize="12" fontFamily="sans-serif">SEATING</text>

          {/* Wardrobe (Bottom Wall, Right of Bathroom) */}
          <rect x="350" y="490" width="150" height="60" fill="#f6faf6" stroke="#181d1b" strokeWidth="3" />
          <line x1="425" y1="490" x2="425" y2="550" stroke="#181d1b" strokeWidth="2" />
          <text x="425" y="525" textAnchor="middle" fill="#6e7a74" fontSize="14" fontFamily="sans-serif" fontWeight="bold">WARDROBE</text>

          {/* Bathroom Layout */}
          <text x="175" y="450" textAnchor="middle" fill="#6e7a74" fontSize="16" fontFamily="sans-serif" fontWeight="bold">BATHROOM</text>
          
          {/* Shower (Top Left of Bath) */}
          <rect x="50" y="350" width="100" height="100" fill="#c5ebdb" stroke="#181d1b" strokeWidth="2" opacity="0.3" />
          <circle cx="100" cy="400" r="8" fill="#181d1b" />
          <line x1="50" y1="350" x2="150" y2="450" stroke="#181d1b" strokeWidth="1" opacity="0.5" />
          <line x1="150" y1="350" x2="50" y2="450" stroke="#181d1b" strokeWidth="1" opacity="0.5" />

          {/* Toilet (Bottom Left of Bath) */}
          <ellipse cx="100" cy="510" rx="20" ry="30" fill="#ffffff" stroke="#181d1b" strokeWidth="2" />
          <rect x="80" y="530" width="40" height="20" fill="#ffffff" stroke="#181d1b" strokeWidth="2" />

          {/* Sink/Vanity (Right Wall of Bath) */}
          <rect x="240" y="450" width="60" height="100" fill="#ffffff" stroke="#181d1b" strokeWidth="2" />
          <ellipse cx="270" cy="500" rx="15" ry="25" fill="#f6faf6" stroke="#181d1b" strokeWidth="1" />

          {/* Entryway Text */}
          <text x="610" y="500" textAnchor="middle" fill="#6e7a74" fontSize="14" fontFamily="sans-serif" fontWeight="bold">ENTRY</text>
          
          {/* Compass / Orientation */}
          <g transform="translate(60, 60)">
            <circle cx="20" cy="20" r="15" fill="none" stroke="#6e7a74" strokeWidth="2" />
            <path d="M 20 0 L 25 20 L 15 20 Z" fill="#6e7a74" />
            <text x="20" y="45" textAnchor="middle" fill="#6e7a74" fontSize="10" fontFamily="sans-serif">N</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
