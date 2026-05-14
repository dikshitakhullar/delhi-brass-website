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

const doubled = [...clients, ...clients];

export default function ProjectsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#1c1916] py-[clamp(60px,8vw,100px)] px-[clamp(20px,4vw,48px)] text-[#f5f0e8]">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[10px] tracking-[4px] text-[#dcc99b] mb-3">RECENT INSTALLATIONS</p>
        <h2
          className="font-heading font-normal mb-12"
          style={{ fontSize: "clamp(24px, 2.5vw, 32px)", letterSpacing: 5 }}
        >
          Trusted by India&apos;s Finest Developers
        </h2>
        <p className="text-[14px] text-[#8a8070] leading-[1.8] max-w-[480px] mb-14">
          From lobby chandeliers to staircase railings — our work lives in India&apos;s most prestigious addresses.
        </p>

        {/* Client logos marquee */}
        <div ref={ref} style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="marquee-track-dark">
              <div className="marquee-inner-dark">
                {doubled.map((client, i) => (
                  <div
                    key={`${client.name}-${i}`}
                    style={{
                      position: "relative",
                      height: 40,
                      width: 120,
                      flexShrink: 0,
                      opacity: 0.4,
                      filter: "grayscale(100%) invert(1) brightness(2)",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "0.4";
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
          </motion.div>
        </div>
      </div>

      <style>{`
        .marquee-track-dark {
          width: 100%;
          overflow: hidden;
        }
        .marquee-inner-dark {
          display: flex;
          align-items: center;
          gap: 56px;
          width: max-content;
          animation: marquee-dark 30s linear infinite;
        }
        .marquee-inner-dark:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-dark {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
