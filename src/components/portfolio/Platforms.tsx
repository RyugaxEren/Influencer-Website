import { Instagram, Youtube, Music2, ImageIcon, type LucideIcon } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "@/components/fx/Reveal";
import { CountUp } from "@/components/fx/CountUp";

type Platform = {
  Icon: LucideIcon;
  name: string;
  followers: number;
  suffix: string;
  decimals?: number;
  color: string;
  metrics: { label: string; value: string }[];
  fill: number;
};

const platforms: Platform[] = [
  {
    Icon: Instagram, name: "Instagram", followers: 1.2, suffix: "M", decimals: 1, color: "#EC4899",
    metrics: [{ label: "Avg Likes", value: "84K" }, { label: "Avg Reel Views", value: "1.2M" }, { label: "Posting", value: "5×/wk" }],
    fill: 86,
  },
  {
    Icon: Youtube, name: "YouTube", followers: 680, suffix: "K", color: "#EC4899",
    metrics: [{ label: "Avg Views", value: "320K" }, { label: "Watch Time", value: "6:42" }, { label: "Posting", value: "2×/wk" }],
    fill: 72,
  },
  {
    Icon: Music2, name: "TikTok", followers: 420, suffix: "K", color: "#06B6D4",
    metrics: [{ label: "Avg Views", value: "780K" }, { label: "Avg Likes", value: "92K" }, { label: "Posting", value: "Daily" }],
    fill: 91,
  },
  {
    Icon: ImageIcon, name: "Pinterest", followers: 100, suffix: "K", color: "#8B5CF6",
    metrics: [{ label: "Monthly Views", value: "8.4M" }, { label: "Saves", value: "210K" }, { label: "Boards", value: "42" }],
    fill: 64,
  },
];

export function Platforms() {
  return (
    <Section eyebrow="03 · Platforms" title={<><span className="text-gradient">Reach</span><br />across the stack.</>}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              <div className="flex items-center justify-between">
                <p.Icon size={28} style={{ color: p.color }} />
                <div className="label">{p.name}</div>
              </div>
              <div className="mt-8 font-display text-5xl font-bold">
                <span className="text-gradient">
                  <CountUp to={p.followers} decimals={p.decimals ?? 0} suffix={p.suffix} />
                </span>
              </div>
              <div className="label mt-1">Followers</div>

              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-violet/10">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${p.fill}%`, background: `linear-gradient(90deg, ${p.color}, #8B5CF6)` }}
                />
              </div>

              <div className="mt-6 space-y-2 border-t border-violet/15 pt-5">
                {p.metrics.map((m) => (
                  <div key={m.label} className="flex items-baseline justify-between text-sm">
                    <span className="label">{m.label}</span>
                    <span className="font-display font-bold text-white">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
