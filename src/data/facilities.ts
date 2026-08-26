import { FacilityItem } from "@/types/hotel";

export interface AmenityCategory {
  title: string;
  items: {
    name: string;
    iconName: string;
    flag?: string;
    isHighlight?: boolean;
  }[];
}

// 4 balanced property categories
export const hotelPropertyCategories: AmenityCategory[] = [
  {
    title: "Languages & Reception",
    items: [
      { name: "English", iconName: "Languages", flag: "🇬🇧" },
      { name: "Catalan", iconName: "Languages", flag: "🇪🇸" },
      { name: "Hindi", iconName: "Languages", flag: "🇮🇳" },
      { name: "24-Hour Front Desk", iconName: "Clock", isHighlight: true },
      { name: "24-Hour Express Check-in", iconName: "Clock", isHighlight: true },
    ],
  },
  {
    title: "Internet & Conveniences",
    items: [
      { name: "Free Wi-Fi in all rooms", iconName: "Wifi", isHighlight: true },
      { name: "High-Speed Internet", iconName: "Globe" },
      { name: "Public Area Wi-Fi", iconName: "Wifi" },
      { name: "Luggage Storage", iconName: "Luggage" },
      { name: "Shared Lounge / TV Area", iconName: "Tv" },
    ],
  },
  {
    title: "Cleanliness & Dining",
    items: [
      { name: "Daily Housekeeping", iconName: "Sparkles", isHighlight: true },
      { name: "Daily Disinfection", iconName: "ShieldCheck", isHighlight: true },
      { name: "Sanitized Between Stays", iconName: "Sparkles", isHighlight: true },
      { name: "24-Hour Room Service", iconName: "Utensils", isHighlight: true },
      { name: "Complimentary Bottled Water", iconName: "Droplet" },
    ],
  },
  {
    title: "Safety, Security & Family",
    items: [
      { name: "24-Hour Security Guards", iconName: "ShieldCheck", isHighlight: true },
      { name: "24-Hour CCTV Surveillance", iconName: "Video" },
      { name: "First Aid Kit on site", iconName: "HeartPulse" },
      { name: "Hand Sanitizers provided", iconName: "Droplets" },
      { name: "Family & Child Friendly", iconName: "Users" },
    ],
  },
];

// 4 balanced in-room amenity categories
export const inRoomAmenityCategories: AmenityCategory[] = [
  {
    title: "Climate & Workspace",
    items: [
      { name: "Individual Air Conditioning", iconName: "Snowflake", isHighlight: true },
      { name: "Ceiling Fan", iconName: "Fan" },
      { name: "Dedicated Work Desk", iconName: "Laptop" },
      { name: "Comfortable Seating Area", iconName: "Armchair" },
    ],
  },
  {
    title: "Bedding & Wardrobe",
    items: [
      { name: "Premium Clean Linens", iconName: "Layers", isHighlight: true },
      { name: "Wardrobe Closet", iconName: "DoorClosed" },
      { name: "Clothes Rack & Hangers", iconName: "Shirt" },
      { name: "Full Dressing Mirror", iconName: "Sparkles" },
    ],
  },
  {
    title: "Private En-Suite Bath",
    items: [
      { name: "Private Attached Bathroom", iconName: "Bath", isHighlight: true },
      { name: "Hot & Cold Shower Geyser", iconName: "ShowerHead", isHighlight: true },
      { name: "Fresh Luxury Towels", iconName: "Layers" },
      { name: "Complimentary Toiletries", iconName: "Sparkles" },
    ],
  },
  {
    title: "Media & Essentials",
    items: [
      { name: "Free High-Speed Wi-Fi", iconName: "Wifi", isHighlight: true },
      { name: "Satellite / Cable TV", iconName: "Tv" },
      { name: "In-Room Telephone Intercom", iconName: "Phone" },
      { name: "Trash Cans & Sanitizer", iconName: "Trash2" },
    ],
  },
];

// Highlight facilities (Strict 6 Featured Cards)
export const facilities: FacilityItem[] = [
  {
    id: "wifi",
    title: "Free Wi-Fi in All Rooms",
    description: "High-speed wireless internet available throughout all guest rooms and public areas.",
    iconName: "Wifi",
    category: "essential",
  },
  {
    id: "front-desk",
    title: "24-Hour Front Desk & Check-in",
    description: "Round-the-clock reception and seamless check-in whenever you arrive.",
    iconName: "Clock",
    category: "service",
  },
  {
    id: "ac",
    title: "Air Conditioning",
    description: "Individual climate control in every room and public lounge areas for complete comfort.",
    iconName: "Snowflake",
    category: "comfort",
  },
  {
    id: "housekeeping",
    title: "Daily Housekeeping",
    description: "Impeccable cleanliness with fresh linen, clean towels, and premium toiletries.",
    iconName: "Sparkles",
    category: "service",
  },
  {
    id: "family",
    title: "Family & Child Friendly",
    description: "Spacious family accommodations welcoming guests of all generations.",
    iconName: "Users",
    category: "comfort",
  },
  {
    id: "languages",
    title: "Multilingual Support",
    description: "Friendly staff fluent in English, Catalan, and Hindi to assist your every need.",
    iconName: "Languages",
    category: "service",
  },
];
