import { Reveal } from "./Reveal";

export const SectionHeading = ({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
}) => (
  <Reveal>
    <div className="mb-12">
      <p className="mono text-xs tracking-[0.3em] uppercase text-red-deep mb-2">— {eyebrow}</p>
      <h2 className="font-serif text-4xl md:text-5xl text-ink">
        {title}{" "}
        {accent && <span className="font-display italic text-red-clay">{accent}</span>}
      </h2>
    </div>
  </Reveal>
);
