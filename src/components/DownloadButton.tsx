"use client";

import { useEffect, useState } from "react";

type OS = "mac" | "windows" | "linux";

const downloadLinks: Record<OS, { label: string; url: string }> = {
  mac: { label: "Download for macOS", url: "/downloads/omnirun-latest.dmg" },
  windows: { label: "Download for Windows", url: "/downloads/omnirun-latest.exe" },
  linux: { label: "Download for Linux", url: "/downloads/omnirun-latest.AppImage" },
};

function detectOS(): OS {
  if (typeof navigator === "undefined") return "windows";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "mac";
  if (ua.includes("linux")) return "linux";
  return "windows";
}

export default function DownloadButton({
  variant = "primary",
}: {
  variant?: "primary" | "secondary";
}) {
  const [os, setOS] = useState<OS>("windows");

  useEffect(() => {
    setOS(detectOS());
  }, []);

  const { label, url } = downloadLinks[os];

  if (variant === "secondary") {
    return (
      <a
        href={url}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-150"
        style={{
          background: "rgba(45, 184, 122, 0.12)",
          color: "#5DE8A0",
          border: "1px solid rgba(45, 184, 122, 0.3)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(45, 184, 122, 0.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(45, 184, 122, 0.12)")}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={url}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white transition-all duration-150"
      style={{ background: "#2DB87A" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#1a9e63")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#2DB87A")}
    >
      {label}
    </a>
  );
}