import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

export type Segment = { label: string; value: number; color: string };

export function AnimatedDonut({
  segments,
  size = 180,
  thickness = 18,
  centerLabel,
  centerValue,
}: {
  segments: Segment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerValue?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  let acc = 0;

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke="rgba(139,92,246,0.12)"
            strokeWidth={thickness}
            fill="none"
          />
          {segments.map((s) => {
            const frac = (s.value / total) * progress;
            const len = c * frac;
            const off = c * (acc / total);
            acc += s.value;
            return (
              <circle
                key={s.label}
                cx={size / 2}
                cy={size / 2}
                r={r}
                stroke={s.color}
                strokeWidth={thickness}
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${len} ${c}`}
                strokeDashoffset={-off}
                style={{ filter: `drop-shadow(0 0 6px ${s.color})` }}
              />
            );
          })}
        </svg>
        {(centerLabel || centerValue) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {centerValue && (
              <div className="font-display text-2xl font-bold text-gradient">
                {centerValue}
              </div>
            )}
            {centerLabel && <div className="label mt-1">{centerLabel}</div>}
          </div>
        )}
      </div>
      <ul className="w-full space-y-2">
        {segments.map((s) => (
          <li key={s.label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-fg-muted">
              <span className="h-2 w-2 rounded-full" style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }} />
              {s.label}
            </span>
            <span className="font-mono text-white">{Math.round(s.value * progress)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
