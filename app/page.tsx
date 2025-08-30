"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Download,
  Star,
  Quote,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Heart,
  Eye,
  Lightbulb,
  Award,
  Instagram,
  MessageCircle,
  Calendar,
  CheckCircle,
  Grid3X3,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react"
import Link from "next/link"

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay"

export default function DesignerPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const SoftwareIcon = ({
    name,
    svgPath,
    fallbackIcon,
  }: { name: string; svgPath?: string; fallbackIcon: React.ReactNode }) => {
    // If you have a real SVG file path, use it
    if (svgPath) {
      return (
        <img
          data-src={svgPath || "/placeholder.svg"}
          alt={`${name} logo`}
          className="lazyload w-10 h-10 object-contain"
        />
      )
    }

    // Otherwise use the fallback custom icon
    return <>{fallbackIcon}</>
  }

const skills = [
    {
      name: "Photoshop",
      icon: (
        <SoftwareIcon
          name="Photoshop"
          svgPath="/svg/adobe-photoshop-icon.svg"
          fallbackIcon={
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg relative">
              <div className="absolute inset-1 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md flex items-center justify-center">
                Ps
              </div>
            </div>
          }
        />
      ),
      level: 95,
      color: "from-blue-400 to-indigo-400",
      description: "Photo manipulation & digital art",
      projects: "100+ Designs",
      category: "Adobe Creative Suite",
    },
    {
      name: "Illustrator",
      icon: (
        <SoftwareIcon
          name="Illustrator"
          svgPath="/svg/adobe-illustrator-icon.svg"
          fallbackIcon={
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg relative">
              <div className="absolute inset-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md flex items-center justify-center">
                Ai
              </div>
            </div>
          }
        />
      ),
      level: 72,
      color: "from-orange-400 to-pink-400",
      description: "Vector graphics & logo design",
      projects: "50+ Logos",
      category: "Adobe Creative Suite",
    },
    {
      name: "Canva",
      icon: (
        <SoftwareIcon
          name="Canva"
          svgPath="/svg/canva-icon.svg"
          fallbackIcon={
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg relative">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm"></div>
              </div>
            </div>
          }
        />
      ),
      level: 90,
      color: "from-cyan-400 to-blue-500",
      description: "Quick design & social media graphics",
      projects: "200+ Graphics",
      category: "Design Platform",
    },
    {
      name: "After Effects",
      icon: (
        <SoftwareIcon
          name="After Effects"
          svgPath="/svg/adobe-after-effects-icon.svg"
          fallbackIcon={
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg relative">
              <div className="absolute inset-1 bg-gradient-to-br from-purple-500 to-purple-700 rounded-md flex items-center justify-center">
                Ae
              </div>
            </div>
          }
        />
      ),
      level: 40,
      color: "from-purple-400 to-pink-400",
      description: "Motion graphics & animations",
      projects: "20+ Animations",
      category: "Adobe Creative Suite",
    },
    {
      name: "CorelDraw",
      icon: (
        <SoftwareIcon
          name="CorelDraw"
          svgPath="/svg/icons8-corel-draw.svg"
          fallbackIcon={
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg relative">
              <div className="absolute inset-1 bg-gradient-to-br from-red-500 to-red-700 rounded-md flex items-center justify-center">
                CD
              </div>
            </div>
          }
        />
      ),
      level: 60,
      color: "from-red-400 to-pink-400",
      description: "Vector design & illustrations",
      projects: "50+ Designs",
      category: "Design Software",
    },
    {
      name: "Figma",
      icon: (
        <SoftwareIcon
          name="Figma"
          svgPath="/svg/figma-icon.svg"
          fallbackIcon={
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden">
              <div className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            </div>
          }
        />
      ),
      level: 50,
      color: "from-emerald-400 to-teal-400",
      description: "UI/UX design & prototyping",
      projects: "30+ Prototypes",
      category: "Design Tool",
    },
    {
      name: "Blender",
      icon: (
        <SoftwareIcon
          name="Blender"
          svgPath="/svg/blender-icon.svg"
          fallbackIcon={
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg relative">
              <div className="absolute inset-1 bg-gradient-to-br from-orange-400 to-blue-500 rounded-md flex items-center justify-center">
                3D
              </div>
            </div>
          }
        />
      ),
      level: 30,
      color: "from-orange-400 to-blue-400",
      description: "3D modeling & rendering",
      projects: "10+ Models",
      category: "3D Software",
    },
  ]

  const projects = [
    {
      
      image: "projects/8.png",
      color: "from-gray-400 to-slate-400",
    },
    {
      
      image: "projects/30.jpg",
      color: "from-orange-400 to-red-400",
    },
    {
      
      image: "projects/12.png",
      color: "from-red-400 to-pink-400",
    },
    {
      
      image: "projects/17.png",
      color: "from-red-400 to-orange-400",
    },
    
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Event Manager, MPS MUN",
      image: "/placeholder.svg?height=100&width=100",
      text: "Tushar's design work for our MUN event was exceptional. He managed to create visuals that perfectly captured the essence of our event and helped us achieve record attendance.",
      rating: 5,
      color: "from-pink-400 to-rose-400",
      company: "MPS MUN Chapter 3",
    },
    {
      name: "Priya Sharma",
      role: "Creative Director, Pixlaytix",
      image: "/placeholder.svg?height=100&width=100",
      text: "Working with Tushar has been incredible. His attention to detail and creative vision consistently delivers outstanding results for our clients.",
      rating: 5,
      color: "from-blue-400 to-indigo-400",
      company: "Pixlaytix Digital Solutions",
    },
    {
      name: "Amit Verma",
      role: "Event Coordinator, JIET",
      image: "/placeholder.svg?height=100&width=100",
      text: "Tushar's work on Resonance 2k25 was phenomenal. He created visual elements that perfectly matched the scale and energy of our event.",
      rating: 5,
      color: "from-purple-400 to-pink-400",
      company: "JIET Universe",
    },
    {
      name: "Neha Gupta",
      role: "Marketing Head, Local Business",
      image: "/placeholder.svg?height=100&width=100",
      text: "The branding materials Tushar created for our social media campaigns significantly improved our engagement and brand recognition.",
      rating: 5,
      color: "from-emerald-400 to-teal-400",
      company: "Digital Marketing Agency",
    },
    {
      name: "Vikram Singh",
      role: "Restaurant Owner",
      image: "/placeholder.svg?height=100&width=100",
      text: "The menu design and branding package Tushar created transformed our restaurant's image. Customer feedback has been overwhelmingly positive.",
      rating: 5,
      color: "from-orange-400 to-red-400",
      company: "Singh's Kitchen",
    },
    {
      name: "Anita Desai",
      role: "Fashion Brand Founder",
      image: "/placeholder.svg?height=100&width=100",
      text: "Tushar's creative vision brought our fashion brand to life. His designs perfectly captured our aesthetic and helped us stand out in the market.",
      rating: 5,
      color: "from-violet-400 to-purple-400",
      company: "Desai Couture",
    },
    {
      name: "Rohit Mehta",
      role: "Tech Startup CEO",
      image: "/placeholder.svg?height=100&width=100",
      text: "The logo and brand identity Tushar designed for our startup perfectly represents our innovative spirit. It's been instrumental in our growth.",
      rating: 5,
      color: "from-cyan-400 to-blue-400",
      company: "TechFlow Solutions",
    },
    {
      name: "Kavya Patel",
      role: "Wedding Planner",
      image: "/placeholder.svg?height=100&width=100",
      text: "Tushar's wedding invitation designs are absolutely stunning. Every couple loves the elegant and personalized touch he brings to their special day.",
      rating: 5,
      color: "from-rose-400 to-pink-400",
      company: "Dream Weddings",
    },
  ]

    const certificates = [
    {
      name: "Blender Essential: From Beginner to 3D Masterclass",
      image: "/certificates/blender.jpg",
      color: "from-orange-400 to-blue-400",
      issuer: "Udemy - Learnify IT",
      year: "2024",
      description: "Comprehensive 3D modeling and rendering certification",
      credentialId: "UC-93865d45-80f5-427a-94e7-89410c86042f",
      validUntil: "Lifetime",
      skills: ["3D Modeling", "Rendering", "Animation", "Blender"],
    },
    {
      name: "UI/UX Design Masterclass with Adobe XD",
      image:"/certificates/ui ux.jpg",
      color: "from-blue-400 to-indigo-400",
      issuer: "Udemy - James Joab Soren",
      year: "2024",
      description: "From Beginner to Pro UI/UX design methodology",
      credentialId: "UC-12b7cede-4ebc-4010-89de-989cba2738ba",
      validUntil: "Lifetime",
      skills: ["UI Design", "UX Design", "Adobe XD", "Prototyping"],
    },
    {
      name: "Professional Diploma in Social Media Marketing",
      image: "/certificates/social Media Marketing.jpg",
      color: "from-pink-400 to-purple-400",
      issuer: "Udemy - MTF Institute",
      year: "2025",
      description: "Social Media Marketing & Management certification",
      credentialId: "UC-c5ecc743-5086-4a52-8245-8fdfe0c686d3",
      validUntil: "Lifetime",
      skills: ["Social Media Marketing", "Content Strategy", "Campaign Management", "Analytics"],
    },
    {
      name: "AI-Powered Graphic Design: Mastering Figma",
      image: "/certificates/AI.jpg",
      color: "from-purple-400 to-pink-400",
      issuer: "Udemy - Skool of AI",
      year: "2024",
      description: "Advanced AI-powered design techniques with Figma",
      credentialId: "UC-e0a56111-6121-4659-8a85-2b6dba5a8f15",
      validUntil: "Lifetime",
      skills: ["AI Design", "Figma", "Emerging Tech", "Automation"],
    },
    {
      name: "Master Adobe Illustrator: Design Awesome Logos",
      image: "/certificates/Adobe Illustrator.jpg",
      color: "from-orange-400 to-pink-400",
      issuer: "Udemy - Jawid Firooz",
      year: "2024",
      description: "Professional logo design and vector graphics mastery",
      credentialId: "UC-2eb1f7a0-7b66-49a6-9730-b8b29ebcd082",
      validUntil: "Lifetime",
      skills: ["Adobe Illustrator", "Logo Design", "Vector Graphics", "Branding"],
    },
    {
      name: "Essential Skills in Adobe Photoshop 2024",
      image: "/certificates/Adobe Photoshop.jpg",
      color: "from-blue-400 to-cyan-400",
      issuer: "LinkedIn Learning - Adobe",
      year: "2025",
      description: "Professional Adobe Photoshop certification",
      credentialId: "4f2da16673c2bac88de3c97196c882b5541de249d318ac49c14ac7fc56375098",
      validUntil: "Lifetime",
      skills: ["Adobe Photoshop", "Photo Editing", "Digital Art", "Image Manipulation"],
    },
  ]


  const openCertificateModal = (certificate: any) => {
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
  }

  const closeCertificateModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
  }

  const handleSocialRedirect = (platform: string) => {
    const links = {
      whatsapp: "https://wa.me/917737297548?text=Hi%20Tushar!%20I'd%20love%20to%20discuss%20a%20project%20with%20you.",
      instagram: "https://instagram.com/design_by_tush",
      mail: "mailto:tushar.24jibca003@jietjodhpur.ac.in?subject=Project%20Inquiry&body=Hi%20Tushar,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%0A%0ABest%20regards",
      linkedin: "https://www.linkedin.com/in/tushar-parihar",
      github: "https://github.com/tushar-parihar",
    }
    window.open(links[platform as keyof typeof links], "_blank")
  }

  const handleResumeDownload = async () => {
    const { jsPDF } = await import("jspdf")

    const doc = new jsPDF({ unit: "pt", format: "a4" })
    const pageW = doc.internal.pageSize.getWidth()
    const pageH = doc.internal.pageSize.getHeight()
    const M = 40
    let y = 50

    const line = () => {
      doc.setDrawColor(200)
      doc.line(M, y, pageW - M, y)
      y += 12
    }

    const addText = (t: string, size = 11, bold = false) => {
      if (y > pageH - 60) {
        doc.addPage()
        y = 50
      }
      doc.setFont("helvetica", bold ? "bold" : "normal")
      doc.setFontSize(size)
      const wrapped = doc.splitTextToSize(t, pageW - M * 2)
      doc.text(wrapped, M, y)
      y += 16 * (Array.isArray(wrapped) ? wrapped.length : 1)
    }

    const heading = (t: string) => {
      doc.setFont("helvetica", "bold")
      doc.setFontSize(14)
      doc.text(t, M, y)
      y += 18
      line()
    }

    const bulletList = (items: string[]) => {
      doc.setFont("helvetica", "normal")
      doc.setFontSize(11)
      const maxW = pageW - M * 2 - 16
      for (const item of items) {
        if (y > pageH - 60) {
          doc.addPage()
          y = 50
        }
        const wrapped = doc.splitTextToSize(item, maxW)
        doc.text("•", M, y)
        doc.text(wrapped, M + 16, y)
        y += 16 * (Array.isArray(wrapped) ? wrapped.length : 1)
      }
      y += 6
    }

    // Header
    doc.setFont("helvetica", "bold")
    doc.setFontSize(22)
    doc.text("Tushar Parihar", M, y)
    y += 26

    addText("Graphic Design • Typography • Branding & Identity • Print & Digital Media • Project Management")
    addText("Mobile: 7737297548 • Jodhpur, India")
    addText("Email: tushar.24jibca003@jietjodhpur.ac.in")
    addText("LinkedIn: www.linkedin.com/in/tushar-parihar")
    line()

    // About me
    heading("About me")
    addText(
      "Passionate and Detail-Oriented Graphic Designer with 2+ years of experience, delivering visually compelling designs across diverse industries. Successfully completed 80+ projects, ranging from branding, social media graphics, and event posters to UI/UX elements. Adept at translating client visions into engaging visual narratives with a strong sense of aesthetics and market trends.",
    )

    // Skills
    heading("Skills")
    bulletList([
      "Adobe Photoshop, Adobe Illustrator, Corel Draw, Canva, Figma",
      "Typography, Branding & Identity, Print & Digital Media",
      "Project Management, UI/UX & Digital Design",
    ])

    // Projects
    heading("Projects")
    bulletList([
      "Event Branding & Social Media Campaigns — Designed branding materials, posters, and digital assets; developed strategies for social engagement.",
      "UI/UX & Digital Design — Created engaging elements for websites and mobile apps focused on user-centric design and interactive storytelling.",
    ])

    // Education
    heading("Education")
    addText("Jodhpur Institute of Engineering and Technology — Bachelor of Computer Application (BCA), 1st Year")

    // Experience
    heading("Experience")
    addText("Head Graphic Designer — MPS MUN Chapter 3 | Sep 2022 - Nov 2022", 12, true)
    bulletList([
      "Led the biggest MUN of Jodhpur as an event organizer; designed projects for 800+ attendees.",
      "Managed multiple design projects, ensuring timely delivery and adherence to brand guidelines.",
    ])

    addText("Graphic Designer — Resonance 2k25, JIET Universe | Feb 2025", 12, true)
    bulletList([
      "Leading graphic designer for an event with 4000+ attendees in Jodhpur’s largest concert.",
      "Designed visual elements for the event with consistent branding.",
    ])

    addText("Full Time — Pixlaytix Digital Solutions LLP", 12, true)
    bulletList(["Working as a full time Graphic Designer; Head of the Graphic Designing unit, overseeing all visuals."])

    // Awards & Certifications
    heading("Awards & Certifications")
    bulletList([
      "Recognized for outstanding design work in multiple national and state-level events.",
      "Active volunteer in community design and event management initiatives.",
      "10+ Professional Title In Design Industry — List Enclosed.",
    ])

    // Save
    doc.save("Tushar-Parihar-Resume.pdf")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900/20 to-slate-900 relative overflow-x-hidden">
      {/* Certificate Modal */}
      {isModalOpen && selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Background */}
            <div
              className={`absolute -inset-4 bg-gradient-to-r ${selectedCertificate.color} rounded-3xl blur-2xl opacity-30 animate-pulse`}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
              {/* Modal Header */}
              <div className={`relative bg-gradient-to-r ${selectedCertificate.color} p-6`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedCertificate.name}</h3>
                      <p className="text-white/80">{selectedCertificate.issuer}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeCertificateModal}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="relative p-6">
                <div className="relative group">
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${selectedCertificate.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>
                  <img
                    src={selectedCertificate.image || "/placeholder.svg"}
                    alt={selectedCertificate.name}
                    className="relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Verified
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-pink-400" />
                      <span className="text-white font-semibold">Issue Date</span>
                    </div>
                    <p className="text-white/70">{selectedCertificate.year}</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-semibold">Credential ID</span>
                    </div>
                    <p className="text-white/70 font-mono text-sm break-all">{selectedCertificate.credentialId}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Enhanced Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-rose-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-1500"></div>
        <div className="absolute top-60 left-60 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-60 right-60 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-2500"></div>
      </div>

      {/* Cursor Follower */}
      <div
        className="fixed w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${scrollY > 100 ? 0.5 : 1})`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Tushar Parihar
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Skills", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <Link
                href="/contact"
                className="text-white/80 hover:text-white transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Social Media Icons in Navbar */}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/20">
                <button
                  onClick={() => handleSocialRedirect("instagram")}
                  className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Instagram className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleSocialRedirect("linkedin")}
                  className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleSocialRedirect("whatsapp")}
                  className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              {["Home", "About", "Skills", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Link
                href="/contact"
                className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Social Media */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-white/20">
                <button
                  onClick={() => handleSocialRedirect("instagram")}
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSocialRedirect("linkedin")}
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSocialRedirect("whatsapp")}
                  className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-full border border-pink-500/30 animate-pulse">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-pink-300 text-sm font-medium">Available for new projects</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none">
                Tushar
                <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                  Parihar
                </span>
              </h1>

              <div className="space-y-2">
                <p className="text-2xl lg:text-3xl text-white/90 font-light">Creative Visionary</p>
                <p className="text-xl lg:text-2xl bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent font-medium">
                  Graphic Designer & Visual Storyteller
                </p>
              </div>

              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-full animate-pulse"></div>
            </div>

            <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-lg">
              Passionate and detail-oriented graphic designer  delivering visually
              compelling designs across diverse industries and transforming creative visions into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-pink-500/25 hover:scale-105 transform transition-all duration-300 relative overflow-hidden inline-flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Create Magic
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <button
                onClick={handleResumeDownload}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/20 hover:scale-105 transform transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-slate-900 to-rose-900/20 rounded-full overflow-hidden">
                  <img
                    data-src="/tushar 0.png"
                    alt="Tushar Parihar"
                    className="lazyload w-full h-full object-contain hover:scale-110 transition-transform duration-700 p-8"
                  />
                </div>
              </div>

              {/* Floating Creative Elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl rotate-12 animate-bounce shadow-2xl shadow-yellow-400/25">
                <div className="w-full h-full flex items-center justify-center text-2xl">🎨</div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-2xl shadow-emerald-400/25">
                <div className="w-full h-full flex items-center justify-center text-xl">✨</div>
              </div>

              <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg -rotate-12 animate-bounce delay-1000 shadow-2xl shadow-blue-400/25">
                <div className="w-full h-full flex items-center justify-center text-lg">💡</div>
              </div>

              <div className="absolute top-1/4 -left-12 w-14 h-14 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full rotate-45 animate-pulse delay-500 shadow-2xl shadow-pink-400/25">
                <div className="w-full h-full flex items-center justify-center text-lg">🚀</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <img
                    data-src="/image.png.jpg"
                    alt="About Tushar"
                    className="lazyload w-full h-96 object-contain rounded-2xl"
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-4 shadow-2xl shadow-pink-500/25 animate-pulse">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-sm opacity-90">Years</div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl p-4 shadow-2xl shadow-indigo-500/25 animate-pulse delay-500">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm opacity-90">Projects</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                  About
                  <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-8 animate-pulse"></div>
              </div>

              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                 I'm a passionate and detail-oriented graphic designer with 3+ years of experience, delivering visually
                  compelling designs across diverse industries. 
                </p>

                <p>
                   My approach combines strategic thinking with artistic vision, creating designs that don't just look beautiful—they solve 
                  problems and drive results. I founded Creative Nests Agency to help brands discover their unique voice and express it through 
                  extraordinary visual experiences.
              
                </p>

                <p>
                  Adept at translating client visions
into engaging visual narratives with a strong sense of aesthetics and market trends.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-pink-300">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-white mb-2">6+</div>
                  <div className="text-indigo-300">Professional Titles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section - Certificate Style with SVG Icons */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Creative
              <span className="block bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-auto mb-8 animate-pulse"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Mastering cutting-edge tools and technologies to bring creative visions to life
            </p>
          </div>

          <div className="relative overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              className="skills-swiper !overflow-visible"
            >
              {[...skills, ...skills].map((skill, index) => (
                <SwiperSlide key={`${skill.name}-${index}`}>
                  <div className="group relative h-full">
                    {/* Enhanced Animated Background Glow */}
                    <div
                      className={`absolute -inset-3 bg-gradient-to-r ${skill.color} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse`}
                    ></div>

                    {/* Floating Sparkles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-500 opacity-60"></div>

                    {/* Software Card */}
                    <div className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-2xl group-hover:shadow-3xl h-full">
                      {/* Software Header */}
                      <div
                        className={`relative h-48 bg-gradient-to-br ${skill.color} p-6 flex items-center justify-center overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-black/10"></div>

                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full animate-spin"></div>
                          <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/30 rounded-full animate-spin delay-1000"></div>
                          <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/20 rounded-lg rotate-45 animate-pulse"></div>
                        </div>

                        <div className="relative text-center z-10">
                          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <div className="text-white/90 text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
                            {skill.category}
                          </div>
                        </div>

                        {/* Enhanced Floating Elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-500"></div>
                        <div className="absolute top-8 left-8 w-4 h-4 bg-white/25 rounded-full animate-pulse delay-1000"></div>
                      </div>

                      {/* Software Content */}
                      <div className="p-6 space-y-4 flex-1">
                        <div className="text-center space-y-3">
                          <h3 className="font-bold text-white text-xl leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                            {skill.name}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed">{skill.description}</p>
                        </div>

                        {/* Project Count */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center`}
                            >
                              <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white/80 text-sm font-medium">{skill.projects}</div>
                            </div>
                          </div>
                          <div className={`px-3 py-1 bg-gradient-to-r ${skill.color} rounded-full animate-pulse`}>
                            <span className="text-white text-xs font-bold">{skill.level}%</span>
                          </div>
                        </div>

                        {/* Enhanced Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/60">Proficiency Level</span>
                            <span className="text-white font-semibold"></span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <div
                              className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out relative`}
                              style={{ width: `${skill.level}%` }}
                            >
                              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Decorative Elements */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
                      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>

                      {/* Hover Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Fixed Featured Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Featured
              <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-8 animate-pulse"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">A glimpse into my creative universe</p>
          </div>

          <div className="relative overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={4000}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="projects-swiper mb-16 !overflow-visible"
            >
              {[...projects, ...projects].map((project, index) => (
                <SwiperSlide key={`${project.title}-${index}`}>
                  <div className="group relative h-full">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                    ></div>
                    <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-500 h-full">
                      <div className="relative overflow-hidden">
                        <div className="w-full h-80 bg-gray-900/50 flex items-center justify-center p-4">
                          <img
                            data-src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="lazyload max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 rounded-lg"
                          />
                        </div>
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                        ></div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-semibold text-lg text-center">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* View All Projects Section with Gallery Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
              {/* Gallery Background Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  data-src="/projects/gallery-bg.png"
                  alt="Project Gallery Background"
                  className="lazyload w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/40 via-rose-500/40 to-orange-500/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6 px-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Grid3X3 className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Explore My Complete
                        <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                          Project Gallery
                        </span>
                      </h3>
                      <p className="text-white/90 text-lg max-w-2xl mx-auto">
                        Discover the full spectrum of my creative work, from brand identities to digital experiences
                        that have transformed businesses and delighted users worldwide.
                      </p>
                    </div>
                    <Link
                      href="/gallery"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-pink-500/25"
                    >
                      <span>View All Projects</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section with Continuous Loop */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-8 animate-pulse"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Continuous learning and professional excellence recognized by industry leaders
            </p>
          </div>

          <div className="relative overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={6000}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="certs-swiper !overflow-visible"
            >
              {[...certificates, ...certificates].map((cert, index) => (
                <SwiperSlide key={`${cert.name}-${index}`}>
                  <div
                    className="group relative h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 rounded-3xl"
                    role="button"
                    tabIndex={0}
                    aria-label={`View certificate: ${cert.name}`}
                    onClick={() => openCertificateModal(cert)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        openCertificateModal(cert)
                      }
                    }}
                  >
                    {/* Enhanced Animated Background Glow */}
                    <div
                      className={`absolute -inset-3 bg-gradient-to-r ${cert.color} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse`}
                    ></div>

                    {/* Floating Sparkles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-500 opacity-60"></div>

                    {/* Certificate Card */}
                    <div className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-2xl group-hover:shadow-3xl h-full flex flex-col">
                      {/* Certificate Header */}
                      <div
                        className={`relative h-48 bg-gradient-to-br ${cert.color} p-6 flex items-center justify-center overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-black/10"></div>

                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full animate-spin"></div>
                          <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/30 rounded-full animate-spin delay-1000"></div>
                          <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-white/20 rounded-lg rotate-45 animate-pulse"></div>
                        </div>

                        <div className="relative text-center z-10">
                          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-10 h-10 text-white animate-pulse" />
                          </div>
                          <div className="text-white/90 text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
                            {cert.year}
                          </div>
                        </div>

                        {/* Enhanced Floating Elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce delay-500"></div>
                        <div className="absolute top-8 left-8 w-4 h-4 bg-white/25 rounded-full animate-pulse delay-1000"></div>
                      </div>

                      {/* Certificate Content */}
                      <div className="p-6 space-y-4 flex-1 flex flex-col">
                        <div className="text-center space-y-3 flex-1">
                          <h3 className="font-bold text-white text-xl leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                            {cert.name}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed">{cert.description}</p>
                        </div>

                        {/* Issuer Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center`}
                            >
                              <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-white/80 text-sm font-medium">{cert.issuer}</div>
                            </div>
                          </div>
                          <div className={`px-3 py-1 bg-gradient-to-r ${cert.color} rounded-full animate-pulse`}>
                            <span className="text-white text-xs font-bold">CERTIFIED</span>
                          </div>
                        </div>

                        {/* Decorative CTA becomes interactive for instant open */}
                        <button
                          type="button"
                          className={`w-full mt-4 py-3 bg-gradient-to-r ${cert.color} text-white rounded-xl font-semibold shadow-lg relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70`}
                          onClick={(e) => {
                            e.stopPropagation()
                            openCertificateModal(cert)
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault()
                              e.stopPropagation()
                              openCertificateModal(cert)
                            }
                          }}
                          aria-label={`View certificate: ${cert.name}`}
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <Eye className="w-4 h-4" />
                            View Certificate
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>

                      {/* Enhanced Decorative Elements */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
                      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>

                      {/* Hover Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      ></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Enhanced Achievement Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">6+</div>
              <div className="text-white/60 text-sm">Certifications</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                85%
              </div>
              <div className="text-white/60 text-sm">Avg Score</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">5</div>
              <div className="text-white/60 text-sm">Specializations</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                100%
              </div>
              <div className="text-white/60 text-sm">Passion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Swiper */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Client
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Love Stories
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-8 animate-pulse"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real feedback from amazing clients who trusted me with their vision
            </p>
          </div>

          <div className="relative overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="testimonials-swiper pb-12 !overflow-visible"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <SwiperSlide key={`${testimonial.name}-${index}`}>
                  <div className="group relative h-full">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${testimonial.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                    ></div>
                    <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 h-full">
                      <Quote className="absolute top-4 right-4 text-white/20" size={24} />
                      <div className="space-y-6 h-full flex flex-col justify-between">
                        <div>
                          <p className="text-white/80 italic leading-relaxed text-lg mb-6">"{testimonial.text}"</p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div
                                className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-full blur-sm`}
                              ></div>
                              <img
                                data-src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="lazyload relative w-16 h-16 rounded-full object-cover border-2 border-white/20"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                              <p className="text-white/60">{testimonial.role}</p>
                              <p className="text-white/40 text-sm">{testimonial.company}</p>
                            </div>
                          </div>

                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-20 relative border-t border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent animate-pulse mb-4">
                  Tushar Parihar
                </div>
                <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                  Passionate graphic designer crafting visual stories that inspire, engage, and transform brands across
                  diverse industries.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Connect With Me</h4>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleSocialRedirect("instagram")}
                    className="group w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                  >
                    <Instagram className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleSocialRedirect("linkedin")}
                    className="group w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                  >
                    <Linkedin className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleSocialRedirect("whatsapp")}
                    className="group w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleSocialRedirect("mail")}
                    className="group w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                  >
                    <Mail className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <div className="space-y-3">
                {["Home", "About", "Skills", "Projects"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
                <Link
                  href="/contact"
                  className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  Contact
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  All Projects
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="text-white text-sm">tushar.24jibca003@jietjodhpur.ac.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="text-white text-sm">+91 7737297548</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white text-sm">Jodhpur, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-white/60">
                  © 2024 Tushar Parihar. All rights reserved. Crafted with passion, creativity, and endless cups of
                  coffee. ✨
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-400"></div>
                </div>
                <div className="text-white/40 text-sm">Made with ❤️ in India</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
