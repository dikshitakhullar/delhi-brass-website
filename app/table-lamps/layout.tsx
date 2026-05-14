import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table Lamps — Handcrafted Brass & Crystal",
  description: "Handcrafted table lamps in brass, crystal, stone & wood. Each piece made to order in our Gurgaon factory. Price on request.",
  openGraph: {
    title: "Table Lamps — Delhi Brass",
    description: "Handcrafted table lamps. Made to order since 1949.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
