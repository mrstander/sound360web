"use server"

export async function submitContactFormEmailJS(formData: FormData) {
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
    // Using EmailJS API directly (free tier: 200 emails/month)
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        template_id: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        user_id: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
        template_params: {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          phone: phone || "Not provided",
          event_type: eventType || "Not specified",
          services: services.length > 0 ? services.join(", ") : "Not specified",
          message: message,
          to_email: "info@sound360.co.za",
        },
      }),
    })

    if (response.ok) {
      return {
        success: true,
        message: "Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.",
      }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again or contact us directly at info@sound360.co.za",
    }
  }
}
