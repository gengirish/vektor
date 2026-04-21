"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

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

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector<HTMLElement>("a");
      firstLink?.focus();
    }
  }, [menuOpen]);

  const motionProps = reduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : undefined;

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
        <a href="/" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9 text-bone" />
          <span className="font-display text-2xl tracking-wider text-bone">
            VEKTO<span className="text-gold">R</span>
          </span>
        </a>

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

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden bg-gold px-5 py-2.5 font-display text-sm tracking-widest text-bg transition-colors hover:bg-gold-l sm:inline-block"
          >
            GET STARTED
          </a>

          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={reduceMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-12 bg-[rgba(7,7,10,0.98)] backdrop-blur-[20px] md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                {...(motionProps ?? {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 10 },
                  transition: { delay: i * 0.08, duration: 0.4 },
                })}
                className="font-display text-[52px] leading-none tracking-[0.06em] text-bone transition-colors hover:text-gold"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={closeMenu}
              {...(motionProps ?? {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
                transition: { delay: NAV_LINKS.length * 0.08, duration: 0.4 },
              })}
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
