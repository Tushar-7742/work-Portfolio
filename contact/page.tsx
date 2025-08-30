"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Instagram,
  Linkedin,
  Clock,
  CheckCircle,
  User,
  MessageSquare,
  LogIn,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleSocialRedirect = (platform: string) => {
    const links = {
      whatsapp: "https://wa.me/917737297548?text=Hi%20Tushar!%20I'd%20love%20to%20discuss%20a%20project%20with%20you.",
      instagram: "https://instagram.com/design_by_tush",
      mail: "mailto:tushar.24jibca003@jietjodhpur.ac.in?subject=Project%20Inquiry&body=Hi%20Tushar,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%0A%0ABest%20regards",
      linkedin: "https://www.linkedin.com/in/tushar-parihar",
    }
    window.open(links[platform as keyof typeof links], "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900/20 to-slate-900 relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Tushar Parihar
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              Get In
              <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-8 animate-pulse"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to bring your creative vision to life? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Send Me a Message</h2>
                  <p className="text-white/70">Fill out the form below and I'll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-white/70">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Tell me about your project or inquiry..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Email</h3>
                        <p className="text-white/70">tushar.24jibca003@jietjodhpur.ac.in</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Phone</h3>
                        <p className="text-white/70">+91 7737297548</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Location</h3>
                        <p className="text-white/70">Jodhpur, Rajasthan, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="text-white font-semibold text-lg">Currently Available</h3>
                  </div>
                  <p className="text-white/70 mb-4">
                    I'm actively taking on new projects and collaborations. Let's create something amazing together!
                  </p>
                  <div className="flex items-center gap-2 text-white/60">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Response time: Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold text-lg mb-4">Connect on Social Media</h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleSocialRedirect("instagram")}
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                    >
                      <Instagram className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleSocialRedirect("linkedin")}
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                    >
                      <Linkedin className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleSocialRedirect("whatsapp")}
                      className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleSocialRedirect("mail")}
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                    >
                      <Mail className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <h3 className="text-white font-semibold text-lg mb-4">Need a Quick Response?</h3>
                  <p className="text-white/70 mb-4">
                    For urgent inquiries or quick questions, WhatsApp is the fastest way to reach me.
                  </p>
                  <button
                    onClick={() => handleSocialRedirect("whatsapp")}
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Message on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked
                <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Here are some common questions about working with me and my design process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl blur-lg"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                    <h3 className="text-white font-semibold text-lg mb-3">What's your typical project timeline?</h3>
                    <p className="text-white/70">
                      Project timelines vary based on complexity, but most branding projects take 1-2 weeks, while
                      larger campaigns can take 3-4 weeks. I always provide detailed timelines upfront.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-lg"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                    <h3 className="text-white font-semibold text-lg mb-3">Do you work with international clients?</h3>
                    <p className="text-white/70">
                      I work with clients worldwide and am comfortable with different time zones. All communication is
                      handled digitally for seamless collaboration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                    <h3 className="text-white font-semibold text-lg mb-3">What's included in your design packages?</h3>
                    <p className="text-white/70">
                      Each package includes initial concepts, revisions, final files in multiple formats, and a style
                      guide. I also provide ongoing support for any questions after delivery.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                    <h3 className="text-white font-semibold text-lg mb-3">How do you handle revisions?</h3>
                    <p className="text-white/70">
                      I include up to 3 rounds of revisions in all projects. Additional revisions can be accommodated if
                      needed. I believe in getting your vision just right!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
