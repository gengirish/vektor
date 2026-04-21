"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

function EducationIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
      <path d="M16 4L2 12l14 8 14-8L16 4z" />
      <path d="M6 15v8l10 5 10-5v-8" />
      <line x1="30" y1="12" x2="30" y2="24" />
    </svg>
  );
}

function SmartCityIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
      <rect x="4" y="14" width="8" height="14" rx="1" />
      <rect x="12" y="6" width="8" height="22" rx="1" />
      <rect x="20" y="10" width="8" height="18" rx="1" />
      <circle cx="8" cy="18" r="1" fill="#E8A820" stroke="none" />
      <circle cx="16" cy="12" r="1" fill="#E8A820" stroke="none" />
      <circle cx="24" cy="16" r="1" fill="#E8A820" stroke="none" />
    </svg>
  );
}

function TalentIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
      <circle cx="16" cy="10" r="6" />
      <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" />
      <path d="M22 8l4-4" opacity="0.6" />
      <circle cx="27" cy="3" r="2" fill="#E8A820" stroke="none" />
    </svg>
  );
}

function HeritageIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
      <path d="M16 2l12 8v4H4v-4L16 2z" />
      <line x1="8" y1="14" x2="8" y2="26" />
      <line x1="14" y1="14" x2="14" y2="26" />
      <line x1="18" y1="14" x2="18" y2="26" />
      <line x1="24" y1="14" x2="24" y2="26" />
      <rect x="2" y="26" width="28" height="3" rx="0.5" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
      <path d="M16 2C10.477 2 6 6.477 6 12c0 8 10 18 10 18s10-10 10-18c0-5.523-4.477-10-10-10z" />
      <circle cx="16" cy="12" r="4" />
    </svg>
  );
}

const pills = [
  {
    icon: <EducationIcon />,
    title: "Education Capital",
    desc: "IIT Dharwad, IIIT Dharwad, Karnatak University — shaping the next generation of engineers.",
  },
  {
    icon: <SmartCityIcon />,
    title: "Smart City Designate",
    desc: "Part of India's Smart Cities Mission and Solar City programme, driving urban innovation.",
  },
  {
    icon: <TalentIcon />,
    title: "Tech Talent Hub",
    desc: "A steady pipeline of elite engineering graduates from world-class institutions.",
  },
  {
    icon: <HeritageIcon />,
    title: "Chalukya Heritage",
    desc: "Founded in 1403 by a dynasty of builders — innovation is in the city's DNA.",
  },
];

export default function WhyDharwad() {
  return (
    <section className="border-y border-border bg-bg2 px-6 py-[140px] md:px-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
              Why It Matters
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2
              className="font-display leading-[0.95]"
              style={{ fontSize: "clamp(48px, 5.5vw, 80px)" }}
            >
              Rooted in
              <br />
              <span className="text-gold">Dharwad.</span>
              <br />
              Built for
              <br />
              the World.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="max-w-lg font-body text-base font-light leading-relaxed text-muted">
              Known as the &ldquo;Oxford of Karnataka&rdquo; and
              &ldquo;Vidya Kashi&rdquo; (City of Learning), Dharwad produces
              some of India&apos;s sharpest engineering minds. Our roots give us
              access to extraordinary talent and a heritage of rigorous thinking.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <p className="max-w-lg font-body text-base font-light leading-relaxed text-muted">
              With IIT Dharwad and IIIT Dharwad anchoring the region&apos;s tech
              ecosystem, and the Smart City initiative transforming
              infrastructure, we operate from the intersection of tradition and
              cutting-edge innovation.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="inline-flex items-center gap-3 rounded-none border border-border px-5 py-3">
              <LocationIcon />
              <span className="font-mono text-xs tracking-wide text-gold">
                Dharwad, Karnataka · 750m Elevation
              </span>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right — pill cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pills.map((pill, i) => (
            <RevealOnScroll key={pill.title} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-3 border border-border bg-bg3 p-6 transition-colors duration-300 hover:border-gold-d">
                {pill.icon}
                <h3 className="font-display text-xl tracking-wide text-bone">
                  {pill.title}
                </h3>
                <p className="font-body text-sm font-light leading-relaxed text-muted">
                  {pill.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
