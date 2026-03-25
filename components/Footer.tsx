import Logo from "./Logo";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="px-6 pt-20 pb-8 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-12 pb-16 md:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8 text-bone" />
              <span className="font-display text-xl tracking-wider text-bone">
                VEKTO<span className="text-gold">R</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm font-light leading-relaxed text-muted">
              IT infrastructure and digital transformation for businesses that
              refuse to stand still. Engineered in Dharwad. Delivered worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display text-sm tracking-widest text-bone uppercase">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-body text-sm font-light text-muted transition-colors hover:text-bone"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-display text-sm tracking-widest text-bone uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="font-body text-sm font-light text-muted transition-colors hover:text-bone"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm tracking-widest text-bone uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.contact.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="font-body text-sm font-light text-muted transition-colors hover:text-bone"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <span className="font-body text-xs font-light text-muted">
            &copy; {new Date().getFullYear()} VEKTOR. All rights reserved.
          </span>
          <span className="font-mono text-xs tracking-wide text-gold">
            ◆ Built in Dharwad. Built for the World.
          </span>
        </div>
      </div>
    </footer>
  );
}
