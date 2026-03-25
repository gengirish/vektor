---
name: vektor-frontend
description: Build and maintain the VEKTOR Next.js marketing site with Tailwind CSS v4, Framer Motion animations, and responsive dark-themed components. Use when creating sections, components, animations, styling, or frontend configuration.
---

# VEKTOR Next.js Frontend

## Tech Stack

```json
{
  "dependencies": {
    "next": "^16.2",
    "react": "^19.2",
    "react-dom": "^19.2",
    "framer-motion": "^12.38"
  },
  "devDependencies": {
    "typescript": "^5.8",
    "@types/react": "^19.1",
    "@types/node": "^22.15",
    "tailwindcss": "^4.1",
    "@tailwindcss/postcss": "^4.1",
    "postcss": "^8.5",
    "autoprefixer": "^10.4"
  }
}
```

## Tailwind CSS v4 Configuration

Tailwind v4 uses `@theme` inside `globals.css` instead of `tailwind.config.js`:

```css
@import "tailwindcss";

@theme {
  --color-bg: #07070A;
  --color-gold: #E8A820;
  --color-bone: #EAE6DC;
  --font-display: var(--font-bebas-neue);
  --font-body: var(--font-dm-sans);
  --font-mono: var(--font-space-mono);
}
```

Use CSS custom properties via `:root` for things Tailwind can't express (noise, cursor, complex gradients).

## Section Component Template

```tsx
"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

export default function SectionName() {
  return (
    <section id="section-id" className="px-6 py-[140px] md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll>
          <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
            Eyebrow Label
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2
            className="mt-4 font-display leading-[0.95]"
            style={{ fontSize: "clamp(52px, 6vw, 88px)" }}
          >
            Heading <span className="text-gold">Gold Word</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="max-w-lg font-body text-base font-light leading-relaxed text-muted">
            Body text here.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
```

## RevealOnScroll (Scroll Animation Wrapper)

```tsx
<RevealOnScroll delay={0.2}>
  <YourComponent />
</RevealOnScroll>
```

- `useInView` with `once: true`, `margin: "-100px"`
- `initial: { opacity: 0, y: 40 }` → `{ opacity: 1, y: 0 }`
- Ease: `[0.22, 1, 0.36, 1] as const` (TypeScript requirement)
- Wrap all section headings, paragraphs, cards

## Framer Motion Patterns

### Scroll-triggered reveal (sections)
Use `<RevealOnScroll>` wrapper. Add `delay` for stagger effect.

### Initial animation (Hero)
Use `motion.div` directly with `initial`/`animate` props:

```tsx
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
});

<motion.div {...fadeUp(0.4)}>
```

### Animated stat counters
Use `useInView` + `requestAnimationFrame` loop with easing:

```tsx
const tick = (now: number) => {
  const progress = Math.min((now - start) / duration, 1);
  const eased = 1 - Math.pow(1 - progress, 3);
  setDisplay(Math.round(eased * targetValue));
  if (progress < 1) requestAnimationFrame(tick);
};
```

### CSS animations (no Framer)
Ticker: pure CSS `translateX(-50%)` infinite loop.
Pulse ring: CSS keyframe `scale(1)→scale(2.2)`, `opacity(0.6)→opacity(0)`.

## Inline SVG Pattern

All icons and decorative graphics are inline SVGs:

```tsx
function IconName() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-12 w-12">
      {/* geometry */}
    </svg>
  );
}
```

- Use `stroke="currentColor"` when color should follow text
- Use `#E8A820` directly for fixed gold accents
- No `window` or `document` references (SSR safe)
- Use `<pattern>` elements for repeating lattice motifs

## Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| < 768px | Single columns, hide decorative SVGs, reduce padding (140→80px, 52→24px) |
| < 768px | Hide nav center links, show logo + CTA only |
| < 768px | Stats: 2×2 grid, Process: 2×2 grid |
| ≥ 768px | Multi-column layouts, full padding |
| ≥ 1024px | Decorative SVGs visible, full nav links |

## Typography Scale

| Element | Font | Size | Notes |
|---------|------|------|-------|
| H1 (Hero) | display | `clamp(72px, 10vw, 148px)` | line-height 0.92 |
| H2 (Sections) | display | `clamp(52px, 6vw, 88px)` | line-height 0.95 |
| H3 (Cards) | display | 28px | tracking-wide |
| Body | body | 16px (base) | font-light, leading-relaxed |
| Eyebrow | mono | 12px (xs) | tracking-[0.2em], uppercase |
| Label | body | 13px | tracking-[0.06em], uppercase, muted |

## Key Rules

1. **`"use client"` only for interactive components** — Navbar, Hero (motion), Stats (counter), Cursor
2. **Static sections can use `"use client"` only if they use RevealOnScroll**
3. **Never use `JSX.Element`** — use `React.ReactNode` for type annotations
4. **Ease arrays need `as const`** — `[0.22, 1, 0.36, 1] as const`
5. **All data in `lib/constants.ts`** — services, stats, process steps, ticker items
6. **Gold accent on key words** in headings: `<span className="text-gold">Word</span>`
7. **Section eyebrow pattern**: Space Mono, xs, gold, uppercase, tracking-[0.2em]
8. **Max-width 1400px** for content containers
9. **Noise overlay** is `body::before` with pointer-events: none, z-index: 9999
10. **Custom cursor hidden on touch devices** — check `ontouchstart` / `maxTouchPoints`
