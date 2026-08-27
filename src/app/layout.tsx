import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { BookingModalProvider } from "@/context/BookingModalContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { Toaster } from "sonner";
import { hotel } from "@/data/hotel";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelonamaste.com"),
  title: {
    default: "Hotel O Namaste | Comfortable Stay & Direct Booking in Bhiwadi",
    template: "%s | Hotel O Namaste",
  },
  description:
    "Discover Hotel O Namaste — a serene stay with comfortable rooms, thoughtful facilities, and personal hospitality in Bhiwadi, Rajasthan.",
  keywords: [
    "Hotel O Namaste",
    "Bhiwadi Hotel",
    "Boutique Hotel Rajasthan",
    "Deluxe Room Bhiwadi",
    "Hotel Booking Bhiwadi",
    "Hotel O Namastay",
  ],
  authors: [{ name: "Hotel O Namaste" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hotelonamaste.com",
    siteName: "Hotel O Namaste",
    title: "Hotel O Namaste | Stay Comfortably. Feel at Home.",
    description:
      "A comfortable stay, thoughtful facilities, and personal hospitality — all in one place in Bhiwadi, Rajasthan.",
    images: [
      {
        url: "/images/hotel/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel O Namaste Boutique Hotel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel O Namaste | Stay Comfortably. Feel at Home.",
    description:
      "A comfortable stay, thoughtful facilities, and personal hospitality in Bhiwadi, Rajasthan.",
    images: ["/images/hotel/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description: hotel.shortDescription,
    image: "https://hotelonamaste.com/images/hotel/hero-bg.jpg",
    telephone: hotel.phone,
    email: hotel.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address,
      addressLocality: hotel.locality,
      addressRegion: hotel.state,
      postalCode: hotel.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotel.latitude,
      longitude: hotel.longitude,
    },
    numberOfRooms: hotel.totalRooms,
    checkinTime: "12:00",
    checkoutTime: "11:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-Hour Front Desk", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot Water Geyser", value: true },
      { "@type": "LocationFeatureSpecification", name: "Power Backup", value: true },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col font-sans bg-[#f6faf6] text-[#181d1b] antialiased selection:bg-[#c5ebdb] selection:text-[#00513e]"
      >
        <BookingModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BookingModal />
          <CustomCursor />
          <StickyMobileCTA />
          <Toaster position="top-right" richColors theme="light" />
        </BookingModalProvider>
      </body>
    </html>
  );
}
