import { useEffect, useState } from "react";

const SEEN_KEY = "ak_loader_v1";

export function PageLoader() {
  const [mounted, setMounted] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SEEN_KEY)) {
      setHide(true);
      return;
    }
    setMounted(true);
    sessionStorage.setItem(SEEN_KEY, "1");
    const t1 = setTimeout(() => setHide(true), 1300);
    const t2 = setTimeout(() => setMounted(false), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-bg transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="ak-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight={700}
          fontSize="72"
          letterSpacing="-4"
          fill="transparent"
          stroke="url(#ak-grad)"
          strokeWidth="1.2"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: 400,
            animation: "akDraw 1.1s ease-out forwards, akFill 0.4s ease-out 1.1s forwards",
          }}
        >
          A.K
        </text>
      </svg>
      <style>{`
        @keyframes akDraw { to { stroke-dashoffset: 0; } }
        @keyframes akFill { to { fill: url(#ak-grad); } }
      `}</style>
    </div>
  );
}
