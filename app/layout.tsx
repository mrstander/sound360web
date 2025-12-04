import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sound360 - Professional Audio, Lighting & Visual Solutions | South Africa",
  description:
    "Expert sound, lighting, and visual solutions for events in South Africa. Professional audio equipment, stage lighting, rigging, livestreaming, and complete event production services.",
  keywords:
    "sound equipment, lighting, audio visual, event production, rigging, trussing, livestreaming, South Africa, professional audio, stage lighting, event services",
  authors: [{ name: "Sound360" }],
  creator: "Sound360",
  publisher: "Sound360",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sound360.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sound360 - Professional Audio, Lighting & Visual Solutions",
    description:
      "Expert sound, lighting, and visual solutions for events in South Africa. Professional audio equipment, stage lighting, rigging, livestreaming, and complete event production services.",
    url: "https://sound360.co.za",
    siteName: "Sound360",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sound360 Professional Event Services",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sound360 - Professional Audio, Lighting & Visual Solutions",
    description: "Expert sound, lighting, and visual solutions for events in South Africa.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sound360",
              description: "Professional audio, lighting, and visual solutions for events",
              url: "https://sound360.co.za",
              telephone: "+27671114362",
              email: "info@sound360.co.za",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.2041,
                longitude: 28.0473,
              },
              openingHours: "Mo-Fr 08:00-17:00",
              priceRange: "$$",
              serviceArea: {
                "@type": "Country",
                name: "South Africa",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Event Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Professional Audio Services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Stage Lighting Solutions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Visual & LED Displays",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rigging & Trussing",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}
