import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";

const categories = ["Fashion", "Beauty", "Tech", "Travel", "Lifestyle", "Wellness", "Food", "Other"];
const campaignTypes = ["Single Reel", "Story Series", "Full Campaign", "Brand Ambassador"];
const territories = ["Global", "North America", "Europe", "APAC", "LATAM"];

const schema = z.object({
  brand: z.string().trim().min(1, "Brand name required").max(120),
  website: z.string().trim().url("Enter a valid URL").max(200),
  email: z.string().trim().email("Enter a valid email").max(200),
  category: z.string().min(1, "Select a category"),
  campaignType: z.string().min(1, "Select a campaign type"),
  timeline: z.string().min(1, "When does this kick off?").max(60),
  regions: z.array(z.string()).min(1, "Pick at least one region"),
  budget: z.number().min(1000).max(150000),
  message: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

const MIN_BUDGET = 2500;

export function InquiryForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      brand: "",
      website: "",
      email: "",
      category: "",
      campaignType: "",
      timeline: "",
      regions: [],
      budget: 10000,
      message: "",
    },
  });

  const budget = watch("budget");
  const regions = watch("regions");
  const campaignType = watch("campaignType");
  const category = watch("category");

  const stepFields: (keyof FormValues)[][] = [
    ["brand", "website", "email", "category"],
    ["campaignType", "timeline", "regions"],
    ["budget", "message"],
  ];

  const next = async () => {
    const valid = await trigger(stepFields[step]);
    if (!valid) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setStep((s) => Math.min(s + 1, 2));
  };

  const onSubmit = (data: FormValues) => {
    if (data.budget < MIN_BUDGET) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#8B5CF6", "#EC4899", "#06B6D4", "#ffffff"],
      });
    }, 200);
  };

  const toggleRegion = (r: string) => {
    const next = regions.includes(r) ? regions.filter((x) => x !== r) : [...regions, r];
    setValue("regions", next, { shouldValidate: true });
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-violet/30 bg-bg-elev/60 p-10 text-center backdrop-blur-xl animate-in fade-in zoom-in-95 duration-500">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet to-pink shadow-[0_0_40px_rgba(236,72,153,0.6)]">
          <Check size={28} className="text-white" />
        </div>
        <h3 className="mt-6 text-3xl">Brief received.</h3>
        <p className="mt-3 text-fg-muted">
          Aria replies to every brand inquiry personally within <span className="text-white">4 hours</span>.
        </p>
        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-fg-muted/60">
          Look for a note from hello@ariakessler.co
        </p>
        <a
          href="/work"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet/40 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-fg-muted transition-all hover:border-violet hover:text-white"
        >
          While you wait → see past campaigns
        </a>
      </div>
    );
  }

  const lowBudget = budget < MIN_BUDGET;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`mx-auto max-w-2xl rounded-3xl border border-violet/25 bg-bg-elev/60 p-7 backdrop-blur-xl md:p-10 ${
        shake ? "animate-[shake_0.4s_ease-in-out]" : ""
      }`}
    >
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }
      `}</style>

      <div className="mb-8 flex items-center justify-between">
        <div className="label text-fg-muted">Brief · Step {step + 1} of 3</div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1 w-8 rounded-full transition-all ${
                i <= step ? "bg-gradient-to-r from-violet to-pink" : "bg-violet/15"
              }`}
            />
          ))}
        </div>
      </div>

      {step === 0 && (
        <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
          <Field label="Brand name" error={errors.brand?.message}>
            <input
              {...register("brand")}
              placeholder="e.g. LUNARÉ Beauty"
              className={inputClass}
            />
          </Field>
          <Field label="Brand website" error={errors.website?.message}>
            <input
              {...register("website")}
              placeholder="https://"
              className={inputClass}
            />
          </Field>
          <Field label="Your email" error={errors.email?.message}>
            <input
              {...register("email")}
              type="email"
              placeholder="you@brand.com"
              className={inputClass}
            />
          </Field>
          <Field label="Brand category" error={errors.category?.message}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setValue("category", c, { shouldValidate: true })}
                  className={chipClass(category === c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
          <Field label="Campaign type" error={errors.campaignType?.message}>
            <div className="grid gap-2 sm:grid-cols-2">
              {campaignTypes.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setValue("campaignType", c, { shouldValidate: true })}
                  className={`rounded-xl border px-4 py-3 text-left transition-all ${
                    campaignType === c
                      ? "border-violet bg-violet/10 text-white shadow-[0_0_20px_-5px_rgba(139,92,246,0.6)]"
                      : "border-violet/20 bg-bg/40 text-fg-muted hover:border-violet/50"
                  }`}
                >
                  <div className="font-display text-sm font-bold">{c}</div>
                </button>
              ))}
            </div>
          </Field>
          <Field label="Timeline" error={errors.timeline?.message}>
            <input
              {...register("timeline")}
              placeholder="e.g. Launch March 2026"
              className={inputClass}
            />
          </Field>
          <Field label="Territories" error={errors.regions?.message as string | undefined}>
            <div className="flex flex-wrap gap-2">
              {territories.map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => toggleRegion(r)}
                  className={chipClass(regions.includes(r))}
                >
                  {r}
                </button>
              ))}
            </div>
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div>
            <div className="flex items-baseline justify-between">
              <label className="label">Campaign budget</label>
              <div className="font-display text-3xl font-bold text-gradient">
                ${budget.toLocaleString()}{budget >= 100000 ? "+" : ""}
              </div>
            </div>
            <input
              type="range"
              min={1000}
              max={100000}
              step={1000}
              {...register("budget", { valueAsNumber: true })}
              className="mt-3 w-full accent-violet"
            />
            <div className="mt-1 flex justify-between font-mono text-[10px] uppercase tracking-widest text-fg-muted/50">
              <span>$1K</span>
              <span>$100K+</span>
            </div>
            {lowBudget && (
              <div className="mt-4 rounded-xl border border-pink/30 bg-pink/5 p-4 text-sm text-fg-muted">
                <Sparkles size={14} className="mr-2 inline text-pink" />
                Aria's minimum starts at <span className="text-white">${MIN_BUDGET.toLocaleString()}</span>.
                For smaller projects, the{" "}
                <a href="#packages" className="text-white underline underline-offset-4">
                  Story package
                </a>{" "}
                or media kit may be a better fit.
              </div>
            )}
          </div>
          <Field label="Anything else? (optional)">
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell Aria about the brand, the moment, the vision."
              className={`${inputClass} resize-none`}
            />
          </Field>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex items-center gap-2 rounded-full border border-violet/30 px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-fg-muted transition-all hover:border-violet hover:text-white"
          >
            <ArrowLeft size={14} /> Back
          </button>
        ) : (
          <span />
        )}

        {step < 2 ? (
          <button
            type="button"
            onClick={next}
            className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-2.5 font-mono text-[11px] uppercase tracking-widest text-white transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]"
          >
            Next <ArrowRight size={14} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={lowBudget}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-pink px-7 py-2.5 font-display text-sm font-bold text-white transition-all hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send brief <ArrowRight size={14} />
          </button>
        )}
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-violet/20 bg-bg/40 px-4 py-3 font-sans text-white placeholder:text-fg-muted/40 outline-none transition-all focus:border-violet focus:bg-bg/60 focus:shadow-[0_0_24px_-8px_rgba(139,92,246,0.7)]";

const chipClass = (active: boolean) =>
  `rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-all ${
    active
      ? "border-pink bg-pink/15 text-white shadow-[0_0_18px_-4px_rgba(236,72,153,0.6)]"
      : "border-violet/25 text-fg-muted hover:border-violet hover:text-white"
  }`;

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label mb-2 block">{label}</label>
      {children}
      {error && <div className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-pink">{error}</div>}
    </div>
  );
}
