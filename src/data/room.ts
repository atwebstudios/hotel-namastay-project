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
      category: "Room Comforts & Storage",
      items: [
        "Air conditioning",
        "Ceiling fan",
        "Closet & Clothes rack",
        "Premium Linens",
        "Dressing mirror",
        "Trash cans",
      ],
    },
    {
      category: "Private Bathroom & Hygiene",
      items: [
        "Private bathroom",
        "Hot & cold shower",
        "Fresh luxury towels",
        "Complimentary toiletries",
        "Hand sanitizer provided",
        "First aid kit available",
      ],
    },
    {
      category: "Connectivity, Work & Media",
      items: [
        "Free Wi-Fi in all rooms",
        "Dedicated work desk",
        "Comfortable seating area",
        "Satellite / cable channels TV",
        "In-room telephone intercom",
      ],
    },
    {
      category: "Dining & Refreshment",
      items: [
        "Free bottled water",
        "24-Hour room service assistance",
        "Daily housekeeping",
      ],
    },
  ],
};
