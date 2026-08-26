import { z } from "zod";

export const contactFormSchema = z.object({
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
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
