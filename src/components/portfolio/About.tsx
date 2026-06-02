import { Instagram, Youtube, Music2, ImageIcon } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Reveal } from "@/components/fx/Reveal";

const niches = ["Fashion", "Lifestyle", "Beauty", "Travel", "Tech"];
const platforms = [
  { Icon: Instagram, name: "Instagram", value: "1.2M", color: "text-pink" },
  { Icon: Youtube, name: "YouTube", value: "680K", color: "text-pink" },
  { Icon: Music2, name: "TikTok", value: "420K", color: "text-cyan" },
  { Icon: ImageIcon, name: "Pinterest", value: "100K", color: "text-violet" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md -rotate-3 transition-transform duration-500 hover:rotate-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet via-pink to-cyan opacity-80 blur-md" />
            <div className="relative overflow-hidden rounded-2xl border border-violet/40">
              <img
                src={portrait}
                alt="Portrait of @ariakessler"
                width={896}
                height={1152}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="label mb-4">01 · About</div>
            <h2 className="text-5xl md:text-7xl leading-[0.95]">
              The Face<br />Behind The <span className="text-gradient">Feed</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-md text-lg text-fg-muted leading-relaxed">
              I'm a New York–based creator turning aesthetic moments into stories that move
              culture. Editorial eye, business brain. Five years building a community that
              actually shows up — and shops.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap gap-2">
              {niches.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-violet/40 bg-violet/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-fg-muted transition-all hover:border-violet hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                >
                  {n}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {platforms.map(({ Icon, name, value, color }) => (
                <div key={name} className="flex items-center gap-3 rounded-xl border border-violet/15 bg-white/[0.02] p-4">
                  <Icon size={20} className={color} />
                  <div>
                    <div className="font-display text-xl font-bold">{value}</div>
                    <div className="label">{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
