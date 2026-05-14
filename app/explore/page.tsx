"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ========== GALLERY DATA ========== */
const sections = [
  {
    category: "Lighting",
    subcategories: [
      {
        name: "Chandeliers",
        description: "102 designs across 15 collections — crystal, brass, iron, and glass. Each piece handcrafted and fully customisable.",
        link: "/chandeliers",
        images: [
          { src: "/images/chandeliers/heritage-shade-gilt-plume/02-lifestyle-lights-on.png", alt: "Gilt Plume — Heritage Shade", aspect: "3/4" },
          { src: "/images/chandeliers/noir-crystal-cascade/02-lifestyle-lights-on.png", alt: "Noir Crystal Cascade", aspect: "3/4" },
          { src: "/images/chandeliers/brass-bough/02-lifestyle-lights-on.png", alt: "Brass Bough chandelier", aspect: "3/4" },
          { src: "/images/chandeliers/antler-crown/02-lifestyle-lights-on.png", alt: "Antler Crown chandelier", aspect: "3/4" },
          { src: "/images/chandeliers/brass-bloom-cluster/02-lifestyle-lights-on.png", alt: "Brass Bloom Cluster", aspect: "3/4" },
          { src: "/images/chandeliers/amber-cascade/02-lifestyle-lights-on.png", alt: "Amber Cascade chandelier", aspect: "3/4" },
        ],
      },
      {
        name: "Table Lamps",
        description: "Brass, crystal, stone and wood — from heritage filigree to contemporary forms.",
        link: "/table-lamps",
        images: [
          { src: "/images/table-lamps/stone-pebble-1.jpg", alt: "Stone Pebble lamp", aspect: "3/4" },
          { src: "/images/table-lamps/crystal-dome-1.jpg", alt: "Crystal Dome lamp", aspect: "3/4" },
          { src: "/images/table-lamps/mughal-filigree.jpg", alt: "Mughal Filigree lamp", aspect: "3/4" },
          { src: "/images/table-lamps/brushed-cylinder.jpg", alt: "Brushed Cylinder lamp", aspect: "4/5" },
          { src: "/images/table-lamps/silver-matka.jpg", alt: "Silver Matka lamp", aspect: "3/4" },
        ],
      },
      {
        name: "Wall Lights & Floor Lamps",
        description: "Sconces, bracket lights, and floor-standing pieces to complete any room.",
        images: [
          { src: "/images/gallery/floor-lamp-hero-v2.jpg", alt: "Tripod floor lamp", aspect: "3/4" },
          { src: "/images/gallery/wall-light-crystal-sconce.jpg", alt: "Crystal & brass wall sconce", aspect: "3/4" },
          { src: "/images/gallery/floor-lamp-detail.jpg", alt: "Floor lamp shade detail", aspect: "3/4" },
          { src: "/images/gallery/wall-light-filigree-cream.jpg", alt: "Filigree wall light", aspect: "3/4" },
        ],
      },
    ],
  },
  {
    category: "Gates",
    subcategories: [
      {
        name: "Gates",
        description: "Wrought iron, CNC laser-cut, and wood-steel combinations — every gate custom-designed for your entrance.",
        link: "/gates",
        images: [
          { src: "/images/gates/the-patina.png", alt: "The Patina", aspect: "4/3" },
          { src: "/images/gates/the-cascade.png", alt: "The Cascade", aspect: "4/3" },
          { src: "/images/gates/the-stout.png", alt: "The Stout", aspect: "4/3" },
          { src: "/images/gates/the-maharaja.png", alt: "The Maharaja", aspect: "4/3" },
          { src: "/images/gates/the-gothic.png", alt: "The Gothic", aspect: "4/3" },
          { src: "/images/gates/the-vault.png", alt: "The Vault", aspect: "4/3" },
          { src: "/images/gates/modern-slatted-new.jpg", alt: "Fluted Steel", aspect: "4/3" },
        ],
      },
    ],
  },
  {
    category: "Railings",
    subcategories: [
      {
        name: "Staircase Railings",
        description: "Wrought iron scrollwork, cast bronze panels, and sculpted balusters — designed for grand entrances and private residences.",
        images: [
          { src: "/images/railings/staircase-scrollwork-enhanced.jpg", alt: "Scrollwork staircase railing", aspect: "4/3" },
          { src: "/images/railings/staircase-bronze-enhanced.jpg", alt: "Bronze panel staircase railing", aspect: "3/4" },
          { src: "/images/mockup/railing-enhanced.jpg", alt: "Bronze sculptural staircase railing", aspect: "3/4" },
          { src: "/images/gallery/staircase-brass-glass.jpg", alt: "Brass & glass staircase railing", aspect: "3/4" },
        ],
      },
      {
        name: "Balcony Railings",
        description: "Balcony balustrades and terrace grilles — forged iron with brass accents, cast in traditional and contemporary patterns.",
        images: [
          { src: "/images/gallery/balcony-oval-loop.jpg", alt: "Oval loop balcony railing", aspect: "4/3" },
          { src: "/images/gallery/balcony-scrollwork-lobby.jpg", alt: "Scrollwork balustrade in grand lobby", aspect: "4/3" },
          { src: "/images/gallery/balcony-brass-enhanced.jpg", alt: "Brass & iron balcony railing", aspect: "4/3" },
          { src: "/images/gallery/balcony-ornate-enhanced.jpg", alt: "Ornate cast iron balcony railing", aspect: "4/3" },
        ],
      },
    ],
  },
  {
    category: "Sculptures",
    subcategories: [
      {
        name: "Sculptures",
        description: "Corten steel, brass, and bronze — bespoke outdoor and indoor sculptures for estates, lobbies, and landscape installations.",
        images: [
          { src: "/images/mockup/sculpture-garden-wide.jpg", alt: "Geometric corten steel sculpture", aspect: "16/9" },
          { src: "/images/gallery/sculpture-angular-evening.jpg", alt: "Angular corten sculpture at dusk", aspect: "3/4" },
          { src: "/images/gallery/wall-sculpture.jpg", alt: "Brass leaf & butterfly wall sculpture", aspect: "16/9" },
        ],
      },
    ],
  },
];

