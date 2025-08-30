import type React from "react"

interface SoftwareIconProps {
  name: string
  svgPath?: string
  fallbackIcon: React.ReactNode
}

export const SoftwareIcon: React.FC<SoftwareIconProps> = ({ name, svgPath, fallbackIcon }) => {
  // If you have a real SVG file path, use it
  if (svgPath) {
    return <img src={svgPath || "/placeholder.svg"} alt={`${name} logo`} className="w-10 h-10 object-contain" />
  }

  // Otherwise use the fallback custom icon
  return <>{fallbackIcon}</>
}
