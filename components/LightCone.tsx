"use client";

import { motion, MotionValue } from "framer-motion";

interface LightConeProps {
  opacity?: MotionValue<number> | number;
  scale?: MotionValue<number> | number;
  className?: string;
}

export default function LightCone({
  opacity = 1,
  scale = 1,
  className = "",
}: LightConeProps) {
  return (
    <motion.div
      className={`absolute top-0 left-1/2 -translate-x-1/2 ${className}`}
      style={{
        width: "400px",
        height: "600px",
        background:
          "linear-gradient(180deg, rgba(220,201,155,0.2) 0%, rgba(220,201,155,0.03) 55%, transparent 100%)",
        clipPath: "polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)",
        opacity,
        scale,
      }}
    />
  );
}
