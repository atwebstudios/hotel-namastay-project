export interface HotelConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  distanceFromCityCenter: string;
  totalRooms: number;
  checkInTime: string;
  checkOutTime: string;
  latitude: number | null;
  longitude: number | null;
  mapEmbedUrl: string;
  socials?: {
    instagram?: string;
    facebook?: string;
  };
}

export interface RoomConfig {
  id: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  capacity: {
    maxGuests: number;
    adults: number;
    children: number;
  };
  bedType: string;
  roomSize: string;
  bathType: string;
  images: string[];
  keyHighlights: string[];
  amenities: {
    category: string;
    items: string[];
  }[];
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "essential" | "comfort" | "service" | "safety";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Booking" | "Check-in & Check-out" | "Room & Facilities" | "Rules & Policies";
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  stayType: string;
  date: string;
}
