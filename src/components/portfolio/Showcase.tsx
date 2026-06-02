import { Play, TrendingUp, Eye } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "@/components/fx/Reveal";
import g1 from "@/assets/grid-1.jpg";
import g2 from "@/assets/grid-2.jpg";
import g3 from "@/assets/grid-3.jpg";
import g4 from "@/assets/grid-4.jpg";
import g5 from "@/assets/grid-5.jpg";
import g6 from "@/assets/grid-6.jpg";
import g7 from "@/assets/grid-7.jpg";
import g8 from "@/assets/grid-8.jpg";
import g9 from "@/assets/grid-9.jpg";
import c1 from "@/assets/case-1.jpg";
import c2 from "@/assets/case-2.jpg";

const grid = [
  { src: g1, video: false }, { src: g2, video: true }, { src: g3, video: false },
  { src: g4, video: false }, { src: g5, video: true }, { src: g6, video: false },
  { src: g7, video: true }, { src: g8, video: false }, { src: g9, video: false },
];

export function Showcase() {
  return (
    <Section eyebrow="04 · Showcase" title={<>Content that <span className="text-gradient">converts</span>.</>}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {grid.map((g, i) => (
          <Reveal key={i} delay={(i % 3) * 80} className="aspect-square">
            <div className="group relative h-full w-full overflow-hidden rounded-xl border border-violet/15 transition-all duration-300 hover:border-violet hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              <img
                src={g.src}
                alt=""
                loading="lazy"
                width={768}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {g.video && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/40">
                    <Play size={20} className="ml-0.5 fill-white text-white" />
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <CaseCard
          img={c1}
          brand="LUNARÉ BEAUTY"
          title="Summer Glow Launch"
          metrics={[
            { Icon: Eye, label: "Impressions", value: "4.8M" },
            { Icon: TrendingUp, label: "CTR", value: "11.2%" },
          ]}
        />
        <CaseCard
          img={c2}
          brand="NORTH&CO"
          title="Maldives Resort Edit"
          metrics={[
            { Icon: Eye, label: "Reach", value: "2.1M" },
            { Icon: TrendingUp, label: "Bookings", value: "+340" },
          ]}
        />
      </div>
    </Section>
  );
}

function CaseCard({
  img, brand, title, metrics,
}: {
  img: string; brand: string; title: string;
  metrics: { Icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string }[];
}) {
  return (
    <Reveal>
      <div className="glass group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]">
        <div className="aspect-[16/9] overflow-hidden">
          <img src={img} alt={`${brand} campaign`} loading="lazy" width={1024} height={576} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <div className="label text-violet">{brand}</div>
          <h3 className="mt-2 text-2xl md:text-3xl">{title}</h3>
          <div className="mt-5 flex gap-6 border-t border-violet/15 pt-4">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-center gap-2">
                <m.Icon size={16} className="text-pink" />
                <div>
                  <div className="font-display font-bold text-white">{m.value}</div>
                  <div className="label">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
