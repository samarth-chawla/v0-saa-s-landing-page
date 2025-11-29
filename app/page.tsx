"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeatureShowcase from "@/components/feature-showcase";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <FeatureShowcase />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
