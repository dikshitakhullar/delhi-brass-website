import type { Metadata } from "next";
import { Forum, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-forum",
  display: "swap",
});

const tenorSans = Tenor_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenor-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Delhi Brass — Handcrafted Chandeliers, Gates & Metalwork Since 1948",
    template: "%s | Delhi Brass",
  },
  description:
    "India's premier metalwork atelier since 1948. Bespoke chandeliers, gates, railings & architectural metalwork — handcrafted in our Gurgaon factory. Visit our showrooms in Khan Market & MG Road, New Delhi.",
  keywords: ["chandeliers", "brass chandeliers", "gates", "railings", "metalwork", "Delhi Brass", "luxury lighting", "handcrafted", "bespoke", "New Delhi", "Khan Market", "interior design", "architectural metalwork"],
  openGraph: {
    title: "Delhi Brass — Handcrafted Metalwork Since 1948",
    description: "Bespoke chandeliers, gates, railings & architectural metalwork — handcrafted in our Gurgaon factory since 1948.",
    url: "https://delhibrass.com",
    siteName: "Delhi Brass",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/mockup/hero-landscape-v2.png", width: 1376, height: 768, alt: "Delhi Brass — Grand lobby with chandelier, railing, and wall sconces" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delhi Brass — Handcrafted Metalwork Since 1948",
    description: "Bespoke chandeliers, gates & metalwork — handcrafted since 1948.",
    images: ["/images/mockup/hero-landscape-v2.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://delhibrass.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${forum.variable} ${tenorSans.variable}`}>
      <body className="font-body bg-db-cream text-db-sand antialiased">
        <IntroOverlay />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
