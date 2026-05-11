"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function FeaturedPiece() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#1c1916] py-[clamp(60px,8vw,100px)] px-[clamp(20px,4vw,48px)]">
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,6vw,80px)] items-center"
      >
        {/* Image — slides in from left */}
        <motion.div
          className="relative rounded-[8px] overflow-hidden min-h-[400px]"
          style={{ aspectRatio: "3/4" }}
          initial={{ opacity: 0, x: -48 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/images/mockup/noir-cascade.png"
            alt="Noir Crystal Cascade chandelier"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        {/* Text — slides in from right */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-[10px] tracking-[4px] text-[#dcc99b] mb-3">FEATURED PIECE</p>
          <h2 className="font-heading text-[clamp(28px,3vw,40px)] tracking-[4px] font-normal text-[#f5f0e8] leading-[1.2] mb-6">
            Noir Crystal Cascade
          </h2>
          <p className="text-[14px] text-[#8a8070] leading-[1.8] max-w-[440px]">
            Smoke crystals cascade from a hand-finished brass frame. Each crystal individually placed —
            no two pieces are identical. Designed for dining rooms that demand conversation.
          </p>
          <a
            href="https://wa.me/919810088181"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-7 px-7 py-3 bg-[#dcc99b] text-[#1c1916] text-[10px] tracking-[3px] rounded-[2px] cursor-pointer hover:bg-[#c8b580] transition-colors duration-300"
          >
            ENQUIRE ON WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
