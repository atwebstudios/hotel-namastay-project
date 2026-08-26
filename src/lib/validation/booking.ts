import { z } from "zod";

export const bookingEnquirySchema = z
  .object({
    roomName: z.string().default("Deluxe Room"),
    rooms: z
      .number()
      .int()
      .min(1, "At least 1 room is required")
      .max(28, "Maximum 28 rooms available")
      .default(1),
    checkIn: z
      .string()
      .min(1, "Check-in date is required")
      .refine(
        (val) => {
          const date = new Date(val);
          if (isNaN(date.getTime())) return false;
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return date >= today;
        },
        { message: "Check-in date cannot be in the past" }
      ),
    checkOut: z
      .string()
      .min(1, "Check-out date is required")
      .refine(
        (val) => {
          const date = new Date(val);
          return !isNaN(date.getTime());
        },
        { message: "Valid check-out date is required" }
      ),
    adults: z
      .number()
      .int()
      .min(1, "At least 1 adult is required")
      .max(50, "For very large groups, please contact us directly"),
    children: z
      .number()
      .int()
      .min(0, "Cannot be negative")
      .max(30, "Maximum 30 children per enquiry")
      .default(0),
    fullName: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters")
      .max(80, "Name is too long"),
    phone: z
      .string()
      .trim()
      .min(10, "Please enter a valid phone number (at least 10 digits)")
      .max(16, "Phone number is too long")
      .regex(/^[+]?[\d\s-]{10,16}$/, "Please enter a valid phone number"),
    email: z
      .string()
      .trim()
      .email("Please enter a valid email address"),
    specialRequest: z.string().trim().max(500, "Special request cannot exceed 500 characters").optional(),
    honeypot: z.string().max(0, "Spam detected").optional(),
  })
  .refine(
    (data) => {
      const checkInDate = new Date(data.checkIn);
      const checkOutDate = new Date(data.checkOut);
      return checkOutDate > checkInDate;
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOut"],
    }
  );

export type BookingEnquiryInput = z.infer<typeof bookingEnquirySchema>;
