"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeatureShowcase from "@/components/feature-showcase"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export default function Page() {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    colorState: "purple" as "purple" | "cyan" | "green",
  })

  useEffect(() => {
    const handleScroll = () => {
      // Track if navbar should become sticky with rounded corners
      const isScrolled = window.scrollY > 50

      // Determine color state based on scroll percentage
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      let colorState: "purple" | "cyan" | "green" = "purple"

      if (scrollPercentage < 35) {
        colorState = "purple"
      } else if (scrollPercentage < 65) {
        colorState = "cyan"
      } else {
        colorState = "green"
      }

      setScrollState({ isScrolled, colorState })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar isScrolled={scrollState.isScrolled} colorState={scrollState.colorState} />
      <Hero colorState={scrollState.colorState} />
      <FeatureShowcase colorState={scrollState.colorState} />
      <Testimonials colorState={scrollState.colorState} />
      <Pricing colorState={scrollState.colorState} />
      <Footer colorState={scrollState.colorState} />
    </main>
  )
}
