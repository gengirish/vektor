"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 ${
        scrolled
          ? "border-b border-border bg-[rgba(7,7,10,0.85)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2.5">
        <Logo className="h-9 w-9 text-bone" />
        <span className="font-display text-2xl tracking-wider text-bone">
          VEKTO<span className="text-gold">R</span>
        </span>
      </a>

      {/* Center links */}
      <div className="hidden items-center gap-10 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-body text-sm font-light tracking-wide text-muted transition-colors hover:text-bone"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="rounded-none bg-gold px-5 py-2.5 font-display text-sm tracking-widest text-bg transition-colors hover:bg-gold-l"
      >
        GET STARTED
      </a>
    </nav>
  );
}
