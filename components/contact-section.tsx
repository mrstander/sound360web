import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Get in <span className="text-gray-600">Touch</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to make your event unforgettable? Contact us today for a free consultation and custom quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className="w-full rounded-xl border-gray-300 focus:border-sound360 focus:ring-sound360 bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className="w-full rounded-xl border-gray-300 focus:border-sound360 focus:ring-sound360 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border-gray-300 focus:border-sound360 focus:ring-sound360 bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full rounded-xl border-gray-300 focus:border-sound360 focus:ring-sound360 bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    className="w-full rounded-xl border-gray-300 focus:border-sound360 focus:ring-sound360 p-3 bg-white"
                  >
                    <option value="">Select Event Type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="concert">Concert/Festival</option>
                    <option value="conference">Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                    Services Needed
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 accent-sound360" />
                      <span className="text-sm">Professional Audio</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 accent-sound360" />
                      <span className="text-sm">Stage Lighting</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 accent-sound360" />
                      <span className="text-sm">Visual Solutions</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 accent-sound360" />
                      <span className="text-sm">Event Production</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full rounded-xl border-gray-300 focus:border-sound360 focus:ring-sound360 bg-white"
                    placeholder="Tell us about your event requirements, venue details, expected attendance, and any specific needs..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-sound360 hover:bg-sound360-dark text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-sound360/20 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-sound360" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-white/90">067 111 4362</p>
                      <p className="text-sm text-white/70">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-sound360/20 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-sound360" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-white/90">info@sound360.co.za</p>
                      <p className="text-sm text-white/70">We'll respond within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-sound360/20 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-sound360" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Service Area</h4>
                      <p className="text-white/90">Nationwide Coverage</p>
                      <p className="text-sm text-white/70">Based in Johannesburg, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-sound360/20 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-sound360" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-white/90">Mon - Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-sm text-white/70">Weekend events by appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gray-100 border border-gray-200 rounded-3xl p-8">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 text-sound360 mr-3" />
                  <h4 className="text-xl font-bold text-black">Quick Response Guarantee</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We understand that event planning is time-sensitive. That's why we guarantee a response to all
                  inquiries within 2 hours during business hours, and within 24 hours on weekends.
                </p>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
                <h4 className="text-xl font-bold text-red-800 mb-4">Emergency Support</h4>
                <p className="text-red-700 leading-relaxed mb-4">
                  For urgent technical support during events, our emergency hotline is available 24/7.
                </p>
                <a
                  href="tel:+27671114362"
                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 067 111 4362
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
