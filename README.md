# Influencer Website - Interactive Media Kit

<p align="center">
  <b>A premium, conversion-focused creator portfolio experience</b><br/>
  Built with React, TanStack Start, Vite, and Tailwind CSS.
</p>

<p align="center">
  <a href="http://localhost:8080"><img alt="Local Live Link" src="https://img.shields.io/badge/Live-Localhost_8080-8b5cf6?style=for-the-badge"></a>
  <a href="https://github.com/RyugaxEren/Influencer-Website"><img alt="Repository" src="https://img.shields.io/badge/GitHub-Repository-111827?style=for-the-badge&logo=github"></a>
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite">
  <img alt="React" src="https://img.shields.io/badge/React-19.x-149ECA?style=for-the-badge&logo=react">
</p>

---

## Live Links

- **Local:** [http://localhost:8080](http://localhost:8080)
- **Repository:** [RyugaxEren/Influencer-Website](https://github.com/RyugaxEren/Influencer-Website)
- **Production:** Add your deployed URL here after deploy (Vercel/Netlify/Cloudflare Pages)

## Overview

This project presents a cinematic brand-partnership website for **Aria Kessler**, designed to feel editorial while still driving qualified leads.  
It combines smooth micro-interactions, social proof, and clear conversion paths to make the site feel both premium and high-performing.

## Why This Website Feels Engaging

- Interactive scroll experience with custom cursor, progress bar, reveal animations, and atmospheric overlays.
- High-intent CTA flow with sticky booking bar and multi-step inquiry journey.
- Case-study storytelling with rich campaign cards and lightbox detail views.
- Social-proof architecture through stats, testimonials, press strip, and results ticker.
- Distinct pages for homepage narrative (`/`) and full campaign archive (`/work`).

## Homepage Experience Map

1. Hero + positioning
2. About + press strip
3. Stats + platforms
4. Showcase + live feed
5. Demographics + brands
6. Results ticker + packages
7. Quiz + availability + testimonials
8. Final CTA + upgraded footer

## Tech Stack

- **Framework:** React 19, TanStack Start, TanStack Router
- **Build:** Vite 7
- **Styling:** Tailwind CSS 4
- **UI:** Radix UI + custom motion components
- **Forms:** React Hook Form + Zod
- **Language:** TypeScript

## Project Structure

```text
src/
  assets/                   # Campaign and profile images
  components/
    fx/                     # Motion/interaction components
    portfolio/              # Portfolio sections and feature blocks
    ui/                     # Shared UI primitives
  hooks/                    # Reusable hooks
  lib/                      # Shared data and utilities
  routes/                   # File-based routes (/ and /work)
  styles.css                # Theme tokens and global styles
```

## Quick Start

```bash
npm install
npm run dev
```

Then open [http://localhost:8080](http://localhost:8080).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run build:dev` - build in development mode
- `npm run preview` - preview production build
- `npm run lint` - run ESLint
- `npm run format` - run Prettier

## Customize for Your Brand

- Edit metadata in `src/routes/index.tsx` and `src/routes/work.tsx`.
- Update campaign data in `src/lib/work-data.ts`.
- Replace section copy/components in `src/components/portfolio/`.
- Replace media assets in `src/assets/`.
- Tune colors and typography in `src/styles.css`.

## Notes

- Lovable watermark injection has been removed from runtime configuration.
- `.lovable/` artifacts are ignored for cleaner public commits.
