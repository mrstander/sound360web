import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Volume2, Mic, Speaker, Headphones, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Professional Audio Services - Sound Systems & Equipment Hire | Sound360 Cape Town",
  description:
    "Professional audio equipment rental in Cape Town. Digital mixing consoles, line array systems, wireless microphones, and complete sound solutions for events of all sizes.",
  keywords: [
    "professional audio Cape Town",
    "sound system rental",
    "audio equipment hire",
    "digital mixing console",
    "wireless microphones",
    "line array speakers",
    "corporate audio",
    "wedding sound systems",
    "concert audio",
    "event sound rental",
  ].join(", "),
  openGraph: {
    title: "Professional Audio Services | Sound360 Cape Town",
    description: "Professional audio equipment rental in Cape Town. Complete sound solutions for events of all sizes.",
    url: "https://sound360.co.za/services/audio",
    siteName: "Sound360",
    images: [
      {
        url: "/images/audio2.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional Audio Equipment - Sound360",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Audio Services | Sound360 Cape Town",
    description: "Professional audio equipment rental in Cape Town. Complete sound solutions for events of all sizes.",
    images: ["/images/audio.jpeg"],
  },
  alternates: {
    canonical: "https://sound360.co.za/services/audio",
  },
}

export default function AudioPage() {
  const equipment = [
    {
      name: "Digital Mixing Consoles",
      description: "State-of-the-art digital mixing boards for precise audio control",
      icon: Settings,
    },
    {
      name: "Line Array Systems",
      description: "Professional speaker arrays for large venue coverage",
      icon: Speaker,
    },
    {
      name: "Wireless Microphones",
      description: "High-quality wireless mic systems for freedom of movement",
      icon: Mic,
    },
    {
      name: "In-Ear Monitoring",
      description: "Professional monitoring systems for performers",
      icon: Headphones,
    },
  ]

  const applications = [
    "Corporate Conferences",
    "Wedding Ceremonies",
    "Product Launches",
    "Awards Ceremonies",
  ]

  const features = ["Digital Console Mixing", "High quality Audio", "Wireless Microphones", "Recording & Playback"]

  const galleryImages = [
    {
      src: "/images/sound360-gallery-item-01.webp",
      alt: "Professional audio setup on Cape Town rooftop with city views",
      title: "Rooftop Event Audio Setup",
    },
    {
      src: "/images/sound360-gallery-item-11.webp",
      alt: "Indoor event audio and lighting setup with dance floor",
      title: "Corporate Event Production",
    },
    {
      src: "/images/sound360-gallery-item-26.webp",
      alt: "Professional DJ setup with Table Mountain view in Cape Town",
      title: "Premium Venue Audio System",
    },
    {
      src: "/images/sound360-gallery-item-18.webp",
      alt: "Outdoor rooftop audio equipment with Cape Town skyline",
      title: "Outdoor Event Audio",
    },
    {
      src: "/images/sound360-gallery-item-19.webp",
      alt: "Vineyard event audio setup with scenic wine country backdrop",
      title: "Vineyard Event Audio",
    },
    {
      src: "/images/sound360-gallery-item-03.webp",
      alt: "Professional audio and lighting setup with LED dance floor",
      title: "Complete Audio & Lighting Package",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden bg-[url('/images/section-background.png')] bg-cover bg-center">
          <div className="absolute inset-0">
            <Image
              src="/images/section-background.png"
              alt="Professional Audio Console"
              fill
              className="object-cover filter grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-sound360/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Volume2 className="w-10 h-10 text-sound360" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Professional Audio</h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Crystal-clear sound systems and acoustic solutions that ensure every word and note is heard with perfect
                clarity, regardless of venue size or complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details Section - From Services Page */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="bg-sound360 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Volume2 className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Professional Audio</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Crystal-clear sound systems, mixing consoles, and acoustic solutions for any venue size.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    From intimate presentations to large-scale concerts, our professional audio solutions ensure every
                    word and note is heard with perfect clarity.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="bg-black hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                      Get Audio Quote
                    </Button>
                  </Link>
                </div>

                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/audio2.jpg"
                    alt="Professional Audio Setup"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Audio Setup Gallery</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our professional audio installations across Cape Town's most prestigious venues and events.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        

        

        
      </main>
      <Footer />
    </>
  )
}
