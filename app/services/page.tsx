import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Volume2, Lightbulb, Monitor, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Professional Event Services - Audio, Lighting & Visual Solutions | Sound360",
  description:
    "Comprehensive event production services in Cape Town. Professional audio systems, stage lighting, LED displays, rigging, livestreaming, and complete event management solutions.",
  keywords: [
    "event services Cape Town",
    "professional audio rental",
    "stage lighting hire",
    "LED video walls",
    "event production services",
    "rigging and trussing",
    "livestreaming services",
    "corporate event production",
    "wedding services",
    "concert production",
    "visual solutions",
  ].join(", "),
  openGraph: {
    title: "Professional Event Services - Audio, Lighting & Visual Solutions | Sound360",
    description:
      "Comprehensive event production services in Cape Town. Professional audio, lighting, visual solutions and more.",
    url: "https://sound360.co.za/services",
    siteName: "Sound360",
    images: [
      {
        url: "/images/audio.jpeg",
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
    title: "Professional Event Services | Sound360",
    description:
      "Comprehensive event production services in Cape Town. Professional audio, lighting, visual solutions and more.",
    images: ["/images/audio.jpeg"],
  },
  alternates: {
    canonical: "https://sound360.co.za/services",
  },
}

export default function ServicesPage() {
  const services = [
    {
      name: "Professional Audio",
      icon: Volume2,
      description: "Crystal-clear sound systems, mixing consoles, and acoustic solutions for any venue size.",
      features: ["Digital Consol Mixing", "High quality Audio", "Wireless Microphones", "Recording & Playback"],
      image: "/images/audio2.jpg",
      href: "/services/audio",
      details:
        "From intimate presentations to large-scale concerts, our professional audio solutions ensure every word and note is heard with perfect clarity.",
    },
    {
      name: "Stage Lighting",
      icon: Lightbulb,
      description: "Dynamic lighting design that transforms your event with spectacular visual effects.",
      features: ["LED Moving Lights", "Intelligent Fixtures", "Haze & Fog Effects", "DMX Control Systems"],
      image: "/images/lighting/light1.jpg",
      href: "/services/lighting",
      details:
        "Create the perfect atmosphere with our cutting-edge lighting solutions, from subtle ambiance to dramatic stage productions.",
    },
    {
      name: "Visual Solutions",
      icon: Monitor,
      description: "High-resolution LED displays and projection systems for impactful visual presentations.",
      features: ["LED Video Walls", "Projection Mapping", "Live Camera Systems", "Content Management"],
      image: "/images/visual/visual2.jpg",
      href: "/services/visual",
      details:
        "Engage your audience with stunning visual displays, from corporate presentations to immersive brand experiences.",
    },
    {
      name: "Event Production",
      icon: Settings,
      description: "Complete event production including rigging, trussing, livestreaming, and power solutions.",
      features: ["Rigging & Trussing", "Livestreaming", "Power Distribution", "Project Management"],
      image: "/images/events/event1.jpg",
      href: "/services/production",
      details:
        "Full-service event production that handles every technical aspect, allowing you to focus on your event's success.",
    },
    {
      name: "Dance Floor",
      icon: Settings,
      description:
        "Create the perfect space with flooring to elevate your exhibition or dance the night away, often enhanced by lighting and effects to create the desired atmosphere.",
      features: ["LED Dance Floors", "Black and White", "Glossy Dance Floors", "Portable Dance Floors", "Underflooring"],
      image: "/images/dancefloor/dance1.jpg",
      href: "/services/dancefloor",
      details: "",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden bg-[url('/images/section-background.png')] bg-cover bg-cente">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Our <span className="text-sound360">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Comprehensive event production services designed to bring your vision to life with professional-grade
                equipment and expert execution.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-16">
                {services.map((service, index) => {
                  const Icon = service.icon
                  const isEven = index % 2 === 0
                  return (
                    <div
                      key={index}
                      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                    >
                      <div className={!isEven ? "lg:col-start-2" : ""}>
                        <div className="bg-sound360 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{service.name}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <p className="text-gray-700 mb-8 leading-relaxed">{service.details}</p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-sound360 rounded-full mr-3" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link href={service.href}>
                          <Button
                            variant="outline"
                            className="bg-black hover:bg-gray-800 text-white hover:text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Learn More
                          </Button>
                        </Link>
                      </div>

                      <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.name}
                            width={600}
                            height={450}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
