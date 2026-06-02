import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full bg-transparent"
    >
      <div
        className="h-full shadow-[0_0_12px_rgba(139,92,246,0.8)] transition-[width] duration-100 ease-out"
        style={{
          width: `${w}%`,
          background: "linear-gradient(90deg, #8B5CF6, #EC4899)",
        }}
      />
    </div>
  );
}
