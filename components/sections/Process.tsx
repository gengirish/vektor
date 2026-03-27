"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Process() {
  return (
    <section id="process" className="px-6 py-[140px] md:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <RevealOnScroll>
            <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
              How We Work
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2
              className="mx-auto mt-4 font-display leading-[0.95]"
              style={{ fontSize: "clamp(48px, 5.5vw, 80px)" }}
            >
              The <span className="text-gold">VEKTOR</span> Method
            </h2>
          </RevealOnScroll>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Connecting line — desktop only */}
          <div className="absolute top-8 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] hidden h-px lg:block">
            <div className="h-full w-full bg-gradient-to-r from-gold via-muted to-gold opacity-30" />
          </div>

          {PROCESS_STEPS.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i * 0.12}>
              <div className="flex flex-col items-center gap-5 text-center">
                <div className="relative z-[1] flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-bg">
                  <span className="font-display text-[22px] text-gold">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-display text-2xl tracking-wide text-bone">
                  {step.title}
                </h3>

                <p className="max-w-[240px] font-body text-sm font-light leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
