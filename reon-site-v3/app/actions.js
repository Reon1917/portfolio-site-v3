"use server"

import { Resend } from "resend"
import ContactFormEmail from "@/components/emails/ContactFormEmail"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData) {
  const senderEmail = formData.email
  const message = formData.message
  const name = formData.name

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "linmyatphyo03@gmail.com", // Replace with your email
      subject: "New Contact Form Message",
      reply_to: senderEmail,
      react: ContactFormEmail({
        name,
        email: senderEmail,
        message,
      }),
    })

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    }
  }
} 