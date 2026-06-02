import { Download, FileText } from "lucide-react";

export function MediaKitButton({ href = "/media-kit.pdf" }: { href?: string }) {
  return (
    <a
      href={href}
      download
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-display text-base font-bold text-white transition-all duration-300 hover:-translate-y-[3px]"
      style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ animation: "breathe 2.6s ease-in-out infinite" }}
      />
      <FileText size={18} className="relative z-10" />
      <span className="relative z-10">Download Media Kit (PDF)</span>
      <Download
        size={18}
        className="relative z-10 animate-bounce-y"
        style={{ animation: "bounce-y 1.6s ease-in-out infinite" }}
      />
    </a>
  );
}
