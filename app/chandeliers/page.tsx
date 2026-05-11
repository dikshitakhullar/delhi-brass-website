"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import chandeliersData from "@/data/chandeliers.json";

const collections = [
  { name: "All", slug: "all" },
  { name: "Heritage Shade", slug: "heritage-shade" },
  { name: "Crystal Garden", slug: "crystal-garden" },
  { name: "Grand Lantern", slug: "grand-lantern" },
  { name: "Noir Crystal", slug: "noir-crystal" },
  { name: "Statement Pieces", slug: "statement" },
  { name: "Linear", slug: "linear" },
  { name: "Brass Medallion", slug: "brass-medallion" },
  { name: "Crystal Fringe", slug: "crystal-fringe" },
  { name: "Distressed Scroll", slug: "distressed-scroll" },
  { name: "Iron Brass", slug: "iron-brass" },
  { name: "Farmhouse Bead", slug: "farmhouse-bead" },
  { name: "Brass Pendants", slug: "brass-pendants" },
];

const WA_NUMBER = "919810088181";

export default function ChandeliersPage() {
  const [activeCollection, setActiveCollection] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<typeof chandeliersData[0] | null>(null);

  const filtered =
    activeCollection === "all"
      ? chandeliersData
      : chandeliersData.filter((p) => p.collectionSlug === activeCollection);

  return (
    <main style={{ background: "#f8f5f0", minHeight: "100vh" }}>
      {/* Page header */}
      <section
        style={{
          paddingTop: "clamp(100px, 12vw, 140px)",
          paddingBottom: "clamp(32px, 4vw, 48px)",
          paddingLeft: "clamp(20px, 4vw, 60px)",
          paddingRight: "clamp(20px, 4vw, 60px)",
        }}
      >
        <motion.h1
          style={{
            fontFamily: "var(--font-forum), serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "clamp(4px, 0.6vw, 8px)",
            margin: 0,
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Chandeliers
        </motion.h1>
        <motion.p
          style={{
            fontSize: "clamp(12px, 1vw, 14px)",
            color: "#888",
            letterSpacing: 1,
            marginTop: 10,
            maxWidth: 480,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Handcrafted statement lighting — each piece made to order in our Gurgaon factory. Price on request.
        </motion.p>
      </section>

      {/* Collection tabs — sticky */}
      <div
        style={{
          position: "sticky",
          top: 64,
          zIndex: 30,
          background: "rgba(248,245,240,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(180,160,130,0.12)",
          padding: "0 clamp(20px, 4vw, 60px)",
          overflowX: "auto",
        }}
        className="scrollbar-hide"
      >
        <div style={{ display: "flex", gap: 4, padding: "12px 0", minWidth: "max-content" }}>
          {collections.map((col) => (
            <button
              key={col.slug}
              onClick={() => setActiveCollection(col.slug)}
              style={{
                padding: "8px 16px",
                fontSize: 10,
                letterSpacing: 2,
                whiteSpace: "nowrap",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-tenor-sans), sans-serif",
                color: activeCollection === col.slug ? "#1a1a1a" : "#999",
                position: "relative",
                transition: "color 0.2s",
              }}
            >
              {col.name.toUpperCase()}
              {activeCollection === col.slug && (
                <motion.div
                  layoutId="activeTab"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 8,
                    right: 8,
                    height: 1.5,
                    background: "#1a1a1a",
                    borderRadius: 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Product count */}
      <div
        style={{
          padding: "20px clamp(20px, 4vw, 60px) 8px",
          fontSize: 11,
          letterSpacing: 2,
          color: "#aaa",
        }}
      >
        {filtered.length} {filtered.length === 1 ? "PIECE" : "PIECES"}
      </div>

      {/* Product grid */}
      <div
        style={{
          padding: "0 clamp(20px, 4vw, 60px) clamp(60px, 8vw, 100px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "clamp(16px, 2vw, 28px)",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Product modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

/* ---- Product Card ---- */
function ProductCard({
  product,
  onClick,
}: {
  product: typeof chandeliersData[0];
  onClick: () => void;
}) {
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
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "3/4",
          borderRadius: 6,
          overflow: "hidden",
          background: "#ece6da",
        }}
        className="group"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "contain", padding: 16, transition: "transform 0.5s" }}
          className="group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(28,25,22,0.75)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            opacity: 0,
            transition: "opacity 0.3s",
          }}
          className="group-hover:!opacity-100"
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: 3,
              color: "#f5f0e8",
              border: "1px solid rgba(220,201,155,0.5)",
              padding: "10px 20px",
              borderRadius: 2,
            }}
          >
            QUICK VIEW
          </span>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              `Hi, I'd like to enquire about the ${product.name} (${product.collection}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: 10,
              letterSpacing: 2,
              color: "#fff",
              background: "#25D366",
              padding: "10px 20px",
              borderRadius: 2,
              textDecoration: "none",
            }}
          >
            ENQUIRE ON WHATSAPP
          </a>
        </div>
      </div>

      {/* Info */}
      <div style={{ marginTop: 12 }}>
        <h3
          style={{
            fontFamily: "var(--font-forum), serif",
            fontSize: 15,
            letterSpacing: 2,
            color: "#2a2218",
            fontWeight: 400,
          }}
        >
          {product.name}
        </h3>
        <p style={{ fontSize: 11, color: "#8a7e6e", marginTop: 3 }}>
          {product.collection}
        </p>
        <p style={{ fontSize: 11, color: "#aaa", marginTop: 2, fontStyle: "italic" }}>
          Price on request
        </p>
      </div>
    </motion.div>
  );
}

/* ---- Product Modal ---- */
function ProductModal({
  product,
  onClose,
}: {
  product: typeof chandeliersData[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px, 3vw, 32px)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          background: "#f8f5f0",
          borderRadius: 12,
          maxWidth: 900,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 20,
            background: "none",
            border: "none",
            fontSize: 20,
            color: "#888",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          &#x2715;
        </button>

        {/* Image */}
        <div
          style={{
            aspectRatio: "3/4",
            position: "relative",
            background: "#ece6da",
            borderRadius: "12px 0 0 12px",
            minHeight: 400,
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "contain", padding: 24 }}
          />
        </div>

        {/* Info */}
        <div
          style={{
            padding: "clamp(24px, 3vw, 48px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 10, letterSpacing: 3, color: "#8a7e6e", marginBottom: 8 }}>
            {product.collection.toUpperCase()}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-forum), serif",
              fontSize: "clamp(24px, 2.5vw, 36px)",
              fontWeight: 400,
              letterSpacing: 4,
              color: "#2a2218",
              marginBottom: 16,
            }}
          >
            {product.name}
          </h2>
          <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.7, marginBottom: 8 }}>
            Handcrafted brass chandelier from our {product.collection} collection.
            Each piece is made to order — custom sizes, finishes, and configurations available.
          </p>
          <p style={{ fontSize: 13, color: "#aaa", fontStyle: "italic", marginBottom: 28 }}>
            Price on request
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                `Hi, I'd like to enquire about the ${product.name} from the ${product.collection} collection.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 28px",
                background: "#25D366",
                color: "#fff",
                fontSize: 10,
                letterSpacing: 3,
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              ENQUIRE ON WHATSAPP
            </a>
            <a
              href={`mailto:info@delhibrass.com?subject=Enquiry: ${product.name}`}
              style={{
                padding: "14px 28px",
                border: "1px solid #2a2218",
                color: "#2a2218",
                fontSize: 10,
                letterSpacing: 3,
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              EMAIL US
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
