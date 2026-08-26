import { NextRequest, NextResponse } from "next/server";
import { bookingEnquirySchema } from "@/lib/validation/booking";
import { processBookingEnquiry } from "@/lib/booking/enquiry-service";
import { sendBookingEnquiryEmails } from "@/lib/email/mailer";

// Basic in-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown-ip";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many enquiries submitted from this network. Please try again in a few moments or contact us directly.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot spam check
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Silently pretend success to deceive spam bots
      return NextResponse.json({
        success: true,
        enquiryId: "HN-BOTCHK",
        message: "Enquiry submitted successfully.",
      });
    }

    // Strict Zod server-side validation
    const validationResult = bookingEnquirySchema.safeParse(body);
    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted errors in your booking details.",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // Process enquiry and generate collision-resistant reference ID
    const enquiryResult = await processBookingEnquiry(validatedData);

    if (!enquiryResult.success || !enquiryResult.data) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to process booking enquiry. Please try again.",
        },
        { status: 500 }
      );
    }

    // Send emails via Resend
    const emailResult = await sendBookingEnquiryEmails({
      enquiryId: enquiryResult.data.enquiryId,
      roomName: enquiryResult.data.roomName,
      rooms: enquiryResult.data.rooms,
      checkIn: enquiryResult.data.checkIn,
      checkOut: enquiryResult.data.checkOut,
      nights: enquiryResult.data.nights,
      adults: enquiryResult.data.adults,
      children: enquiryResult.data.children,
      fullName: enquiryResult.data.fullName,
      phone: enquiryResult.data.phone,
      email: enquiryResult.data.email,
      specialRequest: enquiryResult.data.specialRequest,
      createdAt: enquiryResult.data.createdAt,
    });

    if (!emailResult.success) {
      console.error("[Booking API] Email delivery error:", emailResult.error);
      // Return safe message without exposing internals
      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't submit your enquiry right now. Please try again or contact us directly by phone or WhatsApp.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        enquiryId: enquiryResult.data.enquiryId,
        message: "Enquiry received successfully! Our team will contact you within 1–2 hours.",
        data: enquiryResult.data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Booking API Unexpected Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your enquiry. Please reach out to us directly.",
      },
      { status: 500 }
    );
  }
}
