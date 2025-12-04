"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Corporate Events SA",
      role: "Event Director",
      content:
        "Sound360 transformed our annual conference with their exceptional audio-visual setup. The team's professionalism and attention to detail made our event truly memorable. Highly recommended!",
      rating: 5,
      image: "/images/client-testimonial-1.png",
    },
    {
      name: "Michael Chen",
      company: "Festival Productions",
      role: "Production Manager",
      content:
        "Working with Sound360 for our music festival was incredible. Their lighting design and sound quality exceeded all expectations. The technical expertise of their team is unmatched.",
      rating: 5,
      image: "/images/client-testimonial-2.png",
    },
    {
      name: "Lisa Williams",
      company: "Luxury Weddings",
      role: "Wedding Planner",
      content:
        "Sound360 made our client's dream wedding come true with stunning lighting and crystal-clear audio. Their team worked seamlessly with our schedule and delivered perfection.",
      rating: 5,
      image: "/images/client-testimonial-3.png",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Client <span className="text-gray-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it – hear what our clients say about their experience with Sound360
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-12 relative overflow-hidden shadow-xl border border-gray-100">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote className="w-16 h-16 text-sound360" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-sound360 text-sound360" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover filter grayscale"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-black text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                    <div className="text-gray-800 font-medium">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-sound360 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
