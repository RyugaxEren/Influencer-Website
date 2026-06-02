import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "stats", label: "Stats" },
  { id: "platforms", label: "Platforms" },
  { id: "showcase", label: "Showcase" },
  { id: "brands", label: "Brands" },
  { id: "packages", label: "Packages" },
  { id: "collaborate", label: "Contact" },
];

export function AnchorRail() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const handler = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= mid) current = s.id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={s.id === "top" ? "#" : `#${s.id}`}
            aria-label={`Jump to ${s.label}`}
            className="group relative flex items-center justify-end"
          >
            <span
              className={`mr-3 font-mono text-[10px] uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                isActive ? "opacity-100" : ""
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-2 w-6 bg-gradient-to-r from-violet to-pink shadow-[0_0_12px_rgba(236,72,153,0.7)]"
                  : "h-2 w-2 bg-violet/30 group-hover:bg-violet"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
