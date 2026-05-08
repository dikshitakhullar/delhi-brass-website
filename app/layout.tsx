import type { Metadata } from "next";
import { Forum, Tenor_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Delhi Brass — Masters of Metalwork Since 1947",
  description:
    "Heritage luxury atelier specializing in bespoke chandeliers, gates, railings & architectural metalwork. Forged with seven decades of craft.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${forum.variable} ${tenorSans.variable}`}>
      <body className="font-body bg-db-black text-db-ivory antialiased">
        {children}
      </body>
    </html>
  );
}
