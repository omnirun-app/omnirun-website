"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import LogoAnimation from "@/components/LogoAnimation";
import WaitlistModal from "@/components/WaitlistModal";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [phase, setPhase] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [shaking, setShaking] = useState(false);
  const typingRef = useRef(false);

  const subtitle =
    "A desktop app that lets anyone build software, automate tasks, and control their computer — by simply describing what they want.";

  // Typewriter effect
  useEffect(() => {
    if (phase < 4 || typingRef.current) return;
    typingRef.current = true;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(subtitle.slice(0, i));
      if (i >= subtitle.length) {
        clearInterval(interval);
        // Show waitlist button after typing finishes
        setPhase(5);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [phase, subtitle]);

  const handleLogoComplete = useCallback(() => {
    setTimeout(() => setPhase(1), 200);   // "Run everything."
    setTimeout(() => setPhase(2), 700);   // "Describe it."
    setTimeout(() => {                     // "Done." drops + earthquake
      setPhase(3);
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
    }, 1200);
    setTimeout(() => setPhase(4), 2000);  // Start typewriter
  }, []);

  return (
    <div className={`pt-16 ${shaking ? "shake" : ""}`}>
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) translateY(0); }
          15% { transform: translateX(-1px) translateY(0.5px); }
          30% { transform: translateX(1px) translateY(-0.5px); }
          45% { transform: translateX(-1px) translateY(0.5px); }
          60% { transform: translateX(0.5px) translateY(0px); }
          75% { transform: translateX(-0.5px) translateY(0px); }
          90% { transform: translateX(0px) translateY(0px); }
        }
        .shake {
          animation: shake 0.4s ease-out;
        }
        @keyframes drop-in {
          0% { transform: translateY(-60px); opacity: 0; }
          60% { transform: translateY(4px); opacity: 1; }
          80% { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }
        .drop-done {
          animation: drop-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .cursor-blink::after {
          content: '|';
          animation: blink 0.6s step-end infinite;
          color: #2DB87A;
          font-weight: 300;
          margin-left: 1px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        {/* Animated logo */}
        <LogoAnimation size={180} onComplete={handleLogoComplete} />

        {/* Headline — sequential reveal */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-4xl mb-5 mt-10">
          <span
            className="inline-block transition-opacity duration-300"
            style={{ opacity: phase >= 1 ? 1 : 0 }}
          >
            Run everything.
          </span>{" "}
          <span
            className="inline-block transition-opacity duration-300"
            style={{ opacity: phase >= 2 ? 1 : 0 }}
          >
            Describe it.
          </span>{" "}
          <span
            className="inline-block"
            style={{
              color: "#2DB87A",
              opacity: phase >= 3 ? 1 : 0,
            }}
          >
            {phase >= 3 && <span className="drop-done inline-block">Done.</span>}
          </span>
        </h1>

        {/* Subtitle — typewriter */}
        <div className="min-h-16 flex items-start justify-center mb-10">
          {phase >= 4 && (
            <p
              className={`text-lg text-gray-400 max-w-xl leading-relaxed ${
                typedText.length < subtitle.length ? "cursor-blink" : ""
              }`}
            >
              {typedText}
            </p>
          )}
        </div>

        {/* Join Waitlist button */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: phase >= 5 ? 1 : 0,
            transform: phase >= 5 ? "translateY(0)" : "translateY(12px)",
          }}
        >
          <button
            onClick={() => setShowModal(true)}
            className="px-10 py-4 rounded-lg text-base font-semibold text-white transition-all duration-150"
            style={{ background: "#2DB87A" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1a9e63")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2DB87A")}
          >
            Join Waitlist
          </button>
        </div>
      </section>

      {/* ─── Feature Highlights ───────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Your computer, your files, your control
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Not another browser sandbox. Omnirun runs on your machine with full
            access to your real files, real tools, and real environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg p-6 transition-all duration-150"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────── */}
      <Testimonials />

      {/* ─── How It Works ─────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How it works</h2>
          <p className="text-gray-400 mb-16">
            Three steps. No coding required.
          </p>

          <div className="flex flex-col gap-10 text-left">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-5">
                <div
                  className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "#2DB87A" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Be the first to try Omnirun. Join the waitlist — no credit card
          required.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="px-10 py-4 rounded-lg text-base font-semibold text-white transition-all duration-150"
          style={{ background: "#2DB87A" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1a9e63")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#2DB87A")}
        >
          Join Waitlist
        </button>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

/* ─── Data ──────────────────────────────────────────────────── */

const features = [
  {
    title: "Real files on your computer",
    description:
      "Your project lives on your machine. Open any folder, edit real files, use real tools. No sandbox, no export headaches.",
  },
  {
    title: "Come back anytime",
    description:
      "Project memory remembers where you left off. Pick up after 6 months like you never stopped.",
  },
  {
    title: "One-click deploy",
    description:
      "Connected to Vercel, Netlify, and more. Say \"deploy it\" and it's live. Custom domains, SSL — all handled.",
  },
  {
    title: "Voice control",
    description:
      "Talk to your computer. \"Make the header blue.\" \"Add a contact form.\" Hands-free building.",
  },
  {
    title: "70+ integrations",
    description:
      "GitHub, Stripe, Supabase, Resend, Cloudflare — connect once, automate everything after.",
  },
  {
    title: "Control from your phone",
    description:
      "Mobile companion app lets you wake your PC, send commands, and watch your project build — from bed.",
  },
];

const steps = [
  {
    title: "Point to a folder",
    description:
      "New project or existing one — just open a folder and Omnirun understands what's there.",
  },
  {
    title: "Describe what you want",
    description:
      "Type or talk. \"Build me a bakery website with online ordering.\" Omnirun plans, builds, and shows you a live preview.",
  },
  {
    title: "Deploy and maintain",
    description:
      "One click to go live. Come back anytime to update, add features, or fix things — just describe the change.",
  },
];