import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Cpu, Leaf, Lightbulb, Wrench } from "lucide-react";

export const About = () => {
  const facts = [
    { icon: Cpu, label: "Automation Engineering", sub: "Vocational student" },
    { icon: Wrench, label: "Hands-on Builder", sub: "PLC · IoT · Embedded" },
    { icon: Leaf, label: "Smart Agriculture", sub: "Tech for impact" },
    { icon: Lightbulb, label: "Curious Mind", sub: "Always experimenting" },
  ];

  return (
    <section id="about" className="px-6 py-24 bg-cream">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="01 · About me" title="Who" accent="I am" />

        <div className="grid md:grid-cols-12 gap-10">
          <Reveal variant="left" className="md:col-span-7">
            <div className="paper-card p-8 md:p-10 relative">
              <span className="tape tape-tl" />
              <span className="tape tape-tr" />
              <p className="text-lg text-brown leading-relaxed mb-4">
                I'm a vocational student in <strong>Teknologi Rekayasa Otomasi</strong>, fascinated
                by the moment electricity, code, and mechanics start working as one system.
              </p>
              <p className="text-brown-soft leading-relaxed mb-4">
                My focus areas are <em>IoT</em>, <em>PLC programming</em>, and{" "}
                <em>industrial automation</em>. I love bridging the gap between sensors in the field
                and dashboards on the screen — especially for use cases that matter to people:
                farmers, small workshops, and local industries.
              </p>
              <p className="text-brown-soft leading-relaxed">
                I'm now actively looking for an internship where I can contribute to real
                automation problems, learn from senior engineers, and ship things that work in the
                physical world.
              </p>

              <p className="font-display text-3xl text-red-deep mt-6 -rotate-1">
                "Engineer the system. Iterate the mindset." ✿
              </p>
            </div>
          </Reveal>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {facts.map((f, i) => (
              <Reveal key={f.label} variant="right" delay={i * 80}>
                <div className="paper-card p-5 h-full hover:-translate-y-1 transition-transform">
                  <f.icon className="w-7 h-7 text-red-clay mb-3" />
                  <p className="font-serif text-lg text-ink leading-tight">{f.label}</p>
                  <p className="text-xs text-brown-soft mt-1">{f.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
