"use client";

import Foo from "@/components/DoesNotExist";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";
import Lightbox from "@/components/Lightbox";
import ScrollReveal from "@/components/ScrollReveal";

/* ─── Feature Data ────────────────────────────────────────── */

type MediaItem =
  | { type: "video"; src: string }
  | { type: "image"; src: string; details?: string[] }
  | null;

const features: {
  title: string;
  description: string;
  comingSoon: boolean;
  media: MediaItem;
  video?: string;
}[] = [
  {
    title: "Build anything",
    description:
      "Your project lives on your computer — not in someone else's cloud. Open any folder, and omnirun understands what's inside. Want a website? An online store? An internal tool? Just describe it. omnirun creates real files you can see, touch, and keep forever. No expiring sessions, no \"export and pray.\"",
    comingSoon: false,
    media: { type: "image", src: "https://omnirun-media.b-cdn.net/promo_images/Build_1.jpg", details: ["https://omnirun-media.b-cdn.net/promo_images/Build_2.jpg", "https://omnirun-media.b-cdn.net/promo_images/Build_3.jpg"] },
  },
  {
    title: "Real-time preview",
    description:
      "Watch your project come to life as it's being built. Every change shows up instantly in a live preview — the same way your visitors will see it. No refreshing, no waiting. When it looks right, you're done.",
    comingSoon: false,
    media: { type: "image", src: "https://omnirun-media.b-cdn.net/promo_images/Preview_2.jpg", details: ["https://omnirun-media.b-cdn.net/promo_images/Preview_3.jpg"] },
  },
  {
    title: "Voice control",
    description:
      "Talk to your computer and it actually listens. \"Make the header bigger.\" \"Add a contact form.\" \"Change the color to blue.\" Just say it. You can even have a back-and-forth conversation while omnirun makes changes in real time.",
    comingSoon: false,
    media: { type: "video", src: "https://omnirun-media.b-cdn.net/promo_videos/omni_voice_control.mp4" },
  },
  {
    title: "Connections hub",
    description:
      "Connect your favorite services once — deploy to Vercel, push code to GitHub, accept payments with Stripe, send emails with Resend — and never think about it again. omnirun handles the wiring. Currently 12 integrations and growing.",
    comingSoon: false,
    media: { type: "image", src: "https://omnirun-media.b-cdn.net/promo_images/Connections.jpg" },
    video: "https://omnirun-media.b-cdn.net/promo_videos/omni_connections.mp4",
  },
  {
    title: "AI Assistant",
    description:
      "Your personal AI that lives outside your projects. It connects to your email and calendar, summarizes what matters, drafts replies, and takes action — all from a simple chat. Like having a smart assistant who never sleeps.",
    comingSoon: false,
    media: { type: "image", src: "https://omnirun-media.b-cdn.net/promo_images/Assistant_2.jpg" },
  },
  {
    title: "Scheduled tasks",
    description:
      "Set it and forget it. Want a weekly report? A daily backup? A price check every morning? Tell omnirun once, pick a schedule, and it runs automatically — even when the app is closed.",
    comingSoon: false,
    media: { type: "image", src: "https://omnirun-media.b-cdn.net/promo_images/Tasks_2.jpg" },
  },
  {
    title: "Templates",
    description:
      "Don't start from scratch. Browse ready-made templates — business websites, dashboards, trackers, automations — and customize them by describing what you want to change. From blank to finished in minutes.",
    comingSoon: false,
    media: { type: "image", src: "https://omnirun-media.b-cdn.net/promo_images/Template_2.jpg", details: ["https://omnirun-media.b-cdn.net/promo_images/Template_3.jpg"] },
  },
  {
    title: "Time Machine",
    description:
      "Every change is saved, automatically. Made a mistake? Go back to any point in your project's history and restore it with one click. It's like unlimited undo for your entire project.",
    comingSoon: false,
    media: { type: "image", src: "https://omnirun-media.b-cdn.net/promo_images/TimeMachine_2.jpg" },
  },
  {
    title: "Mobile companion",
    description:
      "Left your desk but had an idea? Open the omnirun app on your phone, wake up your computer remotely, and send instructions. Watch your project being built from your couch — or your bed.",
    comingSoon: true,
    media: null,
  },
  {
    title: "Browser & desktop control",
    description:
      "omnirun can see and control your screen. \"Book a table for Friday.\" \"Find flights to Berlin.\" \"Fill out this form with my info.\" It clicks, types, and navigates — while you watch and approve.",
    comingSoon: true,
    media: null,
  },
  {
    title: "Teams",
    description:
      "Work together on projects with your team. Shared access, admin controls, activity logs, and role management. Everyone builds together, no one steps on each other's toes.",
    comingSoon: false,
    media: { type: "image", src: "https://omnirun-media.b-cdn.net/promo_images/Teams_2.jpg" },
  },
];

