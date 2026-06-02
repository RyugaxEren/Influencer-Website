# Influencer Website - Interactive Media Kit

An immersive, conversion-focused creator portfolio website built with React, TanStack Start, and Vite.

This project presents a premium brand-partnership experience for **Aria Kessler** with animated storytelling, campaign proof points, interactive case studies, and a high-intent inquiry flow.

## Live Experience Highlights

- Magnetic CTA buttons, custom cursor, page loader, scroll progress, and reveal animations.
- Interactive campaign gallery and lightbox-based case-study browsing.
- Brand-fit quiz and inquiry form flow designed to increase qualified outreach.
- Dedicated `/work` archive page with category filtering and campaign metrics.
- SEO-ready page metadata for homepage and work pages.

## Core Sections (Homepage)

- Hero and creator positioning
- About and press strip
- Stats and platform breakdown
- Showcase and live feed
- Demographics and brand proof
- Results ticker and package options
- Brand quiz, availability, testimonials, final CTA, and footer

## Tech Stack

- **Framework:** React 19 + TanStack Start + TanStack Router
- **Build tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **UI primitives:** Radix UI
- **Forms/validation:** React Hook Form + Zod
- **Icons:** Lucide React
- **Language:** TypeScript

## Project Structure

```text
src/
  assets/                   # Campaign and profile images
  components/
    fx/                     # Motion/interaction components
    portfolio/              # Page sections and portfolio widgets
    ui/                     # Shared UI primitives
  hooks/                    # Reusable custom hooks
  lib/                      # Shared app utilities and data
  routes/                   # File-based routes (/ and /work)
  styles.css                # Global theme and tokens
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open `http://localhost:8080`.

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Customization Guide

To adapt this template for your own brand/creator:

- Update SEO metadata in `src/routes/index.tsx` and `src/routes/work.tsx`.
- Replace campaign data in `src/lib/work-data.ts`.
- Update sections inside `src/components/portfolio/`.
- Replace image assets under `src/assets/`.
- Adjust theme tokens and global styles in `src/styles.css`.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - production build
- `npm run build:dev` - development-mode build
- `npm run preview` - preview build output
- `npm run lint` - run ESLint
- `npm run format` - run Prettier formatting

## Notes

- This repository is now configured without Lovable runtime tagging/watermark injection.
- The `.lovable` planning artifacts are optional and can be removed for a cleaner public repository.
