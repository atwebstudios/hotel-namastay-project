export interface BookingEnquiryData {
  roomName: string;
  rooms: number;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  adults: number;
  children: number;
  fullName: string;
  phone: string;
  email: string;
  specialRequest?: string;
  honeypot?: string;
}

export interface BookingEnquiryResponse {
  success: boolean;
  message?: string;
  enquiryId?: string;
  data?: {
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
  };
  errors?: Record<string, string[]>;
}
