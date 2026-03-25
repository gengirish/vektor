"use client";

import { SERVICES } from "@/lib/constants";
import RevealOnScroll from "@/components/RevealOnScroll";

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    ai: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-12 w-12">
        <circle cx="24" cy="24" r="8" />
        <circle cx="24" cy="24" r="16" opacity="0.4" />
        <line x1="24" y1="8" x2="24" y2="2" />
        <line x1="24" y1="46" x2="24" y2="40" />
        <line x1="8" y1="24" x2="2" y2="24" />
        <line x1="46" y1="24" x2="40" y2="24" />
        <circle cx="24" cy="24" r="3" fill="#E8A820" stroke="none" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-12 w-12">
        <path d="M12 36h24a10 10 0 10-5-18.7A14 14 0 1012 36z" />
        <line x1="18" y1="42" x2="18" y2="38" opacity="0.4" />
        <line x1="24" y1="44" x2="24" y2="38" opacity="0.4" />
        <line x1="30" y1="42" x2="30" y2="38" opacity="0.4" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-12 w-12">
        <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z" />
        <polyline points="16 24 22 30 34 18" />
      </svg>
    ),
    transform: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-12 w-12">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="28" y="28" width="16" height="16" rx="2" />
        <path d="M24 12h8v8" opacity="0.6" />
        <path d="M24 36h-8v-8" opacity="0.6" />
        <line x1="32" y1="12" x2="24" y2="20" />
        <line x1="16" y1="36" x2="24" y2="28" />
      </svg>
    ),
    infra: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-12 w-12">
        <rect x="8" y="6" width="32" height="10" rx="1" />
        <rect x="8" y="20" width="32" height="10" rx="1" />
        <rect x="8" y="34" width="32" height="10" rx="1" />
        <circle cx="14" cy="11" r="2" fill="#E8A820" stroke="none" />
        <circle cx="14" cy="25" r="2" fill="#E8A820" stroke="none" />
        <circle cx="14" cy="39" r="2" fill="#E8A820" stroke="none" />
      </svg>
    ),
    consulting: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#E8A820" strokeWidth="1.5" className="h-12 w-12">
        <circle cx="24" cy="16" r="8" />
        <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" />
        <path d="M30 12l6-6" opacity="0.6" />
        <circle cx="38" cy="4" r="2" fill="#E8A820" stroke="none" />
      </svg>
    ),
  };

  return icons[icon] || null;
}

export default function Services() {
  return (
    <section id="services" className="px-6 py-[140px] md:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <RevealOnScroll>
              <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                What We Do
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2
                className="mt-4 font-display leading-[0.95]"
                style={{ fontSize: "clamp(52px, 6vw, 88px)" }}
              >
                Services
                <br />
                That <span className="text-gold">Move</span>
                <br />
                Business.
              </h2>
            </RevealOnScroll>
          </div>
          <div className="flex items-end">
            <RevealOnScroll delay={0.2}>
              <p className="max-w-md font-body text-base font-light leading-relaxed text-muted">
                From AI-driven intelligence to bulletproof cloud infrastructure,
                we engineer the systems that let ambitious companies move faster,
                scale harder, and stay protected.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Cards grid */}
        <div className="border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <RevealOnScroll key={service.num} delay={i * 0.08}>
                <div
                  className={`group relative flex flex-col gap-5 p-8 transition-colors duration-300 hover:bg-bg2 md:p-10 ${
                    i % 3 !== 2 ? "lg:border-r lg:border-border" : ""
                  } ${i < 3 ? "border-b border-border" : ""} ${
                    i % 2 === 0 && i < 4 ? "border-r border-border md:border-r" : ""
                  }`}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative font-mono text-sm text-gold">
                    {service.num}
                  </span>

                  <div className="relative">
                    <ServiceIcon icon={service.icon} />
                  </div>

                  <h3 className="relative font-display text-[28px] tracking-wide text-bone">
                    {service.title}
                  </h3>

                  <p className="relative font-body text-sm font-light leading-relaxed text-muted">
                    {service.description}
                  </p>

                  {/* Arrow on hover */}
                  <div className="absolute bottom-6 right-6 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <svg
                      className="h-5 w-5 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
