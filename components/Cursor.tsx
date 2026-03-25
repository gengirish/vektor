"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hovering.current = !!target.closest("a, button, [role='button']");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    let raf: number;
    const loop = () => {
      const lerp = 0.12;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerp;

      if (dot.current) {
        dot.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
      }

      const size = hovering.current ? 56 : 36;
      if (ring.current) {
        ring.current.style.width = `${size}px`;
        ring.current.style.height = `${size}px`;
        ring.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-2 w-2 rounded-full bg-gold"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border-[1.5px] border-gold transition-[width,height] duration-200"
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
}
