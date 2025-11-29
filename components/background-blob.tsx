"use client"

import { useEffect, useState } from "react"

interface BackgroundBlobProps {
  colorState: "purple" | "cyan" | "green"
}

export default function BackgroundBlob({ colorState }: BackgroundBlobProps) {
  const [blobGradient, setBlobGradient] = useState("from-purple-500 via-purple-400")

  useEffect(() => {
    const gradients = {
      purple: {
        main: "from-purple-500 via-purple-400 to-purple-300",
        glow: "rgba(168, 85, 247, 0.4)",
      },
      cyan: {
        main: "from-cyan-500 via-cyan-400 to-blue-400",
        glow: "rgba(34, 211, 238, 0.4)",
      },
      green: {
        main: "from-green-500 via-emerald-400 to-green-300",
        glow: "rgba(34, 197, 94, 0.4)",
      },
    }

    setBlobGradient(gradients[colorState].main)
  }, [colorState])

  const glowColors = {
    purple: "rgba(168, 85, 247, 0.4)",
    cyan: "rgba(34, 211, 238, 0.4)",
    green: "rgba(34, 197, 94, 0.4)",
  }

  return (
    <>
      {/* Main Blob - Fixed Position with Glow */}
      <div
        className="fixed -right-40 top-32 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at center, ${glowColors[colorState]} 0%, transparent 70%)`,
          filter: "blur(80px)",
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Inner Blob Layer - More Concentrated Glow */}
      <div
        className="fixed -right-32 top-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at center, ${glowColors[colorState]} 0%, transparent 60%)`,
          filter: "blur(100px)",
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Gradient Blob Core - Soft Blurred Shape */}
      <div
        className="fixed -right-48 top-20 w-[700px] h-[700px] rounded-full pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, ${glowColors[colorState]} 0%, transparent 50%)`,
          filter: "blur(120px)",
          opacity: 0.6,
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </>
  )
}
