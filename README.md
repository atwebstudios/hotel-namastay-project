# Hotel Namastay — Production Website & Booking Enquiry System

A production-ready boutique hotel website and booking enquiry system for **Hotel Namastay** built with Next.js (App Router), TypeScript, Tailwind CSS, and Resend.

The website follows the **Ethereal Stay / Verdant Sanctuary** aesthetic defined in `DESIGN.md` and matches the Stitch high-fidelity boutique hotel mockups.

---

## 🌟 Features

- **Cinematic Responsive Design:** Warm ivory surface (`#f6faf6`), Deep Seafoam brand accents (`#006951`), serif headings (`Playfair Display`), and clean UI body font (`Inter`).
- **Focused Primary Navigation:** Strictly `Home`, `About Us`, `Contact Us`, and prominent `Enquire to Book` CTA.
- **Single Signature Room Showcase:** Configurable Deluxe Room showcase on both Home and dedicated Room page (`/room`).
- **Interactive Lightbox Room Gallery:** High-resolution multi-photo gallery supporting keyboard navigation (Arrows/Escape), counter, thumbnails, and touch gestures.
- **4-Step Booking Enquiry Flow (Modal / Drawer):**
  1. *Date Range Selection:* Calendar picker with instant night calculation and validation.
  2. *Guest Selection:* Adults & Children counters with room capacity validation.
  3. *Guest Details:* Full name, phone, email, special requests, and hidden honeypot spam protection.
  4. *Review:* Stay overview with clear enquiry disclaimer.
  5. *Confirmation Screen:* Generated Enquiry ID (`HN-XXXXXXXX`), direct WhatsApp concierge link, phone `tel:` link, and Back to Home.
- **Automated Resend Email Notifications:**
  - **Hotel Staff Notification:** Instant email to `HOTEL_EMAIL` with guest and stay parameters.
  - **Guest Acknowledgement Email:** Instant email with reference ID and explanation that team will contact within 1–2 hours.
- **Contact Inquiries Form:** Client + server Zod validation, rate limiting, and email delivery to hotel desk.
- **Centralized Data Architecture:** All hotel details, rooms, facilities, FAQs, and reviews isolated in `src/data/`.
- **SEO & Schema.org JSON-LD:** Structured LodgingBusiness metadata and Open Graph tags.

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router, Server Components by default)
- **Language:** TypeScript
- **Package Manager:** `pnpm`
- **Styling:** Tailwind CSS + Vanilla CSS Tokens
- **Icons:** `lucide-react`
- **Forms & Validation:** `react-hook-form`, `@hookform/resolvers`, `zod`
- **Email Delivery:** `resend`, `@react-email/components`
- **Date Utilities:** `date-fns`
- **Notifications:** `sonner`

---

## 📁 Project Structure

```
hotel-o-namaste/
├── public/
│   └── images/
│       ├── hotel/            # Hotel exterior, grounds, dining
│       ├── room/             # Deluxe room photos (10+ images)
│       └── facilities/       # Facility illustrations
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── booking-enquiry/route.ts  # Booking API + Rate Limiter
│   │   │   └── contact/route.ts          # Contact form endpoint
│   │   ├── about/page.tsx                # About Us page
│   │   ├── contact/page.tsx              # Contact Us page + Map
│   │   ├── room/page.tsx                 # Deluxe Room Details + Lightbox
│   │   ├── privacy-policy/page.tsx       # Privacy policy
│   │   ├── terms-and-conditions/page.tsx # Terms of service
│   │   ├── cancellation-policy/page.tsx  # Cancellation terms
│   │   ├── not-found.tsx                 # Custom 404 page
│   │   ├── layout.tsx                    # Root layout + Fonts + JSON-LD
│   │   ├── page.tsx                      # Complete 10-section Home page
│   │   └── globals.css                   # Theme tokens & CSS variables
│   ├── components/
│   │   ├── layout/           # Header, MobileMenu, Footer, StickyMobileCTA
│   │   ├── home/             # Hero, AboutPreview, RoomPreview, Facilities, FAQ, etc.
│   │   ├── room/             # RoomHero, RoomGallery, RoomDetails, RoomAmenities
│   │   ├── booking/          # DateSelector, GuestSelector, GuestDetailsForm, EnquiryReview, EnquirySuccess
│   │   ├── contact/          # ContactForm, ContactInformation
│   │   └── ui/               # Button, Input, Textarea, Accordion, Lightbox, Badge
│   ├── context/
│   │   └── BookingModalContext.tsx
│   ├── data/
│   │   ├── hotel.ts          # Property info, phone, address, coordinates
│   │   ├── room.ts           # Deluxe room specifications and gallery
│   │   ├── facilities.ts     # Hotel amenities list
│   │   ├── faq.ts            # Categorized FAQs
│   │   └── testimonials.ts   # Guest reviews
│   ├── emails/               # React Email templates
│   ├── lib/
│   │   ├── booking/          # Enquiry processor and ID generator
│   │   ├── email/            # Resend mailer helper
│   │   ├── validation/       # Zod schemas (booking.ts, contact.ts)
│   │   └── utils.ts          # cn() and formatting utilities
│   └── types/                # Strict TypeScript interfaces
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have Node.js (v18.17+ or v20+) and `pnpm` installed:
```bash
node -v
pnpm -v
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your Resend API credentials:
```env
RESEND_API_KEY=re_your_api_key_here
HOTEL_EMAIL=reservations@hotelonamaste.com
FROM_EMAIL=Hotel Namastay <bookings@hotelonamaste.com>
```

> **Note:** If `RESEND_API_KEY` is not provided in development mode, the mailer runs in safe development simulation mode, logging the enquiry to console and allowing complete end-to-end testing of the UI and success flows.

### 4. Run Locally (Development)

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
pnpm build
pnpm start
```

---

## 📝 How to Update Hotel Content

All website content is centralized in `src/data/` for easy editing without touching components:

1. **Hotel Information & Contact Details:**  
   Edit `src/data/hotel.ts` to update hotel name, phone number, WhatsApp number, email address, address, or map embed link.
2. **Room Details & Pricing/Specs:**  
   Edit `src/data/room.ts` to adjust room name, bed configurations, maximum guest capacity, size, and in-room amenities.
3. **Gallery Photos:**  
   Place images in `public/images/room/` (e.g. `room-01.jpg`, `room-02.jpg`) and update the array in `src/data/room.ts`.
4. **Hotel Facilities:**  
   Edit `src/data/facilities.ts` to add or modify amenities and Lucide icon names.
5. **Frequently Asked Questions (FAQ):**  
   Edit `src/data/faq.ts` to add or update questions and categorize them.
6. **Guest Reviews:**  
   Edit `src/data/testimonials.ts` to curate guest testimonials.

---

## 🚢 Deployment

The project is optimized for zero-config deployment on Vercel or any modern Node.js host:

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Add the environment variables (`RESEND_API_KEY`, `HOTEL_EMAIL`, `FROM_EMAIL`) in the Vercel Project Settings.
4. Deploy!

---

## 📜 License

© 2026 Hotel Namastay. All rights reserved.
