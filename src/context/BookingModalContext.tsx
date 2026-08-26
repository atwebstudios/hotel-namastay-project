"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  openBooking: (roomName?: string) => void;
  closeBooking: () => void;
  selectedRoom: string;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const BookingModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Deluxe Room");

  const openBooking = useCallback((roomName = "Deluxe Room") => {
    setSelectedRoom(roomName);
    setIsOpen(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        openBooking,
        closeBooking,
        selectedRoom,
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = (): BookingModalContextType => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
};
