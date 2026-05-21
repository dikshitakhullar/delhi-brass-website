"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import chandeliersData from "@/data/chandeliers.json";
import wallLightsData from "@/data/wall-lights.json";
import tableLampsData from "@/data/table-lamps.json";
import floorLampsData from "@/data/floor-lamps.json";

const WA = "919810088181";

/* ===== UNIFY ALL PRODUCTS ===== */
type Product = {
  id: string;
  name: string;
  slug: string;
  collection?: string;
  category: string;
  description?: string;
  images: string[];
};

function normalize(raw: Record<string, unknown>, category: string): Product {
  const r = raw as Record<string, unknown>;
  let images: string[] = [];
  if (Array.isArray(r.images)) {
    images = r.images as string[];
  } else if (r.images && typeof r.images === "object") {
    images = Object.values(r.images as Record<string, string>);
  }
  return {
    id: `${category}-${r.slug || r.id}`,
    name: (r.name as string) || "",
    slug: (r.slug as string) || "",
    collection: (r.collection as string) || undefined,
    category,
    description: (r.description as string) || undefined,
    images,
  };
}

const allProducts: Product[] = [
  ...chandeliersData.map((p) => normalize(p as Record<string, unknown>, "Chandeliers")),
  ...wallLightsData.map((p) => normalize(p as Record<string, unknown>, "Wall Lights")),
  ...tableLampsData.map((p) => normalize(p as Record<string, unknown>, "Table Lamps")),
  ...floorLampsData.map((p) => normalize(p as Record<string, unknown>, "Floor Lamps")),
];

const categories = [
  { name: "All", count: allProducts.length },
  { name: "Chandeliers", count: chandeliersData.length },
  { name: "Wall Lights", count: wallLightsData.length },
  { name: "Table Lamps", count: tableLampsData.length },
  { name: "Floor Lamps", count: floorLampsData.length },
];

/* Sub-categories for chandeliers */
const chandelierCollections = (() => {
  const map: Record<string, number> = {};
  chandeliersData.forEach((p) => {
    const col = (p as Record<string, unknown>).collection as string;
    if (col) map[col] = (map[col] || 0) + 1;
  });
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
})();

