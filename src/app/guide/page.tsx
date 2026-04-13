"use client";

import { useState } from "react";

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        q: "Downloading and installing omnirun",
        keywords: "download install windows mac linux",
        a: [
          <>Head to <strong>omnirun.app</strong> and click Download. The site detects your system automatically — you'll get the right file for Windows (.exe), macOS (.dmg), or Linux (.AppImage).</>,
          <>Open the file and follow the prompts. On Mac, drag omnirun into Applications. On Windows, run the installer. On Linux, make the AppImage executable and run it.</>,
        ],
      },
      {
        q: "Setting up your API key",
        keywords: "api key byok anthropic setup provider",
        a: [
          <>omnirun uses a <strong>Bring Your Own Key</strong> model. You connect your own AI provider key and pay the provider directly — we never mark up the cost.</>,
          <>Go to <strong>console.anthropic.com</strong>, create an account, and generate an API key. In omnirun, open <strong>Settings → AI Providers</strong>, paste it, and hit Test Connection.</>,
        ],
        tip: "You can also use OpenAI, Google, Groq, or local models through Ollama. Add as many providers as you like.",
      },
      {
        q: "Creating your first project",
        keywords: "first project create new folder describe",
        a: [
          <>Click <strong>+ New Project</strong> in the sidebar. Name it, pick a folder, and optionally choose a template.</>,
          <>Then describe what you want in the chat: &quot;Build me a portfolio site with a dark theme and a contact page.&quot; omnirun creates real files in your folder and shows a live preview.</>,
          <>Everything lives on your computer. You own all the files.</>,
        ],
      },
      {
        q: "Simple mode vs Technical mode",
        keywords: "simple technical mode toggle",
        a: [
          <><strong>Simple mode</strong> hides the terminal, git info, and developer details. Just describe and see results.</>,
          <><strong>Technical mode</strong> shows the terminal, git branch, changed file count, and more. Toggle anytime from the top bar.</>,
        ],
      },
      {
        q: "The 7-day free trial",
        keywords: "trial free 7 day credit card",
        a: [
          <>New accounts get <strong>7 days of full Pro access</strong> — up to 5 projects, all templates, unlimited history. Credit card required, not charged until it ends. Cancel anytime.</>,
          <>After the trial, pick a plan. API key cost is separate — paid directly to your provider.</>,
        ],
      },
    ],
  },
  {
    id: "building",
    title: "Building a Website or Web App",
    items: [
      {
        q: "The full walkthrough",
        keywords: "walkthrough build describe website",
        a: [
          <>Create a project, pick a folder, optionally pick a template. Describe what you want: &quot;A bakery site with a menu, about page, and ordering.&quot;</>,
          <>omnirun builds real files and shows a live preview. Want changes? Just say so: &quot;Make the header blue&quot; or &quot;Add testimonials.&quot; Keep going until you&apos;re happy, then deploy.</>,
        ],
      },
      {
        q: "Using templates",
        keywords: "templates starting point",
        a: [
          <>Templates are pre-built starting points — Websites, Personal Tools, Business Tools. Pick one and describe changes: &quot;Change the hero to &apos;Fresh Baked Daily&apos; with warm colors.&quot; Starting empty works too.</>,
        ],
      },
      {
        q: "Live preview",
        keywords: "preview live changes reload",
        a: [
          <>Changes show instantly in the preview panel. Drag the divider to resize, collapse it, or click <strong>Open in Browser</strong> for full screen.</>,
        ],
      },
      {
        q: "Deploying your site",
        keywords: "deploy vercel netlify domain ssl",
        a: [
          <>Say &quot;Deploy this.&quot; Connect Vercel or Netlify if you haven&apos;t — takes seconds. Live in 30–60 seconds.</>,
          <>Custom domain? Connect your registrar (Namecheap, Cloudflare, etc.) and omnirun handles DNS, SSL — everything automatically.</>,
        ],
      },
      {
        q: "Can I build mobile apps?",
        keywords: "mobile app native ios android responsive",
        a: [
          <>Native mobile app building is coming soon. Right now, omnirun builds websites and web apps — but everything can be fully responsive for phones and tablets.</>,
          <>Say &quot;make it mobile-friendly&quot; and omnirun handles the layout. Users visit through their browser — no app store needed.</>,
        ],
        tip: "Many businesses run great on a responsive website. Orders, menus, bookings, portfolios — a web app handles all of it.",
      },
    ],
  },
  {
    id: "voice",
    title: "Voice Control",
    items: [
      {
        q: "Push-to-talk",
        keywords: "push to talk hold button",
        a: [
          <>All plans. Hold the mic button or keyboard shortcut, speak, release. Words appear as text and send to the AI — like a walkie-talkie.</>,
        ],
      },
      {
        q: "Always-on wake word",
        keywords: "always on wake word hey omni listening",
        a: [
          <>Studio and above. Say <strong>&quot;Hey Omni&quot;</strong> and start talking — no buttons. Detection runs on-device; zero audio leaves your computer until triggered.</>,
          <>Other options: &quot;Hey Dev&quot;, &quot;Computer&quot;, or a custom phrase. Set in <strong>Settings → Voice</strong>.</>,
        ],
      },
      {
        q: "Continuous conversation",
        keywords: "conversation continuous hands free",
        a: [
          <>During a task, voice stays active. Say what you want, see the result, say &quot;darker,&quot; see it update, say &quot;save it&quot; — all hands-free. Exits automatically when done.</>,
        ],
      },
      {
        q: "Privacy and controls",
        keywords: "privacy mute microphone indicator",
        a: [
          <>Always-on only listens for the wake word. Visible indicator shows mic status. Mute with F9, auto-pause in banking apps or during media. All in <strong>Settings → Voice</strong>.</>,
        ],
      },
    ],
  },
  {
    id: "connections",
    title: "Connections",
    items: [
      {
        q: "Two types of connections",
        keywords: "two types project assistant personal",
        a: [
          <><strong>Project connections</strong> — Vercel, GitHub, Stripe, Supabase. Set up in Settings.</>,
          <><strong>Assistant connections</strong> — Gmail, Outlook, Calendar. Live in the Assistant section.</>,
          <>Always separate. Email never appears in project settings, and vice versa.</>,
        ],
      },
      {
        q: "How to connect a service",
        keywords: "connect service token",
        a: [
          <><strong>Settings → Project Connections</strong> or open <strong>Assistant</strong>. Pick a service, paste your token or sign in. omnirun tests it automatically.</>,
          <>Once connected, the AI can use it. &quot;Deploy to Vercel&quot; or &quot;check my Gmail&quot; just works.</>,
        ],
      },
      {
        q: "Troubleshooting connections",
        keywords: "expired reconnect troubleshoot",
        a: [
          <>Token expired? Settings → find the service → reconnect. omnirun re-tests on every startup, so you&apos;ll usually see a warning before anything breaks.</>,
        ],
      },
    ],
  },
  {
    id: "assistant",
    title: "Assistant",
    items: [
      {
        q: "What is the Assistant?",
        keywords: "what is assistant personal global",
        a: [
          <>Your personal AI, outside of projects. Click <strong>Assistant</strong> in the sidebar. Use it for email, calendar, general questions, or watching agents.</>,
        ],
      },
      {
        q: "Email and calendar",
        keywords: "email gmail outlook calendar",
        a: [
          <>Connect Gmail or Outlook in the Assistant section. Ask &quot;Do I have important emails?&quot; or &quot;What&apos;s on my calendar tomorrow?&quot; It&apos;s an AI layer on your existing account, not a separate client.</>,
        ],
      },
      {
        q: "Watching agents",
        keywords: "watching agents monitor notify",
        a: [
          <>Monitor things and get notified — &quot;Let me know when Marco replies&quot; or &quot;Alert me if my site goes down.&quot; Event-driven, unlike scheduled tasks which run on a timer.</>,
        ],
      },
      {
        q: "Memory",
        keywords: "memory remembers about me forget",
        a: [
          <>omnirun remembers preferences and details you share. See everything via the brain icon in Assistant. Edit or delete anything. Say &quot;Forget that I mentioned X&quot; and it&apos;s gone.</>,
          <>Stored locally. Studio+ can sync across devices with encryption.</>,
        ],
      },
    ],
  },
  {
    id: "billing",
    title: "Billing & API Keys",
    items: [
      {
        q: "How pricing works",
        keywords: "byok pricing cost how much",
        a: [
          <>Two costs: your <strong>omnirun subscription</strong> and your <strong>AI provider costs</strong> (paid directly to Anthropic, OpenAI, etc.). We never mark up AI costs.</>,
        ],
        tip: "With Anthropic and Smart Routing enabled in Settings, omnirun routes tasks to the cheapest capable model — Haiku for quick tasks, Sonnet for building, Opus for hard problems. Can save 60–80%.",
      },
      {
        q: "Comparing plans",
        keywords: "plans starter pro studio compare",
        a: [
          <><strong>Starter €10/mo</strong> — 1 project, push-to-talk, 3 integrations, 7-day Time Machine.</>,
          <><strong>Pro €29/mo</strong> — 5 projects, all templates, unlimited history, memory, scheduled tasks (runs when app is closed).</>,
          <><strong>Studio €59/mo</strong> — 15 projects, wake word, browser control, memory sync. Teams start at €99/mo.</>,
        ],
      },
      {
        q: "Budget alerts",
        keywords: "budget alerts spending",
        a: [
          <>omnirun tracks AI spending in-app. Set alerts in Settings to get notified at your limit. This is for provider costs — the subscription is a flat fee.</>,
        ],
      },
      {
        q: "Changing or cancelling your plan",
        keywords: "cancel change upgrade downgrade",
        a: [
          <><strong>Settings → Billing</strong>. Upgrade, downgrade, or cancel anytime. Changes take effect at the end of your billing period.</>,
        ],
      },
    ],
  },
  {
    id: "tasks",
    title: "Scheduled Tasks",
    items: [
      {
        q: "Creating a task",
        keywords: "create task schedule natural language",
        a: [
          <>Describe it in chat: &quot;Back up my project to Google Drive every Sunday at 2am.&quot; omnirun creates the task and shows it in Tasks. No cron syntax — plain English only.</>,
        ],
      },
      {
        q: "How tasks run",
        keywords: "runs app closed computer",
        a: [
          <>Starter: runs while app is open. Pro+: runs when app is closed, as long as computer is on. Missed a task? omnirun tells you on next launch and offers to run it now.</>,
        ],
      },
      {
        q: "Notifications and morning summary",
        keywords: "notifications morning summary failure",
        a: [
          <>Notified on success or failure. Failures are actionable — expired connection shows a Reconnect button. On launch, the AI summarizes what ran overnight.</>,
        ],
      },
    ],
  },
  {
    id: "time-machine",
    title: "Time Machine",
    items: [
      {
        q: "How Time Machine works",
        keywords: "version history undo restore",
        a: [
          <>Every AI change creates a snapshot. Go back to any version with one click. Open from <strong>Tools</strong> in the top bar. Starter: last 7 days. Pro+: unlimited.</>,
        ],
      },
    ],
  },
  {
    id: "teams",
    title: "Teams",
    items: [
      {
        q: "Inviting team members",
        keywords: "invite member seats",
        a: [
          <>Invite by email. Team: 5 seats. Business: 15. Enterprise: unlimited. Each member gets their own login and shared project access.</>,
        ],
      },
      {
        q: "Shared vs individual API keys",
        keywords: "api key shared individual team",
        a: [
          <>Admin choice: shared team key (company pays) or individual keys (each member brings their own). Change anytime in team settings.</>,
        ],
      },
      {
        q: "Admin controls and activity logs",
        keywords: "admin controls activity log",
        a: [
          <>Team and Business include activity logs. Business adds advanced admin controls and audit logs.</>,
        ],
      },
    ],
  },
];

