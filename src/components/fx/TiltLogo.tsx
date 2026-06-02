import { useRef, type MouseEvent, type ReactNode } from "react";

export function TiltLogo({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${px * 28}deg) rotateX(${-py * 28}deg) scale(1.05)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="cursor-none transition-[transform,filter] duration-300 ease-out grayscale opacity-60 hover:grayscale-0 hover:opacity-100 will-change-transform"
    >
      {children}
    </div>
  );
}
