import { Section } from "./Section";
import { Reveal } from "@/components/fx/Reveal";
import { Clock } from "lucide-react";

type Status = "open" | "booked" | "hold";

// Demo: build a calendar grid for current month + next two
function buildMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const days = new Date(year, month + 1, 0).getDate();
  const startWeekday = first.getDay();
  const cells: ({ day: number; status: Status } | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= days; d++) {
    // deterministic pseudo-status
    const seed = (year * 100 + month * 31 + d) % 9;
    const status: Status = seed === 0 || seed === 3 ? "booked" : seed === 7 ? "hold" : "open";
    cells.push({ day: d, status });
  }
  return cells;
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function MonthCard({ year, month }: { year: number; month: number }) {
  const cells = buildMonth(year, month);
  const open = cells.filter((c) => c?.status === "open").length;
  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-2xl">{MONTHS[month]} <span className="text-fg-muted/50">{year}</span></h3>
        <span className="label text-pink">{open} open</span>
      </div>
      <div className="mb-2 grid grid-cols-7 gap-1 text-center font-mono text-[10px] uppercase tracking-widest text-fg-muted/60">
        {["S","M","T","W","T","F","S"].map((d, i) => <div key={i}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((c, i) => {
          if (!c) return <div key={i} className="aspect-square" />;
          const base = "aspect-square flex items-center justify-center rounded-md text-xs transition-all";
          const variant =
            c.status === "open"
              ? "bg-violet/10 text-white hover:bg-violet/30 hover:shadow-[0_0_12px_rgba(139,92,246,0.6)] cursor-pointer"
              : c.status === "booked"
              ? "bg-bg-elev text-fg-muted/40 line-through"
              : "bg-pink/15 text-pink ring-1 ring-pink/40";
          return (
            <div key={i} className={`${base} ${variant}`}>{c.day}</div>
          );
        })}
      </div>
    </div>
  );
}

export function Availability() {
  const now = new Date();
  const months = [0, 1, 2].map((o) => {
    const d = new Date(now.getFullYear(), now.getMonth() + o, 1);
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  return (
    <Section eyebrow="07.5 · Availability" title={<>Book a <span className="text-gradient">slot</span>.</>}>
      <div className="-mt-8 mb-10 flex flex-wrap items-end justify-between gap-6">
        <p className="max-w-xl text-lg text-fg-muted">
          Live calendar of open production windows. Spots fill fast — first to confirm wins.
        </p>
        <div className="flex flex-wrap gap-4 text-xs text-fg-muted">
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-violet/30" /> Open</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-pink/40 ring-1 ring-pink" /> On hold</span>
          <span className="flex items-center gap-2"><span className="h-3 w-3 rounded bg-bg-elev" /> Booked</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {months.map((m, i) => (
          <Reveal key={`${m.year}-${m.month}`} delay={i * 120}>
            <MonthCard year={m.year} month={m.month} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2 font-mono text-sm text-pink">
        <Clock size={14} className="animate-pulse" />
        Only 3 spots left this month — book before they're gone.
      </div>
    </Section>
  );
}
