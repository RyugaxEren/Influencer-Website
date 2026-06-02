import { Section } from "./Section";
import { AnimatedDonut } from "@/components/fx/AnimatedDonut";
import { Reveal } from "@/components/fx/Reveal";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const ageSegments = [
  { label: "18–24", value: 45, color: "#8B5CF6" },
  { label: "25–34", value: 38, color: "#EC4899" },
  { label: "35+", value: 17, color: "#06B6D4" },
];
const genderSegments = [
  { label: "Female", value: 68, color: "#EC4899" },
  { label: "Male", value: 29, color: "#8B5CF6" },
  { label: "Non-binary", value: 3, color: "#06B6D4" },
];
const countries = [
  { label: "United States", value: 42, color: "#8B5CF6" },
  { label: "United Kingdom", value: 18, color: "#EC4899" },
  { label: "India", value: 12, color: "#06B6D4" },
  { label: "Canada", value: 8, color: "#a78bfa" },
  { label: "Other", value: 20, color: "#6b5b95" },
];

function Bar({ label, value, color, delay = 0 }: { label: string; value: number; color: string; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [w, setW] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setW(value), delay);
    return () => clearTimeout(t);
  }, [inView, value, delay]);
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-fg-muted">{label}</span>
        <span className="font-mono text-white">{w}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-violet/10">
        <div
          className="h-full rounded-full transition-[width] duration-[1400ms] ease-out"
          style={{ width: `${w}%`, background: color, boxShadow: `0 0 12px ${color}` }}
        />
      </div>
    </div>
  );
}

export function Demographics() {
  return (
    <Section eyebrow="04.5 · Audience" title={<>Who's <span className="text-gradient">watching</span>.</>}>
      <p className="-mt-8 mb-12 max-w-xl text-lg text-fg-muted">
        Verified analytics across Instagram, YouTube and TikTok. Updated monthly.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <Reveal>
          <div className="glass h-full rounded-2xl p-7">
            <div className="label mb-5 text-violet">Age Split</div>
            <AnimatedDonut segments={ageSegments} centerValue="2.4M" centerLabel="Reach" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="glass h-full rounded-2xl p-7">
            <div className="label mb-5 text-pink">Gender</div>
            <AnimatedDonut segments={genderSegments} centerValue="68%" centerLabel="Female" />
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="glass h-full rounded-2xl p-7">
            <div className="label mb-6 text-cyan">Top Countries</div>
            <div className="space-y-4">
              {countries.map((c, i) => (
                <Bar key={c.label} {...c} delay={i * 120} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
