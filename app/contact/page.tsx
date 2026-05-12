"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WA = "919810088181";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

const locations = [
  {
    name: "KHAN MARKET",
    lines: ["Shop No. 46, Loknayak Bhawan", "Khan Market, New Delhi — 110003"],
    phone: "+91-11-4350 4242",
    phoneTel: "+911143504242",
    note: "Walk in anytime",
  },
  {
    name: "MG ROAD",
    lines: ["Plot No. 47 & 49", "MG Road, New Delhi — 110030"],
    phone: "+91 98100 88181",
    phoneTel: "+919810088181",
    note: "Two showrooms, side by side",
  },
  {
    name: "FACTORY",
    lines: ["4651/279, Daulatabad Road", "Gurgaon (Nr Railway Station), Haryana"],
    phone: "+91-124-246 9788",
    phoneTel: "+911242469788",
    note: "By appointment",
  },
];

export default function ContactPage() {
  return (
    <main style={{ background: "#f8f5f0", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ paddingTop: "clamp(100px, 12vw, 140px)", paddingBottom: "clamp(40px, 5vw, 60px)", paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.h1 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: "#1a1a1a", letterSpacing: "clamp(3px, 0.5vw, 6px)", margin: 0 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            Get in touch.
          </motion.h1>
          <motion.p style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#6a6050", lineHeight: 1.8, marginTop: 16, maxWidth: 480 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Walk into a showroom, call us, or message on WhatsApp. We&apos;re happy to help.
          </motion.p>
        </div>
      </section>

      {/* Locations */}
      <section style={{ padding: "0 clamp(20px, 4vw, 60px) clamp(48px, 6vw, 72px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {locations.map((loc, i) => (
            <FadeIn key={loc.name} delay={i * 0.08}>
              <div style={{ background: "#ece6da", borderRadius: 12, padding: "clamp(28px, 3vw, 40px)", border: "1px solid rgba(180,160,130,0.15)", height: "100%" }}>
                <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 4, fontWeight: 400, color: "#2a2218", marginBottom: 16 }}>{loc.name}</h3>
                {loc.lines.map((l) => (
                  <p key={l} style={{ fontSize: 13, color: "#6a6050", lineHeight: 1.6 }}>{l}</p>
                ))}
                <p style={{ fontSize: 13, color: "#2a2218", marginTop: 12 }}>
                  <a href={`tel:${loc.phoneTel}`} style={{ color: "inherit", textDecoration: "none" }}>{loc.phone}</a>
                </p>
                <p style={{ fontSize: 11, color: "#8a7e6e", marginTop: 4, fontStyle: "italic" }}>{loc.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section style={{ padding: "clamp(48px, 6vw, 80px) clamp(20px, 4vw, 60px)" }}>
        <FadeIn>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi! I'd like to know more about your products and services.")}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", padding: "16px 40px", background: "#1c1916", color: "#f5f0e8", fontSize: 11, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
            >
              WHATSAPP US
            </a>

            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
              <p style={{ fontSize: 13, color: "#6a6050" }}>
                <a href="tel:+919810088181" style={{ color: "inherit" }}>+91 98100 88181</a>
                {" · "}
                <a href="tel:+919810005225" style={{ color: "inherit" }}>+91 98100 05225</a>
                {" · "}
                <a href="tel:+919871088181" style={{ color: "inherit" }}>+91 98710 88181</a>
              </p>
              <p style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2a2218" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <a href="https://instagram.com/delhibrass" target="_blank" rel="noopener noreferrer" style={{ color: "#2a2218", textDecoration: "none" }}>
                  @delhibrass
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
