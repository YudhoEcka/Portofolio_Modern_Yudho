import { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Quote, MessageSquarePlus, ArrowUpRight } from "lucide-react";

// Replace with your own Google Form share link & embed link.
const FORM_LINK = "https://forms.gle/your-form-id";
const FORM_EMBED = "https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true";

const STORAGE_KEY = "yudho_testimonials_v1";

type Testimonial = { q: string; n: string; r: string };

const seed: Testimonial[] = [
  {
    q: "Yudho is the kind of person who shows up early, asks the right questions, and ships working prototypes before the deadline.",
    n: "Pak Andika",
    r: "Lecturer, Automation Engineering",
  },
  {
    q: "He led VOMIFEST with calm and clarity. Every problem turned into a checklist, every checklist turned into results.",
    n: "Rizki P.",
    r: "Co-organizer, VOMIFEST",
  },
  {
    q: "Easy to work with, technically sharp on PLC and ESP32, and always willing to teach the rest of us.",
    n: "Sarah A.",
    r: "Teammate, IoT Project",
  },
];

export const Testimonials = () => {
  const [embedOpen, setEmbedOpen] = useState(false);
  const [items, setItems] = useState<Testimonial[]>(seed);

  // Allows local additions (e.g., manually pasted) to persist for the visitor session.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const extra = JSON.parse(raw) as Testimonial[];
        if (Array.isArray(extra)) setItems([...seed, ...extra]);
      }
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <section className="px-6 py-24 bg-cream">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="07 · Kind words" title="What people" accent="say" />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {items.map((t, i) => (
            <Reveal key={t.n + i} variant="up" delay={i * 100}>
              <figure
                className={`paper-card p-7 h-full ${
                  i % 2 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0 transition-transform`}
              >
                <Quote className="w-7 h-7 text-red-clay mb-3" />
                <blockquote className="font-serif italic text-ink leading-relaxed mb-5">
                  "{t.q}"
                </blockquote>
                <figcaption>
                  <p className="font-display text-2xl text-red-deep -rotate-1">{t.n}</p>
                  <p className="text-xs text-brown-soft mono uppercase tracking-widest">{t.r}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up">
          <div className="paper-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between">
            <div>
              <h3 className="font-serif text-2xl text-ink mb-1">Add your perspective ✿</h3>
              <p className="text-brown-soft text-sm max-w-xl">
                Worked, studied or organized something with me? I'd love to hear your honest take —
                it goes straight to a Google Form I review personally.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setEmbedOpen((o) => !o)}
                className="inline-flex items-center gap-2 bg-brown text-paper px-5 py-3 hover:bg-ink transition-colors"
              >
                <MessageSquarePlus className="w-4 h-4" />
                {embedOpen ? "Hide form" : "Write a testimonial"}
              </button>
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brown text-brown px-5 py-3 hover:bg-brown hover:text-paper transition-colors"
              >
                Open in tab <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {embedOpen && (
            <div className="mt-6 paper-card p-2 overflow-hidden">
              <iframe
                src={FORM_EMBED}
                title="Testimonial form"
                className="w-full"
                style={{ height: 720, border: 0 }}
                loading="lazy"
              />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
};
