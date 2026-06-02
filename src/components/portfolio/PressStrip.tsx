import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";

const press = [
  { name: "VOGUE", className: "font-display tracking-[0.3em]" },
  { name: "Forbes", className: "font-display italic" },
  { name: "HYPEBEAST", className: "font-display tracking-tight" },
  { name: "REFINERY29", className: "font-mono tracking-widest" },
  { name: "ELLE", className: "font-display tracking-[0.4em]" },
  { name: "BoF", className: "font-display italic" },
];

const badges = [
  "Meta Verified",
  "TikTok Creator Marketplace",
  "YouTube Partner",
  "IG Creator Marketplace",
];

export function PressStrip() {
  return (
    <section className="relative border-y border-violet/10 bg-bg-elev/40 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="label text-center text-fg-muted/60">As seen in</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
            {press.map((p) => (
              <span
                key={p.name}
                className={`text-2xl text-fg-muted/40 grayscale transition-all duration-300 hover:text-white hover:grayscale-0 hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.5)] ${p.className}`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {badges.map((b) => (
              <span
                key={b}
                className="group inline-flex items-center gap-2 rounded-full border border-violet/20 bg-bg/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-fg-muted transition-all hover:border-cyan/60 hover:text-white"
              >
                <CheckCircle2
                  size={12}
                  className="text-cyan transition-all group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                />
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
