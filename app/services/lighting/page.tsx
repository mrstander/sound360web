import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function LightingPage() {
  const features = ["LED Moving Lights", "Intelligent Fixtures", "Haze & Fog Effects", "DMX Control Systems"]

  const galleryImages = [
    {
      src: "/images/lighting/light1.jpg",
      alt: "Professional stage lighting with colorful LED effects",
      title: "Concert Stage Lighting",
    },
    {
      src: "/images/lighting/light2.jpg",
      alt: "Elegant wedding venue lighting with warm ambiance",
      title: "Wedding Reception Lighting",
    },
    {
      src: "/images/lighting/light3.jpg",
      alt: "Corporate event lighting with professional spotlights",
      title: "Corporate Event Lighting",
    },
    
    {
      src: "/images/lighting/light5.jpg",
      alt: "Outdoor festival lighting with LED panels",
      title: "Festival Lighting Setup",
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
              alt="Professional Stage Lighting"
              fill
              className="object-cover filter grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-sound360/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Lightbulb className="w-10 h-10 text-sound360" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Stage Lighting</h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Dynamic lighting design that transforms your event with spectacular visual effects, creating the perfect
                atmosphere for any occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="bg-sound360 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Stage Lighting</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Dynamic lighting design that transforms your event with spectacular visual effects.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Create the perfect atmosphere with our cutting-edge lighting solutions, from subtle ambiance to
                    dramatic stage productions.
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
                      Get Lighting Quote
                    </Button>
                  </Link>
                </div>

                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/lighting/light4.jpg"
                    alt="Professional Lighting Setup"
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
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Lighting Setup Gallery</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our professional lighting installations that create stunning atmospheres for every type of
                  event.
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
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
