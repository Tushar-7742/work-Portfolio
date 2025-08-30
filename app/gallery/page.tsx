"use client"

import { useState } from "react"
import { ArrowLeft, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  image: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "",
    image: "/projects/1.png",
    category: "",
  },
  {
    id: 2,
    title: "",
    image: "/projects/2.png",
    category: "",
  },
  {
    id: 3,
    title: "",
    image: "/projects/3.png",
    category: "",
  },
  {
    id: 4,
    title: "",
    image: "/projects/04.png",
    category: "",
  },
  {
    id: 5,
    title: "",
    image: "/projects/5.png",
    category: "",
  },
  {
    id: 6,
    title: "",
    image: "/projects/6.png",
    category: "",
  },
  {
    id: 7,
    title: "",
    image: "/projects/7.png",
    category: "",
  },
  {
    id: 8,
    title: "",
    image: "/projects/8.png",
    category: "",
  },
  {
    id: 9,
    title: "",
    image: "/projects/9.jpg",
    category: "",
  },
  {
    id: 10,
    title: "",
    image: "/projects/10.jpg",
    category: "",
  },
  {
    id: 11,
    title: "",
    image: "/projects/11.png",
    category: "",
  },
  {
    id: 12,
    title: "",
    image: "/projects/32.png",
    category: "",
  },
  {
    id: 13,
    title: " ",
    image: "/projects/13.png",
    category: "Social Media",
  },
  {
    id: 14,
    title: " ",
    image: "/projects/14.png",
    category: " ",
  },
  {
    id: 15,
    title: " ",
    image: "/projects/15.png",
    category: "",
  },
  {
    id: 16,
    title: "",
    image: "/projects/16.png",
    category: "",
  },
  {
    id: 17,
    title: "",
    image: "/projects/17.png", 
    category: "",
  },
  {
    id: 18,
    title: "",
    image: "/projects/18.png",
    category: "",
  },
  {
    id: 19,
    title: "",
    image: "/projects/19.png",
    category: "",
  },
  {
    id: 20,
    title: "",
    image: "/projects/20.png",
    category: "",
  },
  {
    id: 21,
    title: "",
    image: "/projects/21.png",
    category: "",
  },
  {
    id: 22,
    title: "",
    image: "/projects/22.png",
    category: "",
  },
  {
    id: 23,
    title: "",
    image: "/projects/23.png",
    category: "",
  },
  {
    id: 24,
    title: "",
    image: "/projects/24.png",
    category: "",
  },
  {
    id: 25,
    title: "",
    image: "/projects/25.png",
    category: "",
  },
  {
    id: 26,
    title: "",
    image: "/projects/26.jpg", 
    category: "",
  },
{
    id: 27,
    title: "",
    image: "/projects/27.jpg", 
    category: "",
  },
  {
    id: 28,
    title: "",
    image: "/projects/28.jpg",
    category: "",
  },
  {
    id: 29,
    title: "",
    image: "/projects/29.png", 
    category: "",
  },
  {
    id: 30,
    title: "",
    image: "/projects/30.jpg",
    category: "",
  },
  {
    id: 31,
    title: "",
    image: "/projects/31.png",
    category: "",
  },
  {
    id: 32,
    title: "",
    image: "/projects/12.png",
    category: "",
  },
  {
    id: 33,
    title: "",
    image: "/projects/33.png",
    category: "",
  },
]

export default function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-orange-500/20 blur-3xl"></div>
        <div className="relative bg-black/40 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                Complete
                <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
                  Project Gallery
                </span>
              </h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto mb-6">
                Explore my comprehensive collection of 20+ creative projects spanning multiple disciplines and
                industries.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">{projects.length} Projects Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 gap-4 space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 break-inside-avoid mb-4"
            >
              <div className="relative overflow-hidden">
                <div className="w-full">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg border border-white/20">
                  <span className="text-white/90 text-xs font-medium">{project.category}</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-full p-3"
                  >
                    <Eye className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[70vh] flex items-center justify-center">
            <Button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-full p-3"
            >
              <span className="text-xl">✕</span>
            </Button>

            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              className="max-w-3xl max-h-[60vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}
