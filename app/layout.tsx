import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Preloader from "@/components/preloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tushar Parihar - Creative Designer Portfolio",
  description:
    "Passionate graphic designer with 2+ years of experience delivering visually compelling designs across diverse industries.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js" async />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
