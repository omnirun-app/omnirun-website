"use client";

import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";
import Lightbox from "@/components/Lightbox";

/* ─── Feature Data ────────────────────────────────────────── */

type MediaItem =
  | { type: "video"; src: string }
  | { type: "image"; src: string; details?: string[] }
  | null;

const features: {
  title: string;
  description: string;
  comingSoon: boolean;
  layout: "split" | "full";
  media: MediaItem;
}[] = [
  {
    title: "Build anything",
    description:
      "Your project lives on your computer — not in someone else's cloud. Open any folder, and omnirun understands what's inside. Want a website? An online store? An internal tool? Just describe it. omnirun creates real files you can see, touch, and keep forever. No expiring sessions, no \"export and pray.\"",
    comingSoon: false,
    layout: "split",
    media: { type: "image", src: "/promo_images/Build_1.jpg", details: ["/promo_images/Build_2.jpg", "/promo_images/Build_3.jpg"] },
  },
  {
    title: "Real-time preview",
    description:
      "Watch your project come to life as it's being built. Every change shows up instantly in a live preview — the same way your visitors will see it. No refreshing, no waiting. When it looks right, you're done.",
    comingSoon: false,
    layout: "split",
    media: { type: "image", src: "/promo_images/Preview_2.jpg", details: ["/promo_images/Preview_3.jpg"] },
  },
  {
    title: "Voice control",
    description:
      "Talk to your computer and it actually listens. \"Make the header bigger.\" \"Add a contact form.\" \"Change the color to blue.\" Just say it. You can even have a back-and-forth conversation while omnirun makes changes in real time.",
    comingSoon: false,
    layout: "full",
    media: { type: "video", src: "/promo_videos/omni_voice_control.mp4" },
  },
  {
    title: "Connections hub",
    description:
      "Connect your favorite services once — deploy to Vercel, push code to GitHub, accept payments with Stripe, send emails with Resend — and never think about it again. omnirun handles the wiring. Currently 12 integrations and growing.",
    comingSoon: false,
    layout: "split",
    media: { type: "image", src: "/promo_images/Connections.jpg" },
  },
  {
    title: "AI Assistant",
    description:
      "Your personal AI that lives outside your projects. It connects to your email and calendar, summarizes what matters, drafts replies, and takes action — all from a simple chat. Like having a smart assistant who never sleeps.",
    comingSoon: false,
    layout: "split",
    media: { type: "image", src: "/promo_images/Assistant_2.jpg" },
  },
  {
    title: "Scheduled tasks",
    description:
      "Set it and forget it. Want a weekly report? A daily backup? A price check every morning? Tell omnirun once, pick a schedule, and it runs automatically — even when the app is closed.",
    comingSoon: false,
    layout: "split",
    media: { type: "image", src: "/promo_images/Tasks_2.jpg" },
  },
  {
    title: "Templates",
    description:
      "Don't start from scratch. Browse ready-made templates — business websites, dashboards, trackers, automations — and customize them by describing what you want to change. From blank to finished in minutes.",
    comingSoon: false,
    layout: "split",
    media: { type: "image", src: "/promo_images/Template_2.jpg", details: ["/promo_images/Template_3.jpg"] },
  },
  {
    title: "Time Machine",
    description:
      "Every change is saved, automatically. Made a mistake? Go back to any point in your project's history and restore it with one click. It's like unlimited undo for your entire project.",
    comingSoon: false,
    layout: "split",
    media: { type: "image", src: "/promo_images/TimeMachine_2.jpg" },
  },
  {
    title: "Mobile companion",
    description:
      "Left your desk but had an idea? Open the omnirun app on your phone, wake up your computer remotely, and send instructions. Watch your project being built from your couch — or your bed.",
    comingSoon: true,
    layout: "split",
    media: null,
  },
  {
    title: "Browser & desktop control",
    description:
      "omnirun can see and control your screen. \"Book a table for Friday.\" \"Find flights to Berlin.\" \"Fill out this form with my info.\" It clicks, types, and navigates — while you watch and approve.",
    comingSoon: true,
    layout: "split",
    media: null,
  },
  {
    title: "Teams",
    description:
      "Work together on projects with your team. Shared access, admin controls, activity logs, and role management. Everyone builds together, no one steps on each other's toes.",
    comingSoon: false,
    layout: "split",
    media: { type: "image", src: "/promo_images/Teams_2.jpg" },
  },
];

/* ─── Media Block ─────────────────────────────────────────── */

function MediaBlock({ media }: { media: MediaItem }) {
  if (!media) {
    return (
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
    );
  }

  if (media.type === "video") {
    return (
      <div className="w-full rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
        <video
          src={media.src}
          controls
          muted
          playsInline
          preload="metadata"
          className="w-full h-auto"
          style={{ display: "block" }}
        />
      </div>
    );
  }

  const details = media.details || [];

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="w-full rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
        <Lightbox
          src={media.src}
          className="w-full h-auto"
          style={{ display: "block" }}
        />
      </div>

      {/* Detail images */}
      {details.length > 0 && (
        <div className={`grid gap-3 ${details.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
          {details.map((src, i) => (
            <div
              key={i}
              className="w-full rounded-lg overflow-hidden"
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
      )}
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function Features() {
  const [showModal, setShowModal] = useState(false);
  let splitIndex = 0;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-6 text-center">
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
      </section>

      {/* Feature sections */}
      {features.map((feature) => {
        if (feature.layout === "full") {
          return (
            <section key={feature.title} className="py-16 px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-8">
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

                <MediaBlock media={feature.media} />
              </div>
            </section>
          );
        }

        const isReversed = splitIndex % 2 === 1;
        splitIndex++;

        return (
          <section key={feature.title} className="py-12 sm:py-16 px-6">
            <div
              className={`max-w-5xl mx-auto flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-start gap-8 md:gap-12`}
            >
              {/* Text */}
              <div className="flex-1 w-full md:pt-4">
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
              </div>

              {/* Media */}
              <div className="flex-1 w-full">
                <MediaBlock media={feature.media} />
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 sm:py-24 px-6 text-center">
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
      </section>

      <WaitlistModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}