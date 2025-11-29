"use client"

import { Mail, Linkedin, Twitter } from "lucide-react"

interface FooterProps {
  colorState: "purple" | "cyan" | "green"
}

export default function Footer({ colorState }: FooterProps) {
  const textColor = {
    purple: "text-purple-600",
    cyan: "text-cyan-600",
    green: "text-green-600",
  }[colorState]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className={`text-2xl font-bold ${textColor} text-color-transition mb-4`}>Sync</div>
            <p className="text-sm text-gray-400">Seamless team communication for the modern world.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  DPA
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-gray-800 rounded-lg transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-gray-800 rounded-lg transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-gray-800 rounded-lg transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2025 Sync. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition">
              Status
            </a>
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
            <a href="#" className="hover:text-white transition">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
