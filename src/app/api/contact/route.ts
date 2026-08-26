import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/lib/email/mailer";

const contactRateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = contactRateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  contactRateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown-ip";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many messages sent. Please wait a minute or call us directly.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out. We will get back to you shortly.",
      });
    }

    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted errors in the form.",
          errors: formattedErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    const emailResult = await sendContactEmail({
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      subject: data.subject,
      message: data.message,
      createdAt: new Date().toISOString(),
    });

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now. Please call or WhatsApp us directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent. Our team will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Unexpected Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please contact us directly.",
      },
      { status: 500 }
    );
  }
}
