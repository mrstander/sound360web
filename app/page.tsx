import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Sound360 - Professional Audio, Lighting & Visual Solutions | Cape Town",
  description:
    "Cape Town's premier event production company. Professional audio systems, stage lighting, LED displays, rigging, and complete event management services across South Africa.",
  keywords: [
    "event production Cape Town",
    "professional audio rental",
    "stage lighting South Africa",
    "LED video walls",
    "event management",
    "sound equipment hire",
    "lighting design",
    "corporate events",
    "wedding production",
    "concert production",
    "Sound360",
  ].join(", "),
  openGraph: {
    title: "Sound360 - Professional Event Production | Cape Town",
    description:
      "Cape Town's premier event production company specializing in professional audio, lighting, and visual solutions.",
    url: "https://sound360.co.za",
    siteName: "Sound360",
    images: [
      {
        url: "/images/hero1.webp",
        width: 1200,
        height: 630,
        alt: "Sound360 Professional Event Production Services",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sound360 - Professional Event Production | Cape Town",
    description:
      "Cape Town's premier event production company specializing in professional audio, lighting, and visual solutions.",
    images: ["/images/hero1.webp"],
  },
  alternates: {
    canonical: "https://sound360.co.za",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LogoCarousel />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}
