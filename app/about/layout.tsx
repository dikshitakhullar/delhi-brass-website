import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Four Generations of Craft Since 1949",
  description: "Founded by KL Khullar in 1949. Four generations of master craftsmen. Factory in Gurgaon, showrooms at Khan Market & MG Road, New Delhi. Chandeliers, gates, railings & bespoke metalwork.",
  openGraph: {
    title: "About Delhi Brass — Since 1949",
    description: "Four generations of handcrafted metalwork. Factory in Gurgaon, showrooms in Delhi.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
