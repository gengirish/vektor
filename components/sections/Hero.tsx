"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
});

function HeroSVG() {
  return (
    <div className="relative hidden h-full w-full items-center justify-center lg:flex">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[420px] w-[420px]"
        aria-hidden="true"
      >
        {/* Concentric squares */}
        <rect x="40" y="40" width="320" height="320" stroke="#E8A820" strokeWidth="0.5" opacity="0.15" />
        <rect x="80" y="80" width="240" height="240" stroke="#E8A820" strokeWidth="0.5" opacity="0.2" />
        <rect x="120" y="120" width="160" height="160" stroke="#E8A820" strokeWidth="0.5" opacity="0.25" />

        {/* Rotated squares */}
        <rect x="200" y="58" width="200" height="200" transform="rotate(45 200 58)" stroke="#E8A820" strokeWidth="0.5" opacity="0.12" />
        <rect x="200" y="100" width="142" height="142" transform="rotate(45 200 100)" stroke="#E8A820" strokeWidth="0.5" opacity="0.18" />

        {/* Circles at cardinal intersections */}
        <circle cx="200" cy="40" r="4" stroke="#E8A820" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="200" cy="360" r="4" stroke="#E8A820" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="40" cy="200" r="4" stroke="#E8A820" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="360" cy="200" r="4" stroke="#E8A820" strokeWidth="0.5" fill="none" opacity="0.3" />

        {/* Center gold dot */}
        <circle cx="200" cy="200" r="4" fill="#E8A820" />

        {/* Vector arrow upper-right */}
        <line x1="200" y1="200" x2="340" y2="60" stroke="#E8A820" strokeWidth="1" opacity="0.5" />
        <polyline points="325,60 340,60 340,75" stroke="#E8A820" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Pulsing ring */}
        <circle
          cx="200"
          cy="200"
          r="16"
          stroke="#E8A820"
          strokeWidth="0.8"
          fill="none"
          className="animate-pulse-ring"
          style={{ transformOrigin: "200px 200px" }}
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Grid background */}
      <div className="hero-grid absolute inset-0 opacity-40" />

      {/* Ghost text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none" aria-hidden="true">
        <span
          className="font-display leading-none"
          style={{
            fontSize: "clamp(120px, 22vw, 380px)",
            color: "#E8A820",
            opacity: 0.035,
          }}
        >
          GATEWAY
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 items-center gap-12 px-6 pt-32 md:px-12 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <motion.div {...fadeUp(0.2)} className="flex items-center gap-4">
            <div className="h-px w-8 bg-gold" />
            <span className="font-mono text-xs tracking-widest text-gold">
              Dharwad, Karnataka · Est. 2024 · 750m Elevation
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.4)}
            className="font-display leading-[0.92]"
            style={{ fontSize: "clamp(72px, 10vw, 148px)" }}
          >
            The
            <br />
            <span className="text-gold">Gateway.</span>
            <br />
            Evolved.
          </motion.h1>

          <motion.p
            {...fadeUp(0.6)}
            className="max-w-lg font-body text-lg font-light leading-relaxed text-muted"
          >
            Born in <span className="font-medium text-bone">Dharwad</span> —
            the ancient gateway between mountains and plains — VEKTOR builds the
            technology infrastructure that opens new frontiers for your business.
          </motion.p>

          <motion.div {...fadeUp(0.8)} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#services"
              className="group flex items-center gap-3 bg-gold px-7 py-3.5 font-display text-sm tracking-widest text-bg transition-colors hover:bg-gold-l"
            >
              EXPLORE OUR WORK
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 border border-border px-7 py-3.5 font-display text-sm tracking-widest text-bone transition-colors hover:border-gold hover:text-gold"
            >
              OUR STORY
            </a>
          </motion.div>
        </div>

        {/* Right decorative SVG */}
        <motion.div {...fadeUp(1.0)}>
          <HeroSVG />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(1.2)}
        className="absolute bottom-8 left-6 z-10 flex items-end gap-3 md:left-12"
      >
        <div className="h-16 w-px bg-gradient-to-b from-gold to-transparent" />
        <span
          className="origin-bottom-left -rotate-90 font-mono text-[10px] tracking-[0.2em] text-gold"
          style={{ transformOrigin: "0 100%" }}
        >
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
