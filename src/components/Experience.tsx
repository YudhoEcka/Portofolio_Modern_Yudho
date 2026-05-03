import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Calendar } from "lucide-react";

const items = [
  {
    org: "VOMIFEST — Vocational Festival",
    role: "Event Leader / Project Manager",
    period: "2025",
    bullets: [
      "Led a team of 30+ committee members across 5 divisions to deliver a campus-wide festival.",
      "Managed end-to-end timeline, sponsorship outreach, and on-site coordination.",
      "Festival reached 1,200+ attendees with zero major incidents.",
    ],
  },
  {
    org: "HIMATRO — Automation Engineering Student Association",
    role: "Member, Tech & Education Division",
    period: "2024 — Present",
    bullets: [
      "Organized PLC and Arduino workshops for first-year students.",
      "Built internal documentation for lab equipment usage.",
    ],
  },
  {
    org: "IRMABA — Campus Spiritual Organization",
    role: "Active Member",
    period: "2023 — Present",
    bullets: [
      "Coordinated community events and volunteer initiatives.",
      "Strengthened cross-major collaboration on campus programs.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="px-6 py-24 bg-cream">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="03 · Experience" title="Work &" accent="organizations" />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brown/30 -translate-x-1/2" />
        <div className="space-y-12">
          {items.map((it, i) => (
            <Reveal key={it.org} variant={i % 2 ? "right" : "left"}>
              <div
                className={`relative md:w-1/2 ${
                  i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"
                } pl-12 md:pl-0`}
              >
                <span className="absolute left-4 md:left-auto md:right-auto top-3 w-3 h-3 bg-red-deep rounded-full -translate-x-1/2 md:translate-x-0"
                  style={i % 2 ? { left: "-1.5rem" } : { right: "-1.5rem", left: "auto" }}
                />
                <div className="paper-card p-6">
                  <div className="flex items-center gap-2 text-red-deep mono text-xs uppercase tracking-widest mb-2">
                    <Calendar className="w-3 h-3" /> {it.period}
                  </div>
                  <h3 className="font-serif text-xl text-ink">{it.org}</h3>
                  <p className="font-display text-2xl text-brown -rotate-1 mb-3">{it.role}</p>
                  <ul className="space-y-1.5 text-brown-soft text-sm">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-red-clay">◆</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
