import { BookingEnquiryData, BookingEnquiryResponse } from "@/types/booking";
import { differenceInCalendarDays, parseISO } from "date-fns";

export function generateEnquiryId(): string {
  const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  let randomPart = "";
  for (let i = 0; i < 6; i++) {
    randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `HN-${randomPart}`;
}

export function calculateNights(checkIn: string, checkOut: string): number {
  try {
    const start = parseISO(checkIn);
    const end = parseISO(checkOut);
    const nights = differenceInCalendarDays(end, start);
    return nights > 0 ? nights : 1;
  } catch {
    return 1;
  }
}

export async function processBookingEnquiry(
  payload: BookingEnquiryData
): Promise<BookingEnquiryResponse> {
  const enquiryId = generateEnquiryId();
  const nights = calculateNights(payload.checkIn, payload.checkOut);

  return {
    success: true,
    enquiryId,
    data: {
      enquiryId,
      roomName: payload.roomName || "Deluxe Room",
      rooms: payload.rooms || 1,
      checkIn: payload.checkIn,
      checkOut: payload.checkOut,
      nights,
      adults: payload.adults,
      children: payload.children,
      fullName: payload.fullName,
      phone: payload.phone,
      email: payload.email,
      specialRequest: payload.specialRequest,
      createdAt: new Date().toISOString(),
    },
  };
}
