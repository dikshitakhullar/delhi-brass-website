"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const showrooms = [
  {
    name: "MG ROAD",
    desc: "Two showrooms, two doors apart. Our original home since the 1960s.",
  },
  {
    name: "KHAN MARKET",
    desc: "Our newest space in the heart of New Delhi.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function ShowroomsAndTrade() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f5f0e6] py-[clamp(60px,8vw,100px)] px-[clamp(20px,4vw,48px)] text-[#2a2218]">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-heading font-normal"
            style={{ fontSize: "clamp(24px, 2.5vw, 32px)", letterSpacing: 5 }}
          >
            Three Doors in Delhi
          </h2>
          <p className="text-[14px] text-[#8a7e6e] mt-2">Walk in, or book a private viewing.</p>
        </div>

        {/* Showroom cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20"
        >
          {showrooms.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="rounded-[12px] text-center"
              style={{
                background: "#ece6da",
                border: "1px solid rgba(180,160,130,0.15)",
                padding: "clamp(28px, 3vw, 40px)",
              }}
            >
              <h3
                className="font-heading font-normal text-[#2a2218] mb-3"
                style={{ fontSize: "clamp(16px, 1.5vw, 20px)", letterSpacing: 4 }}
              >
                {s.name}
              </h3>
              <p className="text-[13px] text-[#8a7e6e] leading-[1.6]">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trade CTA card */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-[12px] text-center bg-[#1c1916]"
          style={{ padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px)" }}
        >
          <p className="text-[10px] tracking-[4px] text-[#dcc99b] mb-3">FOR DESIGNERS &amp; ARCHITECTS</p>
          <h3
            className="font-heading font-normal text-[#f5f0e8] mb-4"
            style={{ fontSize: "clamp(22px, 2.2vw, 28px)", letterSpacing: 4 }}
          >
            Working on a project?
          </h3>
          <p className="text-[14px] text-[#8a8070] leading-[1.7] max-w-[460px] mx-auto mb-7">
            Trade pricing, specification drawings, factory visits, and a private lookbook.
          </p>
          <a
            href="/trade"
            className="inline-block px-9 py-3.5 bg-[#dcc99b] text-[#1c1916] text-[11px] tracking-[3px] rounded-[2px] cursor-pointer hover:bg-[#c8b580] transition-colors duration-300 no-underline"
          >
            OPEN THE TRADE PROGRAMME &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
