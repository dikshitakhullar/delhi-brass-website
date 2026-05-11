"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const WA = "919810088181";

/* Animated counter */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(ease * target));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* Fade-in wrapper */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section style={{ background: "#f8f5f0", paddingTop: "clamp(100px, 12vw, 140px)", paddingBottom: "clamp(40px, 5vw, 60px)", paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.p style={{ fontSize: 10, letterSpacing: 5, color: "#aaa", marginBottom: 16 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            OUR STORY
          </motion.p>
          <motion.h1 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#1a1a1a", letterSpacing: "clamp(3px, 0.5vw, 6px)", lineHeight: 1.1, margin: 0, maxWidth: 800 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Three generations.<br />One unbroken thread of craft.
          </motion.h1>
          <motion.p style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#6a6050", lineHeight: 1.8, maxWidth: 560, marginTop: 24 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            Delhi Brass has been forging metal into art since 1948. What started with
            Rs 10 and a single workshop is now one of India&apos;s most respected metalwork
            ateliers — manufacturing chandeliers, gates, railings, and bespoke installations
            for the country&apos;s finest homes, hotels, and developers.
          </motion.p>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{ background: "#1c1916", padding: "clamp(40px, 5vw, 60px) clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 32, textAlign: "center" }}>
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

          {/* Timeline items */}
          <div style={{ position: "relative", paddingLeft: "clamp(40px, 5vw, 60px)" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 12, top: 8, bottom: 8, width: 1, background: "rgba(196,168,114,0.2)" }} />

            {[
              {
                year: "1948",
                title: "The Beginning",
                text: "K.L. Khullar founds Delhi Brass with Rs 10 and a conviction that Indian craftsmen could produce world-class metalwork. The first showroom opens on MG Road, New Delhi — a ceiling braided with lamps manufactured at the factory."
              },
              {
                year: "1960s",
                title: "Growing Reputation",
                text: "Delhi Brass earns its first major hospitality contracts. Work for Hyatt Regency, Park Royal, and The Imperial Hotel establishes the firm as the go-to atelier for luxury metalwork in the capital."
              },
              {
                year: "1970s",
                title: "The Second Generation",
                text: "Satish and Jagdish Khullar join the business. The factory expands. A visit from Savita Behen, renowned social worker and MP, marks the company's growing prominence."
              },
              {
                year: "1980s",
                title: "The Machine Age",
                text: "Delhi Brass acquires the highest-tonnage double-action power press in the country — a machine that gives them an edge above every other manufacturer in India. The factory goes from hand-only to a hybrid of craft and precision engineering."
              },
              {
                year: "2000s",
                title: "CNC & Laser",
                text: "State-of-the-art CNC machines, laser cutters, and water jet cutters arrive. Complex Mughal jali patterns, geometric screens, and designs that were impossible by hand become routine. The range expands: gates, railings, screens, furniture."
              },
              {
                year: "Today",
                title: "Third Generation",
                text: "The grandsons now run the factory in Gurgaon and three showrooms across Delhi. Recent projects include M3M Trump Tower, DLF Camellias, Central Park Resorts, and Paras Quartier. The hands haven't changed. The tools have."
              },
            ].map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.08}>
                <div style={{ marginBottom: "clamp(32px, 4vw, 48px)", position: "relative" }}>
                  {/* Dot */}
                  <div style={{ position: "absolute", left: "clamp(-40px, -5vw, -60px)", top: 6, width: 8, height: 8, borderRadius: "50%", background: "#c4a872", marginLeft: 8 }} />
                  <p style={{ fontSize: 12, letterSpacing: 3, color: "#c4a872", marginBottom: 4 }}>{item.year}</p>
                  <h3 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 400, letterSpacing: 3, color: "#2a2218", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.8, maxWidth: 600 }}>{item.text}</p>
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
              Our Gurgaon facility houses everything under one roof — from the initial design
              sketch to the final installation. Laser cutters, water jets, CNC routers, and the
              country&apos;s highest-tonnage power press work alongside skilled hands that
              have been bending metal for decades.
            </p>
          </FadeIn>

          {/* Factory images */}
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
              { name: "Brass", desc: "Our signature material. Polished, antique, or patina finishes." },
              { name: "Wrought Iron", desc: "Hand-forged scrollwork, structural frames, and ornamental pieces." },
              { name: "Stainless Steel", desc: "Mirror polish, satin, or PVD-coated. Indoor and outdoor." },
              { name: "Glass", desc: "Reeded, frosted, clear, and coloured glass for lanterns and panels." },
              { name: "Wood", desc: "Teak, rosewood, and engineered wood for gate and furniture combinations." },
              { name: "Crystal", desc: "Hand-cut and machine-cut crystal for chandeliers and pendants." },
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
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, letterSpacing: 4, marginBottom: 48 }}>From sketch to installation.</h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32 }}>
            {[
              { step: "01", title: "Design", desc: "In-house design team works from your architect's drawings or starts from scratch. Full CAD and specification drawings provided." },
              { step: "02", title: "Manufacture", desc: "CNC laser cutting, water jet cutting, hand forging, casting, and assembly — all under one roof in Gurgaon." },
              { step: "03", title: "Finish", desc: "Polishing, patina, powder coating, PVD coating, gilding, or any custom finish. Hand-inspected before leaving the factory." },
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

      {/* ===== CTA ===== */}
      <section style={{ background: "#f8f5f0", padding: "clamp(60px, 8vw, 100px) clamp(20px, 4vw, 60px)", color: "#2a2218" }}>
        <FadeIn>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, letterSpacing: 4, marginBottom: 16 }}>
              Visit the factory.
            </h2>
            <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 32px" }}>
              We welcome architects, designers, and homeowners to tour our Gurgaon facility.
              See the machines, meet the craftsmen, and understand how your piece will be made.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi, I'd like to schedule a factory visit.")}`}
                target="_blank" rel="noopener noreferrer"
                style={{ padding: "14px 32px", background: "#1c1916", color: "#f5f0e8", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
              >
                BOOK A FACTORY VISIT
              </a>
              <a
                href={`https://wa.me/${WA}`}
                target="_blank" rel="noopener noreferrer"
                style={{ padding: "14px 32px", border: "1px solid #1c1916", color: "#1c1916", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
              >
                WHATSAPP US
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
