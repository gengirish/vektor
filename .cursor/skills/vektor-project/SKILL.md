---
name: vektor-project
description: Provides architecture knowledge for the VEKTOR marketing website. Use when exploring the codebase, adding sections, debugging, or asking about project structure, tech stack, design system, brand identity, or conventions.
---

# VEKTOR — Project Architecture

## Project Context

VEKTOR (rebranded from GS IT Services) is a bold, premium, dark-themed marketing website for a tech company based in Dharwad, Karnataka, India. Single-page site showcasing services, brand story, and company identity. Tagline: "The Gateway. Evolved."

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"` + `@theme`) |
| Animation | Framer Motion 12 |
| Fonts | next/font/google (Bebas Neue, DM Sans, Space Mono) |
| Package Manager | npm |

## Project Structure

```
vektor/
├── app/
│   ├── layout.tsx          # Fonts, metadata, Cursor component
│   ├── page.tsx            # Imports all sections in order
│   └── globals.css         # Tailwind v4 @theme, CSS vars, noise, cursor, animations
├── components/
│   ├── Cursor.tsx          # Custom gold dot + lagging ring cursor
│   ├── Logo.tsx            # Chalukya-inspired inline SVG logomark
│   ├── Navbar.tsx          # Fixed nav with scroll blur effect
│   ├── RevealOnScroll.tsx  # Reusable Framer Motion scroll-triggered wrapper
│   ├── Footer.tsx          # 4-column footer
│   └── sections/
│       ├── Hero.tsx        # Full-viewport hero with ghost text + decorative SVG
│       ├── Ticker.tsx      # Infinite scrolling gold band
│       ├── GatewayStory.tsx # Origin story + Chalukya lattice SVG
│       ├── Stats.tsx       # 4 animated stat counters
│       ├── Services.tsx    # 6 service cards grid
│       ├── WhyDharwad.tsx  # Heritage/education pill cards
│       ├── Process.tsx     # 4-step method visualization
│       └── CTABand.tsx     # Gold CTA band with mailto
├── lib/
│   └── constants.ts        # All data: nav links, stats, services, process, ticker
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | #07070A | Primary background |
| `bg2` | #0D0D12 | Section alternate background |
| `bg3` | #111118 | Card backgrounds |
| `gold` | #E8A820 | Primary accent (turmeric gold) |
| `gold-l` | #F5C842 | Hover/light gold |
| `gold-d` | #A67510 | Dark gold accents |
| `bone` | #EAE6DC | Body text, headings |
| `muted` | #5A5960 | Secondary text |
| `border` | #1E1E28 | Borders, dividers |

**Strict palette**: Never use purple, blue, or generic gradient schemes.

### Typography

| Font | Variable | Usage |
|------|----------|-------|
| Bebas Neue | `font-display` | Headings, nav logo, stats, buttons |
| DM Sans | `font-body` | Body text (weights 300/400/500/600) |
| Space Mono | `font-mono` | Eyebrows, labels, badges |

### Section IDs (anchor targets)

`#services`, `#about`, `#process`, `#contact` — must match `Navbar` links.

## Brand Identity

- **Company**: VEKTOR (Dharwad, Karnataka, India, Est. 2024)
- **Origin**: Dharwad = Dwara + Wada = "Gateway Town" (Sanskrit)
- **Heritage**: Chalukya dynasty (1403), IIT Dharwad, IIIT Dharwad, Smart City
- **Motifs**: Concentric squares, rotated squares, vector arrows, gold dots

## Naming Conventions

| Used for | Style | Example |
|----------|-------|---------|
| Components | PascalCase | `GatewayStory.tsx`, `CTABand.tsx` |
| Sections dir | PascalCase files in `sections/` | `sections/Hero.tsx` |
| Constants | UPPER_SNAKE_CASE | `NAV_LINKS`, `SERVICES` |
| CSS classes | Tailwind utility + `font-display`, `font-body`, `font-mono` |
| CSS vars | kebab-case | `--gold`, `--bg`, `--border` |

## Key Rules

1. **All SVGs are inline** — no image files, respond to CSS color
2. **Tailwind v4** — use `@theme` block, not `tailwind.config.js`
3. **CSS custom properties** alongside Tailwind for noise texture, cursor, gradients
4. **No `window` references in SSR** — decorative SVGs must render server-side
5. **Single-page** — all sections in `page.tsx`, no routing
6. **Data in `lib/constants.ts`** — never hardcode in components
7. **Framer Motion `as const`** — ease arrays need `as const` for TypeScript
8. **`"use client"` only where needed** — interactive components, not static sections
