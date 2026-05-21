import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import rectifierImg from "@/assets/notable-rectifier.jpg";
import mcuImg from "@/assets/notable-mcu.jpg";
import controlImg from "@/assets/notable-control.jpg";
import powerImg from "@/assets/notable-power.jpg";
import scadaImg from "@/assets/notable-scada.jpg";

const items = [
  {
    tag: "Electronics",
    title: "Half-Wave Rectifier PCB",
    desc: "Designed and implemented a half-wave rectifier circuit on PCB, with full output characteristic analysis using oscilloscope.",
    period: "2024",
    img: rectifierImg,
  },
  {
    tag: "Embedded",
    title: "Microcontroller-based Practicum Modules",
    desc: "Reusable Arduino & STM32 lab modules built during Microcontroller and Embedded System practicum (Grade A).",
    period: "2024 – 2025",
    img: mcuImg,
  },
  {
    tag: "Control",
    title: "Intelligent Control System Practicum",
    desc: "Hands-on intelligent control work using fuzzy and PID approaches as part of Praktikum Sistem Kontrol Cerdas.",
    period: "2025",
    img: controlImg,
  },
  {
    tag: "Power",
    title: "Power Electronics Practicum",
    desc: "Built and tested converter circuits, SPWM inverter and motor drive analysis in the Power Electronics practicum series (Grade A).",
    period: "2024",
    img: powerImg,
  },
  {
    tag: "SCADA",
    title: "SCADA Practicum Project",
    desc: "Designed supervisory dashboards, HMI screens and tag mapping on Rexroth ctrlX for a simulated industrial process.",
    period: "2025",
    img: scadaImg,
  },
];

export const NotableProjects = () => (
  <section id="more-work" className="px-6 py-24 bg-cream">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="05 · More work" title="Notable" accent="projects" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.title} variant="scale" delay={i * 60}>
            <article className="paper-card overflow-hidden h-full group hover:-translate-y-1 transition-transform">
              <div className="relative aspect-[4/3] overflow-hidden bg-brown/10">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="mono text-[10px] tracking-[0.3em] uppercase text-red-deep">{it.tag}</span>
                <h3 className="font-serif text-xl text-ink mt-2 mb-2 group-hover:text-red-deep transition-colors">
                  {it.title}
                </h3>
                <p className="text-sm text-brown-soft leading-relaxed">{it.desc}</p>
                <div className="mt-4 h-px bg-brown/20" />
                <p className="mt-3 mono text-xs uppercase tracking-widest text-brown">{it.period}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
