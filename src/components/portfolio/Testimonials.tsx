import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "@/components/fx/Reveal";

const quotes = [
  {
    brand: "LUNARÉ",
    text: "Best-performing creator campaign we've ever run. The aesthetic, the engagement, the conversion — everything aligned.",
    name: "Alexis Moreau",
    title: "VP Brand Marketing",
  },
  {
    brand: "NORTH&CO",
    text: "She doesn't just post — she builds story arcs that make our product the obvious answer. Numbers spoke for themselves.",
    name: "Hiro Tanaka",
    title: "Head of Partnerships",
  },
  {
    brand: "MERIDIAN",
    text: "Editorial quality of a fashion magazine, audience trust of a best friend. Rare combination, immediate ROI.",
    name: "Camille Reyes",
    title: "Director of Influencer",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const i = setInterval(() => setActive((a) => (a + 1) % quotes.length), 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <Section eyebrow="07 · Testimonials" title={<>What <span className="text-gradient">brands say</span>.</>}>
      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.brand} delay={i * 100}>
            <div
              className={`glass relative h-full rounded-2xl p-7 transition-all duration-500 ${
                active === i ? "scale-[1.03] shadow-[0_0_40px_rgba(139,92,246,0.45)] border-violet/50" : ""
              }`}
            >
              <Quote size={48} className="absolute right-5 top-5 text-violet/40" />
              <div className="label text-pink">{q.brand}</div>
              <p className="mt-5 text-lg leading-relaxed text-fg-muted">
                "{q.text}"
              </p>
              <div className="mt-8 border-t border-violet/15 pt-4">
                <div className="font-display font-bold text-white">{q.name}</div>
                <div className="label">{q.title} · {q.brand}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
