"use client"

import { useRef, useState } from "react"
import { Zap, Users, Rocket, Brain, Briefcase, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

interface FeatureShowcaseProps {
  colorState: "purple" | "cyan" | "green"
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Collaboration",
    description:
      "Connect your entire team in milliseconds. Real-time synchronization ensures everyone stays on the same page, with instant message delivery and live collaboration features.",
    color: "from-purple-600 to-purple-500",
    bgColor: "bg-gradient-to-br from-purple-600 to-purple-400",
  },
  {
    icon: Users,
    title: "Team Communication Hub",
    description:
      "Break down silos with unified channels, direct messaging, and shared spaces. Keep conversations organized and searchable, making information accessible to everyone who needs it.",
    color: "from-cyan-600 to-cyan-500",
    bgColor: "bg-gradient-to-br from-cyan-600 to-cyan-400",
  },
  {
    icon: Rocket,
    title: "Scale Without Limits",
    description:
      "Whether you're a startup or an enterprise, our infrastructure grows with you. Handle thousands of concurrent users and massive data volumes without performance degradation.",
    color: "from-green-600 to-green-500",
    bgColor: "bg-gradient-to-br from-green-600 to-green-400",
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Leverage artificial intelligence to automate workflows, get smart recommendations, and uncover insights from your conversations. Let AI agents handle repetitive tasks.",
    color: "from-blue-600 to-blue-500",
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-400",
  },
  {
    icon: Briefcase,
    title: "Enterprise Security",
    description:
      "Protect your data with end-to-end encryption, compliance certifications, and advanced security features. Enterprise-grade reliability you can count on.",
    color: "from-indigo-600 to-indigo-500",
    bgColor: "bg-gradient-to-br from-indigo-600 to-indigo-400",
  },
]

export default function FeatureShowcase({ colorState }: FeatureShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative w-full min-h-[500vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex">
        {/* Main container with max-width centering */}
        <div className="w-full mx-auto max-w-7xl flex">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {features.map((feature, index) => (
              <FeatureSection
                key={index}
                index={index}
                feature={feature}
                isActive={activeIndex === index}
                onActive={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right Column - Sticky Graphics */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center sticky top-0 h-screen bg-white overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute"
              >
                <FeatureGraphic feature={features[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureSectionProps {
  index: number
  feature: (typeof features)[0]
  isActive: boolean
  onActive: () => void
}

function FeatureSection({ index, feature, isActive, onActive }: FeatureSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" })

  // Update active state when this section comes into view
  if (inView && !isActive) {
    onActive()
  }

  const Icon = feature.icon

  return (
    <div ref={ref} className="h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md"
      >
        {/* Icon Container */}
        <motion.div
          className={`mb-6 p-4 w-fit rounded-xl transition-all duration-500 ${
            isActive ? `bg-gradient-to-br ${feature.color} text-white shadow-lg` : "bg-gray-100 text-gray-400"
          }`}
          animate={{
            scale: isActive ? 1.1 : 1,
            boxShadow: isActive ? "0 20px 25px rgba(0,0,0,0.15)" : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={32} />
        </motion.div>

        {/* Title */}
        <motion.h3
          className={`text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-500 ${
            isActive ? "text-gray-900" : "text-gray-300"
          }`}
          animate={{
            color: isActive ? "#111827" : "#d1d5db",
            letterSpacing: isActive ? "0em" : "0.02em",
          }}
        >
          {feature.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className={`text-lg leading-relaxed transition-all duration-500 ${
            isActive ? "text-gray-600 opacity-100" : "text-gray-400 opacity-50"
          }`}
          animate={{
            color: isActive ? "#4b5563" : "#9ca3af",
            opacity: isActive ? 1 : 0.5,
          }}
        >
          {feature.description}
        </motion.p>

        {/* Learn More Button */}
        <motion.button
          className={`mt-8 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-500 ${
            isActive
              ? `bg-gradient-to-r ${feature.color} text-white shadow-lg hover:shadow-xl`
              : "bg-gray-200 text-gray-500 opacity-50 cursor-not-allowed"
          }`}
          animate={{
            scale: isActive ? 1 : 0.95,
            opacity: isActive ? 1 : 0.5,
          }}
          whileHover={isActive ? { x: 4 } : {}}
          transition={{ duration: 0.5 }}
          disabled={!isActive}
        >
          Learn More <ArrowRight size={18} />
        </motion.button>
      </motion.div>

      {/* Progress indicator at bottom */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 flex gap-2">
        {features.map((_, idx) => (
          <motion.div
            key={idx}
            className="h-1 bg-gray-300 rounded-full"
            animate={{
              width: idx === index ? 32 : idx < index ? 32 : 8,
              backgroundColor: idx === index ? "#1f2937" : idx < index ? "#d1d5db" : "#e5e7eb",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}

interface FeatureGraphicProps {
  feature: (typeof features)[0]
}

function FeatureGraphic({ feature }: FeatureGraphicProps) {
  return (
    <div className="px-8">
      <motion.div className="relative">
        {/* Outer glow layer */}
        <div className="absolute inset-0 blur-3xl opacity-50 rounded-3xl" style={{ background: feature.color }} />

        {/* Main graphic block */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-md ${feature.bgColor} p-12 flex flex-col items-center justify-center backdrop-blur-sm border border-white/10`}
        >
          {/* Animated inner content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center h-full gap-6"
          >
            {/* Dynamic content based on feature type */}
            {feature.title.includes("Lightning") && (
              <>
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <Zap size={64} className="text-white" />
                </div>
                <div className="text-center">
                  <p className="text-white text-xl font-bold">Real-Time Sync</p>
                  <p className="text-white/70 text-sm mt-2">Instant delivery</p>
                </div>
              </>
            )}

            {feature.title.includes("Team") && (
              <>
                <div className="flex gap-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Users size={28} className="text-white" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-white text-xl font-bold">Team Connected</p>
                  <p className="text-white/70 text-sm mt-2">5+ tools included</p>
                </div>
              </>
            )}

            {feature.title.includes("Scale") && (
              <>
                <div className="w-full space-y-3">
                  {[80, 60, 40].map((width, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    >
                      <div className="h-2 bg-white/30 rounded-full" style={{ width: `${width}%` }} />
                      <span className="text-white/80 text-sm font-mono">{width}%</span>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <p className="text-white text-xl font-bold">Unlimited Scale</p>
                  <p className="text-white/70 text-sm mt-2">1M+ concurrent users</p>
                </div>
              </>
            )}

            {feature.title.includes("AI") && (
              <>
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Brain size={64} className="text-white" />
                  </motion.div>
                </div>
                <div className="text-center">
                  <p className="text-white text-xl font-bold">AI Assistant</p>
                  <p className="text-white/70 text-sm mt-2">Smart automation</p>
                </div>
              </>
            )}

            {feature.title.includes("Security") && (
              <>
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <Briefcase size={64} className="text-white" />
                </div>
                <div className="text-center">
                  <p className="text-white text-xl font-bold">Enterprise Safe</p>
                  <p className="text-white/70 text-sm mt-2">End-to-end encrypted</p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
