"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("db-intro-seen");
    if (seen) return;
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "#f8f5f0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            style={{
              fontFamily: "var(--font-forum), serif",
              fontSize: "clamp(20px, 3vw, 36px)",
              letterSpacing: "clamp(8px, 2vw, 14px)",
              color: "#1a1a1a",
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            DELHI BRASS
          </motion.span>

          <motion.span
            style={{
              fontSize: 10,
              letterSpacing: 6,
              color: "#8a7e6e",
              marginTop: 8,
              fontFamily: "var(--font-tenor-sans), sans-serif",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            EST. 1948
          </motion.span>

          {/* Subtle gold line */}
          <motion.div
            style={{
              position: "absolute",
              top: "calc(50% + 32px)",
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(196,168,114,0.25), transparent)",
            }}
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
