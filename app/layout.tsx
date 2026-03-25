import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import Cursor from "@/components/Cursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const siteUrl = "https://vektor-nu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VEKTOR — The Gateway. Evolved.",
  description:
    "AI-powered IT solutions and digital transformation, engineered in Dharwad, Karnataka. Built for the world.",
  keywords: [
    "IT consulting",
    "AI integration",
    "cloud architecture",
    "cybersecurity",
    "digital transformation",
    "Dharwad",
    "Karnataka",
    "India",
    "VEKTOR",
  ],
  authors: [{ name: "VEKTOR", url: siteUrl }],
  openGraph: {
    title: "VEKTOR — The Gateway. Evolved.",
    description:
      "AI-powered IT solutions and digital transformation, engineered in Dharwad, Karnataka. Built for the world.",
    url: siteUrl,
    siteName: "VEKTOR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEKTOR — The Gateway. Evolved.",
    description:
      "AI-powered IT solutions and digital transformation, engineered in Dharwad, Karnataka.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#07070A",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VEKTOR",
  alternateName: "VEKTOR IT Services",
  url: siteUrl,
  description:
    "AI-powered IT solutions and digital transformation, engineered in Dharwad, Karnataka.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dharwad",
    addressRegion: "Karnataka",
    postalCode: "580001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@vektor.in",
    telephone: "+918555960837",
    contactType: "sales",
    availableLanguage: ["English", "Hindi", "Kannada"],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Cursor />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
