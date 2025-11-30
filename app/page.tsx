"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import FeatureShowcase from "@/components/feature-showcase"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [colorState, setColorState] = useState<"purple" | "cyan" | "green">("purple")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollPosition = window.scrollY
      if (scrollPosition < 800) {
        setColorState("purple")
      } else if (scrollPosition < 1600) {
        setColorState("cyan")
      } else {
        setColorState("green")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Features colorState={colorState} />
      <FeatureShowcase />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
