import * as React from "react";
import { Resend } from "resend";
import { BookingEnquiryHotelEmail } from "@/emails/BookingEnquiryHotelEmail";
import { BookingEnquiryGuestEmail } from "@/emails/BookingEnquiryGuestEmail";
import { ContactFormEmail } from "@/emails/ContactFormEmail";
import { hotel } from "@/data/hotel";

const resendApiKey = process.env.RESEND_API_KEY;
const hotelEmail = process.env.HOTEL_EMAIL || "reservations@hotelonamaste.com";
const fromEmail = process.env.FROM_EMAIL || "Hotel O Namaste <bookings@hotelonamaste.com>";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendBookingEnquiryEmails(params: {
  enquiryId: string;
  roomName: string;
  rooms: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  adults: number;
  children: number;
  fullName: string;
  phone: string;
  email: string;
  specialRequest?: string;
  createdAt: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    if (!resend) {
      console.warn(
        `[Mailer Dev Mode] RESEND_API_KEY is not set. Simulating email send for enquiry ${params.enquiryId}.`
      );
      return { success: true };
    }

    // 1. Send Hotel Notification Email
    const hotelEmailPromise = resend.emails.send({
      from: fromEmail,
      to: hotelEmail,
      subject: `New Booking Enquiry — Hotel O Namaste — ${params.enquiryId}`,
      react: (
        <BookingEnquiryHotelEmail
          enquiryId={params.enquiryId}
          roomName={params.roomName}
          rooms={params.rooms}
          checkIn={params.checkIn}
          checkOut={params.checkOut}
          nights={params.nights}
          adults={params.adults}
          childrenCount={params.children}
          fullName={params.fullName}
          phone={params.phone}
          email={params.email}
          specialRequest={params.specialRequest}
          createdAt={params.createdAt}
        />
      ) as React.ReactElement,
    });

    // 2. Send Guest Acknowledgement Email
    const guestEmailPromise = resend.emails.send({
      from: fromEmail,
      to: params.email,
      subject: `Your Booking Enquiry — Hotel O Namaste — ${params.enquiryId}`,
      react: (
        <BookingEnquiryGuestEmail
          enquiryId={params.enquiryId}
          roomName={params.roomName}
          rooms={params.rooms}
          checkIn={params.checkIn}
          checkOut={params.checkOut}
          nights={params.nights}
          adults={params.adults}
          childrenCount={params.children}
          fullName={params.fullName}
          hotelPhone={hotel.phoneDisplay}
          hotelEmail={hotel.email}
          hotelWhatsApp={hotel.whatsappDisplay}
        />
      ) as React.ReactElement,
    });

    await Promise.all([hotelEmailPromise, guestEmailPromise]);

    return { success: true };
  } catch (error) {
    console.error("[Mailer Error] Failed to send booking enquiry emails:", error);
    return {
      success: false,
      error: "Unable to deliver notification email. Please try again or contact the hotel directly.",
    };
  }
}

export async function sendContactEmail(params: {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    if (!resend) {
      console.warn(
        `[Mailer Dev Mode] RESEND_API_KEY is not set. Simulating contact email send for ${params.fullName}.`
      );
      return { success: true };
    }

    await resend.emails.send({
      from: fromEmail,
      to: hotelEmail,
      subject: `Website Contact — Hotel O Namaste — ${params.subject}`,
      react: (
        <ContactFormEmail
          fullName={params.fullName}
          phone={params.phone}
          email={params.email}
          subject={params.subject}
          message={params.message}
          createdAt={params.createdAt}
        />
      ) as React.ReactElement,
    });

    return { success: true };
  } catch (error) {
    console.error("[Mailer Error] Failed to send contact email:", error);
    return {
      success: false,
      error: "Unable to send message right now. Please call or WhatsApp us directly.",
    };
  }
}
