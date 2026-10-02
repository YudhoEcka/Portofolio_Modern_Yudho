import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Calendar } from "lucide-react";

const items = [
  {
    org: "PT Promanufacture Indonesia (Formulatrix)",
    role: "Process Engineering Intern",
    period: "Sep 2026 – Present",
    detail: "Official internship period: 1 September 2026 – 26 February 2027",
    meta: "Process Engineering Division · FLO I8 Assembly · Salatiga, Central Java",
    current: true,
    bullets: [
      "Support process engineering activities related to FLO I8 assembly and production.",
      "Learn and contribute to manufacturing and assembly processes.",
      "Support process improvement, troubleshooting, and documentation activities.",
      "Observe and analyze production workflows, quality, and efficiency.",
      "Collaborate with engineers and production teams in a professional manufacturing environment.",
    ],
  },
  {
    org: "Diponegoro University",
    role: "PLC Practicum Assistant",
    period: "Feb 2026 – Present",
    current: false,
    bullets: [
      "Manage attendance and prepare practical modules and software for PLC sessions.",
      "Conduct lessons and hands-on practicum sessions on Programmable Logic Controllers.",
      "Evaluate student performance and final reports.",
    ],
  },
  {
    org: "Vocational Muslim Festival (VOMIFEST)",
    role: "Chair Executive",
    period: "November 2025",
    current: false,
    bullets: [
      "Led and coordinated all divisions (event, logistics, sponsorship, media, security).",
      "Managed planning, execution, and evaluation of the main event (Tabligh Akbar).",
      "Developed leadership, decision-making, and problem-solving under high pressure.",
    ],
  },
  {
    org: "HIMATRO (Himpunan Mahasiswa Teknologi Rekayasa Otomasi) — Advokesma",
    role: "Head of Scholarship & Career Division",
    period: "May 2025 – Jan 2026",
    current: false,
    bullets: [
      "Led the Scholarship and Career Division under Student Advocacy and Welfare.",
      "Managed internship, scholarship, and career development programs for students.",
      "Organized and disseminated career-related information across the department.",
    ],
  },
  {
    org: "FKMI SV UNDIP",
    role: "Staff of Islamic Center Department",
    period: "Jan 2025 – Dec 2025",
    current: false,
    bullets: [
      "Planned and executed Islamic-based student development programs at the Vocational School.",
      "Collaborated cross-team to ensure effective program implementation.",
    ],
  },
  {
    org: "HIMATRO (Himpunan Mahasiswa Teknologi Rekayasa Otomasi) — Advokesma",
    role: "Staff of Scholarship & Career Division",
    period: "May 2024 – Mar 2025",
    current: false,
    bullets: [
      "Helped manage student aspirations and academic-related issues.",
      "Distributed internship and scholarship information to students.",
    ],
  },
  {
    org: "LDK Indah Persaudaraan Islam UNDIP",
    role: "Staff of Syiar Division",
    period: "Jan 2024 – Dec 2024",
    current: false,
    bullets: [
      "Supported planning and execution of Islamic outreach programs.",
      "Coordinated with internal teams to ensure effective implementation.",
    ],
  },
  {
    org: "Baitussalam Mosque",
    role: "Qur'an Tahfidz Teacher",
    period: "Nov 2023 – Present",
    current: false,
    bullets: [
      "Developed structured teaching methods based on student level.",
      "Improved communication, mentoring, and leadership skills.",
    ],
  },
  {
    org: "TikTok",
    role: "Affiliate Marketer & Content Creator",
    period: "Jul 2023 – Jul 2024",
    current: false,
    bullets: [
      "Created and optimized digital content for affiliate marketing.",
      "Developed data-informed communication and growth strategies.",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="px-6 py-24 bg-cream">
    <div className="max-w-6xl mx-auto">
      <SectionHeading eyebrow="03 · Experience" title="Work &" accent="organizations" />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brown/30 -translate-x-1/2" />
        <div className="space-y-12">
          {items.map((it, i) => (
            <Reveal key={it.org + it.period} variant={i % 2 ? "right" : "left"}>
              <div
                className={`relative md:w-1/2 ${
                  i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"
                } pl-12 md:pl-0`}
              >
                <span
                  className="absolute left-4 md:left-auto md:right-auto top-3 w-3 h-3 bg-red-deep rounded-full -translate-x-1/2 md:translate-x-0"
                  style={i % 2 ? { left: "-1.5rem" } : { right: "-1.5rem", left: "auto" }}
                />
                <div className={`paper-card p-6 ${it.current ? "border-l-4 border-red-deep" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2 text-red-deep mono text-xs uppercase tracking-widest mb-2">
                    <Calendar className="w-3 h-3" /> {it.period}
                    {it.current && <span className="bg-red-deep text-paper px-2 py-1">Current</span>}
                  </div>
                  <h3 className="font-serif text-xl text-ink">{it.org}</h3>
                  <p className="font-display text-2xl text-brown -rotate-1 mb-3">{it.role}</p>
                  {it.meta && <p className="text-sm text-brown font-medium mb-1">{it.meta}</p>}
                  {it.detail && <p className="mono text-xs text-brown-soft mb-4">{it.detail}</p>}
                  <ul className="space-y-1.5 text-brown-soft text-sm">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-red-clay">◆</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
