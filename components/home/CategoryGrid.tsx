"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function CategoryGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#fcfaf6", padding: "clamp(60px,10vw,140px) clamp(20px,4vw,60px)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,80px)" }}>
          <p style={{ fontSize: 10, letterSpacing: 5, color: "#aaa", marginBottom: 12 }}>WHAT WE MAKE</p>
          <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(24px,2.5vw,32px)", letterSpacing: "clamp(3px,0.5vw,6px)", fontWeight: 400, color: "#1a1a1a" }}>
            Four disciplines, one craft.
          </h2>
          <p style={{ fontSize: 13, color: "#888", maxWidth: 440, margin: "12px auto 0" }}>
            Every piece made to order in our Gurgaon factory. Brass, steel, glass, wood — we work with all of them.
          </p>
        </div>

        {/* Asymmetric grid — 2fr 1fr 1fr on desktop, stacked on mobile */}
        <div
          ref={ref}
          className="category-grid-layout"
          style={{ display: "grid", gap: 16 }}
        >
          {/* LIGHTING — tall left */}
          <Link href="/chandeliers" style={{ textDecoration: "none", gridArea: "lighting" }}>
            <motion.div custom={0} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
              style={{ borderRadius: 4, overflow: "hidden", cursor: "pointer", position: "relative", height: "100%", minHeight: 300 }}
            >
              <Image src="/images/mockup/brass-petals.png" alt="Brass Petal pendants" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)" }} />
              <div style={{ position: "absolute", bottom: 28, left: 28, zIndex: 2 }}>
                <span style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(16px,1.5vw,20px)", letterSpacing: 4, color: "#fff" }}>LIGHTING</span>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>Chandeliers, pendants &amp; wall lights</p>
              </div>
            </motion.div>
          </Link>

          {/* GATES */}
          <Link href="/gates" style={{ textDecoration: "none", gridArea: "gates" }}>
            <motion.div custom={1} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
              style={{ borderRadius: 4, overflow: "hidden", cursor: "pointer", position: "relative", height: "100%", minHeight: 200 }}
            >
              <Image src="/images/mockup/gate-modern.png" alt="Modern gate" fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, zIndex: 2 }}>
                <span style={{ fontFamily: "var(--font-forum), serif", fontSize: 16, letterSpacing: 4, color: "#fff" }}>GATES</span>
              </div>
            </motion.div>
          </Link>

          {/* RAILINGS — coming soon */}
          <div style={{ gridArea: "railings" }}>
            <motion.div custom={2} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
              style={{ borderRadius: 4, overflow: "hidden", cursor: "pointer", position: "relative", height: "100%", minHeight: 200 }}
            >
              <Image src="/images/mockup/railing-brass.jpg" alt="Wrought iron railing" fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, zIndex: 2 }}>
                <span style={{ fontFamily: "var(--font-forum), serif", fontSize: 16, letterSpacing: 4, color: "#fff" }}>RAILINGS</span>
              </div>
            </motion.div>
          </div>

          {/* BESPOKE */}
          <a href="https://wa.me/919810088181?text=Hi, I'd like to discuss a bespoke metalwork project." target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", gridArea: "bespoke" }}>
            <motion.div custom={3} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
              style={{ borderRadius: 4, overflow: "hidden", cursor: "pointer", position: "relative", height: "100%", minHeight: 200 }}
            >
              <Image src="/images/mockup/brass-bough.png" alt="Bespoke metalwork" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center 40%" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24, zIndex: 2 }}>
                <span style={{ fontFamily: "var(--font-forum), serif", fontSize: 16, letterSpacing: 4, color: "#fff" }}>BESPOKE</span>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Custom designs, any material, any scale</p>
              </div>
            </motion.div>
          </a>
        </div>
      </div>

      {/* Grid layout CSS */}
      <style>{`
        .category-grid-layout {
          grid-template-columns: 1fr;
          grid-template-areas:
            "lighting"
            "gates"
            "railings"
            "bespoke";
        }
        @media (min-width: 768px) {
          .category-grid-layout {
            grid-template-columns: 2fr 1fr 1fr;
            grid-template-rows: 300px 300px;
            grid-template-areas:
              "lighting gates railings"
              "lighting bespoke bespoke";
          }
        }
      `}</style>
    </section>
  );
}
