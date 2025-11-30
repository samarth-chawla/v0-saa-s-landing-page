"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Professional");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const buttonGradient = "from-purple-500 to-purple-600";

  const plans: Plan[] = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams",
      features: [
        "Up to 10 team members",
        "Basic integrations",
        "5GB storage",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      description: "For growing teams",
      features: [
        "Up to 100 team members",
        "Advanced integrations",
        "500GB storage",
        "Priority support",
        "Custom branding",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Full API access",
        "Unlimited storage",
        "24/7 support",
        "SSO & advanced security",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-20 md:py-32 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your team, scale as you grow
          </p>
        </div>

        {selectedPlan && (
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600">
              You selected:{" "}
              <span className="font-semibold text-gray-900">
                {selectedPlan}
              </span>
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === plan.name;
            return (
              <button
                key={index}
                onClick={() => setSelectedPlan(plan.name)}
                className={`relative p-8 rounded-2xl border transition-all duration-500 transform hover:scale-105 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isSelected
                    ? `border-2 border-purple-500 bg-white shadow-xl`
                    : "border-gray-200 bg-white"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  borderColor: isSelected ? "#a855f7" : "#e5e7eb",
                }}
              >
                {plan.popular && selectedPlan !== plan.name && (
                  <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r ${buttonGradient} text-white text-sm font-semibold`}
                  >
                    Most Popular
                  </div>
                )}

                {selectedPlan === plan.name && (
                  <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r ${buttonGradient} text-white text-sm font-semibold`}
                  >
                    Selected Plan
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <p className="text-4xl font-bold">{plan.price}</p>
                  {plan.price !== "Custom" && (
                    <p className="text-gray-600 text-sm">/month</p>
                  )}
                </div>

                <div
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition mb-8 ${
                    isSelected
                      ? `bg-linear-to-r ${buttonGradient} text-white shadow-lg`
                      : "border-2 border-gray-200 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={20} className="text-purple-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
