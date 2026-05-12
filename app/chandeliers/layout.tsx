import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chandeliers — Handcrafted Brass & Crystal",
  description: "102 handcrafted chandeliers across 15 collections. Heritage Shade, Crystal Garden, Grand Lantern, Statement Pieces & more. Made to order in our Gurgaon factory. Price on request.",
  openGraph: {
    title: "Chandeliers — Delhi Brass",
    description: "102 handcrafted chandeliers. Made to order since 1948.",
    images: [{ url: "/images/mockup/hero-landscape-v2.png" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
