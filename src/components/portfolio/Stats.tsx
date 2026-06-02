import { CountUp } from "@/components/fx/CountUp";
import { Reveal } from "@/components/fx/Reveal";

const stats = [
  { value: 2.4, suffix: "M", decimals: 1, label: "Total Reach" },
  { value: 8.7, suffix: "%", decimals: 1, label: "Avg Engagement" },
  { value: 45, suffix: "M", decimals: 0, label: "Monthly Views" },
  { value: 38, suffix: "", decimals: 0, label: "Countries Reached" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-violet/10 bg-bg-elev py-28 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.15),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="label mb-4">02 · Audience</div>
          <h2 className="mb-16 max-w-2xl text-4xl md:text-6xl leading-[0.95]">
            Numbers that move <span className="text-gradient">needles</span>.
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-violet/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="relative h-full bg-bg-elev p-8 transition-colors hover:bg-[#15102a]">
                <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-violet to-pink shadow-[0_0_12px_rgba(139,92,246,0.7)]" />
                <div className="font-display text-5xl md:text-6xl font-bold leading-none">
                  <span className="text-gradient">
                    <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </span>
                </div>
                <div className="label mt-4">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
