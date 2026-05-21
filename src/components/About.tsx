import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Users, Heart, ClipboardList, Brain, Lightbulb, MessageSquare, Target, Search } from "lucide-react";

export const About = () => {
  const facts = [
    { icon: Users, label: "Teamwork", sub: "Cross-team collaboration" },
    { icon: Heart, label: "Emotional Intelligence", sub: "Empathy & self-awareness" },
    { icon: ClipboardList, label: "Project Management", sub: "Plan · Execute · Evaluate" },
    { icon: Brain, label: "Problem Solving", sub: "Structured debugging" },
    { icon: Search, label: "Analytical Thinking", sub: "Data-driven decisions" },
    { icon: MessageSquare, label: "Communication", sub: "Clear & concise" },
    { icon: Lightbulb, label: "Creativity", sub: "Fresh engineering ideas" },
    { icon: Target, label: "Focus on Goals", sub: "Purpose-driven mindset" },
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
                I'm a 3rd-year <strong>Applied Automation Engineering Technology</strong> student
                at Diponegoro University, with around three years of hands-on work in automation
                and control — from PLC programming and motor control system design, to computer
                vision and microcontroller-based IoT.
              </p>
              <p className="text-brown-soft leading-relaxed mb-4">
                I believe <em>persistence, consistency, and deep focus</em> are what truly turn a
                student into an engineer. I approach every technical challenge with a goal-oriented,
                problem-solving mindset — breaking complex problems into structured steps, then
                solving them systematically.
              </p>
              <p className="text-brown-soft leading-relaxed">
                Currently I serve as a PLC Practicum Assistant at UNDIP and am actively looking for
                an internship in industrial automation, control systems, and embedded engineering.
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
