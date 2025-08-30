"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating Geometric Shapes */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              className="absolute top-20 left-20 w-32 h-32 border-2 border-pink-400/30 rounded-full"
            />

            <motion.div
              animate={{
                rotate: -360,
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                x: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg"
            />

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 0.8, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-yellow-400/40 rotate-45"
            />

            {/* Particle System */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo/Brand Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-72 h-72 mx-auto mb-4 border-4 border-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="w-56 h-56 relative"
                  >
                    <img data-src="/tushar 01.png" alt="Designer Logo" className="lazyload w-full h-full object-contain" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  Crafting Digital
                </motion.span>
              </h2>
              <p className="text-lg text-purple-200">
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                >
                  Experiences
                </motion.span>
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="w-80 max-w-sm mx-auto"
            >
              <div className="relative">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full relative"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="text-center mt-4 text-sm text-purple-200"
                >
                  {Math.round(progress)}%
                </motion.div>
              </div>
            </motion.div>

            {/* Creative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-8 flex justify-center space-x-4"
            >
              {["Design", "Create", "Inspire"].map((word, index) => (
                <motion.span
                  key={word}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                  className="text-sm text-purple-300 font-medium"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-8 right-8 w-8 h-8 border-2 border-pink-400/50 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-8 left-8 w-6 h-6 bg-cyan-400/30 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
