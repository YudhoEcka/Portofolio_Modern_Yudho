import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Calendar } from "lucide-react";

const items = [
  {
    org: "Diponegoro University",
    role: "PLC Practicum Assistant",
    period: "Feb 2026 – Present",
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
    bullets: [
      "Led and coordinated all divisions (event, logistics, sponsorship, media, security).",
      "Managed planning, execution, and evaluation of the main event (Tabligh Akbar).",
      "Developed leadership, decision-making, and problem-solving under high pressure.",
    ],
  },
  {
    org: "HIMATRO — Advokesma",
    role: "Head of Scholarship & Career Division",
    period: "May 2025 – Jan 2026",
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
    bullets: [
      "Planned and executed Islamic-based student development programs at the Vocational School.",
      "Collaborated cross-team to ensure effective program implementation.",
    ],
  },
  {
    org: "HIMATRO — Advokesma",
    role: "Staff of Scholarship & Career Division",
    period: "May 2024 – Mar 2025",
    bullets: [
      "Helped manage student aspirations and academic-related issues.",
      "Distributed internship and scholarship information to students.",
    ],
  },
  {
    org: "LDK INSANI UNDIP",
    role: "Staff of Syiar Division",
    period: "Jan 2024 – Dec 2024",
    bullets: [
      "Supported planning and execution of Islamic outreach programs.",
      "Coordinated with internal teams to ensure effective implementation.",
    ],
  },
  {
    org: "Baitussalam Mosque",
    role: "Qur'an Tahfidz Teacher",
    period: "Nov 2023 – Present",
    bullets: [
      "Developed structured teaching methods based on student level.",
      "Improved communication, mentoring, and leadership skills.",
    ],
  },
  {
    org: "TikTok",
    role: "Affiliate Marketer & Content Creator",
    period: "Jul 2023 – Jul 2024",
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
                <div className="paper-card p-6">
                  <div className="flex items-center gap-2 text-red-deep mono text-xs uppercase tracking-widest mb-2">
                    <Calendar className="w-3 h-3" /> {it.period}
                  </div>
                  <h3 className="font-serif text-xl text-ink">{it.org}</h3>
                  <p className="font-display text-2xl text-brown -rotate-1 mb-3">{it.role}</p>
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
