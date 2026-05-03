import { useEffect, useRef, useState } from "react";

export const Reveal = ({
  children,
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale";
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const anim =
    variant === "left"
      ? "animate-fade-in-left"
      : variant === "right"
      ? "animate-fade-in-right"
      : variant === "scale"
      ? "animate-scale-in"
      : "animate-fade-in";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        animationDelay: `${delay}ms`,
        opacity: visible ? undefined : 0,
      }}
    >
      {visible && <div className={anim} style={{ animationDelay: `${delay}ms` }}>{children}</div>}
    </div>
  );
};
