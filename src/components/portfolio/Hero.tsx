import { ArrowDown, Instagram, Youtube, Music2, ImageIcon } from "lucide-react";
import { GradientMesh } from "@/components/fx/GradientMesh";
import { Typewriter } from "@/components/fx/Typewriter";
import { GlitchText } from "@/components/fx/GlitchText";
import { MagneticButton } from "@/components/fx/MagneticButton";
import { Hero3DCarousel } from "@/components/fx/Hero3DCarousel";
import portrait from "@/assets/portrait.jpg";
import g1 from "@/assets/grid-1.jpg";
import g2 from "@/assets/grid-2.jpg";
import g4 from "@/assets/grid-4.jpg";
import g5 from "@/assets/grid-5.jpg";
import g7 from "@/assets/grid-7.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-24">
      <GradientMesh />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(8,8,18,0.6),_rgba(8,8,18,0.95))]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="label mb-6 text-fg-muted/70">CREATOR · STORYTELLER · 2026 MEDIA KIT</div>

          <h1 className="font-display text-[16vw] sm:text-[12vw] lg:text-[120px] font-bold leading-[0.85] tracking-[-0.04em]">
            <GlitchText text="@ariakessler" className="text-gradient-tri">
              <span className="text-gradient-tri">@ariakessler</span>
            </GlitchText>
          </h1>

          <div className="mt-8 h-9 font-mono text-base text-fg-muted md:text-lg">
            <Typewriter
              phrases={[
                "Fashion Creator",
                "Brand Storyteller",
                "Your Next Partner",
                "Lifestyle Influencer",
              ]}
            />
          </div>

          <div className="mt-12">
            <MagneticButton href="#collaborate">
              <span
                className="group relative inline-flex items-center gap-3 rounded-full bg-violet px-9 py-4 font-display text-base font-bold text-white transition-transform duration-300 hover:scale-105"
                style={{ animation: "breathe 2.6s ease-in-out infinite" }}
              >
                Let's Collaborate
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white transition-transform group-hover:translate-x-1" />
              </span>
            </MagneticButton>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-fg-muted/80 lg:justify-start">
            <div className="flex items-center gap-2"><Instagram size={16} className="text-pink" /><span className="font-mono text-xs">1.2M</span></div>
            <div className="h-3 w-px bg-violet/30" />
            <div className="flex items-center gap-2"><Youtube size={16} className="text-pink" /><span className="font-mono text-xs">680K</span></div>
            <div className="h-3 w-px bg-violet/30" />
            <div className="flex items-center gap-2"><Music2 size={16} className="text-cyan" /><span className="font-mono text-xs">420K</span></div>
            <div className="h-3 w-px bg-violet/30" />
            <div className="flex items-center gap-2"><ImageIcon size={16} className="text-violet" /><span className="font-mono text-xs">100K</span></div>
            <div className="font-mono text-xs uppercase tracking-widest text-white">· 2.4M reach</div>
          </div>
        </div>

        <div className="hidden items-center justify-center lg:flex">
          <Hero3DCarousel images={[portrait, g1, g5, g2, g4, g7]} />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-fg-muted/60 transition-colors hover:text-white"
      >
        <span className="label">Scroll</span>
        <ArrowDown size={18} className="animate-float" />
      </a>
    </section>
  );
}
