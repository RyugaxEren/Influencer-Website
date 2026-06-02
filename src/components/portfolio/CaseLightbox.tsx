import { useEffect } from "react";
import { X, Eye, TrendingUp, MousePointerClick, Quote } from "lucide-react";

export type CaseData = {
  brand: string;
  title: string;
  brief: string;
  cover: string;
  shots: string[];
  metrics: { label: string; value: string }[];
  quote: string;
  author: string;
};

export function CaseLightbox({ data, onClose }: { data: CaseData | null; onClose: () => void }) {
  useEffect(() => {
    if (!data) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [data, onClose]);

  if (!data) return null;

  const icons = [Eye, TrendingUp, MousePointerClick];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-bg/90 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative mx-4 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-violet/30 bg-bg-elev shadow-[0_0_80px_rgba(139,92,246,0.4)] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-violet/30 bg-bg/60 text-fg-muted backdrop-blur transition-colors hover:border-violet hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="relative h-64 w-full overflow-hidden md:h-80">
          <img src={data.cover} alt={data.brand} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-elev via-bg-elev/40 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="label text-pink">{data.brand}</div>
            <h3 className="mt-2 text-3xl md:text-5xl">{data.title}</h3>
          </div>
        </div>

        <div className="p-7 md:p-10">
          <p className="max-w-2xl text-lg text-fg-muted">{data.brief}</p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {data.shots.map((s, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl border border-violet/20">
                <img src={s} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {data.metrics.map((m, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={m.label} className="rounded-2xl border border-violet/20 bg-violet/5 p-5">
                  <Icon size={18} className="text-pink" />
                  <div className="mt-3 font-display text-3xl font-bold text-gradient">{m.value}</div>
                  <div className="label mt-1">{m.label}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-pink/30 bg-pink/5 p-6">
            <Quote size={20} className="text-pink" />
            <p className="mt-3 font-display text-xl italic leading-snug">"{data.quote}"</p>
            <div className="mt-3 label text-fg-muted">— {data.author}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
