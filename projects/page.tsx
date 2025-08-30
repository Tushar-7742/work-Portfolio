"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Eye, X, Search, Upload, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [uploadedProjects, setUploadedProjects] = useState<any[]>([])

  const defaultProjects = [
    {
      id: 1,
      title: "Car Rental Campaign",
      category: "Branding",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20Branding-H97wo29CTprV0BidhY1IC4bG2vCdVf.png",
      color: "from-gray-400 to-slate-400",
      description: "Complete branding solution for car rental service",
      year: "2024",
      client: "AutoRent Solutions",
      isDefault: true,
    },
    {
      id: 2,
      title: "Game Design Promotion",
      category: "UI/UX",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20ui.png-couK8JIFjwRiLeahmvhy8AXyBVlFJt.jpeg",
      color: "from-orange-400 to-red-400",
      description: "Gaming interface and promotional materials",
      year: "2024",
      client: "GameStudio Pro",
      isDefault: true,
    },
    {
      id: 3,
      title: "Sneaker Advertisement",
      category: "Branding",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20braning-C4rjC37HopoGPbtD0ZyDE8EXUKs7hL.png",
      color: "from-red-400 to-pink-400",
      description: "Dynamic sneaker brand campaign",
      year: "2024",
      client: "SneakerHub",
      isDefault: true,
    },
    {
      id: 4,
      title: "Night Event Flyer",
      category: "Social Media",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20social%20media-arTGzi7OnzED8C9hKDBJNHGjLXhaqf.png",
      color: "from-red-400 to-orange-400",
      description: "Vibrant night event promotional design",
      year: "2024",
      client: "NightLife Events",
      isDefault: true,
    },
    {
      id: 5,
      title: "Sports Portal Design",
      category: "UI/UX",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20ui.png-aUlzXfSeBxG4Sc4C5VwwcUHyVUQCAe.jpeg",
      color: "from-orange-400 to-yellow-400",
      description: "Complete sports website interface",
      year: "2024",
      client: "SportsTech",
      isDefault: true,
    },
    {
      id: 6,
      title: "Artistic Moon Illustration",
      category: "Illustration",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art-6--.jpg-pBHGkqBNRDSRnp0bcE1evvP1ffBNR4.jpeg",
      color: "from-blue-400 to-indigo-400",
      description: "Creative moon-themed artwork",
      year: "2024",
      client: "Personal Project",
      isDefault: true,
    },
    {
      id: 7,
      title: "Journey Door Art",
      category: "Illustration",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art-4-secound.jpg-cFgEdXc2dsmiFnb7Q4KAzws4w47aRf.jpeg",
      color: "from-amber-400 to-orange-400",
      description: "Conceptual door illustration representing journey",
      year: "2024",
      client: "Art Exhibition",
      isDefault: true,
    },
    {
      id: 8,
      title: "Live Music Concert",
      category: "Social Media",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20social%20media-k9w8LMuR4CTDenQ3AkrKrkSZzZRyzs.png",
      color: "from-purple-400 to-pink-400",
      description: "Concert promotional social media campaign",
      year: "2024",
      client: "Music Fest",
      isDefault: true,
    },
    {
      id: 9,
      title: "Startup Pitch Competition",
      category: "Social Media",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Startup%20Pitch%20Competition%20Intagram%20Post-kRMCm4zPsb9dDVNgVt6JU7fawNdVAV.png",
      color: "from-purple-400 to-indigo-400",
      description: "Startup competition Instagram campaign",
      year: "2024",
      client: "Innovation Hub",
      isDefault: true,
    },
    {
      id: 10,
      title: "Books Reading Campaign",
      category: "Social Media",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Refined%20Scrapbook%20Art%20Event%20Instagram-Blzbkeop1lk6RMyTyJSXF9Z6LG2kT0.png",
      color: "from-green-400 to-emerald-400",
      description: "Reading awareness social media campaign",
      year: "2024",
      client: "Literary Society",
      isDefault: true,
    },
    {
      id: 11,
      title: "Thailand Travel Package",
      category: "Social Media",
      image: "/projects/thailand-travel.png",
      color: "from-teal-400 to-green-400",
      description: "Travel package promotional design for Thailand tourism",
      year: "2024",
      client: "Hanover And Tyke",
      isDefault: true,
    },
    {
      id: 12,
      title: "Car Rental Service",
      category: "Branding",
      image: "/projects/car-rental-branding.png",
      color: "from-gray-400 to-slate-500",
      description: "Professional car rental service branding design",
      year: "2024",
      client: "Car Rental Co.",
      isDefault: true,
    },
  ]

  const allProjects = [...defaultProjects, ...uploadedProjects]
  const categories = ["All", "Branding", "UI/UX", "Social Media", "Illustration", "Photography", "Print Design"]

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          const newProject = {
            id: Date.now() + Math.random(),
            title: file.name.split(".")[0],
            category: "Uploaded",
            image: e.target?.result as string,
            color: "from-purple-400 to-pink-400",
            description: "Uploaded project",
            year: new Date().getFullYear().toString(),
            client: "Personal Upload",
            isDefault: false,
          }
          setUploadedProjects((prev) => [...prev, newProject])
        }
        reader.readAsDataURL(file)
      })
    }
    setIsUploadModalOpen(false)
  }

  const deleteProject = (projectId: number) => {
    setUploadedProjects((prev) => prev.filter((project) => project.id !== projectId))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900/20 to-slate-900 relative">
      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative max-w-md w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Upload Projects</h3>
                <button
                  onClick={() => setIsUploadModalOpen(false)}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                    <Upload className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-white/70 mb-4">Select images to add to your project gallery</p>
                </div>

                <label className="block">
                  <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                  <div className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 cursor-pointer text-center">
                    Choose Images
                  </div>
                </label>

                <p className="text-white/50 text-sm text-center">Supported formats: JPG, PNG, GIF, WebP</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Project"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

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
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Tushar Parihar
            </div>
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Project</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              Project
              <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-8 animate-pulse"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Explore my complete collection of creative works spanning branding, digital design, and visual
              storytelling
            </p>
          </div>

          {/* Upload Section */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Upload Your Projects</h3>
                      <p className="text-white/60 text-sm">Add your own designs to the gallery</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsUploadModalOpen(true)}
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Upload Images
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/40" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                      : "bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative">
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition-all duration-500">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>

                    {/* Action Buttons Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        <button
                          onClick={() => openLightbox(project.image)}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors transform hover:scale-110"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        {!project.isDefault && (
                          <button
                            onClick={() => deleteProject(project.id)}
                            className="w-12 h-12 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors transform hover:scale-110"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-white text-xs font-semibold`}
                      >
                        {project.category}
                      </span>
                      <span className="text-white/60 text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.description}</p>
                    <p className="text-white/50 text-xs">Client: {project.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center opacity-50">
                <Search className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
              <p className="text-white/70 max-w-md mx-auto mb-6">
                Try adjusting your search terms or category filter to find what you're looking for.
              </p>
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Your First Project
              </button>
            </div>
          )}

          {/* Upload Stats */}
          {uploadedProjects.length > 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-2xl border border-pink-500/30">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <Upload className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">
                  {uploadedProjects.length} custom project{uploadedProjects.length !== 1 ? "s" : ""} uploaded
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
