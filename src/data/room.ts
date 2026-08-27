import { RoomConfig } from "@/types/hotel";

export const room: RoomConfig = {
  id: "deluxe-room",
  name: "Deluxe Room",
  subtitle: "A Space to Unwind & Recharge",
  shortDescription:
    "Designed with comfort in mind, our Deluxe Room offers a serene retreat with natural light, premium linens, and a seamless blend of modern amenities and calm ambiance.",
  longDescription:
    "Our Deluxe Room is designed to be a tactile, serene retreat from the bustling world. Featuring bespoke wooden finishes paired with high-thread-count crisp linens, every detail is curated to provide a genuine sense of relaxed comfort. Large bright windows invite warm ambient light, complemented by gentle bedside illumination, a dedicated work desk, and a sparkling private en-suite bathroom.",
  capacity: {
    maxGuests: 3,
    adults: 2,
    children: 1,
  },
  bedType: "1 King Bed or Twin Beds",
  roomSize: "45 m² / 484 ft²",
  bathType: "Private En-suite Bathroom",
  keyHighlights: [
    "Up to 3 Guests (2 Adults, 1 Child)",
    "1 King Bed / Twin Setup",
    "Free Wi-Fi in all rooms",
    "Individual Air Conditioning & Fan",
    "Private En-suite Bathroom with Shower",
    "Dedicated Desk & Seating Area",
  ],
  images: [
    "/images/room/room-01.webp",
    "/images/room/room-02.webp",
    "/images/room/room-03.webp",
    "/images/room/room-04.webp",
    "/images/room/room-05.webp",
    "/images/room/room-06.webp",
    "/images/room/room-07.webp",
    "/images/room/room-08.webp",
    "/images/room/room-09.webp",
    "/images/room/room-10.webp",
    "/images/room/room-11.webp",
  ],
  amenities: [
    {
      category: "Languages spoken",
      items: ["English", "Catalan", "Hindi"],
    },
    {
      category: "Internet access",
      items: ["Free Wi-Fi in all rooms!", "Internet", "Wi-Fi in public areas"],
    },
    {
      category: "Dining, drinking, and snacking",
      items: ["Bottle of water", "Room service [24-hour]"],
    },
    {
      category: "Services and conveniences",
      items: [
        "Air conditioning in public area",
        "Daily housekeeping",
        "Elevator",
        "Luggage storage",
        "Shared lounge/TV area",
      ],
    },
    {
      category: "Cleanliness and safety",
      items: [
        "Daily disinfection in common areas",
        "First aid kit",
        "Hand sanitizer",
        "Rooms sanitized between stays",
        "Staff trained in safety protocol",
      ],
    },
    {
      category: "For the kids",
      items: ["Family/child friendly", "Family room"],
    },
    {
      category: "Access",
      items: [
        "Buzzer/wireless intercom",
        "CCTV in common areas",
        "CCTV outside property",
        "Check-in [24-hour]",
        "Fire extinguisher",
        "Front desk [24-hour]",
        "Security [24-hour]",
      ],
    },
    {
      category: "Available in all rooms",
      items: [
        "Air conditioning",
        "Closet",
        "Clothes rack",
        "Desk",
        "Fan",
        "First aid kit",
        "Free bottled water",
        "Hand sanitizer",
        "Linens",
        "Mirror",
        "Private bathroom",
        "Satellite/cable channels",
        "Seating area",
        "Shower",
        "Telephone",
        "Toiletries",
        "Towels",
        "Trash cans",
        "Wi-Fi [free]",
      ],
    },
  ],
};
