import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { Marquee } from "@/components/fx/Marquee";
import { TiltLogo } from "@/components/fx/TiltLogo";
import { Reveal } from "@/components/fx/Reveal";
import { CaseLightbox, type CaseData } from "./CaseLightbox";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { featuredWork } from "@/lib/work-data";

const brands = [
  { name: "LUNARÉ", style: "font-display tracking-[0.3em]" },
  { name: "NORTH&CO", style: "font-mono tracking-tight" },
  { name: "halo.", style: "font-display italic" },
  { name: "MERIDIAN", style: "font-display tracking-[0.25em]" },
  { name: "vela", style: "font-display lowercase tracking-tight text-3xl" },
  { name: "ÓRBIT", style: "font-mono tracking-[0.3em]" },
  { name: "Maison K", style: "font-display italic" },
  { name: "PRISM/9", style: "font-mono tracking-wider" },
  { name: "ATELIER", style: "font-display tracking-[0.4em]" },
  { name: "ève.", style: "font-display italic lowercase" },
  { name: "STÜDIO", style: "font-mono tracking-tight uppercase" },
  { name: "FLORA&FAUNA", style: "font-display tracking-wider" },
  { name: "kassia", style: "font-display italic lowercase tracking-tight" },
  { name: "NORTHWIND", style: "font-mono tracking-widest" },
];

const collabs = featuredWork;

export function Brands() {
  const [active, setActive] = useState<CaseData | null>(null);

  return (
    <Section eyebrow="05 · Collaborations" title={<>Trusted by <span className="text-gradient">top brands</span>.</>}>
      <Marquee>
        {brands.map((b) => (
          <TiltLogo key={b.name}>
            <div className={`whitespace-nowrap text-2xl text-fg-muted ${b.style}`}>{b.name}</div>
          </TiltLogo>
        ))}
      </Marquee>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {collabs.map((c, i) => (
          <Reveal key={c.brand} delay={i * 120}>
            <div className="group relative h-full overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.45)]">
              <div className="holographic absolute inset-0 rounded-2xl" />
              <div className="relative h-full rounded-2xl bg-bg-elev/90 p-7 backdrop-blur-xl">
                <div className="label text-pink">{c.brand}</div>
                <h3 className="mt-2 text-2xl">{c.title}</h3>
                <ul className="mt-5 space-y-1.5">
                  {c.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-fg-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-6 border-t border-violet/15 pt-4">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-xl font-bold text-gradient">{s.value}</div>
                      <div className="label">{s.label}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActive(c)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet/30 px-4 py-2 text-xs font-mono uppercase tracking-widest text-fg-muted transition-all hover:border-violet hover:text-white hover:shadow-[0_0_18px_rgba(139,92,246,0.5)]"
                >
                  View Campaign <ExternalLink size={12} />
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 rounded-full border border-violet/40 px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-white transition-all hover:border-pink hover:shadow-[0_0_24px_rgba(236,72,153,0.5)]"
        >
          See all 47 campaigns <ArrowUpRight size={14} />
        </Link>
      </div>

      <CaseLightbox data={active} onClose={() => setActive(null)} />
    </Section>
  );
}
