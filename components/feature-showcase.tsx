"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Search, AppWindow, Sparkles } from "lucide-react";

// --- Data Configuration ---
const features = [
  {
    id: "collaboration",
    label: "COLLABORATION",
    icon: Users,
    header: "Work with your colleagues and AI agents.",
    description:
      "Slack is built for bringing people and information together. Type things out. Talk things through. Invite external organisations into the conversation. And get work done with AI agents.",
    stat: "80%",
    statInfo:
      "of the Fortune 100 use Slack Connect to work with partners and customers",
    video:
      "https://a.slack-edge.com/bb974f1/marketing/img/features/hero/refresh/01-channels.IN.mp4",
    poster:
      "https://a.slack-edge.com/d43efea/marketing/img/homepage/revamped-24/value-props/hp-vp-1.IN@2x.jpg",
    accent: "bg-green-500",
  },
  {
    id: "knowledge",
    label: "KNOWLEDGE",
    icon: Search,
    header: "Access your team’s collective brain.",
    description:
      "Need to remember why a decision was made six months ago? Or who approved those contract terms? Just ask your question in Slack to find any past conversation, file or project update.",
    stat: "47%",
    statInfo: "increase in productivity for teams using Slack",
    video:
      "https://a.slack-edge.com/d43efea/marketing/img/homepage/revamped-24/value-props/hp-vp-4.IN.mp4",
    poster:
      "https://a.slack-edge.com/d43efea/marketing/img/homepage/revamped-24/value-props/hp-vp-4.IN@2x.jpg",
    accent: "bg-yellow-400",
  },
  {
    id: "integrations",
    label: "INTEGRATIONS",
    icon: AppWindow,
    header: "Tap into the tools that you already use.",
    description:
      "Over 2,600 apps are ready to connect in Slack so you can turn multi-step tasks such as customer feedback requests and IT ticket requests into automated actions inside Slack.",
    stat: "35%",
    statInfo: "increase in time saved due to automation for Slack users",
    video:
      "https://a.slack-edge.com/d43efea/marketing/img/homepage/revamped-24/value-props/hp-vp-3.IN.mp4",
    poster:
      "https://a.slack-edge.com/d43efea/marketing/img/homepage/revamped-24/value-props/hp-vp-3.IN@2x.jpg",
    accent: "bg-blue-400",
  },
  {
    id: "ai",
    label: "AI AGENTS",
    icon: Sparkles,
    header: "Start faster with AI that’s already part of the team.",
    description:
      "Summarise threads that you missed while on holiday, zero in on action items from every meeting and get contextual help on your next strategy doc.",
    stat: "97 mins",
    statInfo: "average time that users can save weekly with AI in Slack",
    video:
      "https://a.slack-edge.com/66e1519/marketing/img/homepage/revamped-24/value-props/hp-vp-ai.IN.mp4",
    poster:
      "https://a.slack-edge.com/66e1519/marketing/img/homepage/revamped-24/value-props/hp-vp-ai.IN@2x.jpg",
    accent: "bg-purple-500",
  },
];

// Custom hook for animated counter
function useCountUp(target: string, duration: number = 2000) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Extract numeric value from target (e.g., "80%" -> 80)
          const numericTarget = parseInt(target.replace(/\D/g, "")) || 0;
          const startTime = Date.now();
          const suffix = target.replace(/\d/g, ""); // Get non-numeric suffix (%, mins, etc.)

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(numericTarget * progress);
            setDisplayValue(`${currentValue}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  return { displayValue, elementRef };
}

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Header --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 tracking-tight">
            Bring your people, apps and AI agents together.
          </h2>

          {/* --- Navigation Tabs (Replicating the video style) --- */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col md:flex-row items-center gap-2 md:gap-3 group transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-black text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                    }`}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span
                    className={`text-sm md:text-base font-bold tracking-wide uppercase ${
                      isActive ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {feature.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- Content Display Area --- */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              {/* Text Side */}
              <div className="flex-1 space-y-8 text-left">
                <div className="flex items-center gap-3 text-gray-500 uppercase tracking-widest text-xs font-bold">
                  {React.createElement(features[activeTab].icon, {
                    size: 16,
                  })}
                  {features[activeTab].label}
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {features[activeTab].header}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  {features[activeTab].description}
                </p>

                <div className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <StatCounter value={features[activeTab].stat} />
                    <span className="text-sm text-gray-500 max-w-[200px] leading-tight">
                      {features[activeTab].statInfo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Media Side */}
              <div className="flex-1 w-full relative">
                {/* SVG Blob Background - Fixed aspect ratio container */}
                <div className="absolute inset-0 z-0 transition-all duration-500 pointer-events-none">
                  <svg
                    className="absolute w-full h-full"
                    style={{
                      width: "100%",
                      height: "100%",
                      right: "-30%",
                      bottom: "-20%",
                    }}
                    viewBox="0 0 540 540"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="m0 270c-.00001304-149.117 120.883-269.99998696 270-270s270 120.883 270 270v270h-270c-149.117 0-269.99998696-120.883-270-270z"
                      fill={
                        activeTab === 0
                          ? "#41b658" // Green
                          : activeTab === 1
                          ? "#eeb417" // Yellow
                          : activeTab === 2
                          ? "#2bacff" // Blue
                          : "#9602c7" // Purple
                      }
                    />
                  </svg>
                </div>

                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                  <video
                    key={features[activeTab].video} // Force reload on tab change
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={features[activeTab].poster}
                    className="w-full h-auto"
                  >
                    <source src={features[activeTab].video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function StatCounter({ value }: { value: string }) {
  const { displayValue, elementRef } = useCountUp(value);
  return (
    <span ref={elementRef} className="text-5xl font-bold text-purple-600">
      {displayValue}
    </span>
  );
}
