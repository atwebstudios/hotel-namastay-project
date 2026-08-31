import { HotelConfig } from "@/types/hotel";

export const hotel: HotelConfig = {
  name: "Hotel Namastay",
  tagline: "Stay Comfortably. Feel at Home.",
  shortDescription:
    "A comfortable stay, thoughtful facilities, and personal hospitality — all in one place.",
  longDescription:
    "Hotel Namastay is an independently operated hotel dedicated to genuine hospitality, pristine cleanliness, and calm comfort in Bhiwadi, Rajasthan. Whether visiting for business or a relaxing stay, our team ensures every detail of your visit is thoughtfully taken care of.",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  email: "reservations@hotelonamaste.com",
  address: "Plot no 102A, Alwar - Bhiwadi Rd, opposite krish icon, societynull, Bhiwadi, Tatarpur, Rajasthan 301018",
  locality: "Tatarpur",
  city: "Bhiwadi",
  state: "Rajasthan",
  pincode: "301018",
  country: "India",
  distanceFromCityCenter: "Convenient Location",
  totalRooms: 28,
  checkInTime: "12:00 PM",
  checkOutTime: "11:00 AM",
  latitude: 28.2045,
  longitude: 76.8222,
  mapEmbedUrl:
    "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=hotel%20o%20namaste%20-%20Plot%20no%20102A,%20Alwar%20-%20Bhiwadi%20Rd,%20opposite%20krish%20icon,%20societynull,%20Bhiwadi,%20Tatarpur,%20Rajasthan%20301018+(Hotel%20O%20Namaste)&t=&z=16&ie=UTF8&iwloc=near&output=embed",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export function getWhatsAppBookingLink(enquiryId?: string): string {
  const number = hotel.whatsapp.replace(/\D/g, "");
  const text = enquiryId
    ? `Hello Hotel Namastay, I have submitted booking enquiry *${enquiryId}* and would like to follow up on room availability.`
    : `Hello Hotel Namastay, I would like to enquire about room availability and reservations.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getTelLink(): string {
  return `tel:${hotel.phone.replace(/\s+/g, "")}`;
}

export function getMailtoLink(subject = "Room Enquiry - Hotel Namastay"): string {
  return `mailto:${hotel.email}?subject=${encodeURIComponent(subject)}`;
}

export function getGoogleMapsLink(): string {
  return "https://www.google.com/maps/search/?api=1&query=hotel+o+namaste+-+Plot+no+102A,+Alwar+-+Bhiwadi+Rd,+opposite+krish+icon,+societynull,+Bhiwadi,+Tatarpur,+Rajasthan+301018";
}
