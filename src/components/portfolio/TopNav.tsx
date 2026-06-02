import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/70 backdrop-blur-xl border-b border-violet/15" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-pink">
            A<span className="text-gradient">.</span>K
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { to: "/", label: "Home", exact: true },
            { to: "/work", label: "Work" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={l.exact ? { exact: true } : undefined}
              activeProps={{ className: "text-white" }}
              inactiveProps={{ className: "text-fg-muted/70" }}
              className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          {[
            { href: "#packages", label: "Rates" },
            { href: "#collaborate", label: "Contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-fg-muted/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#collaborate"
          className="hidden rounded-full border border-violet/40 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white transition-all hover:border-violet hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] md:inline-block"
        >
          Send brief →
        </a>
      </div>
    </header>
  );
}
