"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { format, addDays } from "date-fns";
import { useBookingModal } from "@/context/BookingModalContext";
import { DateSelector } from "./DateSelector";
import { GuestSelector } from "./GuestSelector";
import { GuestDetailsForm, GuestDetailsFormData } from "./GuestDetailsForm";
import { EnquiryReview } from "./EnquiryReview";
import { EnquirySuccess } from "./EnquirySuccess";
import { toast } from "sonner";

import { motion, AnimatePresence } from "framer-motion";

export function BookingModal() {
  const { isOpen, closeBooking, selectedRoom } = useBookingModal();

  const tomorrow = addDays(new Date(), 1);
  const dayAfter = addDays(new Date(), 3);

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [checkIn, setCheckIn] = useState<string>(format(tomorrow, "yyyy-MM-dd"));
  const [checkOut, setCheckOut] = useState<string>(format(dayAfter, "yyyy-MM-dd"));
  const [rooms, setRooms] = useState<number>(1);
  const [adults, setAdults] = useState<number>(2);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [guestDetails, setGuestDetails] = useState<GuestDetailsFormData>({
    fullName: "",
    phone: "",
    email: "",
    specialRequest: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedEnquiryId, setSubmittedEnquiryId] = useState<string>("");

  const handleDatesChange = (newCheckIn: string, newCheckOut: string) => {
    setCheckIn(newCheckIn);
    setCheckOut(newCheckOut);
  };

  const handleGuestsChange = (newRooms: number, newAdults: number, newChildren: number) => {
    setRooms(newRooms);
    setAdults(newAdults);
    setChildrenCount(newChildren);
  };

  const handleGuestDetailsSubmit = (data: GuestDetailsFormData) => {
    setGuestDetails(data);
    setStep(4);
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/booking-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomName: selectedRoom || "Deluxe Room",
          rooms,
          checkIn,
          checkOut,
          adults,
          children: childrenCount,
          fullName: guestDetails.fullName,
          phone: guestDetails.phone,
          email: guestDetails.email,
          specialRequest: guestDetails.specialRequest,
          honeypot: guestDetails.honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedEnquiryId(data.enquiryId || "HN-SUCCESS");
        setStep(5);
        toast.success("Enquiry submitted successfully!");
      } else {
        toast.error(data.message || "Failed to submit booking enquiry. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    closeBooking();
    setTimeout(() => {
      setStep(1);
    }, 300);
  };

  const stepLabels = [
    { num: 1, label: "Dates" },
    { num: 2, label: "Rooms & Guests" },
    { num: 3, label: "Details" },
    { num: 4, label: "Review" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          className="fixed inset-0 z-50 overflow-y-auto sm:overflow-hidden bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
        >
          {/* Fixed consistent height & width modal container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md sm:max-w-[480px] h-auto sm:h-[620px] max-h-[94vh] bg-[#f6faf6] rounded-2xl shadow-[0_20px_50px_rgba(0,105,81,0.2)] border border-[#bdc9c2]/60 overflow-hidden flex flex-col"
          >
            {/* Modal Header (Fixed height) */}
            <div className="px-4 sm:px-5 pt-3.5 pb-2.5 bg-white/90 backdrop-blur-md border-b border-accent-gold/20 relative text-center shrink-0">
              <button
                type="button"
                onClick={handleModalClose}
                aria-label="Close booking enquiry"
                className="absolute right-3 top-3 p-1.5 rounded-full text-[#6e7a74] hover:text-[#006951] hover:bg-accent-champagne/50 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h2
                id="booking-modal-title"
                className="font-display text-lg sm:text-xl text-[#181d1b] font-semibold"
              >
                Booking Enquiry
              </h2>

              {/* Stepper Progress indicator (Only for steps 1-4) */}
              {step <= 4 && (
                <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 mt-2.5">
                  {stepLabels.map((s, idx) => {
                    const isActive = step === s.num;
                    const isCompleted = step > s.num;

                    return (
                      <React.Fragment key={s.num}>
                        <div className="flex flex-col items-center">
                          <motion.div
                            initial={false}
                            animate={{
                              scale: isActive ? 1.1 : 1,
                              backgroundColor: isActive ? "#006951" : isCompleted ? "#c5ebdb" : "#ebefeb",
                              color: isActive ? "#ffffff" : isCompleted ? "#00513e" : "#6e7a74",
                            }}
                            className={`w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-colors ${isActive ? "ring-2 ring-accent-gold/50" : ""}`}
                          >
                            {s.num}
                          </motion.div>
                          <span
                            className={`text-[9px] mt-0.5 font-medium hidden sm:block ${
                              isActive ? "text-[#006951]" : "text-[#6e7a74]"
                            }`}
                          >
                            {s.label}
                          </span>
                        </div>
                        {idx < stepLabels.length - 1 && (
                          <div
                            className={`h-[2px] w-4 sm:w-6 rounded mb-1.5 sm:mb-2.5 transition-colors duration-300 ${
                              step > s.num ? "bg-accent-gold" : "bg-[#dfe4e0]"
                            }`}
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-3.5 sm:p-4.5 overflow-y-auto sm:overflow-hidden overflow-x-hidden flex-1 flex flex-col justify-between relative bg-mesh-premium">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  {step === 1 && (
                    <DateSelector
                      checkIn={checkIn}
                      checkOut={checkOut}
                      onChange={handleDatesChange}
                      onNext={() => setStep(2)}
                    />
                  )}

                  {step === 2 && (
                    <GuestSelector
                      rooms={rooms}
                      adults={adults}
                      childrenCount={childrenCount}
                      onChange={handleGuestsChange}
                      onNext={() => setStep(3)}
                      onBack={() => setStep(1)}
                    />
                  )}

                  {step === 3 && (
                    <GuestDetailsForm
                      defaultValues={guestDetails}
                      onSubmit={handleGuestDetailsSubmit}
                      onBack={() => setStep(2)}
                    />
                  )}

                  {step === 4 && (
                    <EnquiryReview
                      roomName={selectedRoom || "Deluxe Room"}
                      rooms={rooms}
                      checkIn={checkIn}
                      checkOut={checkOut}
                      adults={adults}
                      childrenCount={childrenCount}
                      guestDetails={guestDetails}
                      isSubmitting={isSubmitting}
                      onEdit={() => setStep(3)}
                      onSubmit={handleFinalSubmit}
                    />
                  )}

                  {step === 5 && (
                    <EnquirySuccess
                      enquiryId={submittedEnquiryId}
                      roomName={selectedRoom || "Deluxe Room"}
                      rooms={rooms}
                      checkIn={checkIn}
                      checkOut={checkOut}
                      adults={adults}
                      childrenCount={childrenCount}
                      fullName={guestDetails.fullName}
                      onClose={handleModalClose}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
