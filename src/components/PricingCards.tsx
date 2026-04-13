"use client";

import { useState } from "react";

/* ─── Plan Data (same as BillingSettings.tsx) ─────────────── */

const soloPlans = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 10,
    annualPrice: 100,
    description: "For solo creators & indie hackers",
    badge: null,
    features: [
      { text: "1 project", highlight: false },
      { text: "3 integrations (your choice)", highlight: false },
      { text: "Voice control", highlight: false },
      { text: "Web search", highlight: false },
      { text: "5 project templates", highlight: false },
      { text: "Last 10 chat histories", highlight: false },
      { text: "Community support", highlight: false },
    ],
    cta: "Get Started",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 290,
    description: "For freelancers & power users",
    badge: "Most Popular",
    features: [
      { text: "5 projects", highlight: false },
      { text: "10 integrations (your choice)", highlight: false },
      { text: "Voice control", highlight: false },
      { text: "Web search", highlight: false },
      { text: "Full template library", highlight: false },
      { text: "Unlimited chat history", highlight: false },
      { text: "Email support", highlight: false },
    ],
    cta: "Get Started",
  },
  {
    id: "studio",
    name: "Studio",
    monthlyPrice: 59,
    annualPrice: 590,
    description: "For serious builders & power creators",
    badge: null,
    features: [
      { text: "15 projects", highlight: false },
      { text: "25 integrations (your choice)", highlight: false },
      { text: "Voice control", highlight: false },
      { text: "Web search", highlight: false },
      { text: "Full template library", highlight: false },
      { text: "Unlimited chat history", highlight: false },
      { text: "Priority email support", highlight: false },
    ],
    cta: "Get Started",
  },
];

const teamPlans = [
  {
    id: "team",
    name: "Team",
    monthlyPrice: 99,
    annualPrice: 990,
    description: "For small teams & startups",
    badge: null,
    features: [
      { text: "5 team seats", highlight: false },
      { text: "10 projects", highlight: false },
      { text: "All integrations", highlight: false },
      { text: "Voice control", highlight: false },
      { text: "Web search", highlight: false },
      { text: "Full template library", highlight: false },
      { text: "Unlimited chat history", highlight: false },
      { text: "Activity log", highlight: false },
      { text: "Email support", highlight: false },
    ],
    cta: "Get Started",
  },
  {
    id: "business",
    name: "Business",
    monthlyPrice: 199,
    annualPrice: 1990,
    description: "For agencies & growing companies",
    badge: "Most Popular",
    features: [
      { text: "15 team seats", highlight: false },
      { text: "30 projects", highlight: false },
      { text: "All integrations", highlight: false },
      { text: "Voice control", highlight: false },
      { text: "Web search", highlight: false },
      { text: "Full template library", highlight: false },
      { text: "Unlimited chat history", highlight: false },
      { text: "Activity log", highlight: false },
      { text: "Advanced admin controls", highlight: false },
      { text: "Priority email support", highlight: false },
    ],
    cta: "Get Started",
  },
];

/* ─── Component ───────────────────────────────────────────── */

