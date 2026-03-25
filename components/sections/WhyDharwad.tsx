"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

const pills = [
  {
    emoji: "🎓",
    title: "Education Capital",
    desc: "IIT Dharwad, IIIT Dharwad, Karnatak University — shaping the next generation of engineers.",
  },
  {
    emoji: "🏙️",
    title: "Smart City Designate",
    desc: "Part of India's Smart Cities Mission and Solar City programme, driving urban innovation.",
  },
  {
    emoji: "⚡",
    title: "Tech Talent Hub",
    desc: "A steady pipeline of elite engineering graduates from world-class institutions.",
  },
  {
    emoji: "🏛️",
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
            <div className="inline-flex items-center gap-2 rounded-none border border-border px-5 py-3">
              <span className="text-sm">📍</span>
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
                <span className="text-2xl">{pill.emoji}</span>
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
