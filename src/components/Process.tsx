import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { BookOpen, Wrench, GraduationCap, Users, TrendingUp } from "lucide-react";

const steps = [
  { icon: BookOpen, t: "Learning & Understanding", d: "Absorb fundamentals deeply — theory, datasheets, and first-principles thinking." },
  { icon: Wrench, t: "Practicing Knowledge", d: "Turn ideas into working prototypes — bench tests, code, and hands-on iteration." },
  { icon: GraduationCap, t: "Teaching Others", d: "Mentor peers and assist practicums — teaching cements true understanding." },
  { icon: Users, t: "Collaborating & Innovating", d: "Build with teams across divisions, blending perspectives into better systems." },
  { icon: TrendingUp, t: "Continuous Improvement", d: "Reflect, refine, and grow — every iteration sharpens the engineer's mindset." },
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
