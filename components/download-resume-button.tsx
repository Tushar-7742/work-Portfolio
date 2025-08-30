"use client"

import type React from "react"

import { useCallback } from "react"

type Props = {
  className?: string
  children?: React.ReactNode
  fileName?: string
}

export default function DownloadResumeButton({
  className,
  children = "Download Resume",
  fileName = "Tushar-Parihar-Resume.pdf",
}: Props) {
  const handleClick = useCallback(async () => {
    // dynamic import so bundle stays light
    const { jsPDF } = await import("jspdf")

    const doc = new jsPDF({ unit: "pt", format: "a4" })
    const pageWidth = doc.internal.pageSize.getWidth()
    const marginX = 40
    let y = 50

    const drawHeading = (text: string) => {
      doc.setFont("helvetica", "bold")
      doc.setFontSize(14)
      doc.text(text, marginX, y)
      y += 18
      doc.setDrawColor(180)
      doc.line(marginX, y, pageWidth - marginX, y)
      y += 12
    }

    const drawSubheading = (text: string) => {
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text(text, marginX, y)
      y += 16
    }

    const drawParagraph = (text: string) => {
      doc.setFont("helvetica", "normal")
      doc.setFontSize(11)
      const lines = doc.splitTextToSize(text, pageWidth - marginX * 2)
      lines.forEach((line: string) => {
        if (y > doc.internal.pageSize.getHeight() - 60) {
          doc.addPage()
          y = 50
        }
        doc.text(line, marginX, y)
        y += 16
      })
      y += 4
    }

    const drawBulletList = (items: string[]) => {
      doc.setFont("helvetica", "normal")
      doc.setFontSize(11)
      const maxWidth = pageWidth - marginX * 2
      items.forEach((raw) => {
        const lines = doc.splitTextToSize(raw, maxWidth - 16)
        if (y > doc.internal.pageSize.getHeight() - 60) {
          doc.addPage()
          y = 50
        }
        doc.text("•", marginX, y)
        doc.text(lines[0], marginX + 16, y)
        y += 16
        for (let i = 1; i < lines.length; i++) {
          if (y > doc.internal.pageSize.getHeight() - 60) {
            doc.addPage()
            y = 50
          }
          doc.text(lines[i], marginX + 16, y)
          y += 16
        }
      })
      y += 6
    }

    // Header
    doc.setFont("helvetica", "bold")
    doc.setFontSize(22)
    doc.text("Tushar Parihar", marginX, y)
    y += 24
    doc.setFont("helvetica", "normal")
    doc.setFontSize(11)
    drawParagraph("Graphic Designer • Typography • Branding & Identity • Print & Digital Media • Project Management")
    drawParagraph("Mobile: 7737297548 • Jodhpur, India")
    drawParagraph("Email: tushar.24jibca003@jietjodhpur.ac.in")
    drawParagraph("LinkedIn: www.linkedin.com/in/tushar-parihar")

    // About
    drawHeading("About Me")
    drawParagraph(
      "Passionate and Detail-Oriented Graphic Designer with 2+ years of experience, delivering visually compelling designs across diverse industries. Successfully completed 80+ projects, ranging from branding, social media graphics, and event posters to UI/UX elements. Adept at translating client visions into engaging visual narratives with a strong sense of aesthetics and market trends.",
    )

    // Skills
    drawHeading("Skills")
    drawBulletList([
      "Adobe Photoshop, Adobe Illustrator, CorelDRAW, Canva, Figma",
      "Typography, Branding & Identity, Print & Digital Media",
      "Project Management, UI/UX & Digital Design",
    ])

    // Education
    drawHeading("Education")
    drawParagraph("Jodhpur Institute of Engineering and Technology — Bachelor of Computer Application (BCA), 1st Year")

    // Experience
    drawHeading("Experience")
    drawSubheading("Head Graphic Designer — MPS MUN Chapter 3 | Sep 2022 - Nov 2022")
    drawBulletList([
      "Led the biggest MUN of Jodhpur as an event organizer; designed projects for 800+ attendees.",
      "Managed multiple design projects, ensuring timely delivery and adherence to brand guidelines.",
    ])
    drawSubheading("Graphic Designer — Resonance 2k25, JIET Universe | Feb 2025")
    drawBulletList([
      "Leading graphic designer for an event with 4000+ attendees in Jodhpur’s largest concert.",
      "Designed visual elements for performances and event branding.",
    ])
    drawSubheading("Full Time — Pixlaytix Digital Solutions LLP")
    drawBulletList(["Head of the Graphic Designing unit, overseeing all visuals and brand consistency."])

    // Projects
    drawHeading("Projects")
    drawBulletList([
      "Event Branding & Social Media Campaigns — branding materials, posters, and digital assets; grew social engagement.",
      "UI/UX & Digital Design — web and mobile elements focused on user-centric, interactive storytelling.",
    ])

    // Awards & Certifications
    drawHeading("Awards & Certifications")
    drawBulletList([
      "Recognized for outstanding design work in multiple national and state-level events.",
      "Active volunteer in community design and event management initiatives.",
      "10+ Professional Titles in Design Industry — List Enclosed.",
    ])

    // Save
    doc.save(fileName)
  }, [fileName])

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ??
        "inline-flex items-center justify-center rounded-md bg-pink-500 px-5 py-2.5 text-white hover:bg-pink-600 transition"
      }
      aria-label="Download Resume PDF"
    >
      {children}
    </button>
  )
}
