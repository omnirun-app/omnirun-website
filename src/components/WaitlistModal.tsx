"use client";

import { useState } from "react";

export default function WaitlistModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [betaOptIn, setBetaOptIn] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, betaOptIn }),
      });

      const data = await res.json();

      if (res.status === 409) {
        setStatus("success");
        setMessage("You're already on the list! We'll be in touch.");
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");
      setMessage("You're on the list! Check your email.");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Try again.");
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after close animation
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
      setEmail("");
      setBetaOptIn(false);
    }, 200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md mx-4 rounded-xl p-7"
        style={{
          background: "rgba(56, 60, 67, 0.55)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(85, 91, 99, 0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-2">Join the waitlist</h2>
        <p className="text-sm text-gray-400 mb-6">
          Be the first to know when omnirun launches.
        </p>

        {status === "success" ? (
          <div className="text-center py-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl"
              style={{ background: "#2DB87A" }}
            >
              ✓
            </div>
            <p className="text-green-400 font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors duration-150"
              style={{
                background: "#262A2F",
                border: "1px solid #4A4F57",
                color: "#DCE0E4",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#2DB87A")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#4A4F57")}
            />

            <label className="flex items-center gap-3 cursor-pointer group">
              <div
                className="w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all duration-150"
                style={{
                  background: betaOptIn ? "#2DB87A" : "transparent",
                  border: betaOptIn ? "none" : "1.5px solid #4A4F57",
                }}
                onClick={() => setBetaOptIn(!betaOptIn)}
              >
                {betaOptIn && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span
                className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                onClick={() => setBetaOptIn(!betaOptIn)}
              >
                I'd like to be considered for early beta access
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-all duration-150 disabled:opacity-50"
              style={{ background: "#2DB87A" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1a9e63")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2DB87A")}
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-400 text-center">{message}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}