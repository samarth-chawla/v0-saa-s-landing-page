"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Video,
  Calendar,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import BackgroundBlob from "./background-blob";

const words = ["work", "culture building", "decision making", "collaboration"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentColorClass = "text-purple-600";

  return (
    <section className="relative w-full bg-white pt-32 pb-20 overflow-hidden">
      {/* <BackgroundBlob /> */}

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Animated Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
          <span>Where</span>

          {/* Animated Container */}
          <span
            className={`relative inline-flex flex-col h-[1.1em] overflow-hidden align-middle ${currentColorClass}`}
          >
            {/* 1. Invisible Spacer: Controls the Width Smoothly */}
            <motion.span
              layout
              className="opacity-0 select-none whitespace-nowrap"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {words[index]}
            </motion.span>

            {/* 2. Visible Text: Floats absolutely on top */}
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={index}
                className="absolute top-0 left-0 whitespace-nowrap"
                initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-110%", opacity: 0, filter: "blur(8px)" }}
                transition={{
                  y: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.3 },
                  filter: { duration: 0.3 },
                }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>

          <span>happens</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          Share it. Discuss it. Get it done. Side by side with AI agents.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="px-8 py-4 rounded-lg bg-purple-900 text-white font-bold hover:bg-purple-800 transition transform hover:scale-105 shadow-lg tracking-wide uppercase text-sm">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-lg border-2 border-purple-900 text-purple-900 font-bold hover:bg-purple-50 transition flex items-center gap-2 uppercase text-sm tracking-wide">
            Find Your Subscription <ArrowRight size={16} />
          </button>
        </div>

        {/* Partner Logos */}
        <div className="w-full max-w-5xl mx-auto mb-20">
          <p className="text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wider">
            The most innovative companies run their business in Slack
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-100">
            <img
              src="https://a.slack-edge.com/84f9021/marketing/img/homepage/true-prospects/hero-revamp/logos/logo-gm-small.png"
              alt="GM"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://a.slack-edge.com/84f9021/marketing/img/homepage/true-prospects/hero-revamp/logos/logo-openai-small.png"
              alt="OpenAI"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small.png"
              alt="Target"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://a.slack-edge.com/84f9021/marketing/img/homepage/true-prospects/hero-revamp/logos/logo-paramount-small.png"
              alt="Paramount"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://a.slack-edge.com/84f9021/marketing/img/homepage/true-prospects/hero-revamp/logos/logo-stripe-small.png"
              alt="Stripe"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="https://a.slack-edge.com/84f9021/marketing/img/homepage/true-prospects/hero-revamp/logos/logo-ibm-small.png"
              alt="IBM"
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* --- APP MOCKUP --- */}
        <div className="relative w-full max-w-5xl mx-auto perspective-1000">
          <motion.div
            initial={{ rotateX: 20, opacity: 0, y: 50 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
          >
            {/* Window Header */}
            <div className="bg-purple-900 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-bold text-sm tracking-wide">
                  A1 Company Ltd.
                </span>
              </div>
              <div className="w-64 bg-purple-800/50 rounded-md h-8 flex items-center px-3 text-purple-200 text-sm">
                Search A1 Company Ltd.
              </div>
              <div className="w-8" />
            </div>

            <div className="flex h-[500px] text-left">
              {/* Sidebar */}
              <div className="w-64 bg-purple-900 text-purple-100 flex flex-col p-4 gap-6 md:flex">
                <div>
                  <div className="flex items-center justify-between mb-2 opacity-70 hover:opacity-100 cursor-pointer">
                    <span className="text-sm font-medium">Channels</span>
                    <Plus size={14} />
                  </div>
                  <ul className="space-y-1">
                    <li className="px-2 py-1 hover:bg-purple-800 rounded cursor-pointer">
                      # announcements
                    </li>
                    <li className="px-2 py-1 bg-purple-800 text-white rounded cursor-pointer font-medium">
                      # project-gizmo
                    </li>
                    <li className="px-2 py-1 hover:bg-purple-800 rounded cursor-pointer">
                      # team-marketing
                    </li>
                    <li className="px-2 py-1 hover:bg-purple-800 rounded cursor-pointer">
                      # design-systems
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2 opacity-70 hover:opacity-100 cursor-pointer">
                    <span className="text-sm font-medium">Direct Messages</span>
                    <Plus size={14} />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-green-500" />
                      <span className="text-sm">Sarah Chen</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-blue-500" />
                      <span className="text-sm">Tom Wilson</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main Chat Area */}
              <div className="flex-1 bg-white flex flex-col">
                {/* Channel Header */}
                <div className="h-16 border-b flex items-center justify-between px-6 bg-white sticky top-0 z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">
                      # project-gizmo
                    </span>
                    <span className="text-xs border px-2 py-0.5 rounded-full text-gray-500">
                      v0.4.2
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-red-100 border-2 border-white" />
                    <div className="w-8 h-8 rounded-lg bg-blue-100 border-2 border-white" />
                    <div className="w-8 h-8 rounded-lg bg-green-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                      +5
                    </div>
                  </div>
                </div>

                {/* Chat Content */}
                <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 space-y-6">
                  {/* Google Calendar Card */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-white shadow-sm flex items-center justify-center shrink-0">
                      <Calendar className="text-blue-500" size={20} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">
                          Google Calendar
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-200 px-1 rounded">
                          APP
                        </span>
                        <span className="text-xs text-gray-400">10:00 AM</span>
                      </div>
                      <div className="bg-white p-4 rounded-xl border-l-4 border-blue-500 shadow-sm max-w-md">
                        <h4 className="font-bold text-gray-900">
                          Project Status Meeting
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Today from 01:30-02:00 PM
                        </p>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-200" />
                          <div className="w-6 h-6 rounded-full bg-gray-300" />
                          <span className="text-xs text-gray-500 self-center">
                            +6 others
                          </span>
                        </div>
                        <button className="mt-3 text-sm font-semibold text-blue-600 border border-blue-200 px-3 py-1 rounded hover:bg-blue-50">
                          Join Meeting
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Huddle Card */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center shrink-0">
                      <Video className="text-green-700" size={20} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">Huddle</span>
                        <span className="text-xs text-green-700 bg-green-100 px-1.5 py-0.5 rounded font-bold">
                          LIVE
                        </span>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center justify-between max-w-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-lg bg-purple-200 border-2 border-white" />
                            <div className="w-8 h-8 rounded-lg bg-yellow-200 border-2 border-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Kriti and 5 others are in it.
                            </p>
                            <p className="text-xs text-green-700 font-bold cursor-pointer hover:underline">
                              Join them
                            </p>
                          </div>
                        </div>
                        <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                          <Video size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* AI Summary */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center shrink-0">
                      <span className="text-lg">✨</span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">
                          AI Recap
                        </span>
                        <span className="text-xs text-gray-400">Just now</span>
                      </div>
                      <p className="text-sm text-gray-600 italic">
                        Looks like we are on track to launch next week! 🚀
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 bg-white border-t">
                  <div className="border rounded-lg flex items-center p-2 gap-2 shadow-sm">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus size={20} className="text-gray-500" />
                    </button>
                    <input
                      type="text"
                      placeholder="Message #project-gizmo"
                      className="flex-1 outline-none text-sm"
                    />
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Video size={20} className="text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreHorizontal size={20} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
