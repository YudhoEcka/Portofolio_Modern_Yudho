import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ExternalLink, Youtube } from "lucide-react";
import iotImg from "@/assets/project-iot.jpg";
import plcImg from "@/assets/project-plc.jpg";
import arduinoImg from "@/assets/project-arduino.jpg";

const projects = [
  {
    n: "01",
    title: "IoT Smart Water Heater Mini-Plant",
    img: iotImg,
    desc: "IoT-based smart water heater control system with full 3D mechanical design in SolidWorks, complete electrical schematics, and ESP32 as the main controller.",
    tech: ["ESP32", "SolidWorks", "SSR", "Temp & Flow Sensors", "OLED"],
    features: [
      "3D mechanical assembly designed in SolidWorks",
      "ESP32 + SSR + temperature & flow sensor integration",
      "Real-time sensor-based automatic control",
      "Live data display via OLED",
    ],
    period: "21 April – 02 June 2025",
    rotate: "-rotate-2",
  },
  {
    n: "02",
    title: "Computer Vision — Image Processing & Object Detection",
    img: plcImg,
    desc: "Learning series and implementations covering image processing, object detection, feature matching, model fitting, ball tracking, and panorama image stitching using Python & OpenCV.",
    tech: ["Python", "OpenCV", "Machine Learning", "GUI"],
    features: [
      "Image formation & geometric transformation",
      "Full image processing pipeline with OpenCV",
      "Feature detection & matching",
      "Ball tracking system & auto-panorama GUI",
    ],
    period: "Feb 2026 – Present",
    rotate: "rotate-2",
  },
  {
    n: "03",
    title: "Electric Drive Systems — DC, BLDC & Inverter",
    img: arduinoImg,
    desc: "Deep exploration of electric motor control: DC & AC motor control, BLDC with Six-Step and Space Vector commutation, sinewave inverter, and PWM analysis using Arduino, ESP32, and MATLAB/Simulink.",
    tech: ["Arduino", "ESP32", "MATLAB", "Simulink", "VFD AT4"],
    features: [
      "BLDC control — Six Step, Sinewave, Space Vector",
      "Dynamic system modeling with MATLAB & Simulink",
      "3-phase AC motor control via VFD AT4",
      "PWM analysis & inverter design",
    ],
    period: "2024 – 2025",
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
                <h3 className="font-serif text-3xl md:text-4xl text-ink mt-1 mb-1">{p.title}</h3>
                <p className="mono text-xs uppercase tracking-widest text-red-deep mb-4">{p.period}</p>
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

                <div className="flex gap-4">
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-brown hover:text-red-deep">
                    <Youtube className="w-4 h-4" /> YouTube
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-brown hover:text-red-deep">
                    <ExternalLink className="w-4 h-4" /> Details
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
