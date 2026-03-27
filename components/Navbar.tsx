"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 z-[100] flex w-full items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 ${
          scrolled
            ? "border-b border-border bg-[rgba(7,7,10,0.85)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9 text-bone" />
          <span className="font-display text-2xl tracking-wider text-bone">
            VEKTO<span className="text-gold">R</span>
          </span>
        </a>

        {/* Center links — desktop */}
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

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden bg-gold px-5 py-2.5 font-display text-sm tracking-widest text-bg transition-colors hover:bg-gold-l sm:inline-block"
          >
            GET STARTED
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`h-[2px] w-6 bg-gold transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-gold transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-gold transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-12 bg-[rgba(7,7,10,0.98)] backdrop-blur-[20px] md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="font-display text-[52px] leading-none tracking-[0.06em] text-bone transition-colors hover:text-gold"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.4 }}
              className="mt-4 bg-gold px-8 py-3.5 font-display text-sm tracking-widest text-bg transition-colors hover:bg-gold-l"
            >
              GET STARTED
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
