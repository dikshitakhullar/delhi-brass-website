"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import gatesData from "@/data/gates.json";

type Gate = (typeof gatesData)[0];

const styles = [
  { name: "All", slug: "all" },
  { name: "Classical", slug: "classical" },
  { name: "Contemporary", slug: "contemporary" },
  { name: "Modern", slug: "modern" },
];

const WA = "919810088181";

export default function GatesPage() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<Gate | null>(null);

  const filtered =
    active === "all"
      ? gatesData
      : gatesData.filter((g) => g.styleSlug === active);

  return (
    <main style={{ background: "#f8f5f0", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ paddingTop: "clamp(100px, 12vw, 140px)", paddingBottom: "clamp(32px, 4vw, 48px)", paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}>
        <motion.h1 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: "#1a1a1a", letterSpacing: "clamp(4px, 0.6vw, 8px)", margin: 0 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Gates
        </motion.h1>
        <motion.p style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#888", letterSpacing: 1, marginTop: 10, maxWidth: 520 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Wrought iron, CNC laser-cut, and wood-steel combinations — every gate custom-designed and manufactured in our Gurgaon factory. Price on request.
        </motion.p>
      </section>

      {/* Style tabs */}
      <div style={{ position: "sticky", top: 64, zIndex: 30, background: "rgba(248,245,240,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(180,160,130,0.12)", padding: "0 clamp(20px, 4vw, 60px)" }}>
        <div style={{ display: "flex", gap: 4, padding: "12px 0" }}>
          {styles.map((s) => (
            <button key={s.slug} onClick={() => setActive(s.slug)} style={{ padding: "8px 20px", fontSize: 10, letterSpacing: 2, whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-tenor-sans), sans-serif", color: active === s.slug ? "#1a1a1a" : "#999", position: "relative", transition: "color 0.2s" }}>
              {s.name.toUpperCase()}
              {active === s.slug && (
                <motion.div layoutId="gateTab" style={{ position: "absolute", bottom: 0, left: 8, right: 8, height: 1.5, background: "#1a1a1a", borderRadius: 1 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div style={{ padding: "20px clamp(20px, 4vw, 60px) 8px", fontSize: 11, letterSpacing: 2, color: "#aaa" }}>
        {filtered.length} {filtered.length === 1 ? "DESIGN" : "DESIGNS"}
      </div>

      {/* Grid */}
      <div style={{ padding: "0 clamp(20px, 4vw, 60px) clamp(60px, 8vw, 100px)", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "clamp(16px, 2vw, 28px)" }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((gate) => (
            <GateCard key={gate.id} gate={gate} onClick={() => setSelected(gate)} />
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <GateModal gate={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </main>
  );
}

/* ===== Gate Card ===== */
function GateCard({ gate, onClick }: { gate: Gate; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45 }}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: 6, overflow: "hidden", background: "#ece6da" }} className="group">
        <Image
          src={gate.image}
          alt={gate.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.5s" }}
          className="group-hover:scale-105"
        />

        {/* Hover bottom bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "rgba(28,25,22,0.85)", backdropFilter: "blur(4px)",
          padding: "10px 16px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          transform: "translateY(100%)", transition: "transform 0.3s ease",
        }} className="group-hover:!translate-y-0">
          <span style={{ fontSize: 10, letterSpacing: 2, color: "#f5f0e8" }}>VIEW DETAILS</span>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi, I'd like to enquire about the ${gate.name} gate.`)}`}
            target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 9, letterSpacing: 2, color: "#1c1916", background: "#dcc99b", padding: "6px 12px", borderRadius: 2, textDecoration: "none" }}
          >
            WHATSAPP
          </a>
        </div>

        {/* Style badge */}
        <div style={{
          position: "absolute", top: 12, left: 12,
          background: "rgba(248,245,240,0.9)", backdropFilter: "blur(4px)",
          padding: "4px 10px", borderRadius: 3,
          fontSize: 9, letterSpacing: 2, color: "#2a2218",
        }}>
          {gate.style.toUpperCase()}
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 15, letterSpacing: 2, color: "#2a2218", fontWeight: 400 }}>{gate.name}</h3>
        <p style={{ fontSize: 11, color: "#aaa", marginTop: 3, fontStyle: "italic" }}>Price on request</p>
      </div>
    </motion.div>
  );
}

/* ===== Gate Modal ===== */
function GateModal({ gate, onClose }: { gate: Gate; onClose: () => void }) {
  return (
    <motion.div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px, 3vw, 32px)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }} onClick={onClose} />

      <motion.div
        style={{ position: "relative", zIndex: 10, background: "#f8f5f0", borderRadius: 12, maxWidth: 900, width: "100%", maxHeight: "90vh", overflowY: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} transition={{ duration: 0.3 }}
      >
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 16, right: 16, zIndex: 20, background: "none", border: "none", fontSize: 20, color: "#888", cursor: "pointer" }}>&#x2715;</button>

        {/* Image */}
        <div style={{ position: "relative", aspectRatio: "4/3", background: "#ece6da", borderRadius: "12px 0 0 12px", minHeight: 350, overflow: "hidden" }}>
          <Image src={gate.image} alt={gate.name} fill style={{ objectFit: "cover" }} />
        </div>

        {/* Info */}
        <div style={{ padding: "clamp(24px, 3vw, 48px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ fontSize: 10, letterSpacing: 3, color: "#8a7e6e", marginBottom: 8, display: "inline-block", background: "rgba(236,230,218,0.6)", padding: "4px 10px", borderRadius: 3, width: "fit-content" }}>
            {gate.style.toUpperCase()}
          </span>
          <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 400, letterSpacing: 4, color: "#2a2218", marginBottom: 16 }}>{gate.name}</h2>
          <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.7, marginBottom: 8 }}>{gate.description}</p>
          <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, marginBottom: 8 }}>
            Every gate is custom-designed and manufactured in-house. We work with wrought iron, stainless steel, brass, wood, and glass — in any combination.
          </p>
          <p style={{ fontSize: 13, color: "#aaa", fontStyle: "italic", marginBottom: 28 }}>Price on request</p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi, I'd like to enquire about the ${gate.name} gate design.`)}`}
              target="_blank" rel="noopener noreferrer"
              style={{ padding: "14px 28px", background: "#1c1916", color: "#f5f0e8", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
            >
              ENQUIRE ON WHATSAPP
            </a>
            <a
              href={`mailto:info@delhibrass.com?subject=Gate Enquiry: ${gate.name}`}
              style={{ padding: "14px 28px", border: "1px solid #2a2218", color: "#2a2218", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
            >
              EMAIL US
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