/* ===== MAIN PAGE ===== */
export default function LightingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let items = allProducts;
    if (activeCategory !== "All") {
      items = items.filter((p) => p.category === activeCategory);
    }
    if (activeCollection) {
      items = items.filter((p) => p.collection === activeCollection);
    }
    return items;
  }, [activeCategory, activeCollection]);

  const PAGE_SIZE = 48;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const selectedProduct = selectedIdx !== null ? filtered[selectedIdx] : null;

  const goNext = useCallback(() => {
    if (selectedIdx !== null && selectedIdx < filtered.length - 1) setSelectedIdx(selectedIdx + 1);
  }, [selectedIdx, filtered.length]);

  const goPrev = useCallback(() => {
    if (selectedIdx !== null && selectedIdx > 0) setSelectedIdx(selectedIdx - 1);
  }, [selectedIdx]);

  const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
    setActiveCollection(null);
    setSelectedIdx(null);
    setVisibleCount(PAGE_SIZE);
  };

  const handleCollectionClick = (name: string) => {
    setActiveCollection(activeCollection === name ? null : name);
    setSelectedIdx(null);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <main style={{ background: "#f8f5f0", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ paddingTop: "clamp(100px, 12vw, 140px)", paddingBottom: "clamp(24px, 3vw, 36px)", paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}>
        <motion.h1
          style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: "#1a1a1a", letterSpacing: "clamp(4px, 0.6vw, 8px)", margin: 0 }}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          Lighting
        </motion.h1>
        <motion.p
          style={{ fontSize: "clamp(12px, 1vw, 14px)", color: "#888", letterSpacing: 1, marginTop: 10, maxWidth: 520 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          {allProducts.length} handcrafted pieces — chandeliers, wall lights, table lamps &amp; floor lamps. Each made to order in our Gurgaon factory.
        </motion.p>
      </section>

      {/* Category Cards */}
      <div style={{ padding: "0 clamp(20px, 4vw, 60px)", marginBottom: 8 }}>
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8 }} className="scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              style={{
                flex: "0 0 auto",
                padding: "14px 28px",
                borderRadius: 6,
                border: activeCategory === cat.name ? "1.5px solid #2a2218" : "1.5px solid rgba(180,160,130,0.2)",
                background: activeCategory === cat.name ? "#2a2218" : "transparent",
                color: activeCategory === cat.name ? "#f5f0e8" : "#6a6050",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 2,
                minWidth: 120,
              }}
            >
              <span style={{ fontFamily: "var(--font-forum), serif", fontSize: 15, letterSpacing: 2, fontWeight: 400 }}>{cat.name}</span>
              <span style={{ fontSize: 10, letterSpacing: 1, opacity: 0.6 }}>{cat.count} pieces</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sub-category chips — only for Chandeliers */}
      <AnimatePresence>
        {activeCategory === "Chandeliers" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", padding: "0 clamp(20px, 4vw, 60px)" }}
          >
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingBottom: 12, paddingTop: 4 }}>
              {chandelierCollections.map((col) => (
                <button
                  key={col.name}
                  onClick={() => handleCollectionClick(col.name)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 20,
                    border: activeCollection === col.name ? "1px solid #2a2218" : "1px solid rgba(180,160,130,0.2)",
                    background: activeCollection === col.name ? "#2a2218" : "transparent",
                    color: activeCollection === col.name ? "#f5f0e8" : "#8a7e6e",
                    fontSize: 10,
                    letterSpacing: 2,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {col.name.toUpperCase()} ({col.count})
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Count */}
      <div style={{ padding: "8px clamp(20px, 4vw, 60px) 8px", fontSize: 11, letterSpacing: 2, color: "#aaa" }}>
        {filtered.length} {filtered.length === 1 ? "PIECE" : "PIECES"}
      </div>

      {/* Product Grid */}
      <div style={{ padding: "0 clamp(20px, 4vw, 60px) 0", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "clamp(16px, 2vw, 28px)" }}>
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProductCard key={p.id} product={p} onClick={() => setSelectedIdx(i)} />
          ))}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {hasMore && (
        <div style={{ textAlign: "center", padding: "clamp(40px, 5vw, 60px) 0" }}>
          <button
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
            style={{
              padding: "14px 40px",
              background: "none",
              border: "1.5px solid rgba(42,34,24,0.2)",
              color: "#2a2218",
              fontSize: 10,
              letterSpacing: 3,
              cursor: "pointer",
              fontFamily: "var(--font-tenor-sans), sans-serif",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2a2218"; e.currentTarget.style.color = "#f5f0e8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#2a2218"; }}
          >
            LOAD MORE ({filtered.length - visibleCount} REMAINING)
          </button>
        </div>
      )}

      <div style={{ height: hasMore ? 0 : "clamp(60px, 8vw, 100px)" }} />

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && selectedIdx !== null && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedIdx(null)}
            onNext={selectedIdx < filtered.length - 1 ? goNext : undefined}
            onPrev={selectedIdx > 0 ? goPrev : undefined}
            current={selectedIdx + 1}
            total={filtered.length}
          />
        )}
      </AnimatePresence>

      {/* Scroll to top */}
      <ScrollToTop />
    </main>
  );
}

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='530' fill='%23ece6da'%3E%3Crect width='400' height='530'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23c4a872' font-size='12' font-family='sans-serif' letter-spacing='3'%3ECOMING SOON%3C/text%3E%3C/svg%3E";

/* ===== SCROLL TO TOP ===== */
function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "#2a2218",
            color: "#f5f0e8",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            zIndex: 50,
            fontSize: 18,
          }}
          aria-label="Scroll to top"
        >
          &#8593;
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ===== PRODUCT CARD ===== */
function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const hasSecond = product.images.length > 1;
  const isStudio = !hasSecond || product.images[0]?.includes("studio") || product.images[0]?.includes("white");

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
        <Image
          src={imgError ? PLACEHOLDER : product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: isStudio && !imgError ? "contain" : "cover", padding: isStudio && !imgError ? 16 : 0, transition: "opacity 0.5s ease", opacity: hovered && hasSecond && !imgError ? 0 : 1 }}
          onError={() => setImgError(true)}

        />
        {hasSecond && !imgError && (
          <Image
            src={product.images[1]}
            alt={`${product.name} lifestyle`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ objectFit: "cover", transition: "opacity 0.5s ease", opacity: hovered ? 1 : 0 }}
            onError={() => {}}
  
          />
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
            href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi! I'm interested in the ${product.name}. Could you share more details?`)}`}
            target="_blank" rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 9, letterSpacing: 2, color: "#1c1916", background: "#dcc99b", padding: "6px 12px", borderRadius: 2, textDecoration: "none" }}
          >
            ENQUIRE
          </a>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 15, letterSpacing: 2, color: "#2a2218", fontWeight: 400 }}>{product.name}</h3>
        <p style={{ fontSize: 11, color: "#8a7e6e", marginTop: 3 }}>{product.collection || product.category}</p>
        <p style={{ fontSize: 11, color: "#aaa", marginTop: 2, fontStyle: "italic" }}>Price on request</p>
      </div>
    </motion.div>
  );
}

