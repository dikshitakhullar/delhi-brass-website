import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Three Generations of Craft Since 1949",
  description: "Founded by K.L. Khullar in 1949. Three generations of master craftsmen. Factory in Gurgaon, showrooms at Khan Market & MG Road, New Delhi. Chandeliers, gates, railings & bespoke metalwork.",
  openGraph: {
    title: "About Delhi Brass — Since 1949",
    description: "Three generations of handcrafted metalwork. Factory in Gurgaon, showrooms in Delhi.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
