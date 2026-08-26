"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBookingModal } from "@/context/BookingModalContext";
import { hotel } from "@/data/hotel";
import { Menu, X, Phone } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

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
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-[#bdc9c2]/40 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            href="/"
            className="group focus:outline-none"
            aria-label="Hotel O Namaste Home"
          >
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#006951] group-hover:text-accent-gold transition-colors duration-300">
              Hotel O Namaste
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group text-sm font-medium py-2"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-[#006951]" : "text-[#3e4944] group-hover:text-[#006951]"
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#006951]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#006951] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${hotel.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3e4944] hover:text-[#006951] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#006951]" />
              <span>{hotel.phoneDisplay}</span>
            </a>

            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openBooking("Deluxe Room")}
                className="relative overflow-hidden bg-gradient-to-r from-[#006951] to-[#004233] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-md shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <span className="relative z-10">Enquire to Book</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </MagneticButton>
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
