# VEKTOR

Marketing site for **Vektor Technologies** — an IT infrastructure and digital
transformation company based in Dharwad, Karnataka. A single-page, dark-themed
Next.js site with scroll-driven reveal animations and a Chalukya-inspired
visual motif.

**Live:** https://vektor-rosy.vercel.app

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- Framer Motion (scroll reveals, cursor, counters)
- [AgentMail](https://www.agentmail.to/) (contact form email delivery)

## Project structure

```
app/
  page.tsx              Single-page composition of all sections
  layout.tsx             Root layout, metadata
  api/contact/route.ts   Contact form submission handler (AgentMail)
components/
  Navbar.tsx, Footer.tsx, Cursor.tsx, Logo.tsx, WhatsAppButton.tsx
  RevealOnScroll.tsx      Scroll-triggered reveal wrapper used across sections
  sections/               Hero, Ticker, GatewayStory, Stats, Services,
                          WhyDharwad, Process, ContactForm, CTABand
lib/
  constants.ts            Nav links, stats, services, process steps, footer links
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 (Next.js will use the next available port if 3000
is busy).

## Environment variables

The contact form (`app/api/contact/route.ts`) requires an AgentMail inbox.
Without these set, the API returns a `503` with `"Email service not
configured"` and the rest of the site is unaffected.

Create a `.env.local`:

```bash
AGENTMAIL_API_KEY=your_agentmail_api_key
AGENTMAIL_INBOX_ID=your_agentmail_inbox_id
CONTACT_TO_EMAIL=where-enquiries-should-land@example.com   # optional, has a default
```

## Scripts

| Command         | Description                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack) |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Deployment

Hosted on [Vercel](https://vercel.com), linked to this repository
(`gengirish/vektor`) — every push to `master` deploys to production
automatically.

Environment variables for production must be set separately in the Vercel
project's **Settings → Environment Variables** (not synced from
`.env.local`).

To attach a custom domain, add it under **Settings → Domains** in the Vercel
project and follow the DNS instructions Vercel provides.
