import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ExternalLink, Github } from "lucide-react";
import iotImg from "@/assets/project-iot.jpg";
import plcImg from "@/assets/project-plc.jpg";
import arduinoImg from "@/assets/project-arduino.jpg";

const projects = [
  {
    n: "01",
    title: "Smart Greenhouse Monitor",
    img: iotImg,
    desc: "An ESP32-based system that streams soil moisture, temperature, and humidity via MQTT to a HiveMQ broker, with a lightweight web dashboard for farmers.",
    tech: ["ESP32", "MQTT", "HiveMQ", "DHT22", "Web Dashboard"],
    features: [
      "Real-time telemetry over MQTT QoS 1",
      "Auto-irrigation trigger via relay control",
      "Mobile-friendly dashboard with live charts",
    ],
    rotate: "-rotate-2",
  },
  {
    n: "02",
    title: "Automated Car Wash Line",
    img: plcImg,
    desc: "An Omron PLC controlled car wash sequence built in CX-Programmer, simulating sensors, conveyor, foam, rinse, and dry stages with safety interlocks.",
    tech: ["Omron PLC", "Ladder Diagram", "CX-Programmer", "Pneumatics"],
    features: [
      "Sequential ladder logic with state retention",
      "Emergency stop & safety interlocks",
      "Indicator HMI for each cycle stage",
    ],
    rotate: "rotate-2",
  },
  {
    n: "03",
    title: "Servo-Controlled Sorting Arm",
    img: arduinoImg,
    desc: "An Arduino + servo project that sorts colored objects using a TCS3200 sensor and a 3-axis servo arm, prototyped on breadboard for educational demos.",
    tech: ["Arduino Uno", "Servo SG90", "TCS3200", "Arduino IDE"],
    features: [
      "Color detection with calibration routine",
      "Smooth servo motion via easing functions",
      "Serial debug & teach-mode positions",
    ],
    rotate: "-rotate-1",
  },
];

export const Projects = () => (
  <section id="projects" className="px-6 py-24">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="04 · Selected work" title="Featured" accent="projects" />

      <div className="space-y-24">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`grid md:grid-cols-12 gap-10 items-center ${
              i % 2 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal variant={i % 2 ? "right" : "left"} className="md:col-span-5">
              <div className={`polaroid ${p.rotate} hover:rotate-0 transition-transform duration-500 relative`}>
                <span className="tape tape-tl" />
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover"
                />
                <p className="font-display text-2xl text-brown text-center mt-3">{p.title.toLowerCase()}</p>
              </div>
            </Reveal>

            <Reveal variant={i % 2 ? "left" : "right"} className="md:col-span-7" delay={120}>
              <div>
                <span className="font-display text-6xl text-red-clay/40 leading-none">{p.n}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-ink mt-1 mb-4">{p.title}</h3>
                <p className="text-brown-soft leading-relaxed mb-5">{p.desc}</p>

                <div className="mb-5">
                  <p className="mono text-xs uppercase tracking-widest text-red-deep mb-2">Tech</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 border border-brown/30 text-brown bg-paper"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="mono text-xs uppercase tracking-widest text-red-deep mb-2">Key features</p>
                  <ul className="space-y-1 text-brown">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-red-clay">◆</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-brown hover:text-red-deep">
                    <Github className="w-4 h-4" /> Source
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-brown hover:text-red-deep">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);
