"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "CHANDELIERS", href: "/chandeliers" },
  { label: "GATES", href: "/gates" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("db-intro-seen");
    if (seen) {
      setVisible(true);
      return;
    }
    // Wait until intro has slid away (~1.4s trigger + 0.8s exit + 0.3s buffer)
    const t = setTimeout(() => setVisible(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <motion.nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px clamp(20px, 4vw, 60px)",
          background: "rgba(252,250,246,0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-forum), serif",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              letterSpacing: 8,
              color: "#1a1a1a",
            }}
          >
            DELHI BRASS
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "clamp(16px, 2.5vw, 36px)",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 10,
                letterSpacing: 3,
                color: "#999",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/trade" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: 10,
                letterSpacing: 3,
                color: "#1c1916",
                background: "#dcc99b",
                padding: "8px 20px",
                cursor: "pointer",
              }}
            >
              TRADE
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
        >
          <motion.span
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              background: "#1a1a1a",
              borderRadius: 1,
            }}
            animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              background: "#1a1a1a",
              borderRadius: 1,
            }}
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              background: "#1a1a1a",
              borderRadius: 1,
            }}
            animate={
              mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }
            }
          />
        </button>
      </motion.nav>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "80%",
              maxWidth: 320,
              zIndex: 150,
              background: "#f8f5f0",
              padding: "100px 40px 40px",
              borderLeft: "1px solid rgba(180,160,130,0.15)",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {[...navLinks, { label: "TRADE PROGRAMME", href: "/trade" }].map(
              (link, i) => (
                <motion.div
                  key={link.href + link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-forum), serif",
                      fontSize: 18,
                      letterSpacing: 5,
                      color: "#2a2218",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}

            <div style={{ marginTop: "auto" }}>
              <a
                href="https://wa.me/919810088181"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  background: "#dcc99b",
                  color: "#fff",
                  fontSize: 10,
                  letterSpacing: 2,
                  borderRadius: 4,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                WHATSAPP US
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 140,
              background: "rgba(0,0,0,0.2)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
