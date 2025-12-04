"use client"

import { Lordicon } from "./lordicon"

export function WhyChooseUs() {
  const reasons = [
    {
      iconSrc: "https://cdn.lordicon.com/fsstjlds.json",
      title: "Excellence, Every Time",
      description:
        "Driven by creativity and attention to detail, we go beyond expectations to deliver flawless, unforgettable events.",
    },
    {
      iconSrc: "https://cdn.lordicon.com/fozsorqm.json",
      title: "Seamless Service, Total Assurance",
      description:
        "Every detail is managed with care, giving you the confidence and peace of mind that your event is in expert hands.",
    },
    {
      iconSrc: "https://cdn.lordicon.com/rzgcaxjz.json",
      title: "Creativity in Action",
      description:
        "We don't just follow the script — we ask the right questions, push boundaries, and find smarter ways to create unforgettable experiences.",
    },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Why Choose SOUND360</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We don't just provide equipment – we deliver complete peace of mind with professional service that exceeds
              expectations every time.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Lordicon src={reason.iconSrc} trigger="hover" colors="primary:#fff,secondary:#0084d1" size={64} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-white/80 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
