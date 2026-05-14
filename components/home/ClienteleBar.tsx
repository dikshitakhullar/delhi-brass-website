"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "DLF", src: "/images/clients/dlf.png" },
  { name: "The Imperial", src: "/images/clients/the-imperial.jpg" },
  { name: "The Grand", src: "/images/clients/the-grand.png" },
  { name: "Eros Hotel", src: "/images/clients/eros-hotel.jpeg" },
  { name: "Uppal's", src: "/images/clients/uppals.jpg" },
  { name: "GD Goenka", src: "/images/clients/gd-goenka.jpg" },
  { name: "Salcon", src: "/images/clients/salcon.png" },
  { name: "Elan", src: "/images/clients/elan.webp" },
  { name: "M3M", src: "/images/clients/m3m.png" },
  { name: "Hyatt Regency", src: "/images/clients/hyatt-regency.png" },
];

export default function ClienteleBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Duplicate for seamless loop
  const doubled = [...clients, ...clients];

  return (
    <section style={{ background: "#f5f0e6", padding: "clamp(48px, 6vw, 80px) 0", overflow: "hidden" }}>
      <div ref={ref}>
        <motion.p
          style={{ fontSize: 10, letterSpacing: 5, color: "#aaa", textAlign: "center", marginBottom: 40 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          TRUSTED BY
        </motion.p>

        <div className="marquee-track">
          <div className="marquee-inner">
            {doubled.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                style={{
                  position: "relative",
                  height: 40,
                  width: 120,
                  flexShrink: 0,
                  opacity: 0.5,
                  filter: "grayscale(100%)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.filter = "grayscale(0%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.5";
                  (e.currentTarget as HTMLElement).style.filter = "grayscale(100%)";
                }}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          width: 100%;
          overflow: hidden;
        }
        .marquee-inner {
          display: flex;
          align-items: center;
          gap: 56px;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
