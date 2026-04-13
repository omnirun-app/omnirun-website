import Image from "next/image";

const testimonials = [
  {
    quote:
      "I'm a tattoo artist, not a tech person. I built my entire portfolio site in an afternoon. I still can't believe I did that.",
    name: "Jelena",
    role: "Tattoo Artist",
    url: "https://jelenalazictattoo.com",
    image: "/testimonials/jelena.jpg",
  },
  {
    quote:
      "We needed a site that hits as hard as our artists. Built it without writing a single line of code. The assistant mode is wild too — it reads my emails and drafts replies so I can focus on the music.",
    name: "Sasha",
    role: "Founder, Soothing Soundwave",
    url: "https://soothingsoundwave.com",
    image: "/testimonials/sasha.jpg",
  },
  {
    quote:
      "Wine is my world — design, events, storytelling. I needed a portfolio that felt as elegant as the work itself. Built exactly that. Clean, beautiful, mine.",
    name: "Marina",
    role: "Founder of VinaiMarina",
    url: "https://vinaimarina.com",
    image: "/testimonials/marina.jpg",
  },
  {
    quote:
      "Music releases used to mean scattered spreadsheets and missed deadlines. I built Release Organizer with omnirun — everything in one place, from idea to launch.",
    name: "Dave",
    role: "Music Producer & Founder of Release Organizer",
    url: "https://releaseorganizer.com",
    image: "/testimonials/dave.jpg",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-medium tracking-widest uppercase text-center mb-3"
          style={{ color: "#2DB87A" }}
        >
          Early Access Feedback
        </p>
        <h2 className="text-3xl font-bold text-center mb-14">
          What our early users say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg p-6 flex flex-col"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <p className="text-sm text-gray-300 leading-relaxed mb-5 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    style={{ width: 40, height: 40 }}
                  />
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{
                      background: "rgba(45, 184, 122, 0.15)",
                      color: "#5DE8A0",
                    }}
                  >
                    {getInitials(t.name)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs transition-colors"
                    style={{ color: "#2DB87A" }}
                  >
                    {t.url.replace("https://", "")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}