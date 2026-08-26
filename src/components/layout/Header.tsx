"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBookingModal } from "@/context/BookingModalContext";
import { hotel } from "@/data/hotel";
import { Menu, X, Phone } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();
  const { openBooking } = useBookingModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Room", href: "/room" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#f6faf6]/95 backdrop-blur-md shadow-xs border-b border-[#bdc9c2]/50 py-3.5"
            : "bg-[#f6faf6] border-b border-[#bdc9c2]/30 py-5"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            href="/"
            className="group focus:outline-none"
            aria-label="Hotel O Namaste Home"
          >
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#006951] group-hover:text-[#00513e] transition-colors">
              Hotel O Namaste
            </span>
          </Link>

          {/* Desktop Navigation - Strictly Home, About Us, Contact Us */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#006951] py-1 border-b-2 ${
                    isActive
                      ? "text-[#006951] border-[#006951]"
                      : "text-[#181d1b] border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${hotel.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3e4944] hover:text-[#006951] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#006951]" />
              <span>{hotel.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={() => openBooking("Deluxe Room")}
              className="bg-[#006951] hover:bg-[#00513e] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              Enquire to Book
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => openBooking("Deluxe Room")}
              className="bg-[#006951] text-white text-xs font-medium px-3 py-2 rounded"
            >
              Enquire
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-md text-[#181d1b] hover:bg-[#ebefeb] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        onOpenBooking={() => {
          setMobileMenuOpen(false);
          openBooking("Deluxe Room");
        }}
      />
    </>
  );
}
