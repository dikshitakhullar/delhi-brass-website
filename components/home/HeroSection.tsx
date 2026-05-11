"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  // phase mirrors the intro overlay timing:
  // 0 = intro visible / page not yet revealed
  // 1 = intro sliding up, image clips open
  // 2 = image fully open, text animates in, dim fades out
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("db-intro-seen");
    if (seen) {
      setPhase(2);
      return;
    }

    const timers = [
      setTimeout(() => setPhase(1), 1400),
      setTimeout(() => {
        setPhase(2);
        sessionStorage.setItem("db-intro-seen", "1");
      }, 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const skip = phase === 2 && !!sessionStorage.getItem("db-intro-seen");

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#f8f5f0",
        display: "flex",
        flexDirection: "column",
        paddingTop: "clamp(70px, 8vw, 80px)",
      }}
    >
      {/* Top: headline + CTAs on cream */}
      <motion.div
        style={{
          padding:
            "clamp(20px, 3vw, 40px) clamp(20px, 4vw, 60px) clamp(16px, 2vw, 28px)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ maxWidth: 620 }}>
          <h1
            style={{
              fontFamily: "var(--font-forum), serif",
              fontSize: "clamp(26px, 3.5vw, 48px)",
              fontWeight: 400,
              color: "#1a1a1a",
              letterSpacing: "clamp(2px, 0.4vw, 5px)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Handcrafted metalwork.
          </h1>
          <p
            style={{
              fontSize: "clamp(12px, 1vw, 14px)",
              color: "#888",
              letterSpacing: 1,
              marginTop: "clamp(6px, 0.8vw, 10px)",
              maxWidth: 460,
              fontFamily: "var(--font-tenor-sans), sans-serif",
            }}
          >
            Bespoke chandeliers, gates, railings &amp; wall lights — designed
            and manufactured in-house since 1948.
          </p>
        </div>

        <motion.div
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a
            href="/chandeliers"
            style={{
              padding: "14px 32px",
              background: "#1c1916",
              color: "#f5f0e8",
              fontSize: 10,
              letterSpacing: 3,
              cursor: "pointer",
              borderRadius: 2,
              textDecoration: "none",
              fontFamily: "var(--font-tenor-sans), sans-serif",
            }}
          >
            EXPLORE NOW
          </a>
          <a
            href="https://wa.me/919810088181"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 32px",
              border: "1px solid #1c1916",
              color: "#1c1916",
              fontSize: 10,
              letterSpacing: 3,
              cursor: "pointer",
              borderRadius: 2,
              textDecoration: "none",
              fontFamily: "var(--font-tenor-sans), sans-serif",
            }}
          >
            WHATSAPP US
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom: hero image — clips open from center + dim-to-bright */}
      <motion.div
        style={{
          position: "relative",
          margin: "0 clamp(16px, 4vw, 60px) clamp(16px, 2vw, 24px)",
          borderRadius: 4,
          overflow: "hidden",
          flex: "1 1 0",
          minHeight: "clamp(280px, 55vh, 65vh)",
        }}
        initial={{ clipPath: "inset(40% 10% 40% 10%)" }}
        animate={
          phase >= 1
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(40% 10% 40% 10%)" }
        }
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      >
        <Image
          src="/images/mockup/hero-landscape-v2.png"
          alt="Grand lobby with crystal chandelier, wrought iron railing, and wall sconces"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Dim overlay — fades out to simulate lights turning on */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "rgba(0,0,0,0.45)",
          }}
          initial={{ opacity: 1 }}
          animate={phase >= 2 ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
}
