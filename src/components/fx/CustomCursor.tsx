import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 16;

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pos = useRef({ x: -100, y: -100 });
  const history = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      history.current.unshift({ ...pos.current });
      if (history.current.length > TRAIL_LENGTH) history.current.pop();
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x - 6}px, ${pos.current.y - 6}px, 0)`;
      }
      trailRefs.current.forEach((el, i) => {
        const p = history.current[i];
        if (el && p) {
          const scale = 1 - i / TRAIL_LENGTH;
          el.style.transform = `translate3d(${p.x - 8}px, ${p.y - 8}px, 0) scale(${scale})`;
          el.style.opacity = `${(1 - i / TRAIL_LENGTH) * 0.5}`;
        }
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block" aria-hidden>
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="fixed left-0 top-0 h-4 w-4 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.7) 0%, transparent 70%)",
            filter: "blur(4px)",
            willChange: "transform, opacity",
          }}
        />
      ))}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-3 w-3 rounded-full bg-white"
        style={{
          boxShadow: "0 0 12px rgba(139,92,246,0.9), 0 0 24px rgba(236,72,153,0.5)",
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />
    </div>
  );
}
