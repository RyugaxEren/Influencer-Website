import { Camera, Film, Sparkles, Check } from "lucide-react";
import { Section } from "./Section";
import { FlipCard } from "@/components/fx/FlipCard";
import { Reveal } from "@/components/fx/Reveal";
import { MediaKitButton } from "@/components/fx/MediaKitButton";

const pkgs = [
  {
    Icon: Camera,
    name: "Story Package",
    price: "150",
    tagline: "Quick-hit awareness on Instagram Stories.",
    deliverables: ["3 Instagram Stories", "Swipe-up link", "Brand mention + tag", "Analytics report"],
    timeline: "5 business days",
    idealFor: "Product drops, flash sales, launches",
    highlighted: false,
  },
  {
    Icon: Film,
    name: "Reel Package",
    price: "350",
    tagline: "High-impact short-form for max reach.",
    deliverables: ["1 Instagram Reel (60s)", "3 supporting Stories", "Cross-post to TikTok", "Usage rights 30 days"],
    timeline: "7–10 business days",
    idealFor: "Brand storytelling, product reveals",
    highlighted: true,
  },
  {
    Icon: Sparkles,
    name: "Full Campaign",
    price: "600",
    tagline: "Multi-platform takeover with case study.",
    deliverables: ["1 Reel + 1 YT video", "5 Stories + 2 carousels", "TikTok + Pinterest pin set", "Full case study + rights"],
    timeline: "2–3 weeks",
    idealFor: "Major launches, ambassador moments",
    highlighted: false,
  },
];

export function Packages() {
  return (
    <Section eyebrow="06 · Packages" title={<>Work <span className="text-gradient">with me</span>.</>}>
      <p className="-mt-8 mb-12 max-w-xl text-lg text-fg-muted">
        Starting rates below. Hover any card to flip for full details. Custom scopes and exclusivity available on request.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {pkgs.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <div className="relative">
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet to-pink px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-white shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                  Most Popular
                </div>
              )}
              <FlipCard
                highlighted={p.highlighted}
                front={
                  <>
                    <p.Icon size={32} className={p.highlighted ? "text-pink" : "text-violet"} />
                    <h3 className="mt-6 text-3xl">{p.name}</h3>
                    <p className="mt-3 text-sm text-fg-muted">{p.tagline}</p>
                    <div className="mt-auto">
                      <div className="label mb-1">Starting at</div>
                      <div className="font-display text-5xl font-bold text-gradient">${p.price}</div>
                      <div className="mt-4 label text-fg-muted/60">Hover to see details →</div>
                    </div>
                  </>
                }
                back={
                  <>
                    <div className="label text-pink">{p.name}</div>
                    <ul className="mt-3 space-y-2">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm">
                          <Check size={14} className="mt-1 shrink-0 text-violet" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto space-y-2 border-t border-violet/15 pt-4 text-sm">
                      <div><span className="label">Timeline</span><div>{p.timeline}</div></div>
                      <div><span className="label">Ideal for</span><div className="text-fg-muted">{p.idealFor}</div></div>
                    </div>
                  </>
                }
              />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <p className="max-w-md text-sm text-fg-muted">
          Want everything in one place? Full rate card, audience data and brand decks.
        </p>
        <MediaKitButton />
      </div>
    </Section>
  );
}

