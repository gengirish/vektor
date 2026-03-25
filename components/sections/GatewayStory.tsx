"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

function ChalukyaPattern() {
  return (
    <svg
      viewBox="0 0 500 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Outer border frame */}
      <rect x="10" y="10" width="480" height="580" stroke="#E8A820" strokeWidth="0.6" opacity="0.15" />
      <rect x="20" y="20" width="460" height="560" stroke="#E8A820" strokeWidth="0.4" opacity="0.1" />

      {/* Gold corner squares */}
      <rect x="10" y="10" width="12" height="12" fill="#E8A820" opacity="0.3" />
      <rect x="478" y="10" width="12" height="12" fill="#E8A820" opacity="0.3" />
      <rect x="10" y="578" width="12" height="12" fill="#E8A820" opacity="0.3" />
      <rect x="478" y="578" width="12" height="12" fill="#E8A820" opacity="0.3" />

      {/* Lattice pattern using <pattern> */}
      <defs>
        <pattern id="lattice" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="8" y="8" width="24" height="24" stroke="#E8A820" strokeWidth="0.3" fill="none" opacity="0.12" />
          <rect x="20" y="5.03" width="17" height="17" transform="rotate(45 20 5.03)" stroke="#E8A820" strokeWidth="0.3" fill="none" opacity="0.08" />
          <circle cx="20" cy="20" r="1" fill="#E8A820" opacity="0.1" />
        </pattern>
      </defs>
      <rect x="40" y="40" width="420" height="520" fill="url(#lattice)" />

      {/* Center nested squares */}
      <rect x="170" y="220" width="160" height="160" stroke="#E8A820" strokeWidth="0.6" opacity="0.2" />
      <rect x="190" y="240" width="120" height="120" stroke="#E8A820" strokeWidth="0.5" opacity="0.25" />
      <rect x="250" y="250" width="70.7" height="70.7" transform="rotate(45 250 250)" stroke="#E8A820" strokeWidth="0.5" opacity="0.2" />

      {/* Concentric circles */}
      <circle cx="250" cy="300" r="50" stroke="#E8A820" strokeWidth="0.4" fill="none" opacity="0.15" />
      <circle cx="250" cy="300" r="30" stroke="#E8A820" strokeWidth="0.4" fill="none" opacity="0.2" />

      {/* Gold dots at cardinal points */}
      <circle cx="250" cy="220" r="3" fill="#E8A820" opacity="0.4" />
      <circle cx="250" cy="380" r="3" fill="#E8A820" opacity="0.4" />
      <circle cx="170" cy="300" r="3" fill="#E8A820" opacity="0.4" />
      <circle cx="330" cy="300" r="3" fill="#E8A820" opacity="0.4" />

      {/* Center dot */}
      <circle cx="250" cy="300" r="4" fill="#E8A820" opacity="0.6" />

      {/* Vector arrow */}
      <line x1="250" y1="300" x2="330" y2="220" stroke="#E8A820" strokeWidth="1" opacity="0.4" />
      <polyline points="318,220 330,220 330,232" stroke="#E8A820" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

export default function GatewayStory() {
  return (
    <section id="about" className="px-6 py-[140px] md:px-12 md:py-[140px]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
              Our Origin
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2
              className="font-display leading-[0.95]"
              style={{ fontSize: "clamp(52px, 6vw, 88px)" }}
            >
              From the
              <br />
              <span className="text-gold">Ancient</span>
              <br />
              Gateway
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="max-w-lg font-body text-base font-light leading-relaxed text-muted">
              Dharwad — <em>Dwara Wada</em>, the &ldquo;Gateway Town&rdquo; —
              has stood at the crossroads of knowledge and commerce since 1403.
              Founded during the Chalukya dynasty, this city has always been a
              threshold between the ancient and the new.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <p className="max-w-lg font-body text-base font-light leading-relaxed text-muted">
              Today, Dharwad is home to IIT Dharwad, IIIT Dharwad, and is part
              of India&apos;s Smart City programme. VEKTOR was born here — carrying
              forward the city&apos;s legacy as a gateway, this time between
              businesses and their digital future.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="border-l-2 border-gold bg-gold/5 py-5 pl-6 pr-4">
              <p className="font-display text-[32px] tracking-wide text-gold">
                DWARA + WADA
              </p>
              <p className="mt-1 font-body text-sm italic text-muted">
                Sanskrit for &ldquo;Gateway&rdquo; + &ldquo;Settlement&rdquo; —
                the etymological root of Dharwad, a city built to be a threshold.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right column — Chalukya decorative SVG */}
        <RevealOnScroll delay={0.3}>
          <div className="hidden lg:block">
            <ChalukyaPattern />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
