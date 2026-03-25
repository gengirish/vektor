export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Clients Transformed" },
  { value: 12, suffix: "+", label: "Years of Engineering Excellence" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
  { value: 750, suffix: "m", label: "Above Sea Level — Elevated Thinking" },
] as const;

export const SERVICES = [
  {
    num: "01",
    title: "AI Integration",
    description:
      "Machine learning pipelines, intelligent automation, and predictive analytics woven into your existing infrastructure.",
    icon: "ai",
  },
  {
    num: "02",
    title: "Cloud Architecture",
    description:
      "Scalable, resilient cloud-native systems designed for performance at any altitude.",
    icon: "cloud",
  },
  {
    num: "03",
    title: "Cybersecurity",
    description:
      "Zero-trust frameworks, threat intelligence, and continuous security posture management.",
    icon: "security",
  },
  {
    num: "04",
    title: "Digital Transformation",
    description:
      "End-to-end modernization of legacy systems into agile, data-driven digital ecosystems.",
    icon: "transform",
  },
  {
    num: "05",
    title: "IT Infrastructure",
    description:
      "Enterprise networking, hybrid environments, and infrastructure-as-code at scale.",
    icon: "infra",
  },
  {
    num: "06",
    title: "IT Consulting",
    description:
      "Strategic technology advisory that aligns IT roadmaps with business objectives.",
    icon: "consulting",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: 1,
    title: "Discover",
    description:
      "Deep-dive into your technology landscape, business goals, and untapped opportunities.",
  },
  {
    num: 2,
    title: "Architect",
    description:
      "Design scalable, future-proof solutions with precise engineering blueprints.",
  },
  {
    num: 3,
    title: "Execute",
    description:
      "Agile implementation with transparent milestones, rigorous testing, and zero surprises.",
  },
  {
    num: 4,
    title: "Elevate",
    description:
      "Continuous optimization, monitoring, and innovation to keep you ahead of the curve.",
  },
] as const;

export const TICKER_ITEMS = [
  "AI-Powered Solutions",
  "Cloud Infrastructure",
  "Dharwad",
  "Karnataka",
  "Cybersecurity",
  "Digital Transformation",
  "IT Consulting",
  "Smart City Tech",
  "Gateway to the Future",
  "Vidya Kashi",
] as const;

export const FOOTER_LINKS = {
  services: [
    "AI Integration",
    "Cloud Architecture",
    "Cybersecurity",
    "Digital Transformation",
    "IT Infrastructure",
    "IT Consulting",
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  contact: [
    { label: "hello@vektor.in", href: "mailto:hello@vektor.in" },
    { label: "Dharwad, Karnataka", href: "https://maps.app.goo.gl/dharwad" },
    { label: "India 580001", href: "https://maps.app.goo.gl/dharwad" },
  ],
} as const;
