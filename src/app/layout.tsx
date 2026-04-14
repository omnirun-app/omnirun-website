import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "omnirun — Run everything. Describe it. Done.",
  description:
    "Desktop app that lets anyone build software, automate tasks, and control their computer — by simply describing what they want.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "omnirun — Run everything. Describe it. Done.",
    description:
      "Desktop app that lets anyone build software, automate tasks, and control their computer — by simply describing what they want.",
    url: "https://omnirun.app",
    siteName: "omnirun",
    images: [
      {
        url: "https://omnirun.app/og.png",
        width: 1200,
        height: 630,
        alt: "omnirun",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "omnirun — Run everything. Describe it. Done.",
    description:
      "Desktop app that lets anyone build software, automate tasks, and control their computer — by simply describing what they want.",
    images: ["https://omnirun.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RKSY7EYMDW"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RKSY7EYMDW');
        `}
      </Script>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}