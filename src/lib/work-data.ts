import type { CaseData } from "@/components/portfolio/CaseLightbox";
import c1 from "@/assets/case-1.jpg";
import c2 from "@/assets/case-2.jpg";
import g1 from "@/assets/grid-1.jpg";
import g2 from "@/assets/grid-2.jpg";
import g3 from "@/assets/grid-3.jpg";
import g4 from "@/assets/grid-4.jpg";
import g5 from "@/assets/grid-5.jpg";
import g6 from "@/assets/grid-6.jpg";
import g7 from "@/assets/grid-7.jpg";
import g8 from "@/assets/grid-8.jpg";
import g9 from "@/assets/grid-9.jpg";

export type Category = "Fashion" | "Beauty" | "Travel" | "Tech" | "Lifestyle";

export type WorkItem = CaseData & {
  category: Category;
  year: string;
  deliverables: string[];
  stats: { label: string; value: string }[];
};

export const work: WorkItem[] = [
  {
    category: "Beauty",
    year: "2025",
    brand: "LUNARÉ BEAUTY",
    title: "Holographic Glow Drop",
    cover: c1,
    brief: "Launch campaign for Lunaré's iridescent highlighter line. Editorial product film stitched with raw in-bed Stories drove sell-through in under 48 hours.",
    shots: [g1, g2, g3],
    metrics: [
      { label: "Impressions", value: "2.1M" },
      { label: "Engagement", value: "11.4%" },
      { label: "Add-to-cart", value: "+38K" },
    ],
    quote: "She moved units in a way our paid campaigns never did. The aesthetic was exactly on brand.",
    author: "Marie L., VP Marketing, Lunaré",
    deliverables: ["3 Reels", "12 Stories", "1 YouTube Short", "TikTok takeover"],
    stats: [{ label: "Impressions", value: "2.1M" }, { label: "Reach", value: "340K" }],
  },
  {
    category: "Travel",
    year: "2025",
    brand: "NORTH&CO",
    title: "Resort '26 Capsule",
    cover: c2,
    brief: "Two-week production capturing the Maldives resort drop. Cinematic vlog plus carousel and TikTok ecosystem drove direct bookings to the partner hotel.",
    shots: [g4, g5, g6],
    metrics: [
      { label: "Impressions", value: "3.6M" },
      { label: "Engagement", value: "12.4%" },
      { label: "Bookings", value: "+340" },
    ],
    quote: "The output was magazine-grade. We're re-running the campaign for our 2027 resort line.",
    author: "Owen R., Creative Director, NORTH&CO",
    deliverables: ["2 IG carousels", "1 YT vlog", "4 TikToks", "Pinterest pin set"],
    stats: [{ label: "Impressions", value: "3.6M" }, { label: "Engagement", value: "12.4%" }],
  },
  {
    category: "Tech",
    year: "2025",
    brand: "MERIDIAN AUDIO",
    title: "Headphones Launch",
    cover: g4,
    brief: "Hero campaign for the MERIDIAN ONE wireless headphones. Anchored on a single cinematic film plus a 5-Reel ecosystem and an always-on affiliate funnel.",
    shots: [g3, g6, g2],
    metrics: [
      { label: "Reach", value: "1.8M" },
      { label: "Click-through", value: "9.2%" },
      { label: "Sales lift", value: "+38%" },
    ],
    quote: "Best-performing creator partnership in our brand's history. Period.",
    author: "Naomi T., Head of Growth, MERIDIAN",
    deliverables: ["1 hero film", "5 Reels", "Story series", "Affiliate link"],
    stats: [{ label: "Sales lift", value: "+38%" }, { label: "Clicks", value: "92K" }],
  },
  {
    category: "Fashion",
    year: "2025",
    brand: "MAISON K",
    title: "FW'25 Runway Diary",
    cover: g7,
    brief: "Behind-the-scenes editorial coverage of Maison K's Paris Fashion Week show. Real-time Stories from front row, polished Reels delivered within 48 hours.",
    shots: [g7, g5, g1],
    metrics: [
      { label: "Reach", value: "2.8M" },
      { label: "Saves", value: "94K" },
      { label: "PR value", value: "$420K" },
    ],
    quote: "Aria captured the collection better than the in-house team. She gets fashion.",
    author: "Jules V., Brand Director, Maison K",
    deliverables: ["1 runway recap", "8 Stories", "3 carousels", "BTS Reel"],
    stats: [{ label: "Reach", value: "2.8M" }, { label: "PR value", value: "$420K" }],
  },
  {
    category: "Lifestyle",
    year: "2024",
    brand: "halo.",
    title: "Morning Ritual Series",
    cover: g6,
    brief: "Four-part lifestyle series for halo. wellness, weaving the brand's tea ritual into a daily creator narrative. Built genuine community over hype.",
    shots: [g6, g8, g2],
    metrics: [
      { label: "Watch time", value: "5.4M min" },
      { label: "Engagement", value: "14.1%" },
      { label: "Sign-ups", value: "+22K" },
    ],
    quote: "The lift in newsletter sign-ups was unreal. She made our brand feel like a friend.",
    author: "Priya S., Founder, halo.",
    deliverables: ["4 IGTV episodes", "Newsletter takeover", "Affiliate codes"],
    stats: [{ label: "Sign-ups", value: "+22K" }, { label: "Engagement", value: "14.1%" }],
  },
  {
    category: "Tech",
    year: "2024",
    brand: "PRISM/9",
    title: "Smart Mirror Launch",
    cover: g9,
    brief: "Futurist product reveal for PRISM/9's first consumer smart mirror. Cinematic hero film paired with a sci-fi style TikTok teaser series.",
    shots: [g9, g4, g3],
    metrics: [
      { label: "Views", value: "4.2M" },
      { label: "Pre-orders", value: "+1,840" },
      { label: "ROAS", value: "7.8x" },
    ],
    quote: "Sold out our first production run in 6 days. She unlocked an audience we couldn't reach.",
    author: "Devon C., CEO, PRISM/9",
    deliverables: ["Hero film", "3 TikToks", "AR filter collab", "Newsletter feature"],
    stats: [{ label: "Pre-orders", value: "+1,840" }, { label: "ROAS", value: "7.8x" }],
  },
  {
    category: "Beauty",
    year: "2024",
    brand: "ève.",
    title: "Skincare Reset",
    cover: g2,
    brief: "30-day skin transformation series with documented results. Honest, unfiltered storytelling that became the brand's highest-performing creator content.",
    shots: [g2, g1, g6],
    metrics: [
      { label: "Reach", value: "1.4M" },
      { label: "Conversion", value: "8.7%" },
      { label: "Repurchase", value: "62%" },
    ],
    quote: "She made authenticity convert. Our retention rate on her cohort is industry-leading.",
    author: "Lena F., CMO, ève.",
    deliverables: ["30-day diary", "Before/after Reel", "Story Q&A series"],
    stats: [{ label: "Conversion", value: "8.7%" }, { label: "Repurchase", value: "62%" }],
  },
  {
    category: "Fashion",
    year: "2024",
    brand: "ATELIER",
    title: "Made-to-Measure Capsule",
    cover: g5,
    brief: "Co-designed a 6-piece capsule with ATELIER's bespoke tailoring house. Documented the entire creation process, from sketches to fittings to runway.",
    shots: [g5, g1, g7],
    metrics: [
      { label: "Capsule sell-through", value: "100%" },
      { label: "Waitlist", value: "+3,200" },
      { label: "Press hits", value: "47" },
    ],
    quote: "Our highest-margin launch ever. The collaboration redefined what creator-brand can look like.",
    author: "Théo A., Head of Studio, ATELIER",
    deliverables: ["Capsule design", "Launch film", "6 Reels", "Press tour"],
    stats: [{ label: "Sell-through", value: "100%" }, { label: "Waitlist", value: "+3,200" }],
  },
  {
    category: "Travel",
    year: "2024",
    brand: "ÓRBIT",
    title: "Tokyo City Guide",
    cover: g4,
    brief: "Three-week immersive Tokyo travel series for ÓRBIT luggage. Story-driven content that doubled as a city guide and a product showcase.",
    shots: [g4, g3, g8],
    metrics: [
      { label: "Saves", value: "187K" },
      { label: "Engagement", value: "13.8%" },
      { label: "Sales lift", value: "+44%" },
    ],
    quote: "She turned product placement into a love letter to a city. Best ROI we've ever seen.",
    author: "Rin K., Marketing Lead, ÓRBIT",
    deliverables: ["12-part Story series", "3 Reels", "City guide carousel", "Affiliate links"],
    stats: [{ label: "Sales lift", value: "+44%" }, { label: "Saves", value: "187K" }],
  },
  {
    category: "Lifestyle",
    year: "2024",
    brand: "FLORA&FAUNA",
    title: "Home Refresh",
    cover: g8,
    brief: "Documented a full apartment refresh using FLORA&FAUNA's home line. Long-form video plus a shoppable static carousel funnel.",
    shots: [g8, g6, g1],
    metrics: [
      { label: "Views", value: "2.6M" },
      { label: "Click-through", value: "11.2%" },
      { label: "Sales lift", value: "+29%" },
    ],
    quote: "Her audience trusts her recommendations like family. The conversion was outstanding.",
    author: "Sophie M., DTC Lead, FLORA&FAUNA",
    deliverables: ["Long-form vlog", "Shoppable carousel", "Story series"],
    stats: [{ label: "Sales lift", value: "+29%" }, { label: "Views", value: "2.6M" }],
  },
];

export const featuredWork = work.slice(0, 3);
export const categories: Category[] = ["Fashion", "Beauty", "Travel", "Tech", "Lifestyle"];
