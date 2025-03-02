"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Instagram } from "lucide-react"

export default function Contact() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitted: false, submitting: true, error: null })

    try {
      const response = await fetch("https://formspree.io/f/xzzdjnyg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus({ submitted: true, submitting: false, error: null })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await response.json()
        throw new Error(data.error || "Something went wrong")
      }
    } catch (error) {
      setFormStatus({
        submitted: false,
        submitting: false,
        error: error.message,
      })
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">primsajun24@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-400">+91 9500352168</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">TamilNadu,India</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-10 mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/prim-sajun" className="bg-primary/20 p-3 rounded-full hover:bg-primary/40 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </a>
              <a href="https://github.com/primsajun" className="bg-primary/20 p-3 rounded-full hover:bg-primary/40 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </a>
              
              
              <a href="https://instagram.com/sajunnnnnn" className="bg-primary/20 p-3 rounded-full hover:bg-primary/40 transition-colors">
                <Instagram className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>

          <div className="bg-black/40 rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>

            {formStatus.submitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-green-400">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="prim sajun"
                    required
                    className="bg-black/30 border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    className="bg-black/30 border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-black/30 border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="bg-black/30 border-gray-700 min-h-[120px]"
                  />
                </div>

                {formStatus.error && (
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-400">
                    <p>{formStatus.error}</p>
                  </div>
                )}

                <Button type="submit" className="w-full gap-2" disabled={formStatus.submitting}>
                  {formStatus.submitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

