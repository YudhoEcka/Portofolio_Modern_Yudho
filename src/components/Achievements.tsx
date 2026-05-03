import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Award, Trophy, Medal, Star } from "lucide-react";

const list = [
  { y: "2025", icon: Trophy, t: "Finalist — National Automation Challenge", d: "Top 10 of 80+ teams for an IoT-based smart greenhouse prototype." },
  { y: "2025", icon: Medal, t: "Best Project Leader — VOMIFEST", d: "Recognized for organizing a 1,200+ attendee vocational festival." },
  { y: "2024", icon: Award, t: "Certified PLC Operator — Omron Track", d: "Completed CX-Programmer certification with distinction." },
  { y: "2024", icon: Star, t: "Outstanding Student — Automation Dept.", d: "Top 5% academic performance in the cohort." },
];

export const Achievements = () => (
  <section id="achievements" className="px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="06 · Recognition" title="Achievements &" accent="awards" />
      <div className="grid md:grid-cols-2 gap-6">
        {list.map((a, i) => (
          <Reveal key={a.t} variant={i % 2 ? "right" : "left"} delay={i * 80}>
            <div className="paper-card p-6 flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 grid place-items-center bg-red-deep text-paper">
                <a.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="mono text-xs text-red-deep tracking-widest">{a.y}</p>
                <h3 className="font-serif text-xl text-ink mb-1">{a.t}</h3>
                <p className="text-brown-soft text-sm leading-relaxed">{a.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
