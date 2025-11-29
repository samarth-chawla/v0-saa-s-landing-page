"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import BackgroundBlob from "./background-blob"

interface HeroProps {
  colorState: "purple" | "cyan" | "green"
}

export default function Hero({ colorState }: HeroProps) {
  const [animateElements, setAnimateElements] = useState(false)
  const [revealedWords, setRevealedWords] = useState(0)
  const [subtextVisible, setSubtextVisible] = useState(false)

  const headingWords = ["Work with your", "colleagues and", "AI agents."]

  useEffect(() => {
    setAnimateElements(true)
    const wordTimer = setInterval(() => {
      setRevealedWords((prev) => {
        if (prev < headingWords.length) {
          return prev + 1
        }
        return prev
      })
    }, 200)

    const subtextTimer = setTimeout(() => {
      setSubtextVisible(true)
    }, 500)

    return () => {
      clearInterval(wordTimer)
      clearTimeout(subtextTimer)
    }
  }, [])

  const bgColor = {
    purple: "from-purple-600",
    cyan: "from-cyan-600",
    green: "from-green-600",
  }[colorState]

  const ringColor = {
    purple: "ring-purple-500/20",
    cyan: "ring-cyan-500/20",
    green: "ring-green-500/20",
  }[colorState]

  return (
    <section className="relative w-full bg-white pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <BackgroundBlob colorState={colorState} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full border ${ringColor} bg-white/50 backdrop-blur w-fit gap-2 text-sm font-medium transition-all duration-700 ${animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="inline-block w-2 h-2 bg-current rounded-full animate-pulse" />
              <span className="text-gray-700">New AI Features</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-gray-900 min-h-[120px] md:min-h-[140px]">
              {headingWords.map((word, idx) => (
                <span
                  key={idx}
                  className={`inline-block mr-2 transition-all duration-500 ${
                    idx < revealedWords ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              className={`text-lg md:text-xl text-gray-600 text-balance leading-relaxed max-w-lg transition-all duration-1000 ${
                subtextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Slack is built for bringing people and information together. Type things out. Talk things through. Invite
              external organisations into the conversation. And get work done with AI agents.
            </p>

            {/* Stats */}
            <div
              className={`flex items-baseline gap-3 py-6 border-t border-gray-200 transition-all duration-1000 delay-300 ${
                subtextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${bgColor} ${colorState === "cyan" ? "to-cyan-500" : colorState === "green" ? "to-green-500" : "to-purple-500"} bg-clip-text text-transparent`}
              >
                80%
              </span>
              <span className="text-gray-600 text-sm md:text-base">
                of Fortune 100 use Slack Connect to work with partners and customers
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-500 ${
                subtextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button
                className={`px-7 py-3 rounded-lg bg-gradient-to-r ${bgColor} ${colorState === "cyan" ? "to-cyan-500" : colorState === "green" ? "to-green-500" : "to-purple-500"} text-white font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2`}
              >
                GET STARTED
              </button>
              <button className="px-7 py-3 rounded-lg border-2 border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                FIND YOUR PLAN
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right - App Mockup */}
          <div
            className={`relative h-[400px] md:h-[500px] flex items-center justify-center transition-all duration-1000 delay-200 ${
              animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500"
              style={{
                background: `radial-gradient(circle at center, ${colorState === "purple" ? "rgba(168, 85, 247, 0.1)" : colorState === "cyan" ? "rgba(34, 211, 238, 0.1)" : "rgba(34, 197, 94, 0.1)"} 0%, transparent 70%)`,
              }}
            />

            {/* App Mockup */}
            <div className="relative z-10 w-full max-w-sm">
              <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50 bg-white transform hover:scale-105 transition-transform duration-300">
                {/* Browser Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center text-gray-400 text-xs font-mono">Acme Inc</div>
                </div>

                {/* Slack Interface */}
                <div className="flex h-80 bg-white">
                  {/* Sidebar */}
                  <div className="w-20 bg-gradient-to-b from-purple-800 to-purple-900 px-3 py-4 flex flex-col gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      A
                    </div>
                    <div className="w-6 h-6 bg-purple-700/50 rounded" />
                    <div className="w-6 h-6 bg-purple-700/50 rounded" />
                    <div className="flex-1" />
                    <div className="w-6 h-6 bg-purple-700/50 rounded" />
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Channel Header */}
                    <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 font-bold">#</span>
                        <span className="font-semibold text-xs text-gray-900">marketing</span>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 flex flex-col gap-3">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-900">Sarah</div>
                          <div className="text-xs text-gray-600 mt-1">Great work on that!</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-900">Maya</div>
                          <div className="text-xs text-gray-600 mt-1">Just shipped!</div>
                        </div>
                      </div>
                    </div>

                    {/* Input */}
                    <div className="border-t border-gray-200 px-4 py-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                        <input
                          type="text"
                          placeholder="Message"
                          className="flex-1 bg-transparent text-xs placeholder-gray-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
