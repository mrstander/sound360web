"use server"

export async function submitContactForm(formData: FormData) {
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
    // Using EmailJS API with your credentials
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_lymqut7",
        template_id: "template_grwciu9",
        user_id: "bg5HZVouxshZhoXg_",
        template_params: {
          from_name: `${firstName} ${lastName}`,
          first_name: firstName,
          last_name: lastName,
          from_email: email,
          phone: phone || "Not provided",
          event_type: eventType || "Not specified",
          services: services.length > 0 ? services.join(", ") : "Not specified",
          message: message,
          to_email: "info@sound360.co.za",
          reply_to: email,
          // Additional template variables you can use
          full_message: `
Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || "Not provided"}

Event Details:
- Event Type: ${eventType || "Not specified"}
- Services Needed: ${services.length > 0 ? services.join(", ") : "Not specified"}

Message:
${message}

---
Submitted from Sound360 website contact form
          `.trim(),
        },
      }),
    })

    if (response.ok) {
      return {
        success: true,
        message: "Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.",
      }
    } else {
      const errorData = await response.text()
      console.error("EmailJS Error:", errorData)
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
