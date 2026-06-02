import { useEffect, useState } from "react";

export function Hero3DCarousel({
  images,
  size = 280,
  radius = 320,
  speed = 22,
}: {
  images: string[];
  size?: number;
  radius?: number;
  speed?: number;
}) {
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      setAngle((a) => a + dt * speed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const step = 360 / images.length;

  return (
    <div
      className="perspective-1000 pointer-events-none mx-auto"
      style={{ width: size, height: size }}
    >
      <div
        className="preserve-3d relative h-full w-full"
        style={{ transform: `rotateX(-8deg) rotateY(${angle}deg)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl border border-violet/30 shadow-[0_0_40px_rgba(139,92,246,0.45)]"
            style={{
              transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
