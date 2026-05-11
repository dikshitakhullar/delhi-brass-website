// MOCKUP D: FINAL — Editorial hero + bespoke studio copy + mobile responsive
import Image from "next/image";

export default function MockupD() {
  return (
    <div style={{ fontFamily: "'Tenor Sans', sans-serif", margin: 0, padding: 0 }}>

      {/* ===== NAV ===== */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px clamp(20px, 4vw, 60px)',
        background: 'rgba(252,250,246,0.9)', backdropFilter: 'blur(20px)',
      }}>
        <span style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(14px, 1.5vw, 18px)', letterSpacing: 8, color: '#1a1a1a' }}>
          DELHI BRASS
        </span>
        {/* Desktop nav — hidden on mobile via media query in globals.css */}
        <div className="nav-links" style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 36px)', alignItems: 'center' }}>
          {['LIGHTING','GATES','RAILINGS','PROJECTS','ABOUT'].map(l => (
            <span key={l} style={{ fontSize: 10, letterSpacing: 3, color: '#999', cursor: 'pointer' }}>{l}</span>
          ))}
          <span style={{
            fontSize: 10, letterSpacing: 3, color: '#1c1916',
            background: '#dcc99b', padding: '8px 20px', cursor: 'pointer',
          }}>
            TRADE
          </span>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        background: '#f8f5f0', padding: 'clamp(16px, 3vw, 0px)',
      }}>
        {/* Hero image */}
        <div style={{
          position: 'absolute',
          top: 'clamp(80px, 12%, 12%)',
          left: 'clamp(16px, 10%, 15%)',
          right: 'clamp(16px, 10%, 15%)',
          bottom: 'clamp(140px, 15%, 12%)',
          borderRadius: 4, overflow: 'hidden',
        }}>
          <Image
            src="/images/mockup/hero-landscape-v1.png"
            alt="Grand foyer with brass chandelier, staircase railing, and wall sconces"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Hero text */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(24px, 5vw, 60px)',
          left: 'clamp(20px, 4vw, 60px)',
          right: 'clamp(20px, 4vw, 60px)',
          zIndex: 2,
        }}>
          <h1 style={{
            fontFamily: "'Forum', serif",
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 400,
            color: '#1a1a1a',
            letterSpacing: 'clamp(3px, 0.5vw, 6px)',
            lineHeight: 1.15,
            margin: 0,
          }}>
            Handcrafted lighting<br />
            &amp; architectural metalwork.
          </h1>
          <p style={{
            fontSize: 'clamp(12px, 1.1vw, 14px)',
            color: '#777',
            letterSpacing: 1.5,
            marginTop: 'clamp(8px, 1.2vw, 14px)',
            maxWidth: 480,
          }}>
            Bespoke chandeliers, gates, railings &amp; wall lights — designed and manufactured in-house since 1948.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 'clamp(16px, 2vw, 28px)', flexWrap: 'wrap' }}>
            <span style={{
              padding: 'clamp(10px, 1.2vw, 14px) clamp(20px, 2.5vw, 32px)',
              background: '#1c1916', color: '#f5f0e8',
              fontSize: 'clamp(9px, 0.8vw, 10px)', letterSpacing: 3, cursor: 'pointer', borderRadius: 2,
            }}>
              EXPLORE COLLECTIONS
            </span>
            <span style={{
              padding: 'clamp(10px, 1.2vw, 14px) clamp(20px, 2.5vw, 32px)',
              border: '1px solid #1c1916', color: '#1c1916',
              fontSize: 'clamp(9px, 0.8vw, 10px)', letterSpacing: 3, cursor: 'pointer', borderRadius: 2,
            }}>
              WHATSAPP US
            </span>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — Shop by Category ===== */}
      <section style={{ background: '#fcfaf6', padding: 'clamp(60px, 10vw, 140px) clamp(20px, 4vw, 60px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
            <p style={{ fontSize: 10, letterSpacing: 5, color: '#aaa', marginBottom: 12 }}>WHAT WE MAKE</p>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(24px, 2.5vw, 32px)', letterSpacing: 'clamp(3px, 0.5vw, 6px)', fontWeight: 400, color: '#1a1a1a' }}>
              Four disciplines, one craft.
            </h2>
            <p style={{ fontSize: 13, color: '#888', marginTop: 12, maxWidth: 440, margin: '12px auto 0' }}>
              Every piece made to order in our Gurgaon factory. Brass, steel, glass, wood — we work with all of them.
            </p>
          </div>

          {/* Desktop: asymmetric grid / Mobile: stacked */}
          <div className="category-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {/* LIGHTING */}
            <div style={{
              gridRow: 'span 2', borderRadius: 4, position: 'relative', overflow: 'hidden',
              cursor: 'pointer', minHeight: 'clamp(300px, 50vw, 620px)',
            }}>
              <Image src="/images/mockup/brass-petals.png" alt="Brass Petal pendants" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 28, zIndex: 2 }}>
                <span style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(16px, 1.5vw, 20px)', letterSpacing: 4, color: '#fff' }}>LIGHTING</span>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 6 }}>Chandeliers, pendants &amp; wall lights</p>
              </div>
            </div>

            {/* GATES */}
            <div style={{ borderRadius: 4, position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: 'clamp(200px, 25vw, 300px)' }}>
              <Image src="/images/mockup/gate.jpg" alt="Steel and wood gate" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, zIndex: 2 }}>
                <span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 4, color: '#fff' }}>GATES</span>
              </div>
            </div>

            {/* RAILINGS */}
            <div style={{ borderRadius: 4, position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: 'clamp(200px, 25vw, 300px)' }}>
              <Image src="/images/mockup/railing.jpg" alt="Wrought iron balcony railing" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, zIndex: 2 }}>
                <span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 4, color: '#fff' }}>RAILINGS</span>
              </div>
            </div>

            {/* BESPOKE */}
            <div style={{ gridColumn: 'span 2', borderRadius: 4, position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: 'clamp(200px, 25vw, 300px)' }}>
              <Image src="/images/mockup/brass-bough.png" alt="Brass Bough sculptural chandelier" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 24, left: 24, zIndex: 2 }}>
                <span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 4, color: '#fff' }}>BESPOKE</span>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Custom designs, any material, any scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 — Featured Collection ===== */}
      <section style={{ background: '#1c1916', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', color: '#f5f0e8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'center' }}>
          <div style={{ aspectRatio: '3/4', borderRadius: 8, position: 'relative', overflow: 'hidden', minHeight: 400 }}>
            <Image src="/images/mockup/noir-cascade.png" alt="Noir Crystal Cascade chandelier" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: 10, letterSpacing: 4, color: '#dcc99b', marginBottom: 12 }}>FEATURED PIECE</p>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: 4, fontWeight: 400, lineHeight: 1.2, marginBottom: 24 }}>
              Noir Crystal Cascade
            </h2>
            <p style={{ fontSize: 14, color: '#8a8070', lineHeight: 1.8, maxWidth: 440 }}>
              Smoke crystals cascade from a hand-finished brass frame. Each crystal is individually placed —
              no two pieces are identical. Designed for dining rooms that demand conversation.
            </p>
            <p style={{ fontSize: 13, color: '#6a6050', marginTop: 16 }}>
              Starting enquiry via WhatsApp. Custom sizes available.
            </p>
            <span style={{
              display: 'inline-block', marginTop: 28, padding: '12px 28px',
              background: '#dcc99b', color: '#1c1916',
              fontSize: 10, letterSpacing: 3, cursor: 'pointer', borderRadius: 2,
            }}>
              ENQUIRE ON WHATSAPP
            </span>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — Heritage ===== */}
      <section style={{ background: '#f5f0e6', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', color: '#2a2218' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 10, letterSpacing: 4, color: '#8a7e6e', marginBottom: 12 }}>OUR STUDIO</p>
          <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(64px, 8vw, 96px)', letterSpacing: 6, fontWeight: 400, color: 'rgba(42,34,24,0.08)', lineHeight: 1 }}>
            1948
          </h2>
          <h3 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(22px, 2.2vw, 28px)', letterSpacing: 5, fontWeight: 400, marginTop: -20, position: 'relative', zIndex: 2 }}>
            Three Generations. One Standard.
          </h3>
          <p style={{ fontSize: 14, color: '#6a6050', lineHeight: 1.8, maxWidth: 540, margin: '24px auto 0' }}>
            K.L. Khullar founded Delhi Brass with Rs 10 and a conviction that Indian hands could
            produce world-class metalwork. Seventy-seven years later, his grandsons run the same factory
            in Gurgaon — now equipped with CNC laser cutters, water jets, and the country&apos;s highest-tonnage
            power press. The hands haven&apos;t changed. The tools have.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 5vw, 64px)', marginTop: 48, flexWrap: 'wrap' }}>
            {[
              { year: '1948', label: 'FOUNDED' },
              { year: '1980s', label: 'CNC & LASER' },
              { year: 'TODAY', label: '3RD GENERATION' },
            ].map(t => (
              <div key={t.year} style={{ textAlign: 'center' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#c4a872', margin: '0 auto 12px' }} />
                <span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 3 }}>{t.year}</span>
                <p style={{ fontSize: 10, letterSpacing: 2, color: '#8a7e6e', marginTop: 4 }}>{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — Projects ===== */}
      <section style={{ background: '#1c1916', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', color: '#f5f0e8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 10, letterSpacing: 4, color: '#dcc99b', marginBottom: 12 }}>RECENT INSTALLATIONS</p>
          <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(24px, 2.5vw, 32px)', letterSpacing: 5, fontWeight: 400, marginBottom: 16 }}>
            Trusted by India&apos;s Finest Developers
          </h2>
          <p style={{ fontSize: 13, color: '#6a6050', maxWidth: 500, marginBottom: 48 }}>
            Turnkey projects from design to installation. Chandeliers, railings, gates, and custom metalwork for luxury residences and commercial spaces.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { name: 'M3M Trump Tower', type: 'Foyer Chandelier', loc: 'Gurgaon, 2024' },
              { name: 'DLF Camellias', type: 'Lobby Railing', loc: 'Gurgaon, 2023' },
              { name: 'Central Park Resorts', type: 'Clubhouse Pendants', loc: 'Gurgaon, 2023' },
              { name: 'Paras Quartier', type: 'Balcony Railings', loc: 'Gurgaon, 2024' },
            ].map(p => (
              <div key={p.name} style={{ cursor: 'pointer' }}>
                <div style={{
                  aspectRatio: '4/3', background: '#141210', borderRadius: 8,
                  border: '1px solid rgba(220,201,155,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(220,201,155,0.12)', fontSize: 10, letterSpacing: 2,
                }}>
                  [ PROJECT PHOTO ]
                </div>
                <h3 style={{ fontFamily: "'Forum', serif", fontSize: 15, letterSpacing: 2, marginTop: 12 }}>{p.name}</h3>
                <p style={{ fontSize: 11, color: '#8a8070', marginTop: 4 }}>{p.type}</p>
                <p style={{ fontSize: 10, color: '#555040', marginTop: 2 }}>{p.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — Showrooms + Trade ===== */}
      <section style={{ background: '#f5f0e6', padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', color: '#2a2218' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(24px, 2.5vw, 32px)', letterSpacing: 5, fontWeight: 400 }}>
              Three Doors in Delhi
            </h2>
            <p style={{ fontSize: 14, color: '#8a7e6e', marginTop: 8 }}>
              Walk in, or book a private viewing.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 80 }}>
            {[
              { name: 'MG ROAD', desc: 'Two showrooms, two doors apart. Our original home since the 1960s.' },
              { name: 'KHAN MARKET', desc: 'Our newest space in the heart of New Delhi.' },
            ].map(s => (
              <div key={s.name} style={{
                background: '#ece6da', borderRadius: 12, padding: 'clamp(28px, 3vw, 40px) clamp(20px, 2.5vw, 32px)', textAlign: 'center',
                border: '1px solid rgba(180,160,130,0.15)',
              }}>
                <h3 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(16px, 1.5vw, 20px)', letterSpacing: 4, color: '#2a2218', fontWeight: 400, marginBottom: 12 }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: 13, color: '#8a7e6e', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Trade CTA */}
          <div style={{
            background: '#1c1916', borderRadius: 12, padding: 'clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px)', textAlign: 'center',
          }}>
            <p style={{ fontSize: 10, letterSpacing: 4, color: '#dcc99b', marginBottom: 12 }}>FOR DESIGNERS &amp; ARCHITECTS</p>
            <h3 style={{ fontFamily: "'Forum', serif", fontSize: 'clamp(22px, 2.2vw, 28px)', letterSpacing: 4, fontWeight: 400, color: '#f5f0e8', marginBottom: 16 }}>
              Working on a project?
            </h3>
            <p style={{ fontSize: 14, color: '#8a8070', lineHeight: 1.7, maxWidth: 460, margin: '0 auto 28px' }}>
              Trade pricing, specification drawings, factory visits, and a private lookbook.
              We&apos;ve delivered for M3M, DLF, Central Park, and Paras Buildtech.
            </p>
            <span style={{
              display: 'inline-block', padding: '14px 36px',
              background: '#dcc99b', color: '#1c1916',
              fontSize: 11, letterSpacing: 3, cursor: 'pointer', borderRadius: 2,
            }}>
              OPEN THE TRADE PROGRAMME &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
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
            <p style={{ fontSize: 13, color: '#f0e8dc', marginBottom: 4 }}>Factory — Gurgaon</p>
            <p style={{ fontSize: 13, color: '#8a8070' }}>By appointment</p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Forum', serif", fontSize: 13, letterSpacing: 4, color: '#dcc99b', marginBottom: 24, fontWeight: 400 }}>GET IN TOUCH</h4>
            <p style={{ fontSize: 13, color: '#8a8070', marginBottom: 12 }}>info@delhibrass.com</p>
            <p style={{ fontSize: 13, color: '#8a8070', marginBottom: 16 }}>+91 123 456 7890</p>
            <span style={{
              display: 'inline-block', padding: '10px 24px', marginBottom: 20,
              background: '#25D366', color: '#fff',
              fontSize: 10, letterSpacing: 2, cursor: 'pointer', borderRadius: 4,
            }}>
              WHATSAPP
            </span>
            <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
              <span style={{ fontSize: 11, letterSpacing: 2, color: '#8a8070', cursor: 'pointer' }}>INSTAGRAM</span>
              <span style={{ fontSize: 11, letterSpacing: 2, color: '#8a8070', cursor: 'pointer' }}>FACEBOOK</span>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '48px auto 0', paddingTop: 32, borderTop: '1px solid rgba(220,201,155,0.06)', textAlign: 'center' }}>
          <p style={{ fontSize: 11, letterSpacing: 3, color: '#555040' }}>&copy; 2025 DELHI BRASS &middot; EST. 1948</p>
        </div>
      </footer>
    </div>
  );
}
