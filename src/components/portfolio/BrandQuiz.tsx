import { useState } from "react";
import { ArrowRight, Sparkles, RotateCcw, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";

type Q = { q: string; options: { label: string; score: number }[] };

const questions: Q[] = [
  {
    q: "What's your brand's core audience?",
    options: [
      { label: "Women 18–34, urban", score: 3 },
      { label: "Gen Z lifestyle, global", score: 2 },
      { label: "Niche enterprise / B2B", score: 0 },
      { label: "Mixed creative consumer", score: 2 },
    ],
  },
  {
    q: "What outcome matters most?",
    options: [
      { label: "Brand awareness & reach", score: 3 },
      { label: "Direct sales & conversions", score: 2 },
      { label: "Content for paid ads", score: 2 },
      { label: "Long-term ambassador", score: 3 },
    ],
  },
  {
    q: "What's your category?",
    options: [
      { label: "Beauty / Skincare", score: 3 },
      { label: "Fashion / Lifestyle", score: 3 },
      { label: "Travel / Hospitality", score: 2 },
      { label: "Crypto / Gambling", score: 0 },
    ],
  },
];

export function BrandQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const pick = (s: number) => {
    const newScore = score + s;
    if (step + 1 >= questions.length) {
      setScore(newScore);
      setDone(true);
    } else {
      setScore(newScore);
      setStep(step + 1);
    }
  };

  const reset = () => { setStep(0); setScore(0); setDone(false); };

  const max = questions.reduce((m, q) => m + Math.max(...q.options.map((o) => o.score)), 0);
  const pct = Math.round((score / max) * 100);
  const verdict =
    pct >= 80 ? { title: "Perfect Fit 🔥", body: "Your brand aligns beautifully with my audience. Let's build something iconic." } :
    pct >= 50 ? { title: "Strong Match ✨", body: "Good alignment. A custom-tailored campaign could perform very well." } :
                { title: "Niche Match", body: "Possible fit with the right creative angle — let's chat to explore." };

  return (
    <Section eyebrow="07 · Brand Fit Quiz" title={<>Is my brand a <span className="text-gradient">good fit</span>?</>}>
      <p className="-mt-8 mb-10 max-w-xl text-lg text-fg-muted">
        3 quick questions. 30 seconds. Get an instant compatibility score.
      </p>

      <div className="glass relative mx-auto max-w-2xl overflow-hidden rounded-3xl p-8 md:p-10">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-violet/10">
          <div
            className="h-full transition-[width] duration-500"
            style={{
              width: `${done ? 100 : (step / questions.length) * 100}%`,
              background: "linear-gradient(90deg, #8B5CF6, #EC4899)",
              boxShadow: "0 0 12px rgba(139,92,246,.7)",
            }}
          />
        </div>

        {!done ? (
          <div key={step} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="label mb-3 text-pink">
              Question {step + 1} of {questions.length}
            </div>
            <h3 className="text-2xl md:text-3xl">{questions[step].q}</h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {questions[step].options.map((o) => (
                <button
                  key={o.label}
                  onClick={() => pick(o.score)}
                  className="group flex items-center justify-between rounded-xl border border-violet/20 bg-violet/5 px-5 py-4 text-left text-sm transition-all hover:border-violet hover:bg-violet/15 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]"
                >
                  <span>{o.label}</span>
                  <ArrowRight size={16} className="opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-500 text-center">
            <Sparkles size={28} className="mx-auto text-pink" />
            <div className="label mt-3">Compatibility Score</div>
            <div className="mt-2 font-display text-7xl font-bold text-gradient-tri">{pct}%</div>
            <h3 className="mt-4 text-3xl">{verdict.title}</h3>
            <p className="mx-auto mt-3 max-w-md text-fg-muted">{verdict.body}</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#collaborate"
                className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 font-display text-sm font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]"
              >
                <CheckCircle2 size={16} /> Start a conversation
              </a>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border border-violet/30 px-6 py-3 text-sm text-fg-muted transition-colors hover:text-white"
              >
                <RotateCcw size={14} /> Retake
              </button>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
