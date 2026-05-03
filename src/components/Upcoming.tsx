import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Sprout, Boxes, Brain } from "lucide-react";

const list = [
  { icon: Sprout, t: "Smart Agriculture System", d: "End-to-end IoT platform for small farmers — soil sensors, weather data, and SMS alerts in low-connectivity areas." },
  { icon: Boxes, t: "Automation-based Sorting", d: "Vision-assisted PLC sorting line for local recycling workshops." },
  { icon: Brain, t: "AI + IoT Integration", d: "Edge ML on ESP32-S3 for predictive maintenance on small motors." },
];

export const Upcoming = () => (
  <section className="px-6 py-24 bg-cream">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="09 · What's next" title="Upcoming" accent="projects" />
      <div className="grid md:grid-cols-3 gap-6">
        {list.map((u, i) => (
          <Reveal key={u.t} variant="up" delay={i * 120}>
            <div className="paper-card p-7 h-full border-l-4 border-red-deep">
              <u.icon className="w-8 h-8 text-red-deep mb-3" />
              <h3 className="font-serif text-xl text-ink mb-2">{u.t}</h3>
              <p className="text-brown-soft text-sm leading-relaxed">{u.d}</p>
              <p className="font-display text-xl text-brown mt-4 -rotate-1">in the works ✎</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
