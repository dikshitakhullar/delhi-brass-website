"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const footerNav = [
  { label: "Chandeliers", href: "/chandeliers" },
  { label: "Gates", href: "/gates" },
  { label: "About", href: "/about" },
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
        className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Navigate */}
        <motion.div custom={0} variants={colVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <h4 className="font-heading font-normal text-[#dcc99b] mb-6" style={{ fontSize: 13, letterSpacing: 4 }}>NAVIGATE</h4>
          <ul className="space-y-3">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[13px] text-[#8a8070] hover:text-[#dcc99b] transition-colors duration-300">{link.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Showrooms */}
        <motion.div custom={1} variants={colVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <h4 className="font-heading font-normal text-[#dcc99b] mb-6" style={{ fontSize: 13, letterSpacing: 4 }}>SHOWROOMS</h4>
          <div className="space-y-4 text-[13px]">
            <div>
              <p className="text-[#f0e8dc]">Khan Market</p>
              <p className="text-[#8a8070]">Shop 46, Loknayak Bhawan, New Delhi — 110003</p>
              <p className="text-[#8a8070]"><a href="tel:+911143504242" className="hover:text-[#dcc99b] transition-colors">+91-11-4350 4242</a></p>
            </div>
            <div>
              <p className="text-[#f0e8dc]">MG Road</p>
              <p className="text-[#8a8070]">Plot 47 & 49, MG Road, New Delhi — 110030</p>
            </div>
          </div>
        </motion.div>

        {/* Factory */}
        <motion.div custom={2} variants={colVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <h4 className="font-heading font-normal text-[#dcc99b] mb-6" style={{ fontSize: 13, letterSpacing: 4 }}>FACTORY</h4>
          <div className="space-y-1 text-[13px]">
            <p className="text-[#f0e8dc]">4651/279, Daulatabad Road</p>
            <p className="text-[#8a8070]">Gurgaon (Near Railway Station), Haryana</p>
            <p className="text-[#8a8070] mt-2">
              <a href="tel:+911242469788" className="hover:text-[#dcc99b] transition-colors">+91-124-246 9788</a>
            </p>
          </div>
        </motion.div>

        {/* Get in Touch */}
        <motion.div custom={3} variants={colVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <h4 className="font-heading font-normal text-[#dcc99b] mb-6" style={{ fontSize: 13, letterSpacing: 4 }}>GET IN TOUCH</h4>
          <div className="space-y-3 text-[13px]">
            <p>
              <a href="tel:+919810088181" className="text-[#f0e8dc] hover:text-[#dcc99b] transition-colors">+91 98100 88181</a>
            </p>
            <p>
              <a href="tel:+919810005225" className="text-[#8a8070] hover:text-[#dcc99b] transition-colors">+91 98100 05225</a>
            </p>
            <p>
              <a href="tel:+919871088181" className="text-[#8a8070] hover:text-[#dcc99b] transition-colors">+91 98710 88181</a>
            </p>
            <div className="pt-2 flex gap-3 flex-wrap">
              <a
                href="https://wa.me/919810088181?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-[#1c1916] text-[10px] tracking-[2px] rounded-[2px] transition-opacity duration-300 hover:opacity-85"
                style={{ background: "#dcc99b" }}
              >
                WHATSAPP US
              </a>
              <a
                href="https://instagram.com/delhibrass"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-[#8a8070] text-[10px] tracking-[2px] rounded-[2px] border border-[rgba(220,201,155,0.2)] transition-colors duration-300 hover:text-[#dcc99b]"
              >
                @DELHIBRASS
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
