"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const footerNav = [
  { label: "Chandeliers", href: "/chandeliers" },
  { label: "Gates", href: "/gates" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Trade Program", href: "/trade" },
  { label: "Policies", href: "/policies" },
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
              <p className="text-[#8a8070]"><a href="https://maps.app.goo.gl/NFKQc7cScd7Q7akh9?g_st=ic" target="_blank" rel="noopener noreferrer" className="hover:text-[#dcc99b] transition-colors">Shop 46, Loknayak Bhawan, New Delhi — 110003</a></p>
              <p className="text-[#8a8070]"><a href="tel:+911143504242" className="hover:text-[#dcc99b] transition-colors">+91-11-4350 4242</a></p>
            </div>
            <div>
              <p className="text-[#f0e8dc]">MG Road</p>
              <p className="text-[#8a8070]"><a href="https://maps.app.goo.gl/JLQC4beg1f5hyYY88" target="_blank" rel="noopener noreferrer" className="hover:text-[#dcc99b] transition-colors">Plot 47 &amp; 49, MG Road, Sultanpur, New Delhi — 110030</a></p>
              <p className="text-[#8a8070]"><a href="tel:+911144775161" className="hover:text-[#dcc99b] transition-colors">+91-11-4477 5161</a></p>
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
              <a href="tel:+911242469788" className="hover:text-[#dcc99b] transition-colors">+91-9212787172</a>
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
              <a href="tel:+919810088182" className="text-[#8a8070] hover:text-[#dcc99b] transition-colors">+91 98100 88182</a>
            </p>
            <div className="pt-2 flex gap-3 flex-wrap">
              <a
                href="https://wa.me/919810088181?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-[#1c1916] text-[10px] tracking-[2px] rounded-[2px] transition-opacity duration-300 hover:opacity-85"
                style={{ background: "#dcc99b" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WHATSAPP US
              </a>
              <a
                href="https://instagram.com/delhibrass"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-[#8a8070] text-[10px] tracking-[2px] rounded-[2px] border border-[rgba(220,201,155,0.2)] transition-colors duration-300 hover:text-[#dcc99b]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                DELHIBRASS
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
          &copy; {new Date().getFullYear()} DELHI BRASS &middot; EST. 1949
        </p>
      </div>
    </footer>
  );
}
