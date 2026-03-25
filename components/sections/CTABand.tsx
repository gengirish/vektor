"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

export default function CTABand() {
  return (
    <section id="contact" className="px-6 md:px-[52px]">
      <div className="relative overflow-hidden bg-gold px-8 py-16 md:px-[72px] md:py-20">
        {/* Ghost text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span
            className="font-display leading-none whitespace-nowrap"
            style={{
              fontSize: "clamp(100px, 16vw, 280px)",
              color: "#07070A",
              opacity: 0.08,
            }}
          >
            VEKTOR
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          {/* Left */}
          <div>
            <RevealOnScroll>
              <h3 className="font-display text-[clamp(36px,4.5vw,64px)] leading-[0.95] text-bg">
                Ready to Pass
                <br />
                Through the Gateway?
              </h3>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="mt-4 font-body text-base font-light text-bg/70">
                Let&apos;s build something that lasts 600 years.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right */}
          <RevealOnScroll delay={0.2}>
            <a
              href="mailto:hello@vektor.in"
              className="shrink-0 bg-bg px-8 py-4 font-display text-sm tracking-widest text-bone transition-colors hover:bg-bg2"
            >
              START A CONVERSATION
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
