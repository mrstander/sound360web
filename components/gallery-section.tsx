"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "audio", name: "Audio Systems" },
    { id: "lighting", name: "Lighting Design" },
    { id: "events", name: "Live Events" },
    { id: "corporate", name: "Corporate" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "audio",
      title: "Professional Audio Mixing Console",
      description: "State-of-the-art digital mixing setup for corporate conference",
      image: "/images/audio-console.png",
    },
    {
      id: 2,
      category: "lighting",
      title: "Concert Stage Lighting",
      description: "Dynamic LED lighting design for music festival main stage",
      image: "/images/stage-lighting.png",
    },
    {
      id: 3,
      category: "events",
      title: "Corporate Event Production",
      description: "Complete AV setup for product launch event",
      image: "/images/event-crowd.png",
    },
    {
      id: 4,
      category: "lighting",
      title: "Atmospheric Lighting Effects",
      description: "Immersive lighting environment for gala dinner",
      image: "/images/stage-lighting.png",
    },
    {
      id: 5,
      category: "audio",
      title: "Line Array Sound System",
      description: "Large-scale audio deployment for outdoor festival",
      image: "/images/audio-console.png",
    },
    {
      id: 6,
      category: "corporate",
      title: "Conference AV Setup",
      description: "Multi-screen presentation system for international conference",
      image: "/images/led-wall.png",
    },
    {
      id: 7,
      category: "events",
      title: "Wedding Reception Lighting",
      description: "Romantic lighting design for luxury wedding venue",
      image: "/images/dancefloor.png",
    },
    {
      id: 8,
      category: "lighting",
      title: "Architectural Lighting",
      description: "Building facade illumination for grand opening event",
      image: "/images/rigging-setup.png",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Our <span className="text-gray-600">Portfolio</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Explore our recent projects showcasing professional event production across South Africa
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-sound360 text-white shadow-lg hover:bg-sound360-dark"
                      : "hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-sound360 hover:bg-sound360-dark text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
