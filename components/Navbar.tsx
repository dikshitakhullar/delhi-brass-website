"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const lightingLinks = [
  { label: "CHANDELIERS", href: "/chandeliers" },
  { label: "WALL LIGHTS", href: "/wall-lights" },
  { label: "TABLE LAMPS", href: "/table-lamps" },
];

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "EXPLORE", href: "/explore" },
  { label: "LIGHTING", href: "#", children: lightingLinks },
  { label: "GATES", href: "/gates" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [lightingOpen, setLightingOpen] = useState(false);
  const [mobileLightingOpen, setMobileLightingOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLightingPage = lightingLinks.some((l) => pathname.startsWith(l.href));
  const filteredLinks = isHome ? navLinks.filter((l) => l.href !== "/") : navLinks;

  useEffect(() => {
    const seen = sessionStorage.getItem("db-intro-seen");
    if (seen) {
      setVisible(true);
      return;
    }
    const t = setTimeout(() => setVisible(true), 2200);
    return () => clearTimeout(t);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLightingOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileLightingOpen(false);
  }, [pathname]);

  const linkStyle: React.CSSProperties = {
    fontSize: 10,
    letterSpacing: 3,
    color: "#999",
    textDecoration: "none",
    cursor: "pointer",
  };

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
          {filteredLinks.map((link) =>
            link.children ? (
              /* Lighting dropdown */
              <div
                key="lighting"
                ref={dropdownRef}
                style={{ position: "relative" }}
                onMouseEnter={() => setLightingOpen(true)}
                onMouseLeave={() => setLightingOpen(false)}
              >
                <button
                  style={{
                    ...linkStyle,
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontFamily: "inherit",
                    color: isLightingPage ? "#1a1a1a" : "#999",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                  onClick={() => setLightingOpen(!lightingOpen)}
                >
                  {link.label}
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ marginTop: 1, transition: "transform 0.2s", transform: lightingOpen ? "rotate(180deg)" : "rotate(0)" }}>
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence>
                  {lightingOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        marginTop: 12,
                        background: "rgba(252,250,246,0.98)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(180,160,130,0.15)",
                        borderRadius: 6,
                        padding: "12px 0",
                        minWidth: 180,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "10px 24px",
                            fontSize: 10,
                            letterSpacing: 3,
                            color: pathname === child.href ? "#1a1a1a" : "#999",
                            textDecoration: "none",
                            transition: "color 0.2s",
                            whiteSpace: "nowrap",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                          onMouseLeave={(e) => {
                            if (pathname !== child.href) e.currentTarget.style.color = "#999";
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.href} href={link.href} style={linkStyle}>
                {link.label}
              </Link>
            )
          )}
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
            style={{ display: "block", width: 24, height: 1.5, background: "#1a1a1a", borderRadius: 1 }}
            animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            style={{ display: "block", width: 24, height: 1.5, background: "#1a1a1a", borderRadius: 1 }}
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            style={{ display: "block", width: 24, height: 1.5, background: "#1a1a1a", borderRadius: 1 }}
            animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
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
            {filteredLinks.map((link, i) =>
              link.children ? (
                <motion.div
                  key="lighting-mobile"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setMobileLightingOpen(!mobileLightingOpen)}
                    style={{
                      fontFamily: "var(--font-forum), serif",
                      fontSize: 18,
                      letterSpacing: 5,
                      color: "#2a2218",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 8 5" fill="none" style={{ transition: "transform 0.2s", transform: mobileLightingOpen ? "rotate(180deg)" : "rotate(0)" }}>
                      <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileLightingOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: "hidden", paddingLeft: 16, marginTop: 12 }}
                      >
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              style={{
                                fontFamily: "var(--font-tenor-sans), sans-serif",
                                fontSize: 14,
                                letterSpacing: 4,
                                color: pathname === child.href ? "#2a2218" : "#8a7e6e",
                                textDecoration: "none",
                              }}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: filteredLinks.length * 0.05 }}
            >
              <Link
                href="/trade"
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
                TRADE PROGRAM
              </Link>
            </motion.div>

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
