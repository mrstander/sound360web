"use client"

import { useState } from "react"
import { X } from "lucide-react"

// WhatsApp SVG Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
      <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.255 1.408 1.408-5.248-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.957 0-7.51 6.123-13.632 13.632-13.632s13.632 6.123 13.632 13.632c0 7.51-6.123 13.467-13.632 13.467zM21.867 18.267c-0.307-0.153-1.807-0.893-2.087-0.997-0.28-0.103-0.485-0.153-0.69 0.153s-0.793 0.997-0.972 1.203c-0.178 0.205-0.357 0.230-0.663 0.077s-1.295-0.478-2.465-1.523c-0.91-0.812-1.527-1.815-1.705-2.122s-0.020-0.472 0.135-0.625c0.138-0.135 0.307-0.357 0.460-0.537 0.153-0.178 0.205-0.307 0.307-0.512s0.052-0.383-0.025-0.537c-0.077-0.153-0.69-1.663-0.947-2.278-0.255-0.613-0.510-0.512-0.69-0.512s-0.383-0.025-0.588-0.025c-0.205 0-0.537 0.077-0.818 0.383s-1.070 1.045-1.070 2.555c0 1.508 1.095 2.965 1.248 3.17s2.14 3.272 5.185 4.587c0.723 0.307 1.288 0.512 1.728 0.665 0.728 0.230 1.387 0.197 1.91 0.120 0.587-0.088 1.807-0.740 2.063-1.455s0.255-1.327 0.178-1.455c-0.077-0.153-0.28-0.230-0.588-0.383z" />
    </svg>
  )
}

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  // Sound360's WhatsApp number (replace with actual number)
  const whatsappNumber = "27671114362" // Format: country code + number without +

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi Sound360! I'm interested in your event production services. Could you please provide more information?",
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chat Preview Bubble */}
          {isOpen && (
            <div className="absolute bottom-20 right-0 mb-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
              {/* Header */}
              <div className="bg-[#0b92e0] text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sound360</h3>
                    <p className="text-xs opacity-90">Typically replies instantly</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Message Content */}
              <div className="p-4 space-y-4">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                  <p className="text-sm text-gray-800">👋 Hi there! Welcome to SOUND360 Whatsapp channel!</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#0b92e0] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#0b92e0] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Start Chat on WhatsApp</span>
                </button>

                {/* Quick Options */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-medium">Quick Questions:</p>
                  <div className="space-y-1">
                    {[
                      "💰 Get a quote",
                      "🎵 Audio services",
                      "💡 Lighting design",
                      "📺 Visual solutions",
                      "🎪 Event production",
                    ].map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const message = encodeURIComponent(`Hi Sound360! I'd like to know more about: ${option}`)
                          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
                          window.open(whatsappUrl, "_blank")
                        }}
                        className="w-full text-left text-sm text-gray-600 hover:text-[#0b92e0] hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main WhatsApp Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="whatsapp-button bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl hover:bg-[#20B954] transition-all duration-300 hover:scale-110 flex items-center justify-center group relative overflow-hidden"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-8 h-8 relative z-10" />

            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>

            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes whatsapp-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .whatsapp-button:hover {
          animation: whatsapp-pulse 1s ease-in-out infinite;
        }

        .whatsapp-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .whatsapp-button:hover::before {
          left: 100%;
        }
      `}</style>
    </>
  )
}
