"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import chandeliersData from "@/data/chandeliers.json";

type Product = (typeof chandeliersData)[0];

const collections = [
  { name: "All", slug: "all" },
  { name: "Signature Collection", slug: "signature" },
  { name: "Heritage Shade", slug: "heritage-shade" },
  { name: "Statement Pieces", slug: "statement" },
  { name: "Crystal Garden", slug: "crystal-garden" },
  { name: "Crystal Collection", slug: "crystal-collection" },
  { name: "Grand Lantern", slug: "grand-lantern" },
  { name: "Linear", slug: "linear" },
  { name: "Brass Pendants", slug: "brass-pendants" },
  { name: "Brass Medallion", slug: "brass-medallion" },
  { name: "Noir Crystal", slug: "noir-crystal" },
  { name: "Crystal Fringe", slug: "crystal-fringe" },
  { name: "Distressed Scroll", slug: "distressed-scroll" },
  { name: "Iron Brass", slug: "iron-brass" },
  { name: "Farmhouse Bead", slug: "farmhouse-bead" },
];

const WA = "919810088181";

export default function ChandeliersPage() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered =
    active === "all"
      ? chandeliersData
      : chandeliersData.filter((p) => p.collectionSlug === active);

  return (
    <main style={{ background: "#f8f5f0", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ paddingTop: "clamp(100px, 12vw, 140px)", paddingBottom: "clamp(32px, 4vw, 48px)", paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}>
        <motion.h1 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: "#1a1a1a", letterSpacing: "clamp(4px, 0.6vw, 8px)", margin: 0 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Chandeliers
        </motion.h1>
        <motion.p style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#888", letterSpacing: 1, marginTop: 10, maxWidth: 480 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Handcrafted statement lighting — each piece made to order in our Gurgaon factory. Price on request.
        </motion.p>
      </section>

      {/* Tabs */}
      <div style={{ position: "sticky", top: 64, zIndex: 30, background: "rgba(248,245,240,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(180,160,130,0.12)", padding: "0 clamp(20px, 4vw, 60px)", overflowX: "auto" }} className="scrollbar-hide">
        <div style={{ display: "flex", gap: 4, padding: "12px 0", minWidth: "max-content" }}>
          {collections.map((col) => (
            <button key={col.slug} onClick={() => setActive(col.slug)} style={{ padding: "8px 16px", fontSize: 10, letterSpacing: 2, whiteSpace: "nowrap", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-tenor-sans), sans-serif", color: active === col.slug ? "#1a1a1a" : "#999", position: "relative", transition: "color 0.2s" }}>
              {col.name.toUpperCase()}
              {active === col.slug && (
                <motion.div layoutId="tab" style={{ position: "absolute", bottom: 0, left: 8, right: 8, height: 1.5, background: "#1a1a1a", borderRadius: 1 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div style={{ padding: "20px clamp(20px, 4vw, 60px) 8px", fontSize: 11, letterSpacing: 2, color: "#aaa" }}>
        {filtered.length} {filtered.length === 1 ? "PIECE" : "PIECES"}
      </div>

      {/* Grid */}
      <div style={{ padding: "0 clamp(20px, 4vw, 60px) clamp(60px, 8vw, 100px)", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "clamp(16px, 2vw, 28px)" }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => setSelected(p)} />
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </main>
  );
}

/* ===== PRODUCT CARD — image swap on hover ===== */
function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

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
        {/* Studio image (default) */}
        <Image
          src={product.images.studio}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "contain", padding: 16, transition: "opacity 0.5s ease" , opacity: hovered ? 0 : 1 }}
        />
        {/* Lifestyle image (on hover) */}
        <Image
          src={product.images.lifestyle}
          alt={`${product.name} in room`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", transition: "opacity 0.5s ease", opacity: hovered ? 1 : 0 }}
        />

        {/* Bottom bar on hover */}
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
            href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi, I'd like to enquire about the ${product.name} (${product.collection}).`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 9, letterSpacing: 2, color: "#fff", background: "#25D366", padding: "6px 12px", borderRadius: 2, textDecoration: "none" }}
          >
            WHATSAPP
          </a>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 15, letterSpacing: 2, color: "#2a2218", fontWeight: 400 }}>{product.name}</h3>
        <p style={{ fontSize: 11, color: "#8a7e6e", marginTop: 3 }}>{product.collection}</p>
        <p style={{ fontSize: 11, color: "#aaa", marginTop: 2, fontStyle: "italic" }}>Price on request</p>
      </div>
    </motion.div>
  );
}

/* ===== PRODUCT MODAL — thumbnail carousel ===== */
function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const imageEntries = [
    { key: "studio", label: "Studio", src: product.images.studio, fit: "contain" as const },
    { key: "lifestyle", label: "Lifestyle", src: product.images.lifestyle, fit: "cover" as const },
    { key: "daylight", label: "Daylight", src: product.images.daylight, fit: "cover" as const },
    { key: "hero", label: "Hero", src: product.images.hero, fit: "cover" as const },
    { key: "detail", label: "Detail", src: product.images.detail, fit: "cover" as const },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const active = imageEntries[activeIdx];

  return (
    <motion.div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px, 3vw, 32px)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }} onClick={onClose} />

      <motion.div
        style={{ position: "relative", zIndex: 10, background: "#f8f5f0", borderRadius: 12, maxWidth: 960, width: "100%", maxHeight: "90vh", overflowY: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close */}
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 16, right: 16, zIndex: 20, background: "none", border: "none", fontSize: 20, color: "#888", cursor: "pointer" }}>&#x2715;</button>

        {/* Left: Image + thumbnails */}
        <div style={{ padding: "clamp(16px, 2vw, 24px)" }}>
          {/* Main image */}
          <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 8, overflow: "hidden", background: active.fit === "contain" ? "#ece6da" : "#1c1916" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                style={{ position: "absolute", inset: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src={active.src}
                  alt={`${product.name} — ${active.label}`}
                  fill
                  style={{ objectFit: active.fit, padding: active.fit === "contain" ? 20 : 0 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            {imageEntries.map((img, i) => (
              <button
                key={img.key}
                onClick={() => setActiveIdx(i)}
                style={{
                  flex: 1, aspectRatio: "1", borderRadius: 4, overflow: "hidden",
                  position: "relative", border: activeIdx === i ? "2px solid #2a2218" : "2px solid transparent",
                  cursor: "pointer", background: "#ece6da", transition: "border-color 0.2s",
                }}
              >
                <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} sizes="80px" />
                <span style={{
                  position: "absolute", bottom: 2, left: 0, right: 0, textAlign: "center",
                  fontSize: 7, letterSpacing: 1, color: activeIdx === i ? "#2a2218" : "#999",
                  background: "rgba(248,245,240,0.8)", padding: "2px 0",
                }}>
                  {img.label.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div style={{ padding: "clamp(24px, 3vw, 48px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 10, letterSpacing: 3, color: "#8a7e6e", marginBottom: 8 }}>{product.collection.toUpperCase()}</p>
          <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 400, letterSpacing: 4, color: "#2a2218", marginBottom: 16 }}>{product.name}</h2>
          <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.7, marginBottom: 8 }}>
            Handcrafted brass chandelier from our {product.collection} collection.
            Each piece is made to order — custom sizes, finishes, and configurations available.
          </p>
          <p style={{ fontSize: 13, color: "#aaa", fontStyle: "italic", marginBottom: 28 }}>Price on request</p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi, I'd like to enquire about the ${product.name} from the ${product.collection} collection.`)}`}
              target="_blank" rel="noopener noreferrer"
              style={{ padding: "14px 28px", background: "#25D366", color: "#fff", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
            >
              ENQUIRE ON WHATSAPP
            </a>
            <a
              href={`mailto:info@delhibrass.com?subject=Enquiry: ${product.name}`}
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
