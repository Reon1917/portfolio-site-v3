"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Loader2 } from "lucide-react"
import { sendEmail } from "@/app/actions"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendEmail(data)
      if (result.success) {
        setSubmitStatus("success")
        reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div 
      className="space-y-6"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      <motion.div className="space-y-2 text-center" variants={fadeInUp}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card className="border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Mail className="h-6 w-6" />
              Contact Form
            </CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <motion.div 
                className="space-y-2"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
              >
                <Input
                  placeholder="Your Name"
                  {...register("name")}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </motion.div>

              <motion.div 
                className="space-y-2"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
              >
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </motion.div>

              <motion.div 
                className="space-y-2"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
              >
                <Textarea
                  placeholder="Your Message"
                  {...register("message")}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </motion.div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <motion.p 
                  className="text-center text-sm text-green-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p 
                  className="text-center text-sm text-red-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Something went wrong. Please try again later.
                </motion.p>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
} 