export default function GuidePage() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const q = search.toLowerCase().trim();

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-[720px] mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-1.5">Guide</h1>
        <p className="text-sm text-gray-400 mb-6">
          Everything you need to know about omnirun, explained in plain English.
        </p>

        {/* Intro */}
        <div className="bg-[#383C43] rounded-lg p-5 mb-5">
          <p className="text-[13px] text-gray-400 leading-[1.8] mb-2">
            <strong className="text-[#DCE0E4] font-medium">omnirun</strong> is
            a desktop app that lets you build websites, automate tasks, and
            control your computer — by describing what you want. Type or talk. It
            creates real files on your machine, deploys to real hosting, and
            connects to real services. You own everything.
          </p>
          <p className="text-[13px] text-gray-400 leading-[1.8]">
            It works with your own AI provider key (Anthropic, OpenAI, Google, or
            others), so there&apos;s no markup on AI costs. The app runs on Windows,
            macOS, and Linux.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 opacity-50"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full py-2.5 pl-10 pr-3 bg-[#383C43] border border-[#555B63] rounded-lg text-[13px] text-[#DCE0E4] placeholder:text-gray-400/50 outline-none focus:border-[#2DB87A] transition-colors"
          />
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-5">
          {sections.map((section) => {
            const filtered = section.items.filter((item) => {
              if (!q) return true;
              const text = item.keywords + " " + item.q.toLowerCase() + " " + item.a.map((a) => (typeof a === "string" ? a : "")).join(" ");
              return text.includes(q);
            });

            if (q && filtered.length === 0) return null;

            return (
              <div key={section.id}>
                <div className="text-[13px] font-semibold mb-2">
                  {section.title}
                </div>
                <div className="bg-[#383C43] rounded-lg overflow-hidden">
                  {(q ? filtered : section.items).map((item, i) => {
                    const itemId = `${section.id}-${i}`;
                    const isOpen = openItems.has(itemId);

                    return (
                      <div
                        key={itemId}
                        className="border-b border-white/[0.06] last:border-b-0"
                      >
                        <button
                          onClick={() => toggle(itemId)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left hover:opacity-80 transition-opacity"
                        >
                          <span className="text-[13px] font-medium">
                            {item.q}
                          </span>
                          <svg
                            className={`text-gray-400 opacity-50 shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-3.5">
                            {item.a.map((paragraph, j) => (
                              <p
                                key={j}
                                className="text-xs text-gray-400 leading-[1.75] mb-2 last:mb-0 [&>strong]:text-[#DCE0E4] [&>strong]:font-medium"
                              >
                                {paragraph}
                              </p>
                            ))}
                            {item.tip && (
                              <div className="mt-1.5 p-2.5 bg-[#2DB87A]/[0.08] border border-[#2DB87A]/20 rounded-lg text-[11px] text-gray-400 leading-[1.7]">
                                {item.tip}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-[#383C43] rounded-lg p-3.5 mt-5 text-center text-[11px] text-gray-400">
          Can&apos;t find what you need? Email us at{" "}
          <a
            href="mailto:support@omnirun.com"
            className="text-[#5DE8A0] hover:underline"
          >
            support@omnirun.com
          </a>
        </div>
      </div>
    </div>
  );
}