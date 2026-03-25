import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import Cursor from "@/components/Cursor";
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

export const metadata: Metadata = {
  title: "VEKTOR — The Gateway. Evolved.",
  description:
    "AI-powered IT solutions and digital transformation, engineered in Dharwad, Karnataka. Built for the world.",
  openGraph: {
    title: "VEKTOR — The Gateway. Evolved.",
    description:
      "AI-powered IT solutions and digital transformation, engineered in Dharwad, Karnataka. Built for the world.",
    type: "website",
  },
  other: {
    "theme-color": "#07070A",
  },
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
      <body className="font-body antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
