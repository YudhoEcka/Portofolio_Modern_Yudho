import heroPortrait from "@/assets/hero-portrait.jpg";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* decorative scribbles */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-soft/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-brown/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center relative">
        <div className="md:col-span-7 space-y-6">
          <Reveal variant="left">
            <div className="flex items-center gap-3 text-brown-soft">
              <span className="h-px w-10 bg-brown-soft/50" />
              <span className="mono text-xs tracking-[0.3em] uppercase">Portfolio · 2026</span>
            </div>
          </Reveal>

          <Reveal variant="left" delay={100}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink">
              Yudho Ecka <br />
              <span className="italic text-red-deep">Gangga</span>
              <span className="font-display text-red-clay text-5xl ml-3 inline-block animate-tilt">.</span>
            </h1>
          </Reveal>

          <Reveal variant="left" delay={200}>
            <p className="font-display text-3xl text-brown -rotate-1 inline-block">
              Automation Engineering Student · IoT &amp; PLC Enthusiast
            </p>
          </Reveal>

          <Reveal variant="left" delay={300}>
            <p className="text-lg text-brown-soft max-w-xl leading-relaxed">
              <span className="underline-wavy">Building intelligent systems for real-world impact</span> —
              from smart agriculture sensors to industrial PLC lines.
            </p>
          </Reveal>

          <Reveal variant="left" delay={400}>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-red-deep text-paper px-6 py-3 font-medium hover:bg-ink transition-colors shadow-[var(--shadow-paper)]"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-brown text-brown px-6 py-3 font-medium hover:bg-brown hover:text-paper transition-colors"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="flex items-center gap-6 pt-4 text-brown-soft text-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-clay" />
                <span>Open to internships</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Bandar Lampung, Indonesia</span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 relative">
          <Reveal variant="right" delay={200}>
            <div className="polaroid rotate-3 hover:rotate-0 transition-transform duration-500 relative">
              <span className="tape tape-tl" />
              <img
                src={heroPortrait}
                alt="Yudho Ecka Gangga at his automation workbench"
                width={768}
                height={960}
                className="w-full aspect-[4/5] object-cover"
              />
              <p className="font-display text-2xl text-brown text-center mt-3">
                ~ at the workbench ~
              </p>
            </div>
          </Reveal>
          <div className="absolute -bottom-6 -left-4 stamp bg-paper">Engineer in training</div>
        </div>
      </div>
    </section>
  );
};
