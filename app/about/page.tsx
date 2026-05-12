"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const WA = "919810088181";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500, start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      setVal(Math.round((1 - Math.pow(1 - t, 3)) * target));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }}>
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* ===== HERO — text left, image right ===== */}
      <section style={{ background: "#f8f5f0", paddingTop: "clamp(100px, 12vw, 140px)", paddingBottom: "clamp(48px, 6vw, 72px)", paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}>
        <div className="about-hero" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }}>
          {/* Left: text */}
          <div>
            <motion.p style={{ fontSize: 10, letterSpacing: 5, color: "#aaa", marginBottom: 16 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              OUR LEGACY
            </motion.p>
            <motion.h1 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 400, color: "#1a1a1a", letterSpacing: "clamp(2px, 0.4vw, 5px)", lineHeight: 1.15, margin: 0 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              We have been lighting and building the quintessence of a new India, since 1948.
            </motion.h1>
            <motion.p style={{ fontSize: "clamp(13px, 1.1vw, 15px)", color: "#6a6050", lineHeight: 1.8, marginTop: 24 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              Ever since our establishment over seven decades ago, we have executed challenging
              projects on a turnkey basis — from design to installation — using materials such as
              wrought iron, stainless steel, brass, glass, and wood. Careful craftsmanship, good
              communication, and promptness has enabled us to work on prestigious jobs for hotels
              like Hyatt Regency, Park Royal, The Imperial, and several clients who demand the best there is.
            </motion.p>
          </div>

          {/* Right: image */}
          <motion.div
            style={{ borderRadius: 8, overflow: "hidden", position: "relative", aspectRatio: "3/4", minHeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/images/about/hk-showroom-1960s.jpg"
              alt="K.L. Khullar, founder, touring the first Delhi Brass showroom in the 1960s"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </motion.div>
        </div>

        <style>{`
          .about-hero { grid-template-columns: 1fr; }
          @media (min-width: 768px) { .about-hero { grid-template-columns: 1.2fr 1fr; } }
        `}</style>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{ background: "#1c1916", padding: "clamp(40px, 5vw, 60px) clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 32, textAlign: "center" }}>
          {[
            { value: 77, suffix: "+", label: "YEARS" },
            { value: 3, suffix: "", label: "GENERATIONS" },
            { value: 3, suffix: "", label: "SHOWROOMS" },
            { value: 1, suffix: "", label: "FACTORY" },
          ].map((s) => (
            <div key={s.label}>
              <p style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#dcc99b", fontWeight: 400, letterSpacing: 2 }}>
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p style={{ fontSize: 10, letterSpacing: 3, color: "#8a8070", marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section style={{ background: "#f8f5f0", padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 10, letterSpacing: 5, color: "#aaa", marginBottom: 12, textAlign: "center" }}>THE JOURNEY</p>
          </FadeIn>

          <div style={{ position: "relative", paddingLeft: "clamp(40px, 5vw, 60px)" }}>
            <div style={{ position: "absolute", left: 12, top: 8, bottom: 8, width: 1, background: "rgba(196,168,114,0.2)" }} />

            {[
              {
                year: "1948",
                title: "The Beginning",
                text: "K.L. Khullar founded Delhi Brass with just Rs 10 and a conviction that Indian hands could produce world-class metalwork. Little did he know that Delhi Brass would stand the test of time, and reserve a major stake of the market in the decades to come.",
                image: null,
              },
              {
                year: "c. 1960s",
                title: "The First Showroom",
                text: "K.L. Khullar giving a tour of the first showroom — a ceiling braided with lamps manufactured at the factory. The MG Road showroom became the go-to destination for luxury lighting in the capital.",
                image: "/images/about/hk-showroom-1960s.jpg",
              },
              {
                year: "c. 1970s",
                title: "The Second Generation",
                text: "Satish Khullar, Jagdish Khullar, and Ranjana Khullar took the reins. A visit from Savita Behen (renowned social worker and former MP of Rajya Sabha) after a tour of the factory marked the company's growing prominence. Major hospitality contracts followed — Hyatt Regency, Park Royal, The Imperial.",
                image: "/images/about/hk-savita-behen-1970s.jpg",
              },
              {
                year: "c. 1980s",
                title: "The Machine Age",
                text: "The factory acquired the highest tonnage of double-action power press in the country — a machine that gave Delhi Brass an edge above every other manufacturer in India. Workers and machinery at work in full swing.",
                image: "/images/about/hk-machinery-1980s.jpg",
              },
              {
                year: "2000s",
                title: "CNC & Laser",
                text: "State-of-the-art CNC machines, laser cutters, and water jet cutters arrived. We can literally cut any material — brass, steel, glass, stone, wood. The range expanded to gates, railings, screens, and furniture.",
                image: null,
              },
              {
                year: "Today",
                title: "Third Generation",
                text: "The grandsons now run the factory in Gurgaon and showrooms across Delhi — including our newest space in Khan Market. Recent projects include M3M Trump Tower, DLF Camellias, Central Park Resorts, and Paras Quartier. The hands haven't changed. The tools have.",
                image: null,
              },
            ].map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.06}>
                <div style={{ marginBottom: "clamp(40px, 5vw, 56px)", position: "relative" }}>
                  <div style={{ position: "absolute", left: "clamp(-40px, -5vw, -60px)", top: 6, width: 8, height: 8, borderRadius: "50%", background: "#c4a872", marginLeft: 8 }} />
                  <p style={{ fontSize: 12, letterSpacing: 3, color: "#c4a872", marginBottom: 4 }}>{item.year}</p>
                  <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 400, letterSpacing: 3, color: "#2a2218", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.8, maxWidth: 600 }}>{item.text}</p>
                  {item.image && (
                    <div style={{ marginTop: 20, borderRadius: 8, overflow: "hidden", position: "relative", maxWidth: 400 }}>
                      <Image src={item.image} alt={`Delhi Brass ${item.year}`} width={400} height={300} style={{ width: "100%", height: "auto", display: "block" }} />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE FACTORY ===== */}
      <section style={{ background: "#1c1916", padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)", color: "#f5f0e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 10, letterSpacing: 5, color: "#dcc99b", marginBottom: 12 }}>THE FACTORY</p>
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, letterSpacing: 4, marginBottom: 16 }}>Where it all happens.</h2>
            <p style={{ fontSize: 14, color: "#8a8070", lineHeight: 1.8, maxWidth: 560, marginBottom: 48 }}>
              All our products are manufactured with special attention to detail and craftsmanship.
              We achieve extraordinary precision in cutting, welding, and grooving several types of
              material with ease using state-of-the-art technology. Our Gurgaon facility houses
              everything under one roof — from the initial design sketch to the final installation.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {[
              { src: "/images/about/lathe.png", label: "PRECISION MACHINING", desc: "Lathe work for brass components" },
              { src: "/images/about/hand-finishing.png", label: "HAND FINISHING", desc: "Every piece inspected and polished by hand" },
              { src: "/images/about/welding.png", label: "WELDING", desc: "Structural integrity meets invisible joints" },
            ].map((img, i) => (
              <FadeIn key={img.label} delay={i * 0.1}>
                <div style={{ borderRadius: 8, overflow: "hidden", position: "relative", aspectRatio: "4/3", background: "#141210" }}>
                  <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} />
                </div>
                <p style={{ fontSize: 11, letterSpacing: 2, color: "#dcc99b", marginTop: 12 }}>{img.label}</p>
                <p style={{ fontSize: 12, color: "#6a6050", marginTop: 2 }}>{img.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MATERIALS ===== */}
      <section style={{ background: "#f5f0e6", padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)", color: "#2a2218" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 10, letterSpacing: 5, color: "#8a7e6e", marginBottom: 12 }}>WHAT WE WORK WITH</p>
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, letterSpacing: 4, marginBottom: 48 }}>We can cut any material.</h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { name: "Brass", desc: "Our signature. Polished, antique, or patina finishes." },
              { name: "Wrought Iron", desc: "Hand-forged scrollwork, structural frames, ornamental pieces." },
              { name: "Stainless Steel", desc: "Mirror polish, satin, or PVD-coated. Indoor and outdoor." },
              { name: "Glass", desc: "Reeded, frosted, clear, and coloured glass for lanterns." },
              { name: "Wood", desc: "Teak, rosewood, and engineered wood for gates and furniture." },
              { name: "Crystal", desc: "Hand-cut and machine-cut crystal for chandeliers." },
            ].map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.06}>
                <div style={{ background: "#ece6da", borderRadius: 12, padding: "clamp(24px, 3vw, 32px)", border: "1px solid rgba(180,160,130,0.15)" }}>
                  <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 18, letterSpacing: 3, fontWeight: 400, marginBottom: 8 }}>{m.name}</h3>
                  <p style={{ fontSize: 13, color: "#8a7e6e", lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section style={{ background: "#1c1916", padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)", color: "#f5f0e8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 10, letterSpacing: 5, color: "#dcc99b", marginBottom: 12 }}>CAPABILITIES</p>
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, letterSpacing: 4, marginBottom: 12 }}>From sketch to installation.</h2>
            <p style={{ fontSize: 14, color: "#8a8070", lineHeight: 1.8, maxWidth: 500, marginBottom: 48 }}>
              Laser cutting, water jet cutting, CNC router — we have the machines. But more importantly, we have the hands.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32 }}>
            {[
              { step: "01", title: "Design", desc: "In-house design team works from your architect's drawings or starts from scratch. Full CAD and specification drawings provided." },
              { step: "02", title: "Manufacture", desc: "CNC laser cutting, water jet cutting, hand forging, casting, and assembly — all under one roof in Gurgaon." },
              { step: "03", title: "Finish", desc: "Polishing, patina, powder coating, PVD coating, gilding, or any custom finish. Hand-inspected before leaving." },
              { step: "04", title: "Install", desc: "Our crew handles delivery and installation across India. Turnkey projects from design to final switch-on." },
            ].map((c, i) => (
              <FadeIn key={c.step} delay={i * 0.08}>
                <div>
                  <span style={{ fontFamily: "var(--font-forum), serif", fontSize: 36, color: "rgba(220,201,155,0.15)", letterSpacing: 2 }}>{c.step}</span>
                  <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 3, fontWeight: 400, marginTop: -8, marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: "#8a8070", lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTELE ===== */}
      <section style={{ background: "#f8f5f0", padding: "clamp(60px, 8vw, 80px) clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 10, letterSpacing: 5, color: "#aaa", textAlign: "center", marginBottom: 12 }}>OUR CLIENTELE</p>
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, letterSpacing: 4, textAlign: "center", color: "#1a1a1a", marginBottom: 48 }}>
              Trusted by the finest.
            </h2>
          </FadeIn>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(24px, 4vw, 56px)", flexWrap: "wrap" }}>
            {[
              { name: "DLF", src: "/images/clients/dlf.png" },
              { name: "The Imperial", src: "/images/clients/the-imperial.jpg" },
              { name: "The Grand", src: "/images/clients/the-grand.png" },
              { name: "Eros Hotel", src: "/images/clients/eros-hotel.jpeg" },
              { name: "Uppal's", src: "/images/clients/uppals.jpg" },
              { name: "GD Goenka", src: "/images/clients/gd-goenka.jpg" },
              { name: "Salcon", src: "/images/clients/salcon.png" },
            ].map((client, i) => (
              <FadeIn key={client.name} delay={i * 0.05}>
                <div style={{ position: "relative", height: 44, width: "clamp(80px, 10vw, 120px)", opacity: 0.45, filter: "grayscale(100%)" }}>
                  <Image src={client.src} alt={client.name} fill style={{ objectFit: "contain" }} sizes="120px" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VISIT US ===== */}
      <section id="showrooms" style={{ background: "#f5f0e6", padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)", color: "#2a2218" }}>
        <FadeIn>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, letterSpacing: 4, textAlign: "center", marginBottom: 48 }}>
              Visit us.
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              <div style={{ background: "#ece6da", borderRadius: 12, padding: "clamp(28px, 3vw, 40px)", border: "1px solid rgba(180,160,130,0.15)" }}>
                <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 4, fontWeight: 400, color: "#2a2218", marginBottom: 12 }}>KHAN MARKET</h3>
                <p style={{ fontSize: 13, color: "#6a6050", lineHeight: 1.6, marginBottom: 4 }}>Shop No. 46, Loknayak Bhawan</p>
                <p style={{ fontSize: 13, color: "#8a7e6e", lineHeight: 1.6, marginBottom: 12 }}>Khan Market, New Delhi — 110003</p>
                <p style={{ fontSize: 13, color: "#6a6050" }}><a href="tel:+911143504242" style={{ color: "inherit" }}>+91-11-4350 4242</a></p>
              </div>

              <div style={{ background: "#ece6da", borderRadius: 12, padding: "clamp(28px, 3vw, 40px)", border: "1px solid rgba(180,160,130,0.15)" }}>
                <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 4, fontWeight: 400, color: "#2a2218", marginBottom: 12 }}>MG ROAD</h3>
                <p style={{ fontSize: 13, color: "#6a6050", lineHeight: 1.6, marginBottom: 4 }}>Plot No. 47 & 49, MG Road</p>
                <p style={{ fontSize: 13, color: "#8a7e6e", lineHeight: 1.6, marginBottom: 12 }}>New Delhi — 110030</p>
                <p style={{ fontSize: 13, color: "#6a6050" }}><a href="tel:+919810088181" style={{ color: "inherit" }}>+91 98100 88181</a></p>
              </div>

              <div style={{ background: "#ece6da", borderRadius: 12, padding: "clamp(28px, 3vw, 40px)", border: "1px solid rgba(180,160,130,0.15)" }}>
                <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 4, fontWeight: 400, color: "#2a2218", marginBottom: 12 }}>FACTORY</h3>
                <p style={{ fontSize: 13, color: "#6a6050", lineHeight: 1.6, marginBottom: 4 }}>4651/279, Daulatabad Road</p>
                <p style={{ fontSize: 13, color: "#8a7e6e", lineHeight: 1.6, marginBottom: 12 }}>Gurgaon (Nr Railway Stn), Haryana</p>
                <p style={{ fontSize: 13, color: "#6a6050" }}><a href="tel:+911242469788" style={{ color: "inherit" }}>+91-124-246 9788</a></p>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi, I'd like to schedule a visit.")}`}
                target="_blank" rel="noopener noreferrer"
                style={{ padding: "14px 32px", background: "#1c1916", color: "#f5f0e8", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none", display: "inline-block" }}
              >
                BOOK A VISIT ON WHATSAPP
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
