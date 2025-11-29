"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

interface TestimonialsProps {
  colorState: "purple" | "cyan" | "green"
}

export default function Testimonials({ colorState }: TestimonialsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
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

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Google",
      avatar: "👩‍💼",
      text: "Sync has transformed how our team collaborates. The speed and intuitive interface are unmatched.",
    },
    {
      name: "Marcus Johnson",
      company: "Netflix",
      avatar: "👨‍💻",
      text: "We save hours every week with Sync. It's become an essential part of our creative workflow.",
    },
    {
      name: "Elena Rodriguez",
      company: "Figma",
      avatar: "👩‍🎨",
      text: "The best platform for team communication. Highly recommend to any growing organization.",
    },
  ]

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Loved by teams worldwide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies trusting Sync for their communication
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
