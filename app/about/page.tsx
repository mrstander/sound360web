import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhyChooseUs } from "@/components/why-choose-us"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Sound360 - Cape Town's Premier Event Production Company",
  description:
    "Learn about Sound360's journey since 2009. We're Cape Town's trusted event production specialists, delivering professional audio, lighting, and visual solutions across South Africa.",
  keywords: [
    "about Sound360",
    "event production company Cape Town",
    "professional audio specialists",
    "lighting design experts",
    "South African event services",
    "corporate event production",
    "wedding specialists",
    "concert production",
  ].join(", "),
  openGraph: {
    title: "About Sound360 - Cape Town's Premier Event Production Company",
    description: "Learn about Sound360's journey since 2009. Cape Town's trusted event production specialists.",
    url: "https://sound360.co.za/about",
    siteName: "Sound360",
    images: [
      {
        url: "/images/hero1.webp",
        width: 1200,
        height: 630,
        alt: "Sound360 Team - Professional Event Production",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sound360 - Cape Town's Premier Event Production Company",
    description: "Learn about Sound360's journey since 2009. Cape Town's trusted event production specialists.",
    images: ["/images/hero1.webp"],
  },
  alternates: {
    canonical: "https://sound360.co.za/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden bg-[url('/images/section-background.png')] bg-cover bg-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                About <span className="text-sound360">Sound360</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                We are South Africa's premier provider of professional audio, lighting, and visual solutions,
                transforming events with cutting-edge technology and unmatched expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Story</h2>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Founded in 2009, Sound360 began as a small audio rental company with a big vision: to transform
                      events across South Africa with professional-grade equipment and exceptional service.
                    </p>
                    <p>
                      Over the years, we've grown from a two-person operation to a full-service event production
                      company, expanding our capabilities to include lighting design, visual solutions, and complete
                      event production services.
                    </p>
                    <p>
                      Today, we're proud to have worked on over 500 events, from intimate corporate gatherings to
                      large-scale festivals, always maintaining our commitment to excellence and innovation.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/audio2.jpg"
                      alt="Sound360 team setting up professional event equipment"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}
