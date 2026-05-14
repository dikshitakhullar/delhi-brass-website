import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore — Gallery",
  description: "Browse our complete collection — chandeliers, table lamps, wall lights, gates, railings, sculptures & custom furniture. All handcrafted since 1949.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
