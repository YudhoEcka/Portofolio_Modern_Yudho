import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Compass, PenTool, Code, FlaskConical, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, t: "Planning", d: "Understand the real problem, talk to users, scope the system." },
  { icon: PenTool, t: "Design", d: "Sketch wiring, PLC logic, and data flow before writing code." },
  { icon: Code, t: "Development", d: "Build in small testable units — firmware, ladder, dashboard." },
  { icon: FlaskConical, t: "Testing", d: "Bench tests, edge cases, and field validation." },
  { icon: Rocket, t: "Deployment", d: "Document, hand-off, and monitor in production." },
];

export const Process = () => (
  <section className="px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="08 · How I work" title="My" accent="process" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((s, i) => (
          <Reveal key={s.t} variant="up" delay={i * 90}>
            <div className="paper-card p-5 h-full text-center">
              <div className="font-display text-3xl text-red-clay">0{i + 1}</div>
              <s.icon className="w-7 h-7 text-brown mx-auto my-2" />
              <h3 className="font-serif text-lg text-ink">{s.t}</h3>
              <p className="text-xs text-brown-soft mt-2 leading-relaxed">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
