import { Heart, MessageCircle, Play, Instagram } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "@/components/fx/Reveal";
import g1 from "@/assets/grid-1.jpg";
import g2 from "@/assets/grid-2.jpg";
import g3 from "@/assets/grid-3.jpg";
import g4 from "@/assets/grid-4.jpg";
import g5 from "@/assets/grid-5.jpg";
import g6 from "@/assets/grid-6.jpg";
import g7 from "@/assets/grid-7.jpg";
import g8 from "@/assets/grid-8.jpg";
import g9 from "@/assets/grid-9.jpg";

const tiles = [
  { src: g1, likes: "48.2K", comments: "612", video: false },
  { src: g2, likes: "91.4K", comments: "1.2K", video: true },
  { src: g3, likes: "32.1K", comments: "418", video: false },
  { src: g4, likes: "67.8K", comments: "820", video: true },
  { src: g5, likes: "120K", comments: "2.1K", video: true },
  { src: g6, likes: "44.6K", comments: "501", video: false },
  { src: g7, likes: "78.3K", comments: "934", video: true },
  { src: g8, likes: "29.9K", comments: "302", video: false },
  { src: g9, likes: "55.5K", comments: "612", video: false },
];

export function LiveFeed() {
  return (
    <Section
      eyebrow="03.5 · Live Feed"
      title={<>Latest from <span className="text-gradient">@ariakessler</span>.</>}
    >
      <div className="-mt-8 mb-10 flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-xl text-lg text-fg-muted">
          Auto-updates with the 9 most recent posts across platforms.
        </p>
        <div className="flex items-center gap-2 rounded-full border border-violet/30 px-4 py-2 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-pink opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-pink" />
          </span>
          <span className="font-mono uppercase tracking-widest text-fg-muted">Live · synced 2m ago</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {tiles.map((t, i) => (
          <Reveal key={i} delay={(i % 3) * 60} className="aspect-square">
            <a
              href="#"
              className="group relative block h-full w-full overflow-hidden rounded-lg border border-violet/15 transition-all duration-300 hover:border-violet hover:shadow-[0_0_25px_rgba(139,92,246,0.55)]"
            >
              <img
                src={t.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {t.video && (
                <div className="absolute right-2 top-2 rounded-full bg-black/50 p-1 backdrop-blur-sm">
                  <Play size={12} className="fill-white text-white" />
                </div>
              )}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg/90 via-bg/30 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-3 text-xs text-white">
                  <span className="flex items-center gap-1"><Heart size={12} className="fill-pink text-pink" />{t.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12} />{t.comments}</span>
                  <Instagram size={12} className="ml-auto" />
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
