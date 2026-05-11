"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    key: "lighting",
    label: "LIGHTING",
    sub: "Chandeliers, pendants & wall lights",
    src: "/images/mockup/brass-petals.png",
    alt: "Brass Petal pendants",
    tall: true,
    wide: false,
    objectPosition: "center 30%",
  },
  {
    key: "gates",
    label: "GATES",
    sub: "",
    src: "/images/mockup/gate-modern.png",
    alt: "Modern wood and steel gate",
    tall: false,
    wide: false,
    objectPosition: "center",
  },
  {
    key: "railings",
    label: "RAILINGS",
    sub: "",
    src: "/images/mockup/railing-brass.jpg",
    alt: "Ornate wrought iron staircase railing",
    tall: false,
    wide: false,
    objectPosition: "center",
  },
  {
    key: "bespoke",
    label: "BESPOKE",
    sub: "Custom designs, any material, any scale",
    src: "/images/mockup/brass-bough.png",
    alt: "Bespoke metalwork",
    tall: false,
    wide: true,
    objectPosition: "center 40%",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function CategoryGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-[#fcfaf6] py-[clamp(60px,10vw,140px)] px-[clamp(20px,4vw,60px)]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[clamp(40px,6vw,80px)]">
          <p className="text-[10px] tracking-[5px] text-[#aaa] mb-3">WHAT WE MAKE</p>
          <h2 className="font-heading text-[clamp(24px,2.5vw,32px)] tracking-[clamp(3px,0.5vw,6px)] font-normal text-[#1a1a1a]">
            Four disciplines, one craft.
          </h2>
          <p className="text-[13px] text-[#888] max-w-[440px] mx-auto mt-3">
            Every piece made to order in our Gurgaon factory. Brass, steel, glass, wood — we work with all of them.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5"
          style={{
            gridTemplateRows: "auto",
          }}
        >
          {/* Lighting — tall left, spans 2 rows on md+ */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-[4px] overflow-hidden cursor-pointer
              min-h-[clamp(300px,50vw,620px)]
              md:row-span-2"
          >
            <Image
              src="/images/mockup/brass-petals.png"
              alt="Brass Petal pendants"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45 pointer-events-none" />
            <div className="absolute bottom-7 left-7 z-10">
              <span className="font-heading text-[clamp(16px,1.5vw,20px)] tracking-[4px] text-white">LIGHTING</span>
              <p className="text-[11px] text-white/70 mt-1.5">Chandeliers, pendants &amp; wall lights</p>
            </div>
          </motion.div>

          {/* Gates */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-[4px] overflow-hidden cursor-pointer min-h-[clamp(200px,25vw,300px)]"
          >
            <Image
              src="/images/mockup/gate-modern.png"
              alt="Modern wood and steel gate"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45 pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="font-heading text-[16px] tracking-[4px] text-white">GATES</span>
            </div>
          </motion.div>

          {/* Railings */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-[4px] overflow-hidden cursor-pointer min-h-[clamp(200px,25vw,300px)]"
          >
            <Image
              src="/images/mockup/railing-brass.jpg"
              alt="Ornate wrought iron staircase railing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45 pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="font-heading text-[16px] tracking-[4px] text-white">RAILINGS</span>
            </div>
          </motion.div>

          {/* Bespoke — spans 2 cols on md+ */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-[4px] overflow-hidden cursor-pointer min-h-[clamp(200px,25vw,300px)]
              md:col-span-2"
          >
            <Image
              src="/images/mockup/brass-bough.png"
              alt="Bespoke metalwork"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45 pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="font-heading text-[16px] tracking-[4px] text-white">BESPOKE</span>
              <p className="text-[11px] text-white/70 mt-1">Custom designs, any material, any scale</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
