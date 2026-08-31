"use client";

import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!mounted || !isOpen || images.length === 0) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white z-10">
        <div className="text-sm font-medium tracking-wider text-white/80">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          aria-label="Close image gallery"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center my-4 w-full h-[70vh] sm:h-[80vh]">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          aria-label="Previous photo"
          className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer border border-white/10"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Current Image */}
        <div className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt={`Hotel Namastay Room view ${currentIndex + 1}`}
            fill
            className="object-contain select-none"
            sizes="(max-width: 1024px) 100vw, 1280px"
            priority
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next photo"
          className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer border border-white/10"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Thumbnail Bar */}
      <div className="flex justify-center gap-2 overflow-x-auto py-2 z-10">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (idx > currentIndex) {
                for (let i = currentIndex; i < idx; i++) onNext();
              } else if (idx < currentIndex) {
                for (let i = currentIndex; i > idx; i--) onPrev();
              }
            }}
            className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded overflow-hidden border-2 transition-opacity cursor-pointer ${
              idx === currentIndex ? "border-[#006951] opacity-100" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>,
    document.body
  );
}
