import { Reveal } from "./Reveal";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "yudho.gangga@example.com", href: "mailto:yudho.gangga@example.com" },
  { icon: Phone, label: "Phone", value: "+62 812-3456-7890", href: "tel:+6281234567890" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yudho-gangga", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/yudho-gangga", href: "#" },
];

export const Contact = () => (
  <section id="contact" className="px-6 py-24 bg-ink text-paper relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(hsl(36 50% 96%) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
    <div className="max-w-5xl mx-auto relative">
      <Reveal>
        <p className="mono text-xs tracking-[0.3em] uppercase text-red-clay mb-3">— 10 · Get in touch</p>
        <h2 className="font-serif text-5xl md:text-7xl mb-4">
          Let's <span className="font-display italic text-red-clay">collaborate</span>.
        </h2>
        <p className="text-lg text-paper/70 max-w-2xl mb-12">
          I'm currently open to internship and entry-level opportunities in IoT, PLC, and
          automation systems. Drop a line — I reply within a day.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {contacts.map((c, i) => (
          <Reveal key={c.label} variant="up" delay={i * 80}>
            <a
              href={c.href}
              className="group flex items-center justify-between gap-4 p-5 border border-paper/15 hover:border-red-clay hover:bg-paper/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 grid place-items-center bg-red-deep text-paper">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-paper/50">{c.label}</p>
                  <p className="font-serif text-lg">{c.value}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-paper/50 group-hover:text-red-clay group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={400}>
        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-wrap gap-4 items-center justify-between text-sm text-paper/60">
          <p>© {new Date().getFullYear()} Yudho Ecka Gangga. Crafted with curiosity.</p>
          <p className="font-display text-2xl text-red-clay -rotate-2">thank you ✿</p>
        </div>
      </Reveal>
    </div>
  </section>
);
