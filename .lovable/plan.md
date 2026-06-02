## Goal
Push the site from "beautiful media kit" to "brand marketing directors send the link to their CMO." Three coordinated angles — conversion, design polish, trust — without bloating the page.

## Scope (what we're adding)

### 1. New route: `/work` — full case-study archive
- New TanStack route `src/routes/work.tsx` with its own SEO `head()` (title, description, og:title/description, og:image).
- Grid of all past brand campaigns (8–10 cards) with category filter chips: Fashion · Beauty · Travel · Tech · Lifestyle.
- Click a card → existing `CaseLightbox` opens with: hero image, brand logo, campaign goal, deliverables, results (reach, engagement, CTR, sales lift), brand quote, "View live post" link.
- Home page `Brands` section gets a "See all 47 campaigns →" link to `/work`.
- Nav (top of page) gains: Work · Packages · Contact.

### 2. Conversion: Sticky "Book Aria" CTA bar
- New `src/components/portfolio/StickyBookBar.tsx` — appears after scrolling past Hero (IntersectionObserver on Hero).
- Bottom-fixed glass bar (backdrop-blur, violet border-top glow). Left: small avatar + "Aria Kessler · replies in ~4h" with green pulsing dot. Right: "Book a call" + "Send brief" buttons.
- Slides up on enter, slides down on exit. Hidden on mobile when keyboard open; compact on small screens (single CTA).

### 3. Conversion: Qualifying inquiry form (replaces final CTA mailto)
- New `src/components/portfolio/InquiryForm.tsx` mounted in the `CtaFinal` section.
- Multi-step (3 steps, animated transitions): 
  1. About brand — name, website, email, brand category dropdown.
  2. Campaign — type (Reel/Story/Campaign/Ambassador), timeline (date picker), territories (multi-chip).
  3. Budget — slider $1k → $100k+ with live label; messaging textarea.
- Zod validation on every field (name/email/budget required; URL format; max lengths). Inline error states with shake animation.
- Submit: client-side only for now → shows success card "Brief received. Aria replies within 4 hours." with confetti burst. (No backend wiring this round — adding Lovable Cloud + email is a follow-up the user can request.)
- Budget under $1k → polite "Aria's minimum starts at $2,500" gate, surfaces media-kit-download button instead.

### 4. Trust: Press strip + verified badges
- New `src/components/portfolio/PressStrip.tsx` placed between `About` and `Stats`.
- Single line of grayscale press logos that color on hover: Vogue, Forbes, Hypebeast, Refinery29, Business of Fashion, ELLE. Marquee on mobile, static on desktop.
- Below: small verification row — "Meta Verified ✓ · TikTok Creator Marketplace ✓ · YouTube Partner ✓ · IG Creator Marketplace ✓". Each icon glows on hover.

### 5. Trust: Live results ROI ticker
- New `src/components/portfolio/ResultsTicker.tsx` placed before `Packages`.
- Three big animated stat counters (already have `CountUp`): **$2.4M tracked sales · 47 brand deals · 6.2× avg ROAS**.
- Small caption under each: "Verified via Shopify Collabs · UTM tracked · Past 12 months".
- Below: 4-quote ticker (auto-scrolling horizontally, paused on hover) with real-feel testimonial snippets and brand logos.

### 6. Design polish (motion ceiling: 4 / cinematic-lite)
- **Page entry loader**: brief 600ms full-screen logo reveal on first visit only (sessionStorage flag) — "A.K." monogram drawing in with SVG stroke animation, then fades to reveal Hero.
- **Section reveal upgrade**: existing `Reveal` stays, but section headlines get a subtle mask-reveal (clip-path inset) instead of fade. Feels editorial.
- **Anchor nav rail**: thin vertical dot-nav on right side of viewport (desktop only) — 8 dots mapping to sections, active dot expands with section label on hover. Scrolls to section.
- **Cursor refinement**: existing CustomCursor gets a "magnetic snap" on CTA buttons (radius detection → cursor scales 2× and color-shifts to pink).
- **Hero portrait carousel polish**: pause on hover, individual cards slow-rotate to face cursor (subtle tilt).
- **Brand quiz result page**: confetti + share button ("Tell your team: We're a match with Aria").

### 7. Footer upgrade
- Three-column footer: left = name + tagline + monogram; middle = quick links + work; right = contact card with response-time badge + "Download Media Kit (PDF)" + small newsletter signup ("Monthly brand insights").

## Technical Details

**Files to create:**
- `src/routes/work.tsx` — new route, case-study grid
- `src/components/portfolio/StickyBookBar.tsx`
- `src/components/portfolio/InquiryForm.tsx`
- `src/components/portfolio/PressStrip.tsx`
- `src/components/portfolio/ResultsTicker.tsx`
- `src/components/portfolio/AnchorRail.tsx`
- `src/components/portfolio/PageLoader.tsx`
- `src/components/portfolio/TopNav.tsx` (Home · Work · Packages · Contact)
- `src/lib/work-data.ts` — typed array of 8–10 campaigns (consumed by both `Brands` on home and `/work`)

**Files to modify:**
- `src/routes/index.tsx` — insert PressStrip, ResultsTicker, StickyBookBar, AnchorRail, PageLoader, TopNav
- `src/components/portfolio/CtaFinal.tsx` — replace mailto block with `InquiryForm`
- `src/components/portfolio/Brands.tsx` — "See all" link to `/work`, pull from `work-data.ts`
- `src/components/portfolio/Footer.tsx` — three-column upgrade

**Dependencies:** `zod` (already typically present), `react-hook-form` + `@hookform/resolvers` for the form; `canvas-confetti` for success burst. No new heavy libs.

**Out of scope this round** (call out as follow-ups):
- Backend wiring for the inquiry form (needs Lovable Cloud + email/Slack notification)
- Real Calendly embed for "Book a call" (needs user's Calendly link)
- Real press logos / verified badges (placeholders use SVG text; user can drop in real assets)
- Sound design / scroll-jacking (motion ceiling = 4, not 5)

## QA after build
- `/` and `/work` both have unique SEO meta, view both in preview.
- Sticky bar appears after Hero exit, disappears in viewport bottom of CtaFinal.
- Inquiry form: invalid email blocks step advance; sub-$1k budget shows gate; success state fires confetti.
- AnchorRail tracks active section as you scroll.
- All new sections respect existing dark theme tokens (no hardcoded colors).
