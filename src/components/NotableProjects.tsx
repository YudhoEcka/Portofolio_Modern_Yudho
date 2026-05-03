import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  { tag: "IoT", title: "Air Quality Logger", desc: "ESP8266 + MQ-135 logging PM levels to Firebase." },
  { tag: "Web", title: "Campus Event Site", desc: "Static landing page for VOMIFEST registration." },
  { tag: "Embedded", title: "RFID Attendance", desc: "MFRC522 + Arduino with Google Sheets sync." },
  { tag: "PLC", title: "Conveyor Sorter", desc: "Ladder logic for length-based sorting." },
  { tag: "IoT", title: "Aquaponic pH Bot", desc: "Auto-dosing pump triggered by pH thresholds." },
  { tag: "Tools", title: "Wiring Diagram Kit", desc: "Reusable Canva templates for lab reports." },
];

export const NotableProjects = () => (
  <section className="px-6 py-24 bg-cream">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="05 · More work" title="Notable" accent="projects" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.title} variant="scale" delay={i * 60}>
            <article className="paper-card p-6 h-full group hover:-translate-y-1 transition-transform">
              <span className="mono text-[10px] tracking-[0.3em] uppercase text-red-deep">{it.tag}</span>
              <h3 className="font-serif text-xl text-ink mt-2 mb-2 group-hover:text-red-deep transition-colors">
                {it.title}
              </h3>
              <p className="text-sm text-brown-soft leading-relaxed">{it.desc}</p>
              <div className="mt-4 h-px bg-brown/20" />
              <p className="mt-3 font-display text-xl text-brown -rotate-1">view notes →</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
