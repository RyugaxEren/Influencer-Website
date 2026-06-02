import { InquiryForm } from "./InquiryForm";
import { Reveal } from "@/components/fx/Reveal";

export function CtaFinal() {
  return (
    <section id="collaborate" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.3),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(236,72,153,0.22),_transparent_50%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="label mb-6">08 · Let's Talk</div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.92]">
              Send the brief.<br />Hear back in <span className="text-gradient-tri">4 hours</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-fg-muted">
              Every inquiry is read personally. Quick filter below so we can skip the back-and-forth and get to the
              creative.
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          <InquiryForm />
        </div>

        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-widest text-fg-muted/50">
          Or email directly · <a href="mailto:hello@ariakessler.co" className="text-fg-muted hover:text-white">hello@ariakessler.co</a>
        </p>
      </div>
    </section>
  );
}
