import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Music2, ImageIcon, Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-violet/15 bg-bg-elev/40 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold">
            A<span className="text-gradient">.</span>K
          </div>
          <p className="mt-4 max-w-xs text-sm text-fg-muted">
            Aria Kessler · NYC creator turning aesthetic moments into culture that converts.
          </p>
          <div className="mt-5 flex items-center gap-4 text-fg-muted">
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-pink"><Instagram size={16} /></a>
            <a href="#" aria-label="YouTube" className="transition-colors hover:text-pink"><Youtube size={16} /></a>
            <a href="#" aria-label="TikTok" className="transition-colors hover:text-cyan"><Music2 size={16} /></a>
            <a href="#" aria-label="Pinterest" className="transition-colors hover:text-violet"><ImageIcon size={16} /></a>
          </div>
        </div>

        <div>
          <div className="label mb-4 text-fg-muted">Sitemap</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="text-fg-muted transition-colors hover:text-white">Home</Link></li>
            <li><Link to="/work" className="text-fg-muted transition-colors hover:text-white">Work · Case studies</Link></li>
            <li><a href="/#packages" className="text-fg-muted transition-colors hover:text-white">Rates & Packages</a></li>
            <li><a href="/#collaborate" className="text-fg-muted transition-colors hover:text-white">Send a brief</a></li>
          </ul>
        </div>

        <div>
          <div className="label mb-4 text-fg-muted">For brands</div>
          <div className="rounded-2xl border border-violet/20 bg-bg/40 p-5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white">Replies in ~4h</span>
            </div>
            <a
              href="mailto:hello@ariakessler.co"
              className="mt-3 block font-mono text-sm text-white hover:text-pink"
            >
              hello@ariakessler.co
            </a>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet/40 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-fg-muted transition-all hover:border-violet hover:text-white"
            >
              <Download size={12} /> Media Kit (PDF)
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-violet/10 px-6 pt-6 text-fg-muted/50 md:flex-row">
        <div className="font-mono text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Aria Kessler · All rights reserved
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest">
          Built for brand partners · Not a personal blog
        </div>
      </div>
    </footer>
  );
}
