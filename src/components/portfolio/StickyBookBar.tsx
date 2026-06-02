import { useEffect, useState } from "react";
import { Calendar, Send } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export function StickyBookBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;
      const doc = document.documentElement.scrollHeight;
      const nearBottom = y + vh > doc - vh * 1.2;
      setVisible(y > vh * 0.9 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 pb-4">
        <div className="glass flex items-center justify-between gap-3 rounded-2xl border border-violet/30 px-3 py-2 shadow-[0_-10px_60px_-20px_rgba(139,92,246,0.7)] sm:px-5 sm:py-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              <img
                src={portrait}
                alt="Aria Kessler"
                className="h-10 w-10 rounded-full border border-violet/40 object-cover"
                loading="lazy"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 border-2 border-bg" />
              </span>
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-sm font-bold text-white">Aria Kessler</div>
              <div className="hidden font-mono text-[10px] uppercase tracking-widest text-fg-muted sm:block">
                Replies in ~4h · Booking Q1
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#collaborate"
              className="hidden items-center gap-2 rounded-full border border-violet/30 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-fg-muted transition-all hover:border-violet hover:text-white sm:inline-flex"
            >
              <Calendar size={12} /> Book a call
            </a>
            <a
              href="#collaborate"
              className="inline-flex items-center gap-2 rounded-full bg-violet px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white transition-all hover:shadow-[0_0_24px_rgba(139,92,246,0.8)] sm:px-5"
            >
              <Send size={12} /> Send brief
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
