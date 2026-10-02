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
                I’m a 7th-semester <strong>Applied Automation Engineering Technology</strong> student
                at Diponegoro University with a strong interest in industrial automation, process
                engineering, control systems, embedded systems, and IoT.
              </p>
              <p className="text-brown-soft leading-relaxed mb-4">
                I enjoy learning through hands-on projects and real-world engineering environments,
                from PLC programming and control systems to microcontrollers, computer vision, and
                automation-related applications.
              </p>
              <p className="text-brown-soft leading-relaxed mb-4">
                Currently, I am gaining professional experience as a <strong>Process Engineering Intern</strong> at
                PT Promanufacture Indonesia (Formulatrix), Salatiga, where I am involved in the FLO I8
                assembly and production process.
              </p>
              <p className="text-brown-soft leading-relaxed">
                I believe that persistence, consistency, and continuous learning are essential to
                growing from a student into a capable engineer. I approach technical challenges with
                a structured, problem-solving mindset, breaking complex problems into practical steps
                and continuously improving through hands-on experience.
              </p>

              <div className="mt-6 pt-5 border-t border-brown/20 grid sm:grid-cols-2 gap-3 text-sm text-brown">
                <p><strong>Degree:</strong> Bachelor of Applied Science</p>
                <p><strong>GPA:</strong> 3.87 / 4.00</p>
                <p className="sm:col-span-2"><strong>Study period:</strong> August 2023 – Present</p>
              </div>

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
