import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gates — Wrought Iron, CNC Laser-Cut & Wood-Steel",
  description: "Custom-designed gates in wrought iron, CNC laser-cut patterns, and wood-steel combinations. Classical, contemporary, and modern styles. Manufactured in-house.",
  openGraph: {
    title: "Gates — Delhi Brass",
    description: "Custom gates in wrought iron, brass, steel & wood. Made to order.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
