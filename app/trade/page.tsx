"use client";

import { useState, useRef } from "react";
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

const benefits = [
  { title: "Trade Pricing", desc: "Preferential pricing on our full range. Volume discounts available for large projects." },
  { title: "Custom Design Collaboration", desc: "Our in-house design team works alongside yours. CAD drawings, 3D renders, and full specification sheets provided." },
  { title: "Factory Visits", desc: "Walk our Gurgaon facility. See the machines, meet the craftsmen, understand the process firsthand." },
  { title: "Dedicated Point of Contact", desc: "A single person who knows your project inside out. Direct line, fast responses." },
  { title: "Priority Access", desc: "First look at new collections before they go public. Early access to limited pieces." },
  { title: "Specification Drawings", desc: "Full technical drawings for architect submissions. Materials, dimensions, finishes — everything specified." },
  { title: "Installation Support", desc: "Our crew handles delivery and installation across India. Turnkey from factory to site." },
];

const workTypes = ["Residential", "Commercial", "Hospitality", "Mixed / Other"];

export default function TradePage() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", city: "", workType: "", project: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzABMX5__V795QhuQG0WKvGmRU_sZJQjxekIg-mcbnX86rmjZzABAvX4fiyLfKxPJgG/exec", {
        method: "POST",
        body: JSON.stringify({ formType: "trade", ...form }),
      });
    } catch (err) {
      console.error("Submit error:", err);
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", background: "#f5f0e6", border: "1px solid rgba(180,160,130,0.2)",
    borderRadius: 6, fontSize: 14, fontFamily: "var(--font-tenor-sans), sans-serif", color: "#2a2218", outline: "none",
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "#f8f5f0", paddingTop: "clamp(100px, 12vw, 140px)", paddingBottom: "clamp(48px, 6vw, 72px)", paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.p style={{ fontSize: 10, letterSpacing: 5, color: "#aaa", marginBottom: 16 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            TRADE PROGRAM
          </motion.p>
          <motion.h1 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: "#1a1a1a", letterSpacing: "clamp(2px, 0.4vw, 5px)", lineHeight: 1.15, margin: 0 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Partner with India&apos;s oldest metalwork atelier.
          </motion.h1>
          <motion.p style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#6a6050", lineHeight: 1.8, maxWidth: 560, marginTop: 24 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            We work alongside architects and interior designers — from first sketch to
            final installation. Trade pricing, dedicated support, and full customisation
            on every piece. 100% manufactured in-house.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: "#1c1916", padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)", color: "#f5f0e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 10, letterSpacing: 5, color: "#dcc99b", marginBottom: 12 }}>WHAT YOU GET</p>
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, letterSpacing: 4, marginBottom: 48 }}>
              Everything you need to specify with confidence.
            </h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.06}>
                <div style={{ borderLeft: "2px solid rgba(220,201,155,0.2)", paddingLeft: 20 }}>
                  <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 18, letterSpacing: 2, fontWeight: 400, marginBottom: 8 }}>{b.title}</h3>
                  <p style={{ fontSize: 13, color: "#8a8070", lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section style={{ background: "#f8f5f0", padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          {submitted ? (
            <FadeIn>
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#1c1916", color: "#dcc99b", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 24 }}>&#10003;</div>
                <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: 28, letterSpacing: 4, fontWeight: 400, color: "#2a2218", marginBottom: 12 }}>Application received.</h2>
                <p style={{ fontSize: 14, color: "#6a6050", marginBottom: 32 }}>We review trade applications within 48 hours. We&apos;ll be in touch shortly.</p>
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi! I just submitted a trade programme application. Looking forward to connecting.")}`} target="_blank" rel="noopener noreferrer" style={{ padding: "14px 32px", background: "#1c1916", color: "#f5f0e8", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}>
                  MESSAGE US ON WHATSAPP
                </a>
              </div>
            </FadeIn>
          ) : (
            <>
              <FadeIn>
                <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, letterSpacing: 4, color: "#2a2218", marginBottom: 8 }}>Apply for trade access.</h2>
                <p style={{ fontSize: 14, color: "#8a7e6e", marginBottom: 36 }}>We review applications within 48 hours.</p>
              </FadeIn>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 11, letterSpacing: 2, color: "#8a7e6e", marginBottom: 6 }}>YOUR NAME *</label>
                  <input type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, letterSpacing: 2, color: "#8a7e6e", marginBottom: 6 }}>COMPANY / STUDIO *</label>
                  <input type="text" required value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="e.g. Studio Lotus, Morphogenesis" style={inputStyle} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 11, letterSpacing: 2, color: "#8a7e6e", marginBottom: 6 }}>PHONE *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 98765 43210" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, letterSpacing: 2, color: "#8a7e6e", marginBottom: 6 }}>CITY</label>
                    <input type="text" value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="New Delhi" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, letterSpacing: 2, color: "#8a7e6e", marginBottom: 6 }}>TYPE OF WORK</label>
                  <select value={form.workType} onChange={(e) => update("workType", e.target.value)} style={{ ...inputStyle, appearance: "auto" }}>
                    <option value="">Select</option>
                    {workTypes.map((w) => <option key={w} value={w}>{w}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, letterSpacing: 2, color: "#8a7e6e", marginBottom: 6 }}>ABOUT YOUR CURRENT PROJECT</label>
                  <textarea value={form.project} onChange={(e) => update("project", e.target.value)} rows={4} placeholder="Brief description — scope, timeline, materials of interest..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button type="submit" disabled={submitting} style={{ padding: "16px", background: submitting ? "#8a7e6e" : "#1c1916", color: "#f5f0e8", border: "none", borderRadius: 4, fontSize: 11, letterSpacing: 3, cursor: submitting ? "wait" : "pointer", fontFamily: "var(--font-tenor-sans), sans-serif", transition: "background 0.2s" }}>
                  {submitting ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                </button>
                <p style={{ textAlign: "center", fontSize: 12, color: "#aaa" }}>
                  Or <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi! I'm an architect/designer interested in your trade programme.")}`} target="_blank" rel="noopener noreferrer" style={{ color: "#2a2218", textDecoration: "underline" }}>WhatsApp us directly</a>
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
