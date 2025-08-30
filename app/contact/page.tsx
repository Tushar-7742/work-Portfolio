"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle, Instagram, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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
    setIsSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent animate-pulse">
              Tushar Parihar
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Let's Create
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8 animate-pulse"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Ready to bring your vision to life? I'm here to help you create stunning designs that make an impact.
              Let's discuss your project and turn your ideas into reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              <Card className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
                <CardContent className="p-8">
                  {isSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                      <p className="text-white/70">Thank you for reaching out! I'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Send Me a Message</h2>
                        <p className="text-white/70">Fill out the form below and I'll respond as soon as possible.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-white font-medium mb-2">
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-white font-medium mb-2">
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-white font-medium mb-2">
                            Subject *
                          </label>
                          <Input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="What's this about?"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-white font-medium mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                            placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Email Address</h3>
                        <p className="text-white/70">tushar.24jibca003@jietjodhpur.ac.in</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Phone Number</h3>
                        <p className="text-white/70">+91 7737297548</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Location</h3>
                        <p className="text-white/70">Jodhpur, Rajasthan, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/design_by_tush"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://linkedin.com/in/tushar-parihar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://wa.me/917737297548"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300"
                    >
                      <MessageCircle className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="text-white font-semibold">Available for New Projects</h3>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    I'm currently accepting new design projects and collaborations.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/60">
                      <span>Response Time:</span>
                      <span className="text-green-400">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Project Start:</span>
                      <span className="text-blue-400">1-2 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
