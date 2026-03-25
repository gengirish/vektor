"use client";

import { useState, type FormEvent } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setForm({ status: "submitting", message: "" });

    const data = new FormData(e.currentTarget);
    data.set("access_key", ACCESS_KEY);
    data.set("subject", "New Enquiry from VEKTOR Website");
    data.set("from_name", "VEKTOR Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setForm({
          status: "success",
          message: "Thank you! We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch {
      setForm({
        status: "error",
        message: "Something went wrong. Please email us directly at hello@vektor.in",
      });
    }
  }

  return (
    <section id="contact" className="px-6 py-[140px] md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            <RevealOnScroll>
              <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                Get In Touch
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2
                className="font-display leading-[0.95]"
                style={{ fontSize: "clamp(48px, 5.5vw, 80px)" }}
              >
                Let&apos;s Build
                <br />
                <span className="text-gold">Together.</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="max-w-md font-body text-base font-light leading-relaxed text-muted">
                Whether you&apos;re looking to modernize your infrastructure,
                integrate AI, or secure your digital assets — we&apos;d love to
                hear from you. Fill out the form and our team will respond within
                24 hours.
              </p>
            </RevealOnScroll>

            {/* Contact details */}
            <RevealOnScroll delay={0.3}>
              <div className="flex flex-col gap-5 pt-4">
                <a
                  href="mailto:hello@vektor.in"
                  className="group flex items-center gap-4 text-bone transition-colors hover:text-gold"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-gold">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-light text-muted">Email</p>
                    <p className="font-body text-sm">hello@vektor.in</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/9185559960837"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-bone transition-colors hover:text-gold"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-gold">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-light text-muted">WhatsApp</p>
                    <p className="font-body text-sm">+91 85559 96083 7</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-bone">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-light text-muted">Location</p>
                    <p className="font-body text-sm">Dharwad, Karnataka 580001</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — form */}
          <RevealOnScroll delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 border border-border bg-bg2 p-8 md:p-10"
            >
              {/* Hidden honeypot for spam */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border border-border bg-bg px-4 py-3 font-body text-sm text-bone placeholder:text-muted/50 outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="border border-border bg-bg px-4 py-3 font-body text-sm text-bone placeholder:text-muted/50 outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="border border-border bg-bg px-4 py-3 font-body text-sm text-bone placeholder:text-muted/50 outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="border border-border bg-bg px-4 py-3 font-body text-sm text-bone placeholder:text-muted/50 outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
                  Service Interested In
                </label>
                <select
                  name="service"
                  className="border border-border bg-bg px-4 py-3 font-body text-sm text-bone outline-none transition-colors focus:border-gold"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  <option value="AI Integration">AI Integration</option>
                  <option value="Cloud Architecture">Cloud Architecture</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                  <option value="IT Infrastructure">IT Infrastructure</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project or challenge..."
                  className="resize-none border border-border bg-bg px-4 py-3 font-body text-sm text-bone placeholder:text-muted/50 outline-none transition-colors focus:border-gold"
                />
              </div>

              <button
                type="submit"
                disabled={form.status === "submitting"}
                className="mt-2 flex items-center justify-center gap-3 bg-gold px-8 py-4 font-display text-sm tracking-widest text-bg transition-colors hover:bg-gold-l disabled:opacity-60"
              >
                {form.status === "submitting" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    SENDING...
                  </>
                ) : (
                  "SEND ENQUIRY"
                )}
              </button>

              {/* Status message */}
              {form.status === "success" && (
                <div className="flex items-center gap-3 border border-gold/30 bg-gold/5 px-5 py-3">
                  <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-body text-sm text-gold">{form.message}</p>
                </div>
              )}

              {form.status === "error" && (
                <div className="flex items-center gap-3 border border-red-500/30 bg-red-500/5 px-5 py-3">
                  <svg className="h-5 w-5 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <p className="font-body text-sm text-red-400">{form.message}</p>
                </div>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
