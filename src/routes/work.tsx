import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { NoiseOverlay } from "@/components/fx/NoiseOverlay";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { TopNav } from "@/components/portfolio/TopNav";
import { Footer } from "@/components/portfolio/Footer";
import { CaseLightbox, type CaseData } from "@/components/portfolio/CaseLightbox";
import { Reveal } from "@/components/fx/Reveal";
import { work, categories, type Category } from "@/lib/work-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Aria Kessler · Brand Campaigns & Case Studies" },
      {
        name: "description",
        content:
          "47 brand campaigns. $2.4M tracked sales. Browse Aria Kessler's full case study archive across Fashion, Beauty, Travel, Tech and Lifestyle.",
      },
      { property: "og:title", content: "Work — Aria Kessler" },
      {
        property: "og:description",
        content: "Full case study archive: 47 brand campaigns, $2.4M tracked sales, 6.2× avg ROAS.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [active, setActive] = useState<CaseData | null>(null);

  const filtered = filter === "All" ? work : work.filter((w) => w.category === filter);

  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <ScrollProgress />
      <CustomCursor />
      <NoiseOverlay />
      <TopNav />

      <main className="pt-32">
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-fg-muted transition-colors hover:text-white"
          >
            <ArrowLeft size={12} /> Back home
          </Link>
          <Reveal>
            <div className="label mt-8 text-fg-muted">Case studies · 2024–2025</div>
            <h1 className="mt-3 text-5xl leading-[0.95] md:text-7xl">
              The <span className="text-gradient-tri">receipts</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-fg-muted">
              47 brand partnerships. $2.4M in tracked sales. 6.2× average ROAS. Every campaign below was measured,
              attributed, and signed off by the partner brand.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-all ${
                  filter === c
                    ? "border-pink bg-pink/15 text-white shadow-[0_0_18px_-4px_rgba(236,72,153,0.6)]"
                    : "border-violet/25 text-fg-muted hover:border-violet hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((w, i) => (
              <Reveal key={w.brand + w.title} delay={(i % 6) * 80}>
                <button
                  onClick={() => setActive(w)}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl border border-violet/20 bg-bg-elev/60 text-left transition-all hover:border-violet/60 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.7)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={w.cover}
                      alt={w.brand}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-elev via-bg-elev/40 to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="rounded-full border border-white/20 bg-bg/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
                        {w.category}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                        {w.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="label text-pink">{w.brand}</div>
                    <h3 className="mt-2 text-xl">{w.title}</h3>
                    <div className="mt-4 flex items-center justify-between border-t border-violet/15 pt-4">
                      <div className="flex gap-5">
                        {w.stats.slice(0, 2).map((s) => (
                          <div key={s.label}>
                            <div className="font-display text-base font-bold text-gradient">{s.value}</div>
                            <div className="label text-[9px]">{s.label}</div>
                          </div>
                        ))}
                      </div>
                      <ExternalLink size={14} className="text-fg-muted transition-colors group-hover:text-white" />
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-violet/25 bg-bg-elev/60 p-10 text-center md:p-14">
            <div className="label text-fg-muted">Ready to be next?</div>
            <h2 className="mt-3 text-4xl md:text-5xl">
              Let's build your <span className="text-gradient-tri">case study</span>.
            </h2>
            <Link
              to="/"
              hash="collaborate"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-pink px-7 py-3 font-display text-sm font-bold text-white transition-all hover:shadow-[0_0_40px_rgba(236,72,153,0.7)]"
            >
              Send a brief →
            </Link>
          </div>
        </section>

        <CaseLightbox data={active} onClose={() => setActive(null)} />
      </main>

      <Footer />
    </div>
  );
}
