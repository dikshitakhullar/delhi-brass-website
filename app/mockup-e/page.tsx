"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function MockupE() {
  const [phase, setPhase] = useState(0);
  // 0 = title card (DELHI BRASS centered on cream)
  // 1 = title slides up, reveals editorial page underneath
  // 2 = hero image + text animate in
  // 3 = done

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("db-intro-seen");
    if (seen) {
      setPhase(3);
      return;
    }

    const timers = [
      setTimeout(() => setPhase(1), 1400),
      setTimeout(() => setPhase(2), 2200),
      setTimeout(() => {
        setPhase(3);
        sessionStorage.setItem("db-intro-seen", "1");
      }, 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const skip = phase === 3;

  return (
    <div style={{ fontFamily: "'Tenor Sans', sans-serif", margin: 0, padding: 0, background: '#f8f5f0' }}>

      {/* ===== TITLE CARD OVERLAY — slides up like Mara ===== */}
      <AnimatePresence>
        {phase < 1 && !skip && (
          <motion.div
            key="title-card"
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: '#f8f5f0',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.span
              style={{
                fontFamily: "'Forum', serif",
                fontSize: 'clamp(20px, 3vw, 36px)',
                letterSpacing: 'clamp(8px, 2vw, 14px)',
                color: '#1a1a1a',
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              DELHI BRASS
            </motion.span>
            <motion.span
              style={{ fontSize: 10, letterSpacing: 6, color: '#8a7e6e', marginTop: 8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              EST. 1948
            </motion.span>

            {/* Subtle gold line */}
            <motion.div
              style={{
                position: 'absolute', top: 'calc(50% + 32px)', height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(196,168,114,0.25), transparent)',
              }}
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== NAV ===== */}
      <motion.nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px clamp(20px, 4vw, 60px)',
          background: 'rgba(252,250,246,0.9)', backdropFilter: 'blur(20px)',
        }}
        initial={skip ? {} : { opacity: 0 }}
        animate={phase >= 1 ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(14px, 1.5vw, 18px)', letterSpacing: 8, color: '#1a1a1a' }}>
          DELHI BRASS
        </span>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 36px)', alignItems: 'center' }}>
          {['LIGHTING','GATES','RAILINGS','PROJECTS','ABOUT'].map(l => (
            <span key={l} style={{ fontSize: 10, letterSpacing: 3, color: '#999', cursor: 'pointer' }}>{l}</span>
          ))}
          <span style={{ fontSize: 10, letterSpacing: 3, color: '#1c1916', background: '#dcc99b', padding: '8px 20px', cursor: 'pointer' }}>
            TRADE
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: 5, padding: 4,
          }}
        >
          <motion.span style={{ display: 'block', width: 24, height: 1.5, background: '#1a1a1a', borderRadius: 1 }}
            animate={mobileMenuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} />
          <motion.span style={{ display: 'block', width: 24, height: 1.5, background: '#1a1a1a', borderRadius: 1 }}
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} />
          <motion.span style={{ display: 'block', width: 24, height: 1.5, background: '#1a1a1a', borderRadius: 1 }}
            animate={mobileMenuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} />
        </button>
      </motion.nav>

      {/* Mobile slide-in nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '80%', maxWidth: 320,
              zIndex: 150, background: '#f8f5f0', padding: '100px 40px 40px',
              borderLeft: '1px solid rgba(180,160,130,0.15)',
              display: 'flex', flexDirection: 'column', gap: 28,
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {['LIGHTING','GATES','RAILINGS','PROJECTS','ABOUT','TRADE PROGRAMME'].map((l, i) => (
              <motion.span
                key={l}
                style={{ fontFamily: "'Forum', serif", fontSize: 18, letterSpacing: 5, color: '#2a2218', cursor: 'pointer' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {l}
              </motion.span>
            ))}
            <div style={{ marginTop: 'auto' }}>
              <span style={{ display: 'inline-block', padding: '12px 24px', background: '#25D366', color: '#fff', fontSize: 10, letterSpacing: 2, borderRadius: 4, cursor: 'pointer' }}>
                WHATSAPP US
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            style={{ position: 'fixed', inset: 0, zIndex: 140, background: 'rgba(0,0,0,0.2)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ===== HERO — Text on top, image below, dim-to-bright ===== */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        background: '#f8f5f0',
        display: 'flex', flexDirection: 'column',
        paddingTop: 'clamp(70px, 8vw, 80px)',
      }}>
        {/* Top: headline + CTAs on cream */}
        <motion.div
          style={{
            padding: 'clamp(20px, 3vw, 40px) clamp(20px, 4vw, 60px) clamp(16px, 2vw, 28px)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 16,
          }}
          initial={skip ? {} : { opacity: 0, y: 16 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ maxWidth: 620 }}>
            <h1 style={{
              fontFamily: "'Forum', serif",
              fontSize: 'clamp(26px, 3.5vw, 48px)',
              fontWeight: 400, color: '#1a1a1a',
              letterSpacing: 'clamp(2px, 0.4vw, 5px)',
              lineHeight: 1.15, margin: 0,
            }}>
              Handcrafted metalwork.
            </h1>
            <p style={{
              fontSize: 'clamp(12px, 1vw, 14px)', color: '#888',
              letterSpacing: 1, marginTop: 'clamp(6px, 0.8vw, 10px)', maxWidth: 460,
            }}>
              Bespoke chandeliers, gates, railings &amp; wall lights — designed and manufactured in-house since 1948.
            </p>
          </div>

          <motion.div
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            initial={skip ? {} : { opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span style={{
              padding: '14px 32px', background: '#1c1916', color: '#f5f0e8',
              fontSize: 10, letterSpacing: 3, cursor: 'pointer', borderRadius: 2,
            }}>
              EXPLORE NOW
            </span>
            <span style={{
              padding: '14px 32px', border: '1px solid #1c1916', color: '#1c1916',
              fontSize: 10, letterSpacing: 3, cursor: 'pointer', borderRadius: 2,
            }}>
              WHATSAPP US
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom: hero image — clips open + dims to bright */}
        <motion.div
          style={{
            position: 'relative',
            margin: '0 clamp(16px, 4vw, 60px) clamp(16px, 2vw, 24px)',
            borderRadius: 4, overflow: 'hidden',
            flex: '1 1 0',
            minHeight: 'clamp(280px, 55vh, 65vh)',
          }}
          initial={skip ? {} : { clipPath: 'inset(40% 10% 40% 10%)' }}
          animate={phase >= 1 ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          <Image
            src="/images/mockup/hero-landscape-v2.png"
            alt="Grand lobby with crystal chandelier, wrought iron railing, and wall sconces"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          {/* Dim overlay — fades out to simulate lights turning on */}
          <motion.div
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'rgba(0,0,0,0.45)',
            }}
            initial={skip ? { opacity: 0 } : { opacity: 1 }}
            animate={phase >= 2 ? { opacity: 0 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </motion.div>
      </section>

      {/* ===== REST OF PAGE ===== */}

      {/* Categories */}
      <section style={{ background: '#fcfaf6', padding: 'clamp(60px, 10vw, 140px) clamp(20px, 4vw, 60px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
            <p style={{ fontSize: 10, letterSpacing: 5, color: '#aaa', marginBottom: 12 }}>WHAT WE MAKE</p>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(24px, 2.5vw, 32px)', letterSpacing: 'clamp(3px, 0.5vw, 6px)', fontWeight: 400, color: '#1a1a1a' }}>
              Four disciplines, one craft.
            </h2>
            <p style={{ fontSize: 13, color: '#888', maxWidth: 440, margin: '12px auto 0' }}>
              Every piece made to order in our Gurgaon factory. Brass, steel, glass, wood — we work with all of them.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            <div style={{ gridRow: 'span 2', borderRadius: 4, position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: 'clamp(300px, 50vw, 620px)' }}>
              <Image src="/images/mockup/brass-petals.png" alt="Brass Petal pendants" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 28, zIndex: 2 }}>
                <span style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(16px, 1.5vw, 20px)', letterSpacing: 4, color: '#fff' }}>LIGHTING</span>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 6 }}>Chandeliers, pendants &amp; wall lights</p>
              </div>
            </div>
            <div style={{ borderRadius: 4, position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: 'clamp(200px, 25vw, 300px)' }}>
              <Image src="/images/mockup/gate-modern.png" alt="Modern wood and steel gate" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, zIndex: 2 }}><span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 4, color: '#fff' }}>GATES</span></div>
            </div>
            <div style={{ borderRadius: 4, position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: 'clamp(200px, 25vw, 300px)' }}>
              <Image src="/images/mockup/railing-brass.jpg" alt="Ornate wrought iron staircase railing" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, zIndex: 2 }}><span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 4, color: '#fff' }}>RAILINGS</span></div>
            </div>
            <div style={{ gridColumn: 'span 2', borderRadius: 4, position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: 'clamp(200px, 25vw, 300px)' }}>
              <Image src="/images/mockup/brass-bough.png" alt="Bespoke" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, zIndex: 2 }}>
                <span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 4, color: '#fff' }}>BESPOKE</span>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Custom designs, any material, any scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section style={{ background: '#1c1916', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', color: '#f5f0e8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'center' }}>
          <div style={{ aspectRatio: '3/4', borderRadius: 8, position: 'relative', overflow: 'hidden', minHeight: 400 }}>
            <Image src="/images/mockup/noir-cascade.png" alt="Noir Crystal Cascade" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: 10, letterSpacing: 4, color: '#dcc99b', marginBottom: 12 }}>FEATURED PIECE</p>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: 4, fontWeight: 400, lineHeight: 1.2, marginBottom: 24 }}>Noir Crystal Cascade</h2>
            <p style={{ fontSize: 14, color: '#8a8070', lineHeight: 1.8, maxWidth: 440 }}>
              Smoke crystals cascade from a hand-finished brass frame. Each crystal individually placed —
              no two pieces are identical. Designed for dining rooms that demand conversation.
            </p>
            <span style={{ display: 'inline-block', marginTop: 28, padding: '12px 28px', background: '#dcc99b', color: '#1c1916', fontSize: 10, letterSpacing: 3, cursor: 'pointer', borderRadius: 2 }}>
              ENQUIRE ON WHATSAPP
            </span>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section style={{ background: '#f5f0e6', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', color: '#2a2218' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 10, letterSpacing: 4, color: '#8a7e6e', marginBottom: 12 }}>OUR STUDIO</p>
          <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(64px, 8vw, 96px)', letterSpacing: 6, fontWeight: 400, color: 'rgba(42,34,24,0.08)', lineHeight: 1 }}>1948</h2>
          <h3 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(22px, 2.2vw, 28px)', letterSpacing: 5, fontWeight: 400, marginTop: -20, position: 'relative', zIndex: 2 }}>Three Generations. One Standard.</h3>
          <p style={{ fontSize: 14, color: '#6a6050', lineHeight: 1.8, maxWidth: 540, margin: '24px auto 0' }}>
            K.L. Khullar founded Delhi Brass with Rs 10 and a conviction that Indian hands could
            produce world-class metalwork. Seventy-seven years later, his grandsons run the same factory
            in Gurgaon — now equipped with CNC laser cutters, water jets, and the country&apos;s highest-tonnage
            power press.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section style={{ background: '#1c1916', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', color: '#f5f0e8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 10, letterSpacing: 4, color: '#dcc99b', marginBottom: 12 }}>RECENT INSTALLATIONS</p>
          <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(24px, 2.5vw, 32px)', letterSpacing: 5, fontWeight: 400, marginBottom: 48 }}>Trusted by India&apos;s Finest Developers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { name: 'M3M Trump Tower', type: 'Foyer Chandelier', loc: 'Gurgaon, 2024' },
              { name: 'DLF Camellias', type: 'Lobby Railing', loc: 'Gurgaon, 2023' },
              { name: 'Central Park Resorts', type: 'Clubhouse Pendants', loc: 'Gurgaon, 2023' },
              { name: 'Paras Quartier', type: 'Balcony Railings', loc: 'Gurgaon, 2024' },
            ].map(p => (
              <div key={p.name}>
                <div style={{ aspectRatio: '4/3', background: '#141210', borderRadius: 8, border: '1px solid rgba(220,201,155,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(220,201,155,0.12)', fontSize: 10 }}>[ PROJECT PHOTO ]</div>
                <h3 style={{ fontFamily: "'Forum', serif", fontSize: 15, letterSpacing: 2, marginTop: 12 }}>{p.name}</h3>
                <p style={{ fontSize: 11, color: '#8a8070', marginTop: 4 }}>{p.type}</p>
                <p style={{ fontSize: 10, color: '#555040', marginTop: 2 }}>{p.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showrooms + Trade */}
      <section style={{ background: '#f5f0e6', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', color: '#2a2218' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(24px, 2.5vw, 32px)', letterSpacing: 5, fontWeight: 400 }}>Three Doors in Delhi</h2>
            <p style={{ fontSize: 14, color: '#8a7e6e', marginTop: 8 }}>Walk in, or book a private viewing.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 80 }}>
            {[
              { name: 'MG ROAD', desc: 'Two showrooms, two doors apart. Our original home since the 1960s.' },
              { name: 'KHAN MARKET', desc: 'Our newest space in the heart of New Delhi.' },
            ].map(s => (
              <div key={s.name} style={{ background: '#ece6da', borderRadius: 12, padding: 'clamp(28px, 3vw, 40px)', textAlign: 'center', border: '1px solid rgba(180,160,130,0.15)' }}>
                <h3 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(16px, 1.5vw, 20px)', letterSpacing: 4, color: '#2a2218', fontWeight: 400, marginBottom: 12 }}>{s.name}</h3>
                <p style={{ fontSize: 13, color: '#8a7e6e', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#1c1916', borderRadius: 12, padding: 'clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px)', textAlign: 'center' }}>
            <p style={{ fontSize: 10, letterSpacing: 4, color: '#dcc99b', marginBottom: 12 }}>FOR DESIGNERS &amp; ARCHITECTS</p>
            <h3 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(22px, 2.2vw, 28px)', letterSpacing: 4, fontWeight: 400, color: '#f5f0e8', marginBottom: 16 }}>Working on a project?</h3>
            <p style={{ fontSize: 14, color: '#8a8070', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 28px' }}>Trade pricing, specification drawings, factory visits, and a private lookbook.</p>
            <span style={{ display: 'inline-block', padding: '14px 36px', background: '#dcc99b', color: '#1c1916', fontSize: 11, letterSpacing: 3, cursor: 'pointer', borderRadius: 2 }}>OPEN THE TRADE PROGRAMME &rarr;</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1c1916', borderTop: '1px solid rgba(220,201,155,0.08)', padding: 'clamp(40px, 5vw, 64px) clamp(20px, 4vw, 48px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
          <div>
            <h4 style={{ fontFamily: "'Forum', serif", fontSize: 13, letterSpacing: 4, color: '#dcc99b', marginBottom: 24, fontWeight: 400 }}>NAVIGATE</h4>
            {['Lighting','Gates','Railings','Projects','About','Trade Programme'].map(l => (
              <p key={l} style={{ fontSize: 13, color: '#8a8070', marginBottom: 12, cursor: 'pointer' }}>{l}</p>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: "'Forum', serif", fontSize: 13, letterSpacing: 4, color: '#dcc99b', marginBottom: 24, fontWeight: 400 }}>VISIT US</h4>
            <p style={{ fontSize: 13, color: '#f0e8dc', marginBottom: 4 }}>MG Road, New Delhi</p>
            <p style={{ fontSize: 13, color: '#8a8070', marginBottom: 16 }}>Two showrooms, two doors apart</p>
            <p style={{ fontSize: 13, color: '#f0e8dc', marginBottom: 4 }}>Khan Market, New Delhi</p>
            <p style={{ fontSize: 13, color: '#8a8070', marginBottom: 16 }}>Walk in anytime</p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Forum', serif", fontSize: 13, letterSpacing: 4, color: '#dcc99b', marginBottom: 24, fontWeight: 400 }}>GET IN TOUCH</h4>
            <p style={{ fontSize: 13, color: '#8a8070', marginBottom: 12 }}>info@delhibrass.com</p>
            <p style={{ fontSize: 13, color: '#8a8070', marginBottom: 16 }}>+91 123 456 7890</p>
            <span style={{ display: 'inline-block', padding: '10px 24px', background: '#25D366', color: '#fff', fontSize: 10, letterSpacing: 2, borderRadius: 4, cursor: 'pointer' }}>WHATSAPP</span>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '48px auto 0', paddingTop: 32, borderTop: '1px solid rgba(220,201,155,0.06)', textAlign: 'center' }}>
          <p style={{ fontSize: 11, letterSpacing: 3, color: '#555040' }}>&copy; 2025 DELHI BRASS &middot; EST. 1948</p>
        </div>
      </footer>

      {/* CSS for mobile responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
}
