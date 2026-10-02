import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Code2, Wrench, Users, Brain, BarChart3, Heart } from "lucide-react";

const automation = [
  "PLC Programming (Ladder Diagram)",
  "Basic SCADA Concepts",
  "Control & Electrical Troubleshooting",
  "Pneumatic & Electro-Pneumatic",
  "P&ID Analysis",
];
const programming = [
  "C Programming (Basic)",
  "Python Programming (Basic)",
  "Arduino & STM32 (Intermediate)",
  "IoT Applications",
];
const tools = [
  "Proteus & PSIM (Intermediate)",
  "MATLAB (Basic)",
  "EcoStruxure & CX-Programmer (Basic)",
  "SolidWorks (Basic)",
  "Microsoft Office & Google Workspace",
];

const analytical = [
  "Logical & systematic thinking",
  "Data-driven decision making",
  "Root-cause troubleshooting",
  "Breaking complex problems into steps",
];
const emotional = [
  "Empathy & active listening",
  "Self-awareness under pressure",
  "Mentoring & teaching mindset",
  "Calm conflict resolution",
];
const management = [
  "Leadership (Chair Executive — VOMIFEST)",
  "Cross-team coordination",
  "Time & priority management",
  "Public speaking & MC",
];

const Card = ({
  icon: Icon,
  title,
  items,
  rotate,
}: {
  icon: any;
  title: string;
  items: string[];
  rotate: string;
}) => (
  <div className={`paper-card p-7 ${rotate} hover:rotate-0 transition-transform duration-500 h-full`}>
    <span className="tape tape-tl" />
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 grid place-items-center bg-red-deep text-paper">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2 text-brown">
          <span className="mono text-red-clay mt-1">▸</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Skills = () => (
  <section id="skills" className="px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="02 · Toolkit" title="What I bring" accent="to the bench" />

      <h3 className="font-display text-3xl text-brown -rotate-1 mb-6">— Hard skills</h3>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Reveal variant="up" delay={0}>
          <Card icon={Code2} title="Automation & Control" items={automation} rotate="-rotate-1" />
        </Reveal>
        <Reveal variant="up" delay={120}>
          <Card icon={Wrench} title="Programming & Embedded" items={programming} rotate="rotate-1" />
        </Reveal>
        <Reveal variant="up" delay={240}>
          <Card icon={Users} title="Engineering Tools" items={tools} rotate="-rotate-1" />
        </Reveal>
      </div>

      <h3 className="font-display text-3xl text-brown -rotate-1 mb-6">— Soft skills</h3>
      <div className="grid md:grid-cols-3 gap-8">
        <Reveal variant="up" delay={0}>
          <Card icon={BarChart3} title="Analytical Thinking" items={analytical} rotate="rotate-1" />
        </Reveal>
        <Reveal variant="up" delay={120}>
          <Card icon={Heart} title="Emotional Intelligence" items={emotional} rotate="-rotate-1" />
        </Reveal>
        <Reveal variant="up" delay={240}>
          <Card icon={Brain} title="Leadership & Management" items={management} rotate="rotate-1" />
        </Reveal>
      </div>
    </div>
  </section>
);
