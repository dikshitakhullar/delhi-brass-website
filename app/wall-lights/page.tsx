"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import lightsData from "@/data/wall-lights.json";

type Light = (typeof lightsData)[0];

const WA = "919810088181";

export default function WallLightsPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const selectedLight = selectedIdx !== null ? lightsData[selectedIdx] : null;

  const goNext = useCallback(() => {
    if (selectedIdx !== null && selectedIdx < lightsData.length - 1) setSelectedIdx(selectedIdx + 1);
  }, [selectedIdx]);

  const goPrev = useCallback(() => {
    if (selectedIdx !== null && selectedIdx > 0) setSelectedIdx(selectedIdx - 1);
  }, [selectedIdx]);

  return (
    <main style={{ background: "#f8f5f0", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ paddingTop: "clamp(100px, 12vw, 140px)", paddingBottom: "clamp(32px, 4vw, 48px)", paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}>
        <motion.h1 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: "#1a1a1a", letterSpacing: "clamp(4px, 0.6vw, 8px)", margin: 0 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Wall Lights
        </motion.h1>
        <motion.p style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#888", letterSpacing: 1, marginTop: 10, maxWidth: 480 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Handcrafted wall sconces, picture lights &amp; lanterns in brass, iron, crystal &amp; glass — each piece made to order. Price on request.
        </motion.p>
      </section>

      {/* Count */}
      <div style={{ padding: "8px clamp(20px, 4vw, 60px) 8px", fontSize: 11, letterSpacing: 2, color: "#aaa" }}>
        {lightsData.length} {lightsData.length === 1 ? "PIECE" : "PIECES"}
      </div>

      {/* Grid */}
      <div style={{ padding: "0 clamp(20px, 4vw, 60px) clamp(60px, 8vw, 100px)", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "clamp(16px, 2vw, 28px)" }}>
        <AnimatePresence mode="popLayout">
          {lightsData.map((light, i) => (
            <LightCard key={light.id} light={light} onClick={() => setSelectedIdx(i)} />
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedLight && selectedIdx !== null && (
          <LightModal
            light={selectedLight}
            onClose={() => setSelectedIdx(null)}
            onNext={selectedIdx < lightsData.length - 1 ? goNext : undefined}
            onPrev={selectedIdx > 0 ? goPrev : undefined}
            current={selectedIdx + 1}
            total={lightsData.length}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

/* ===== LIGHT CARD ===== */
function LightCard({ light, onClick }: { light: Light; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);
  const hasSecond = light.images.length > 1;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45 }}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 6, overflow: "hidden", background: "#ece6da" }}>
        <Image src={light.images[0]} alt={light.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "contain", padding: 16, transition: "opacity 0.5s ease", opacity: hovered && hasSecond ? 0 : 1 }} />
        {hasSecond && (
          <Image src={light.images[1]} alt={`${light.name} in room`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover", transition: "opacity 0.5s ease", opacity: hovered ? 1 : 0 }} />
        )}

        {/* Bottom bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "rgba(28,25,22,0.85)", backdropFilter: "blur(4px)",
          padding: "10px 16px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease",
        }}>
          <span style={{ fontSize: 10, letterSpacing: 2, color: "#f5f0e8" }}>QUICK VIEW</span>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi! I'm interested in the ${light.name} wall light. Could you share more details?`)}`}
            target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 9, letterSpacing: 2, color: "#1c1916", background: "#dcc99b", padding: "6px 12px", borderRadius: 2, textDecoration: "none" }}
          >
            ENQUIRE
          </a>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 15, letterSpacing: 2, color: "#2a2218", fontWeight: 400 }}>{light.name}</h3>
        <p style={{ fontSize: 11, color: "#aaa", marginTop: 2, fontStyle: "italic" }}>Price on request</p>
      </div>
    </motion.div>
  );
}

/* ===== LIGHT MODAL ===== */
function LightModal({ light, onClose, onNext, onPrev, current, total }: {
  light: Light; onClose: () => void;
  onNext?: () => void; onPrev?: () => void;
  current: number; total: number;
}) {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => { setImgIdx(0); }, [light.id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        if (imgIdx < light.images.length - 1) setImgIdx(imgIdx + 1);
        else if (onNext) onNext();
      }
      if (e.key === "ArrowLeft") {
        if (imgIdx > 0) setImgIdx(imgIdx - 1);
        else if (onPrev) onPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [imgIdx, light.images.length, onClose, onNext, onPrev]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const arrowBtn: React.CSSProperties = {
    width: 36, height: 36, borderRadius: "50%",
    background: "#f8f5f0", border: "1px solid rgba(180,160,130,0.2)",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", fontSize: 16, color: "#2a2218", zIndex: 20,
  };

  return (
    <motion.div
      style={{ position: "fixed", inset: 0, zIndex: 60, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 80 }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,8,6,0.65)" }} onClick={onClose} />

      <div style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", gap: 12, maxWidth: 920, width: "100%", padding: "0 clamp(12px, 2vw, 20px)" }}>
        {onPrev && (
          <button onClick={onPrev} className="hidden-mobile" style={{ ...arrowBtn, flexShrink: 0 }} aria-label="Previous light">&#8249;</button>
        )}

        <motion.div
          style={{
            flex: 1, background: "#f8f5f0", borderRadius: 8,
            maxHeight: "calc(100vh - 100px)", overflowY: "auto",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            boxShadow: "0 16px 60px rgba(0,0,0,0.25)",
          }}
          initial={{ y: 24 }} animate={{ y: 0 }} exit={{ y: 24 }}
          transition={{ duration: 0.2 }}
        >
          <div style={{ position: "absolute", top: 12, right: 12, zIndex: 20, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, letterSpacing: 1, color: "#999" }}>{current}/{total}</span>
            <button onClick={onClose} aria-label="Close" style={{ ...arrowBtn, width: 28, height: 28, fontSize: 12 }}>&#x2715;</button>
          </div>

          {/* Left: Image + thumbnails */}
          <div style={{ padding: "clamp(16px, 2vw, 24px)", position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 8, overflow: "hidden", background: "#ece6da" }}>
              <AnimatePresence mode="wait">
                <motion.div key={`${light.id}-${imgIdx}`} style={{ position: "absolute", inset: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Image src={light.images[imgIdx]} alt={light.name} fill style={{ objectFit: imgIdx === 0 ? "contain" : "cover", padding: imgIdx === 0 ? 20 : 0 }} />
                </motion.div>
              </AnimatePresence>

              {imgIdx > 0 && (
                <button onClick={() => setImgIdx(imgIdx - 1)} style={{ ...arrowBtn, position: "absolute" as const, top: "50%", transform: "translateY(-50%)", left: 8, width: 32, height: 32, fontSize: 14 }} aria-label="Previous image">&#8249;</button>
              )}
              {imgIdx < light.images.length - 1 && (
                <button onClick={() => setImgIdx(imgIdx + 1)} style={{ ...arrowBtn, position: "absolute" as const, top: "50%", transform: "translateY(-50%)", right: 8, width: 32, height: 32, fontSize: 14 }} aria-label="Next image">&#8250;</button>
              )}

              {light.images.length > 1 && (
                <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", background: "rgba(248,245,240,0.85)", borderRadius: 4, padding: "3px 10px", fontSize: 8, letterSpacing: 2, color: "#2a2218" }}>
                  {imgIdx + 1}/{light.images.length}
                </div>
              )}
            </div>

            {light.images.length > 1 && (
              <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                {light.images.map((src, i) => (
                  <button key={src} onClick={() => setImgIdx(i)} style={{
                    flex: 1, aspectRatio: "1", borderRadius: 4, overflow: "hidden",
                    position: "relative", border: imgIdx === i ? "2px solid #2a2218" : "2px solid transparent",
                    cursor: "pointer", background: "#ece6da", transition: "border-color 0.2s", padding: 0,
                  }}>
                    <Image src={src} alt={`View ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="60px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div style={{ padding: "clamp(24px, 3vw, 40px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 10, letterSpacing: 3, color: "#8a7e6e", marginBottom: 8 }}>WALL LIGHT</p>
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(22px, 2.2vw, 32px)", fontWeight: 400, letterSpacing: 3, color: "#2a2218", marginBottom: 14 }}>{light.name}</h2>
            <p style={{ fontSize: 13, color: "#6a6050", lineHeight: 1.7, marginBottom: 6 }}>
              {light.description || "Handcrafted wall light from our collection. Made to order — custom sizes, finishes, and configurations available."}
            </p>
            <p style={{ fontSize: 12, color: "#aaa", fontStyle: "italic", marginBottom: 24 }}>Price on request</p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi! I'm interested in the ${light.name} wall light. Could you tell me about pricing, sizes, and customisation options?`)}`}
                target="_blank" rel="noopener noreferrer"
                style={{ padding: "12px 24px", background: "#1c1916", color: "#f5f0e8", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
              >
                ENQUIRE NOW
              </a>
              <a
                href="/about#showrooms"
                style={{ padding: "12px 24px", border: "1px solid rgba(42,34,24,0.2)", color: "#2a2218", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
              >
                VISIT US
              </a>
            </div>
          </div>
        </motion.div>

        {onNext && (
          <button onClick={onNext} className="hidden-mobile" style={{ ...arrowBtn, flexShrink: 0 }} aria-label="Next light">&#8250;</button>
        )}
      </div>
    </motion.div>
  );
}
