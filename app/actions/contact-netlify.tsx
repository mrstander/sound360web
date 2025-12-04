"use server"

export async function submitContactFormNetlify(formData: FormData) {
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

  const emailContent = `
New Contact Form Submission - Sound360

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
  `.trim()

  try {
    // Using Netlify Forms (if deployed on Netlify - completely free)
    const response = await fetch("/__forms.html", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "form-name": "contact",
        name: `${firstName} ${lastName}`,
        email: email,
        phone: phone || "",
        eventType: eventType || "",
        services: services.join(", "),
        message: message,
      }).toString(),
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
