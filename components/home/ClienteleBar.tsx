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
];

export default function ClienteleBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ background: "#f5f0e6", padding: "clamp(48px, 6vw, 80px) clamp(20px, 4vw, 60px)" }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.p
          style={{ fontSize: 10, letterSpacing: 5, color: "#aaa", textAlign: "center", marginBottom: 40 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          TRUSTED BY
        </motion.p>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "clamp(24px, 4vw, 56px)", flexWrap: "wrap",
        }}>
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              style={{ position: "relative", height: 40, width: "clamp(80px, 10vw, 120px)", opacity: 0.5, filter: "grayscale(100%)", transition: "all 0.3s" }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 0.5, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ opacity: 1, filter: "grayscale(0%)" }}
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                style={{ objectFit: "contain" }}
                sizes="120px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
