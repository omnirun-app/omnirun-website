"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function InvitePage({
  params,
}: {
  params: { token: string };
}) {
  const { token } = params;
  const [tried, setTried] = useState(false);

  // Try opening the desktop app via deep link on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = `omnirun://invite/${token}`;
      setTried(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="w-full max-w-md text-center rounded-xl p-8"
        style={{
          background: "rgba(56, 60, 67, 0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(85, 91, 99, 0.5)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Image
            src="/logo/elipse_transparent_dark.svg"
            alt="omnirun"
            width={30}
            height={30}
          />
          <Image
            src="/logo/text_transparent_dark.svg"
            alt="omnirun"
            width={100}
            height={30}
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-[#DCE0E4] mb-2">
          You&apos;ve been invited
        </h1>
        <p className="text-[#9CA3AF] text-sm mb-8">
          Someone invited you to collaborate on omnirun.
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-8 text-left">
          <div className="flex items-start gap-3">
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5"
              style={{ background: "rgba(45, 184, 122, 0.15)", color: "#2DB87A" }}
            >
              1
            </span>
            <div>
              <p className="text-[#DCE0E4] text-sm font-medium">
                Open omnirun on your computer
              </p>
              <p className="text-[#9CA3AF] text-xs mt-0.5">
                The app should have opened automatically. If not, launch it manually.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5"
              style={{ background: "rgba(45, 184, 122, 0.15)", color: "#2DB87A" }}
            >
              2
            </span>
            <div>
              <p className="text-[#DCE0E4] text-sm font-medium">
                Accept the invitation inside the app
              </p>
              <p className="text-[#9CA3AF] text-xs mt-0.5">
                Create Account → Go to Settings → Team and click Accept.
              </p>
            </div>
          </div>
        </div>

        {/* Try again button */}
        <button
          onClick={() => {
            window.location.href = `omnirun://invite/${token}`;
          }}
          className="w-full py-2.5 rounded-lg text-sm font-medium transition-colors mb-3"
          style={{ background: "#2DB87A", color: "#fff" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1a9e63")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#2DB87A")}
        >
          Open omnirun
        </button>

        {/* Download fallback */}
        <p className="text-[#9CA3AF] text-xs">
          Don&apos;t have omnirun yet?{" "}
          <a
            href="/"
            className="underline transition-colors"
            style={{ color: "#2DB87A" }}
          >
            Download it here
          </a>
        </p>
      </div>
    </div>
  );
}