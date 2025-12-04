"use client"

import Image from "next/image"

export function LogoCarousel() {
  // Professional audio equipment brand logos
  const logos = [
    {
      name: "Samsung",
      src: "/images/samsung.png",
      width: 140,
      height: 100,
    },
    {
      name: "Samson",
      src: "/images/samson.png",
      width: 160,
      height: 60,
    },
    {
      name: "Allen & Heath",
      src: "/images/allen-heath.png",
      width: 180,
      height: 60,
    },
    {
      name: "EV (Electro-Voice)",
      src: "/images/ev.png",
      width: 80,
      height: 120,
    },
    {
      name: "Pioneer DJ",
      src: "/images/pioneer-dj.png",
      width: 200,
      height: 220,
    },
    {
      name: "Yamaha",
      src: "/images/yamaha.png",
      width: 160,
      height: 60,
    },
    {
      name: "RCF",
      src: "/images/rcf.jpeg",
      width: 100,
      height: 100,
    },
  ]

  // Triple the logos for seamless infinite scroll
  const infiniteLogos = [...logos, ...logos]

  return (
    <section className="py-5 bg-sound360 overflow-hidden">
      <div className="container mx-auto px-4">
       

        {/* Continuous Scrolling Logo Carousel */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sound360 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sound360 to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll-left space-x-8">
            {infiniteLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl p-6  transition-all duration-100 hover:scale-105 flex items-center justify-center min-h-[50px]"
                style={{ minWidth: "50px" }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} - Professional Audio Equipment`}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