/* ─── Helpers ─────────────────────────────────────────────── */

function hasMultipleImages(media: MediaItem): boolean {
  return media !== null && media.type === "image" && !!media.details && media.details.length > 0;
}

function isVideo(media: MediaItem): boolean {
  return media !== null && media.type === "video";
}

function hasExtraVideo(feature: typeof features[number]): boolean {
  return !!feature.video;
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function Features() {
  const [showModal, setShowModal] = useState(false);
  let splitIndex = 0;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-6 text-center">
        <ScrollReveal>
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "#2DB87A" }}
          >
            Features
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto">
            Everything you need.{" "}
            <span style={{ color: "#2DB87A" }}>Nothing you don&apos;t.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Build software, automate tasks, and control your computer — all by
            describing what you want. No coding required.
          </p>
          <a
            href="https://www.youtube.com/@omnirun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-gray-500 hover:text-white transition-colors"
          >
          Watch how it works →
        </a>
        </ScrollReveal>
      </section>

      {/* Feature sections */}
      {features.map((feature) => {

        {/* ── Full-width: video, multi-image, or has extra video ── */}
        if (isVideo(feature.media) || hasMultipleImages(feature.media) || hasExtraVideo(feature)) {
          return (
            <section key={feature.title} className="py-16 px-6">
              <div className="max-w-5xl mx-auto">
                {/* Text centered on top */}
                <ScrollReveal>
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                      {feature.title}
                    </h2>
                    {feature.comingSoon && (
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(45, 184, 122, 0.12)",
                          color: "#5DE8A0",
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                </ScrollReveal>

                {/* Extra video (shown above main media) */}
                {feature.video && (
                  <ScrollReveal delay={150}>
                  <div className="w-full rounded-lg overflow-hidden mb-4" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                    <video
                      src={feature.video}
                      controls
                      muted
                      playsInline
                      preload="metadata"
					  poster="https://omnirun-media.b-cdn.net/promo_images/Connections_poster.jpg"
                      className="w-full h-auto"
                      style={{ display: "block" }}
                    />
                  </div>
                  </ScrollReveal>
                )}

                {/* Media */}
                <ScrollReveal delay={200}>
                {feature.media?.type === "video" ? (
                  <div className="w-full rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                    <video
                      src={feature.media.src}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto"
                      style={{ display: "block" }}
                    />
                  </div>
                ) : feature.media?.type === "image" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Main image — spans full width on top */}
                    <div className="md:col-span-2 rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                      <Lightbox
                        src={feature.media.src}
                        className="w-full h-auto"
                        style={{ display: "block" }}
                      />
                    </div>
                    {/* Detail images */}
                    {feature.media.details?.map((src, i) => (
                      <div
                        key={i}
                        className="rounded-lg overflow-hidden"
                        style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                      >
                        <Lightbox
                          src={src}
                          className="w-full h-auto"
                          style={{ display: "block" }}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                </ScrollReveal>
              </div>
            </section>
          );
        }

        {/* ── Split layout: single image or placeholder ── */}
        const isReversed = splitIndex % 2 === 1;
        splitIndex++;

        return (
          <section key={feature.title} className="py-12 sm:py-16 px-6">
            <div
              className={`max-w-5xl mx-auto flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-12`}
            >
              {/* Text */}
              <ScrollReveal className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {feature.title}
                  </h2>
                  {feature.comingSoon && (
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: "rgba(45, 184, 122, 0.12)",
                        color: "#5DE8A0",
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </ScrollReveal>

              {/* Media */}
              <ScrollReveal delay={150} className="flex-1 w-full">
                {feature.media === null ? (
                  <div
                    className="w-full rounded-lg flex items-center justify-center"
                    style={{
                      aspectRatio: "16 / 9",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px dashed rgba(255,255,255,0.08)",
                    }}
                  >
                    <span className="text-sm text-gray-600 italic">Coming soon</span>
                  </div>
                ) : feature.media.type === "image" ? (
                  <div className="rounded-lg overflow-hidden max-w-md mx-auto md:max-w-none" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                    <Lightbox
                      src={feature.media.src}
                      className="w-full h-auto"
                      style={{ display: "block" }}
                    />
                  </div>
                ) : null}
              </ScrollReveal>
            </div>
          </section>
        );
      })}

      {/* ── YouTube ────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">See it in action</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            We regularly upload videos, tutorials, and walkthroughs showing how omnirun works in real-world scenarios. Subscribe to stay up to date.
          </p>
          <a
            href="https://www.youtube.com/@omnirun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-150"
            style={{ background: "#FF4444" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#cc3333")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FF4444")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </div>
        </ScrollReveal>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-6 text-center">
        <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to try it?</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Join the waitlist and be the first to know when omnirun launches.
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
        </ScrollReveal>
      </section>

      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}