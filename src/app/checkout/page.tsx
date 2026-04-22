"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CheckoutSuccess() {
  const [dots, setDots] = useState("");

  // Animated dots for the syncing message
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      <section className="py-24 px-6 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          {/* Success icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(45, 184, 122, 0.1)" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2DB87A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-3">You're all set!</h1>
          <p className="text-gray-400 mb-8">
            Your subscription is active. You can close this tab and return to
            Omnirun — your plan will update automatically.
          </p>

          {/* Syncing indicator */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 mb-8"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#2DB87A" }}
            />
            Syncing with your app{dots}
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Back to omnirun.app
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}