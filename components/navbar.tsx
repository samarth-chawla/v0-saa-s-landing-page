"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  isScrolled: boolean
  colorState: "purple" | "cyan" | "green"
}

export default function Navbar({ isScrolled, colorState }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const colorClass = {
    purple: "bg-purple-600 hover:bg-purple-700",
    cyan: "bg-cyan-600 hover:bg-cyan-700",
    green: "bg-green-600 hover:bg-green-700",
  }[colorState]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "mx-4 mt-4 rounded-2xl bg-white shadow-lg border border-gray-200 md:mx-6 md:mt-4"
          : "w-full bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">◆</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">Sync</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition font-medium text-sm">
            Product
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition font-medium text-sm">
            Customers
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition font-medium text-sm">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition font-medium text-sm">
            Resources
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition font-medium text-sm">
            Sign in
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-sm">
            TALK TO SALES
          </button>
          <button className={`px-6 py-2 rounded-lg text-white font-medium text-sm transition ${colorClass}`}>
            GET STARTED
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
              Product
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">
              Customers
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
              Resources
            </a>
            <button className="text-gray-600 hover:text-gray-900 text-left font-medium">Sign in</button>
            <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-sm">
              TALK TO SALES
            </button>
            <button className={`w-full px-4 py-2 rounded-lg text-white font-medium text-sm transition ${colorClass}`}>
              GET STARTED
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
