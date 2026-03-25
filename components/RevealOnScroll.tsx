"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  width = "100%",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ width }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
