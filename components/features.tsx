"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Users, Rocket } from "lucide-react"

interface FeaturesProps {
  colorState: "purple" | "cyan" | "green"
}

export default function Features({ colorState }: FeaturesProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleItems([true, true, true])
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const iconColor = {
    purple: "#a855f7",
    cyan: "#06b6d4",
    green: "#22c55e",
  }[colorState]

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience instant responsiveness and seamless collaboration in real-time.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together effortlessly with built-in tools for every team member.",
    },
    {
      icon: Rocket,
      title: "Rapid Scaling",
      description: "Grow your team and ideas without worrying about infrastructure or complexity.",
    },
  ]

  return (
    <section ref={sectionRef} id="features" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Powerful features for modern teams</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to succeed, all in one platform</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-500 transform ${
                  visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-gray-100">
                  <Icon size={28} color={iconColor} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
