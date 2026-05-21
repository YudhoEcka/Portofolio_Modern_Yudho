import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Award, Trophy, Medal, Star, BookOpen, Users } from "lucide-react";

const list = [
  { y: "2026", icon: Star, t: "GPA 3.87 / 4.0 — UNDIP", d: "Cumulative GPA across 105 SKS in Applied Automation Engineering Technology." },
  { y: "2026", icon: Trophy, t: "PLC Practicum Assistant", d: "Selected as practicum assistant for Programmable Logic Controller course at Diponegoro University." },
  { y: "2025", icon: Medal, t: "Chair Executive — VOMIFEST", d: "Led the Vocational Muslim Festival as Chair Executive across event, logistics, sponsorship, media and security divisions." },
  { y: "2024", icon: Award, t: "4th Place — Essay Competition", d: "Al Bahrain Islamic Fair 2024, Semarang." },
  { y: "2024", icon: BookOpen, t: "Public Speaking for Dakwah Training", d: "TPC Training Center Semarang." },
  { y: "2023", icon: Users, t: "Leadership Training & LKMM-PD", d: "Foundational student leadership and management training (HIMATRO — Himpunan Mahasiswa Teknologi Rekayasa Otomasi)." },
];

export const Achievements = () => (
  <section id="achievements" className="px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="06 · Recognition" title="Achievements &" accent="training" />
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
