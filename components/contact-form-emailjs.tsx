"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle } from "lucide-react"

export function ContactFormEmailJS() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const eventType = formData.get("eventType") as string
    const message = formData.get("message") as string

    // Get selected services
    const services = []
    if (formData.get("audio")) services.push("Professional Audio")
    if (formData.get("lighting")) services.push("Stage Lighting")
    if (formData.get("visual")) services.push("Visual Solutions")
    if (formData.get("production")) services.push("Event Production")

    try {
      // Load EmailJS if not already loaded
      if (typeof window !== "undefined" && !window.emailjs) {
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        script.onload = () => {
          window.emailjs.init("YOUR_PUBLIC_KEY") // Replace with your EmailJS public key
        }
        document.head.appendChild(script)
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait for script to load
      }

      // Send email using EmailJS
      const result = await window.emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          phone: phone || "Not provided",
          event_type: eventType || "Not specified",
          services: services.length > 0 ? services.join(", ") : "Not specified",
          message: message,
          to_email: "info@sound360.co.za",
        },
      )

      if (result.status === 200) {
        setSubmitResult({
          success: true,
          message: "Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.",
        })
        // Reset form
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitResult({
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly at info@sound360.co.za",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-black mb-8">Send us a Message</h2>

      {/* Success/Error Message */}
      {submitResult && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-center ${
            submitResult.success
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {submitResult.success ? (
            <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
          )}
          <p className="text-sm">{submitResult.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
          />
        </div>

        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black p-3 bg-white"
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
              <input type="checkbox" name="audio" className="mr-2" />
              <span className="text-sm">Professional Audio</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="lighting" className="mr-2" />
              <span className="text-sm">Stage Lighting</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="visual" className="mr-2" />
              <span className="text-sm">Visual Solutions</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="production" className="mr-2" />
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
            name="message"
            required
            rows={4}
            className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black bg-white"
            placeholder="Tell us about your event requirements, venue details, expected attendance, and any specific needs..."
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}

// Extend the Window interface to include emailjs
declare global {
  interface Window {
    emailjs?: any
  }
}
