"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  { name: "M3M Trump Tower", type: "Foyer Chandelier", loc: "Gurgaon, 2024" },
  { name: "DLF Camellias", type: "Lobby Railing", loc: "Gurgaon, 2023" },
  { name: "Central Park Resorts", type: "Clubhouse Pendants", loc: "Gurgaon, 2023" },
  { name: "Paras Quartier", type: "Balcony Railings", loc: "Gurgaon, 2024" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

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

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Placeholder image */}
              <div
                className="rounded-[8px] border flex items-center justify-center text-[10px]"
                style={{
                  aspectRatio: "4/3",
                  background: "#141210",
                  borderColor: "rgba(220,201,155,0.06)",
                  color: "rgba(220,201,155,0.12)",
                }}
              >
                [ PROJECT PHOTO ]
              </div>
              <h3
                className="font-heading mt-3"
                style={{ fontSize: 15, letterSpacing: 2 }}
              >
                {p.name}
              </h3>
              <p className="text-[11px] text-[#8a8070] mt-1">{p.type}</p>
              <p className="text-[10px] text-[#555040] mt-0.5">{p.loc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
