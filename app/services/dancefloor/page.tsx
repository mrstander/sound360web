import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function DancefloorPage() {
  const features = ["LED Dance Floors", "Black and White", "Glossy Dance Floors", "Portable Dance Floors", "Underflooring"]

  const galleryImages = [
    {
      src: "/images/dancefloor/dance1.jpg ",
      alt: "Elegant LED dance floor at wedding reception",
      title: "Wedding LED Dance Floor",
    },
    {
      src: "/images/dancefloor/dance2.jpg ",
      alt: "Corporate event dance floor with lighting",
      title: "Corporate Event Dance Floor",
    },
    {
      src: "/images/dancefloor/dance3.jpg ",
      alt: "Interactive LED dance floor with patterns",
      title: "Interactive LED Floor",
    },
    {
      src: "/images/dancefloor/dance4.jpg ",
      alt: "Modular dance floor at outdoor event",
      title: "Outdoor Event Dance Floor",
    },
    {
      src: "/images/dancefloor/dance5.jpg ",
      alt: "Luxury dance floor with ambient lighting",
      title: "Luxury Dance Floor Setup",
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
              alt="Professional Dance Floor"
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Dance Floor</h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Create the perfect space with premium flooring solutions to elevate your exhibition or dance the night
                away, often enhanced by lighting and effects to create the desired atmosphere.
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
                    <Volume2 className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Dance Floor</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Create the perfect space with flooring to elevate your exhibition or dance the night away, often
                    enhanced by lighting and effects to create the desired atmosphere.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our premium dance floor solutions combine professional flooring with integrated lighting and sound
                    systems to create unforgettable experiences.
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
                      Get Dance Floor Quote
                    </Button>
                  </Link>
                </div>

                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/dancefloor/dance1.jpg"
                    alt="Professional Dance Floor Setup"
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
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Dance Floor Gallery</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our premium dance floor installations that create the perfect atmosphere for celebration.
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
