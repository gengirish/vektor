"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const start = performance.now();
    let raf: number;

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col gap-2 px-6 py-8 md:px-10 md:py-12"
    >
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-gold to-transparent" />

      <div className="flex items-baseline gap-1">
        <span className="font-display text-[56px] leading-none text-bone md:text-[64px]">
          {display}
        </span>
        <span className="font-display text-[32px] leading-none text-gold">
          {suffix}
        </span>
      </div>

      <span className="font-body text-[13px] tracking-[0.06em] text-muted uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`${i % 2 === 0 ? "border-r border-border" : ""} ${i < 2 ? "border-b border-border md:border-b-0" : ""} ${i < 3 ? "md:border-r md:border-border" : ""}`}
          >
            <StatItem
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