export default function PricingCards({ onCtaClick }: { onCtaClick?: () => void }) {
  const [planTab, setPlanTab] = useState<"solo" | "teams">("solo");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const activePlans = planTab === "solo" ? soloPlans : teamPlans;

  const getMonthlyEquivalent = (plan: (typeof soloPlans)[0]) =>
    billingCycle === "annual" ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice;

  const getAnnualSavings = (plan: (typeof soloPlans)[0]) =>
    plan.monthlyPrice * 12 - plan.annualPrice;

  return (
    <div>
      {/* Solo / Teams toggle */}
      <div className="flex items-center justify-center mb-5">
        <div className="inline-flex items-center rounded-lg p-1" style={{ background: "#383C43", border: "1px solid #555B63" }}>
          {(["solo", "teams"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setPlanTab(tab)}
              className={`px-5 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 capitalize ${
                planTab === tab ? "text-white shadow-sm" : "text-gray-400 hover:text-white"
              }`}
              style={planTab === tab ? { background: "#2DB87A" } : {}}
            >
              {tab === "teams" ? "Teams" : "Solo"}
            </button>
          ))}
        </div>
      </div>

      {/* Monthly / Annual toggle */}
      <div className="flex items-center justify-center mb-8">
        <div className="inline-flex items-center rounded-lg p-1" style={{ background: "#383C43", border: "1px solid #555B63" }}>
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 ${
              billingCycle === "monthly" ? "text-white shadow-sm" : "text-gray-400 hover:text-white"
            }`}
            style={billingCycle === "monthly" ? { background: "#2DB87A" } : {}}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 flex items-center gap-1.5 ${
              billingCycle === "annual" ? "text-white shadow-sm" : "text-gray-400 hover:text-white"
            }`}
            style={billingCycle === "annual" ? { background: "#2DB87A" } : {}}
          >
            Annual
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                billingCycle === "annual"
                  ? "bg-white/20 text-white"
                  : "bg-green-500/15 text-green-400"
              }`}
            >
              Save ~15%
            </span>
          </button>
        </div>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {activePlans.map((plan) => {
          const isPopular = plan.badge === "Most Popular";

          return (
            <div
              key={plan.id}
              className="relative rounded-lg p-5 flex flex-col transition-all duration-150"
              style={{
                background: "#383C43",
                border: isPopular ? "2px solid #2DB87A" : "1px solid #1E1E1E",
                ...(isPopular ? { boxShadow: "0 0 20px rgba(45, 184, 122, 0.12)" } : {}),
              }}
            >
              {/* Popular badge */}
              {isPopular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-0.5 rounded-full text-white"
                  style={{ background: "#2DB87A" }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-400">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">€{getMonthlyEquivalent(plan)}</span>
                  <span className="text-sm text-gray-400">/mo</span>
                </div>
                {billingCycle === "annual" ? (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-white">€{plan.annualPrice}/year</span>
                    <span className="text-xs text-green-400 font-medium">Save €{getAnnualSavings(plan)}</span>
                  </div>
                ) : (
                  <div className="mt-1">
                    <span className="text-xs text-gray-400">billed monthly</span>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="mb-4" style={{ height: 1, background: "#1E1E1E" }} />

              {/* Features */}
              <ul className="space-y-2.5 mb-5 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span
                      className="mt-[7px] flex-shrink-0 rounded-full"
                      style={{
                        width: 5,
                        height: 5,
                        background: feature.highlight ? "#2DB87A" : "#555555",
                      }}
                    />
                    <span className={feature.highlight ? "text-white" : "text-gray-400"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={onCtaClick}
                className="block w-full py-2 rounded-lg text-sm font-medium text-center transition-all duration-150"
                style={
                  isPopular
                    ? { background: "#2DB87A", color: "#FFFFFF" }
                    : {
                        background: "rgba(45, 184, 122, 0.12)",
                        color: "#5DE8A0",
                        border: "1px solid rgba(45, 184, 122, 0.3)",
                      }
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isPopular
                    ? "#1a9e63"
                    : "rgba(45, 184, 122, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isPopular
                    ? "#2DB87A"
                    : "rgba(45, 184, 122, 0.12)";
                }}
              >
                {plan.cta}
              </button>
            </div>
          );
        })}

        {/* Enterprise card — Teams only */}
        {planTab === "teams" && (
          <div
            className="relative rounded-lg p-5 flex flex-col transition-all duration-150"
            style={{
              border: "1px solid rgba(45, 184, 122, 0.15)",
              background: "linear-gradient(180deg, rgba(45, 184, 122, 0.06) 0%, transparent 100%)",
            }}
          >
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-1">Enterprise</h3>
              <p className="text-xs text-gray-400">For orgs with custom needs</p>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">Custom</span>
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-400">tailored to your team</span>
              </div>
            </div>

            <div className="mb-4" style={{ height: 1, background: "#1E1E1E" }} />

            <ul className="space-y-2.5 mb-5 flex-1">
              {[
                "Unlimited team members",
                "Unlimited projects",
                "All integrations",
                "Voice control",
                "Web search",
                "Full template library",
                "Unlimited chat history",
                "Activity log",
                "Advanced admin controls",
                "Dedicated support",
                "Custom onboarding",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <span
                    className="mt-[7px] flex-shrink-0 rounded-full"
                    style={{ width: 5, height: 5, background: "#555555" }}
                  />
                  <span className="text-gray-400">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:sales@omnirun.app"
              className="block w-full py-2 rounded-lg text-sm font-medium text-center text-white transition-all duration-150"
              style={{ background: "#2DB87A" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1a9e63")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2DB87A")}
            >
              Contact Sales
            </a>
          </div>
        )}
      </div>

      {/* BYOK notice */}
      <div
        className="rounded-lg p-4"
        style={{
          background: "rgba(59, 130, 246, 0.06)",
          border: "1px solid rgba(59, 130, 246, 0.12)",
        }}
      >
        <p className="text-sm font-medium mb-1">Bring Your Own Keys (BYOK)</p>
        <p className="text-xs text-gray-400 leading-relaxed">
          Your subscription covers the Omnirun app. AI usage is billed separately
          by your provider (Anthropic, OpenAI, etc.) — you bring your own API keys.
        </p>
      </div>
    </div>
  );
}