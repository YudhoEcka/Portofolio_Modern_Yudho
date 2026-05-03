import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Code2, Wrench, Users } from "lucide-react";

const technical = [
  "PLC (Omron, Ladder Diagram)",
  "Arduino & ESP32",
  "MQTT (HiveMQ)",
  "IoT Systems",
  "HTML, CSS, JavaScript",
];
const tools = ["Fluidsim", "CX-Programmer", "Arduino IDE", "Canva"];
const soft = ["Leadership", "Communication", "Problem Solving", "Teamwork"];

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
  <div className={`paper-card p-7 ${rotate} hover:rotate-0 transition-transform duration-500`}>
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
      <div className="grid md:grid-cols-3 gap-8">
        <Reveal variant="up" delay={0}>
          <Card icon={Code2} title="Technical" items={technical} rotate="-rotate-1" />
        </Reveal>
        <Reveal variant="up" delay={120}>
          <Card icon={Wrench} title="Tools" items={tools} rotate="rotate-1" />
        </Reveal>
        <Reveal variant="up" delay={240}>
          <Card icon={Users} title="Soft Skills" items={soft} rotate="-rotate-1" />
        </Reveal>
      </div>
    </div>
  </section>
);
