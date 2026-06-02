import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { NoiseOverlay } from "@/components/fx/NoiseOverlay";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { TopNav } from "@/components/portfolio/TopNav";
import { PageLoader } from "@/components/portfolio/PageLoader";
import { AnchorRail } from "@/components/portfolio/AnchorRail";
import { StickyBookBar } from "@/components/portfolio/StickyBookBar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { PressStrip } from "@/components/portfolio/PressStrip";
import { Stats } from "@/components/portfolio/Stats";
import { Platforms } from "@/components/portfolio/Platforms";
import { Showcase } from "@/components/portfolio/Showcase";
import { LiveFeed } from "@/components/portfolio/LiveFeed";
import { Demographics } from "@/components/portfolio/Demographics";
import { Brands } from "@/components/portfolio/Brands";
import { ResultsTicker } from "@/components/portfolio/ResultsTicker";
import { Packages } from "@/components/portfolio/Packages";
import { BrandQuiz } from "@/components/portfolio/BrandQuiz";
import { Availability } from "@/components/portfolio/Availability";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { CtaFinal } from "@/components/portfolio/CtaFinal";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aria Kessler — Creator & Brand Partner | 2026 Media Kit" },
      { name: "description", content: "Media kit for Aria Kessler (@ariakessler): lifestyle, fashion and beauty creator with 2.4M+ reach. $2.4M tracked sales, 6.2× avg ROAS. Replies in 4h." },
      { property: "og:title", content: "Aria Kessler — Creator & Brand Partner" },
      { property: "og:description", content: "2.4M+ reach. 8.7% avg engagement. $2.4M tracked sales. Available for brand collaborations." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative bg-bg text-fg">
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <NoiseOverlay />
      <TopNav />
      <AnchorRail />
      <StickyBookBar />
      <main>
        <Hero />
        <section id="about"><About /></section>
        <PressStrip />
        <section id="stats"><Stats /></section>
        <section id="platforms"><Platforms /></section>
        <section id="showcase"><Showcase /></section>
        <LiveFeed />
        <Demographics />
        <section id="brands"><Brands /></section>
        <ResultsTicker />
        <section id="packages"><Packages /></section>
        <BrandQuiz />
        <Availability />
        <Testimonials />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
