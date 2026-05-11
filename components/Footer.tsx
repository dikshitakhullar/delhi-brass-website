"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const footerNav = [
  { label: "Lighting", href: "/lighting" },
  { label: "Gates", href: "/gates" },
  { label: "Railings", href: "/railings" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Trade Programme", href: "/trade" },
];

const colVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      className="border-t"
      style={{
        background: "#1c1916",
        borderColor: "rgba(220,201,155,0.08)",
        padding: "clamp(40px,5vw,64px) clamp(20px,4vw,48px)",
      }}
    >
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8"
      >
        {/* Navigate */}
        <motion.div
          custom={0}
          variants={colVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h4
            className="font-heading font-normal text-[#dcc99b] mb-6"
            style={{ fontSize: 13, letterSpacing: 4 }}
          >
            NAVIGATE
          </h4>
          <ul className="space-y-3">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-[#8a8070] hover:text-[#dcc99b] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Visit Us */}
        <motion.div
          custom={1}
          variants={colVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h4
            className="font-heading font-normal text-[#dcc99b] mb-6"
            style={{ fontSize: 13, letterSpacing: 4 }}
          >
            VISIT US
          </h4>
          <div className="space-y-4 text-[13px]">
            <div>
              <p className="text-[#f0e8dc] mb-1">MG Road, New Delhi</p>
              <p className="text-[#8a8070]">Two showrooms, two doors apart</p>
            </div>
            <div>
              <p className="text-[#f0e8dc] mb-1">Khan Market, New Delhi</p>
              <p className="text-[#8a8070]">Walk in anytime</p>
            </div>
            <div>
              <p className="text-[#f0e8dc] mb-1">Factory</p>
              <p className="text-[#8a8070]">Gurgaon, Haryana</p>
            </div>
          </div>
        </motion.div>

        {/* Get in Touch */}
        <motion.div
          custom={2}
          variants={colVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h4
            className="font-heading font-normal text-[#dcc99b] mb-6"
            style={{ fontSize: 13, letterSpacing: 4 }}
          >
            GET IN TOUCH
          </h4>
          <div className="space-y-3 text-[13px]">
            <p>
              <a
                href="mailto:info@delhibrass.com"
                className="text-[#8a8070] hover:text-[#dcc99b] transition-colors duration-300"
              >
                info@delhibrass.com
              </a>
            </p>
            <p>
              <a
                href="tel:+911234567890"
                className="text-[#8a8070] hover:text-[#dcc99b] transition-colors duration-300"
              >
                +91 123 456 7890
              </a>
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/919810088181"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 text-white text-[10px] tracking-[2px] rounded-[4px] transition-opacity duration-300 hover:opacity-85"
                style={{ background: "#25D366" }}
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1200px] mx-auto mt-12 pt-8 text-center border-t"
        style={{ borderColor: "rgba(220,201,155,0.06)" }}
      >
        <p className="text-[11px] tracking-[3px] text-[#555040]">
          &copy; 2025 DELHI BRASS &middot; EST. 1948
        </p>
      </div>
    </footer>
  );
}
