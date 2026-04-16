"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlEmail) return;

    setNlStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: nlEmail }),
      });

      if (res.status === 409) {
        setNlStatus("duplicate");
        return;
      }

      if (!res.ok) throw new Error();

      setNlStatus("success");
      setNlEmail("");
    } catch {
      setNlStatus("error");
    }
  };

  return (
    <footer className="border-t border-white/5 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + tagline */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo/elipse_transparent_dark.svg"
                alt="Omnirun"
                width={40}
                height={40}
              />
              <img
                src="/logo/text_transparent_dark.svg"
                alt="omnirun"
                style={{ width: 118, height: "auto" }}
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Run everything. Describe it. Done.
            </p>
          </div>

          {/* Product + Community */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 mb-6">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-white transition-colors">
                  Guide
                </Link>
              </li>
            </ul>
            <h4 className="text-sm font-semibold mb-4">Community</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="https://discord.gg/3RCcuS9WWC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Image
                    src="/icons/discord.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="opacity-50"
                  />
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@omnirun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF4444" className="opacity-50">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Mailing list */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Stay in the loop</h4>
            <p className="text-xs text-gray-500 mb-3">
              Get updates on launch, features, and tips.
            </p>

            {nlStatus === "success" ? (
              <div>
                <p className="text-sm text-green-400 mb-2">You&apos;re subscribed!</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Add <span className="text-gray-400">news@omnirun.app</span> to your contacts so our emails don&apos;t end up in spam.
                </p>
              </div>
            ) : nlStatus === "duplicate" ? (
              <p className="text-sm text-green-400">You&apos;re already subscribed!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={nlEmail}
                  onChange={(e) => setNlEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-3 py-2 rounded-lg text-sm outline-none transition-colors duration-150"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#DCE0E4",
                  }}
                />
                <button
                  type="submit"
                  disabled={nlStatus === "loading"}
                  className="w-full py-2 rounded-lg text-sm font-medium text-white transition-all duration-150 disabled:opacity-50"
                  style={{ background: "#2DB87A" }}
                >
                  {nlStatus === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
                {nlStatus === "error" && (
                  <p className="text-xs text-red-400">Something went wrong. Try again.</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Featured on badges */}
        <div className="border-t border-white/5 pt-6 mb-6">
          <p className="text-xs text-gray-500 mb-3">Featured on</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://smollaunch.com" target="_blank" rel="noopener">
              <img
                src="https://smollaunch.com/badges/featured.svg"
                alt="Featured on Smol Launch"
                loading="lazy"
                width="250"
                height="60"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Omnirun. All rights reserved.
          </p>
        </div>