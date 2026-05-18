"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const startVal = 0;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(startVal + eased * (target - startVal)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, target, duration]);

  return value;
}

export default function HeritageSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const year = useCountUp(1949, 1.8, inView);

  return (
    <section className="bg-[#f5f0e6] py-[clamp(60px,8vw,100px)] px-[clamp(20px,4vw,48px)] text-[#2a2218]">
      <div ref={ref} className="max-w-[1200px] mx-auto text-center">
        <p className="text-[10px] tracking-[4px] text-[#8a7e6e] mb-3">OUR STUDIO</p>

        {/* Big faint year — counter animates 0 → 1949 */}
        <h2
          className="font-heading font-normal leading-none"
          style={{
            fontSize: "clamp(64px, 8vw, 96px)",
            letterSpacing: 6,
            color: "rgba(42,34,24,0.08)",
          }}
          aria-label="Founded in 1949"
        >
          {year}
        </h2>

        {/* Heading sits on top of the number */}
        <h3
          className="font-heading font-normal relative z-10 text-[#2a2218]"
          style={{
            fontSize: "clamp(22px, 2.2vw, 28px)",
            letterSpacing: 5,
            marginTop: -20,
          }}
        >
          Four Generations. One Standard.
        </h3>

        <p className="text-[14px] text-[#6a6050] leading-[1.8] max-w-[540px] mx-auto mt-6">
          KL Khullar founded Delhi Brass with Rs&nbsp;10 and a conviction that Indian hands could
          produce world-class metalwork. Seventy-seven years later, four generations of the family
          run the same factory in Gurgaon — now equipped with CNC lasers, water jets, and specialized machinery.
        </p>
      </div>
    </section>
  );
}
