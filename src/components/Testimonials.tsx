import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

const quotes = [
  {
    q: "Yudho is the kind of student who shows up early, asks the right questions, and ships working prototypes before the deadline.",
    n: "Pak Andika",
    r: "Lecturer, Automation Engineering",
  },
  {
    q: "He led our committee with calm and clarity. Every problem turned into a checklist, and every checklist turned into results.",
    n: "Rizki P.",
    r: "Co-organizer, VOMIFEST",
  },
  {
    q: "Easy to work with, technically sharp on PLC and ESP32, and always willing to teach the rest of us.",
    n: "Sarah A.",
    r: "Teammate, IoT Project",
  },
];

export const Testimonials = () => (
  <section className="px-6 py-24 bg-cream">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="07 · Kind words" title="What people" accent="say" />
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((t, i) => (
          <Reveal key={t.n} variant="up" delay={i * 100}>
            <figure className={`paper-card p-7 h-full ${i % 2 ? "rotate-1" : "-rotate-1"} hover:rotate-0 transition-transform`}>
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
    </div>
  </section>
);