/* ===== PRODUCT MODAL ===== */
function ProductModal({ product, onClose, onNext, onPrev, current, total }: {
  product: Product; onClose: () => void;
  onNext?: () => void; onPrev?: () => void;
  current: number; total: number;
}) {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => { setImgIdx(0); }, [product.id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        if (imgIdx < product.images.length - 1) setImgIdx(imgIdx + 1);
        else if (onNext) onNext();
      }
      if (e.key === "ArrowLeft") {
        if (imgIdx > 0) setImgIdx(imgIdx - 1);
        else if (onPrev) onPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [imgIdx, product.images.length, onClose, onNext, onPrev]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const isStudio = product.images[imgIdx]?.includes("studio") || product.images[imgIdx]?.includes("white");

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
          <button onClick={onPrev} className="hidden-mobile" style={{ ...arrowBtn, flexShrink: 0 }} aria-label="Previous">&#8249;</button>
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
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 8, overflow: "hidden", background: isStudio ? "#ece6da" : "#1c1916" }}>
              <AnimatePresence mode="wait">
                <motion.div key={`${product.id}-${imgIdx}`} style={{ position: "absolute", inset: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Image src={product.images[imgIdx]} alt={product.name} fill style={{ objectFit: isStudio ? "contain" : "cover", padding: isStudio ? 20 : 0 }} />
                </motion.div>
              </AnimatePresence>

              {imgIdx > 0 && (
                <button onClick={() => setImgIdx(imgIdx - 1)} style={{ ...arrowBtn, position: "absolute" as const, top: "50%", transform: "translateY(-50%)", left: 8, width: 32, height: 32, fontSize: 14 }} aria-label="Previous image">&#8249;</button>
              )}
              {imgIdx < product.images.length - 1 && (
                <button onClick={() => setImgIdx(imgIdx + 1)} style={{ ...arrowBtn, position: "absolute" as const, top: "50%", transform: "translateY(-50%)", right: 8, width: 32, height: 32, fontSize: 14 }} aria-label="Next image">&#8250;</button>
              )}

              {product.images.length > 1 && (
                <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", background: "rgba(248,245,240,0.85)", borderRadius: 4, padding: "3px 10px", fontSize: 8, letterSpacing: 2, color: "#2a2218" }}>
                  {imgIdx + 1}/{product.images.length}
                </div>
              )}
            </div>

            {product.images.length > 1 && (
              <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                {product.images.map((src, i) => (
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
            <p style={{ fontSize: 10, letterSpacing: 3, color: "#8a7e6e", marginBottom: 4 }}>{product.category.toUpperCase()}</p>
            {product.collection && (
              <p style={{ fontSize: 10, letterSpacing: 2, color: "#b4a882", marginBottom: 8 }}>{product.collection}</p>
            )}
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(22px, 2.2vw, 32px)", fontWeight: 400, letterSpacing: 3, color: "#2a2218", marginBottom: 14 }}>{product.name}</h2>
            <p style={{ fontSize: 13, color: "#6a6050", lineHeight: 1.7, marginBottom: 6 }}>
              {product.description || `Handcrafted ${product.category.toLowerCase()} from our collection. Made to order — custom sizes, finishes, and configurations available.`}
            </p>
            <p style={{ fontSize: 12, color: "#aaa", fontStyle: "italic", marginBottom: 24 }}>Price on request</p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hi! I'm interested in the ${product.name} (${product.category}). Could you tell me about pricing, sizes, and customisation options?`)}`}
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
          <button onClick={onNext} className="hidden-mobile" style={{ ...arrowBtn, flexShrink: 0 }} aria-label="Next">&#8250;</button>
        )}
      </div>
    </motion.div>
  );
}
