import { CountUp } from "@/components/fx/CountUp";
import { Reveal } from "@/components/fx/Reveal";
import { Section } from "./Section";

const results = [
  { value: 2.4, suffix: "M+", prefix: "$", label: "Tracked sales driven", caption: "Verified via Shopify Collabs · Past 12 months" },
  { value: 47, suffix: "", prefix: "", label: "Brand partnerships", caption: "Long-term + one-off · 2023–2025" },
  { value: 6.2, suffix: "×", prefix: "", label: "Average ROAS", caption: "UTM-tracked · Across DTC partners" },
];

const microQuotes = [
  { brand: "LUNARÉ", text: "Sold out in 48h." },
  { brand: "NORTH&CO", text: "+340 direct bookings." },
  { brand: "MERIDIAN", text: "Best partnership in our brand's history." },
  { brand: "ève.", text: "Industry-leading retention on her cohort." },
  { brand: "PRISM/9", text: "Sold the entire first run in 6 days." },
  { brand: "halo.", text: "+22K newsletter sign-ups." },
];

export function ResultsTicker() {
  return (
    <Section
      eyebrow="06 · Receipts"
      title={
        <>
          Real numbers. <span className="text-gradient">Tracked.</span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {results.map((r, i) => (
          <Reveal key={r.label} delay={i * 120}>
            <div className="relative h-full rounded-2xl border border-violet/20 bg-bg-elev/60 p-8 transition-all hover:border-violet/50 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]">
              <div className="flex items-baseline gap-1 font-display text-6xl font-bold leading-none">
                <span className="text-fg-muted/50">{r.prefix}</span>
                <CountUp to={r.value} decimals={r.value % 1 === 0 ? 0 : 1} className="text-gradient-tri" />
                <span className="text-gradient-tri">{r.suffix}</span>
              </div>
              <div className="mt-4 font-display text-lg text-white">{r.label}</div>
              <div className="mt-2 label text-fg-muted/60">{r.caption}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="relative mt-14 overflow-hidden border-y border-violet/10 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg to-transparent" />
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...microQuotes, ...microQuotes].map((q, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-pink">{q.brand}</span>
              <span className="text-fg-muted">"{q.text}"</span>
              <span className="text-violet/40">·</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