/* ========== PAGE ========== */
export default function ExplorePage() {
  return (
    <main style={{ background: "#1c1916", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", overflow: "hidden" }}>
        <motion.div
          style={{ textAlign: "center", zIndex: 2, padding: "0 24px" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ fontSize: 10, letterSpacing: 6, color: "#8a7e6e", marginBottom: 20 }}>DELHI BRASS</p>
          <h1 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 400, color: "#f5f0e8", letterSpacing: "clamp(4px, 0.8vw, 12px)", margin: 0 }}>
            Explore Our World
          </h1>
          <p style={{ fontSize: "clamp(12px, 1vw, 15px)", color: "#6a6050", marginTop: 16, maxWidth: 440, margin: "16px auto 0", lineHeight: 1.7 }}>
            Three generations of craft. Scroll to discover.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ position: "absolute", bottom: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span style={{ fontSize: 9, letterSpacing: 3, color: "#555" }}>SCROLL</span>
          <motion.div
            style={{ width: 1, height: 40, background: "linear-gradient(180deg, #555, transparent)" }}
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* Category Sections */}
      {sections.map((section) => (
        <CategorySection key={section.category} section={section} />
      ))}

      {/* Footer CTA */}
      <section style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px)", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: 10, letterSpacing: 5, color: "#8a7e6e", marginBottom: 16 }}>INTERESTED?</p>
          <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 400, color: "#f5f0e8", letterSpacing: 4, marginBottom: 24 }}>
            Every piece is made to order.
          </h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919810088181?text=Hi, I'd like to discuss a project."
              target="_blank" rel="noopener noreferrer"
              style={{ padding: "14px 32px", background: "#dcc99b", color: "#1c1916", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
            >
              ENQUIRE ON WHATSAPP
            </a>
            <Link
              href="/about#showrooms"
              style={{ padding: "14px 32px", border: "1px solid rgba(245,240,232,0.15)", color: "#f5f0e8", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
            >
              VISIT OUR SHOWROOMS
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

/* ========== CATEGORY SECTION ========== */
function CategorySection({ section }: { section: (typeof sections)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ padding: "clamp(40px, 5vw, 70px) 0" }}>
      {/* Category title — full width, sticky feel */}
      <motion.div
        style={{ padding: "0 clamp(20px, 4vw, 60px)", marginBottom: "clamp(24px, 3vw, 40px)" }}
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{
          fontFamily: "var(--font-forum), serif",
          fontSize: "clamp(40px, 6vw, 80px)",
          fontWeight: 400,
          color: "rgba(245,240,232,0.18)",
          letterSpacing: "clamp(4px, 1vw, 12px)",
          margin: 0,
          lineHeight: 1,
        }}>
          {section.category}
        </h2>
      </motion.div>

      {/* Subcategories */}
      {section.subcategories.map((sub) => (
        <SubcategoryBlock key={sub.name} sub={sub} />
      ))}

      {/* Divider */}
      <div style={{ maxWidth: 120, margin: "0 auto", height: 1, background: "rgba(220,201,155,0.08)", marginTop: "clamp(40px, 6vw, 80px)" }} />
    </section>
  );
}

/* ========== SUBCATEGORY BLOCK ========== */
type Subcategory = {
  name: string;
  description: string;
  link?: string;
  images: { src: string; alt: string; aspect: string }[];
  comingSoon?: boolean;
};

function SubcategoryBlock({ sub }: { sub: Subcategory }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} style={{ marginBottom: "clamp(60px, 8vw, 100px)" }}>
      {/* Subcategory header */}
      <motion.div
        style={{ padding: "0 clamp(20px, 4vw, 60px)", marginBottom: "clamp(24px, 3vw, 40px)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
          <h3 style={{
            fontFamily: "var(--font-forum), serif",
            fontSize: "clamp(18px, 2vw, 28px)",
            fontWeight: 400,
            color: "#f5f0e8",
            letterSpacing: "clamp(2px, 0.4vw, 5px)",
            margin: 0,
          }}>
            {sub.name}
          </h3>
          {sub.link && (
            <Link href={sub.link} style={{ fontSize: 9, letterSpacing: 3, color: "#dcc99b", textDecoration: "none" }}>
              VIEW ALL &rarr;
            </Link>
          )}
        </div>
        <p style={{ fontSize: "clamp(12px, 0.9vw, 14px)", color: "#6a6050", marginTop: 8, maxWidth: 560, lineHeight: 1.7 }}>
          {sub.description}
        </p>
      </motion.div>

      {/* Image strip — horizontal scroll with parallax */}
      {"comingSoon" in sub && sub.comingSoon ? (
        <motion.div
          style={{ padding: "0 clamp(20px, 4vw, 60px)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            border: "1px dashed rgba(220,201,155,0.15)",
            borderRadius: 8,
            padding: "clamp(40px, 6vw, 80px) 24px",
            textAlign: "center",
          }}>
            <p style={{ fontSize: 11, letterSpacing: 3, color: "#555" }}>COMING SOON</p>
            <p style={{ fontSize: 13, color: "#6a6050", marginTop: 8 }}>
              Get in touch to discuss your furniture project.
            </p>
            <a
              href="https://wa.me/919810088181?text=Hi, I'd like to discuss a custom furniture piece."
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: 20, padding: "10px 24px", background: "#dcc99b", color: "#1c1916", fontSize: 9, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
            >
              ENQUIRE
            </a>
          </div>
        </motion.div>
      ) : (
        <div style={{ overflowX: "auto", overflowY: "hidden" }} className="scrollbar-hide">
          <div
            style={{
              display: "flex",
              gap: "clamp(12px, 1.5vw, 20px)",
              padding: "0 clamp(20px, 4vw, 60px)",
              paddingRight: "clamp(20px, 4vw, 60px)",
              width: "max-content",
            }}
          >
            {sub.images.map((img, i) => (
              <GalleryImage key={img.src} img={img} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ========== GALLERY IMAGE ========== */
function GalleryImage({ img, index }: { img: { src: string; alt: string; aspect: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        flexShrink: 0,
        width: "clamp(240px, 28vw, 380px)",
        borderRadius: 6,
        overflow: "hidden",
        position: "relative",
        aspectRatio: img.aspect,
        background: "#1c1916",
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 70vw, 30vw"
        style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "scale(1.05)"; }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "scale(1)"; }}
      />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(transparent, rgba(10,8,6,0.7))",
        padding: "24px 16px 12px",
      }}>
        <p style={{ fontSize: 10, letterSpacing: 1, color: "rgba(245,240,232,0.7)" }}>{img.alt}</p>
      </div>
    </motion.div>
  );
}
